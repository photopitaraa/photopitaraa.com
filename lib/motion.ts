import type { Variants, Transition } from 'framer-motion';

export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const baseTransition: Transition = {
  duration: 0.7,
  ease: easeOut,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const cardHover = {
  rest: { scale: 1, transition: { duration: 0.3, ease: easeOut } },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: easeOut } },
};

export const navbarVariants: Variants = {
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
  solid: {
    backgroundColor: 'rgba(17,17,17,0.97)',
    boxShadow: '0 1px 0 rgba(200,164,106,0.12)',
  },
};

/** Minimal dark bar when scrolled (HOTC-style home). */
export const navbarVariantsHotc: Variants = {
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
  solid: {
    backgroundColor: 'rgba(17,17,17,0.98)',
    boxShadow: '0 1px 0 rgba(200,164,106,0.08)',
  },
};

/** Dark solid bar — luxury studio feel. */
export const navbarVariantsUnified: Variants = {
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
  solid: {
    backgroundColor: 'rgba(17,17,17,0.97)',
    boxShadow: '0 1px 0 rgba(200,164,106,0.1)',
  },
};

export const drawerVariants: Variants = {
  closed: { x: '100%', transition: { duration: 0.4, ease: easeOut } },
  open: { x: 0, transition: { duration: 0.4, ease: easeOut } },
};

export const drawerLinkVariants: Variants = {
  closed: { opacity: 0, x: 30 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 * i + 0.15, duration: 0.5, ease: easeOut },
  }),
};
