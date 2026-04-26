'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Reveal from '@/components/ui/Reveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { galleryItems, type GalleryCategory } from '@/data/gallery';
import { easeOut } from '@/lib/motion';

const previewCategories: GalleryCategory[] = ['All', 'Weddings', 'Pre-Wedding', 'Maternity', 'Birthday'];

export default function HomePortfolioPreview() {
  const [cat, setCat] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () => (cat === 'All' ? galleryItems : galleryItems.filter((g) => g.category === cat)),
    [cat]
  );

  const slides = filtered.flatMap((item) => item.images.map((src) => ({ src, alt: item.title })));

  const openAt = (item: (typeof galleryItems)[0]) => {
    const idx = filtered.indexOf(item);
    const start = filtered.slice(0, idx).reduce((a, g) => a + g.images.length, 0);
    setLightboxIndex(start);
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="xl">
        <Reveal>
          <Typography
            variant="overline"
            sx={{ display: 'block', textAlign: 'center', color: 'gold.main', letterSpacing: '0.24em', mb: 2 }}
          >
            Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '2rem', md: '2.75rem' },
              mb: 2,
            }}
          >
            Moments that still feel alive
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: 560,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            Tap a category to preview work — same galleries as our full portfolio page.
          </Typography>
        </Reveal>

        <Reveal delay={0.08}>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} sx={{ mb: 5 }}>
            {previewCategories.map((c) => (
              <Chip
                key={c}
                label={c === 'All' ? 'All' : c}
                onClick={() => setCat(c)}
                variant={cat === c ? 'filled' : 'outlined'}
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  borderRadius: 999,
                  borderColor: 'rgba(2,48,71,0.2)',
                  bgcolor: cat === c ? 'primary.main' : 'transparent',
                  color: cat === c ? '#fff' : 'text.primary',
                  '&:hover': { bgcolor: cat === c ? 'primary.dark' : 'rgba(33,158,188,0.08)' },
                }}
              />
            ))}
          </Stack>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={`${cat}-${item.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: easeOut }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(2,48,71,0.08)',
                    '&:hover .phover': { opacity: 1 },
                    '&:hover img': { transform: 'scale(1.05)' },
                  }}
                  onClick={() => openAt(item)}
                >
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <Box
                    className="phover"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(2,48,71,0.5)',
                      opacity: 0,
                      transition: 'opacity 0.35s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Typography sx={{ color: '#fff', fontWeight: 600, fontFamily: '"Playfair Display", serif' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.8rem' }}>{item.location}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        <Reveal>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <AnimatedButton variant="filled" href="/portfolio">
              View full portfolio
            </AnimatedButton>
          </Box>
        </Reveal>
      </Container>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(2,30,50,0.94)' } }}
      />
    </Box>
  );
}
