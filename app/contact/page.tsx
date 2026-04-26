import type { Metadata } from 'next';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Email, LocationOn, Phone, Schedule } from '@mui/icons-material';
import ContactForm from '@/components/forms/ContactForm';
import GoldDivider from '@/components/ui/GoldDivider';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Get in touch with Photo Pitaara to check availability and book your photography session. Based in Mumbai — serving weddings across India.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pin,
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  sameAs: Object.values(siteConfig.social),
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Email,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: LocationOn,
    label: 'Studio',
    value: `${siteConfig.address.line1}, ${siteConfig.address.city}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.line1 + ', ' + siteConfig.address.city)}`,
  },
  {
    icon: Schedule,
    label: 'Hours',
    value: siteConfig.workingHours.weekdays,
    subValue: siteConfig.workingHours.sunday,
  },
];

export default function ContactPage() {
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
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ display: 'block', color: 'gold.main', fontSize: '0.68rem', letterSpacing: '0.22em', mb: 2 }}
            >
              Let&apos;s Talk
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.6rem', md: '4rem' },
                color: '#EBF5FB',
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Your Story Starts Here
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(235,245,251,0.6)',
                lineHeight: 1.85,
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              Tell us about your day. We&apos;ll listen, ask the right questions, and let you know if we&apos;re the right fit — no pressure, just an honest conversation.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Split layout: form + info */}
      <Box py={{ xs: 8, md: 14 }} sx={{ backgroundColor: '#EBF5FB' }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, md: 10 }}>
            {/* Form */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ display: 'block', color: 'gold.main', fontSize: '0.65rem', letterSpacing: '0.2em', mb: 2 }}
              >
                Send Us a Message
              </Typography>
              <Typography variant="h3" sx={{ mb: 4, fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Tell Us About Your Event
              </Typography>
              <ContactForm />
            </Grid>

            {/* Info */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: { xs: 4, md: 6 },
                  backgroundColor: '#023047',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,183,3,0.15)',
                  height: 'fit-content',
                  position: { md: 'sticky' },
                  top: { md: 100 },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ display: 'block', color: 'gold.main', fontSize: '0.65rem', letterSpacing: '0.2em', mb: 4 }}
                >
                  Studio Details
                </Typography>

                <Stack spacing={4}>
                  {contactDetails.map(({ icon: Icon, label, value, href, subValue }) => (
                    <Box key={label} sx={{ display: 'flex', gap: 2.5 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255,183,3,0.1)',
                          borderRadius: '50%',
                          flexShrink: 0,
                        }}
                      >
                        <Icon sx={{ color: 'gold.main', fontSize: 18 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(235,245,251,0.35)', textTransform: 'uppercase', mb: 0.5 }}>
                          {label}
                        </Typography>
                        {href ? (
                          <Typography
                            component="a"
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            sx={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '0.9rem',
                              color: '#EBF5FB',
                              '&:hover': { color: 'gold.main' },
                              transition: 'color 0.2s ease',
                            }}
                          >
                            {value}
                          </Typography>
                        ) : (
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#EBF5FB' }}>
                            {value}
                          </Typography>
                        )}
                        {subValue && (
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(235,245,251,0.4)', mt: 0.25 }}>
                            {subValue}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Stack>

                <GoldDivider my={4} />

                <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(235,245,251,0.55)', lineHeight: 1.75 }}>
                  &ldquo;We take a limited number of bookings each year. If your date is available, don&apos;t wait — it won&apos;t be for long.&rdquo;
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Google Map */}
          <Box sx={{ mt: 10, borderRadius: '8px', overflow: 'hidden', height: { xs: 280, md: 380 }, border: '1px solid rgba(255,183,3,0.15)' }}>
            <iframe
              src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? 'https://maps.google.com/maps?q=Bandra+West+Mumbai&output=embed'}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Photo Pitaara Studio Location"
              aria-label="Google Map showing Photo Pitaara studio location in Bandra West, Mumbai"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
