import { Product } from "./product";
import rawData from "./products.json";

const products: Product[] = rawData.products.map((p) => ({
  ...p,
  ratings: p.ratings.map((r) => ({
    user_id: r.user_id,
    text: r.text,
    stars: r.stars,
  })),
}));

export default products;
