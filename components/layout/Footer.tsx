'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Instagram, YouTube, Facebook, Pinterest } from '@mui/icons-material';
import { siteConfig } from '@/data/siteConfig';
import { homePageContainerGutterSx } from '@/lib/homePageGutters';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

const socialIcons = [
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: YouTube, href: siteConfig.social.youtube, label: 'YouTube' },
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Pinterest, href: siteConfig.social.pinterest, label: 'Pinterest' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl" sx={pathname === '/' ? homePageContainerGutterSx : undefined}>
        <Grid container spacing={{ xs: 5, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontFamily: '"Great Vibes", cursive', fontWeight: 400, mb: 2, fontSize: '2.1rem', lineHeight: 1.15 }}>
              {siteConfig.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 320, mb: 2 }}>
              {siteConfig.description}
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': { color: 'gold.main', borderColor: 'gold.main' },
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="overline" sx={{ color: 'gold.main', letterSpacing: '0.18em', display: 'block', mb: 2 }}>
              Quick links
            </Typography>
            <Stack spacing={1.25}>
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', '&:hover': { color: 'primary.main' } }}>
                    {l.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="overline" sx={{ color: 'gold.main', letterSpacing: '0.18em', display: 'block', mb: 2 }}>
              Pan India
            </Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'center', md: 'center' }}
              spacing={{ xs: 2, md: 2.25 }}
              aria-label="Pan India photography coverage"
              sx={{
                p: { xs: 2.25, sm: 2.5, md: 2.25 },
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'rgba(200,164,106,0.22)',
                width: '100%',
                maxWidth: { xs: 420, sm: 'none' },
                mx: { xs: 'auto', md: 0 },
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(160deg, rgba(200,164,106,0.08) 0%, rgba(17,17,17,0.2) 55%, transparent 100%)'
                    : 'linear-gradient(160deg, rgba(2,48,71,0.06) 0%, rgba(255,255,255,0.5) 100%)',
              }}
            >
              <Box
                component="img"
                src="/icons/india-outline.svg"
                alt=""
                width={56}
                height={66}
                loading="lazy"
                decoding="async"
                sx={{
                  width: { xs: 64, md: 56 },
                  height: { xs: 75, md: 66 },
                  flexShrink: 0,
                  objectFit: 'contain',
                  opacity: 0.98,
                  filter: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'drop-shadow(0 0 12px rgba(200,164,106,0.28))'
                      : 'drop-shadow(0 1px 2px rgba(2,48,71,0.12))',
                }}
              />
              <Box sx={{ minWidth: 0, width: '100%', textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600,
                    fontSize: { xs: '1.2rem', sm: '1.28rem', md: '1.25rem' },
                    letterSpacing: { xs: '0.02em', md: '0.06em' },
                    color: 'text.primary',
                    lineHeight: 1.3,
                    mb: 0.75,
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {'India-wide & destination'}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.8rem', md: '0.78rem' },
                    color: 'text.secondary',
                    lineHeight: 1.65,
                    maxWidth: { xs: '100%', md: 280 },
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  From our studio in {siteConfig.address.city} to celebrations anywhere your story takes you.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="overline" sx={{ color: 'gold.main', letterSpacing: '0.18em', display: 'block', mb: 2 }}>
              Get in touch
            </Typography>
            <Typography component="a" href={`tel:${siteConfig.phone}`} sx={{ display: 'block', color: 'text.primary', mb: 1, textDecoration: 'none' }}>
              {siteConfig.phone}
            </Typography>
            <Typography component="a" href={`mailto:${siteConfig.email}`} sx={{ display: 'block', color: 'text.primary', mb: 2, textDecoration: 'none' }}>
              {siteConfig.email}
            </Typography>
            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', lineHeight: 1.7 }}>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}
              {siteConfig.address.pin ? ` ${siteConfig.address.pin}` : ''}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'inherit' },
          }}
        >
          <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
          <Link href="/contact" style={{ textDecoration: 'none', maxWidth: '100%' }}>
            <Typography
              sx={{
                fontSize: { xs: '0.72rem', sm: '0.75rem' },
                letterSpacing: { xs: '0.08em', sm: '0.12em' },
                textTransform: 'uppercase',
                color: 'gold.dark',
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
                textAlign: { xs: 'center', sm: 'inherit' },
                lineHeight: 1.45,
              }}
            >
              Enquiries &amp; availability
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
