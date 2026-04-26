'use client';

import { motion, useInView, type HTMLMotionProps, type UseInViewOptions } from 'framer-motion';
import { useRef } from 'react';
import { easeOut } from '@/lib/motion';

type RevealProps = {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  once?: boolean;
  margin?: UseInViewOptions['margin'];
} & Omit<HTMLMotionProps<'div'>, 'children'>;

export default function Reveal({
  children,
  y = 28,
  delay = 0,
  once = true,
  margin = '-60px 0px -60px 0px',
  ...motionProps
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.65, ease: easeOut, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
