import type { GalleryItem } from '@/data/gallery';

export type ResponsiveCoverPick = Pick<GalleryItem, 'coverImage' | 'coverImagePortrait' | 'title'>;

/** Desktop / tablet landscape uses `coverImage`; phones & upright tablets use `coverImagePortrait` when set. */
export function pickGalleryCoverSrc(item: ResponsiveCoverPick, preferPortrait: boolean): string {
  if (preferPortrait && item.coverImagePortrait) return item.coverImagePortrait;
  return item.coverImage;
}
