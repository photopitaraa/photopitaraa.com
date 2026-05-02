'use client';

import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { GalleryItem } from '@/data/gallery';
import { galleryItems } from '@/data/gallery';
import { interleaveGalleryItemsByCategory } from '@/lib/featuredGalleryOrder';
import ResponsiveGalleryCoverImage from '@/components/gallery/ResponsiveGalleryCoverImage';
import {
  GALLERY_GRID_COVER_QUALITY,
  SHOWCASE_MOSAIC_SIZES,
} from '@/lib/galleryImageDefaults';

const NEEDED = 14; // 15-cell grid minus the 1 text card

const orderedGallery = interleaveGalleryItemsByCategory(galleryItems);

const picked: GalleryItem[] = Array.from({ length: NEEDED }, (_, i) => {
  const item = orderedGallery[i % orderedGallery.length];
  return item;
});

const CARD_INDEX = 7;

type Cell = { kind: 'card' } | { kind: 'photo'; item: GalleryItem };

const cells: Cell[] = Array.from({ length: 15 }, (_, i): Cell => {
  if (i === CARD_INDEX) return { kind: 'card' };
  const pi = i < CARD_INDEX ? i : i - 1;
  return { kind: 'photo', item: picked[pi] };
});

export default function ShowcaseMosaic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box
      ref={ref}
      component="section"
      aria-label="Iconic images"
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
                images
              </Typography>
            </Box>
          );
        }

        const photoKey = `g-${cell.item.id}-${i}`;

        return (
          <Box
            key={photoKey}
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
            {inView ? (
              <ResponsiveGalleryCoverImage
                item={cell.item}
                fill
                sizes={SHOWCASE_MOSAIC_SIZES}
                quality={GALLERY_GRID_COVER_QUALITY}
                style={{ objectFit: 'cover', transition: 'transform 0.75s ease' }}
              />
            ) : (
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: '#1c1c1c',
                  background:
                    'linear-gradient(145deg, rgba(34,34,34,1) 0%, rgba(18,18,18,1) 50%, rgba(28,28,28,1) 100%)',
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
