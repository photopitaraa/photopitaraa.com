import Link from 'next/link';
import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Instagram, YouTube, Facebook, Pinterest } from '@mui/icons-material';
import { siteConfig } from '@/data/siteConfig';
import { serviceCities } from '@/data/serviceCities';

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
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#FAF8F5',
        color: 'text.primary',
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: '1px solid rgba(2,48,71,0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, mb: 2 }}>
              Photo<Box component="span" sx={{ color: 'gold.main' }}>pitaraa</Box>
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
                    border: '1px solid rgba(2,48,71,0.12)',
                    '&:hover': { color: 'gold.main', borderColor: 'gold.main' },
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
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

          <Grid item xs={6} md={3}>
            <Typography variant="overline" sx={{ color: 'gold.main', letterSpacing: '0.18em', display: 'block', mb: 2 }}>
              We travel
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {serviceCities.map((city) => (
                <Typography key={city} component="span" sx={{ fontSize: '0.78rem', color: 'text.secondary', mr: 1 }}>
                  {city}
                </Typography>
              ))}
            </Box>
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
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pin}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(2,48,71,0.08)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'gold.dark' }}>
              Enquiries &amp; availability
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
