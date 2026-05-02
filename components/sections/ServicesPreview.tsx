'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { services } from '@/data/services';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box component="section" py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Every Celebration Deserves Its Own Story"
          subtitle="From intimate ceremonies to grand destination weddings — we bring the same obsessive craft to every event we're trusted with."
        />
        <GoldDivider my={6} />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid container spacing={3}>
            {services.slice(0, 6).map((service) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={service.slug}>
                  <motion.div variants={fadeUp} style={{ height: '100%' }}>
                    <Link href={`/services#${service.slug}`}>
                      <Box
                        data-cursor-grow
                        sx={{
                          height: '100%',
                          border: '1px solid rgba(255,183,3,0.2)',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          backgroundColor: '#fff',
                          transition: 'box-shadow 0.35s ease, transform 0.35s ease',
                          '&:hover': {
                            boxShadow: '0 16px 48px rgba(2,48,71,0.1)',
                            transform: 'translateY(-4px)',
                          },
                          '&:hover .service-img': { transform: 'scale(1.06)' },
                        }}
                      >
                        {/* Cover image */}
                        <Box sx={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                          <Image
                            src={service.coverImage}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="service-img"
                            style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to top, rgba(2,30,50,0.5) 0%, transparent 60%)',
                            }}
                          />
                        </Box>

                        <Box sx={{ p: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{ fontSize: '1rem', mb: 1, color: 'text.primary' }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '0.85rem',
                              color: 'text.secondary',
                              lineHeight: 1.7,
                            }}
                          >
                            {service.shortDescription}
                          </Typography>
                        </Box>
                      </Box>
                    </Link>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <AnimatedButton variant="outlined" href="/services">
            All Services
          </AnimatedButton>
        </Box>
      </Container>
    </Box>
  );
}
