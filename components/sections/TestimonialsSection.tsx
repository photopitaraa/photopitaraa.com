'use client';

import { useRef } from 'react';
import { Box, Container, Grid, Rating, Typography } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { testimonials } from '@/data/testimonials';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const featured = testimonials.slice(0, 3);

  return (
    <Box
      component="section"
      py={{ xs: 10, md: 14 }}
      sx={{
        bgcolor: 'background.default',
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(33,158,188,0.1), transparent 55%)',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="What Couples Say"
          title="Stories From the People Who Trusted Us"
          subtitle="Read from real couples — unedited, unscripted, and deeply appreciated."
        />
        <GoldDivider my={6} />

        {/* Full-bleed pull quote */}
        <Box
          sx={{
            mb: 10,
            p: { xs: 5, md: 8 },
            backgroundColor: 'rgba(1,18,35,0.78)',
            backdropFilter: 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: 'blur(20px) saturate(150%)',
            border: '1px solid rgba(255,183,3,0.22)',
            borderRadius: '10px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 28px 64px rgba(1,18,35,0.2)',
          }}
        >
          <FormatQuote
            sx={{
              fontSize: 120,
              color: 'rgba(255,183,3,0.08)',
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.4rem', md: '2rem' },
              color: '#EBF5FB',
              fontStyle: 'italic',
              lineHeight: 1.5,
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              position: 'relative',
            }}
          >
            &ldquo;They didn&apos;t photograph our wedding. They told our story — the way only someone who was
            truly paying attention could.&rdquo;
          </Typography>
          <Typography
            variant="overline"
            sx={{ color: 'gold.main', fontSize: '0.68rem', letterSpacing: '0.2em' }}
          >
            {/* Priya & Arjun Mehta — Udaipur Wedding, February 2025 */}
          </Typography>
        </Box>

        {/* Review cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid container spacing={3}>
            {featured.map((t) => (
              <Grid item xs={12} md={4} key={t.id}>
                <motion.div variants={fadeUp} style={{ height: '100%' }}>
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      bgcolor: 'background.paper',
                      border: '1px solid rgba(255,183,3,0.15)',
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2.5,
                    }}
                  >
                    <Rating
                      value={t.rating}
                      readOnly
                      size="small"
                      sx={{ '& .MuiRating-iconFilled': { color: 'gold.main' } }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1.05rem',
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                        color: 'text.primary',
                        flex: 1,
                      }}
                    >
                      &ldquo;{t.text.slice(0, 220)}{t.text.length > 220 ? '…' : ''}&rdquo;
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2, borderTop: '1px solid rgba(255,183,3,0.1)' }}>
                      {t.image && (
                        <Box sx={{ position: 'relative', width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                          <Image src={t.image} alt={t.name} fill style={{ objectFit: 'cover' }} />
                        </Box>
                      )}
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            color: 'text.primary',
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.75rem',
                            color: 'text.secondary',
                          }}
                        >
                          {t.eventType} · {t.location}
                        </Typography>
                      </Box>
                      <Box sx={{ ml: 'auto' }}>
                        <Typography
                          sx={{
                            fontFamily: 'Cinzel, serif',
                            fontSize: '0.6rem',
                            letterSpacing: '0.1em',
                            color: 'gold.main',
                            textTransform: 'uppercase',
                          }}
                        >
                          {t.platform}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <AnimatedButton variant="outlined" href="/testimonials">
            Read All Reviews
          </AnimatedButton>
        </Box>
      </Container>
    </Box>
  );
}
