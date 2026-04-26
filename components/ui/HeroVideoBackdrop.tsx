'use client';

import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { PLACEHOLDER_VIDEOS } from '@/lib/mediaPlaceholders';

const CROSSFADE_MS = 2200;
const HOLD_MS = 7000;

/**
 * Cycles placeholder motion backgrounds with crossfade + mild blur (md+).
 */
export default function HeroVideoBackdrop({ poster }: { poster?: string }) {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % PLACEHOLDER_VIDEOS.length);
    }, HOLD_MS);
    return () => clearInterval(t);
  }, []);

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
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%) scale(1.1)',
            objectFit: 'cover',
            opacity: index === i ? 1 : 0,
            transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
            filter: { xs: 'none', md: 'blur(2px)' },
          }}
        />
      ))}
    </Box>
  );
}
