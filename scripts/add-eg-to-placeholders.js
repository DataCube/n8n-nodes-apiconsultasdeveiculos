#!/usr/bin/env node
/**
 * add-eg-to-placeholders.js
 * 
 * Adds "e.g. " prefix to all placeholder values in endpoints.ts
 * following n8n UX guidelines.
 */

const fs = require('fs');
const path = require('path');

const ENDPOINTS_FILE = path.join(__dirname, '../nodes/Apiconsultasdeveiculos/endpoints.ts');

function main() {
  console.log('Reading endpoints.ts...');
  let content = fs.readFileSync(ENDPOINTS_FILE, 'utf8');
  
  let changeCount = 0;
  
  // Replace all placeholder values that don't already start with "e.g. "
  content = content.replace(
    /placeholder:\s*"([^"]*)"/g,
    (match, placeholder) => {
      if (!placeholder || placeholder.trim() === '' || placeholder.startsWith('e.g. ')) {
        return match;
      }
      changeCount++;
      return `placeholder: "e.g. ${placeholder}"`;
    }
  );
  
  fs.writeFileSync(ENDPOINTS_FILE, content, 'utf8');
  console.log(`✓ Added "e.g. " to ${changeCount} placeholders`);
  console.log(`✓ Updated: ${ENDPOINTS_FILE}`);
}

main();
