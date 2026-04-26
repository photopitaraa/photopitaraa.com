'use client';

import { useRef, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import {
  CameraAlt,
  EmojiEvents,
  Favorite,
  Palette,
  Schedule,
  VerifiedUser,
} from '@mui/icons-material';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import { siteConfig } from '@/data/siteConfig';
import { fadeUp, staggerContainer } from '@/lib/motion';

const reasons = [
  {
    icon: CameraAlt,
    title: 'Cinematic Eye',
    description:
      'We think in sequences, not shots. Every frame is composed like a still from a film — because your story deserves that level of intention.',
  },
  {
    icon: Favorite,
    title: 'Invisible Presence',
    description:
      'You\'ll forget we\'re there. Our documentary approach means the most authentic moments — the ones that hurt beautifully — happen naturally.',
  },
  {
    icon: Palette,
    title: 'Signature Editing',
    description:
      'Our post-processing is unmistakable: warm, film-like, timeless. Not a filter — a philosophy developed over 8 years and 500+ events.',
  },
  {
    icon: EmojiEvents,
    title: 'Award-Winning Work',
    description:
      '12 industry awards and features in Vogue Weddings, WeddingWire, and The Knot. We\'re recognised because we\'re obsessed.',
  },
  {
    icon: Schedule,
    title: 'Reliable & Communicative',
    description:
      'Timelines met. Calls answered. Galleries delivered on time. Because your peace of mind is part of what we\'re hired to protect.',
  },
  {
    icon: VerifiedUser,
    title: '100% 5-Star Reviews',
    description:
      'Every single review we\'ve received has been five stars. Not because we ask for them — because we earn them.',
  },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const countRef = useRef(0);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView || !elRef.current) return;
    const end = value;
    const duration = 1800;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.round(eased * end);
      if (elRef.current) elRef.current.textContent = String(countRef.current);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.8rem', md: '3.6rem' },
          color: 'gold.main',
          lineHeight: 1,
          mb: 0.5,
        }}
      >
        <span ref={elRef}>0</span>
        {suffix}
      </Typography>
      <Typography
        variant="overline"
        sx={{ color: 'text.secondary', fontSize: '0.68rem', letterSpacing: '0.15em' }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#012233',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.png)',
          backgroundSize: '180px',
          opacity: 0.035,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="Why Photo Pitaara"
          title="We Don't Just Photograph. We Bear Witness."
          subtitle="There are thousands of photographers. We chose to be storytellers — obsessive, disciplined, and genuinely moved by every love story we're invited into."
          light
        />
        <GoldDivider my={6} />

        {/* Stats row */}
        <Grid container spacing={4} sx={{ mb: 10, justifyContent: 'center' }}>
          {siteConfig.stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Grid>
          ))}
        </Grid>

        {/* Reason cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid container spacing={3}>
            {reasons.map((r) => (
              <Grid item xs={12} sm={6} md={4} key={r.title}>
                <motion.div variants={fadeUp} style={{ height: '100%' }}>
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      border: '1px solid rgba(255,183,3,0.15)',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      transition: 'border-color 0.3s ease, background-color 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(255,183,3,0.4)',
                        backgroundColor: 'rgba(255,183,3,0.04)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,183,3,0.12)',
                        mb: 3,
                      }}
                    >
                      <r.icon sx={{ color: 'gold.main', fontSize: 22 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ color: '#EBF5FB', mb: 1.5, fontSize: '1rem' }}
                    >
                      {r.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.88rem',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.8,
                      }}
                    >
                      {r.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
