'use client';

import Image, { type ImageProps } from 'next/image';
import type { GalleryItem } from '@/data/gallery';
import { useGalleryCoverSrc } from '@/hooks/useResponsiveGalleryCover';

type Fields = Pick<GalleryItem, 'coverImage' | 'coverImagePortrait' | 'title' | 'width' | 'height'>;

type Props = {
  item: Fields;
  sizes: string;
  /** When true, parent must be `position: relative` with dimensions. */
  fill?: boolean;
  alt?: string;
} & Omit<ImageProps, 'src' | 'alt'>;

/** One optimized URL per viewport; pair with paginated grids so fewer images mount per page. */
export default function ResponsiveGalleryCoverImage({
  item,
  sizes,
  fill,
  alt,
  quality = 62,
  ...rest
}: Props) {
  const src = useGalleryCoverSrc(item);
  const label = alt ?? item.title;

  if (fill) {
    return (
      <Image key={src} src={src} alt={label} fill sizes={sizes} quality={quality} {...rest} />
    );
  }

  const { width: w, height: h, ...sizedRest } = rest;
  return (
    <Image
      key={src}
      src={src}
      alt={label}
      width={w ?? item.width}
      height={h ?? item.height}
      sizes={sizes}
      quality={quality}
      {...sizedRest}
    />
  );
}
