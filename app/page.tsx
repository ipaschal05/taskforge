// app/page.tsx
import Nav from "@/components/Nav"; // Adjust import path if necessary
import { Theme } from "@/components/Themes";


export default function HomePage() {
  return (
    <main className="min-h-screen  text-white selection:bg-orange-500 selection:text-white">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <span className="inline-block py-1 px-4 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20">
          Connect &bull; Hire &bull; Grow
        </span>   
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Connect Practical Skills with <span className="text-orange-500">Clients Who Need Them</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Whether you are a Phone Engineer , carpenter, tailor, or teacher —Task_Forge bridges
           the gap between skilled professionals and local clients looking for trusted hands.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/signup"
            className="px-8 py-4 rounded-xl font-bold bg-orange-500 hover:bg-orange-600
             transition-all shadow-lg text-white"
          >
            Find Clients Now
          </a>
          <a
            href="/browse"
            className="px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-white/20 transition-all border border-white/30 text-white"
          >
            Browse Skilled Workers
          </a>
        </div>
      </section>

      {/* Features / Value Proposition */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Choose Task_Forge?</h2>
          <p className="text-gray-400 mt-2">Everything you need to grow your service business or hire trusted talent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-bold mb-6">
              01
            </div>
            <h3 className="text-xl font-semibold mb-3">Direct Client Reach</h3>
            <p className="text-gray-400">
              Showcase your portfolio of past work and get discovered by clients in your local area looking for immediate help.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-bold mb-6">
              02
            </div>
            <h3 className="text-xl font-semibold mb-3">Verified Profiles</h3>
            <p className="text-gray-400">
              Build trust with verified reviews, clear pricing structures, and secure communication channels with prospective clients.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-bold mb-6">
              03
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero Hassle Booking</h3>
            <p className="text-gray-400">
              Manage your schedule, accept project requests, and get paid smoothly all through an intuitive dashboard interface.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}