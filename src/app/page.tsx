"use client";

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
      {products?.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-gray-500">Start by maybe searching a product.</p>
      )}
    </div>
  );
}

export default function Homepage({
  featuredProducts = [],
}: HomepageProps): ReactElement {
  if (!products || !Array.isArray(products)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading products...</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
          <ProductGrid
            products={[...products.slice(0, 6), ...featuredProducts]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
