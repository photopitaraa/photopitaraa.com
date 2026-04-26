import { Box } from '@mui/material';

interface GoldDividerProps {
  my?: number | string;
}

export default function GoldDivider({ my = 6 }: GoldDividerProps) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        my,
      }}
    >
      <Box sx={{ height: '1px', width: 60, backgroundColor: 'gold.main', opacity: 0.6 }} />
      {/* Diamond SVG */}
      <Box
        component="svg"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ width: 12, height: 12, flexShrink: 0 }}
      >
        <path
          d="M8 0L16 8L8 16L0 8L8 0Z"
          fill="#FFB703"
        />
      </Box>
      <Box sx={{ height: '1px', width: 60, backgroundColor: 'gold.main', opacity: 0.6 }} />
    </Box>
  );
}
