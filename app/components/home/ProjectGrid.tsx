// components/home/ProductGrid.tsx
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ProductCategory {
  name: string;
  image: string;
  items: string[];
}

interface ProductGridProps {
  productCategories: ProductCategory[];
  expandedCat: string | null;
  setExpandedCat: (cat: string | null) => void;
}

export default function ProductGrid({
  productCategories,
  expandedCat,
  setExpandedCat,
}: ProductGridProps) {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-20 text-center">
          <h2 className="text-5xl font-black uppercase mb-4 italic tracking-tighter">
            Our Product <span className="text-red-800 underline">Ranges</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">
            High-Precision Instrumentation Components
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10">
          {productCategories.map((cat) => (
            <article
              key={cat.name}
              className={`group border-4 transition-all overflow-hidden ${expandedCat === cat.name ? "border-red-800" : "border-slate-100 hover:border-yellow-500"}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={`${cat.name} - Precision Flow Systems`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-4xl font-black uppercase italic tracking-tighter">
                    {cat.name}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <ul className="grid grid-cols-2 gap-y-3">
                  {cat.items.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="text-sm font-bold text-slate-600 uppercase flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    setExpandedCat(expandedCat === cat.name ? null : cat.name)
                  }
                  className="mt-8 flex items-center gap-2 text-red-800 font-black uppercase tracking-widest text-sm"
                >
                  {expandedCat === cat.name
                    ? "Show Less"
                    : "View Full Component List"}
                  <ChevronDown
                    className={expandedCat === cat.name ? "rotate-180" : ""}
                  />
                </button>

                <AnimatePresence>
                  {expandedCat === cat.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-2"
                    >
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-bold text-slate-500 uppercase"
                        >
                          • {item}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
