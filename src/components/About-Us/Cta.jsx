import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  Handshake,
  ArrowRight,
  Star,
  ShieldCheck,
  MapPin,
} from "lucide-react";

/* ── tiny trust pill ── */
function TrustPill({ icon: Icon, label }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-white/20 bg-white/10 backdrop-blur-sm text-white/80"
      style={{ fontFamily: "var(--primary-font)" }}
    >
      <Icon size={10} strokeWidth={2.5} className="text-white/60" />
      {label}
    </span>
  );
}

/* ── LEFT panel — traveller ── */
function TravellerPanel({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-1 overflow-hidden"
      style={{ minHeight: "clamp(320px, 42vw, 480px)" }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
        alt="Travellers"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-cyan-800/60 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Liquid bleed — right edge (desktop) */}
      <div
        className="absolute inset-y-0 right-0 w-38 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(8,60,80,0.55) 40%, rgba(15,30,50,0.85) 75%, rgba(20,15,35,0.95) 100%)",
          filter: "blur(8px)",
          transform: "scaleX(0.15)",
          transformOrigin: "right",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(10,40,70,0.4) 50%, rgba(18,12,40,0.9) 100%)",
        }}
      />

      {/* Liquid bleed — bottom edge (mobile) */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(8,60,80,0.55) 40%, rgba(15,30,50,0.85) 75%, rgba(20,15,35,0.95) 100%)",
          filter: "blur(8px)",
          transform: "scaleY(1.15)",
          transformOrigin: "bottom",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(10,40,70,0.4) 50%, rgba(18,12,40,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7 sm:p-9 justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <Compass size={22} strokeWidth={1.8} color="white" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/60 text-xs uppercase tracking-widest mb-2 font-semibold"
              style={{ fontFamily: "var(--primary-font)" }}
            >
              For Travellers
            </p>
            <h3
              className="text-white font-bold leading-[1.15] mb-3"
              style={{
                fontFamily: "var(--secondary-font)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Start Exploring
              <br />
              with Confidence
            </h3>
            <p
              className="text-white/65 text-sm leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: "var(--primary-font)" }}
            >
              Verified experiences, transparent pricing, and escrow-protected
              payments — all in one place.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <TrustPill icon={ShieldCheck} label="Escrow Protected" />
              <TrustPill icon={Star} label="4.9 Rated" />
              <TrustPill icon={MapPin} label="180+ Destinations" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.48, duration: 0.45 }}
          >
            <motion.button
              whileHover={{ scale: 1.035, boxShadow: "0 0 28px rgba(34,211,238,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "var(--color-cyan)",
                color: "white",
                fontFamily: "var(--primary-font)",
                boxShadow: "0 4px 16px rgba(34,211,238,0.35)",
              }}
            >
              Explore Experiences
              <ArrowRight size={15} strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── RIGHT panel — vendor ── */
function VendorPanel({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-1 overflow-hidden"
      style={{ minHeight: "clamp(320px, 42vw, 480px)" }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format&fit=crop"
        alt="Travel partner"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-800/55 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Liquid bleed — left edge (desktop) */}
      <div
        className="absolute inset-y-0 left-0 w-48 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to left, transparent 0%, rgba(100,30,5,0.55) 40%, rgba(50,15,5,0.85) 75%, rgba(20,15,35,0.95) 100%)",
          filter: "blur(18px)",
          transform: "scaleX(1.15)",
          transformOrigin: "left",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to left, transparent 0%, rgba(80,25,5,0.4) 50%, rgba(18,12,40,0.9) 100%)",
        }}
      />

      {/* Liquid bleed — top edge (mobile) */}
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to top, transparent 0%, rgba(100,30,5,0.55) 40%, rgba(50,15,5,0.85) 75%, rgba(20,15,35,0.95) 100%)",
          filter: "blur(18px)",
          transform: "scaleY(1.15)",
          transformOrigin: "top",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-16 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to top, transparent 0%, rgba(80,25,5,0.4) 50%, rgba(18,12,40,0.9) 100%)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7 sm:p-9 justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <Handshake size={22} strokeWidth={1.8} color="white" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.42, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/60 text-xs uppercase tracking-widest mb-2 font-semibold"
              style={{ fontFamily: "var(--primary-font)" }}
            >
              For Travel Partners
            </p>
            <h3
              className="text-white font-bold leading-[1.15] mb-3"
              style={{
                fontFamily: "var(--secondary-font)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Become a<br />
              Travel Partner
            </h3>
            <p
              className="text-white/65 text-sm leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: "var(--primary-font)" }}
            >
              List your experiences, reach thousands of high-intent travelers,
              and grow without building your own system.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <TrustPill icon={ShieldCheck} label="Secure Payments" />
              <TrustPill icon={Star} label="1,200+ Partners" />
              <TrustPill icon={MapPin} label="Zero Setup Cost" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.58, duration: 0.45 }}
          >
            <motion.button
              whileHover={{
                scale: 1.035,
                background: "rgba(255,255,255,1)",
                color: "#111",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold border border-white/70 text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(8px)",
                fontFamily: "var(--primary-font)",
              }}
            >
              Partner With Wheyer
              <ArrowRight size={15} strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main export ── */
export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14 sm:py-20" ref={ref}>
      <div className="sec-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="  heading about-heading ">
            Get Started
          </h2>
        </motion.div>

        {/* Panels — no gap on any breakpoint */}
        <div className="relative flex flex-col lg:flex-row rounded-3xl overflow-hidden">
          <TravellerPanel inView={inView} />
          <VendorPanel inView={inView} />
        </div>
      </div>
    </section>
  );
}