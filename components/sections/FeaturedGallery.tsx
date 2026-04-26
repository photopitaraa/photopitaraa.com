'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Badge from '@/components/ui/Badge';
import { galleryItems } from '@/data/gallery';
import { scaleIn, staggerContainer } from '@/lib/motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const featured = galleryItems.slice(0, 6);

export default function FeaturedGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const slides = featured.flatMap((item) =>
    item.images.map((src) => ({ src, alt: item.title }))
  );

  return (
    <Box component="section" py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#EBF5FB' }}>
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Stories We've Told"
          subtitle="Each gallery is a chapter. Scroll through the moments that made families stop, breathe, and say — yes, that's exactly how it felt."
        />
        <GoldDivider my={6} />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            columns: '3',
            columnGap: '16px',
          }}
        >
          {featured.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              style={{ breakInside: 'avoid', marginBottom: 16, cursor: 'pointer' }}
              onClick={() => setLightboxIndex(idx)}
              data-cursor-grow
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  '&:hover .overlay': { opacity: 1 },
                  '&:hover img': { transform: 'scale(1.06)' },
                }}
              >
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAURBhITFCH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjtzWmv1TXqk0Wr2yPT3p8WW6bkOqUElJ6TjsO3bPfB7YAXlbK62OsQjW6HWJUxiZMjBbzW0N+PQDhJHoD3GSBV9R//Z"
                />
                {/* Hover overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(2,30,50,0.7) 0%, transparent 50%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 2.5,
                    gap: 0.75,
                  }}
                >
                  <Badge variant="gold" label={item.category} />
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: '#EBF5FB',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      color: 'rgba(235,245,251,0.7)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.location}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <AnimatedButton variant="outlined" href="/portfolio">
            View Full Portfolio
          </AnimatedButton>
        </Box>
      </Container>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(2,30,50,0.95)' } }}
      />
    </Box>
  );
}
