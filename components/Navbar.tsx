import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-onyx/90 backdrop-blur-md shadow-lg py-4' : 'py-6'
      }`}
    >
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        <a href="#" className="data-hover text-2xl font-serif font-bold tracking-widest text-white">
          ONYX<span className="text-gold">.</span>
        </a>
        
        <div className="hidden md:flex space-x-12 items-center">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label}
              href={link.href} 
              className="data-hover text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="data-hover px-6 py-2 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-onyx transition-all duration-300"
          >
            Private Access
          </a>
        </div>

        <button 
            className="md:hidden text-gold text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-onyx border-t border-gray-800 py-4 px-6 flex flex-col space-y-4">
             {NAV_LINKS.map(link => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
           <a 
            href="#contact" 
            className="text-gold text-xs tracking-widest uppercase hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Private Access
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;