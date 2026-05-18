"use client";

import { useState } from "react";

const CONVICTIONS = [
  {
    id: "c1",
    num: "01",
    short: "Own Your Business",
    title: "Vendors deserve to own their business — not rent space in someone else's",
    desc: "An operator who has spent 10 years learning Spiti Valley should be able to build a brand, not just a listing. Wheyer is where that's finally possible.",
    tags: ["Brand Ownership", "Operator Identity", "No Middlemen", "Direct Bookings", "Custom Storefront", "Your Rules"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
  },
  {
    id: "c2",
    num: "02",
    short: "Trust is Foundation",
    title: "Trust is not a feature — it's the foundation",
    desc: "Escrow, verification, SOS — these aren't add-ons. They're the reason Wheyer exists. We've built it into the architecture, not the marketing.",
    tags: ["Escrow Payments", "Operator Verification", "SOS System", "Safe Transactions", "Dispute Resolution", "Built-in Trust"],
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=85",
  },
  {
    id: "c3",
    num: "03",
    short: "Humans Behind Trips",
    title: "Every trip has a human behind it — and that human should be visible",
    desc: "Algorithms don't know that the best way to see Kedarnath is with Ankit, who's been guiding there since 2016. Real people do.",
    tags: ["Human-first", "Guide Profiles", "Local Expertise", "Real Reviews", "Operator Stories", "Community"],
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
  },
  {
    id: "c4",
    num: "04",
    short: "Small → Big Brands",
    title: "Small operators can build big brands — with the right platform",
    desc: "Indian travel is dominated by a handful of OTAs not because they're better, but because operators never had the infrastructure. That changes with Wheyer.",
    tags: ["Growth Tools", "Brand Builder", "Equal Access", "Analytics", "Marketing Suite", "Scale Ready"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
  },
];

export default function BelieveSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScrollToCard = (index) => {
    const targetElement = document.getElementById(`card-anchor-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // Outer section locks the entire window from moving
    <div className="bg-[#0a0a0a] text-white w-full h-screen overflow-hidden selection:bg-[#c8a96e]/30 py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-8 lg:gap-12 h-full items-stretch relative">

        {/* ── LEFT SIDEBAR (FIXED IN PLACE) ── */}
        <div className="w-full lg:w-[28%] h-auto lg:h-full flex flex-col justify-center py-8 lg:py-0 gap-4 z-40 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#c8a96e] text-[0.75rem] font-mono font-bold">+</span>
            <span className="text-[0.65rem] font-mono tracking-[0.25em] text-white/40 uppercase font-semibold">
              What We Believe
            </span>
          </div>

          <div className="flex flex-col gap-3 items-start">
            {CONVICTIONS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => handleScrollToCard(i)}
                style={{ fontFamily: "'Exo', sans-serif" }}
                className={`text-left transition-all duration-500 ease-out border-none bg-none p-0 outline-none cursor-pointer ${activeIdx === i
                  ? "text-white text-2xl font-bold translate-x-2 opacity-100"
                  : "text-white/20 text-lg font-bold translate-x-0 opacity-35 hover:opacity-60 hover:text-white/40"
                  }`}
              >
                <span className="font-mono font-normal text-[0.6em] text-[#c8a96e] mr-2">
                  [{c.num}]
                </span>
                {c.short}
              </button>
            ))}
          </div>

          {/* Progress Indicator Dots */}

        </div>

        {/* ── RIGHT COLUMN (ISOLATED SCROLL CONTAINER) ── */}
        <div
          className="w-full lg:w-[72%] h-full overflow-y-auto no-scrollbar relative order-1 lg:order-2 space-y-[50vh] lg:space-y-0"
          style={{
            scrollbarWidth: "none", /* Firefox */
            msOverflowStyle: "none", /* IE/Edge */
          }}
        >
          {/* Webkit Specific rule to hide scrollbars on Right Deck */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
          `}} />

          {CONVICTIONS.map((c, i) => {
            // Observer to seamlessly switch active styling variables on scroll
            const registerRef = (el) => {
              if (!el) return;
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setActiveIdx(i);
                  }
                },
                // Custom viewport window bounds inside our custom container
                {
                  threshold: 0.5,
                  root: el.parentElement,
                  rootMargin: "0px 0px -20% 0px"
                }
              );
              observer.observe(el);
            };

            return (
              <div
                key={c.id}
                id={`card-anchor-${i}`}
                ref={registerRef}
                className="w-full h-full flex items-center justify-center sticky top-0 overflow-hidden py-6 lg:py-12"
                style={{ zIndex: i + 1 }}
              >
                {/* Visual Image Background Panel */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-900 shadow-2xl">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover select-none pointer-events-none brightness-[0.75]"
                    loading="eager"
                  />
                  {/* Linear Shadow Drop for optimal structural overlay readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/40 to-transparent" />


                </div>

                {/* ── CARD CONTENT INFO LAYOVER ── */}
                <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10 z-20 pointer-events-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

                    <div className="md:col-span-7 flex flex-col gap-3">
                      <h3
                        style={{ fontFamily: "'Exo', sans-serif" }}
                        className="text-white font-bold leading-tight tracking-tight text-xl md:text-2xl lg:text-3xl max-w-xl"
                      >
                        {c.title}
                      </h3>
                      <p className="text-[0.9rem] text-white/70 font-normal leading-relaxed max-w-xl">
                        {c.desc}
                      </p>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-2.5">
                      <span className="text-[0.6rem] font-mono text-white/40 tracking-[0.2em] uppercase font-bold">
                        Categories
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[0.68rem] font-mono tracking-wide px-2.5 py-1 bg-white/5 border border-white/10 text-white/75 rounded-md backdrop-blur-sm whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}