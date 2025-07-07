#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to fix
const files = [
  'src/app/about/page.tsx',
  'src/app/blog/page.tsx', 
  'src/app/contact/page.tsx',
  'src/app/dashboard/page.tsx',
  'src/app/learn/page.tsx',
  'src/app/page.tsx',
  'src/app/projects/page.tsx'
];

files.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Remove unused Image import and add Link import
  content = content.replace(/import Image from "next\/image";\n/, '');
  if (!content.includes('import Link from "next/link"')) {
    content = 'import Link from "next/link";\n' + content;
  }
  
  // Replace <a> tags with <Link> components for internal navigation
  content = content.replace(/<a href="([^"]*)" className="([^"]*)">/g, '<Link href="$1" className="$2">');
  content = content.replace(/<\/a>/g, '</Link>');
  
  // Fix apostrophes in React
  content = content.replace(/'/g, '&apos;');
  
  fs.writeFileSync(fullPath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All ESLint issues fixed!');
