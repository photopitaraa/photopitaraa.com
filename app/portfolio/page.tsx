'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ResponsiveGalleryCoverImage from '@/components/gallery/ResponsiveGalleryCoverImage';
import Link from 'next/link';
import { Box, Container, Pagination, Stack, Tab, Tabs, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LazyLightbox from '@/components/lightbox/LazyLightbox';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { galleryItems, galleryCategories, type GalleryCategory } from '@/data/gallery';
import { galleryCategoryLabel, interleaveGalleryItemsByCategory } from '@/lib/featuredGalleryOrder';
import { GALLERY_GRID_COVER_QUALITY, GALLERY_GRID_COVER_SIZES } from '@/lib/galleryImageDefaults';
import { GALLERY_GRID_PAGE_SIZE } from '@/lib/galleryPagination';
import { scaleIn } from '@/lib/motion';

function PortfolioInner() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState<
    { src: string; alt: string; width: number; height: number }[]
  >([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const raw = searchParams.get('category');
    if (raw && galleryCategories.includes(raw as GalleryCategory)) {
      setActiveCategory(raw as GalleryCategory);
    }
  }, [searchParams]);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? interleaveGalleryItemsByCategory(galleryItems)
        : galleryItems.filter((g) => g.category === activeCategory),
    [activeCategory],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / GALLERY_GRID_PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const paginatedItems = filtered.slice(
    (page - 1) * GALLERY_GRID_PAGE_SIZE,
    page * GALLERY_GRID_PAGE_SIZE,
  );

  const openLightbox = (item: (typeof galleryItems)[0]) => {
    setLightboxImages(
      item.images.map((src) => ({
        src,
        alt: item.title,
        width: item.width,
        height: item.height,
      })),
    );
    setLightboxIndex(0);
  };

  return (
    <>
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: '#012233',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden="true"
          sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/noise.png)', backgroundSize: '200px', opacity: 0.04 }}
        />
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Every Story, Told With Care"
            subtitle="Browse our galleries by category — each one a different chapter, a different love, a different light."
            light
          />
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: 'background.default',
          borderBottom: '1px solid rgba(2,48,71,0.08)',
          position: 'sticky',
          top: 56,
          zIndex: 100,
        }}
      >
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
              <Tab key={cat} label={cat === 'All' ? 'All' : galleryCategoryLabel(cat)} value={cat} />
            ))}
          </Tabs>
        </Container>
      </Box>

      <Box py={{ xs: 8, md: 12 }} sx={{ bgcolor: 'background.default' }}>
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
              {paginatedItems.map((item) => (
                <motion.div
                  key={`${activeCategory}-${page}-${item.id}`}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  style={{ breakInside: 'avoid', marginBottom: 16 }}
                >
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
                    <ResponsiveGalleryCoverImage
                      item={item}
                      sizes={GALLERY_GRID_COVER_SIZES}
                      quality={GALLERY_GRID_COVER_QUALITY}
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
                      <Badge variant="gold" label={galleryCategoryLabel(item.category)} />
                      <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: '1.05rem', color: '#EBF5FB' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(235,245,251,0.7)' }}>
                        {item.location}
                      </Typography>
                    </Box>
                  </Box>

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

          {totalPages > 1 && (
            <Stack alignItems="center" sx={{ mt: 5 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
                showFirstButton
                showLastButton
                siblingCount={1}
                sx={{
                  '& .MuiPaginationItem-root': { fontFamily: 'Poppins, sans-serif' },
                }}
              />
            </Stack>
          )}
        </Container>
      </Box>

      <CTABanner />

      <LazyLightbox
        open={lightboxIndex >= 0}
        close={() => {
          setLightboxIndex(-1);
          setLightboxImages([]);
        }}
        index={lightboxIndex}
        slides={lightboxImages}
        styles={{ container: { backgroundColor: 'rgba(2,30,50,0.97)' } }}
      />
    </>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <Box sx={{ minHeight: '70vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography color="text.secondary">Loading portfolio…</Typography>
        </Box>
      }
    >
      <PortfolioInner />
    </Suspense>
  );
}
