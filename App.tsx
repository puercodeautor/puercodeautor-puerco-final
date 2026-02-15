
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Combos from './components/Combos';
import TheSecret from './components/TheSecret';
import Antojos from './components/Antojos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Menú Principal */}
        <ProductGrid />

        {/* Combos Destacados */}
        <Combos />

        {/* Antojos de Barrio (Sección Reinstaurada) */}
        <Antojos />
        
        {/* El Secreto de Autor */}
        <TheSecret />
        
        {/* Prueba Social: Google Reviews */}
        <Testimonials />
        
        {/* Footer y Ubicación */}
        <Footer />
      </main>

      <FloatingWhatsApp />
      
      {/* Decorative background layers */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-deep-red/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
