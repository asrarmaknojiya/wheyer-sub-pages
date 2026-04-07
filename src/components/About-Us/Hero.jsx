import { ShieldCheck, MapPin } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-hero.jpg"
          alt="travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 text-white">

        {/* BADGE */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs">
          <ShieldCheck size={16} className="text-cyan" />
          India’s most trusted travel booking experience
        </div> */}

        {/* HEADING */}
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          India’s Trust-First <br className="hidden sm:block" />
          Travel Marketplace
        </h1>

        {/* SUBTEXT */}
        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          Discover and book verified travel experiences from trusted partners,
          powered by secure escrow and complete transparency.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-xl bg-cyan text-white hover:bg-cyan-hover transition-all shadow-lg">
            Explore Experiences
          </button>

          <span className="flex items-center gap-1 text-sm text-white/70">
            <MapPin size={16} />
            120+ Destinations
          </span>
        </div>

      </div>
    </section>
  );
}