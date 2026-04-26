'use client';

import { Box, Tooltip, IconButton } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.whatsapp;
  const message = encodeURIComponent(
    "Hi, I'd like to enquire about a photography session with Photo Pitaara."
  );
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <Box
      component={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 32 },
        right: { xs: 20, md: 32 },
        zIndex: 1200,
      }}
    >
      {/* pulsing ring */}
      <Box
        sx={{
          position: 'absolute',
          inset: -6,
          borderRadius: '50%',
          border: '2px solid #25D366',
          opacity: 0.6,
          animation: 'waRing 2s ease-out infinite',
          '@keyframes waRing': {
            '0%': { transform: 'scale(1)', opacity: 0.7 },
            '100%': { transform: 'scale(1.6)', opacity: 0 },
          },
        }}
        aria-hidden="true"
      />
      <Tooltip title="Chat with us on WhatsApp" placement="left" arrow>
        <IconButton
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          sx={{
            width: 56,
            height: 56,
            backgroundColor: '#25D366',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
            '&:hover': {
              backgroundColor: '#1DA851',
              transform: 'scale(1.08)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsApp sx={{ fontSize: 28 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
