import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-onyx relative border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-20">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Beyond Real Estate</span>
                <h2 className="font-serif text-4xl mt-4 text-white">Serviços <span className="italic text-gray-500">Exclusivos</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {SERVICES.map((service) => (
                    <div key={service.id} className="glass-card p-10 hover:bg-white/5 transition-all duration-500 group">
                        <i className={`fa-solid ${service.icon} text-4xl text-gold mb-6`}></i>
                        <h3 className="font-serif text-xl text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            {service.description}
                        </p>
                        <div className="w-10 h-[1px] bg-gold mt-8 group-hover:w-full transition-all duration-700"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;