#!/usr/bin/env node
/**
 * postman-to-n8n.js
 *
 * Converts a Postman collection to endpoints.ts for the n8n community node.
 * All user-facing strings (endpoint names, descriptions, category names) are
 * automatically translated to English via the DeepL API.
 *
 * Requirements:
 *   DEEPL_API_KEY environment variable (free tier at https://www.deepl.com/pro-api)
 *
 * Usage:
 *   node scripts/postman-to-n8n.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const DEEPL_FREE    = DEEPL_API_KEY && DEEPL_API_KEY.endsWith(':fx');
const DEEPL_HOST    = DEEPL_FREE
  ? 'api-free.deepl.com'
  : 'api.deepl.com';

const INPUT  = path.join(__dirname, 'postman_datacube.json');
const OUTPUT = path.join(__dirname, '../nodes/Apiconsultasdeveiculos/endpoints.ts');

// ---------------------------------------------------------------------------
// Acronym casing fix applied to every displayName after toDisplayName()
// ---------------------------------------------------------------------------
const ACRONYM_FIXES = [
  [/\bCpf\b/g,              'CPF'],
  [/\bCnpj\b/g,             'CNPJ'],
  [/\bCnh\b/g,              'CNH'],
  [/\bUf\b/g,               'UF'],
  [/\bDdd\b/g,              'DDD'],
  [/\bNotification Url\b/g, 'Notification URL'],
  [/\bRequest Uid\b/g,      'Request UID'],
  [/\bUrl\b/g,              'URL'],
  [/\bUid\b/g,              'UID'],
  [/\bApi\b/g,              'API'],
  [/\bId\b/g,               'ID'],
];

function fixAcronyms(str) {
  for (const [pattern, replacement] of ACRONYM_FIXES) {
    str = str.replace(pattern, replacement);
  }
  return str;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function toDisplayName(key) {
  const result = key
    .replace(/[\[\]]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
  return fixAcronyms(result);
}

function toValue(categoryPath, name) {
  return (categoryPath + '_' + name)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function extractPath(url) {
  if (!url) return '';
  const raw = typeof url === 'string' ? url : (url.raw || '');
  return raw.replace('{{api_url}}', '');
}

// ---------------------------------------------------------------------------
// DeepL batch translation
// Sends all strings in one request; returns translated strings in same order.
// ---------------------------------------------------------------------------
function deeplTranslate(texts) {
  if (!DEEPL_API_KEY) {
    console.error('[postman-to-n8n] DEEPL_API_KEY not set — skipping translation.');
    return Promise.resolve(texts);
  }

  // DeepL accepts repeated `text` params
  const params = new URLSearchParams();
  params.append('target_lang', 'EN');
  params.append('source_lang', 'PT');
  params.append('preserve_formatting', '1');
  for (const t of texts) {
    params.append('text', t);
  }

  const body = params.toString();

  const options = {
    hostname: DEEPL_HOST,
    path: '/v2/translate',
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let raw = '';
      res.on('data', chunk => (raw += chunk));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          console.error(`[DeepL] HTTP ${res.statusCode}: ${raw}`);
          // Fall back to original strings rather than crashing the build
          return resolve(texts);
        }
        try {
          const json = JSON.parse(raw);
          resolve(json.translations.map(t => t.text));
        } catch (e) {
          console.error('[DeepL] Failed to parse response:', e.message);
          resolve(texts);
        }
      });
    });
    req.on('error', (e) => {
      console.error('[DeepL] Request error:', e.message);
      resolve(texts); // graceful fallback
    });
    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Postman → endpoint map
// ---------------------------------------------------------------------------
function processItems(items, categoryPath = '') {
  const result = {};

  for (const item of items) {
    if (item.item) {
      const newPath = categoryPath ? `${categoryPath} > ${item.name}` : item.name;
      const sub = processItems(item.item, newPath);
      for (const [cat, endpoints] of Object.entries(sub)) {
        if (!result[cat]) result[cat] = [];
        result[cat].push(...endpoints);
      }
    } else if (item.request) {
      const category = categoryPath || 'General';
      if (!result[category]) result[category] = [];

      const params = (item.request.body?.urlencoded || [])
        .filter(p => p.key !== 'auth_token')
        .map(p => ({
          name: p.key,
          displayName: toDisplayName(p.key),
          type: 'string',
          required: !p.disabled,
          placeholder: p.value && !p.value.startsWith('{{') ? p.value : '',
        }));

      result[category].push({
        name: item.name,           // will be translated
        value: toValue(categoryPath, item.name),
        path: extractPath(item.request.url),
        description: (item.request.description?.split('\n')[0] || '')
          .replace(/^#+\s*/, '').trim(), // will be translated
        params,
      });
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const endpointMap = processItems(data.item);

  const categoryKeys    = Object.keys(endpointMap);
  const totalCategories = categoryKeys.length;
  let totalEndpoints    = 0;
  for (const eps of Object.values(endpointMap)) totalEndpoints += eps.length;

  console.error(`Categories: ${totalCategories} | Endpoints: ${totalEndpoints}`);

  // -------------------------------------------------------------------------
  // Build the list of strings that need translation, preserving order so we
  // can map translated values back by index.
  //
  // Layout:
  //   [0 .. totalCategories-1]          → category names
  //   [totalCategories .. N]            → endpoint names + descriptions
  //     interleaved: name, description, name, description, ...
  // -------------------------------------------------------------------------
  const stringsToTranslate = [];

  // Category names
  for (const cat of categoryKeys) {
    stringsToTranslate.push(cat);
  }

  // Endpoint names + descriptions
  for (const cat of categoryKeys) {
    for (const ep of endpointMap[cat]) {
      stringsToTranslate.push(ep.name);
      stringsToTranslate.push(ep.description || '');
    }
  }

  // Filter out blanks before sending (DeepL rejects empty strings)
  const nonEmpty   = stringsToTranslate.map(s => s.trim());
  const blankFlags = nonEmpty.map(s => s === '');
  const toSend     = nonEmpty.map((s, i) => blankFlags[i] ? null : s).filter(Boolean);
  const uniqueToSend = [...new Set(toSend)];

  console.error(`[DeepL] Translating ${uniqueToSend.length} unique strings...`);
  const translatedUnique = await deeplTranslate(uniqueToSend);

  // Build lookup map  original → translated
  const translationMap = {};
  for (let i = 0; i < uniqueToSend.length; i++) {
    translationMap[uniqueToSend[i]] = translatedUnique[i];
  }

  const translate = (s) => {
    if (!s || !s.trim()) return s;
    return translationMap[s.trim()] ?? s;
  };

  // -------------------------------------------------------------------------
  // Apply translations back to endpointMap and build translated CATEGORIES
  // -------------------------------------------------------------------------
  const translatedCategories = [];

  for (const cat of categoryKeys) {
    const translatedCatName = translate(cat);

    translatedCategories.push({
      name: translatedCatName,
      value: cat,              // value stays as the original PT key (stable slug)
    });

    for (const ep of endpointMap[cat]) {
      ep.name        = translate(ep.name);
      ep.description = translate(ep.description);
    }
  }

  // -------------------------------------------------------------------------
  // Serialize
  // -------------------------------------------------------------------------
  let output = `/* eslint-disable */
// AUTO-GENERATED from ${data.info.name}
// Generator: postman-to-n8n.js
// Total: ${totalEndpoints} endpoints across ${totalCategories} categories

export interface EndpointParam {
  name: string;
  displayName: string;
  type: 'string' | 'number' | 'boolean';
  required: boolean;
  placeholder?: string;
  description?: string;
}

export interface EndpointDefinition {
  name: string;
  value: string;
  path: string;
  description?: string;
  params: EndpointParam[];
}

export const ENDPOINTS: Record<string, EndpointDefinition[]> = `;

  output += JSON.stringify(endpointMap, null, 2)
    .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)": /g, '$1: ')
    + ';\n';

  output += `
export const CATEGORIES = ${JSON.stringify(translatedCategories, null, 2)};\n`;

  fs.writeFileSync(OUTPUT, output, 'utf8');
  console.error(`Generated: ${OUTPUT}`);
}

main().catch(err => {
  console.error('[postman-to-n8n] Fatal error:', err);
  process.exit(1);
});