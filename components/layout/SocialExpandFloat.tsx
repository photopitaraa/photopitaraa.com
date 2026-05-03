'use client';

import { useState } from 'react';
import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material';
import { Close, Facebook, Instagram, Phone, Share, WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

export default function SocialExpandFloat() {
  const [open, setOpen] = useState(false);
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.whatsapp;
  const waMessage = encodeURIComponent(
    "Hi, I'd like to enquire about a photography session with Photopitaraa."
  );
  const whatsappHref = `https://wa.me/${waNumber}?text=${waMessage}`;
  const telHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;

  const actions = [
    { icon: <Instagram />, name: 'Instagram', href: siteConfig.social.instagram, external: true },
    { icon: <Facebook />, name: 'Facebook', href: siteConfig.social.facebook, external: true },
    { icon: <WhatsApp />, name: 'WhatsApp', href: whatsappHref, external: true },
    { icon: <Phone />, name: 'Call', href: telHref, external: false },
  ];

  return (
    <>
      <Backdrop open={open} onClick={() => setOpen(false)} sx={{ zIndex: 1199, color: 'rgba(0,0,0,0.35)' }} />
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
          '& .MuiSpeedDial-root': { position: 'relative' },
        }}
      >
        <SpeedDial
          ariaLabel="Open social links and contact options"
          sx={{
            '& .MuiFab-primary': {
              width: 56,
              height: 56,
              bgcolor: '#023047',
              color: 'gold.main',
              border: '1.5px solid',
              borderColor: 'rgba(255,183,3,0.45)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
              '&:hover': { bgcolor: '#012233', borderColor: 'gold.main' },
            },
          }}
          icon={<Share sx={{ fontSize: 26 }} />}
          openIcon={<Close sx={{ fontSize: 26 }} />}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="left"
              FabProps={{
                component: 'a',
                href: action.href,
                onClick: () => setOpen(false),
                ...(action.external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}),
                sx: {
                  bgcolor: '#1a1a1a',
                  color: '#d4a853',
                  border: '1px solid rgba(212, 168, 83, 0.35)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
                  '& .MuiSvgIcon-root': {
                    fontSize: 22,
                    color: 'currentColor',
                  },
                  '&:hover': {
                    bgcolor: '#023047',
                    color: '#f0d78c',
                    borderColor: 'rgba(240, 215, 140, 0.5)',
                  },
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
