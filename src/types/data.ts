import { Product } from "./product";
import rawProducts from "../app/products.json";

const products: Product[] = Array.isArray(rawProducts) // Checks if rawProducts is an array
  ? (rawProducts as Product[])
  : []; // Prevents crashes if JSON is bad

export default products;
