'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { picsumUrl, SHOWCASE_DUMMY_SEEDS } from '@/lib/mediaPlaceholders';

const stripImages = SHOWCASE_DUMMY_SEEDS.slice(0, 14).map((seed, i) => ({
  src: picsumUrl(seed, 520, i % 2 === 0 ? 780 : 640),
  alt: `Editorial frame ${i + 1}`,
}));

/**
 * Full-bleed horizontal filmstrip inspired by editorial wedding sites — dense imagery, minimal chrome.
 */
export default function EditorialStrip() {
  const doubled = [...stripImages, ...stripImages];

  return (
    <Box
      component="section"
      aria-label="Featured frames"
      sx={{
        position: 'relative',
        py: { xs: 1.5, md: 2 },
        borderBlock: '1px solid rgba(2,48,71,0.08)',
        backgroundColor: '#012233',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.png)',
          backgroundSize: '200px',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          textAlign: 'center',
          color: 'gold.main',
          fontSize: '0.62rem',
          letterSpacing: '0.28em',
          mb: 2,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Selected frames
      </Typography>

      <Box sx={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 10, width: 'max-content' }}
        >
          {doubled.map((img, i) => (
            <Box
              key={`${img.src}-${i}`}
              sx={{
                position: 'relative',
                width: { xs: 200, sm: 240, md: 280 },
                height: { xs: 300, sm: 360, md: 420 },
                flexShrink: 0,
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
              }}
            >
              <Image src={img.src} alt={img.alt} fill sizes="280px" style={{ objectFit: 'cover' }} />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(1,18,35,0.55) 0%, transparent 45%)',
                  pointerEvents: 'none',
                }}
              />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
