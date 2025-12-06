import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-32 bg-onyx-light relative">
        <div className="max-w-[90%] mx-auto mb-20 flex justify-between items-end">
            <div>
                <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-4">Portfolio</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white">Curadoria <span className="italic">Privada</span></h2>
            </div>
            <a href="#" className="hidden md:block text-xs tracking-widest text-gray-400 hover:text-gold transition-colors border-b border-gray-700 pb-1 hover:border-gold">VER TODO O ACERVO</a>
        </div>

        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
                <article 
                    key={item.id} 
                    className={`data-hover group relative h-[600px] w-full overflow-hidden cursor-none ${item.large ? 'lg:mt-20' : ''}`}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10"></div>
                    <img 
                        src={item.image} 
                        className="w-full h-full object-cover transition-transform duration-1000 transform group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                        alt={item.title}
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="border-l-2 border-gold pl-4 bg-onyx/80 backdrop-blur-sm py-4 pr-6">
                            <span className="text-gold text-[10px] tracking-widest uppercase mb-1 block">{item.location}</span>
                            <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm font-light line-clamp-2 mb-4">{item.description}</p>
                            <div className="flex items-center gap-6 text-xs text-white border-t border-gray-700 pt-3">
                                {item.specs.map((spec, i) => (
                                    <span key={i}><i className="fa-solid fa-star text-gold mr-2 text-[8px]"></i>{spec}</span>
                                ))}
                                <span className="text-gold ml-auto">{item.price}</span>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
  );
};

export default Collection;