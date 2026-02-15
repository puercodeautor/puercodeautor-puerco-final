
import React from 'react';
import { PRODUCTS, BASE_WHATSAPP_URL } from '../constants';

const ProductGrid: React.FC = () => {
  const getWhatsAppLink = (productName: string) => {
    return `${BASE_WHATSAPP_URL}?text=Hola!%20Quiero%20pedir%20un%20${encodeURIComponent(productName)}%20de%20Autor%20🐷`;
  };

  // Filtramos para no mostrar el Puerquito aquí si va en su propia sección de Antojos
  const mainProducts = PRODUCTS.filter(p => p.tag !== 'ANTOJO DE BARRIO');

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
          <div className="inline-block h-1 w-20 bg-gold mb-6"></div>
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">Nuestra <span className="text-gold">Carta</span></h2>
          <p className="mt-4 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto uppercase tracking-widest font-bold opacity-60 mb-8 px-4 leading-tight">Selección Gourmet de Street Food</p>
          
          <div className="flex justify-center mb-8 lg:mb-12 group cursor-pointer">
            <img 
              src="https://i.postimg.cc/XJqFdhTx/Whats_App_Image_2026_02_13_at_4_23_03_AM_2_removebg_preview.png" 
              alt="Cerdito Chef de Autor" 
              className="w-4/5 max-w-[320px] md:w-64 h-auto drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)] animate-saludo hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {mainProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-[#0a0a0a] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-700 border border-white/5 hover:border-gold/30"
            >
              <div className="relative h-64 lg:h-80 overflow-hidden bg-black">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-center"
                />
                {product.tag && (
                  <div className="absolute top-6 right-6 bg-deep-red text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest shadow-xl z-20">
                    {product.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-30"></div>
              </div>
              <div className="p-8 lg:p-10 relative z-10">
                <div className="flex justify-between items-center mb-4 lg:mb-6">
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tighter group-hover:text-gold transition-colors leading-none">{product.name}</h3>
                  <span className="text-gold font-black text-lg lg:text-xl">{product.price}</span>
                </div>
                <p className="text-gray-400 text-sm lg:text-md leading-relaxed mb-6 lg:mb-8 h-20 overflow-hidden font-medium">
                  {product.description}
                </p>
                <a 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-black hover:bg-gold py-4 lg:py-5 rounded-2xl text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95"
                >
                  Pedir este plato
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;