"use client";
import { useState } from "react";
import { Mail, Phone, Globe, ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Products", href: "/#products" },
    { name: "Industries", href: "/#industries" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* 1. TOP CONTACT BAR */}
      <div className="hidden lg:flex bg-slate-950 text-white py-3 border-b border-white/10 px-8 justify-between items-center text-[14px] font-black uppercase tracking-widest relative z-[110]">
        <div className="flex gap-8">
          <a
            href="tel:+917839929808"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
          >
            <Phone size={16} className="text-red-800" /> +91 7839929808
          </a>
          <a
            href="mailto:sales@precisionflowsystems.co.in"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors lowercase font-sans text-sm"
          >
            <Mail size={16} className="text-red-800" /> sales@precisionflowsystems.co.in
          </a>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <span className="flex items-center gap-2">
            <Globe size={14} /> Serving: Indian Markets
          </span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="sticky top-0 w-full bg-white border-b-2 border-slate-100 shadow-sm px-4 lg:px-8 z-[100]">
        <div className="max-w-[1400px] mx-auto h-20 lg:h-24 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="relative w-48 lg:w-80 h-16 lg:h-24 overflow-hidden">
            <Image
              src="/pfs.jpeg"
              alt="Precision Flow Systems Logo"
              fill
              className="object-contain lg:object-cover"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-12 text-sm font-black uppercase tracking-widest text-slate-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-red-800 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-800 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="#quote"
              className="bg-yellow-500 text-black px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-all flex items-center gap-3"
            >
              Get Tech Quote <ArrowRight size={16} />
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden fixed right-6 top-5 p-3 rounded-full transition-all duration-300 z-[150] ${
              isOpen ? "bg-slate-100 text-red-600 rotate-90" : "bg-transparent text-slate-900"
            }`}
          >
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>

        {/* 3. MOBILE SLIDING NAV */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
                className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm lg:hidden z-[130]"
              />

              {/* Side Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[85%] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col lg:hidden z-[140] border-l border-slate-100"
              >
                {/* 1. TOP HEADER IN PANEL */}
                <div className="pt-16 pb-8 px-10 border-b border-slate-50">
                  <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-100 absolute top-2 left-4 select-none">
                    MENU
                  </h2>
                  <div className="relative z-10">
                    <p className="text-red-800 font-black text-xs uppercase tracking-[0.5em]">
                      Main Navigation
                    </p>
                    <div className="h-1 w-12 bg-red-800 mt-2" />
                  </div>
                </div>

                {/* 2. NAV LINKS SECTION */}
                <div className="px-10 py-12 flex flex-col gap-10">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className="group flex items-baseline gap-4"
                      >
                        <span className="text-xs font-bold text-slate-300 group-hover:text-red-800 transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="text-3xl font-bold uppercase tracking-tight text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* 3. CONTACT & BUTTON FOOTER (No Spacer, pushed to bottom via margin) */}
                <div className="mt-auto bg-slate-50 p-10 space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                      Engineering Support
                    </p>
                    <div className="space-y-3">
                      <a
                        href="tel:+917839929808"
                        className="flex items-center gap-3 text-slate-700 font-bold hover:text-red-800 transition-colors"
                      >
                        <Phone size={18} /> +91 7839929808
                      </a>
                      <a
                        href="mailto:sales@pfs.co.in"
                        className="flex items-center gap-3 text-slate-700 font-bold break-all hover:text-red-800 transition-colors"
                      >
                        <Mail size={18} /> sales@pfs.co.in
                      </a>
                    </div>
                  </div>

                  <a
                    href="#quote"
                    onClick={toggleMenu}
                    className="w-full bg-red-800 text-white py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl hover:bg-slate-900 transition-colors"
                  >
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