import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, ShieldCheck, Eye, LayoutGrid } from "lucide-react";

const data = [
  {
    icon: BadgeCheck,
    title: "Verified Partners",
    desc: "Strict verification process ensures quality and safety on every booking.",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Escrow Protection",
    desc: "Your payment stays secure until the trip is successfully completed.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    desc: "No hidden costs or surprise fees. What you see is exactly what you pay.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: LayoutGrid,
    title: "Structured Marketplace",
    desc: "Standardized listings and clear policies for total accountability.",
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=900&auto=format&fit=crop",
  },
];

function GlassCard({ item, index, isInView }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative overflow-hidden group h-105 rounded-4xl border border-gray-100/50 shadow-sm"
    >
      {/* ── Background Image ── */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* ── Gradient Overlay (Improves text readability) ── */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 z-0" />

      {/* ── Floating Glass Content ── */}
      <div 
        className="absolute bottom-4 left-4 right-4 z-10 p-5 rounded-3xl border border-white/20 overflow-hidden"
        style={{ 
          background: "rgba(255, 255, 255, 0.08)", 
          backdropFilter: "blur(16px)", 
          webkitBackdropFilter: "blur(16px)" 
        }}
      >
        <div className="w-9 h-9 rounded-xl bg-cyan/20 backdrop-blur-md flex items-center justify-center border border-white/30 mb-4">
          <Icon size={18} className="text-cyan" />
        </div>
        
        <h3 className="text-white text-lg font-bold mb-2 tracking-tight">
          {item.title}
        </h3>
        
        <p className="text-white/80 text-xs leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function CoreDifferentiators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 sm:py-24">
      <div className="sec-container max-w-350 mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-5 rounded-full bg-cyan" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Our Standard
            </span>
          </div>
          <h2 className="heading about-heading">
            Why Wheyer is Different
          </h2>
        </motion.div>

        {/* ── RESPONSIVE GRID ── */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 4 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <GlassCard 
              key={i} 
              item={item} 
              index={i} 
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}