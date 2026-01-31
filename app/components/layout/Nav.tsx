// components/layout/Navbar.tsx
"use client";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* 1. TOP CONTACT BAR - Stays at the absolute top, scrolls with the page */}
      <div className="hidden lg:flex bg-slate-950 text-white py-3 border-b border-white/10 px-8 justify-between items-center text-[14px] font-black uppercase tracking-widest relative z-[110]">
        <div className="flex gap-8">
          <a
            href="tel:+918750503536"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
          >
            <Phone size={16} className="text-red-600" /> +91 7839929808
          </a>
          <a
            href="mailto:sales@precisionflowsystems.co.in"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors lowercase font-sans text-sm"
          >
            <Mail size={16} className="text-red-600" />{" "}
            sales@precisionflowsystems.co.in
          </a>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <span className="flex items-center gap-2">
            <Globe size={14} /> Serving: Indian Markets
          </span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION - Uses 'sticky top-0' to snap to the top after Top Bar is gone */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-slate-100 shadow-sm px-8 z-[100]">
        <div className="max-w-[1400px] mx-auto h-24 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-4 group cursor-pointer">
            {/* Replaced the red div with this Image container */}
            <div className="relative w-80 h-24 overflow-hidden transition-transform">
              <Image
                src="/pfs.png"
                alt="Precision Flow Systems Logo"
                fill
                className="object-cover object-center" // This crops the sides and keeps the middle
                priority
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-12 text-sm font-black uppercase tracking-widest">
            <a
              href="#products"
              className="hover:text-red-600 transition-colors relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#industries"
              className="hover:text-red-600 transition-colors relative group"
            >
              Industries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="hover:text-red-600 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#quote"
              className="bg-yellow-500 text-black px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-all flex items-center gap-3"
            >
              Get Tech Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
