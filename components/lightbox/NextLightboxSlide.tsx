'use client';

import Image from 'next/image';
import { LIGHTBOX_SLIDE_QUALITY } from '@/lib/galleryImageDefaults';
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
  type ContainerRect,
  type Slide,
} from 'yet-another-react-lightbox';

function isSizedImageSlide(
  slide: Slide,
): slide is Slide & { width: number; height: number; src: string } {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number' &&
    typeof slide.src === 'string'
  );
}

type Props = {
  slide: Slide;
  offset: number;
  rect: ContainerRect;
};

/**
 * Custom slide renderer so the lightbox uses `next/image` (same pipeline as the rest of the site).
 * See https://yet-another-react-lightbox.com/examples/nextjs
 */
export default function NextLightboxSlide({ slide, offset, rect }: Props) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  if (!isSizedImageSlide(slide)) {
    return null;
  }

  const cover = isImageFitCover(slide, imageFit);

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slide.height) * slide.width))
    : rect.width;

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slide.width) * slide.height))
    : rect.height;

  const vw =
    typeof window !== 'undefined' && window.innerWidth > 0
      ? Math.ceil((width / window.innerWidth) * 100)
      : 100;

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        src={slide.src}
        alt={slide.alt ?? ''}
        fill
        loading={Math.abs(offset) <= 1 ? 'eager' : 'lazy'}
        quality={LIGHTBOX_SLIDE_QUALITY}
        draggable={false}
        sizes={`${vw}vw`}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  );
}
