import type { GalleryCategory, GalleryItem } from '@/data/gallery';
import { galleryCategories } from '@/data/gallery';

/** Shown on chips / badges — keeps `GalleryCategory` values unchanged for filters. */
export function galleryCategoryLabel(category: GalleryCategory): string {
  if (category === 'Kids') return 'Baby / Kids';
  return category;
}

/**
 * One pass per category per round so the masonry/mosaic surfaces Weddings, Pre-Wedding,
 * Birthday, Events, Maternity, and Kids early instead of bunching placeholders or one genre.
 */
export function interleaveGalleryItemsByCategory(items: GalleryItem[]): GalleryItem[] {
  const buckets = new Map<GalleryCategory, GalleryItem[]>();
  for (const cat of galleryCategories) {
    if (cat === 'All') continue;
    buckets.set(cat, []);
  }
  for (const item of items) {
    buckets.get(item.category)?.push(item);
  }

  const out: GalleryItem[] = [];
  let remaining = items.length;

  while (remaining > 0) {
    let progressed = false;
    for (const cat of galleryCategories) {
      if (cat === 'All') continue;
      const bucket = buckets.get(cat);
      if (bucket?.length) {
        out.push(bucket.shift()!);
        remaining--;
        progressed = true;
      }
    }
    if (!progressed) break;
  }

  return out;
}
