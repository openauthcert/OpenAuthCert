// scripts/copy-assets.ts

import fs from "fs";
import path from "path";
import glob from "glob";

const root = process.cwd();

// Copy all example badges
const badgeFiles = glob.sync("../badge-spec/examples/*.json");
const assets = badgeFiles.map(source => ({
  source: path.resolve(source),
  target: path.resolve(root, "public/badges", path.basename(source))
}));

// Add schema and revoked list
assets.push(
  {
    source: path.resolve(root, "../badge-spec/badge-schema.json"),
    target: path.resolve(root, "public/schema/badge-schema.json")
  },
  {
    source: path.resolve(root, "../vendor-registry/revoked.json"),
    target: path.resolve(root, "public/revoked.json")
  }
);

// Perform copy
for (const { source, target } of assets) {
  if (!fs.existsSync(source)) {
    console.warn(`⚠️ Missing: ${source}`);
    continue;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  console.log(`✓ Copied ${source} → ${target}`);
}
