'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { easeOut } from '@/lib/motion';

const badges = [
  'Award-winning wedding photography & films',
  'Full-time in-house photographers & editors',
  'Transparent timelines & delivery dates',
  'India-wide & destination celebrations',
];

export default function TrustBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: { xs: 3, md: 4 },
        borderBlock: '1px solid rgba(2,48,71,0.08)',
        bgcolor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {badges.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
            >
              <Typography
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'left' },
                  pl: { md: 2 },
                  borderLeft: { md: '2px solid' },
                  borderColor: 'gold.main',
                }}
              >
                {text}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
