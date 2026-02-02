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
            className="flex items-center gap-2 transition-colors hover:text-yellow-500"
          >
            <Phone size={16} className="text-red-800" /> +91 7839929808
          </a>
          <a
            href="mailto:sales@precisionflowsystems.co.in"
            className="flex items-center gap-2 font-sans text-sm lowercase transition-colors hover:text-yellow-500"
          >
            <Mail size={16} className="text-red-800" />{" "}
            sales@precisionflowsystems.co.in
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
          <Link
            href="/"
            className="relative w-48 h-16 overflow-hidden lg:w-80 lg:h-24"
          >
            <Image
              src="/pfs.jpeg"
              alt="Precision Flow Systems Logo"
              fill
              className="object-contain lg:object-cover"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="items-center hidden gap-12 text-sm font-black tracking-widest uppercase lg:flex text-slate-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative transition-colors hover:text-red-800 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-800 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="#quote"
              /* Added 'group' to trigger child animations */
              className="flex items-center gap-3 px-8 py-4 text-black transition-all bg-yellow-500 rounded-sm group hover:bg-black hover:text-white"
            >
              Get Tech Quote
              <ArrowRight
                size={16}
                /* The magic happens here: duration and translation on group hover */
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
              />
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden fixed right-6 top-5 p-3 rounded-full transition-all duration-300 z-[150] ${
              isOpen
                ? "bg-slate-100 text-red-600 rotate-90"
                : "bg-transparent text-slate-900"
            }`}
          >
            {isOpen ? (
              <X size={28} strokeWidth={3} />
            ) : (
              <Menu size={28} strokeWidth={3} />
            )}
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
                <div className="px-10 pt-16 pb-8 border-b border-slate-50">
                  <h2 className="absolute text-5xl font-black tracking-tighter uppercase select-none text-slate-100 top-2 left-4">
                    MENU
                  </h2>
                  <div className="relative z-10">
                    <p className="text-red-800 font-black text-xs uppercase tracking-[0.5em]">
                      Main Navigation
                    </p>
                    <div className="w-12 h-1 mt-2 bg-red-800" />
                  </div>
                </div>

                {/* 2. NAV LINKS SECTION */}
                <div className="flex flex-col gap-10 px-10 py-12">
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
                        className="flex items-baseline gap-4 group"
                      >
                        <span className="text-xs font-bold transition-colors text-slate-300 group-hover:text-red-800">
                          0{idx + 1}
                        </span>
                        <span className="text-3xl font-bold tracking-tight uppercase transition-transform duration-300 text-slate-900 group-hover:translate-x-2">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* 3. CONTACT & BUTTON FOOTER (No Spacer, pushed to bottom via margin) */}
                <div className="p-10 mt-auto space-y-8 bg-slate-50">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                      Engineering Support
                    </p>
                    <div className="space-y-3">
                      <a
                        href="tel:+917839929808"
                        className="flex items-center gap-3 font-bold transition-colors text-slate-700 hover:text-red-800"
                      >
                        <Phone size={18} /> +91 7839929808
                      </a>
                      <a
                        href="mailto:sales@pfs.co.in"
                        className="flex items-center gap-3 font-bold break-all transition-colors text-slate-700 hover:text-red-800"
                      >
                        <Mail size={18} /> sales@pfs.co.in
                      </a>
                    </div>
                  </div>

                  <a
                    href="#quote"
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-full gap-3 py-5 text-xs font-black tracking-widest text-white uppercase transition-colors bg-red-800 shadow-xl hover:bg-slate-900"
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
