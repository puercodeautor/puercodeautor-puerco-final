
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
}
