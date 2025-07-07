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
  
  // Remove unused Image import and add Link import if needed
  if (content.includes('import Image from "next/image";') && !content.includes('<Image')) {
    content = content.replace('import Image from "next/image";\n', '');
  }
  
  if (!content.includes('import Link from "next/link"') && content.includes('<a href="/')) {
    content = content.replace('export default function', 'import Link from "next/link";\n\nexport default function');
  }
  
  // Replace only internal navigation <a> tags with <Link> components
  content = content.replace(/<a href="(\/)([^"]*)" className="([^"]*)">/g, '<Link href="$1$2" className="$3">');
  content = content.replace(/<a href="(\/[^"]*)" className="([^"]*)">/g, '<Link href="$1" className="$2">');
  
  // Only replace closing </a> tags that were converted to Link
  const linkCount = (content.match(/<Link href/g) || []).length;
  const aCount = (content.match(/<\/a>/g) || []).length;
  
  if (linkCount > 0) {
    let replacedCount = 0;
    content = content.replace(/<\/a>/g, (match) => {
      if (replacedCount < linkCount) {
        replacedCount++;
        return '</Link>';
      }
      return match;
    });
  }
  
  // Fix only specific apostrophes in text content (not in code)
  content = content.replace(/I'm /g, "I&apos;m ");
  content = content.replace(/don't /g, "don&apos;t ");
  content = content.replace(/Let's /g, "Let&apos;s ");
  content = content.replace(/it's /g, "it&apos;s ");
  content = content.replace(/we're /g, "we&apos;re ");
  content = content.replace(/that's /g, "that&apos;s ");
  content = content.replace(/here's /g, "here&apos;s ");
  
  fs.writeFileSync(fullPath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('ESLint issues fixed!');
