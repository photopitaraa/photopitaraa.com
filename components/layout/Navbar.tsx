'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { Close, ExpandMore, KeyboardArrowDown, Menu as MenuIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariantsUnified, drawerLinkVariants, easeOut } from '@/lib/motion';
import { siteConfig } from '@/data/siteConfig';
import { galleryCategories, type GalleryCategory } from '@/data/gallery';

const MotionAppBar = motion.create(AppBar);

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Films', href: '/services#cinematic-films' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

const portfolioCategories = galleryCategories.filter((c): c is GalleryCategory => c !== 'All');

function navLinkActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/';
  const base = href.split('#')[0];
  if (!base) return false;
  if (base === '/portfolio') return pathname.startsWith('/portfolio');
  if (base === '/services') return pathname.startsWith('/services');
  if (base === '/blog') return pathname.startsWith('/blog');
  return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioAnchor, setPortfolioAnchor] = useState<null | HTMLElement>(null);
  const scrolled = useScrollTrigger({ threshold: 48, disableHysteresis: true });

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const onTop = !scrolled;
  const lightText = onTop;
  const linkColor = lightText ? 'rgba(255,255,255,0.92)' : 'text.primary';
  const logoMain = lightText ? '#fff' : 'text.primary';

  return (
    <>
      <MotionAppBar
        position="fixed"
        variants={navbarVariantsUnified}
        animate={scrolled ? 'solid' : 'transparent'}
        initial="transparent"
        transition={{ duration: 0.35, ease: easeOut }}
        sx={{ zIndex: 1100 }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: { xs: 1.25, md: scrolled ? 1.15 : 1.65 },
              transition: 'padding 0.35s ease',
            }}
          >
            <Link href="/" aria-label={`${siteConfig.name} — Home`}>
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: logoMain,
                  textShadow: lightText ? '0 1px 18px rgba(0,0,0,0.45)' : 'none',
                  transition: 'color 0.35s ease',
                  fontSize: { xs: '1.35rem', md: '1.65rem' },
                }}
              >
                <Box component="span" sx={{ lineHeight: 0, display: 'inline-flex' }}>
                  <Image
                    src="/images/Logo-Square.png"
                    alt={`${siteConfig.name} logo`}
                    width={70}
                    height={70}
                    priority
                    style={{ display: 'block', objectFit: 'contain' }}
                  />
                </Box>
              </Typography>
            </Link>

            <Stack direction="row" spacing={0.25} sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
              <Link href="/">
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    px: 1.25,
                    py: 1,
                    color: navLinkActive('/', pathname) ? 'gold.main' : linkColor,
                    textShadow: lightText ? '0 1px 12px rgba(0,0,0,0.5)' : 'none',
                    transition: 'color 0.25s ease',
                    '&:hover': { color: 'gold.main' },
                  }}
                >
                  Home
                </Typography>
              </Link>

              <Typography
                component="button"
                type="button"
                onClick={(e) => setPortfolioAnchor(e.currentTarget)}
                sx={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  px: 1.25,
                  py: 1,
                  color: navLinkActive('/portfolio', pathname) ? 'gold.main' : linkColor,
                  textShadow: lightText ? '0 1px 12px rgba(0,0,0,0.5)' : 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.25,
                  '&:hover': { color: 'gold.main' },
                }}
              >
                Portfolio
                <KeyboardArrowDown sx={{ fontSize: 16 }} />
              </Typography>
              <Menu
                anchorEl={portfolioAnchor}
                open={Boolean(portfolioAnchor)}
                onClose={() => setPortfolioAnchor(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                PaperProps={{ sx: { mt: 1, minWidth: 200 } }}
              >
                <MenuItem component={Link} href="/portfolio" onClick={() => setPortfolioAnchor(null)}>
                  All work
                </MenuItem>
                {portfolioCategories.map((c) => (
                  <MenuItem
                    key={c}
                    component={Link}
                    href={`/portfolio?category=${encodeURIComponent(c)}`}
                    onClick={() => setPortfolioAnchor(null)}
                  >
                    {c}
                  </MenuItem>
                ))}
              </Menu>

              {mainLinks.slice(1).map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      px: 1.25,
                      py: 1,
                      color: navLinkActive(link.href, pathname) ? 'gold.main' : linkColor,
                      textShadow: lightText ? '0 1px 12px rgba(0,0,0,0.5)' : 'none',
                      transition: 'color 0.25s ease',
                      '&:hover': { color: 'gold.main' },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}

              <Link href="/contact">
                <Box
                  component="span"
                  sx={{
                    ml: 1.5,
                    display: 'inline-block',
                    px: 2.5,
                    py: 0.85,
                    border: '1.5px solid',
                    borderColor: lightText ? 'rgba(255,255,255,0.85)' : 'gold.main',
                    borderRadius: '2px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: lightText ? '#fff' : 'gold.dark',
                    bgcolor: lightText ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: 'gold.main',
                      color: '#111111',
                      borderColor: 'gold.main',
                    },
                  }}
                >
                  Book now
                </Box>
              </Link>
            </Stack>

            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              sx={{
                display: { xs: 'flex', lg: 'none' },
                color: lightText ? '#fff' : 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </MotionAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: 420,
            bgcolor: '#1E1E1E',
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 700, fontSize: '1.35rem' }}>
            Photo <Box component="span" sx={{ color: 'gold.main' }}>Pitaara</Box>
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <Close />
          </IconButton>
        </Box>

        <AnimatePresence>
          {mobileOpen && (
            <Stack spacing={2}>
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Home</Typography>
              </Link>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.75rem', color: 'text.secondary', letterSpacing: '0.1em' }}>
                PORTFOLIO
              </Typography>
              <Link href="/portfolio" onClick={() => setMobileOpen(false)}>
                <Typography sx={{ pl: 1, fontSize: '0.95rem' }}>All work</Typography>
              </Link>
              {portfolioCategories.map((c) => (
                <Link key={c} href={`/portfolio?category=${encodeURIComponent(c)}`} onClick={() => setMobileOpen(false)}>
                  <Typography sx={{ pl: 1, fontSize: '0.95rem' }}>{c}</Typography>
                </Link>
              ))}
              {mainLinks.slice(1).map((link, i) => (
                <motion.div key={link.href} custom={i} variants={drawerLinkVariants} initial="closed" animate="open" exit="closed">
                  <Link href={link.href} onClick={() => setMobileOpen(false)}>
                    <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>{link.label}</Typography>
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mt: 1, borderBottom: '1px solid', borderColor: 'gold.main', pb: 0.5 }}>
                  <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', fontWeight: 600 }}>Book now</Typography>
                  <ExpandMore sx={{ fontSize: 18, color: 'gold.main' }} />
                </Box>
              </Link>
            </Stack>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
}
