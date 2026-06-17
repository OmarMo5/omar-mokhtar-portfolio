import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1800, startOnMount = false) {
  const [count, setCount] = useState(startOnMount ? 0 : target);
  const ref = useRef<HTMLDivElement | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (startOnMount) {
      run();
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          run();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  function run() {
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  return { count, ref };
}
