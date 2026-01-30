// components/layout/Footer.tsx
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t-8 border-red-600">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center font-black text-xl">PFS</div>
            <h3 className="text-3xl font-black uppercase tracking-tighter">Precision Flow <span className="text-red-600">Systems</span></h3>
          </div>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md italic mb-8">
            &quot;Engineering leak-proof excellence for the world&apos;s most demanding industrial environments. Specializing in ASTM-standard SS 316 components.&quot;
          </p>
          <div className="flex gap-4">
             <div className="border border-slate-800 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500">ISO 9001:2015</div>
             <div className="border border-slate-800 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500">ASTM Certified</div>
          </div>
        </div>

        <div>
          <h4 className="text-yellow-500 font-black uppercase tracking-[0.2em] text-xs mb-8">Contact Sales</h4>
          <ul className="space-y-6 text-sm font-bold uppercase">
            <li className="flex gap-3 items-center hover:text-red-600 transition-colors">
              <Phone size={18} className="text-red-600" /> +91 8750503536
            </li>
            <li className="flex gap-3 items-center hover:text-red-600 transition-colors lowercase font-sans">
              <Mail size={18} className="text-red-600" /> sales@precisionflowsystems.co.in
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-red-600 shrink-0" /> 
              <span>Mumbai Metropolitan Region,<br/> Maharashtra, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-500 font-black uppercase tracking-[0.2em] text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4 text-xs font-black uppercase text-slate-500">
            <li><a href="#products" className="hover:text-white transition-colors">Product Range</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Industrial Sectors</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Company Profile</a></li>
            <li><a href="#quote" className="text-red-600 hover:text-white transition-colors">Request Technical Data</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Precision Flow Systems • Global Industrial Supplier
        </p>
        <div className="flex gap-8 text-slate-600 text-[10px] font-black uppercase tracking-widest">
          <span className="flex items-center gap-2"><Globe size={12}/> Exports: USA • UAE • GERMANY • SINGAPORE</span>
        </div>
      </div>
    </footer>
  );
}