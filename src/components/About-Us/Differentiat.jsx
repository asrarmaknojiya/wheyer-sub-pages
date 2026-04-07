import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BadgeCheck, ShieldCheck, Eye, LayoutGrid } from "lucide-react";

const data = [
  {
    icon: BadgeCheck,
    label: "01",
    title: "Verified Partners",
    desc: "Every vendor goes through a strict verification process to ensure quality and safety.",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    label: "02",
    title: "Escrow Protection",
    desc: "Your payment stays secure in our vault until the trip is completed successfully.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: Eye,
    label: "03",
    title: "Transparent Pricing",
    desc: "No hidden costs or surprise fees. What you see is exactly what you pay.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: LayoutGrid,
    label: "04",
    title: "Structured Marketplace",
    desc: "Standardized listings and clear policies for total accountability on every booking.",
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=900&auto=format&fit=crop",
  },
];

function Card({ item, index, activeIndex, setActiveIndex }) {
  const Icon = item.icon;
  const isExpanded = activeIndex === index;

  return (
    <motion.div
      onMouseEnter={() => setActiveIndex(index)}
      className="relative w-full overflow-hidden rounded-4xl border border-gray-100 transition-all duration-100 ease-[0.22, 1, 0.36, 1] group cursor-pointer"
      animate={{ 
        height: isExpanded ? 320 : 120, // Content reveals on hover
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${isExpanded ? "bg-black/75" : "bg-black/40"}`} />
      </div>

      {/* Content Wrapper */}
      <div className="relative h-full w-full z-10 flex flex-col p-6 lg:p-8">
        
        {/* Header Section (Always Visible) */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
            <Icon size={22} className="text-cyan" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold leading-tight" style={{ fontFamily: "var(--secondary-font)" }}>
              {item.title}
            </h3>
          </div>
        </div>

        {/* Reveal Section (Hidden until Hover) */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 15,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`mt-6 pt-6 border-t border-white/10 ${isExpanded ? "block" : "hidden"}`}
        >
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-6" style={{ fontFamily: "var(--primary-font)" }}>
            {item.desc}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function CoreDifferentiators() {
  // Set to null so no card is expanded by default
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="sec-container">
        
        {/* Heading Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-5 rounded-full" style={{ background: "var(--color-cyan)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400" style={{ fontFamily: "var(--primary-font)" }}>
              What Sets Us Apart
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="heading text-3xl! sm:text-4xl! leading-tight!">
              Why Wheyer is Different
            </h2>
            <p className="text-sm leading-relaxed max-w-xs sm:text-right text-gray" style={{ fontFamily: "var(--primary-font)" }}>
              Built with trust, transparency, and structure at the core of every booking.
            </p>
          </div>
        </motion.div>

        {/* The Vertical List */}
        <div 
          className="flex flex-col gap-4 max-w-5xl mx-auto"
          onMouseLeave={() => setActiveIndex(null)} // Closes all cards when mouse leaves the list
        >
          {data.map((item, i) => (
            <Card 
              key={i} 
              item={item} 
              index={i} 
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
}