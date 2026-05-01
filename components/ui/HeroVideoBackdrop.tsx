'use client';

import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { PLACEHOLDER_VIDEOS } from '@/lib/mediaPlaceholders';

const CROSSFADE_MS = 2200;

type Props = {
  poster?: string;
  /** Must stay in sync with hero still index (same length as `PLACEHOLDER_VIDEOS`). */
  activeIndex: number;
};

/**
 * Motion backgrounds with crossfade. Index is controlled by the parent so stills and
 * video stay aligned.
 */
export default function HeroVideoBackdrop({ poster, activeIndex }: Props) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const index = activeIndex % PLACEHOLDER_VIDEOS.length;

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) void v.play();
      else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [index]);

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {PLACEHOLDER_VIDEOS.map((src, i) => (
        <Box
          key={src}
          component="video"
          ref={(el: HTMLVideoElement | null) => {
            videoRefs.current[i] = el;
          }}
          src={src}
          poster={i === 0 ? poster : undefined}
          muted
          loop
          playsInline
          preload={i === 0 ? 'auto' : 'metadata'}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: index === i ? 1 : 0,
            transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
            filter: { xs: 'none', md: 'blur(2px)' },
          }}
        />
      ))}
    </Box>
  );
}
