"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

/* ─── PREMIUM CUSTOM TIMING CURVE ─── */
const PREMIUM_EASE = [0.25, 1, 0.5, 1]; // Smoother easeOut curve

const ITEMS = [
  {
    id: "01",
    title: "Explore Trips",
    meta: "LOG_INDEX // 001",
    desc: "Pick an operator's experience and set your own departure date and group size. The operator's knowledge, your schedule.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80",
    ratio: "aspect-[4/5] lg:aspect-[3/4]"
  },
  {
    id: "02",
    title: "Group Tours",
    meta: "LOG_INDEX // 002",
    desc: "Join a curated group journey led by a verified local expert. Every detail handled — you just show up.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200&q=80",
    ratio: "aspect-[1/1]"
  },
  {
    id: "03",
    title: "Things To Do",
    meta: "LOG_INDEX // 003",
    desc: "Book activities, workshops, and day experiences directly from the people who run them.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1200&q=80",
    ratio: "aspect-[4/3]"
  },
  {
    id: "04",
    title: "Unique Stays",
    meta: "LOG_INDEX // 004",
    desc: "Discover handpicked accommodation hosted by real people. Not a chain, not an algorithm — a home.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
    ratio: "aspect-[3/4] lg:aspect-[4/5]"
  },
];

export default function PremiumStudioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-bg text-secondary overflow-hidden py-32 md:py-20 px-4 md:px-12 select-none"
    >
      {/* Structural Studio Grid System borders */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] flex justify-between max-w-7xl mx-auto px-6" aria-hidden="true">
        <div className="w-px h-full bg-secondary" />
        <div className="w-px h-full bg-secondary hidden lg:block" style={{ left: "40%" }} />
        <div className="w-px h-full bg-secondary" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-start">
        
        {/* ── LEFT COLUMN: RE-ENGINEERED STRUCTURAL ACCORDION ── */}
        <div className="lg:col-span-5 flex flex-col justify-between z-10">
          <div>
            {/* Meta System Tag */}
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-gray uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
              Capability Matrix // 04 WAYS
            </div>

            {/* Asymmetric Design Studio Typography Header */}
            <h2 className="font-secondary font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-16">
              Four ways <br />
              <span className="font-normal font-sans tracking-wide lowercase italic opacity-60 text-3xl md:text-4xl block pl-6 my-1">
                to experience
              </span> 
              the world.
            </h2>
          </div>

          {/* Interactive Control Deck */}
          <div className="border-t border-secondary/10">
            {ITEMS.map((item, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="relative border-b border-secondary/10 py-7 cursor-pointer group flex flex-col transition-all duration-300"
                >
                  {/* Premium Structural Row Container */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-[11px] text-gray/50 tracking-wider">
                        {item.id}
                      </span>
                      <h3 className={`font-secondary text-xl md:text-2xl uppercase tracking-tight transition-colors duration-300 ${
                        isSelected ? "text-secondary" : "text-secondary/40 group-hover:text-secondary"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Minimalist Studio Indicator */}
                    <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
                      {isSelected ? (
                        <motion.span 
                          layoutId="studioIndicator" 
                          className="font-mono text-xs text-secondary font-bold"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        >
                          ●
                        </motion.span>
                      ) : (
                        <span className="font-mono text-xs text-secondary/20 group-hover:text-secondary/60 transition-colors transform translate-y-[1px]">
                          →
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Adaptive Code Drawer with layoutId structural fix */}
                  <div className="overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: { height: { duration: 0.4, ease: "easeOut" }, opacity: { duration: 0.4, delay: 0.1 } }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: { height: { duration: 0.3, ease: "easeIn" }, opacity: { duration: 0.2 } }
                          }}
                        >
                          <div className="pt-4 pl-10 max-w-md">
                            <p className="font-primary text-sm leading-relaxed text-gray">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT COLUMN: ASYMMETRIC FLUID METAMORPHOSIS CANVAS ── */}
        <div className="lg:col-span-7 w-full flex flex-col justify-center items-center lg:items-end lg:pl-12 lg:sticky lg:top-24 min-h-[500px] lg:min-h-[700px]">
          
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col gap-6">
            
            {/* Top Minimal Meta Details */}
            <div className="flex justify-between items-center border-b border-secondary/10 pb-3 font-mono text-[10px] text-gray/60 uppercase tracking-widest">
              <span>{ITEMS[activeIndex].meta}</span>
              <span>RENDER_ENGINE_AVX</span>
            </div>

            {/* Asymmetrical Changing Viewport Canvas */}
            <motion.div 
              transition={{ duration: 0.65, ease: PREMIUM_EASE }}
              className="relative w-full overflow-hidden bg-secondary/[0.02] border border-secondary/10 shadow-[0_40px_90px_rgba(0,0,0,0.06)] rounded-sm h-[400px] md:h-[500px] lg:h-[400px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.98, 
                    transition: { duration: 0.3, ease: "easeIn" }
                  }}
                  className="absolute inset-0 w-full h-full will-change-transform overflow-hidden rounded-sm"
                >
                  <motion.div
                    className="absolute inset-[-10%] bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{
                      backgroundImage: `url('${ITEMS[activeIndex].image}')`,
                      y: prefersReduced ? 0 : parallaxY,
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* High-End Technical Crosshair Grid Layout Accents */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-secondary/30" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-secondary/30" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-secondary/30" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-secondary/30" />
              </div>
            </motion.div>

            {/* Bottom Production Status Log Strip */}
            <div className="flex justify-between items-start font-mono text-[10px] text-gray/40 uppercase tracking-wider pt-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Sovereign Escrow Channel Active
              </div>
              <span>Verified Systems</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}