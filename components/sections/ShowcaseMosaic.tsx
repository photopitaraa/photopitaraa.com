'use client';

import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { galleryItems } from '@/data/gallery';
import { showcaseExtraTiles } from '@/data/showcaseExtras';

// ── Image pool ────────────────────────────────────────────────────────────────
const rawImages = [
  ...galleryItems.map((g) => ({ src: g.coverImage, alt: g.title })),
  ...showcaseExtraTiles.map((t) => ({ src: t.coverImage, alt: t.title })),
];

const NEEDED = 14; // 15-cell grid minus the 1 text card
const photos: { src: string; alt: string }[] = rawImages.slice(0, NEEDED);
while (photos.length < NEEDED) {
  photos.push({
    src: `https://picsum.photos/seed/${photos.length + 300}/900/1200`,
    alt: `Wedding moment ${photos.length + 1}`,
  });
}

// ── Grid layout: 5 cols × 3 rows, text card at centre (index 7) ───────────────
const CARD_INDEX = 7;

type Cell =
  | { kind: 'photo'; src: string; alt: string }
  | { kind: 'card' };

const cells: Cell[] = Array.from({ length: 15 }, (_, i): Cell => {
  if (i === CARD_INDEX) return { kind: 'card' };
  const pi = i < CARD_INDEX ? i : i - 1;
  return { kind: 'photo', ...photos[pi] };
});

// ── Component ─────────────────────────────────────────────────────────────────
export default function ShowcaseMosaic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box
      ref={ref}
      component="section"
      aria-label="Iconic wedding images"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(5, 1fr)',
        },
        gridTemplateRows: {
          xs: 'auto',
          md: '230px 310px 230px',
        },
        gap: '3px',
        backgroundColor: '#111111',
        overflow: 'hidden',
      }}
    >
      {cells.map((cell, i) => {
        if (cell.kind === 'card') {
          return (
            <Box
              key="iconic-card"
              component={motion.div}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              sx={{
                gridColumn: { xs: 'span 2', sm: 'span 1' },
                height: { xs: 'auto', md: '100%' },
                backgroundColor: '#F6EFE7',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: { xs: 3, md: 2.5 },
                py: { xs: 5, md: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  color: '#5A4535',
                  letterSpacing: '0.05em',
                  mb: 0.75,
                  lineHeight: 1,
                }}
              >
                some of the most
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: { xs: '2.6rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                  color: '#1A1009',
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                  mb: 1,
                }}
              >
                &ldquo;ICONIC&rdquo;
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 400,
                  fontSize: { xs: '0.6rem', md: '0.65rem' },
                  color: '#5A4535',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                wedding images
              </Typography>
            </Box>
          );
        }

        return (
          <Box
            key={`${cell.src}-${i}`}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: (i % 5) * 0.06, ease: 'easeOut' }}
            sx={{
              position: 'relative',
              height: { xs: 170, md: '100%' },
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover img': { transform: 'scale(1.06)' },
            }}
          >
            <Image
              src={cell.src}
              alt={cell.alt}
              fill
              sizes="(max-width: 600px) 50vw, 20vw"
              style={{ objectFit: 'cover', transition: 'transform 0.75s ease' }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
