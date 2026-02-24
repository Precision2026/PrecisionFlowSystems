import { productCategories, ProductCategory } from "../../constants/product";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Navbar from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";

interface SubCategory {
  subName: string;
  subItems: string[];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = productCategories.find((cat) => cat.slug === slug);

  if (!category) notFound();

  // Helper function to generate image slugs consistently
  const generateImageSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[()]/g, "-")
      .replace(/-+/g, "-")
      .replace(/-$/, "");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: HERO (Remains mostly the same) */}
      <header className="relative pt-32 pb-16 overflow-hidden bg-slate-950 lg:pt-48 lg:pb-32">
        <div className="absolute top-20 right-[-5%] text-[15rem] font-black text-white/5 select-none pointer-events-none italic uppercase hidden lg:block">
          {category.name.split(" ")[0]}
        </div>
        <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
          <Link href="/products" className="group inline-flex items-center gap-2 text-slate-500 hover:text-red-500 mb-12 transition-colors uppercase text-[10px] font-black tracking-[0.3em]">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-2" />
            Return to Technical Catalog
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-red-800" />
                <span className="text-xs font-black tracking-widest text-red-800 uppercase">Industrial Specification</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] text-white mb-8">
                {category.name}<span className="text-red-800">.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-400 lg:text-xl">{category.description}</p>
            </div>
            <div className="relative w-full overflow-hidden border shadow-2xl group aspect-square lg:aspect-[4/5] bg-slate-900 border-white/10">
              <Image src={category.image} alt={category.name} fill priority className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: PRODUCT LISTING */}
      <main className="px-6 py-24 bg-white lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-6 pb-12 mb-16 border-b md:flex-row md:items-end border-slate-100">
      <div>
        <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">Technical Range</h2>
        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Inventory for {category.name}</p>
      </div>
    </div>

    <div className="space-y-24">
      {/* 1. RENDER SUB-CATEGORIES FIRST (Valves, Specialized Equipment) */}
      {category.items
        .filter((item): item is SubCategory => typeof item !== "string")
        .map((sub, idx) => (
          <div key={sub.subName} className="group/section">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">
                {sub.subName}
              </h3>
              <div className="h-[2px] flex-1 bg-slate-100 group-hover/section:bg-red-800 transition-colors duration-500" />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sub.subItems.map((subItem, sIdx) => (
                <ProductCard 
                  key={subItem} 
                  name={subItem} 
                  categorySlug={category.slug} 
                  index={`${idx + 1}.${sIdx + 1}`} 
                  imgSlug={generateImageSlug(subItem)} 
                />
              ))}
            </div>
          </div>
        ))}

      {/* 2. RENDER STANDALONE ITEMS IN ONE SHARED GRID (Tube Fittings, Pipe Fittings) */}
      {category.items.some(item => typeof item === "string") && (
        <div className="group/section">
          {/* Optional: Only show a header if there were also subcategories present */}
          {category.items.some(item => typeof item !== "string") && (
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">
                Standard Components
              </h3>
              <div className="h-[2px] flex-1 bg-slate-100 group-hover/section:bg-red-800 transition-colors duration-500" />
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.items
              .filter((item): item is string => typeof item === "string")
              .map((standaloneItem, idx) => (
                <ProductCard 
                  key={standaloneItem} 
                  name={standaloneItem} 
                  categorySlug={category.slug} 
                  index={(idx + 1).toString()} 
                  imgSlug={generateImageSlug(standaloneItem)} 
                />
              ))}
          </div>
        </div>
      )}
    </div>

          {/* WhatsApp CTA (Remains the same) */}
          <div className="relative p-8 mt-32 overflow-hidden bg-slate-950 lg:p-20">
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="mb-6 text-3xl italic font-black leading-none tracking-tighter text-white uppercase lg:text-5xl">
                  Inquire about <br /> <span className="text-red-800">{category.name}</span>
                </h3>
              </div>
              <a href="https://wa.me/917839929808" className="flex items-center gap-4 px-12 py-6 font-black tracking-widest text-black uppercase transition-all bg-yellow-500 shadow-2xl hover:bg-white active:scale-95">
                <Phone size={20} /> Request Technical Quote
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/** * Sub-component for individual Product Cards to keep the main logic clean
 */
function ProductCard({ name, categorySlug, index, imgSlug }: { name: string, categorySlug: string, index: string, imgSlug: string }) {
  return (
    <div className="flex flex-col p-4 transition-all duration-500 border group border-slate-50 hover:border-red-800 hover:shadow-2xl hover:shadow-slate-200 bg-white">
      <div className="relative w-full h-64 mb-6 overflow-hidden border bg-white border-slate-600 shadow-lg hover:border-red-800">
        <Image
          src={`/${categorySlug}/${imgSlug}.webp`}
          alt={name}
          fill
          className="object-contain p-6 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-black text-slate-300 italic">{index}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-black tracking-tight uppercase transition-colors text-slate-800 group-hover:text-red-800">{name}</span>
          <CheckCircle2 size={16} className="transition-colors text-slate-200 group-hover:text-red-800" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-bold text-white bg-slate-900 px-2 py-0.5 uppercase tracking-[0.2em]">ASTM SS 316</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">REF: PFS-{categorySlug.substring(0,2).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}