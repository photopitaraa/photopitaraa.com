/** Items per page for masonry / grid galleries (multiple of 3 for desktop columns). Limits mounted covers per view — pairs well with responsive covers that swap URL by viewport. */
export const GALLERY_GRID_PAGE_SIZE = 9;

/** Total slides before `items[itemIndex]` when flattening each item's `images`. */
export function slideOffsetBeforeItem(items: { images: readonly unknown[] }[], itemIndex: number): number {
  return items.slice(0, itemIndex).reduce((acc, g) => acc + g.images.length, 0);
}
