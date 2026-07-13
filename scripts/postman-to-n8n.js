#!/usr/bin/env node
/**
 * postman-to-n8n.js
 *
 * Converts a Postman collection to endpoints.ts for the n8n community node.
 * All user-facing strings (endpoint names, descriptions, category names,
 * parameter displayNames, parameter placeholders and descriptions) are
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
  [/\bIe\b/g,               'IE'],
  // Combined patterns must come before simple ones to avoid partial substitution
  [/\bFipe\s+code\b/gi,        'FIPE Code'],
  [/\bFipe\b/g,                'FIPE'],
  [/\bCrv\s+number\b/gi,       'CRV Number'],
  [/\bCrv\b/g,                 'CRV'],
  [/\bInmetro\s+number\b/gi,   'Inmetro Number'],
];

// ---------------------------------------------------------------------------
// Portuguese abbreviation → full word expansion applied inside toDisplayName()
// BEFORE title-casing, so DeepL receives recognisable Portuguese words.
// ---------------------------------------------------------------------------
const PT_ABBREV_EXPANSIONS = [
  [/\bnum\b/g,  'numero'],    // avoids "num" being read as PT preposition ("in a")
  [/\bcod\b/g,  'codigo'],    // código
  [/\bseg\b/g,  'seguranca'], // segurança (vehicle-doc context: cod_seg_crv)
  [/\bn\b/g,    'numero'],    // standalone single-letter n (e.g. n_via_crv)
];

function fixAcronyms(str) {
  for (const [pattern, replacement] of ACRONYM_FIXES) {
    str = str.replace(pattern, replacement);
  }
  return str;
}

// ---------------------------------------------------------------------------
// Post-translation sanitizer: catches Portuguese words that DeepL may return
// untranslated (prepositions, short conjunctions, common adjectives).
// Applied to every string after DeepL as a final safety net.
// ---------------------------------------------------------------------------
const PT_FALLBACKS = [
  // Accented — unambiguously Portuguese
  [/\bNúmero\b/g,       'Number'],
  [/\bAté\b/g,          'Until'],
  [/\bVeículo\b/g,      'Vehicle'],
  [/\bVeículos\b/g,     'Vehicles'],
  [/\bDébito\b/g,       'Debt'],
  [/\bDébitos\b/g,      'Debts'],
  [/\bProprietário\b/g, 'Owner'],
  [/\bÓrgão\b/g,        'Agency'],
  [/\bÓrgãos\b/g,       'Agencies'],
  // Common Portuguese words not found in English
  [/\bConsulta\b/g,     'Consultation'],
  [/\bConsultas\b/g,    'Consultations'],
  [/\bCompleta\b/g,     'Complete'],
  [/\bCompleto\b/g,     'Complete'],
  [/\bNacional\b/g,     'National'],
  [/\bBaixar\b/g,       'Download'],
  [/\bAtivo\b/g,        'Active'],
  [/\bAtiva\b/g,        'Active'],
  // "Ate" without accent in title-case — safe in short label context
  [/\bAte\b/g,          'To'],
  // Portuguese word with no English equivalent that DeepL may miss
  [/\bSimples\b/g,      'Simple'],
  // Word-order normalisation: DeepL sometimes preserves Portuguese order
  [/\bConsultation\s+CNH\s+Complete\b/g,  'Complete CNH Consultation'],
  [/\bDocument\s+[Ss]eller\b/g,           'Seller Document'],
  [/\bCity\s+[Ss]ales\b/g,               'Seller City'],
  [/\bUF\s+[Ss]alesperson\b/gi,           'Seller UF'],
  // DeepL translation artefacts
  [/\bDangerous\s+Goods\s+Dangerous\b/g, 'Dangerous Goods'],
  // Proper nouns that must not be translated
  [/\bComplain\s+here\b/gi,              'Reclame Aqui'],
  [/\bHoly Spirit\b/g,                   'Espírito Santo'],
  // Semantic patch: "or" cannot be derived from field name cnpj_ie
  [/\bCNPJ IE\b/g,                       'CNPJ or IE'],
  // Word-order safety nets after abbreviation expansion + DeepL
  [/\bSecurity Code CRV\b/g,             'CRV Security Code'],
  [/\bVehicle Number Via CRV\b/g,         'Vehicle CRV Issue Number'],
  [/\bVehicle N Via CRV\b/g,             'Vehicle CRV Issue Number'],
  [/\bNumber Via CRV\b/g,               'CRV Issue Number'],
  [/\bN Via CRV\b/g,                     'CRV Issue Number'],
  // DeepL may leave title-cased accent-free Portuguese words untranslated
  [/\bCodigo Municipio Nascimento\b/g,   'Birth Municipality Code'],
];

function sanitizeTranslation(str) {
  if (!str) return str;
  let result = str;
  for (const [pattern, replacement] of PT_FALLBACKS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Sentence case converter for descriptions.
// Converts "Consultation - CPF Companies" → "Consultation - CPF companies"
// while preserving acronyms (CPF, CNPJ, CNH, UF, etc.) and proper nouns.
// ---------------------------------------------------------------------------
const PRESERVE_UPPERCASE = new Set([
  'CPF', 'CNPJ', 'CNH', 'UF', 'API', 'URL', 'UID', 'ID', 'IE', 'DDD',
  'FIPE', 'CRV', 'CRLV', 'ANTT', 'INMETRO', 'PF', 'PJ', 'CDA', 'IPVA',
  'DPVAT', 'PDF', 'HTTP', 'HTTPS', 'V2', 'V3', 'V4',
  // Brazilian state abbreviations
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS',
  'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
  'SE', 'SP', 'TO',
]);

// Full state names and proper nouns that should remain Title Case
const PROPER_NOUNS = new Set([
  'Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Federal',
  'District', 'Espírito', 'Santo', 'Goiás', 'Maranhão', 'Mato', 'Grosso',
  'Sul', 'Minas', 'Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco',
  'Piauí', 'Janeiro', 'Grande', 'Norte', 'Rondônia', 'Roraima', 'Catarina',
  'Sergipe', 'Paulo', 'Tocantins', 'São', 'Rio', 'Santa', 'Brazil',
  'Brazilian', 'National', 'Reclame', 'Aqui', 'Flash', 'Active', 'Debt',
  'Simple', 'Complete', 'Full', 'Issuing', 'Consultation', 'Dangerous',
  'Goods', 'Documents', 'Debts', 'Information', 'Aggregates', 'Companies',
  'Vehicles', 'Registration', 'Credit', 'Agencies', 'Owner', 'Current',
]);

function toSentenceCase(str) {
  if (!str || !str.trim()) return str;
  
  // Split on spaces, dashes, and other separators while preserving them
  const words = str.split(/(\s+|-|\/|\(|\))/);
  let isFirstWord = true;
  
  const result = words.map((word) => {
    // Preserve separators as-is
    if (/^[\s\-\/\(\)]$/.test(word)) return word;
    
    // Preserve known acronyms
    const upperWord = word.toUpperCase();
    if (PRESERVE_UPPERCASE.has(upperWord)) return upperWord;
    
    // Preserve proper nouns in Title Case
    const titleWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    if (PROPER_NOUNS.has(titleWord)) return titleWord;
    
    // First word: capitalize first letter only
    if (isFirstWord) {
      isFirstWord = false;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    
    // All other words: lowercase
    return word.toLowerCase();
  });
  
  return result.join('');
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function toDisplayName(key) {
  let expanded = key
    .replace(/[\[\]]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();

  // Expand Portuguese abbreviations before title-casing so DeepL gets full words
  for (const [pattern, replacement] of PT_ABBREV_EXPANSIONS) {
    expanded = expanded.replace(pattern, replacement);
  }

  return fixAcronyms(expanded.replace(/\b\w/g, c => c.toUpperCase()));
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
// Checks whether a string needs translation.
// Skips: empty strings, pure placeholders (XX.XXX.XXX-XX), numeric-only, URLs.
// ---------------------------------------------------------------------------
function needsTranslation(str) {
  if (!str || !str.trim()) return false;
  // Pure uppercase placeholders like "XXX.XXX.XXX-XX" or "XXXXXXXXX"
  if (/^[X0-9.\-\/\s]+$/.test(str)) return false;
  // URLs
  if (/^https?:\/\//i.test(str)) return false;
  // Numbers only
  if (/^\d+$/.test(str)) return false;
  return true;
}

// Normalise placeholder: replace Brazilian example domains with generic ones
// and add "e.g. " prefix following n8n UX guidelines
function normalisePlaceholder(str) {
  if (!str) return str;
  let normalized = str
    .replace(/https?:\/\/exemplo\.com\.br[^\s]*/gi, 'https://example.com/webhook')
    .replace(/https?:\/\/[a-z0-9.-]*\.com\.br[^\s]*/gi, 'https://example.com/webhook');
  
  // Add "e.g. " prefix following n8n UX guidelines
  if (normalized && !normalized.startsWith('e.g. ')) {
    normalized = 'e.g. ' + normalized;
  }
  
  return normalized;
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

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let raw = '';
      res.on('data', chunk => (raw += chunk));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          console.error(`[DeepL] HTTP ${res.statusCode}: ${raw}`);
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
      resolve(texts);
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
          displayName: toDisplayName(p.key), // acronym-fixed; will also be translated
          type: 'string',
          required: !p.disabled,
          placeholder: normalisePlaceholder(
            p.value && !p.value.startsWith('{{') ? p.value : ''
          ),
        }));

      result[category].push({
        name: item.name,
        value: toValue(categoryPath, item.name),
        path: extractPath(item.request.url),
        description: (item.request.description?.split('\n')[0] || '')
          .replace(/^#+\s*/, '').trim(),
        params,
      });
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Build a deduplicated list of strings to translate, send to DeepL once,
// and return a lookup map { original → translated }.
// ---------------------------------------------------------------------------
async function buildTranslationMap(strings) {
  const unique = [...new Set(strings.filter(needsTranslation))];
  if (unique.length === 0) return {};

  console.error(`[DeepL] Translating ${unique.length} unique strings...`);
  const translated = await deeplTranslate(unique);

  const map = {};
  for (let i = 0; i < unique.length; i++) {
    map[unique[i]] = translated[i];
  }
  return map;
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
  // Collect every string that needs translation in a single pass
  // -------------------------------------------------------------------------
  const allStrings = [];

  for (const cat of categoryKeys) {
    allStrings.push(cat);
    for (const ep of endpointMap[cat]) {
      allStrings.push(ep.name);
      allStrings.push(ep.description || '');
      for (const param of ep.params) {
        allStrings.push(param.displayName);
        allStrings.push(param.placeholder || '');
        allStrings.push(param.description || '');
      }
    }
  }

  const translationMap = await buildTranslationMap(allStrings);

  const translate = (s) => {
    if (!s || !s.trim()) return s;
    const result = translationMap[s] ?? s;
    // Re-apply acronym fixes after translation (DeepL may lowercase them),
    // then sanitize any Portuguese words that DeepL left untranslated.
    return sanitizeTranslation(fixAcronyms(result));
  };

  // -------------------------------------------------------------------------
  // Apply translations
  // -------------------------------------------------------------------------
  const translatedCategories = [];

  for (const cat of categoryKeys) {
    translatedCategories.push({
      name: translate(cat),
      value: cat, // stable PT slug — do not translate
    });

    for (const ep of endpointMap[cat]) {
      ep.name        = translate(ep.name);
      // Apply sentence case to descriptions after translation
      ep.description = toSentenceCase(translate(ep.description));

      for (const param of ep.params) {
        param.displayName = translate(param.displayName);
        param.placeholder = translate(param.placeholder);
        if (param.description) {
          param.description = translate(param.description);
        }
      }
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