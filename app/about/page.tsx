import AboutContent from "../components/sharedAbout/shared";
import Navbar from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 bg-slate-950 text-white text-center">
         <h1 className="text-6xl font-black uppercase tracking-tighter">About Our Company</h1>
      </div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Passing false here shows the full text and hides the Read More link */}
          <AboutContent isShort={false} />
        </div>
      </section>
      <Footer />
    </main>
  );
}