import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 34));
    const interval = window.setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        window.clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 28);
    return () => window.clearInterval(interval);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-3xl p-5"
    >
      <p className="font-display text-3xl font-extrabold text-ink dark:text-white">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">{label}</p>
    </motion.div>
  );
}
