import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { hotcBlogTeaser } from '@/data/hotcLanding';

const sans = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';
const serif = 'Georgia, "Times New Roman", serif';

export default function HotcPhotographyBlog() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fafafa', color: '#111' }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: serif,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 400,
            textAlign: 'center',
            mb: 1,
          }}
        >
          {hotcBlogTeaser.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: serif,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 400,
            textAlign: 'center',
            color: 'rgba(0,0,0,0.35)',
            mb: 4,
          }}
        >
          {hotcBlogTeaser.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: sans,
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.85,
            textAlign: 'center',
            maxWidth: 720,
            mx: 'auto',
            mb: 4,
          }}
        >
          {hotcBlogTeaser.body}
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            component={Link}
            href="/blog"
            sx={{
              fontFamily: sans,
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#111',
              borderBottom: '1px solid #111',
              pb: 0.25,
              '&:hover': { opacity: 0.55 },
            }}
          >
            Read the journal
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
