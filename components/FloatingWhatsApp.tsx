
import React from 'react';
import { BASE_WHATSAPP_URL } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = `${BASE_WHATSAPP_URL}?text=Hola!%20Vengo%20de%20la%20página%20web%20y%20quiero%20probar%20el%20sabor%20de%20Puerco%20de%20Autor%20🐷`;

  return (
    <>
      <style>
        {`
          @keyframes custom-pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
              box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }
          .whatsapp-pulse {
            animation: custom-pulse 2s infinite;
          }
        `}
      </style>
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group whatsapp-pulse"
        aria-label="Order on WhatsApp"
      >
        <div className="absolute -top-14 right-0 bg-white text-black px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none shadow-2xl">
          ¿Tienes hambre? Pide aquí 🐷
        </div>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.888-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.892-11.888 11.892-1.979 0-3.917-.489-5.646-1.417l-6.347 1.621zm6.423-3.905l.361.215c1.464.873 3.155 1.334 4.89 1.335 5.281 0 9.577-4.296 9.577-9.579 0-2.559-1.001-4.965-2.821-6.786-1.821-1.821-4.226-2.822-6.784-2.822-5.283 0-9.58 4.296-9.58 9.58 0 1.944.591 3.841 1.708 5.45l.236.353-1.01 3.688 3.774-.964zm11.335-6.052c-.301-.15-1.779-.878-2.053-.978-.275-.1-.475-.15-.675.15-.2.3-.775 1.05-.95 1.25-.175.2-.35.225-.651.075-.3-.15-1.266-.467-2.411-1.487-.893-.797-1.495-1.782-1.67-2.083-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.491-.508-.675-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.232 5.125 4.534.715.311 1.272.496 1.706.634.718.228 1.372.196 1.889.119.576-.086 1.779-.728 2.029-1.428.25-.7.25-1.3.175-1.428-.075-.128-.275-.203-.575-.353z" />
        </svg>
      </a>
    </>
  );
};

export default FloatingWhatsApp;
