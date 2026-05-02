/**
 * Reads `data/newImagesShoots.seeds.json`, measures files under `public/images/New Images`,
 * picks landscape + portrait covers by pixel area, and writes `data/newImagesGallery.generated.ts`.
 *
 * Run: node scripts/sync-new-images-gallery.mjs
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const seedsPath = path.join(root, 'data/newImagesShoots.seeds.json');
const outPath = path.join(root, 'data/newImagesGallery.generated.ts');
const imgDir = path.join(root, 'public/images/New Images');

function imgUrl(filename) {
  return `/images/New%20Images/${encodeURIComponent(filename)}`;
}

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function area(w, h) {
  return w * h;
}

const seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8'));

const items = [];

for (const s of seeds) {
  const dims = [];
  for (const file of s.files) {
    const fp = path.join(imgDir, file);
    if (!fs.existsSync(fp)) {
      console.warn(`Missing file (skipped shoot ${s.id}): ${fp}`);
      dims.length = 0;
      break;
    }
    const m = await sharp(fp).metadata();
    const w = m.width ?? 0;
    const h = m.height ?? 0;
    dims.push({ file, w, h });
  }

  if (dims.length === 0) continue;

  const landscapes = dims.filter((d) => d.w >= d.h);
  const portraits = dims.filter((d) => d.h > d.w);

  const bestL = landscapes.slice().sort((a, b) => area(b.w, b.h) - area(a.w, a.h))[0];
  const bestP = portraits.slice().sort((a, b) => area(b.w, b.h) - area(a.w, a.h))[0];

  /** Desktop `coverImage` prefers best landscape; portrait-only rolls use the largest frame (no duplicate `coverImagePortrait`). */
  let coverImage;
  let portraitSrc = null;
  if (bestL) {
    coverImage = imgUrl(bestL.file);
    if (bestP && bestP.file !== bestL.file) portraitSrc = imgUrl(bestP.file);
  } else {
    const fallback = dims.slice().sort((a, b) => area(b.w, b.h) - area(a.w, a.h))[0];
    coverImage = imgUrl(fallback.file);
  }

  const images = s.files.map(imgUrl);
  const hero = dims.reduce((m, d) => (area(d.w, d.h) > area(m.w, m.h) ? d : m), dims[0]);

  const portraitLine =
    portraitSrc != null ? `\n    coverImagePortrait: '${esc(portraitSrc)}',` : '';

  const storyLine = s.story ? `\n    story:\n      '${esc(s.story)}',` : '';

  items.push(`{
    id: '${esc(s.id)}',
    slug: '${esc(s.slug)}',
    title: '${esc(s.title ?? '')}',
    category: '${esc(s.category)}',
    location: '${esc(s.location ?? '')}',
    date: '${esc(s.date ?? '')}',
    coverImage: '${esc(coverImage)}',${portraitLine}
    images: [
${images.map((u) => `      '${esc(u)}',`).join('\n')}
    ],${storyLine}
    hideFromHomeSlideshow: true,
    width: ${hero.w},
    height: ${hero.h},
  }`);
}

const ts = `/**
 * AUTO-GENERATED — edit \`data/newImagesShoots.seeds.json\` then run:
 *   npm run sync:new-images
 */
import type { GalleryItem } from './gallery';

export const newImagesGalleryItems: GalleryItem[] = [
${items.join(',\n')}
];
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${items.length} items to ${path.relative(root, outPath)}`);
