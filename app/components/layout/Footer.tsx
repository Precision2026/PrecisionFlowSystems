// components/layout/Footer.tsx
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 overflow-hidden text-black bg-slate-100">
      {/* 1. Changed to grid-cols-1 by default, and adjusted max-width/padding */}
      <div className="grid grid-cols-1 gap-12 px-6 mx-auto mb-16 max-w-7xl lg:px-8 lg:grid-cols-4">
        
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6 cursor-pointer group">
            {/* 2. Responsive Logo Container: Removed fixed w-80 */}
            <div className="relative w-full max-w-[280px] h-20 overflow-hidden transition-transform">
              <Image
                src="/pfs.png"
                alt="Precision Flow Systems Logo"
                fill
                className="object-contain object-left" // object-left ensures it aligns with text
                priority
              />
            </div>
          </div>
          <p className="max-w-md mb-8 text-base italic font-medium leading-relaxed text-slate-900 md:text-lg">
            &quot;Engineering leak-proof excellence for the world&apos;s most
            demanding industrial environments. Specializing in ASTM-standard SS
            316 components.&quot;
          </p>
          <div className="flex flex-wrap gap-4">
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
            <li className="flex items-center gap-3 transition-colors hover:text-red-800">
              <Phone size={18} className="text-red-800 shrink-0" /> +91 7839929808
            </li>
            <li className="flex items-center gap-3 font-sans lowercase transition-colors hover:text-red-800">
              <Mail size={18} className="text-red-800 shrink-0" />{" "}
              <span className="break-all">sales@precisionflowsystems.co.in</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-red-800 shrink-0" />
              <span className="font-medium normal-case">
                Lubna Height, 5th floor, Shil Road, Mumbai, Maharashtra 400612
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-8">
            Quick Links
          </h4>
          <ul className="space-y-4 text-xs font-black uppercase text-slate-800">
            <li><a href="#products" className="transition-colors hover:text-red-800">Product Range</a></li>
            <li><a href="#industries" className="transition-colors hover:text-red-800">Industrial Sectors</a></li>
            <li><a href="#about" className="transition-colors hover:text-red-800">Company Profile</a></li>
            <li><a href="#quote" className="font-bold text-red-800 hover:underline">Request Technical Data</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 px-6 pt-12 mx-auto border-t max-w-7xl lg:px-8 border-slate-300 md:flex-row">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left">
          &copy; {new Date().getFullYear()} Precision Flow Systems • Global
          Industrial Supplier
        </p>
        {/* 3. Handling long export text for small screens */}
        <div className="flex flex-wrap justify-center gap-4 text-slate-800 text-[10px] font-black uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Globe size={12} /> Exports: USA • UAE • GERMANY • SINGAPORE
          </span>
        </div>
      </div>
    </footer>
  );
}