#!/usr/bin/env node
/**
 * Resize + mozjpeg-encode raster assets under public/images for faster first paint & optimizer throughput.
 * Preserves Logo-Square.png (PNG). Skips noise.png and files smaller than MIN_BYTES.
 *
 * Usage: node scripts/optimize-public-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', 'public', 'images');

const MAX_EDGE = 2400;
const JPEG_QUALITY = 82;
const MIN_BYTES = 18 * 1024;

const SKIP_NAMES = new Set(['noise.png']);

/** Strip chained extensions like `.png.jpeg` or `.jpg.JPG` */
function canonicalStem(filename) {
  let s = filename;
  while (/\.(jpe?g|png)$/i.test(s)) {
    s = s.replace(/\.(jpe?g|png)$/i, '');
  }
  return s;
}

async function collectFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await collectFiles(full)));
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(full);
  }
  return out;
}

async function optimizeOne(absPath) {
  const base = path.basename(absPath);
  if (SKIP_NAMES.has(base)) return null;

  const stat = await fs.stat(absPath);
  if (stat.size < MIN_BYTES) return null;

  const dir = path.dirname(absPath);
  const input = await fs.readFile(absPath);
  const meta = await sharp(input).metadata();

  let pipeline = sharp(input).rotate();
  const w = meta.width || 0;
  const h = meta.height || 0;
  if (w > MAX_EDGE || h > MAX_EDGE) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (base === 'Logo-Square.png') {
    const buf = await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer();
    await fs.writeFile(absPath, buf);
    console.log(`PNG OK ${absPath} (${stat.size} → ${buf.length} bytes)`);
    return absPath;
  }

  const stem = canonicalStem(base);
  const outPath = path.join(dir, `${stem}.jpg`);
  const tmpPath = path.join(dir, `.optimize-${stem}-${process.pid}.tmp.jpg`);

  await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);

  try {
    if (path.resolve(absPath) !== path.resolve(outPath)) {
      await fs.unlink(absPath);
    }
    await fs.rename(tmpPath, outPath);
  } catch (e) {
    await fs.unlink(tmpPath).catch(() => {});
    throw e;
  }

  const nextStat = await fs.stat(outPath);
  console.log(`OK ${base} → ${path.basename(outPath)} (${stat.size} → ${nextStat.size} bytes)`);
  return outPath;
}

async function main() {
  const files = await collectFiles(ROOT);
  /** Dedupe stems after some paths delete originals */
  const seen = new Set();
  let count = 0;
  for (const f of files) {
    try {
      await fs.stat(f);
    } catch {
      continue;
    }
    const key = path.resolve(f);
    if (seen.has(key)) continue;
    seen.add(key);
    try {
      const out = await optimizeOne(f);
      if (out) count += 1;
    } catch (e) {
      console.error(`FAIL ${f}`, e.message || e);
    }
  }
  console.log(`\nOptimized ${count} file(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
