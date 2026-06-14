import { useEffect, useState } from 'react';

export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const current = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return { id, top: Math.abs(element.getBoundingClientRect().top - offset) };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top)[0];

      if (current?.id) setActiveId(current.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
