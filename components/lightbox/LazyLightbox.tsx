'use client';

import dynamic from 'next/dynamic';
import type { LightboxExternalProps } from 'yet-another-react-lightbox';
import NextLightboxSlide from '@/components/lightbox/NextLightboxSlide';

import 'yet-another-react-lightbox/styles.css';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
  loading: () => null,
});

/**
 * Loads yet-another-react-lightbox only when opened — keeps initial JS smaller for paginated grids.
 */
export default function LazyLightbox({ render, ...props }: LightboxExternalProps) {
  return <Lightbox {...props} render={{ slide: NextLightboxSlide, ...render }} />;
}
