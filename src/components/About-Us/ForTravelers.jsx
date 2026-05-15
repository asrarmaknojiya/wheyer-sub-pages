import React from 'react';
import { BadgeCheck, Map, ShieldCheck, Zap, Layers, Lock, ArrowRight } from 'lucide-react';

export default function ForTravelers() {
  const travelersImages = {
    vetting: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop",
    escrow: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
    clarity: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    quality: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
    comparison: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=1200&auto=format&fit=crop"
  };

  const points = [
    {
      phase: "Phase 01",
      title: "Verified Travel Experiences",
      desc: "We trade crowd-sourced guesses for professional human guarantees. Every operator on our map is hand-picked and physically verified by regional specialists to ensure authenticity.",
      icon: <BadgeCheck size={26} className="text-color-cyan" strokeWidth={1.5} />,
      image: travelersImages.vetting,
      label: "Discovery & Vetting",
      cta: "Learn about our vetting process"
    },
    {
      phase: "Phase 02",
      title: "Secure Escrow Protection",
      desc: "Your funds are never held by a stranger. We secure your payment in a protected vault and only release it to the vendor once your journey has successfully begun.",
      icon: <Lock size={26} className="text-color-cyan" strokeWidth={1.5} />,
      image: travelersImages.escrow,
      label: "Secure Transaction",
      reverse: true,
      cta: "Explore payment security"
    },
    {
      phase: "Phase 03",
      title: "Clear Itineraries & Pricing",
      desc: "Stop guessing what is included. Our structured itineraries provide absolute clarity on schedules and costs—no hidden fees, no surprise taxes, zero ambiguity.",
      icon: <Map size={26} className="text-color-cyan" strokeWidth={1.5} />,
      image: travelersImages.clarity,
      label: "Total Clarity",
      cta: "View itinerary standards"
    },
    {
      phase: "Phase 04",
      title: "Confidence in Vendor Quality",
      desc: "Real-time performance monitoring ensures that only the highest-rated specialists remain on Wheyer. We maintain the standard so you don't have to.",
      icon: <Zap size={26} className="text-color-cyan" strokeWidth={1.5} />,
      image: travelersImages.quality,
      label: "Vendor Monitoring",
      reverse: true,
      cta: "See our quality metrics"
    },
    {
      phase: "Phase 05",
      title: "Easy Comparison Across Options",
      desc: "Compare prices, verified reviews, and detailed inclusions across multiple vendors in a single, high-fidelity view. Designed for the discerning traveler.",
      icon: <Layers size={26} className="text-color-cyan" strokeWidth={1.5} />,
      image: travelersImages.comparison,
      label: "Efficiency Tool",
      cta: "Try comparison tool"
    }
  ];

  return (
    <section className=" py-12 overflow-hidden text-secondary">
      <div className=" sec-container max-w-7xl mx-auto px-6">
        
        {/* --- RE-DESIGNED HEADER (Stacked on same side) --- */}
        {/* Changed md:flex-row md:items-end justify-between -> flex-col items-start */}
        <div className="mb-12 flex flex-col items-start gap-12 pb-16">
          <div className="max-w-2xl">
            <h2 className="heading about-heading m-0">
              Travel with <br /> 
              <span className=" italic drop-shadow-sm">absolute</span> certainty.
            </h2>
          </div>

          {/* Changed text-right -> text-left and removed margin-top, aligned font sizes */}
          <div className="lg:max-w-2xl text-left border-l border-gray-100 pl-8">
             <p className="pristina text-4xl  opacity-80 mb-4 leading-none italic">"No guesswork. No risk."</p>
             <p className="heading-title about-heading-title italic">
               The accountability the industry forgot, built into every journey.
             </p>
          </div>
        </div>

        {/* --- CONTENT FLOW --- */}
        <div className="space-y-12">
          {points.map((p, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-28 ${p.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-[40px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.01]">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                  <div className="absolute top-8 left-8 glass px-5 py-2.5 rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    {p.label}
                  </div>
                </div>
              </div>

              {/* TEXT SIDE (Edited for Luxury & Logic) */}
              <div className={`w-full lg:w-1/2 space-y-8 ${p.reverse ? 'lg:pr-10' : 'lg:pl-10'}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-color-cyan/40"></span>
                    <span className="text-color-cyan font-bold text-[10px] uppercase tracking-[0.3em] font-secondary">{p.phase}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">{p.icon}</div>
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight leading-tight">{p.title}</h3>
                  </div>
                </div>

                <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-lg border-l border-gray-100 pl-8 group-hover:border-color-cyan transition-colors">
                  {p.desc}
                </p>

                <div className="pt-4">
                  <button className="flex items-center gap-3 font-bold text-secondary text-sm group uppercase tracking-widest">
                    <span className="border-b border-color-cyan pb-1">{p.cta}</span>
                    <ArrowRight size={18} className="text-color-cyan group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}