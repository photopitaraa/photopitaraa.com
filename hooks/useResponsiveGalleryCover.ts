'use client';

import { useTheme, useMediaQuery } from '@mui/material';
import { pickGalleryCoverSrc, type ResponsiveCoverPick } from '@/lib/responsiveGalleryCover';

/**
 * True when we should prefer portrait-oriented covers:
 * — width below `md`, or
 * — tablet-sized width below `lg` while orientation is portrait.
 */
export function usePreferPortraitGalleryCover(): boolean {
  const theme = useTheme();
  const narrow = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const tabletPortrait = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.lg - 1}px) and (orientation: portrait)`,
    { noSsr: true },
  );
  return narrow || tabletPortrait;
}

export function useGalleryCoverSrc(item: ResponsiveCoverPick): string {
  const preferPortrait = usePreferPortraitGalleryCover();
  return pickGalleryCoverSrc(item, preferPortrait);
}
