import { useEffect, useState } from 'react';

export function useCountUp(target: number, duration = 1800, start = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target, duration, start]);

  return count;
}
