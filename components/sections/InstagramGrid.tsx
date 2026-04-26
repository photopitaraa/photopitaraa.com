'use client';

import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import { siteConfig } from '@/data/siteConfig';
import { scaleIn, staggerContainer } from '@/lib/motion';
import { picsumUrl, SHOWCASE_DUMMY_SEEDS } from '@/lib/mediaPlaceholders';

const localIg = [
  { src: '/images/wedding-1.jpg', alt: 'Wedding ceremony' },
  { src: '/images/prewedding-1.jpg', alt: 'Pre-wedding shoot' },
  { src: '/images/wedding-3.jpg', alt: 'Couple portrait' },
  { src: '/images/maternity-1.jpg', alt: 'Maternity session' },
  { src: '/images/wedding-2.jpg', alt: 'Wedding reception' },
  { src: '/images/birthday-1.jpg', alt: 'Birthday celebration' },
];

const extraIg = SHOWCASE_DUMMY_SEEDS.slice(0, 12).map((seed, i) => ({
  src: picsumUrl(seed, 640, 640),
  alt: `Behind the scenes ${i + 1}`,
}));

const igImages = [...localIg, ...extraIg];

export default function InstagramGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box component="section" py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#FAF8F5' }}>
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="@photopitaara"
          title="On the gram"
          subtitle="A wider feed of frames — real celebrations and placeholder tiles you can replace with exports."
        />
        <GoldDivider my={6} />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 6,
          }}
        >
          {igImages.map((img, i) => (
            <motion.div key={`${img.src}-${i}`} variants={scaleIn}>
              <Box
                component="a"
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View on Instagram: ${img.alt}`}
                data-cursor-grow
                sx={{
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  '&:hover .ig-overlay': { opacity: 1 },
                  '&:hover img': { transform: 'scale(1.06)' },
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 18vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.55s ease' }}
                />
                <Box
                  className="ig-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(1,18,35,0.42)',
                    backdropFilter: 'blur(2px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.35s ease',
                  }}
                >
                  <Instagram sx={{ color: '#fff', fontSize: 28 }} />
                </Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography
            component="a"
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              color: 'gold.dark',
              borderBottom: '1px solid',
              borderColor: 'gold.main',
              pb: 0.25,
              '&:hover': { color: 'gold.main' },
              transition: 'color 0.2s ease',
            }}
          >
            @photopitaara on Instagram
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
