import { useEffect, useRef, useState } from 'react';
import './SectionWrapper.css';

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-wrapper ${visible ? 'section-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
