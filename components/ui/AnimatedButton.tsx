'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { Button, ButtonProps, Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

interface AnimatedButtonProps extends Omit<ButtonProps, 'variant' | 'href'> {
  variant?: 'filled' | 'outlined' | 'ghost';
  href?: string;
  external?: boolean;
  sx?: SxProps<Theme>;
}

const shimmerStyles: SxProps<Theme> = {
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '60%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
    transform: 'skewX(-20deg)',
    transition: 'left 0.55s ease',
  },
  '&:hover::after': {
    left: '150%',
  },
  '&:active': {
    transform: 'scale(0.97)',
  },
};

const variantStyles: Record<'filled' | 'outlined' | 'ghost', SxProps<Theme>> = {
  filled: {
    background: 'linear-gradient(135deg, #FB8500 0%, #FFB703 50%, #FFD060 100%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '100% 0',
    color: '#fff',
    border: 'none',
    '&:hover': {
      backgroundPosition: '0% 0',
      boxShadow: '0 6px 28px rgba(255,183,3,0.4)',
    },
    '&:disabled': {
      background: 'rgba(0,0,0,0.12)',
      color: 'rgba(0,0,0,0.26)',
    },
  },
  outlined: {
    background: 'transparent',
    color: '#FFB703',
    border: '1.5px solid #FFB703',
    '&:hover': {
      background: 'rgba(255,183,3,0.07)',
      borderColor: '#FB8500',
      color: '#FB8500',
    },
    '&:disabled': {
      borderColor: 'rgba(0,0,0,0.2)',
      color: 'rgba(0,0,0,0.3)',
    },
  },
  ghost: {
    background: 'transparent',
    color: '#FFB703',
    border: 'none',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    textDecorationColor: 'rgba(255,183,3,0.4)',
    '&:hover': {
      background: 'transparent',
      textDecorationColor: '#FFB703',
    },
  },
};

const baseSx: SxProps<Theme> = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: '0.83rem',
  letterSpacing: '0.07em',
  px: 4,
  py: 1.4,
  borderRadius: '2px',
  textTransform: 'none',
  transition: 'all 0.35s ease',
};

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ variant = 'filled', href, external, children, sx, ...props }, ref) => {
    const combinedSx: SxProps<Theme> = [
      shimmerStyles,
      variantStyles[variant],
      baseSx,
      ...(Array.isArray(sx) ? sx : [sx]),
    ];

    if (href) {
      const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};
      return (
        <Link href={href} {...linkProps} style={{ display: 'inline-block' }}>
          <Box
            component="button"
            sx={combinedSx}
            {...(props as object)}
          >
            {children}
          </Box>
        </Link>
      );
    }

    return (
      <Button ref={ref} disableElevation sx={combinedSx} {...props}>
        {children}
      </Button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';
export default AnimatedButton;
