const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourcePath = path.join(__dirname, '_redirects');
const destPath = path.join(__dirname, 'dist', '_redirects');

// Check if the source file exists
if (!fs.existsSync(sourcePath)) {
  console.error('Error: _redirects file not found in the project root.');
  process.exit(1);
}

// Copy the file
fs.copyFileSync(sourcePath, destPath);
console.log('_redirects file copied to dist folder.');
