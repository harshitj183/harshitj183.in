// Fix unescaped entities in files
const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/app/about/page.tsx',
  'src/app/contact/new-page.tsx',
  'src/app/contact/page.tsx',
  'src/app/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Replace apostrophes in JSX content with &apos;
  // This regex looks for apostrophes between > and < tags or at the start/end of the string
  content = content.replace(/(?<=>|\s)\'(?=\w)|(?<=\w)\'(?=\s|<|\.|\,|\!|\?|$)/g, '&apos;');
  
  fs.writeFileSync(fullPath, content);
  console.log(`Fixed quotes in: ${filePath}`);
});

console.log('All files processed!');
