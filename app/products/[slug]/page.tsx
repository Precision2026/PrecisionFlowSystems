import { productCategories} from "../../constants/product";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Navbar from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";

interface SubCategory {
  subName: string;
  subItems: string[];
  specs?: Record<string, string>;
}
function SpecDisplay({ specs }: { specs?: Record<string, string> }) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <div className="mb-12 border border-slate-200">
      {/* Header for the Specs Table */}
      <div className="bg-slate-900 px-4 py-2">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
          Technical Specifications
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {Object.entries(specs).map(([key, value]) => (
          <div 
            key={key} 
            className="grid grid-cols-1 md:grid-cols-[250px_1fr] items-baseline transition-colors hover:bg-slate-50"
          >
            {/* Key Column */}
            <div className="px-4 py-3 bg-slate-50/50 md:border-r border-slate-100">
              <span className="text-[10px] font-bold text-red-800 uppercase tracking-widest">
                {key}
              </span>
            </div>
            
            {/* Value Column */}
            <div className="px-4 py-3">
              <span className="text-xs font-bold text-slate-700 leading-relaxed uppercase italic">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productCategories.find((cat) => cat.slug === slug);
  if (!category) notFound();

  const generateImageSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "-").replace(/-+/g, "-").replace(/-$/, "");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section ... (kept as is) */}

      <main className="px-6 py-24 bg-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 pb-12 mb-16 border-b md:flex-row md:items-end border-slate-100">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">Technical Range</h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Inventory for {category.name}</p>
            </div>
          </div>

          <div className="space-y-24">
            {/* 1. SUB-CATEGORIES SECTION */}
            {category.items
              .filter((item): item is SubCategory => typeof item !== "string")
              .map((sub, idx) => (
                <div key={sub.subName} className="group/section">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">
                      {sub.subName}
                    </h3>
                    <div className="h-0.5 flex-1 bg-slate-100 group-hover/section:bg-red-800 transition-colors duration-500" />
                  </div>
                  
                  {/* SPECS AT THE TOP OF SUB-CATEGORY */}
                  <SpecDisplay specs={sub.specs} />

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

            {/* 2. STANDALONE ITEMS SECTION */}
            {category.items.some(item => typeof item === "string") && (
              <div className="group/section">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">
                    Standard Components
                  </h3>
                  <div className="h-0.5 flex-1 bg-slate-100 group-hover/section:bg-red-800 transition-colors duration-500" />
                </div>

                {/* SPECS AT THE TOP OF STANDALONE ITEMS */}
                <SpecDisplay specs={category.specs} />
                
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
          className="object-contain p-6 transition-all duration-700 group-hover:scale-110"
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