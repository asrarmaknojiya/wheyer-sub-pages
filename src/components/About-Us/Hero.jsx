import { MapPin } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative lg:min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/istockphoto-1302343043-612x612.jpg"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* FLOATING IMAGES */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* TOP LEFT */}
        <img
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1600&auto=format&fit=crop"
          className="hidden sm:block absolute top-20 left-10 w-28 sm:w-50 rounded-xl shadow-xl rotate-[-10deg] hover:rotate-0 transition"
        />

        {/* TOP RIGHT */}
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400"
          className="hidden sm:block absolute top-24 right-10 w-28 sm:w-50 rounded-xl shadow-xl rotate-10 hover:rotate-0 transition"
        />

        {/* BOTTOM LEFT */}
        <img
          src="https://images.unsplash.com/photo-1579689189009-874f5cac2db5?q=80&w=600&auto=format&fit=crop"
          className="hidden sm:block absolute bottom-20 left-10 w-28 sm:w-50 rounded-xl shadow-xl rotate-[8deg] hover:rotate-0 transition"
        />

        {/* BOTTOM RIGHT */}
        <img
          src="https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=600&auto=format&fit=crop"
          className="hidden sm:block absolute bottom-24 right-10 w-28 sm:w-50 rounded-xl shadow-xl rotate-[-8deg] hover:rotate-0 transition"
        />

      </div>

      {/* CONTENT */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 text-white">

        {/* HEADING */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            India’s Trust-First <br />
            Travel Marketplace
        </h1>

        {/* SUBTEXT */}
        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            Discover verified travel experiences from trusted partners,
            secured with escrow protection and complete transparency.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">

          <button className="px-6 py-3 rounded-xl bg-cyan text-white hover:bg-cyan-hover transition shadow-lg">
            Explore Experiences
          </button>

          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin size={16} />
            120+ destinations across India
          </div>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

    </section>
  );
}