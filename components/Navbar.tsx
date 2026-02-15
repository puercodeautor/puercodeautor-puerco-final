
import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer"
          >
            <div className={`transition-all duration-500 overflow-hidden flex items-center justify-center animate-saludo ${scrolled ? 'h-16 w-16' : 'h-24 w-24'}`}>
              <img 
                src={LOGO_URL} 
                alt="Puerco de Autor Logo" 
                className="h-full w-full object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="ml-4 lg:ml-6 text-left">
              <span className="block text-xl lg:text-2xl font-black tracking-tighter text-white leading-none">
                PUERCO <span className="text-gold uppercase">DE AUTOR</span>
              </span>
              <span className="block text-[7px] lg:text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] mt-1 leading-none italic">
                Sabor Callejero con Estilo
              </span>
            </div>
          </button>
        </div>
        
        <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] items-center">
          <a 
            href="#menu" 
            onClick={(e) => handleNavClick(e, 'menu')} 
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Menú
          </a>
          <a 
            href="#secreto" 
            onClick={(e) => handleNavClick(e, 'secreto')} 
            className="hover:text-gold transition-colors cursor-pointer"
          >
            El Secreto
          </a>
          <a 
            href="#ubicacion" 
            onClick={(e) => handleNavClick(e, 'ubicacion')} 
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Donde Estamos
          </a>
        </div>

        <a 
          href="#menu" 
          onClick={(e) => handleNavClick(e, 'menu')}
          className="bg-deep-red hover:bg-red-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-black text-[9px] lg:text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          Pedir Ahora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;