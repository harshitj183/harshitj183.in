"use strict";

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== Next.js Server Components Fix Script ===');
console.log('This script fixes the `ssr: false` error in Server Components');

// Helper function for colored console output
function colorLog(message, type) {
  const colors = {
    success: '\x1b[32m', // green
    info: '\x1b[36m',    // cyan
    error: '\x1b[31m',   // red
    warning: '\x1b[33m', // yellow
    reset: '\x1b[0m'     // reset
  };
  console.log(`${colors[type]}${message}${colors.reset}`);
}

// Check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Create a directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      return true;
    } catch (err) {
      colorLog(`Error creating directory ${dirPath}: ${err.message}`, 'error');
      return false;
    }
  }
  return true;
}

// Note: GitHub page component has been deprecated in favor of the unified dashboard

// Fix Dashboard page component
function fixDashboardPage() {
  colorLog('\nStep 2: Fixing Dashboard page component...', 'info');
  
  const dashboardPagePath = path.join(__dirname, 'src', 'app', 'dashboard', 'page.tsx');
  const clientWrapperPath = path.join(__dirname, 'src', 'components', 'ClientDashboardWrapper.tsx');
  
  if (!fileExists(dashboardPagePath)) {
    colorLog('Dashboard page not found. Skipping...', 'warning');
    return false;
  }
  
  // Create ClientDashboardWrapper if it doesn't exist
  if (!fileExists(clientWrapperPath)) {
    colorLog('Creating ClientDashboardWrapper.tsx...', 'info');
    
    const wrapperContent = `'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled in a client component
const UnifiedDashboard = dynamic(() => import('./UnifiedDashboard'), { 
  ssr: false,
  loading: () => <div className="min-h-[600px] flex items-center justify-center">Loading dashboard data...</div>
});

export default function ClientDashboardWrapper() {
  return (
    <Suspense fallback={<div className="min-h-[600px] flex items-center justify-center">Loading dashboard data...</div>}>
      <UnifiedDashboard />
    </Suspense>
  );
}
`;
    
    try {
      fs.writeFileSync(clientWrapperPath, wrapperContent);
      colorLog('ClientDashboardWrapper.tsx created successfully', 'success');
    } catch (err) {
      colorLog(`Error creating ClientDashboardWrapper.tsx: ${err.message}`, 'error');
      return false;
    }
  } else {
    colorLog('ClientDashboardWrapper.tsx already exists', 'info');
  }
  
  // Update Dashboard page
  try {
    const pageContent = `import ClientDashboardWrapper from '@/components/ClientDashboardWrapper';

// Static metadata for the dashboard page
export const metadata = {
  title: 'Dashboard | Harshit Jaiswal',
  description: 'Dashboard displaying my GitHub and LeetCode statistics',
};

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ClientDashboardWrapper />
    </main>
  );
}
`;
    
    fs.writeFileSync(dashboardPagePath, pageContent);
    colorLog('Dashboard page updated successfully', 'success');
    return true;
  } catch (err) {
    colorLog(`Error updating Dashboard page: ${err.message}`, 'error');
    return false;
  }
}

// Check other pages for potential SSR issues
function checkOtherPages() {
  colorLog('\nStep 3: Checking other pages for potential SSR issues...', 'info');
  
  // Get all page files in the app directory
  const appDir = path.join(__dirname, 'src', 'app');
  let pagesWithIssues = [];
  
  try {
    const findCommand = process.platform === 'win32' 
      ? `powershell.exe -Command "Get-ChildItem -Path '${appDir.replace(/\\/g, '\\\\')}' -Recurse -Filter '*.tsx' | Select-String -Pattern 'dynamic.*ssr: false' | Select-Object Path -Unique | ForEach-Object { $_.Path }"`
      : `find ${appDir} -name "*.tsx" -type f -exec grep -l "dynamic.*ssr: false" {} \\;`;
    
    const result = execSync(findCommand).toString();
    
    if (result && result.trim()) {
      pagesWithIssues = result.split('\n')
        .filter(Boolean)
        .filter(p => p.includes('page.tsx'));
    }
    
    if (pagesWithIssues.length > 0) {
      colorLog(`Found ${pagesWithIssues.length} additional pages with potential SSR issues:`, 'warning');
      pagesWithIssues.forEach(page => {
        colorLog(` - ${page}`, 'warning');
      });
      colorLog('Please fix these pages manually using the same pattern as GitHub and Dashboard pages', 'info');
    } else {
      colorLog('No additional pages with potential SSR issues found', 'success');
    }
  } catch (err) {
    colorLog(`Error checking for other pages: ${err.message}`, 'error');
  }
}

// Main function
function main() {
  try {
    // Ensure components directory exists
    ensureDirectoryExists(path.join(__dirname, 'src', 'components'));
    
    // Fix pages
    const githubFixed = fixGithubPage();
    const dashboardFixed = fixDashboardPage();
    
    // Check other pages
    checkOtherPages();
    
    // Summary
    colorLog('\n=== Fix Summary ===', 'info');
    colorLog(`GitHub Page: ${githubFixed ? 'Fixed ✓' : 'Skipped ⚠'}`, githubFixed ? 'success' : 'warning');
    colorLog(`Dashboard Page: ${dashboardFixed ? 'Fixed ✓' : 'Skipped ⚠'}`, dashboardFixed ? 'success' : 'warning');
    
    colorLog('\nNext Steps:', 'info');
    colorLog('1. Run npm run build to rebuild the project', 'info');
    colorLog('2. If build fails, check for other pages with the same issue', 'info');
    colorLog('3. Run npm run dev to start the development server', 'info');
  } catch (err) {
    colorLog(`\nError: ${err.message}`, 'error');
    process.exit(1);
  }
}

// Execute
main();
