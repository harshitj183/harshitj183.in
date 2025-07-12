/**
 * Next.js Document Error Fix Script
 * 
 * This script addresses the common ENOENT error with _document.js
 * by performing a thorough cleanup and creating necessary file stubs.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

console.log(`${colors.cyan}=== Next.js _document.js Error Fix Script ===${colors.reset}\n`);

// Step 1: Clean .next directory
console.log(`${colors.yellow}Step 1: Cleaning .next directory...${colors.reset}`);
const nextDir = path.join(process.cwd(), '.next');

try {
  if (fs.existsSync(nextDir)) {
    // On Windows, some files might be locked, so we use a more robust approach
    try {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log(`${colors.green}✓ Successfully removed .next directory${colors.reset}`);
    } catch (err) {
      console.log(`${colors.yellow}! Using fallback method to clean .next directory...${colors.reset}`);
      
      // On Windows, use rd command which can sometimes work better with locked files
      try {
        execSync('rd /s /q .next', { stdio: 'ignore' });
        console.log(`${colors.green}✓ Removed .next directory using system command${colors.reset}`);
      } catch (cmdErr) {
        console.log(`${colors.yellow}! Could not completely remove .next directory. Will try to proceed anyway.${colors.reset}`);
      }
    }
  } else {
    console.log(`${colors.blue}i .next directory doesn't exist, no cleanup needed${colors.reset}`);
  }
} catch (err) {
  console.error(`${colors.red}✗ Error cleaning .next directory:${colors.reset}`, err);
}

// Step 2: Clean node_modules/.cache
console.log(`\n${colors.yellow}Step 2: Cleaning node_modules cache...${colors.reset}`);
const cacheDir = path.join(process.cwd(), 'node_modules', '.cache');

try {
  if (fs.existsSync(cacheDir)) {
    try {
      fs.rmSync(cacheDir, { recursive: true, force: true });
      console.log(`${colors.green}✓ Successfully removed node_modules/.cache directory${colors.reset}`);
    } catch (err) {
      console.log(`${colors.yellow}! Using fallback method to clean cache directory...${colors.reset}`);
      
      try {
        execSync('rd /s /q "node_modules\\.cache"', { stdio: 'ignore' });
        console.log(`${colors.green}✓ Removed cache directory using system command${colors.reset}`);
      } catch (cmdErr) {
        console.log(`${colors.yellow}! Could not completely remove cache directory. Will try to proceed anyway.${colors.reset}`);
      }
    }
  } else {
    console.log(`${colors.blue}i node_modules/.cache directory doesn't exist, no cleanup needed${colors.reset}`);
  }
} catch (err) {
  console.error(`${colors.red}✗ Error cleaning node_modules/.cache directory:${colors.reset}`, err);
}

// Step 3: Check pages directory structure
console.log(`\n${colors.yellow}Step 3: Checking pages directory structure...${colors.reset}`);
const pagesDir = path.join(process.cwd(), 'src', 'pages');
const appDir = path.join(process.cwd(), 'src', 'app');

try {
  if (!fs.existsSync(pagesDir) && fs.existsSync(appDir)) {
    console.log(`${colors.blue}i Using App Router structure, no Pages directory.${colors.reset}`);
    console.log(`${colors.blue}i This is expected with modern Next.js projects.${colors.reset}`);
  } else if (fs.existsSync(pagesDir)) {
    console.log(`${colors.green}✓ Pages directory exists${colors.reset}`);
    
    // Check for _document.js
    const documentPath = path.join(pagesDir, '_document.js');
    const documentTsxPath = path.join(pagesDir, '_document.tsx');
    
    if (!fs.existsSync(documentPath) && !fs.existsSync(documentTsxPath)) {
      console.log(`${colors.yellow}! No _document.js or _document.tsx found, creating a default one...${colors.reset}`);
      
      // Create a basic _document.js file
      const documentContent = `import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
`;
      
      try {
        fs.writeFileSync(documentTsxPath, documentContent);
        console.log(`${colors.green}✓ Created default _document.tsx${colors.reset}`);
      } catch (writeErr) {
        console.error(`${colors.red}✗ Error creating _document.tsx:${colors.reset}`, writeErr);
      }
    } else {
      console.log(`${colors.green}✓ _document file exists${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}! Neither pages nor app directory found. This is unusual.${colors.reset}`);
  }
} catch (err) {
  console.error(`${colors.red}✗ Error checking pages directory:${colors.reset}`, err);
}

// Step 4: Check next.config.js
console.log(`\n${colors.yellow}Step 4: Checking Next.js configuration...${colors.reset}`);
const configPath = path.join(process.cwd(), 'next.config.js');
const configTsPath = path.join(process.cwd(), 'next.config.ts');

try {
  let configExists = false;
  if (fs.existsSync(configPath)) {
    console.log(`${colors.green}✓ next.config.js exists${colors.reset}`);
    configExists = true;
  } else if (fs.existsSync(configTsPath)) {
    console.log(`${colors.green}✓ next.config.ts exists${colors.reset}`);
    configExists = true;
  }
  
  if (!configExists) {
    console.log(`${colors.yellow}! No next.config file found, creating a default one...${colors.reset}`);
    
    // Create a basic next.config.js file
    const configContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional: If using App Router
  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig
`;
    
    try {
      fs.writeFileSync(configPath, configContent);
      console.log(`${colors.green}✓ Created default next.config.js${colors.reset}`);
    } catch (writeErr) {
      console.error(`${colors.red}✗ Error creating next.config.js:${colors.reset}`, writeErr);
    }
  }
} catch (err) {
  console.error(`${colors.red}✗ Error checking Next.js configuration:${colors.reset}`, err);
}

// Step 5: Final instructions
console.log(`\n${colors.cyan}=== Cleanup Complete ===${colors.reset}`);
console.log(`\n${colors.magenta}Next Steps:${colors.reset}`);
console.log(`1. Run ${colors.green}npm install${colors.reset} to ensure all dependencies are correctly installed`);
console.log(`2. Run ${colors.green}npm run build${colors.reset} to rebuild the project`);
console.log(`3. If the error persists, try ${colors.green}npm run dev${colors.reset} to start in development mode\n`);
console.log(`${colors.blue}If you continue to experience issues, please check the BUILD_GUIDE.md for additional troubleshooting steps.${colors.reset}\n`);
