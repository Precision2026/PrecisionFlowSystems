// components/home/ProductGrid.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCategory {
  name: string;
  image: string;
  items: string[];
}

interface ProductGridProps {
  productCategories: ProductCategory[];
}

export default function ProductGrid({ productCategories }: ProductGridProps) {
  return (
    <section id="products" className="py-24 bg-white lg:py-32">
      <div className="px-6 mx-auto lg:px-8 max-w-7xl">
        <header className="mb-16 text-center lg:mb-20">
          <h2 className="mb-4 text-4xl italic font-black leading-none tracking-tighter uppercase lg:text-6xl text-slate-900">
            Product <span className="text-red-800 underline underline-offset-8">Ranges</span>
          </h2>
          <p className="text-[10px] lg:text-xs font-black tracking-[0.4em] uppercase text-slate-400">
            Industrial Specification Components
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {productCategories.map((cat) => {
            // Helper to create a URL-friendly slug
            const slug = cat.name.toLowerCase().replace(/\s+/g, '-');

            return (
              <Link
                key={cat.name}
                href={`/products/${slug}`}
                className="relative block overflow-hidden transition-all duration-500 border-4 group border-slate-100 hover:border-yellow-500"
              >
                {/* Image Container */}
                <div className="relative h-72 lg:h-[400px] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="object-cover w-full h-full transition-transform duration-700 scale-105 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 flex items-end justify-between w-full p-8">
                    <div>
                      <h3 className="text-3xl italic font-black leading-none tracking-tighter text-white uppercase lg:text-5xl">
                        {cat.name}
                      </h3>
                      <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Full Collection
                      </p>
                    </div>
                    
                    <div className="p-3 text-black transition-all duration-300 transform translate-y-12 bg-white rounded-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}