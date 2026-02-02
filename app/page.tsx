"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  ShieldCheck,
  Truck,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  Factory,
  CheckCircle2,
  Globe2,
} from "lucide-react";

// --- Components (Imported/Defined) ---
// Note: In a real project, move these to a /components folder
import BusinessSchema from "./components/seo/BusinessSchema";
import Hero from "./components/home/Hero";
import ProductGrid from "./components/home/ProjectGrid";

import Navbar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import AboutContent from "./components/sharedAbout/shared";

// --- Data ---
const productCategories = [
  {
    name: "Tube Fittings",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    items: [
      "Front Ferrule",
      "Back Ferrule",
      "Nut",
      "Male Connector",
      "Female Connector",
      "Straight Connector(Union)",
      "Reducing Union",
      "Bulkhead Male Connector",
      "Bulkhead Female Connector",
      "Bulkhead Union",
      "Bulkhead Reducing Union",
      "Tube End Closure",
      "Fittings End Closure",
      "Union Elbow",
      "Male Elbow",
      "Female Elbow",
      "Male Adopter",
      "Female Adopter",
      "Union Cross",
      "Union Tee",
      "Reducing Union Tee",
      "Bulkhead Elbow",
      "Male Run Tee",
      "Male Branch Tee",
      "Female Branch Tee",
      "Female Run Tee",
      "Reducer",
    ],
  },
  {
    name: "Pipe Fittings",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    items: [
      "Hex Plug",
      "Hex Bushing",
      "Hex Nipple",
      "Hydraulic Hex Nipple",
      "Hex Cap",
      "Hex socket",
      "Hex Adopter",
      "Male Elbow",
      "Female Elbow",
      "Street Elbow",
      "Male Tee",
      "Female Cross",
      "Female Tee",
      "Street Tee",
      "Branch Tee",
      "Round socket",
    ],
  },
  {
    name: "Instrumentation Valves",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    items: [
      "Ball Valves",
      "Needle Valves",
      "Check Valve",
      "Manifold Valves (2W, 3W, 5W)",
      "Monoflanges Valves (Sbbs, Dbbs)",
      "Gate Valve",
      "Globe Valve",
    ],
  },
  {
    name: "Specialized Equipment",
    image:
      "https://images.unsplash.com/photo-1535813547-99c956a0d58a?auto=format&fit=crop&q=80&w=800",
    items: [
      "Pressure Gauge Accessories",
      "Seamless Tube (SS, Hestoalloy, Monel, Inconel)",
      "Pipe (MS, SS)",
      "Condesate Pots",
      "Air Header",
      "Flanges",
    ],
  },
];

const industries = [
  { name: "Oil & Gas", icon: <Factory size={48} /> },
  { name: "Pharmaceutical", icon: <Settings size={48} /> },
  { name: "Petrochemicals", icon: <Settings size={48} /> },
  { name: "Power Plants", icon: <Factory size={48} /> },
  { name: "Marine", icon: <Globe2 size={48} /> },
  { name: "Defence", icon: <ShieldCheck size={48} /> },
];

export default function PrecisionFlowPage() {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `*New Inquiry*%0A*Name:* ${data.get("name")}%0A*Interested In:* ${data.get("product")}%0A*Details:* ${data.get("message")}`;
    window.open(`https://wa.me/917839929808?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen font-sans bg-white text-slate-900 selection:bg-yellow-400">
      {/* SEO Data Injection */}
      <BusinessSchema />

      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section (The "Big Gesture" Animation) */}
      <Hero />
      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl">
          <AboutContent isShort={true} />
        </div>
      </section>

      {/* 3. Product Catalog (SEO Optimized) */}
      <ProductGrid
        productCategories={productCategories}
        expandedCat={expandedCat}
        setExpandedCat={setExpandedCat}
      />

      {/* 4. Industries Section */}
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

      {/* 5. Contact / Quote Section */}
      <section id="quote" className="py-20 overflow-hidden bg-white lg:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-8">
          <div className="bg-yellow-500 p-[2px] sm:p-1">
            {" "}
            {/* Thinner border on mobile */}
            <div className="grid gap-12 px-6 py-12 bg-white md:p-16 lg:p-20 lg:grid-cols-2 lg:gap-20">
              <header>
                {/* Responsive Heading: 4xl on mobile, 6xl on desktop */}
                <h2 className="mb-6 text-4xl italic font-black leading-none tracking-tighter uppercase md:text-5xl lg:text-6xl lg:mb-8">
                  Request <span className="text-red-800">Quote.</span>
                </h2>
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start gap-4">
                    <MessageSquare
                      className="text-green-600 shrink-0"
                      size={28} // Slightly smaller icon for mobile
                    />
                    <p className="text-sm font-bold leading-snug text-slate-500 md:text-base">
                      Instantly connect with our technical sales desk via
                      WhatsApp for ASTM SS 316 component pricing.
                    </p>
                  </div>
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
                  className="w-full py-3 text-base font-bold transition-colors border-b-2 outline-none border-slate-200 lg:py-4 focus:border-red-800 lg:text-lg"
                />
                <select
                  name="product"
                  className="w-full py-3 text-base font-bold bg-transparent border-b-2 outline-none border-slate-200 lg:py-4 focus:border-red-800 lg:text-lg"
                >
                  {productCategories.map((c) => (
                    <option key={c.name}>{c.name}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Size, Quantity, Pressure Rating..."
                  className="w-full py-3 text-base font-bold border-b-2 outline-none resize-none border-slate-200 lg:py-4 focus:border-red-800 lg:text-lg"
                  rows={3}
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 lg:py-6 font-black uppercase text-lg lg:text-xl hover:bg-black transition-all active:scale-[0.98]"
                >
                  Send to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
