import { Box, Container, Typography } from '@mui/material';
import { hotcManifesto, hotcSelectedIntro } from '@/data/hotcLanding';

const sans = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

export default function HotcManifesto() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: '#fafafa', color: '#111' }}>
      <Container maxWidth="md">
        <Typography
          sx={{
            fontFamily: sans,
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.9,
            textAlign: 'center',
            mb: 6,
          }}
        >
          {hotcManifesto}
        </Typography>
        <Typography
          sx={{
            fontFamily: sans,
            fontSize: { xs: '0.88rem', md: '0.92rem' },
            lineHeight: 1.85,
            textAlign: 'center',
            color: 'rgba(0,0,0,0.6)',
          }}
        >
          {hotcSelectedIntro}
        </Typography>
      </Container>
    </Box>
  );
}
