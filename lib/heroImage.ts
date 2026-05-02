/** Hero still paths (must match slide count with `PLACEHOLDER_VIDEOS`). */
export const HERO_PHOTOS = ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'] as const;

/** Default width requested from the Next image optimizer (AVIF/WebP, tuned quality). */
const DEFAULT_W = 1920;
const DEFAULT_Q = 72;

/** Same-origin URL for `next/image`, `<link rel="preload">`, and slide prefetch. */
export function optimizedStaticImageHref(
  path: string,
  width: number = DEFAULT_W,
  quality: number = DEFAULT_Q,
): string {
  return `/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=${quality}`;
}

export function heroOptimizedImageHref(
  path: string,
  width: number = DEFAULT_W,
  quality: number = DEFAULT_Q,
): string {
  return optimizedStaticImageHref(path, width, quality);
}
