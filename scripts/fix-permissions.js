const fs = require('fs');
const path = require('path');

function fixPermissions(dir) {
  try {
    fs.chmodSync(dir, 0o777);
  } catch {
    // Ignore permission errors if not supported or not allowed
  }

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        fixPermissions(fullPath);
      } else {
        try {
          fs.chmodSync(fullPath, 0o666);
        } catch {
          // Ignore
        }
      }
    }
  } catch {
    // Ignore
  }
}

try {
  fixPermissions(process.cwd());
} catch {
  // Safe fallback
}
