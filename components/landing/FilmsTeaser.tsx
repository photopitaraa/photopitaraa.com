'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PlayCircle } from '@mui/icons-material';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { siteConfig } from '@/data/siteConfig';
import { easeOut } from '@/lib/motion';

export default function FilmsTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: { xs: 9, md: 11 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#0a1628',
        color: '#F5F2EB',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(33,158,188,0.25), transparent 55%)',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <Typography variant="overline" sx={{ color: 'gold.main', letterSpacing: '0.22em', display: 'block', mb: 2 }}>
            Wedding &amp; pre-wedding films
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '1.85rem', md: '2.5rem' },
              mb: 3,
              lineHeight: 1.25,
            }}
          >
            Cinema that breathes with your day
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(245,242,235,0.78)', mb: 4 }}>
            Highlights, feature films, and honest sound design — crafted in-house so the story stays yours from shoot
            to final colour.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <AnimatedButton variant="filled" href="/services#cinematic-films">
              Explore films
            </AnimatedButton>
            <AnimatedButton variant="outlined" href={siteConfig.social.youtube} external>
              <PlayCircle sx={{ fontSize: 20, mr: 1 }} />
              Watch on YouTube
            </AnimatedButton>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
