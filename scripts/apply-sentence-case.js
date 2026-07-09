#!/usr/bin/env node
/**
 * apply-sentence-case.js
 * 
 * Applies sentence case to all description fields in endpoints.ts
 * while preserving acronyms and proper nouns.
 */

const fs = require('fs');
const path = require('path');

const ENDPOINTS_FILE = path.join(__dirname, '../nodes/Apiconsultasdeveiculos/endpoints.ts');

// Acronyms and abbreviations to preserve in uppercase
const PRESERVE_UPPERCASE = new Set([
  'CPF', 'CNPJ', 'CNH', 'UF', 'API', 'URL', 'UID', 'ID', 'IE', 'DDD',
  'FIPE', 'CRV', 'CRLV', 'ANTT', 'INMETRO', 'PF', 'PJ', 'CDA', 'IPVA',
  'DPVAT', 'PDF', 'HTTP', 'HTTPS', 'V2', 'V3', 'V4', 'NFE', 'SINTEGRA',
  'SUFRAMA', 'BIN', 'IBGE', 'QRCODE',
  // Brazilian state abbreviations
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS',
  'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
  'SE', 'SP', 'TO',
]);

// Proper nouns that should remain Title Case
const PROPER_NOUNS = new Set([
  'Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Federal',
  'District', 'Espírito', 'Santo', 'Goiás', 'Maranhão', 'Mato', 'Grosso',
  'Sul', 'Minas', 'Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco',
  'Piauí', 'Janeiro', 'Grande', 'Norte', 'Rondônia', 'Roraima', 'Catarina',
  'Sergipe', 'Paulo', 'Tocantins', 'São', 'Rio', 'Santa', 'Brazil',
  'Brazilian', 'National', 'Reclame', 'Aqui', 'Flash', 'Serpro', 'Receita',
  'Revenue', 'Office', 'Labor', 'Debt', 'Certificate', 'Certificates',
]);

function toSentenceCase(str) {
  if (!str || !str.trim()) return str;
  
  // Split on spaces, dashes, and other separators while preserving them
  const words = str.split(/(\s+|-|\/|\(|\)|,)/);
  let isFirstWord = true;
  
  const result = words.map((word) => {
    // Preserve separators as-is
    if (/^[\s\-\/\(\),]$/.test(word)) return word;
    
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

function main() {
  console.log('Reading endpoints.ts...');
  let content = fs.readFileSync(ENDPOINTS_FILE, 'utf8');
  
  // First, remove \\[async_task\\] markers
  content = content.replace(/\s+\\\\\[async_task\\\\\]/g, '');
  
  // Replace all description fields with sentence case version
  let changeCount = 0;
  content = content.replace(
    /description:\s*"([^"]*)"/g,
    (match, description) => {
      if (!description || !description.trim()) return match;
      
      const sentenceCased = toSentenceCase(description);
      if (sentenceCased !== description) {
        changeCount++;
      }
      return `description: "${sentenceCased}"`;
    }
  );
  
  fs.writeFileSync(ENDPOINTS_FILE, content, 'utf8');
  console.log(`✓ Applied sentence case to ${changeCount} descriptions`);
  console.log(`✓ Updated: ${ENDPOINTS_FILE}`);
}

main();
