// Radial resistance keeps diagonal drags within the same 22px limit.
export function resistedCardOffset(dx: number, dy: number, limit = 22) {
  const distance = Math.hypot(dx, dy);
  if (distance === 0) return { x: 0, y: 0 };
  const travel = limit * Math.tanh(distance / 65);
  return { x: (dx / distance) * travel, y: (dy / distance) * travel };
}
