"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, ShieldCheck, Truck, ArrowRight, 
  MessageSquare, ChevronDown, Factory, 
  CheckCircle2, Globe2
} from 'lucide-react';

// --- Components (Imported/Defined) ---
// Note: In a real project, move these to a /components folder
import BusinessSchema from './components/seo/BusinessSchema'; 
import Hero from './components/home/Hero';
import ProductGrid from './components/home/ProjectGrid';

import Navbar from './components/layout/Nav';
import Footer from './components/layout/Footer';


// --- Data ---
const productCategories = [
  {
    name: "Tube Fittings",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    items: ["Front Ferrule", "Back Ferrule", "Nut", "Male Connector", "Female Connector", "Straight Connector(Union)", "Reducing Union", "Bulkhead Male Connector", "Bulkhead Female Connector", "Bulkhead Union", "Bulkhead Reducing Union", "Tube End Closure", "Fittings End Closure", "Union Elbow", "Male Elbow", "Female Elbow", "Male Adopter", "Female Adopter", "Union Cross", "Union Tee", "Reducing Union Tee", "Bulkhead Elbow", "Male Run Tee", "Male Branch Tee", "Female Branch Tee", "Female Run Tee", "Reducer"]
  },
  {
    name: "Pipe Fittings",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    items: ["Hex Plug", "Hex Bushing", "Hex Nipple", "Hydraulic Hex Nipple", "Hex Cap", "Hex socket", "Hex Adopter", "Male Elbow", "Female Elbow", "Street Elbow", "Male Tee", "Female Cross", "Female Tee", "Street Tee", "Branch Tee", "Round socket"]
  },
  {
    name: "Instrumentation Valves",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    items: ["Ball Valves", "Needle Valves", "Check Valve", "Manifold Valves (2W, 3W, 5W)", "Monoflanges Valves (Sbbs, Dbbs)", "Gate Valve", "Globe Valve"]
  },
  {
    name: "Specialized Equipment",
    image: "https://images.unsplash.com/photo-1535813547-99c956a0d58a?auto=format&fit=crop&q=80&w=800",
    items: ["Pressure Gauge Accessories", "Seamless Tube (SS, Hestoalloy, Monel, Inconel)", "Pipe (MS, SS)", "Condesate Pots", "Air Header", "Flanges"]
  }
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
    const text = `*New Inquiry*%0A*Name:* ${data.get('name')}%0A*Interested In:* ${data.get('product')}%0A*Details:* ${data.get('message')}`;
    window.open(`https://wa.me/917839929808?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-yellow-400">
      {/* SEO Data Injection */}
      <BusinessSchema />

      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section (The "Big Gesture" Animation) */}
      <Hero />

      {/* 3. Product Catalog (SEO Optimized) */}
      <ProductGrid 
        productCategories={productCategories} 
        expandedCat={expandedCat} 
        setExpandedCat={setExpandedCat} 
      />

      {/* 4. Industries Section */}
      <section id="industries" className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
           <h2 className="text-6xl font-black uppercase tracking-tighter mb-16">Industries <span className="text-red-600 italic">We Serve.</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
             {industries.map((ind) => (
               <div key={ind.name} className="p-8 border border-slate-800 hover:border-yellow-500 transition-all flex flex-col items-center gap-4">
                 <div className="text-yellow-500">{ind.icon}</div>
                 <p className="font-black uppercase text-xs tracking-widest">{ind.name}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. Contact / Quote Section */}
      <section id="quote" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-yellow-500 p-1">
            <div className="bg-white p-12 lg:p-20 grid lg:grid-cols-2 gap-20">
              <header>
                <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-8">Request <span className="text-red-600">Quote.</span></h2>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <MessageSquare className="text-green-600 shrink-0" size={32} />
                    <p className="text-slate-500 font-bold">Instantly connect with our technical sales desk via WhatsApp for ASTM SS 316 component pricing.</p>
                  </div>
                </div>
              </header>

              <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                <input name="name" required placeholder="Full Name" className="w-full border-b-2 border-slate-200 py-4 focus:border-red-600 outline-none font-bold text-lg" />
                <select name="product" className="w-full border-b-2 border-slate-200 py-4 focus:border-red-600 outline-none font-bold text-lg">
                   {productCategories.map(c => <option key={c.name}>{c.name}</option>)}
                </select>
                <textarea name="message" placeholder="Size, Quantity, Pressure Rating..." className="w-full border-b-2 border-slate-200 py-4 focus:border-red-600 outline-none font-bold text-lg resize-none" rows={3} />
                <button type="submit" className="w-full bg-green-600 text-white py-6 font-black uppercase text-xl hover:bg-black transition-all">Send to WhatsApp</button>
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