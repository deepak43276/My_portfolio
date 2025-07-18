import { useMemo } from 'react';

export const useOptimizedAnimation = (options = {}) => {
  const {
    duration = 0.5,
    delay = 0,
    ease = [0.16, 1, 0.3, 1],
    staggerChildren = 0.1,
    once = true,
    amount = 0.1
  } = options;

  const optimizedVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease,
        staggerChildren,
      },
    },
  }), [duration, delay, ease, staggerChildren]);

  const optimizedViewport = useMemo(() => ({
    once,
    amount,
    margin: "0px 0px -100px 0px"
  }), [once, amount]);

  return {
    variants: optimizedVariants,
    viewport: optimizedViewport,
    initial: "hidden",
    whileInView: "visible",
  };
};

export const useOptimizedHover = () => {
  return {
    whileHover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    whileTap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };
};

export const useOptimizedTransition = (duration = 0.5) => {
  return {
    duration,
    ease: [0.16, 1, 0.3, 1],
  };
}; 