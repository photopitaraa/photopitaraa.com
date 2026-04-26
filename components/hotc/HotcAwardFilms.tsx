import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { hotcFilms } from '@/data/hotcLanding';

const sans = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';
const serif = 'Georgia, "Times New Roman", serif';

export default function HotcAwardFilms() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff', color: '#111' }}>
      <Container maxWidth="md">
        <Typography
          component="h2"
          sx={{
            fontFamily: sans,
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: 6,
            fontWeight: 500,
          }}
        >
          {hotcFilms.heading}
        </Typography>

        {hotcFilms.films.map((film) => (
          <Box key={film.title} sx={{ mb: 6 }}>
            <Typography
              sx={{
                fontFamily: serif,
                fontSize: { xs: '1.15rem', md: '1.25rem' },
                fontWeight: 600,
                mb: 2,
              }}
            >
              {film.title}
            </Typography>
            <Typography sx={{ fontFamily: sans, fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(0,0,0,0.75)' }}>
              {film.copy}
            </Typography>
          </Box>
        ))}

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography
            component={Link}
            href={hotcFilms.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-block',
              fontFamily: sans,
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              px: 3,
              py: 1.5,
              border: '1px solid #111',
              color: '#111',
              '&:hover': { bgcolor: '#111', color: '#fff' },
              transition: 'all 0.25s ease',
            }}
          >
            {hotcFilms.ctaLabel}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
