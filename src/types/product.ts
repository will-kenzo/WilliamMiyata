export interface Ratings {
  user_id: string;
  text: string;
  star_rating: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  ratings: Ratings[];
  image: string;
}
