'use client';

import { useRef } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import AmbientVideoLayer from '@/components/ui/AmbientVideoLayer';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { WhatsApp } from '@mui/icons-material';
import { siteConfig } from '@/data/siteConfig';
import { PLACEHOLDER_VIDEOS } from '@/lib/mediaPlaceholders';

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
        backgroundColor: '#0a0a0a',
      }}
    >
      <AmbientVideoLayer src={PLACEHOLDER_VIDEOS[1]} opacity={0.38} blurPx={14} scale={1.18} />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(1,18,35,0.88) 0%, rgba(2,48,71,0.72) 45%, rgba(1,12,24,0.9) 100%)',
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
          opacity: 0.06,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #FFB703 40%, #FFD060 60%, transparent)',
          zIndex: 2,
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
          zIndex: 2,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            backgroundColor: 'rgba(235,245,251,0.07)',
            backdropFilter: 'blur(22px) saturate(150%)',
            WebkitBackdropFilter: 'blur(22px) saturate(150%)',
            border: '1px solid rgba(255,183,3,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          }}
        >
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
                Limited availability — 2025 &amp; 2026
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
                Your date is <em>still</em> open — for now
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  color: 'rgba(235,245,251,0.7)',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  mb: 5,
                  maxWidth: 520,
                  mx: 'auto',
                }}
              >
                We take a limited number of weddings each year so every story gets the edit it deserves. Reach out
                while your window is open.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <AnimatedButton variant="filled" href="/contact">
                  Check availability
                </AnimatedButton>
                <AnimatedButton variant="outlined" href={whatsappUrl} external>
                  <WhatsApp sx={{ fontSize: 18, mr: 1 }} />
                  WhatsApp
                </AnimatedButton>
              </Stack>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
