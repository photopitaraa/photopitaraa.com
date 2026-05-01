'use client';

import { useEffect } from 'react';

/**
 * LocatorJS: click elements in dev to open the source file.
 * Requires @locator/webpack-loader in next.config.js.
 */
export default function LocatorClient() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    import('@locator/runtime').then(({ default: setup }) => {
      setup();
    });
  }, []);

  return null;
}
