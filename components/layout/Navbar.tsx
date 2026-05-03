'use client';

import { useMemo, useState, useEffect } from 'react';
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
import { alpha, useTheme } from '@mui/material/styles';
import { Close, DarkModeOutlined, ExpandMore, KeyboardArrowDown, LightModeOutlined, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme as useNextTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { drawerLinkVariants, easeOut } from '@/lib/motion';
import { siteConfig } from '@/data/siteConfig';
import { galleryCategories, type GalleryCategory } from '@/data/gallery';
import { homePageContainerGutterSx } from '@/lib/homePageGutters';

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
  const muiTheme = useTheme();
  const homePageGutters = pathname === '/';
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

  /** Only the homepage hero sits under a transparent bar — elsewhere assume light/neutral page chrome. */
  const homeTransparentChrome = pathname === '/' && !scrolled;
  const navSolidVisual = scrolled || !homeTransparentChrome;
  const isDark = muiTheme.palette.mode === 'dark';

  const navbarVariants = useMemo(
    () => ({
      transparent: {
        backgroundColor: 'rgba(0,0,0,0)',
        boxShadow: 'none',
      },
      solid: {
        backgroundColor: isDark
          ? alpha('#111111', 0.97)
          : alpha(muiTheme.palette.background.paper, 0.97),
        boxShadow: isDark
          ? '0 1px 0 rgba(200,164,106,0.1)'
          : `0 1px 0 ${alpha(muiTheme.palette.divider, 1)}`,
      },
    }),
    [isDark, muiTheme.palette.background.paper, muiTheme.palette.divider],
  );

  const linkColor = homeTransparentChrome
    ? 'rgba(255,255,255,0.92)'
    : isDark
      ? 'rgba(255,255,255,0.92)'
      : muiTheme.palette.text.primary;

  const logoMain = homeTransparentChrome ? '#ffffff' : isDark ? '#ffffff' : muiTheme.palette.text.primary;

  const { resolvedTheme, setTheme } = useNextTheme();
  const [themeToggleReady, setThemeToggleReady] = useState(false);
  useEffect(() => {
    setThemeToggleReady(true);
  }, []);

  return (
    <>
      <MotionAppBar
        position="fixed"
        variants={navbarVariants}
        animate={navSolidVisual ? 'solid' : 'transparent'}
        initial={navSolidVisual ? 'solid' : 'transparent'}
        transition={{ duration: 0.35, ease: easeOut }}
        sx={{ zIndex: 1100 }}
      >
        <Container maxWidth="xl" sx={homePageGutters ? homePageContainerGutterSx : undefined}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: { xs: 1.25, md: scrolled ? 1.15 : 1.65 },
              transition: 'padding 0.35s ease',
            }}
          >
            <Link href="/" aria-label={`${siteConfig.name} — Home`} style={{ textDecoration: 'none' }}>
              <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 1.5 }}>
                <Box sx={{ lineHeight: 0, display: 'inline-flex', flexShrink: 0 }}>
                  <Image
                    src="/images/Logo-Square.png"
                    alt={`${siteConfig.name} logo`}
                    width={70}
                    height={70}
                    priority
                    style={{ display: 'block', objectFit: 'contain' }}
                  />
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"Great Vibes", cursive',
                    fontWeight: 400,
                    color: logoMain,
                    textShadow: homeTransparentChrome ? '0 1px 18px rgba(0,0,0,0.45)' : 'none',
                    transition: 'color 0.35s ease',
                    fontSize: { xs: '1.85rem', sm: '2.15rem', md: '2.5rem' },
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                    pt: { xs: 0.25, md: 0.5 },
                  }}
                >
                  {siteConfig.name}
                </Typography>
              </Stack>
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
                    textShadow: homeTransparentChrome ? '0 1px 12px rgba(0,0,0,0.5)' : 'none',
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
                  textShadow: homeTransparentChrome ? '0 1px 12px rgba(0,0,0,0.5)' : 'none',
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
                      textShadow: homeTransparentChrome ? '0 1px 12px rgba(0,0,0,0.5)' : 'none',
                      transition: 'color 0.25s ease',
                      '&:hover': { color: 'gold.main' },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}

              {themeToggleReady && (
                <IconButton
                  type="button"
                  aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  size="small"
                  sx={{ color: linkColor, mx: 0.5 }}
                >
                  {resolvedTheme === 'dark' ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
                </IconButton>
              )}

              <Link href="/contact">
                <Box
                  component="span"
                  sx={{
                    ml: 1.5,
                    display: 'inline-block',
                    px: 2.5,
                    py: 0.85,
                    border: '1.5px solid',
                    borderColor: homeTransparentChrome ? 'rgba(255,255,255,0.85)' : 'gold.main',
                    borderRadius: '2px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: homeTransparentChrome ? '#fff' : isDark ? '#fff' : 'gold.dark',
                    bgcolor: homeTransparentChrome ? 'rgba(255,255,255,0.1)' : 'transparent',
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
                color: linkColor,
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
            bgcolor: 'background.paper',
            p: 3,
            color: 'text.primary',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ fontFamily: '"Great Vibes", cursive', fontWeight: 400, fontSize: '1.85rem', color: 'inherit', lineHeight: 1.1 }}>
            {siteConfig.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {themeToggleReady && (
              <IconButton
                aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                sx={{ color: 'inherit' }}
              >
                {resolvedTheme === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
              </IconButton>
            )}
            <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu" sx={{ color: 'inherit' }}>
              <Close />
            </IconButton>
          </Box>
        </Box>

        <AnimatePresence>
          {mobileOpen && (
            <Stack spacing={2}>
              <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: '1.35rem',
                    letterSpacing: '0.02em',
                    color: 'text.primary',
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Typography
                sx={{
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 600,
                  fontSize: '0.68rem',
                  color: 'text.secondary',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  mt: 0.5,
                }}
              >
                Portfolio
              </Typography>
              <Link href="/portfolio" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  sx={{
                    pl: 1,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: 'text.primary',
                  }}
                >
                  All work
                </Typography>
              </Link>
              {portfolioCategories.map((c) => (
                <Link key={c} href={`/portfolio?category=${encodeURIComponent(c)}`} onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography
                    sx={{
                      pl: 1,
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: 'text.primary',
                    }}
                  >
                    {c}
                  </Typography>
                </Link>
              ))}
              {mainLinks.slice(1).map((link, i) => (
                <motion.div key={link.href} custom={i} variants={drawerLinkVariants} initial="closed" animate="open" exit="closed">
                  <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        letterSpacing: '0.04em',
                        color: 'text.primary',
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mt: 1, borderBottom: '1px solid', borderColor: 'gold.main', pb: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'gold.dark',
                    }}
                  >
                    Book now
                  </Typography>
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
