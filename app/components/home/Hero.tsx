// components/home/Hero.tsx
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const letter: Variants = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section className="pt-48 pb-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase mb-8 inline-flex items-center gap-2">
          <CheckCircle2 size={16} /> Premium SS 316 Quality
        </motion.div>
        
        <motion.h1 variants={container} initial="hidden" animate="visible" className="text-7xl md:text-9xl font-black leading-[0.85] uppercase tracking-tighter mb-10">
          <div className="flex flex-wrap gap-x-4">
            {"Flow Without Failure.".split(" ").map((word, i) => (
              <span key={i} className={`flex ${word === "Without" ? "text-red-600 italic underline decoration-yellow-500 decoration-8 underline-offset-8" : ""}`}>
                {word.split("").map((char, j) => (
                  <motion.span key={j} variants={letter}>{char}</motion.span>
                ))}
              </span>
            ))}
          </div>
        </motion.h1>
        
        <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-2xl leading-relaxed">
          Mumbai&apos;s leading manufacturer of high-pressure tube fittings and instrumentation valves for global industrial projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#quote" className="bg-black text-white px-10 py-6 text-lg font-black uppercase flex items-center justify-center gap-4 hover:bg-red-600 transition-all">
            Browse Collection <ArrowRight />
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500 hidden lg:block -skew-x-12 translate-x-20" />
    </section>
  );
}