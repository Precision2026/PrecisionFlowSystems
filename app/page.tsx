// app/page.tsx
"use client";
import React from "react";
import Navbar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import ProductGrid from "./components/home/ProjectGrid"; // Import back
import AboutContent from "./components/sharedAbout/shared";
import BusinessSchema from "./components/seo/BusinessSchema";
import { productCategories } from "./constants/product";
import {
  Factory,
  Settings,
  Globe2,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

const industries = [
  { name: "Oil & Gas", icon: <Factory size={48} /> },
  { name: "Pharmaceutical", icon: <Settings size={48} /> },
  { name: "Petrochemicals", icon: <Settings size={48} /> },
  { name: "Power Plants", icon: <Factory size={48} /> },
  { name: "Marine", icon: <Globe2 size={48} /> },
  { name: "Defence", icon: <ShieldCheck size={48} /> },
];

export default function PrecisionFlowPage() {
  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `*New Inquiry*%0A*Name:* ${data.get("name")}%0A*Interested In:* ${data.get("product")}%0A*Details:* ${data.get("message")}`;
    window.open(`https://wa.me/917839929808?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen font-sans bg-white text-slate-900 selection:bg-yellow-400">
      <BusinessSchema />
      <Navbar />
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl">
          <AboutContent isShort={true} />
        </div>
      </section>

      {/* Featured Products Section (Imported Component) */}
      <section id="products" className="py-24">
        <div className="px-8 mx-auto mb-12 max-w-7xl">
          <h2 className="text-4xl italic font-black tracking-tighter uppercase lg:text-6xl">
            Featured <span className="text-red-800">Categories.</span>
          </h2>
        </div>
        <ProductGrid productCategories={productCategories} />
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-32 text-white bg-slate-950">
        <div className="px-8 mx-auto text-center max-w-7xl">
          <h2 className="mb-16 text-4xl font-black tracking-tighter uppercase lg:text-6xl">
            Industries <span className="italic text-red-800">We Serve.</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col items-center gap-4 p-8 transition-all border border-slate-800 hover:border-yellow-500"
              >
                <div className="text-yellow-500">{ind.icon}</div>
                <p className="text-xs font-black tracking-widest uppercase">
                  {ind.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-20 overflow-hidden bg-white lg:py-32">
        {/* ... (Your existing Quote code) ... */}
        <div className="px-4 mx-auto max-w-7xl sm:px-8">
          <div className="bg-yellow-500 p-[2px] sm:p-1">
            <div className="grid gap-12 px-6 py-12 bg-white md:p-16 lg:p-20 lg:grid-cols-2 lg:gap-20">
              <header>
                <h2 className="mb-6 text-4xl italic font-black leading-none tracking-tighter uppercase md:text-5xl lg:text-6xl lg:mb-8">
                  Request <span className="text-red-800">Quote.</span>
                </h2>
                <div className="flex items-start gap-4">
                  <MessageSquare
                    className="text-green-600 shrink-0"
                    size={28}
                  />
                  <p className="text-sm font-bold leading-snug text-slate-500 md:text-base">
                    Instantly connect with our technical sales desk via WhatsApp
                    for ASTM SS 316 component pricing.
                  </p>
                </div>
              </header>

              <form
                onSubmit={handleWhatsAppRedirect}
                className="space-y-5 lg:space-y-6"
              >
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full py-4 font-bold border-b-2 outline-none border-slate-200 focus:border-red-800"
                />
                <select
                  name="product"
                  className="w-full py-4 font-bold bg-transparent border-b-2 outline-none border-slate-200 focus:border-red-800"
                >
                  {productCategories.map((c) => (
                    <option key={c.name}>{c.name}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Size, Quantity, Pressure Rating..."
                  className="w-full py-4 font-bold border-b-2 outline-none resize-none border-slate-200 focus:border-red-800"
                  rows={3}
                />
                <button
                  type="submit"
                  className="w-full py-6 text-xl font-black text-white uppercase transition-all bg-green-600 hover:bg-black"
                >
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
