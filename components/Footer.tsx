
import React from 'react';
import { MAPS_LINK, BASE_WHATSAPP_URL, LOGO_URL, INSTAGRAM_URL, TIKTOK_URL, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  const whatsappLink = `${BASE_WHATSAPP_URL}?text=Hola!%20Vengo%20de%20la%20página%20web%20y%20quiero%20probar%20el%20sabor%20de%20Puerco%20de%20Autor%20🐷`;

  return (
    <footer id="ubicacion" className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-10 relative">
              <div className="w-48 lg:w-64 h-48 lg:h-64 mb-8 flex items-center justify-center p-2 mx-auto lg:mx-0">
                <img src={LOGO_URL} alt="Puerco de Autor Logo" className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(212,175,55,0.2)]" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-none tracking-tighter uppercase text-center lg:text-left">
                VIVE LA EXPERIENCIA <br/>
                <span className="text-gold">DE AUTOR</span>
              </h2>
            </div>
            
            <div className="space-y-8 mb-12 relative max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-300">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="font-black text-lg lg:text-xl uppercase tracking-tight">Diagonal a Flamingo Niquía, esquina de la Unidad Residencial Portal del Norte.</p>
                  <p className="text-gray-400 text-[10px] lg:text-sm font-bold uppercase tracking-widest opacity-60">Street Food Gourmet • Sabor con Estilo en plena calle.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-300">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <a href={`mailto:${EMAIL_ADDRESS.toLowerCase()}`} className="block hover:text-gold transition-colors overflow-hidden">
                  <p className="font-black text-lg lg:text-xl uppercase tracking-tight">Correo Electrónico</p>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest opacity-60 lowercase truncate">{EMAIL_ADDRESS.toLowerCase()}</p>
                </a>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-300">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="font-black text-lg lg:text-xl uppercase tracking-tight">Horarios</p>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">
                    Lunes a Viernes: 5:30 PM - 10:30 PM <br/> 
                    Sábados y Domingos: 4:30 PM - 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16">
              <a 
                href={MAPS_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gold hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Abrir Maps y Reseñar
              </a>
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-green-600 hover:scale-105 transition-all flex items-center gap-2 shadow-2xl active:scale-95"
              >
                WhatsApp Directo
              </a>
            </div>

            <div className="mt-12 lg:mt-20 flex flex-col md:flex-row items-center gap-10">
              <div className="relative group cursor-pointer">
                <img 
                  src="https://i.postimg.cc/SsR8C5wT/Whats_App_Image_2026_02_13_at_4_23_03_AM_removebg_preview.png" 
                  alt="Déjanos tu reseña" 
                  className="w-48 lg:w-40 h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] animate-saludo group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="block group flex-1">
                <span className="text-gray-400 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] mb-6 block opacity-80 text-center md:text-left">SÍGUENOS @PUERCODEAUTOR</span>
                <div className="flex gap-6 lg:gap-8 items-center justify-center md:justify-start">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-14 lg:w-16 h-14 lg:h-16 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group/icon shadow-lg active:scale-90">
                    <svg className="w-7 lg:w-8 h-7 lg:h-8 text-white group-hover/icon:text-black fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="w-14 lg:w-16 h-14 lg:h-16 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group/icon shadow-lg active:scale-90">
                    <svg className="w-7 lg:w-8 h-7 lg:h-8 text-white group-hover/icon:text-black fill-current" viewBox="0 0 24 24"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.617a8.171 8.171 0 0 0 5.429 2.03V7.227c-.201 0-.401-.013-.599-.041z"/></svg>
                  </a>
                  <span className="text-white font-black text-lg lg:text-xl tracking-tighter uppercase hidden sm:block group-hover:text-gold transition-colors">@puercodeautor</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group h-[400px] lg:h-[500px] mt-12 lg:mt-0">
             <div className="absolute -inset-1 bg-gradient-to-r from-gold to-deep-red rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative h-full w-full bg-[#050505] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 opacity-30">
                  <iframe 
                    title="Ubicación Puerco de Autor"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.038426034177!2d-75.5492265!3d6.3353844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f0010173f47%3A0x8e94e77373f7c9e0!2sFlamingo%20Niqu%C3%ADa!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="relative z-10 text-center bg-black/60 backdrop-blur-sm p-8 lg:p-10 rounded-[40px] border border-white/10">
                   <div className="w-28 lg:w-40 h-28 lg:h-40 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20"></div>
                      <div className="relative w-full h-full bg-deep-red/80 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(185,28,28,0.5)] border-4 border-white/20">
                         <img src={LOGO_URL} alt="Piggy" className="w-16 lg:w-28 h-16 lg:h-28 object-contain" />
                      </div>
                   </div>
                   <h4 className="text-2xl lg:text-3xl font-black tracking-tighter">PUNTO NIQUÍA</h4>
                   <p className="text-[10px] lg:text-[12px] text-gold font-black uppercase tracking-[0.4em] mt-2 leading-none">DIAGONAL A FLAMINGO</p>
                   <a 
                    href={MAPS_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-6 inline-block text-[9px] lg:text-[10px] font-black border-b border-gold text-gold uppercase tracking-widest hover:text-white hover:border-white transition-all"
                   >
                     ¿Cómo llegar? →
                   </a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-20 lg:mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
             <img src={LOGO_URL} alt="Logo Small" className="w-24 lg:w-32 h-24 lg:h-32 object-contain" />
             <div className="h-16 w-px bg-white/10"></div>
             <span className="text-2xl lg:text-3xl font-black tracking-tighter text-white">
               PUERCO <span className="text-gold italic">DE AUTOR</span>
             </span>
          </div>
          <p className="text-gray-500 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © 2025 Puerco de Autor - Sabor Callejero con Estilo en Bello • Sabor Real 🐷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;