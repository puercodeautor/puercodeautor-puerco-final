
import React from 'react';

const TheSecret: React.FC = () => {
  const sauces = [
    { name: 'Salsa Verde', desc: 'Frescura herbal para resaltar el puerco.' },
    { name: 'Salsa Pork', desc: 'Nuestra receta secreta e insignia.' },
    { name: 'Salsa de Maní', desc: 'Cremosa, tradicional y sorprendente.' },
    { name: 'Salsa de Tomate de Árbol 🔥', desc: 'El toque exótico, equilibrado y picante.' },
    { name: 'Agrio (Pico de Gallo)', desc: 'Explosión de frescura en cada bocado.' },
    { name: 'Bechamel de Autor', desc: 'Con champiñones seleccionados y tocineta crujiente.' },
    { name: 'Mayonesa Artesanal (Perro)', desc: 'Suavidad diseñada para nuestro Doggo.' },
    { name: 'Mayonesa Artesanal (Hamburguesa)', desc: 'El complemento ideal para nuestro Capricho Cubano y el Clásico de Autor.' },
  ];

  return (
    <section id="secreto" className="bg-[#050505] overflow-hidden">
      {/* --- SUBSECCIÓN: PERNIL REALISTA --- */}
      {/* pt-4 en móvil para compactar totalmente con la sección anterior */}
      <div className="pt-4 lg:pt-32 pb-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            <div className="flex-1 order-1 lg:order-2">
              <div className="mb-8 lg:mb-16 relative flex flex-col items-center lg:items-start text-center lg:text-left">
                
                {/* Cerdito Filosofía y Sabor: Animado, 80% ancho móvil y escala en hover */}
                <div className="relative lg:absolute flex justify-center lg:block mb-0 lg:mb-0 lg:-top-20 lg:-right-10 lg:z-20 group cursor-pointer">
                  <img 
                    src="https://i.postimg.cc/qRqnyY9L/Whats_App_Image_2026_02_13_at_4_23_03_AM_1_removebg_preview.png" 
                    alt="Cerdito Filosofía y Sabor" 
                    className="w-4/5 max-w-[320px] md:w-64 lg:w-48 h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-saludo hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="mt-[-20px] lg:mt-0 z-10 w-full">
                  <div className="inline-flex items-center gap-4 mb-4 lg:mb-6">
                    <span className="hidden lg:block h-px w-12 bg-gold"></span>
                    <span className="text-gold font-black tracking-[0.4em] lg:tracking-[0.5em] uppercase text-[10px] lg:text-xs">El Corazón del Sabor</span>
                    <span className="hidden lg:block h-px w-12 bg-gold"></span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                    Nuestro <br/>
                    <span className="text-deep-red italic">Secreto.</span>
                  </h2>
                  <p className="text-white/80 font-bold text-lg mb-10 tracking-tight uppercase border-b border-white/10 pb-6 max-w-xl mx-auto lg:mx-0">
                    Comida callejera con la honestidad del hogar. 100% Carne, 0% Atajos.
                  </p>
                </div>
              </div>

              <div className="space-y-10 lg:space-y-16">
                <div className="group border-l-4 border-gold/20 pl-8 hover:border-gold transition-colors">
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Pernil y Pierna Premium</h4>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    Sin atajos ni procesos industriales. Seleccionamos cortes premium para un horneado lento de 5 horas, logrando una carne tan jugosa que se deshace en el paladar.
                  </p>
                </div>
                
                <div className="group border-l-4 border-gold/20 pl-8 hover:border-gold transition-colors">
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Pan Brioche Negro Artesanal</h4>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    Su color oscuro es solo el inicio de la experiencia. Un pan suave, con el toque justo de mantequilla y horneado diariamente por manos artesanas.
                  </p>
                </div>
              </div>
            </div>

            {/* Pernil realista: orden 2 en móvil */}
            <div className="flex-1 relative order-2 lg:order-1 mt-16 lg:mt-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/5 rounded-[40px] translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <img 
                  src="https://i.postimg.cc/44KJpmcF/Gemini_Generated_Image_c3xbzpc3xbzpc3xb.png" 
                  alt="Pernil Realista Puerco de Autor" 
                  className="rounded-[40px] shadow-2xl border border-white/10 relative z-10 w-full object-cover group-hover:scale-[1.02] transition-all duration-700"
                />
                <div className="absolute -bottom-10 -right-6 bg-gold text-black px-12 py-10 rounded-[35px] z-20 shadow-[0_20px_60px_rgba(212,175,55,0.5)] transform hover:scale-110 transition-transform">
                  <span className="block text-7xl font-black leading-none mb-1 tracking-tighter">5H</span>
                  <span className="text-[14px] uppercase tracking-[0.4em] font-black opacity-90">Slow Fire</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SUBSECCIÓN: ALQUIMIAS (SALSAS) --- */}
      <div className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                ALQUIMIAS <br/>
                <span className="text-gold">DE AUTOR</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                {sauces.map((sauce, idx) => (
                  <div key={idx} className="group flex items-start gap-4">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-gold font-black uppercase text-sm tracking-widest mb-1">{sauce.name}</h4>
                      <p className="text-gray-500 text-xs font-medium leading-tight">{sauce.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative group h-[400px] w-full mt-12 lg:mt-0">
              <div className="rounded-[50px] overflow-hidden border border-white/10 shadow-3xl h-full">
                <img 
                  src="https://i.postimg.cc/rsJptW6X/Whats_App_Image_2026_02_13_at_1_57_56_AM.jpg" 
                  alt="Salsas Artesanales de Autor" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white font-black text-2xl tracking-tighter uppercase">Alquimias 100% Real</p>
                  <p className="text-gold text-xs uppercase tracking-[0.3em] mt-1 font-bold">Sin conservantes ni químicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSecret;