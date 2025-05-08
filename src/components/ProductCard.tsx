import Link from "next/link";
import type { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
    <Link href={`/products/${product.id}`}>
      {/* <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      /> */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mt-2">
          {product.category}
        </span>
      </div>
    </Link>
  </div>
);

export default ProductCard;
