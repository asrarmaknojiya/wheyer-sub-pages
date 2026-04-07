"use client";

const WhatIsWheyer = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* soft gradient bg like homepage */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b3d2ef80] via-transparent to-[#ffe7ce80]" />

      <div className="container relative z-10">
        <div className="sub-container glass rounded-[25px] p-6 md:p-12">

          {/* TOP HEADING */}
          <div className="text-center mb-12">
            <h2 className="heading about-heading">
              What is Wheyer?
            </h2>
            <p className="about-heading-title mt-2">
              A new way to explore, trust, and travel
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE - IMAGE STACK DESIGN */}
            <div className="relative h-[380px] md:h-[450px]">

              {/* main image */}
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="absolute w-[75%] h-[75%] object-cover rounded-[20px] shadow-xl"
              />

              {/* floating image 1 */}
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                className="absolute bottom-0 right-0 w-[60%] h-[60%] object-cover rounded-[20px] shadow-xl border-4 border-white"
              />

              {/* floating glass card */}
              <div className="absolute top-4 right-4 glass rounded-[15px] p-4 w-[180px]">
                <p className="text-sm text-white font-medium">
                  Verified travel partners only
                </p>
              </div>

              {/* floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-md text-xs font-semibold">
                Secure Escrow System
              </div>
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="space-y-6">

              {/* CARD 1 */}
              <div className="glass rounded-[18px] p-5 md:p-6">
                <p className="text-gray text-sm md:text-base leading-relaxed">
                  Wheyer is a travel marketplace that connects travelers with
                  verified travel partners offering experiences across destinations.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="glass rounded-[18px] p-5 md:p-6">
                <p className="text-gray text-sm md:text-base leading-relaxed">
                  Unlike traditional platforms, Wheyer ensures every booking is
                  secured through escrow, giving travelers complete transparency
                  and confidence before, during, and after their trip.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="glass rounded-[18px] p-5 md:p-6">
                <p className="text-gray text-sm md:text-base leading-relaxed">
                  From curated experiences to full travel packages, Wheyer is
                  designed to make travel discovery, booking, and execution
                  seamless and trustworthy.
                </p>
              </div>

            </div>
          </div>

          {/* BOTTOM HIGHLIGHT STRIP */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              "Verified Partners",
              "Secure Payments",
              "Curated Trips",
              "Trusted Platform",
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-[14px] p-4 text-center text-sm font-medium text-secondary"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsWheyer;