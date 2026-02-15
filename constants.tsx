
import { Product, Testimonial } from './types';

export const LOGO_URL = "https://i.postimg.cc/xdN8tCZK/logo_puerco_sin_fondo.png"; 

export const PRODUCTS: Product[] = [
  {
    id: 'capricho-cubano',
    name: 'Capricho Cubano',
    description: 'Nuestra joya oscura. Pan brioche negro artesanal con carne desmechada en cocción lenta (cerveza y naranja agria), queso fundido y cebolla morada. La joya que tus redes estaban esperando. Única en Bello.',
    price: '$19.500',
    imageUrl: 'https://i.postimg.cc/L8RL854W/Gemini-Generated-Image-ggo7mqggo7mqggo7.png',
    tag: 'EL MÁS BUSCADO'
  },
  {
    id: 'pan-cook-autor',
    name: 'El Pan Cook de Autor',
    description: 'Pan artesanal relleno con bechamel cremosa, champiñones, queso fundido, pernil de cerdo y tocineta.',
    price: '$21.000',
    imageUrl: 'https://i.postimg.cc/28nvZQg2/Gemini-Generated-Image-k3s3kvk3s3kvk3s3.png'
  },
  {
    id: 'doggo-autor',
    name: 'El Doggo de Autor',
    description: 'El perro caliente reinventado: cerdo desmechado al horno, queso derretido y nuestras salsas exclusivas.',
    price: '$19.000',
    imageUrl: 'https://i.postimg.cc/mkwrFMxL/Gemini_Generated_Image_me0qycme0qycme0q.png'
  },
  {
    id: 'volcan-sabor',
    name: 'El Volcán de Sabor',
    description: 'Nachos crujientes bañados en avalancha de queso fundido, cerdo desmechado y nuestras salsas explosivas.',
    price: '$18.000',
    imageUrl: 'https://i.postimg.cc/xdNdCTKH/Gemini_Generated_Image_9l0eaf9l0eaf9l0e.png'
  },
  {
    id: 'clasico-autor',
    name: 'El Clásico de Autor',
    description: 'Nuestra hamburguesa insignia en pan brioche blanco, lonjas de pernil horneado a las finas hierbas y cebolla encurtida.',
    price: '$19.500',
    imageUrl: 'https://i.postimg.cc/8CfC5Phr/unnamed_(2).jpg'
  },
  {
    id: 'manjar-calle',
    name: 'El Manjar de la Calle',
    description: 'Tortilla de maíz artesanal color crema, rellena con cerdo desmechado, queso fundido, lechuga y pico de gallo.',
    price: '$17.000',
    imageUrl: 'https://i.postimg.cc/CKnK1Ljn/unnamed_(1).jpg'
  },
  {
    id: 'el-puerquito',
    name: 'El Puerquito 🐷',
    description: 'Sabor de autor al alcance de todos. Pan blandito, lonjas de pernil premium y queso fundido.',
    price: '$6.500',
    imageUrl: 'https://i.postimg.cc/zfHfBXnh/Gemini_Generated_Image_jet7z5jet7z5jet7.png',
    tag: 'ANTOJO DE BARRIO'
  }
];

export const ANTOJOS = PRODUCTS.filter(p => p.tag === 'ANTOJO DE BARRIO');

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Katherine García',
    quote: 'Si buscan algo diferente y delicioso, este es el lugar indicado. Un sabor inigualable, deben visitarlos.',
    rating: 5
  },
  {
    id: '2',
    name: 'Cesar Mahecha Londoño',
    quote: 'Excelente todo! Aseado, buena cantidad, buen precio. Una calidad de personas excelente y una propuesta innovadora única en el sector.',
    rating: 5
  },
  {
    id: '3',
    name: 'Vanesa Villa',
    quote: 'Deliciosa la comida !!! Y la atención 10/10 super recomendados !!!! 🫰🏻',
    rating: 5
  },
  {
    id: '4',
    name: 'Nicolas Restrepo',
    quote: 'Muy buena la atención, la comida y el servicio todo muy bueno y limpio.',
    rating: 5
  }
];

export const BASE_WHATSAPP_URL = "https://wa.me/573054357634";
export const MAPS_LINK = "https://maps.app.goo.gl/LfciAprFcUdQxErf7";
export const INSTAGRAM_URL = "https://www.instagram.com/puercodeautor/";
export const TIKTOK_URL = "https://www.tiktok.com/@puercodeautor";
export const EMAIL_ADDRESS = "puercodeautor@gmail.com";
