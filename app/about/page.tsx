import Link from "next/link";
import Navbar from "@/components/Nav";
import { Theme } from "@/components/Themes";

export default function AboutPage() {
  return (
    <main className="min-h-screen  text-white flex flex-col justify-between relative selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Main Content Container */}
      <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto flex-grow w-full">
        
        {/* Top Badge / Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-700/60 border border-orange-400/40 text-orange-100 text-xs font-semibold tracking-wider uppercase mb-6">
          Our Story & Mission
        </div>

        {/* Main Header / Title matching your visual layout */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          BRIDGING THE GAP BETWEEN <span className="text-orange-400">DREAMS & EXECUTION</span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-lg md:text-xl text-orange-100 leading-relaxed mb-12 font-normal">
          We are on a mission to drastically reduce business failure rates in Nigeria by giving aspiring founders access to authentic operational blueprints and real-world mentorship.
        </p>

        {/* Content Card Section */}
        <div className="space-y-10 bg-orange-600/20 border border-orange-500/30 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
          
          {/* Where Grit Meets Growth */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              Where Grit Meets Growth
            </h2>
            <p className="text-orange-100/90 leading-relaxed text-base md:text-lg">
              Every great enterprise starts with a spark—an idea, a skill, or a bold vision. But between having a brilliant concept and building a thriving, profitable business lies a massive operational gap. Too many ambitious ventures stumble not because the idea lacked merit, but because the roadmap was missing.
            </p>
            <p className="text-orange-100/90 leading-relaxed text-base md:text-lg font-medium">
              That is why we built <strong className="text-white">Task_Forge</strong>.
            </p>
          </section>

          <hr className="border-orange-500/30" />

          {/* Our Mission */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              Our Mission
            </h2>
            <p className="text-orange-100/90 leading-relaxed text-base md:text-lg">
              We are on a mission to radically transform how business is built and scaled. Task_Forge isn't just another platform; it’s an ecosystem designed to connect talented individuals who have practical skills with the right clients, while giving aspiring founders unobstructed access to authentic operational blueprints and real-world venture insights.
            </p>
          </section>

          <hr className="border-orange-500/30" />

          {/* What We Do Differently */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              What We Do Differently
            </h2>
            
            <ul className="grid gap-4 md:grid-cols-1 pt-2">
              <li className="p-4 rounded-xl bg-orange-700/30 border border-orange-400/20">
                <strong className="text-white block mb-1 text-lg">🚀 Real-World Blueprints:</strong>
                <span className="text-orange-100/90 text-sm md:text-base">No theory, no fluff. We share proven strategies, sector-specific data, and capital insights straight from the trenches so you can avoid costly mistakes.</span>
              </li>

              <li className="p-4 rounded-xl bg-orange-700/30 border border-orange-400/20">
                <strong className="text-white block mb-1 text-lg">🤝 Skill Meets Opportunity:</strong>
                <span className="text-orange-100/90 text-sm md:text-base">We bridge the divide between top-tier practical talent and clients who need execution done right.</span>
              </li>

              <li className="p-4 rounded-xl bg-orange-700/30 border border-orange-400/20">
                <strong className="text-white block mb-1 text-lg">🌱 Community-Driven Growth:</strong>
                <span className="text-orange-100/90 text-sm md:text-base">We believe that transparency breeds success. By sharing business venture insights openly, we help every founder build smarter, faster, and stronger.</span>
              </li>
            </ul>
          </section>

          <hr className="border-orange-500/30" />

          {/* Build the Future With Us */}
          <section className="space-y-4 pt-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              Build the Future With Us
            </h2>
            <p className="text-orange-100/90 leading-relaxed text-base md:text-lg">
              Whether you're here to showcase your practical skills, land your next major client, or study the blueprint of a successful enterprise, you are in the right place. Let's stop guessing and start building.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="px-6 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-orange-50 transition-all text-sm shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold bg-orange-700/60 border border-orange-400/40 text-white hover:bg-orange-700 transition-all text-sm shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}