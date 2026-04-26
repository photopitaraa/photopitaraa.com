'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { galleryItems, galleryCategories, type GalleryCategory } from '@/data/gallery';
import { scaleIn } from '@/lib/motion';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = (item: typeof galleryItems[0]) => {
    setLightboxImages(item.images.map((src) => ({ src, alt: item.title })));
    setLightboxIndex(0);
  };

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: '#012233',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/noise.png)', backgroundSize: '200px', opacity: 0.04 }} />
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Every Story, Told With Care"
            subtitle="Browse our galleries by category — each one a different chapter, a different love, a different light."
            light
          />
        </Container>
      </Box>

      {/* Filter tabs */}
      <Box sx={{ backgroundColor: '#EBF5FB', borderBottom: '1px solid rgba(255,183,3,0.15)', position: 'sticky', top: 64, zIndex: 100 }}>
        <Container maxWidth="xl">
          <Tabs
            value={activeCategory}
            onChange={(_, v) => setActiveCategory(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: 'gold.main', height: 2 },
              '& .MuiTab-root': {
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '0.8rem',
                letterSpacing: '0.06em',
                textTransform: 'none',
                color: 'text.secondary',
                minWidth: 'auto',
                px: 2,
                '&.Mui-selected': { color: 'gold.dark' },
              },
            }}
          >
            {galleryCategories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Container>
      </Box>

      {/* Masonry grid */}
      <Box py={{ xs: 8, md: 12 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ columns: '3', columnGap: 16 }}
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  style={{ breakInside: 'avoid', marginBottom: 16 }}
                >
                  {/* Card */}
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      '&:hover .gallery-overlay': { opacity: 1 },
                      '&:hover img': { transform: 'scale(1.05)' },
                    }}
                    onClick={() => openLightbox(item)}
                    data-cursor-grow
                  >
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.55s ease' }}
                    />
                    <Box
                      className="gallery-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(2,30,50,0.72) 0%, transparent 55%)',
                        opacity: 0,
                        transition: 'opacity 0.35s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 2.5,
                        gap: 0.75,
                      }}
                    >
                      <Badge variant="gold" label={item.category} />
                      <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: '1.05rem', color: '#EBF5FB' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(235,245,251,0.7)' }}>
                        {item.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Link to single story if it's a wedding */}
                  {item.story && (
                    <Box sx={{ mt: 1, px: 0.5 }}>
                      <Link href={`/portfolio/${item.slug}`}>
                        <Typography
                          sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            color: 'gold.dark',
                            letterSpacing: '0.06em',
                            '&:hover': { color: 'gold.main' },
                            transition: 'color 0.2s ease',
                          }}
                        >
                          Read the Story →
                        </Typography>
                      </Link>
                    </Box>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      <CTABanner />

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxImages}
        styles={{ container: { backgroundColor: 'rgba(2,30,50,0.97)' } }}
      />
    </>
  );
}
