'use client';

import { useRef } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { WhatsApp } from '@mui/icons-material';
import { siteConfig } from '@/data/siteConfig';

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.whatsapp}?text=${encodeURIComponent("Hi! I'd like to enquire about booking a photography session.")}`;

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 14 },
        backgroundColor: '#0E0E0E',
      }}
    >
      {/* Gold gradient accent */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #FFB703 40%, #FFD060 60%, transparent)',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #FFB703 40%, #FFD060 60%, transparent)',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.png)',
          backgroundSize: '200px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center' }}
        >
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
              Limited Availability — 2025 & 2026
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#EBF5FB',
                mb: 2.5,
                '& em': { fontStyle: 'italic', color: 'gold.light' },
              }}
            >
              Your Date Is <em>Waiting</em> for You
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                color: 'rgba(235,245,251,0.65)',
                fontSize: '1rem',
                lineHeight: 1.8,
                mb: 6,
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              We take on a limited number of weddings each year to ensure every couple
              receives our complete attention. Don&apos;t let your date slip away.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <AnimatedButton variant="filled" href="/contact">
                Check Date Availability
              </AnimatedButton>
              <AnimatedButton
                variant="outlined"
                href={whatsappUrl}
                external
              >
                <WhatsApp sx={{ fontSize: 18, mr: 1 }} />
                WhatsApp Us
              </AnimatedButton>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
