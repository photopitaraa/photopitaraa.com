'use client';

import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

interface AmbientVideoLayerProps {
  src: string;
  /** 0–1 behind overlays */
  opacity?: number;
  /** CSS blur px on the video (edges compensated with scale) */
  blurPx?: number;
  /** Extra scale to hide blur edge artefacts */
  scale?: number;
  poster?: string;
}

/**
 * Full-bleed muted loop video for section backgrounds.
 */
export default function AmbientVideoLayer({
  src,
  opacity = 0.45,
  blurPx = 0,
  scale = 1.12,
  poster,
}: AmbientVideoLayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, [src]);

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
      <Box
        component="video"
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: `translate(-50%, -50%) scale(${scale})`,
          objectFit: 'cover',
          opacity,
          filter: blurPx > 0 ? `blur(${blurPx}px)` : 'none',
        }}
      />
    </Box>
  );
}
