
import React from 'react';
import { BASE_WHATSAPP_URL } from '../constants';

const Combos: React.FC = () => {
  const combos = [
    {
      id: 'combo-capricho',
      name: 'Combo Capricho Cubano',
      price: '$27.500',
      description: 'La joya de la corona: Pan Brioche Negro + Papas Rústicas Crocantes + Gaseosa 250ml.',
      image: 'https://i.postimg.cc/wThyvDrY/Gemini_Generated_Image_gy7pelgy7pelgy7p.png',
      message: 'Hola! Quiero el Combo Capricho Cubano 🐷🍟🥤',
      tag: null
    },
    {
      id: 'combo-clasico',
      name: 'Combo Clásico de Autor',
      price: '$27.500',
      description: 'Sabor tradicional elevado: Hamburguesa de Pernil Premium + Papas Rústicas + Gaseosa 250ml.',
      image: 'https://i.postimg.cc/02pMQ74R/Gemini_Generated_Image_d6h7ypd6h7ypd6h7.png',
      message: 'Hola! Quiero el Combo Clásico de Autor 🍔🍟🥤',
      tag: null
    },
    {
      id: 'combo-doggo',
      name: 'Combo Doggo de Autor',
      price: '$26.500',
      description: 'El favorito de la calle: Doggo de Cerdo Desmechado + Papas Rústicas + Gaseosa 250ml.',
      image: 'https://i.postimg.cc/CLynSccK/Gemini_Generated_Image_3x9qkk3x9qkk3x9q.png',
      message: 'Hola! Quiero el Combo Doggo de Autor 🌭🍟🥤',
      tag: 'EL MÁS PEDIDO'
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 border-y border-gold/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 border border-gold/30 px-6 py-2 rounded-full mb-6">
            <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Ahorra y Disfruta</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
            COMBOS DE <span className="text-gold">AUTOR</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm opacity-60">
            LA EXPERIENCIA COMPLETA PARA FOODIES REALES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div 
              key={combo.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden hover:border-gold/50 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden bg-black">
                <img 
                  src={combo.image} 
                  alt={combo.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-30"></div>
                {combo.tag && (
                  <div className="absolute top-6 left-6 bg-deep-red text-white text-[10px] font-black px-5 py-2 rounded-full tracking-widest shadow-xl z-20">
                    {combo.tag}
                  </div>
                )}
              </div>

              <div className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-black mb-2 tracking-tight uppercase group-hover:text-gold transition-colors">
                  {combo.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 font-medium leading-relaxed min-h-[48px]">
                  {combo.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl font-black text-gold tracking-tighter">
                    {combo.price}
                  </span>
                </div>

                <a 
                  href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent(combo.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white text-black hover:bg-gold hover:text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl group/btn"
                >
                  <span>LO QUIERO</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
