"use client";

import React from "react";

const OurSolution = () => {
  const trustPoints = [
    { title: "Verified Travel Partners", desc: "Every vendor is carefully verified before onboarding." },
    { title: "Escrow Protected Payments", desc: "Funds remain secured until your experience is completed." },
    { title: "Transparent Pricing", desc: "Clear pricing with no hidden costs or last-minute surprises." },
    { title: "Structured Policies", desc: "Defined rules for bookings, cancellations, and refunds." },
    { title: "Platform-led Dispute Resolution", desc: "Fair resolution handled directly by the platform." },
  ];

  return (
    <section className="relative w-full py-20 md:py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffe7ce80] via-transparent to-[#b3d2ef80]" />

      <div className="container relative z-10">
        <div className="sub-container glass rounded-[25px] p-6 md:p-12">

          {/* HEADER */}
          <div className="max-w-[650px] mb-14">
           

            <h2 className="heading about-heading ">
              How Wheyer Works
            </h2>

            <p className="heading-title about-heading-title mt-4">
              Wheyer introduces a structured, trust-first system for travel bookings —
              ensuring every step is verified, protected, and transparent.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-12 gap-8">

{/* LEFT SIDE - CLEAN PREMIUM LIST */}
<div className="lg:col-span-7">

  <div className="p-6 md:p-8">

    <p className="text-secondary text-sm md:text-base font-medium mb-6">
      Wheyer introduces a trust-first system for travel bookings:
    </p>

    <div>

      {trustPoints.map((point, index) => (
        <div
          key={index}
          className="flex items-start gap-4 py-4 px-2 rounded-xl 
          transition-all duration-300 group
          hover:bg-white/40 hover:backdrop-blur-sm 
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] 
          hover:-translate-y-[2px]"
        >
          {/* tick */}
          <div className="mt-1 w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 
          transition-all duration-300 
          group-hover:bg-cyan-400/20 group-hover:scale-110">
            
            <svg
              className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* content */}
          <div className="flex-1 transition-all duration-300 group-hover:translate-x-1">

            <div className="flex items-center justify-between">
              <h4 className="text-secondary font-semibold text-sm md:text-base transition-all duration-300 group-hover:text-black">
                {point.title}
              </h4>
            </div>

            <p className="text-gray text-xs md:text-sm mt-1 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
              {point.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>

</div>

            {/* RIGHT SIDE (KEEP STRONG, JUST REFINED) */}
            <div className="lg:col-span-5">

              <div className="ticket-container relative flex  justify-center ">

                <div className="stamp-mask  p-8 md:p-10 border-t-8 border-cyan-400/40 shadow-xl">

                  {/* top */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">
                      Escrow System
                    </span>
                    <span className="pristina text-xl text-gray-400">
                      Wheyer Safe
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="heading text-xl text-secondary mb-4">
                    Payment Protection
                  </h3>

                  {/* main line */}
                  <p className="text-gray text-sm leading-relaxed mb-6">
                    Your payment is only released to the vendor after the
                    experience is completed.
                  </p>

                  {/* flow UI */}
                  <div className="space-y-3">

                    {[
                      "You make payment",
                      "Funds held securely",
                      "Experience completed",
                      "Vendor receives payment",
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm bg-gray-50 rounded-[10px] px-4 py-2"
                      >
                        <span>{step}</span>
                        {i !== 3 && <span className="text-gray">→</span>}
                      </div>
                    ))}

                  </div>

                  {/* trust note */}
                  <p className="text-xs text-gray mt-6 leading-relaxed">
                    This ensures both travelers and vendors are protected
                    throughout the entire journey.
                  </p>

                </div>
              </div>

            
             

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurSolution;