import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { load } from "cheerio";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..', '..');
const captureDir = path.join(rootDir, 'research', 'captures');
const manifestDir = path.join(rootDir, 'reference');
const manifestPath = path.join(manifestDir, 'manifest.json');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile() && /\.(html|css)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function getInfo(filePath) {
  const stats = await fs.stat(filePath);
  const content = await fs.readFile(filePath, 'utf8');
  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const lines = content.split(/\r?\n/).length;
  const ext = path.extname(filePath).toLowerCase();
  let title = path.basename(filePath);
  let topLevelSelectors = [];
  if (ext === '.html') {
    const $ = load(content);
    const t = $('title').first().text().trim();
    if (t) title = t;
    topLevelSelectors = Array.from(new Set(
      $("body").children().filter((i, el) => el.type === "tag").map((i, el) => el.tagName.toLowerCase()).get()
    ));
  }
  return { path: relativePath, size: stats.size, lines, title, topLevelSelectors };
}

async function build() {
  try {
    await fs.mkdir(manifestDir, { recursive: true });
    const files = await walk(captureDir);
    const entries = await Promise.all(files.map(getInfo));
    await fs.writeFile(manifestPath, JSON.stringify(entries, null, 2));
    console.log(`Wrote ${entries.length} entries to ${manifestPath}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

build();
