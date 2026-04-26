import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { hotcSignature } from '@/data/hotcLanding';

const sans = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';
const serif = 'Georgia, "Times New Roman", serif';

export default function HotcSignature() {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 11 }, bgcolor: '#fff', color: '#111' }}>
      <Container maxWidth="md">
        <Box
          sx={{
            border: '1px solid rgba(0,0,0,0.12)',
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 7 },
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontFamily: serif, fontSize: { xs: '1.35rem', md: '1.6rem' }, fontWeight: 400, mb: 3 }}>
            {hotcSignature.title}
          </Typography>
          <Typography sx={{ fontFamily: sans, fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(0,0,0,0.72)', mb: 4 }}>
            {hotcSignature.body}
          </Typography>
          <Typography
            component={Link}
            href={hotcSignature.ctaHref}
            sx={{
              fontFamily: sans,
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              borderBottom: '1px solid #111',
              pb: 0.25,
              color: '#111',
              '&:hover': { opacity: 0.5 },
            }}
          >
            {hotcSignature.ctaLabel}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
