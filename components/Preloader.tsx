import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut"
    });

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-[10000] flex justify-center items-center"
    >
      <div ref={textRef} className="text-center opacity-0">
        <h1 className="font-serif text-4xl text-gold tracking-[0.3em] uppercase animate-pulse">
          Onyx
        </h1>
        <p className="text-xs text-gray-500 mt-2 tracking-widest">LOADING LEGACY</p>
      </div>
    </div>
  );
};

export default Preloader;