import { Chip, ChipProps } from '@mui/material';

interface BadgeProps extends Omit<ChipProps, 'variant'> {
  variant?: 'gold' | 'dark' | 'light';
}

export default function Badge({ variant = 'gold', label, sx, ...props }: BadgeProps) {
  const styles = {
    gold: {
      backgroundColor: 'rgba(255,183,3,0.15)',
      color: 'gold.dark',
      border: '1px solid rgba(255,183,3,0.35)',
    },
    dark: {
      backgroundColor: 'rgba(2,48,71,0.85)',
      color: '#EBF5FB',
      border: 'none',
    },
    light: {
      backgroundColor: 'rgba(235,245,251,0.9)',
      color: 'text.primary',
      border: 'none',
    },
  };

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        ...styles[variant],
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '0.7rem',
        letterSpacing: '0.06em',
        borderRadius: '2px',
        height: 24,
        ...sx,
      }}
      {...props}
    />
  );
}
