// app/products/page.tsx
import Navbar from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import ProductGrid from "../components/home/ProjectGrid";
import { productCategories } from "../constants/product";
import { Package, ShieldCheck, Zap } from "lucide-react";

export default function AllProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header for Products */}
      <section className="pt-32 pb-20 text-white bg-slate-950">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-red-800" />
            <span className="text-xs font-black tracking-widest text-red-800 uppercase">
              Complete Catalog
            </span>
          </div>
          <h1 className="mb-8 text-5xl italic font-black leading-none tracking-tighter uppercase lg:text-7xl">
            Engineering <span className="text-red-800">Inventory.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            Browse our full range of high-performance instrumentation fittings,
            valves, and specialized process equipment manufactured to ASTM
            standards.
          </p>
        </div>
      </section>

      {/* Features Ribbon */}
      <div className="py-6 bg-yellow-500">
        <div className="grid grid-cols-1 gap-8 px-8 mx-auto max-w-7xl md:grid-cols-3">
          <div className="flex items-center gap-4 text-xs font-black tracking-widest text-black uppercase">
            <ShieldCheck size={24} /> SS 316 Certified
          </div>
          <div className="flex items-center gap-4 text-xs font-black tracking-widest text-black uppercase">
            <Package size={24} /> Bulk Supply Available
          </div>
          <div className="flex items-center gap-4 text-xs font-black tracking-widest text-black uppercase">
            <Zap size={24} /> Fast Technical Support
          </div>
        </div>
      </div>

      {/* The Product Grid */}
      <section className="py-24">
        <ProductGrid productCategories={productCategories} />
      </section>

      <Footer />
    </main>
  );
}
