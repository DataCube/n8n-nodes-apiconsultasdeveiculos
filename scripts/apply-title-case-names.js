#!/usr/bin/env node
/**
 * apply-title-case-names.js
 * 
 * Applies Title Case to all endpoint name fields in endpoints.ts
 * while preserving acronyms and handling special cases.
 */

const fs = require('fs');
const path = require('path');

const ENDPOINTS_FILE = path.join(__dirname, '../nodes/Apiconsultasdeveiculos/endpoints.ts');

// Acronyms and abbreviations to preserve in uppercase
const PRESERVE_UPPERCASE = new Set([
  'CPF', 'CNPJ', 'CNH', 'UF', 'API', 'URL', 'UID', 'ID', 'IE', 'DDD',
  'FIPE', 'CRV', 'CRLV', 'CRLVe', 'ANTT', 'INMETRO', 'PF', 'PJ', 'CDA', 'IPVA',
  'DPVAT', 'PDF', 'HTTP', 'HTTPS', 'V2', 'V3', 'V4', 'NFE', 'SINTEGRA',
  'SUFRAMA', 'BIN', 'IBGE', 'QRCODE', 'NFe', 'CNJ', 'QR', '0KM', 'CSV',
  'DER', 'PRF', 'CTPP', 'CIPP', 'CIV',
  // Brazilian state abbreviations
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS',
  'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
  'SE', 'SP', 'TO',
]);

// Words that should remain lowercase in Title Case (articles, prepositions, conjunctions)
const LOWERCASE_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or',
  'the', 'to', 'with', 'from', 'into', 'per', 'via',
  // Portuguese
  'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas', 'o', 'a',
  'os', 'as', 'um', 'uma', 'para', 'por', 'com', 'sem', 'sobre',
]);

function toTitleCase(str) {
  if (!str || !str.trim()) return str;
  
  // Split on spaces, dashes, slashes, and parentheses while preserving them
  const parts = str.split(/(\s+|-|\/|\(|\))/);
  let isFirst = true;
  
  const result = parts.map((part) => {
    // Preserve separators as-is
    if (/^[\s\-\/\(\)]$/.test(part)) return part;
    
    if (!part) return part;
    
    // Check if it's an acronym (preserve uppercase) - check both exact and uppercased
    const upperPart = part.toUpperCase();
    if (PRESERVE_UPPERCASE.has(upperPart) || PRESERVE_UPPERCASE.has(part)) return part;
    
    // First word or word after certain punctuation should always be capitalized
    if (isFirst) {
      isFirst = false;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }
    
    // Check if it's a lowercase word (but not if it starts after a hyphen following a state name)
    const lowerPart = part.toLowerCase();
    if (LOWERCASE_WORDS.has(lowerPart)) {
      return lowerPart;
    }
    
    // Capitalize first letter, lowercase the rest
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  });
  
  return result.join('');
}

function main() {
  console.log('Reading endpoints.ts...');
  let content = fs.readFileSync(ENDPOINTS_FILE, 'utf8');
  
  // Apply Title Case only to endpoint names, not parameter names
  // Match pattern: opening brace, optional whitespace, then name field
  let changeCount = 0;
  
  // Split content into lines for more precise matching
  const lines = content.split('\n');
  let inParams = false;
  let braceDepth = 0;
  let lastBraceWasEndpoint = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track if we're in a params array
    if (line.includes('params: [')) {
      inParams = true;
      braceDepth = 0;
    }
    
    // Track braces in params
    if (inParams) {
      braceDepth += (line.match(/{/g) || []).length;
      braceDepth -= (line.match(/}/g) || []).length;
      if (braceDepth < 0) {
        inParams = false;
      }
    }
    
    // Check if this is an endpoint opening brace (has 'value:' nearby)
    if (line.trim() === '{' && i + 1 < lines.length) {
      const nextFewLines = lines.slice(i + 1, i + 5).join('\n');
      if (nextFewLines.includes('value:') && nextFewLines.includes('path:')) {
        lastBraceWasEndpoint = true;
      }
    }
    
    // Only apply Title Case to endpoint name fields, not param name fields
    if (!inParams && lastBraceWasEndpoint && /^\s+name:\s*"([^"]*)"/.test(line)) {
      const match = line.match(/^(\s+)name:\s*"([^"]*)"/);
      if (match) {
        const indent = match[1];
        const name = match[2];
        const titleCased = toTitleCase(name);
        
        if (titleCased !== name) {
          changeCount++;
          console.log(`  "${name}" → "${titleCased}"`);
          lines[i] = `${indent}name: "${titleCased}"`;
        }
        
        lastBraceWasEndpoint = false; // Reset flag after processing endpoint name
      }
    }
  }
  
  content = lines.join('\n');
  fs.writeFileSync(ENDPOINTS_FILE, content, 'utf8');
  console.log(`\n✓ Applied Title Case to ${changeCount} endpoint names`);
  console.log(`✓ Updated: ${ENDPOINTS_FILE}`);
}

main();
