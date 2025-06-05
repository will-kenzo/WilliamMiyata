export interface Ratings {
  user_id: string;
  text: string;
  stars: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  ratings: Ratings[];
  image?: string;
}
