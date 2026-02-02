// app/products/[slug]/page.tsx
import { productCategories } from "../../constants/product";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Phone, ShieldCheck, Box } from "lucide-react";
import Navbar from "../../components/layout/Nav";
import Footer from "../../components/layout/Footer";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = productCategories.find((cat) => cat.slug === slug);

  if (!category) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <header className="relative pt-32 pb-16 overflow-hidden bg-slate-950 lg:pt-48 lg:pb-32">
        <div className="absolute top-20 right-[-5%] text-[15rem] font-black text-white/[0.02] select-none pointer-events-none italic uppercase hidden lg:block">
          {category.name.split(" ")[0]}
        </div>

        <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
          <Link
            href="/#products"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-red-500 mb-12 transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            Technical Catalog
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-red-800" />
                <span className="text-xs font-black tracking-widest text-red-800 uppercase">
                  Industrial Specification
                </span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] text-white mb-8">
                {category.name}
                <span className="text-red-800">.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-400 lg:text-xl">
                {category.description ||
                  "High-precision components engineered for high-pressure industrial environments."}
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group aspect-square lg:aspect-[4/5] w-full bg-slate-900 border-[1px] border-white/10 overflow-hidden shadow-2xl">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  priority
                  className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute p-6 border bottom-6 left-6 right-6 border-white/10 backdrop-blur-md bg-black/20">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-yellow-500" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Certified Material Grade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: COMPONENTS LIST WITH INDIVIDUAL IMAGES */}
      <main className="px-6 py-24 bg-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 pb-12 mb-16 border-b md:flex-row md:items-end border-slate-100">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">
                Available Variants
              </h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">
                Technical Specification Range
              </p>
            </div>
            <div className="text-4xl italic font-black select-none text-slate-100">
              /{category.items.length.toString().padStart(2, "0")}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, idx) => {
              // Create a consistent slug for the image filename
              const imageSlug = item
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[()]/g, "");

              return (
                <div
                  key={idx}
                  className="flex flex-col p-4 transition-all duration-500 border group border-slate-50 hover:border-red-800 hover:shadow-2xl hover:shadow-slate-200"
                >
                  {/* Item Image Container */}
                  <div className="relative w-full h-56 mb-6 overflow-hidden border bg-slate-50 border-slate-100">
                    <Image
                      src={`/products/${imageSlug}.webp`} // Matches your naming in /public/products/
                      alt={item}
                      fill
                      className="object-contain p-6 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black text-slate-300 italic">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-black tracking-tight uppercase transition-colors text-slate-800 group-hover:text-red-800">
                        {item}
                      </span>
                      <CheckCircle2
                        size={16}
                        className="transition-colors text-slate-200 group-hover:text-red-800"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold text-white bg-slate-900 px-2 py-0.5 uppercase tracking-[0.2em]">
                        ASTM SS 316
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        Precision Machined
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="relative p-8 mt-32 overflow-hidden bg-slate-950 lg:p-20">
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="mb-6 text-3xl italic font-black leading-none tracking-tighter text-white uppercase lg:text-5xl">
                  Inquire about <br />{" "}
                  <span className="text-red-800">{category.name}</span>
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
                  Technical sales support available for custom threading and
                  sizing.
                </p>
              </div>
              <a
                href="https://wa.me/917839929808"
                className="flex items-center gap-4 px-12 py-6 font-black tracking-widest text-black uppercase transition-all bg-yellow-500 shadow-2xl group hover:bg-white active:scale-95"
              >
                <Phone size={20} /> Request Technical Quote
              </a>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full skew-x-12 bg-red-800/5 translate-x-1/4" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
