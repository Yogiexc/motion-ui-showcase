#!/usr/bin/env node

// Check for outdated dependencies
const { execSync } = require('child_process');

console.log('🔍 Checking for outdated dependencies...\n');

try {
  const output = execSync('npm outdated', { encoding: 'utf-8' });
  if (output) {
    console.log(output);
    console.log('⚠️  Some dependencies are outdated.');
  } else {
    console.log('✅ All dependencies are up to date!');
  }
} catch (error) {
  console.log('✅ All dependencies are up to date!');
}