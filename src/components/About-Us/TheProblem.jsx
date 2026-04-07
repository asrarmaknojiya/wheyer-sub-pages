import React from 'react';
import { AlertTriangle, CheckCircle, Flame, Target } from 'lucide-react'; // Using lucide-react for sharp icons

export default function TheProblem() {
  // Configurable URLs for the images
  const images = {
    // A photo representing frustration/stress in travel
    problemSide: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1600&auto=format&fit=crop", 
    // An inspirational photo representing trust/adventure
    solutionSide: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1600&auto=format&fit=crop"
  };

  const painPoints = [
    { text: "Unverified operators", desc: "Risky bookings with unknown vendors." },
    { text: "Hidden pricing", desc: "Unexpected fees at checkout or during travel." },
    { text: "No accountability", desc: "Operators vanishing after payment is made." },
    { text: "Poor refund experiences", desc: "Complex, lengthy, or impossible refund processes." },
    { text: "Lack of trust", desc: "Reluctance to book with authentic local specialists." },
  ];

  return (
    <section className="sec-container py-20 md:py-32 relative overflow-hidden">
      
      {/* BACKGROUND DECORATION - Red Blob for problem section (Optional, based on your CSS blobs) */}
      <div className="absolute top-1/4 -left-1/4 w-125 height-[500px] bg-color-red opacity-[0.03] rounded-full filter blur-[100px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        
        {/* TOP HEADER BLOCK - Global Styles */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto px-4">
         
          <h2 className="heading about-heading mt-3  ">
            Travel booking today is <span className="text-color-red relative inline-block">broken.<span className="absolute bottom-0 left-0 w-full h-1 bg-color-red rounded-full opacity-30"></span></span>
          </h2>
          <p className="about-heading-title">
            The joy of exploration is being overshadowed by anxiety. Travelers are stuck between the efficiency of giant, impersonal platforms and the genuine but high-risk allure of smaller, unverified operators.
          </p>
        </div>

        {/* PREMIUM VISUAL SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-center px-4">
          
          {/* LEFT SIDE: The Problem List & Visual Frustration (Lg: 5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="shrink-0 mt-1">
                    <div className="bg-red-50 border border-red-100 p-2.5 rounded-full">
                      <AlertTriangle size={20} className="text-color-red" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-secondary text-lg font-semibold text-secondary">{point.text}</h4>
                    <p className="text-gray text-sm mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Visual Split/Frustration to Relief (Lg: 7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 mb-10 lg:mb-0 relative">
            
            {/* The Before Image (Small, Overlayed Frustration) */}
            <div className="absolute -top-10 -left-10 md:-left-16 z-10 w-2/5 md:w-1/3 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-[-5deg]">
              <img 
                src={images.problemSide} 
                alt="Frustrated traveler looking at computer" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <p className="text-white font-bold text-center text-xs md:text-sm tracking-tight">Anxiety & Risk</p>
              </div>
            </div>

            {/* The Hero Image (Premium, Aspirational Destination) */}
            <div className="relative aspect-16/10 md:aspect-video rounded-[25px] overflow-hidden shadow-[-20px_20px_60px_-15px_rgba(0,0,0,0.3)]">
              <img 
                src={images.solutionSide} 
                alt="Relaxed travelers exploring a stunning landscape" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              {/* Radial gradient overlay to make text pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* WHEyer Fixes This (The Solution Box using .glass) */}
              <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto md:bottom-10 md:max-w-sm glass p-6 md:p-8 rounded-2xl border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={24} className="text-color-cyan" />
                  <h3 className="heading !text-white !text-2xl md:!text-3xl">
                    Wheyer fixes this.
                  </h3>
                </div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5">
                  We verify vendors, normalize pricing, and hold payments in escrow. We bring accountability to smaller vendors, allowing you to choose trust <strong className="text-white">and</strong> convenience.
                </p>
                <button className="bg-color-cyan hover:bg-color-cyan-hover text-secondary font-bold px-6 py-3 rounded-xl transition-colors text-sm flex items-center gap-2 group">
                  Learn About Our Verification
                  <CheckCircle size={18} className="opacity-70 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM TAGLINE - Pristina Global Class */}
        <div className="mt-20 md:mt-32 text-center px-4">
          <p className="pristina text-4xl md:text-5xl text-color-cyan opacity-80 leading-snug max-w-2xl mx-auto">
            Where accountability unlocks adventure.
          </p>
        </div>

      </div>
    </section>
  );
}