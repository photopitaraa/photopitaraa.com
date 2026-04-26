'use client';

import { useEffect } from 'react';

export default function LenisProvider() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    import('@/lib/lenis').then(({ initLenis, destroyLenis }) => {
      initLenis();
      cleanup = destroyLenis;
    });

    return () => { cleanup?.(); };
  }, []);

  return null;
}
