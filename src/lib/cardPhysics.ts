// Radial resistance keeps diagonal drags within the same small travel limit.
export function resistedCardOffset(dx: number, dy: number, limit = 32) {
  const distance = Math.hypot(dx, dy);
  if (distance === 0) return { x: 0, y: 0 };
  const travel = limit * Math.tanh(distance / 36);
  return { x: (dx / distance) * travel, y: (dy / distance) * travel };
}
