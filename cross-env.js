// Simple cross-environment variable setter
// This file is a fallback if cross-env is not installed

function setCrossEnvVars() {
  const args = process.argv.slice(2);
  
  // Process variable assignments (VAR=value format)
  let envVarsSet = false;
  let remainingArgs = [];
  
  for (const arg of args) {
    if (arg.includes('=')) {
      const [key, value] = arg.split('=');
      process.env[key] = value;
      envVarsSet = true;
    } else {
      remainingArgs.push(arg);
    }
  }
  
  if (envVarsSet) {
    // Run the command with the remaining arguments
    const { spawn } = require('child_process');
    const command = remainingArgs[0];
    const commandArgs = remainingArgs.slice(1);
    
    const proc = spawn(command, commandArgs, {
      stdio: 'inherit',
      shell: true,
      env: process.env
    });
    
    proc.on('close', (code) => {
      process.exit(code);
    });
  } else {
    console.log('Usage: node cross-env.js VAR1=value1 VAR2=value2 command arg1 arg2...');
    process.exit(1);
  }
}

// Run if this script is called directly
if (require.main === module) {
  setCrossEnvVars();
}

module.exports = { setCrossEnvVars };
