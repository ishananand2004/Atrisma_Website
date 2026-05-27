import { useState, useEffect, useMemo } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProductCard from '@/components/sections/ProductCard';
import CTASection from '@/components/sections/CTASection';
import { getProducts } from '@/services/api';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeroSection 
        title="Our Therapeutics Portfolio"
        subtitle="Comprehensive solutions for complex healthcare challenges."
        image="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2000&auto=format&fit=crop"
        ctaText="Contact Sales"
        ctaLink="/contact"
      />

      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-accent hover:bg-accent/90" : "text-gray-600"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No products found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white">
          {selectedProduct && (
            <>
              <div className="h-64 w-full relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold shadow">
                  {selectedProduct.category}
                </div>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading text-primary mb-2">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-600">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 flex justify-end">
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <a href="/contact">Inquire About Product</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <CTASection 
        title="Looking for specific formulations?"
        description="Our team can assist you with detailed product monographs and availability."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}
