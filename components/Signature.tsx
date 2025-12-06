import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Signature: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Clip Path Reveal
      if (imageRevealRef.current) {
        gsap.fromTo(imageRevealRef.current, 
            { clipPath: "inset(0 100% 0 0)" },
            { 
                clipPath: "inset(0 0 0 0)", 
                duration: 1.5, 
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: imageRevealRef.current,
                    start: "top 75%"
                }
            }
        );
      }

      // Text Stagger
      gsap.to(textElementsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !textElementsRef.current.includes(el)) {
      textElementsRef.current.push(el);
    }
  };

  return (
    <section id="signature" ref={sectionRef} className="py-32 relative bg-onyx overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>

        <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-gold/30"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-gold/30"></div>
                
                <div ref={imageRevealRef} className="relative overflow-hidden aspect-[3/4]">
                    <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                        alt="Corretor Premium" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                    />
                    
                    <div className="absolute bottom-10 -right-10 bg-onyx/90 backdrop-blur-md p-6 border-l-2 border-gold shadow-2xl max-w-xs hidden md:block">
                        <p className="font-serif italic text-xl text-white mb-2">"Luxo é viver sem compromissos."</p>
                        <p className="text-[10px] tracking-widest text-gold uppercase">Founder & CEO</p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <h2 ref={addToRefs} className="opacity-0 translate-y-10 font-serif text-4xl md:text-5xl text-white">
                    A arte da negociação <br />
                    <span className="italic text-gray-500">invisível.</span>
                </h2>
                <div ref={addToRefs} className="opacity-0 translate-y-10 w-20 h-[1px] bg-gold"></div>
                <div ref={addToRefs} className="opacity-0 translate-y-10 space-y-6 text-gray-400 font-light leading-relaxed">
                    <p>
                        Não vendo apenas metros quadrados. Negocio estilo de vida, privacidade e futuros patrimônios. Em um mundo onde o tempo é a moeda mais valiosa, meu papel é filtrar o ruído e apresentar apenas a excelência.
                    </p>
                    <p>
                        Com acesso privilegiado a propriedades <strong>"Off-Market"</strong> — joias que nunca chegam aos portais públicos — minha missão é conectar você ao seu próximo refúgio com discrição absoluta e precisão cirúrgica.
                    </p>
                </div>
                
                <div ref={addToRefs} className="opacity-0 translate-y-10 grid grid-cols-2 gap-8 pt-4">
                    <div>
                        <span className="block text-3xl font-serif text-gold mb-1">R$ 1.2B+</span>
                        <span className="text-[10px] tracking-widest uppercase text-gray-500">Volume de Vendas</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-serif text-gold mb-1">12 Anos</span>
                        <span className="text-[10px] tracking-widest uppercase text-gray-500">Mercado Global</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Signature;