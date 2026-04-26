'use client';

import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsTouch(false);

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[data-cursor-grow]')
        )
      );
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });

    const animate = () => {
      const el = cursorRef.current;
      if (!el) { rafId.current = requestAnimationFrame(animate); return; }
      current.current.x += (pos.current.x - current.current.x) * 0.14;
      current.current.y += (pos.current.y - current.current.y) * 0.14;
      el.style.transform = `translate(${current.current.x - 12}px, ${current.current.y - 12}px)`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <Box
      ref={cursorRef}
      aria-hidden="true"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? 40 : 24,
        height: isHovering ? 40 : 24,
        borderRadius: '50%',
        border: '1.5px solid',
        borderColor: 'gold.main',
        backgroundColor: isHovering ? 'rgba(255,183,3,0.15)' : 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease',
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  );
}
