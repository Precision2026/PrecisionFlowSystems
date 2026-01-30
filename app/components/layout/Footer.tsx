// components/layout/Footer.tsx
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-black pt-24 pb-12 ">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
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
          <p className="text-slate-900 text-lg font-medium leading-relaxed max-w-md italic mb-8">
            &quot;Engineering leak-proof excellence for the world&apos;s most
            demanding industrial environments. Specializing in ASTM-standard SS
            316 components.&quot;
          </p>
          <div className="flex gap-4">
            <div className="border border-slate-800 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-800">
              ISO 9001:2015
            </div>
            <div className="border border-slate-800 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-800">
              ASTM Certified
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-8">
            Contact Sales
          </h4>
          <ul className="space-y-6 text-sm font-bold uppercase">
            <li className="flex gap-3 items-center hover:text-red-600 transition-colors">
              <Phone size={18} className="text-red-600" /> +91 7839929808
            </li>
            <li className="flex gap-3 items-center hover:text-red-600 transition-colors lowercase font-sans">
              <Mail size={18} className="text-red-600" />{" "}
              sales@precisionflowsystems.co.in
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-red-600 shrink-0" />
              <span>
                Lubna Height, 5th floor, Shil Road, behind Dosti Road, Thane
                Mumbai, Maharastra 400612
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-8">
            Quick Links
          </h4>
          <ul className="space-y-4 text-xs font-black uppercase text-slate-800">
            <li>
              <a
                href="#products"
                className="hover:text-white transition-colors"
              >
                Product Range
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="hover:text-white transition-colors"
              >
                Industrial Sectors
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                Company Profile
              </a>
            </li>
            <li>
              <a
                href="#quote"
                className="text-red-600 hover:text-white transition-colors"
              >
                Request Technical Data
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Precision Flow Systems • Global
          Industrial Supplier
        </p>
        <div className="flex gap-8 text-slate-800 text-[10px] font-black uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Globe size={12} /> Exports: USA • UAE • GERMANY • SINGAPORE
          </span>
        </div>
      </div>
    </footer>
  );
}
