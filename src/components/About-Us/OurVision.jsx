"use client";

import React from "react";
import Image from "next/image";

const OurVision = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* 🔥 OPTIMIZED BACKGROUND IMAGE */}
      <Image
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
        alt="Travel Vision"
        fill
        priority
        quality={70}
        
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT */}
          <div className="max-w-2xl text-white">

            <span className="pristina text-5xl text-cyan-400 block mb-4">
              Our Vision
            </span>

            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-6">
              The Global <br />
              <span className="text-cyan-400">Standard</span> <br />
              for Travel Trust
            </h2>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
              To build a trusted travel marketplace where discovery, booking,
              and experiences are transparent, secure, and reliable.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="relative w-full max-w-md">

            <div className="glass backdrop-blur-xl bg-white/10 border border-white/20 rounded-[30px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

              <h3 className="text-xl font-semibold text-cyan-400 mb-4 uppercase">
                Empowerment
              </h3>

              <p className="text-white/80 text-base leading-relaxed mb-6">
                We empower travelers with confidence and enable travel businesses
                to grow digitally through a unified and trusted system.
              </p>

              <div className="flex items-center justify-between border-t border-white/20 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-white/60">
                  Growth Engine
                </span>

                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  ))}
                </div>
              </div>

            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
              <span className="text-white text-xs font-bold">2026</span>
            </div>

          </div>

        </div>

        {/* BOTTOM TAGLINE */}
        <div className="absolute bottom-8 right-8">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.6em]">
            Integrity • Innovation • Community
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurVision;