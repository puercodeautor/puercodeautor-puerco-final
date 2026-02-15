
import React from 'react';
import { ANTOJOS, BASE_WHATSAPP_URL } from '../constants';

const Antojos: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            ANTOJOS <span className="text-gold">DE BARRIO</span>
          </h2>
          <div className="h-1 w-12 bg-deep-red mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-bold opacity-60">Pequeños placeres, gran sabor de autor</p>
        </div>

        <div className="flex justify-center">
          {ANTOJOS.map((antojo) => (
            <div 
              key={antojo.id} 
              className="group bg-[#111] rounded-[30px] border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden max-w-sm shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={antojo.imageUrl} 
                  alt={antojo.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Opacidad reducida del degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-40"></div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black mb-2 tracking-tight uppercase group-hover:text-gold transition-colors">
                  {antojo.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">
                  {antojo.description}
                </p>
                
                <div className="mb-6">
                  <span className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-xl text-2xl font-black tracking-tighter border border-gold/20">
                    {antojo.price}
                  </span>
                </div>

                <a 
                  href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent('¡Quiero un Puerquito! 🐷')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white hover:bg-gold text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg transform active:scale-95"
                >
                  ¡Quiero un Puerquito! 🐷
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none">
        <span className="text-[150px] font-black text-white select-none whitespace-nowrap -rotate-90 block">PUERQUITO</span>
      </div>
    </section>
  );
};

export default Antojos;
