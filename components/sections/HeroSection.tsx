'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { fadeUp, staggerContainer } from '@/lib/motion';

const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroImages.length);
    }, 5000);
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
      {/* Background image slider */}
      {heroImages.map((src, i) => (
        <Box
          key={src}
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1.4s ease',
            opacity: currentSlide === i ? 1 : 0,
            transform: 'scale(1.04)',
            animation: currentSlide === i ? 'kenBurns 5s ease-in-out forwards' : 'none',
            '@keyframes kenBurns': {
              from: { transform: 'scale(1.04)' },
              to: { transform: 'scale(1)' },
            },
          }}
        />
      ))}

      {/* Gradient overlay */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(2,30,50,0.72) 0%, rgba(2,30,50,0.35) 60%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Grain texture overlay */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.png)',
          backgroundSize: '200px',
          opacity: 0.06,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{ position: 'relative', zIndex: 3, pt: { xs: 12, md: 0 } }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '65%', lg: '55%' } }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <Typography
                variant="overline"
                sx={{
                  display: 'block',
                  color: 'gold.main',
                  fontSize: '0.68rem',
                  letterSpacing: '0.25em',
                  mb: 3,
                }}
              >
                Award-Winning Wedding Photography · Mumbai
              </Typography>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.5rem', lg: '5.5rem' },
                  color: '#EBF5FB',
                  lineHeight: 1.08,
                  mb: 3,
                  '& em': {
                    fontStyle: 'italic',
                    color: 'gold.light',
                  },
                }}
              >
                Capturing Moments
                <br />
                That <em>Last Forever</em>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: 'rgba(235,245,251,0.75)',
                  lineHeight: 1.8,
                  mb: 5,
                  maxWidth: 480,
                }}
              >
                Your wedding day moves fast. Let&apos;s make sure nothing slips away —
                not the light through the drapes, not the moment before the music starts.
              </Typography>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <AnimatedButton variant="filled" href="/contact">
                  Book Your Date
                </AnimatedButton>
                <AnimatedButton variant="outlined" href="/portfolio">
                  View Our Work
                </AnimatedButton>
              </Stack>
            </motion.div>
          </motion.div>
        </Box>
      </Container>

      {/* Slide dots */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: 80,
          right: { xs: 24, md: 48 },
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {heroImages.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrentSlide(i)}
            sx={{
              width: 2,
              height: currentSlide === i ? 28 : 12,
              backgroundColor: currentSlide === i ? 'gold.main' : 'rgba(255,255,255,0.4)',
              borderRadius: 2,
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </Box>

      {/* Scroll indicator */}
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
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        <KeyboardArrowDown sx={{ fontSize: 32 }} />
      </Box>
    </Box>
  );
}
