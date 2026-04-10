import React from 'react';
import { ShieldCheck, ArrowRight, Ban, Lock, Search, AlertCircle, RefreshCcw, UserX } from 'lucide-react';

export default function TheProblem() {
  const images = {
    // Chaos/Stressful airport/travel situation for Problem card
    scamImage: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=800&auto=format&fit=crop",
    // Premium, clear, safe mountain destination for Wheyer card
    safeImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
  };

  return (
    <section className=" py-12  bg-transparent relative overflow-hidden">
      <div className="sec-container max-w-7xl mx-auto">

        {/* --- RE-DESIGNED SYMMETRIC HEADER --- */}
        <div className="mb-16 md:mb-28 px-4 text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Main Headline */}
            <div className="lg:col-span-7">

              <h2 className="heading about-heading m-0">
                The travel industry <br className="hidden md:block" />
                is <span className="text-red italic ">fundamentally broken.</span>
              </h2>
            </div>

            {/* Description Block */}
            <div className="lg:col-span-5 lg:pl-10 relative pt-10 lg:pt-0 mt-10 lg:mt-0 lg:border-l-2 lg:border-gray-100">
              <p className="text-xl md:text-2xl font-semibold text-secondary leading-snug mb-5">
                Most platforms prioritize the booking. <br />
                <span className="text-color-cyan">Wheyer prioritizes the traveler.</span>
              </p>
              <p className="heading-title about-heading-title text-sm md:text-base opacity-70">
                We’ve replaced blind faith with built-in accountability. No more gambles, just guaranteed experiences.
              </p>
            </div>

          </div>
        </div>

        {/* --- COMPARISON LAYOUT --- */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative ">

          {/* 1. THE OTHER PLATFORMS */}
          <div className="group relative rounded-[40px] overflow-hidden border border-red-100 bg-red-50/30 p-8 md:p-12 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-color-red/10 rounded-2xl text-color-red">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary font-secondary uppercase tracking-tight">The Other Platforms</h3>
            </div>

            <div className="relative rounded-[30px] overflow-hidden aspect-video mb-10 shadow-lg">
              <img
                src={images.scamImage}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                alt="Market Chaos"
              />
              <div className="absolute inset-0 bg-color-red/10 mix-blend-multiply" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <Ban size={14} className="text-color-red" />
                <span className="text-[10px] font-black uppercase text-secondary">High Risk Zone</span>
              </div>
            </div>

            <ul className="space-y-5">
              {[
                { t: "Unverified operators", d: "Risky bookings with unknown vendors.", i: <UserX size={20} /> },
                { t: "Hidden pricing", d: "Unexpected fees at checkout or during travel.", i: <Lock size={20} /> },
                { t: "No accountability after payment", d: "Operators vanishing after payment is made.", i: <AlertCircle size={20} /> },
                { t: "Poor refund experiences", d: "Complex, lengthy, or impossible refund processes.", i: <RefreshCcw size={20} /> },
                { t: "Lack of trust in smaller vendors", d: "Reluctance to book with authentic local specialists.", i: <Search size={20} /> }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="text-color-red mt-1 shrink-0">{item.i}</div>
                  <div>
                    <p className="font-bold text-secondary text-sm md:text-base leading-tight">{item.t}</p>
                    <p className="text-[11px] md:text-xs text-gray mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. THE WHEYER WAY (Icons Fixed) */}
          <div className="group relative rounded-[40px] overflow-hidden bg-secondary p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] transform lg:translate-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-color-cyan/10 rounded-full blur-[100px]" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="p-3 bg-color-cyan/20 rounded-2xl text-cyan">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-secondary uppercase tracking-tight">The Wheyer Way</h3>
            </div>

            <div className="relative rounded-[30px] overflow-hidden aspect-video mb-10 shadow-2xl border border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
              <img src={images.safeImage} className="w-full h-full object-cover" alt="Safe Travel" />
              <div className="absolute inset-0 bg-linear-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-full flex items-center gap-2 shadow-inner border border-white/20">
                <ShieldCheck size={16} className="text-color-cyan" />
                <span className="text-[10px] font-black uppercase text-white tracking-widest">Accountability Active</span>
              </div>
            </div>

            {/* HIGHLY VISIBLE ICONS FOR WHEYER WAY */}
            <ul className="space-y-8 relative z-10">
              {[
                {
                  t: "Identity Vetting",
                  d: "We physically verify every single operator on our map.",
                  i: <Search size={22} className="text-white" />
                },
                {
                  t: "Secure Escrow",
                  d: "Payments stay with us until your trip is completed.",
                  i: <Lock size={22} className="text-white" />
                },
                {
                  t: "Radical Transparency",
                  d: "One price. No surprises. Complete accountability.",
                  i: <ShieldCheck size={22} className="text-white" />
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group/item">

                  {/* Containerized, Cyan icon guarantees visibility */}
                  <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-color-cyan shadow-lg shadow-color-cyan/20 shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    {item.i}
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-base md:text-lg mb-1 leading-tight">{item.t}</h4>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-10 w-full py-4 bg-cyan hover:opacity-90 text-secondary font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group relative z-10 shadow-xl shadow-(--color-cyan)/20">
              Learn About Our Verification
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>

        {/* TAGLINE */}
       <div className="mt-32 flex justify-center px-4">
  <div className="bg-black/2 backdrop-blur-4xl px-8 py-6 rounded-2xl border border-white/20 shadow-md">
    <p className="pristina text-4xl md:text-6xl opacity-60 text-center">
      Confidence is the ultimate luxury.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}