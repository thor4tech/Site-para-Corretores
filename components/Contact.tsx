import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-onyx-light relative overflow-hidden">
        <div 
            className="absolute inset-0 opacity-5" 
            style={{ 
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="bg-onyx border border-white/5 p-12 md:p-16 shadow-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-onyx px-6">
                    <i className="fa-regular fa-envelope text-gold text-3xl"></i>
                </div>

                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl text-white mb-4">Solicite Acesso Privado</h2>
                    <p className="text-gray-400 font-light">Entre em contato para agendar uma consultoria confidencial ou acessar nossa lista off-market.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input type="text" placeholder="Nome Completo" className="w-full bg-transparent border-b border-gray-700 text-white py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-600 font-light" />
                        </div>
                        <div className="relative group">
                            <input type="email" placeholder="E-mail Corporativo" className="w-full bg-transparent border-b border-gray-700 text-white py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-600 font-light" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input type="tel" placeholder="Telefone / WhatsApp" className="w-full bg-transparent border-b border-gray-700 text-white py-4 focus:outline-none focus:border-gold transition-colors placeholder-gray-600 font-light" />
                        </div>
                        <div className="relative group">
                            <select className="w-full bg-transparent border-b border-gray-700 text-gray-400 py-4 focus:outline-none focus:border-gold transition-colors font-light appearance-none cursor-pointer">
                                <option>Interesse: Compra</option>
                                <option>Interesse: Venda</option>
                                <option>Investimento Internacional</option>
                            </select>
                        </div>
                    </div>
                    <div className="pt-8 text-center">
                        <button type="submit" className="data-hover inline-block px-12 py-4 border border-gold text-gold hover:bg-gold hover:text-onyx transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium">
                            Enviar Solicitação
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;