'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import AnimatedButton from '@/components/ui/AnimatedButton';
import HeroVideoBackdrop from '@/components/ui/HeroVideoBackdrop';
import { fadeUp, staggerContainer } from '@/lib/motion';

const heroPhotos = ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'];

export default function HeroSection() {
  const [photoSlide, setPhotoSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoSlide((s) => (s + 1) % heroPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      component="section"
      aria-label="Hero"
      sx={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <HeroVideoBackdrop poster={heroPhotos[0]} />

      {/* Subtle photo wash — references stills over motion */}
      {heroPhotos.map((src, i) => (
        <Box
          key={src}
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1.8s ease',
            opacity: photoSlide === i ? 0.14 : 0,
            mixBlendMode: 'luminosity',
            zIndex: 0,
          }}
        />
      ))}

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(17,17,17,0.88) 0%, rgba(17,17,17,0.52) 48%, rgba(17,17,17,0.18) 100%)',
          zIndex: 1,
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.png)',
          backgroundSize: '200px',
          opacity: 0.07,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3, pt: { xs: 12, md: 0 } }}>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '58%', lg: '48%' },
            p: { md: 4 },
            borderRadius: { md: 2 },
            backgroundColor: { md: 'rgba(17,17,17,0.45)' },
            backdropFilter: { md: 'blur(18px) saturate(140%)' },
            WebkitBackdropFilter: { md: 'blur(18px) saturate(140%)' },
            border: { md: '1px solid rgba(200,164,106,0.22)' },
            boxShadow: { md: '0 24px 80px rgba(0,0,0,0.25)' },
          }}
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  color: 'gold.main',
                  fontSize: '0.68rem',
                  letterSpacing: '0.28em',
                  mb: 3,
                }}
              >
                Photography · Mumbai &amp; beyond
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4.2rem', lg: '5rem' },
                  color: 'text.primary',
                  lineHeight: 1.06,
                  mb: 3,
                  fontWeight: 600,
                  '& em': {
                    fontStyle: 'italic',
                    color: 'gold.light',
                  },
                }}
              >
                Timeless stories
                <br />
                in <em>moving light</em>
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: { xs: '1rem', md: '1.08rem' },
                  color: 'rgba(248,248,248,0.72)',
                  lineHeight: 1.85,
                  mb: 5,
                  maxWidth: 440,
                }}
              >
                Editorial wedding photography with room to breathe — we chase honest frames, not poses.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <AnimatedButton variant="filled" href="/contact">
                  Get in touch
                </AnimatedButton>
                <AnimatedButton variant="outlined" href="/portfolio">
                  View work
                </AnimatedButton>
              </Stack>
            </motion.div>
          </motion.div>
        </Box>
      </Container>

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: 88,
          right: { xs: 20, md: 40 },
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {heroPhotos.map((_, i) => (
          <Box
            key={i}
            onClick={() => setPhotoSlide(i)}
            sx={{
              width: 2,
              height: photoSlide === i ? 28 : 12,
              backgroundColor: photoSlide === i ? 'gold.main' : 'rgba(255,255,255,0.35)',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </Box>

      <Box
        aria-hidden="true"
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'rgba(255,255,255,0.45)',
        }}
      >
        <KeyboardArrowDown sx={{ fontSize: 32 }} />
      </Box>
    </Box>
  );
}
