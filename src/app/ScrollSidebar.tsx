'use client';

import { useEffect, useState } from 'react';

export default function ScrollSidebar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
        { id: 'me', label: 'Intro' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ]

  return (
    <div className="fixed left-4 top-1/3 hidden lg:flex flex-col gap-4 z-50">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm font-medium transition-colors ${
            active === id ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
