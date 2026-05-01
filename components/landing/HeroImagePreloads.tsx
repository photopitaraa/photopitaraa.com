import { HERO_PHOTOS, heroOptimizedImageHref } from '@/lib/heroImage';

/**
 * `<link rel="preload">` so the first hero still starts as AVIF/WebP via `/_next/image`
 * before hydration (matches `next/image` + `priority` in `HeroSection`).
 */
export default function HeroImagePreloads() {
  return (
    <link
      rel="preload"
      as="image"
      href={heroOptimizedImageHref(HERO_PHOTOS[0], 1920, 72)}
      fetchPriority="high"
    />
  );
}
