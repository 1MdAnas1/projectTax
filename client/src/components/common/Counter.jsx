import { useState, useEffect, useRef } from 'react';

export default function Counter({ target, duration = 2000, label }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    const stepTime = Math.max(10, Math.floor(duration / 60)); // ~60fps
    const increment = end / (duration / stepTime);

    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="counter-item glass rounded-2xl p-5 text-center shadow-card">
      <div className="text-3xl font-bold text-gradient">
        {count}+
      </div>
      <div className="mt-1 text-xs text-muted-foreground leading-tight">
        {label}
      </div>
    </div>
  );
}