// components/layout/Navbar.tsx
"use client";
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      {/* 1. TOP CONTACT BAR - Stays at the absolute top, scrolls with the page */}
      <div className="hidden lg:flex bg-slate-950 text-white py-3 border-b border-white/10 px-8 justify-between items-center text-[14px] font-black uppercase tracking-widest relative z-[110]">
        <div className="flex gap-8">
          <a href="tel:+918750503536" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
            <Phone size={16} className="text-red-600" /> +91 8750503536
          </a>
          <a href="mailto:sales@precisionflowsystems.co.in" className="flex items-center gap-2 hover:text-yellow-500 transition-colors lowercase font-sans text-sm">
            <Mail size={16} className="text-red-600" /> sales@precisionflowsystems.co.in
          </a>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <span className="flex items-center gap-2"><Globe size={14}/> Serving: Global Export Markets</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION - Uses 'sticky top-0' to snap to the top after Top Bar is gone */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-slate-100 shadow-sm px-8 z-[100]">
        <div className="max-w-[1400px] mx-auto h-24 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-14 h-14 bg-red-600 rounded-sm flex items-center justify-center text-white font-black text-2xl transition-transform group-hover:scale-105">PFS</div>
            <div>
              <h1 className="font-black text-2xl tracking-tighter leading-none uppercase">Precision <span className="text-red-600">Flow</span></h1>
              <p className="text-[12px] font-bold text-slate-400 tracking-[0.3em] uppercase">Systems</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-12 text-sm font-black uppercase tracking-widest">
            <a href="#products" className="hover:text-red-600 transition-colors relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#industries" className="hover:text-red-600 transition-colors relative group">
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-red-600 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#quote" className="bg-yellow-500 text-black px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-all flex items-center gap-3">
              Get Tech Quote <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}