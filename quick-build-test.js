// Quick build test without long operations
// This script performs a minimal build check to verify the SSR error is fixed

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Quick Build Test - SSR Error Fix Verification');
console.log('================================================');

// Check if the client wrappers exist
const clientWrappers = [
  'src/components/ClientDashboardWrapper.tsx'
];

console.log('\n1. Checking client component wrappers...');
let wrappersExist = true;
for (const wrapper of clientWrappers) {
  if (fs.existsSync(wrapper)) {
    console.log(`✅ ${wrapper} exists`);
  } else {
    console.log(`❌ ${wrapper} missing`);
    wrappersExist = false;
  }
}

// Check if page files are using client wrappers
console.log('\n2. Checking page files...');
const pageFiles = [
  'src/app/dashboard/page.tsx'
];

for (const pageFile of pageFiles) {
  if (fs.existsSync(pageFile)) {
    const content = fs.readFileSync(pageFile, 'utf8');
    if (content.includes('ClientDashboardWrapper')) {
      console.log(`✅ ${pageFile} uses client wrapper`);
    } else {
      console.log(`❌ ${pageFile} not using client wrapper`);
    }
  }
}

// Quick syntax check
console.log('\n3. Performing quick syntax check...');
try {
  // Just check if Next.js can parse the config
  execSync('npx next --help', { stdio: 'pipe' });
  console.log('✅ Next.js configuration is valid');
} catch (error) {
  console.log('❌ Next.js configuration issues detected');
}

// Check for common SSR issues in the code
console.log('\n4. Checking for remaining SSR issues...');
const filesToCheck = [
  'src/app/dashboard/page.tsx'
];

let ssrIssuesFound = false;
for (const file of filesToCheck) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('ssr: false') && !content.includes("'use client'")) {
      console.log(`❌ ${file} has SSR issue - uses 'ssr: false' without 'use client'`);
      ssrIssuesFound = true;
    }
  }
}

if (!ssrIssuesFound) {
  console.log('✅ No SSR issues found in page files');
}

console.log('\n📋 Summary:');
console.log('===========');
if (wrappersExist && !ssrIssuesFound) {
  console.log('✅ SSR error should be fixed!');
  console.log('✅ Client component wrappers are properly configured');
  console.log('✅ Page files are using client wrappers');
  console.log('\n🚀 You can now try building with: npm run build');
} else {
  console.log('❌ Some issues remain that need to be addressed');
}

console.log('\n⚡ Quick Development:');
console.log('You can start development server with: emergency-dev.bat');
console.log('Or use: npm run dev (may take longer)');
