
import React from 'react';
import { BASE_WHATSAPP_URL } from '../constants';

const Hero: React.FC = () => {
  const whatsappLink = `${BASE_WHATSAPP_URL}?text=Hola!%20Vengo%20de%20la%20página%20web%20y%20quiero%20probar%20el%20sabor%20de%20Puerco%20de%20Autor%20🐷`;

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-32 pb-16 lg:pt-40 lg:pb-0 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Columna Izquierda: Texto */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 inline-block bg-gold/10 border border-gold/30 px-5 py-2 rounded-full">
              <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Street Food Gourmet • Bello</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[0.95] tracking-tighter uppercase">
              5 HORAS DE PREPARACIÓN.<br/>
              UN SABOR SIN <span className="text-deep-red italic">ATAJOS.</span>
            </h1>
            
            <p className="text-gold font-black italic text-xl md:text-3xl mb-8 tracking-tight">
              Sabor Callejero con Estilo
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Carne real horneada lentamente y alquimias artesanales que redefinen la experiencia callejera en Bello.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-deep-red hover:bg-red-800 text-white text-sm px-10 py-5 rounded-xl font-black transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3 group tracking-widest uppercase"
              >
                <span>🐷</span>
                PIDE POR WHATSAPP
              </a>
              <a 
                href="#menu" 
                className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white text-sm px-10 py-5 rounded-xl font-black transition-all backdrop-blur-sm tracking-widest uppercase"
              >
                VER MENÚ
              </a>
            </div>
          </div>

          {/* Columna Derecha: Imagen con Sello de Calidad */}
          <div className="flex-1 relative w-full">
            <div className="relative z-10 group">
              <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Sello de Autor Flotante */}
              <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-28 h-28 lg:w-36 lg:h-36 bg-gold rounded-full flex items-center justify-center z-30 shadow-2xl border-4 border-black rotate-12 group-hover:rotate-0 transition-transform duration-500 scale-90 lg:scale-100">
                <div className="text-center px-2">
                   <p className="text-black font-black text-[8px] lg:text-[10px] leading-tight uppercase tracking-tighter">Sello de Autor</p>
                   <div className="h-px w-8 bg-black/30 mx-auto my-1"></div>
                   <p className="text-black font-black text-[7px] lg:text-[9px] leading-tight uppercase italic">Sabor Callejero con Estilo</p>
                </div>
              </div>

              <img 
                src="https://i.postimg.cc/kGc5t8rD/Gemini_Generated_Image_ejuxzjejuxzjejux.png" 
                alt="Capricho Cubano de Autor" 
                className="w-full h-auto max-w-2xl mx-auto rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 group-hover:scale-[1.02] transition-transform duration-700 relative z-10"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-black border border-gold/50 p-6 rounded-3xl shadow-2xl z-20 hidden md:block animate-pulse">
                <span className="block text-gold font-black text-2xl tracking-tighter">BEST SELLER</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Capricho Cubano</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-10 animate-bounce hidden lg:block">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
