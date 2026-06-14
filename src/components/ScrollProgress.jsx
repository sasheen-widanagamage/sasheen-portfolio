import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-primary-600 via-accent-cyan to-accent-violet"
      style={{ scaleX, width: '100%' }}
      aria-hidden="true"
    />
  );
}
