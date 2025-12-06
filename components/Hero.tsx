import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC<{ loading: boolean }> = ({ loading }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
        // Text Reveal
        gsap.to(textElementsRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5
        });

        // Parallax
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }, containerRef);

    return () => ctx.revert();
  }, [loading]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !textElementsRef.current.includes(el)) {
      textElementsRef.current.push(el);
    }
  };

  return (
    <header ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
            ref={bgRef}
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
            alt="Penthouse Luxury Interior" 
            className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p ref={addToRefs} className="opacity-0 translate-y-10 text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium">
            Real Estate Artistry
        </p>
        <h1 ref={addToRefs} className="opacity-0 translate-y-10 font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
            Onde a <span className="italic font-light text-gray-300">Exclusividade</span><br />
            Encontra o seu <span className="text-gradient">Legado</span>.
        </h1>
        <p ref={addToRefs} className="opacity-0 translate-y-10 text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12">
            Curadoria imobiliária para quem transcendeu o luxo convencional. 
            Acesso restrito às propriedades mais cobiçadas do mercado global.
        </p>
        
        <div ref={addToRefs} className="opacity-0 translate-y-10">
            <a href="#collection" className="data-hover group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-gold/40 text-white transition-all duration-300 hover:border-gold">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gold rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                <span className="relative text-xs tracking-[0.25em] uppercase group-hover:text-gold transition-colors">Explorar Coleção</span>
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] tracking-widest uppercase text-gray-500">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;