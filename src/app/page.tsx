import type { ReactElement } from "react";
import type { Product } from "@/types/product";
import products from "@/types/data";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface HomepageProps {
  featuredProducts?: Product[];
}

function ProductGrid({ products }: { products?: Product[] }): ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      )) ?? <p>Start by maybe searching a product.</p>}
    </div>
  );
}

export default function Homepage({
  featuredProducts = [],
}: HomepageProps): ReactElement {
  // Critical null/type check
  if (!products || !Array.isArray(products)) {
    return <div>Loading products...</div>;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Featured Products</h1>

        <ProductGrid products={products.slice(0, 6)} />

        <ProductGrid products={featuredProducts} />
      </main>

      <Footer />
    </div>
  );
}
