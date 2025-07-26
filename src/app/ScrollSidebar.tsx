'use client';
import { useEffect, useState } from 'react';

export default function ScrollSidebar() {
  const [active, setActive] = useState('me');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => {
          if (Math.abs(a.intersectionRatio - b.intersectionRatio) > 0.1) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          const viewportCenter = window.innerHeight / 2;
          const aDistance = Math.abs(aRect.top + aRect.height / 2 - viewportCenter);
          const bDistance = Math.abs(bRect.top + bRect.height / 2 - viewportCenter);
          return aDistance - bDistance;
        });

      if (visibleEntries.length > 0) {
        setActive(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Set initial active section based on current scroll position
    const handleInitialScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const viewportCenter = window.innerHeight / 2;
      
      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        
        if (distance < minDistance && rect.top < viewportCenter && rect.bottom > viewportCenter) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        setActive(closestSection.id);
      }
    };

    // Run initial check
    handleInitialScroll();

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const sections = [
    { id: 'me', label: 'Intro' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed left-4 top-1/3 hidden lg:flex flex-col gap-4 z-50">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
            active === id ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}