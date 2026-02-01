import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link"; // Use Link for faster navigation

interface AboutProps {
  isShort?: boolean;
}

export default function AboutContent({ isShort = false }: AboutProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-slate-800">
          About
          <span className="text-red-800 ml-[1rem]">Us</span>
        </h2>

        <p className="bg-slate-50 p-4 border-l-4 border-red-800 italic text-slate-800 mb-2.5">
          Based in Mumbai, India, **Precision Flow Systems** is your trusted
          partner for high-quality SS 316 components and ASTM-standard products.
          We ensure reliable fluid control and leak-free performance for
          critical industrial sectors.
        </p>

        {/* Home Page Version: Short & has "Read More" */}
        {isShort ? (
          <div className="space-y-6">
            <p className="text-slate-500">
              We specialize in sourcing durable, corrosion-resistant solutions
              that meet international standards, helping businesses optimize
              flow systems and reduce downtime across Oil & Gas, Pharma, and
              Marine industries.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-red-800 transition-colors group"
            >
              Read More
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </Link>
          </div>
        ) : (
          /* About Page Version: Full Detail */
          <div className="space-y-6 text-slate-600">
            <p>
              Welcome to Precision Flow Systems, your trusted partner in
              precision-engineered tube fittings, pipe fittings, and
              instrumentation valves. Based in Mumbai(Maharastra), India, we
              deliver top-quality SS 316 components and ASTM-standard products
              to ensure reliable fluid control, leak-free performance, and
              operational efficiency for industrial clients across engineering
              sectors.Our commitment to excellence drives us to source durable,
              corrosion-resistant solutions that meet international standards,
              helping businesses optimize flow systems and reduce downtime. Our
              products are used in various industries in domestic and
              international market such as oil and gas, medical, marine,
              railway, mining, ship building, petrochemical, food, beverages,
              pharmaceuticals, hydraulics, pneumatics, alternative fuels, pulp &
              paper, semiconductor, instrumentations, aerospace, structural
              engineering, refineries, power generation, chemicals, fertilizers
              and many others industries.We maintain a wide range of
              Instrumentation Tube Fittings, Pipe Fittings and Instrumentation
              Valves are supplied on time and at reasonable prices as per the
              demands of every industry. We supply and export all the products
              after inspected them carefully and properly dispatch to our
              buyers.
            </p>
            <p className="bg-slate-50 p-4 border-l-4 border-red-800 italic">
              Every product is carefully inspected before proper dispatch to
              ensure total compliance with our buyers&apos; demands.
            </p>
          </div>
        )}
      </div>

      {/* Grid showing focus areas instead of "years/clients" */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-100 p-8 border-b-4 border-red-800">
          <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">
            ASTM
          </h3>
          <p className="font-bold uppercase text-[10px] tracking-widest text-slate-500">
            Material Standards
          </p>
        </div>
        <div className="bg-slate-900 p-8 text-white border-b-4 border-yellow-500">
          <h3 className="text-2xl font-black text-yellow-500 mb-2 uppercase">
            SS 316
          </h3>
          <p className="font-bold uppercase text-[10px] tracking-widest text-slate-400">
            Core Specialization
          </p>
        </div>
        <div className="col-span-2 bg-slate-50 p-6 flex items-center gap-4">
          <CheckCircle2 className="text-green-600 shrink-0" />
          <p className="font-bold text-xs uppercase tracking-tight text-slate-600">
            Leak-Free Performance & Operational Efficiency
          </p>
        </div>
      </div>
    </div>
  );
}
