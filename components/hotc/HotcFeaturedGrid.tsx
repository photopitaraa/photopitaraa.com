import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { hotcFeaturedItems } from '@/data/hotcLanding';

const sans = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

export default function HotcFeaturedGrid() {
  return (
    <Box component="section" sx={{ bgcolor: '#fff', color: '#111', pb: { xs: 6, md: 8 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1680, px: { xs: 1.5, md: 2 } }}>
        <Typography
          sx={{
            fontFamily: sans,
            fontSize: '0.68rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: 4,
            color: 'rgba(0,0,0,0.45)',
          }}
        >
          Featured
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 1, md: 1.25 },
          }}
        >
          {hotcFeaturedItems.map((item, i) => (
            <Link key={`${item.href}-${i}`} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  bgcolor: '#eee',
                  '&:hover img': { transform: 'scale(1.03)' },
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:600px) 100vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }}
                />
                <Box sx={{ position: 'absolute', left: 20, right: 20, bottom: 20, color: '#fff' }}>
                  <Typography sx={{ fontFamily: sans, fontSize: '0.65rem', letterSpacing: '0.12em', opacity: 0.85, mb: 0.5 }}>
                    {item.displayDate}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '1.25rem', fontWeight: 400 }}>
                    {item.title}
                  </Typography>
                  {item.subtitle && (
                    <Typography sx={{ fontFamily: sans, fontSize: '0.75rem', opacity: 0.75, mt: 0.5 }}>
                      {item.subtitle}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
