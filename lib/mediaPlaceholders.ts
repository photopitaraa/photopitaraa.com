/** Royalty-free sample MP4s (Google GTV test bucket) — swap for your own assets in production. */
export const PLACEHOLDER_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
] as const;

export function picsumUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

/** Extra editorial slots for masonry / strips (dummy imagery). */
export const SHOWCASE_DUMMY_SEEDS = Array.from({ length: 36 }, (_, i) => `photopitaraa-${i + 1}`);
