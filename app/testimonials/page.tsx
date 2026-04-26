import type { Metadata } from 'next';
import Image from 'next/image';
import { Box, Container, Rating, Typography } from '@mui/material';
import { FormatQuote, Google } from '@mui/icons-material';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedButton from '@/components/ui/AnimatedButton';
import CTABanner from '@/components/sections/CTABanner';
import { testimonials } from '@/data/testimonials';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials',
  description:
    'Real reviews from real couples. 100% 5-star ratings across Google and WeddingWire. Read what 500+ families say about Photo Pitaara.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: testimonials.length,
    bestRating: '5',
    worstRating: '5',
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: t.rating },
    reviewBody: t.text,
    datePublished: t.date,
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor: '#012233',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/noise.png)', backgroundSize: '200px', opacity: 0.04 }} />
        <Container maxWidth="xl">
          <SectionHeading
            eyebrow="What Our Couples Say"
            title="Every Review Is Someone's Wedding Day"
            subtitle="We don't ask for reviews — we earn them. Every word below was written by a real couple, reflecting on one of the most important days of their lives."
            light
          />
        </Container>
      </Box>

      {/* Aggregate stat */}
      <Box py={6} sx={{ backgroundColor: '#023047' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
            {[
              { value: '5.0', label: 'Average Rating', suffix: '/ 5' },
              { value: '500+', label: 'Weddings', suffix: '' },
              { value: '100%', label: '5-Star Reviews', suffix: '' },
              { value: '12', label: 'Industry Awards', suffix: '' },
            ].map((s) => (
              <Box key={s.label}>
                <Typography variant="h2" sx={{ color: 'gold.main', fontSize: { xs: '2.4rem', md: '3.2rem' }, lineHeight: 1 }}>
                  {s.value}
                  {s.suffix && (
                    <Typography component="span" sx={{ fontSize: '1rem', color: 'rgba(235,245,251,0.4)', ml: 0.5 }}>
                      {s.suffix}
                    </Typography>
                  )}
                </Typography>
                <Typography variant="overline" sx={{ color: 'rgba(235,245,251,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Full-bleed hero quote */}
      <Box py={{ xs: 10, md: 14 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              mb: 10,
              p: { xs: 5, md: 10 },
              backgroundColor: '#023047',
              borderRadius: '8px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255,183,3,0.2)',
            }}
          >
            <FormatQuote
              sx={{
                fontSize: 160,
                color: 'rgba(255,183,3,0.06)',
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              aria-hidden="true"
            />
            <Rating value={5} readOnly sx={{ mb: 3, '& .MuiRating-iconFilled': { color: 'gold.main' } }} />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                fontStyle: 'italic',
                color: '#EBF5FB',
                lineHeight: 1.5,
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                position: 'relative',
              }}
            >
              &ldquo;{testimonials[0].text}&rdquo;
            </Typography>
            <Typography variant="overline" sx={{ color: 'gold.main', fontSize: '0.68rem', letterSpacing: '0.2em' }}>
              {testimonials[0].name} — {testimonials[0].eventType}, {testimonials[0].location}
            </Typography>
          </Box>

          {/* Masonry review cards */}
          <Box sx={{ columns: { xs: 1, sm: 2, md: 3 }, columnGap: '24px' }}>
            {testimonials.map((t) => (
              <Box key={t.id} sx={{ breakInside: 'avoid', mb: 3 }}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: '#fff',
                    border: '1px solid rgba(255,183,3,0.15)',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                  }}
                >
                  <Rating value={t.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: 'gold.main' } }} />

                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      lineHeight: 1.75,
                      color: 'text.primary',
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      pt: 2,
                      borderTop: '1px solid rgba(255,183,3,0.1)',
                    }}
                  >
                    {t.image && (
                      <Box sx={{ position: 'relative', width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                        <Image src={t.image} alt={t.name} fill style={{ objectFit: 'cover' }} />
                      </Box>
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}>
                        {t.name}
                      </Typography>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'text.secondary' }}>
                        {t.eventType} · {t.location} · {t.date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
                      {t.platform === 'Google' && <Google sx={{ fontSize: 16, color: '#4285F4' }} />}
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'text.secondary' }}>
                        {t.platform}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <GoldDivider my={8} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Ready to Add Your Story?
            </Typography>
            <Typography sx={{ fontFamily: 'Inter, sans-serif', color: 'text.secondary', mb: 4, maxWidth: 480, mx: 'auto' }}>
              Every review above started with a couple who trusted us. Let&apos;s talk about making yours the next one.
            </Typography>
            <AnimatedButton variant="filled" href="/contact">
              Book a Consultation
            </AnimatedButton>
          </Box>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}
