'use client';

import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      sx={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 720 : 'none', mx: center ? 'auto' : 0 }}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              mb: 2,
              color: 'gold.main',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
            }}
          >
            {eyebrow}
          </Typography>
        </motion.div>
      )}

      <motion.div variants={fadeUp}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.4rem', md: '3rem' },
            color: light ? '#EBF5FB' : 'text.primary',
            mb: subtitle ? 2.5 : 0,
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {subtitle && (
        <motion.div variants={fadeUp}>
          <Typography
            variant="subtitle1"
            sx={{
              color: light ? 'rgba(235,245,251,0.7)' : 'text.secondary',
              maxWidth: 600,
              mx: center ? 'auto' : 0,
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
}
