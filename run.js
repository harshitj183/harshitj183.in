// Quick run script for Next.js portfolio
// Use this script to run commands without waiting for terminal to finish
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { cleanNextDirectory } = require('./build-helpers');

function runCommand(command, args = [], options = {}) {
  console.log(`Running: ${command} ${args.join(' ')}`);
  
  // Spawn the process with stdio inherit to see output in real-time
  const proc = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
    ...options
  });
  
  proc.on('error', (err) => {
    console.error(`Error executing command: ${err.message}`);
  });
  
  return proc;
}

function startDevServer() {
  console.log('Starting development server...');
  return runCommand('npm', ['run', 'dev']);
}

function startCleanBuild() {
  console.log('Starting clean build...');
  cleanNextDirectory();
  return runCommand('npm', ['run', 'build']);
}

function startStaticExport() {
  console.log('Starting static export...');
  cleanNextDirectory();
  return runCommand('npm', ['run', 'build:static']);
}

function showHelp() {
  console.log('Quick Run Script for Next.js Portfolio');
  console.log('-------------------------------------');
  console.log('Usage:');
  console.log('  node run.js dev       - Start development server');
  console.log('  node run.js build     - Run clean build');
  console.log('  node run.js export    - Create static export');
  console.log('  node run.js clean     - Clean build directories');
}

// Main execution
const command = process.argv[2];

switch (command) {
  case 'dev':
    startDevServer();
    break;
  case 'build':
    startCleanBuild();
    break;
  case 'export':
    startStaticExport();
    break;
  case 'clean':
    cleanNextDirectory();
    break;
  default:
    showHelp();
    break;
}
