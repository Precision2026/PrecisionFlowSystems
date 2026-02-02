"use client";
import { useState } from "react";
import { Mail, Phone, Globe, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { 
    name: "Products", 
    href: "/products", 
    isDropdown: true,
    subLinks: [
      { name: "Tube Fittings", slug: "tube-fittings" },
      { name: "Pipe Fittings", slug: "pipe-fittings" },
      { name: "Instrumentation Valves", slug: "instrumentation-valves" },
      { name: "Specialized Equipment", slug: "specialized-equipment" },
    ]
  },
  { name: "Industries", href: "/#industries" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { 
      name: "Products", 
      href: "/products", 
      subLinks: [
        { name: "Tube Fittings", slug: "tube-fittings" },
        { name: "Pipe Fittings", slug: "pipe-fittings" },
        { name: "Instrumentation Valves", slug: "instrumentation-valves" },
        { name: "Specialized Equipment", slug: "specialized-equipment" },
      ]
    },
    { name: "Industries", href: "/#industries" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* 1. TOP CONTACT BAR */}
      <div className="hidden lg:flex bg-slate-950 text-white py-3 border-b border-white/10 px-8 justify-between items-center text-[12px] font-black uppercase tracking-widest relative z-[110]">
        <div className="flex gap-8">
          <a href="tel:+917839929808" className="flex items-center gap-2 transition-colors hover:text-yellow-500">
            <Phone size={14} className="text-red-800" /> +91 7839929808
          </a>
          <a href="mailto:sales@precisionflowsystems.co.in" className="flex items-center gap-2 font-sans lowercase transition-colors hover:text-yellow-500">
            <Mail size={14} className="text-red-800" /> sales@precisionflowsystems.co.in
          </a>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <span className="flex items-center gap-2"><Globe size={12} /> Serving: Indian Markets</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="sticky top-0 w-full bg-white border-b-2 border-slate-100 shadow-sm px-4 lg:px-8 z-[100]">
        <div className="max-w-[1400px] mx-auto h-20 lg:h-24 flex items-center justify-between">
          <Link href="/" className="relative w-48 h-16 lg:w-80 lg:h-20">
            <Image src="/pfs.jpeg" alt="Logo" fill className="object-contain" priority />
          </Link>

          {/* Desktop Nav Links */}
          <div className="items-center hidden gap-10 text-[13px] font-black tracking-widest uppercase lg:flex text-slate-900">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative flex items-center h-full"
                onMouseEnter={() => link.subLinks && setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
              >
                {link.subLinks ? (
                  <div className="flex items-center gap-1 py-10 cursor-pointer group">
                    <Link href={link.href} className="transition-colors hover:text-red-800">
                      {link.name}
                    </Link>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown ? 'rotate-180 text-red-800' : ''}`} />
                    
                    {/* Desktop Dropdown */}
                    <AnimatePresence>
                      {activeDropdown && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[90px] left-0 w-64 bg-white border-t-4 border-red-800 shadow-2xl py-4 flex flex-col"
                        >
                          <Link href="/products" className="px-6 py-3 text-[11px] text-red-800 border-b border-slate-50 hover:bg-slate-50">
                            View All Products →
                          </Link>
                          {link.subLinks.map((sub) => (
                            <Link 
                              key={sub.slug} 
                              href={`/products/${sub.slug}`}
                              className="px-6 py-4 transition-colors border-b hover:bg-slate-50 hover:text-red-800 border-slate-50 last:border-0"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.href} className="transition-colors hover:text-red-800">{link.name}</Link>
                )}
              </div>
            ))}
            
            <a href="#quote" className="flex items-center gap-3 px-8 py-4 text-black transition-all bg-yellow-500 group hover:bg-slate-950 hover:text-white">
              Get Tech Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={toggleMenu} className="p-3 lg:hidden text-slate-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 3. MOBILE SLIDING NAV */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleMenu} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm lg:hidden z-[130]" />
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed top-0 right-0 h-full w-[85%] bg-white flex flex-col lg:hidden z-[140]">
                <div className="flex flex-col gap-6 px-10 pt-24">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col gap-4">
                      <Link href={link.href} onClick={toggleMenu} className="text-3xl font-bold tracking-tight uppercase text-slate-900">
                        {link.name}
                      </Link>
                      {link.subLinks && (
                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                          {link.subLinks.map((sub) => (
                            <Link key={sub.slug} href={`/products/${sub.slug}`} onClick={toggleMenu} className="text-sm font-bold uppercase text-slate-500 hover:text-red-800">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-10 mt-auto space-y-6 bg-slate-50">
                    <a href="tel:+917839929808" className="flex items-center gap-3 font-bold text-slate-700"><Phone size={18} /> +91 7839929808</a>
                    <a href="#quote" onClick={toggleMenu} className="flex items-center justify-center w-full gap-3 py-5 text-xs font-black text-white uppercase bg-red-800 shadow-xl">
                      Get Tech Quote <ArrowRight size={18} />
                    </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}