// components/home/Hero.tsx
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
    <section className="relative pt-48 pb-32 overflow-hidden bg-slate-50">
      <div className="relative z-10 px-8 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-black text-white uppercase bg-red-800 rounded-full"
        >
          <CheckCircle2 size={16} /> Premium SS 316 Quality
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-9xl font-black leading-[0.85] uppercase tracking-tighter mb-10"
        >
          <div className="flex flex-wrap gap-x-4">
            {"Flow Without Failure.".split(" ").map((word, i) => (
              <span
                key={i}
                className={`flex ${word === "Without" ? "text-red-800 italic underline decoration-yellow-500 decoration-8 underline-offset-8" : ""}`}
              >
                {word.split("").map((char, j) => (
                  <motion.span key={j} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        </motion.h1>

        <p className="max-w-2xl mb-12 text-xl font-medium leading-relaxed md:text-2xl text-slate-500">
          Mumbai&apos;s leading manufacturer of high-pressure tube fittings and
          instrumentation valves for global industrial projects.
        </p>

        <div className="flex flex-col gap-6 sm:flex-row">
          <a
            href="#quote"
            /* Added 'group' class here so the child icon can react to the hover */
            className="flex items-center justify-center gap-4 px-10 py-6 text-lg font-black text-white uppercase transition-all bg-black group hover:bg-red-800"
          >
            Browse Collection{" "}
            <ArrowRight
              /* Added duration and ease for a smoother 'premium' feel */
              className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-2"
            />
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden w-1/3 h-full translate-x-20 -skew-x-12 bg-yellow-500 lg:block" />
    </section>
  );
}
