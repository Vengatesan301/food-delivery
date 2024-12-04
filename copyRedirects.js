const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "_redirects");
const destPath = path.join(__dirname, "dist", "_redirects");

if (!fs.existsSync(sourcePath)) {
  console.error("Error: _redirects file not found!");
  process.exit(1);
}

fs.copyFileSync(sourcePath, destPath);
console.log("_redirects file copied successfully.");
