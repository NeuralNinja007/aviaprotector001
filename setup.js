const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create necessary directories if they don't exist
const dirs = [
  'client/src/components/layout',
  'client/src/components/dashboard',
  'client/src/components/aircraft',
  'client/src/components/incidents',
  'client/src/components/maintenance',
  'client/src/components/analytics',
  'client/src/components/routing',
  'models',
  'routes',
  'middleware'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Install backend dependencies
console.log('Installing backend dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Install frontend dependencies
console.log('\nInstalling frontend dependencies...');
process.chdir('./client');
execSync('npm install', { stdio: 'inherit' });

console.log('\nSetup completed successfully!');
