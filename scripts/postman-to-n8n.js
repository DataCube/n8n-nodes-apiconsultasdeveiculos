const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'postman_datacube.json'), 'utf8'));

function toDisplayName(key) {
  return key
    .replace(/[\[\]]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function toValue(categoryPath, name) {
  const slug = (categoryPath + '_' + name)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return slug;
}

function extractPath(url) {
  if (!url) return '';
  const raw = typeof url === 'string' ? url : url.raw || '';
  return raw.replace('{{api_url}}', '');
}

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
      const category = categoryPath || 'Geral';
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
        name: item.name,
        value: toValue(categoryPath, item.name),
        path: extractPath(item.request.url),
        description: (item.request.description?.split('\n')[0] || '').replace(/^#+\s*/, '').trim(),
        params,
      });
    }
  }

  return result;
}

const endpointMap = processItems(data.item);

let totalEndpoints = 0;
const totalCategories = Object.keys(endpointMap).length;
for (const endpoints of Object.values(endpointMap)) {
  totalEndpoints += endpoints.length;
}
console.error(`Categorias: ${totalCategories} | Endpoints: ${totalEndpoints}`);

let output = `/* eslint-disable */
// AUTO-GERADO de ${data.info.name}
// Script: postman-to-n8n.js
// Total: ${totalEndpoints} endpoints em ${totalCategories} categorias

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

const categories = Object.keys(endpointMap).map(cat => ({
  name: cat,
  value: cat,
}));

output += `
export const CATEGORIES = ${JSON.stringify(categories, null, 2)};\n`;

const outPath = path.join(__dirname, '../nodes/Apiconsultasdeveiculos/endpoints.ts');
fs.writeFileSync(outPath, output);
console.error(`Gerado: ${outPath}`);
