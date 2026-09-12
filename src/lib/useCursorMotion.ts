'use client';

import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'motion/react';

// A short glide with a barely perceptible settle, shared by all cursor-following
// cards. Smooth the input once, rather than adding a spring to every card.
const cursorSpring = {
  stiffness: 280,
  damping: 24,
  mass: 0.7,
  restDelta: 0.001,
  restSpeed: 0.01,
};

// One update per display frame, using the newest event; no idle polling or React renders.
export function useCursorMotion(disabled: boolean) {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, cursorSpring);
  const y = useSpring(targetY, cursorSpring);

  useEffect(() => {
    targetX.set(0);
    targetY.set(0);
    if (disabled) return;

    let frame: number | null = null;
    let latestX = 0;
    let latestY = 0;
    const reset = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      targetX.set(0);
      targetY.set(0);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      latestX = event.clientX;
      latestY = event.clientY;
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        targetX.set((latestX / window.innerWidth) * 2 - 1);
        targetY.set((latestY / window.innerHeight) * 2 - 1);
      });
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('blur', reset);
    document.documentElement.addEventListener('pointerleave', reset);
    return () => {
      reset();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('blur', reset);
      document.documentElement.removeEventListener('pointerleave', reset);
    };
  }, [disabled, targetX, targetY]);

  return { x, y };
}
