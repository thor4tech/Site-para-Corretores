import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light text-gray-500">
            <div className="col-span-1 md:col-span-1">
                <a href="#" className="text-2xl font-serif font-bold tracking-widest text-white block mb-6">
                    ONYX<span className="text-gold">.</span>
                </a>
                <p className="leading-relaxed mb-6">
                    Redefinindo o padrão imobiliário de luxo. Uma abordagem curada para clientes que exigem o excepcional.
                </p>
            </div>
            
            <div>
                <h4 className="text-white uppercase tracking-widest text-xs mb-6">Escritórios</h4>
                <ul className="space-y-3">
                    <li>Av. Faria Lima, 4500 - SP</li>
                    <li>Fifth Avenue, NY - USA</li>
                    <li>Jumeirah Bay, Dubai - UAE</li>
                </ul>
            </div>

            <div>
                <h4 className="text-white uppercase tracking-widest text-xs mb-6">Legal</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors">Compliance</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white uppercase tracking-widest text-xs mb-6">Newsletter</h4>
                <div className="flex border-b border-gray-700 pb-2">
                    <input type="email" placeholder="Seu e-mail" className="bg-transparent w-full focus:outline-none text-white" />
                    <button className="text-gold uppercase text-xs hover:text-white transition-colors">Assinar</button>
                </div>
            </div>
        </div>
        
        <div className="max-w-[90%] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2024 The Onyx Legacy. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-lg">
                <a href="#" className="hover:text-gold transition-colors"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="hover:text-gold transition-colors"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="hover:text-gold transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;