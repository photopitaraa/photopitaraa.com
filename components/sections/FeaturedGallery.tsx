'use client';

import { useEffect, useRef, useState } from 'react';
import ResponsiveGalleryCoverImage from '@/components/gallery/ResponsiveGalleryCoverImage';
import { Box, Container, Pagination, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import NextLightboxSlide from '@/components/lightbox/NextLightboxSlide';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Badge from '@/components/ui/Badge';
import { galleryItems, type GalleryItem } from '@/data/gallery';
import { showcaseExtraTiles } from '@/data/showcaseExtras';
import { GALLERY_GRID_PAGE_SIZE, slideOffsetBeforeItem } from '@/lib/galleryPagination';
import { scaleIn, staggerContainer } from '@/lib/motion';
import { useInView } from 'framer-motion';

const extras = showcaseExtraTiles.slice(0, 16);
const featured: GalleryItem[] = [
  ...galleryItems,
  ...extras.map(
    (t): GalleryItem => ({
      id: t.id,
      slug: t.id,
      title: t.title,
      category: t.category,
      location: t.location,
      date: t.date,
      coverImage: t.coverImage,
      images: t.images,
      width: t.width,
      height: t.height,
    })
  ),
];

export default function FeaturedGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [page, setPage] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const totalPages = Math.max(1, Math.ceil(featured.length / GALLERY_GRID_PAGE_SIZE));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const pageOffset = (page - 1) * GALLERY_GRID_PAGE_SIZE;
  const paginatedFeatured = featured.slice(pageOffset, pageOffset + GALLERY_GRID_PAGE_SIZE);

  const slides = featured.flatMap((item) =>
    item.images.map((src) => ({
      src,
      alt: item.title,
      width: item.width,
      height: item.height,
    })),
  );

  return (
    <Box component="section" py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#FAF8F5' }}>
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="Featured"
          title="Weddings & celebrations we've held close"
          subtitle="A living wall of recent work — tap any frame. Dates and places sit where credits would on a film still."
        />
        <GoldDivider my={6} />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            columns: '3',
            columnGap: '12px',
          }}
        >
          {paginatedFeatured.map((item, localIdx) => (
            <motion.div
              key={`${page}-${item.id}`}
              variants={scaleIn}
              style={{ breakInside: 'avoid', marginBottom: 12, cursor: 'pointer' }}
              onClick={() =>
                setLightboxIndex(
                  slideOffsetBeforeItem(featured, pageOffset + localIdx),
                )
              }
              data-cursor-grow
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  '&:hover .overlay': { opacity: 1 },
                  '&:hover img': { transform: 'scale(1.04)' },
                }}
              >
                <ResponsiveGalleryCoverImage
                  item={item}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.65s ease',
                  }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAURBhITFCH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjtzWmv1TXqk0Wr2yPT3p8WW6bkOqUElJ6TjsO3bPfB7YAXlbK62OsQjW6HWJUxiZMjBbzW0N+PQDhJHoD3GSBV9R//Z"
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(1,18,35,0.78) 0%, transparent 52%)',
                    opacity: 0.72,
                    transition: 'opacity 0.45s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 2,
                    gap: 0.5,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      color: 'rgba(235,245,251,0.55)',
                    }}
                  >
                    {item.date}
                  </Typography>
                  <Badge variant="gold" label={item.category} />
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#EBF5FB',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.72rem',
                      color: 'rgba(235,245,251,0.65)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.location}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>

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

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <AnimatedButton variant="outlined" href="/portfolio">
            Full portfolio
          </AnimatedButton>
        </Box>
      </Container>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        render={{ slide: NextLightboxSlide }}
        styles={{ container: { backgroundColor: 'rgba(2,30,50,0.94)' } }}
      />
    </Box>
  );
}
