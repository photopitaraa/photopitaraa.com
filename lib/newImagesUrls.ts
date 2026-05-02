/**
 * Files under `public/images/New Images` (encoded for URLs — folder name contains a space).
 * Keep in sync when adding/removing assets.
 */
export const NEW_IMAGE_FILES = [
  '1000000046.jpg.jpeg',
  '1000000062.jpg.jpeg',
  '1000000063.jpg.jpeg',
  '1000000064.jpg.jpeg',
  '1000000065.jpg.jpeg',
  '1000000069.jpg.jpeg',
  '1000000085.jpg.jpeg',
  '1000000087.jpg.jpeg',
  '1000000106.jpg.jpeg',
  '1000000107.jpg.jpeg',
  '1000000166.jpg.jpeg',
  '1000000169.jpg.jpeg',
  '1000000183.jpg.jpeg',
  '1000000195.jpg.jpeg',
  '1000000196.jpg.jpeg',
  '1000000200.jpg.jpeg',
  '1000000205.jpg.jpeg',
  '1000000206.jpg.jpeg',
  '1000000207.jpg.jpeg',
  '1000000208.jpg.jpeg',
  '1000000209.jpg.jpeg',
  '1000000210.jpg.jpeg',
  '1000000211.jpg.jpeg',
  '1000000216.jpg.jpeg',
  '1000000217.jpg.jpeg',
  '1000000218.jpg.jpeg',
  '1000000234.jpg.jpeg',
  '1000000287.jpg.jpeg',
  '1000000288.jpg.jpeg',
  '1000000289.jpg.jpeg',
  '1000000290.jpg.jpeg',
  '1000000398.jpg.jpeg',
  '1000001028.jpg.jpeg',
  '1000001030.jpg.jpeg',
  '1000024455.jpg.jpeg',
  '1000037819.jpg.jpeg',
  '1000039704.jpg.jpeg',
  '1000047980.jpg.jpeg',
  '1000053370.jpg.jpeg',
  '1000111171.jpg.jpeg',
  '1000163046.jpg.jpeg',
  '1000325276.jpg.jpeg',
  '1000325432.jpg.jpeg',
] as const;

export function newImageUrl(filename: string): string {
  return `/images/New%20Images/${encodeURIComponent(filename)}`;
}
