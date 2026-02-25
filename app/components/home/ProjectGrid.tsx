import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProductCategory } from "../../constants/product";

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
            return (
              <Link
                key={cat.name}
                href={`/products/${cat.slug}`}
                className="relative block overflow-hidden transition-all duration-500 border-4 group border-slate-100 hover:border-yellow-500"
              >

                {/* Image Container */}
                <div className="relative h-72 lg:h-100 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  
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