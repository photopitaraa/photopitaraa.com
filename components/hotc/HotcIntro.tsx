import { Box, Container, Typography } from '@mui/material';
import { hotcIntro } from '@/data/hotcLanding';

const sans = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

export default function HotcIntro() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, px: 2, bgcolor: '#fff', color: '#111' }}>
      <Container maxWidth="md">
        <Typography
          sx={{
            fontFamily: sans,
            fontSize: { xs: '1rem', md: '1.05rem' },
            fontWeight: 400,
            lineHeight: 1.85,
            textAlign: 'center',
            letterSpacing: '0.01em',
            mb: 4,
          }}
        >
          {hotcIntro.lead}
        </Typography>
        <Typography
          sx={{
            fontFamily: sans,
            fontSize: { xs: '0.8rem', md: '0.82rem' },
            lineHeight: 1.75,
            textAlign: 'center',
            color: 'rgba(0,0,0,0.55)',
            maxWidth: 640,
            mx: 'auto',
          }}
        >
          {hotcIntro.awards}
        </Typography>
      </Container>
    </Box>
  );
}
