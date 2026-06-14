import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`focus-ring fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-soft transition duration-300 dark:bg-white dark:text-ink ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <FiArrowUp aria-hidden="true" />
    </a>
  );
}
