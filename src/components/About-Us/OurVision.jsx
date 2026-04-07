import React from 'react';

const OurVision = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        
        {/* TOP BAR - Section Identification */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-secondary"></div>
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400">
            Section 08 — Visionary Protocol
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-t border-gray-100">
          
          {/* LEFT COLUMN: THE CORE VISION (Typography Focus) */}
          <div className="lg:col-span-7 py-12 md:pr-16 border-r border-gray-100 relative">
            <span className="pristina text-5xl text-cyan-400 block mb-4">Our Vision</span>
            <h2 className="about-heading text-secondary uppercase italic leading-[0.9] tracking-tighter mb-10">
              The Global <br /> 
              <span className="text-blue-600">Standard</span> <br /> 
              for Travel Trust.
            </h2>

            <div className="max-w-xl">
              <p className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-8">
                To build the most trusted travel marketplace where discovery, booking, and experiences are transparent, secure, and reliable.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyan-400 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="about-heading-title max-w-xs italic">
                  Wheyer is designed to transform how the world discovers and books travel.
                </p>
              </div>
            </div>

            {/* Vertical Stamp Mask used as a Border Detail */}
            <div className="stamp-mask absolute top-0 -right-[11px] w-[22px] h-64 bg-white z-10 border-x border-gray-100 hidden lg:block"></div>
          </div>

          {/* RIGHT COLUMN: THE EMPOWERMENT FRAME (Shape Focus) */}
          <div className="lg:col-span-5 py-12 lg:pl-16 flex flex-col justify-center relative">
            
            {/* The Inverted Radius Frame (Using it as a "Window") */}
            <div className="relative group">
              <div className="inverted-radius border-2 border-secondary p-10 md:p-12 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white">
                <h3 className="heading text-2xl mb-6 text-blue-600 uppercase">Empowerment</h3>
                <p className="text-gray-600 font-secondary text-lg leading-relaxed mb-8">
                  "We aim to empower travelers with confidence and enable travel businesses to grow digitally through a unified platform."
                </p>
                
                {/* Functional Detail - Bottom of the Frame */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Growth Engine</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative "Seal" overlapping the frame */}
              <div className="glass absolute -top-6 -right-6 w-20 h-20 rounded-full flex items-center justify-center border-secondary/10 shadow-xl backdrop-blur-md">
                 <span className="text-secondary font-bold text-xs">2026</span>
              </div>
            </div>

            {/* Sub-note */}
            <div className="mt-12">
               <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.6em] text-right">
                 Integrity • Innovation • Community
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurVision;