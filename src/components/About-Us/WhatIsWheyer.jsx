"use client";

import React from "react";
import Image from "next/image";

const WhatIsWheyer = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container relative z-10">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="heading about-heading mb-4">
            What is Wheyer?
          </h2>
          <p className="heading-title about-heading-title pl-4">
            The infrastructure connecting you to the world’s most trusted travel creators.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[240px]">
          
          {/* CARD 1 */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[30px] shadow-sm border border-white">
            
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
              alt="Travel Destinations"
              fill
              priority
              quality={70}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-8">
              <span className="bg-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                The Marketplace
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Verified Experience Creators
              </h3>
              <p className="text-white/80 max-w-lg text-sm md:text-base leading-relaxed">
                Wheyer is a travel marketplace that connects travelers with 
                verified travel partners offering handpicked experiences across 
                global destinations.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="md:col-span-4 md:row-span-2 bg-secondary rounded-[30px] p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Secured by Escrow
              </h3>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Unlike traditional platforms, Wheyer ensures every booking is secured through escrow, 
                giving you complete transparency and confidence before, during, and after your trip.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10">
              <p className="pristina text-2xl text-cyan-400">
                Travel with Peace of Mind
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-[30px] shadow-sm border border-white">
            
            <Image
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop"
              alt="Curated Experience"
              fill
              loading="lazy"
              quality={60}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-2">
                Curated Discoveries
              </h3>
              <p className="text-white/90 text-sm">
                Seamless execution from booking to the final destination.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="md:col-span-8 md:row-span-2 relative overflow-hidden rounded-[30px] group">

            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
              alt="Trust Travel"
              fill
              loading="lazy"
              quality={65}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">

              <h3 className="heading text-2xl md:text-4xl text-white mb-6">
                Designed for Trust.
              </h3>

              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                From curated experiences to full travel packages, Wheyer is built to
                make travel discovery, booking, and execution seamless and reliable.
                Every interaction is structured to ensure clarity and confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Verified Partners", "Zero Hidden Fees", "Escrow Protected"].map((tag) => (
                  <div
                    key={tag}
                    className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-semibold text-secondary"
                  >
                    {tag}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsWheyer;