import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    // Initial set
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(outline, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      // Instant follow for dot
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0 });
      // Laggy follow for outline
      gsap.to(outline, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power2.out" });
    };

    const handleMouseEnter = () => {
      gsap.to(outline, {
        width: 60,
        height: 60,
        backgroundColor: "rgba(212, 175, 55, 0.1)",
        borderColor: "#D4AF37",
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(outline, {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "rgba(212, 175, 55, 0.5)",
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, .data-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999]"
      />
      <div 
        ref={outlineRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-gold/50 rounded-full pointer-events-none z-[9999] transition-colors duration-200"
      />
    </>
  );
};

export default CustomCursor;