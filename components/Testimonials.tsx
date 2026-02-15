
import React from 'react';
import { TESTIMONIALS, MAPS_LINK } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        
        {/* Google Header Widget */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
             <svg width="40" height="40" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
             </svg>
             <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Opiniones de Clientes</h2>
          </div>
          
          <div className="bg-[#1a1a1a] px-8 py-4 rounded-full border border-white/10 flex items-center gap-4 shadow-xl">
             <span className="text-white font-black text-2xl">5.0</span>
             <div className="flex text-[#fbbc05]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
             </div>
             <span className="text-gray-400 font-bold text-xs uppercase tracking-widest border-l border-white/20 pl-4">Puntaje en Google</span>
          </div>
        </div>

        {/* 2x2 Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4285F4] text-lg leading-tight">{t.name}</h4>
                    <div className="flex text-[#fbbc05] mt-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-md leading-relaxed mb-4">
                  {t.quote}
                </p>
              </div>
              <div className="text-gray-400 text-xs font-medium">Hace poco • Publicado en Google</div>
            </div>
          ))}
        </div>

        {/* Official Google Button */}
        <div className="flex justify-center">
          <a 
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white border border-gray-300 hover:border-[#4285F4] hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-xl font-bold transition-all shadow-md"
          >
             <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
             </svg>
             <span className="uppercase tracking-widest text-sm">VER TODAS LAS OPINIONES EN GOOGLE</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
