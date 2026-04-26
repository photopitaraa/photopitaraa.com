import Link from 'next/link';
import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Instagram, YouTube, Facebook, Pinterest } from '@mui/icons-material';
import { siteConfig } from '@/data/siteConfig';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const socialIcons = [
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: YouTube, href: siteConfig.social.youtube, label: 'YouTube' },
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Pinterest, href: siteConfig.social.pinterest, label: 'Pinterest' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#012233',
        color: '#EBF5FB',
        pt: { xs: 8, md: 12 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative grain */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.png)',
          backgroundSize: '180px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 700,
                mb: 2,
                color: '#EBF5FB',
              }}
            >
              Photo{' '}
              <Box component="span" sx={{ color: 'gold.main' }}>
                Pitaara
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                maxWidth: 300,
                mb: 3,
              }}
            >
              {siteConfig.description.slice(0, 140)}…
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  size="small"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      color: 'gold.main',
                      borderColor: 'gold.main',
                    },
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Icon sx={{ fontSize: 16 }} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Navigation */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{ color: 'gold.main', display: 'block', mb: 3, fontSize: '0.65rem' }}
            >
              Navigate
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.55)',
                      '&:hover': { color: '#EBF5FB' },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services quick links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{ color: 'gold.main', display: 'block', mb: 3, fontSize: '0.65rem' }}
            >
              Services
            </Typography>
            <Stack spacing={1.5}>
              {['Wedding Photography', 'Cinematic Films', 'Pre-Wedding', 'Maternity', 'Birthdays', 'Albums'].map(
                (s) => (
                  <Link key={s} href="/services">
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.88rem',
                        color: 'rgba(255,255,255,0.55)',
                        '&:hover': { color: '#EBF5FB' },
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {s}
                    </Typography>
                  </Link>
                )
              )}
            </Stack>
          </Grid>

          {/* Contact info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="overline"
              sx={{ color: 'gold.main', display: 'block', mb: 3, fontSize: '0.65rem' }}
            >
              Get in Touch
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography
                  sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', mb: 0.5 }}
                >
                  PHONE
                </Typography>
                <Typography
                  component="a"
                  href={`tel:${siteConfig.phone}`}
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.92rem',
                    color: '#EBF5FB',
                    '&:hover': { color: 'gold.main' },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {siteConfig.phone}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', mb: 0.5 }}
                >
                  EMAIL
                </Typography>
                <Typography
                  component="a"
                  href={`mailto:${siteConfig.email}`}
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.92rem',
                    color: '#EBF5FB',
                    '&:hover': { color: 'gold.main' },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {siteConfig.email}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', mb: 0.5 }}
                >
                  STUDIO
                </Typography>
                <Typography
                  sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}
                >
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Photo Pitaara. All rights reserved.
          </Typography>
          <Typography sx={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
            Crafted with care · Mumbai, India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
