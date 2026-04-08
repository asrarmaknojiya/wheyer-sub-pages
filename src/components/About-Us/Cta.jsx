import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  Handshake,
  ArrowRight,
  Star,
  ShieldCheck,
  MapPin,
  ArrowLeftRight,
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
      className="group relative flex-1 rounded-3xl overflow-hidden"
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

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7 sm:p-9 justify-between">
        {/* Top — icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <Compass size={22} strokeWidth={1.8} color="white" />
        </motion.div>

        {/* Bottom — copy + CTA */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.32,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
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

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <TrustPill icon={ShieldCheck} label="Escrow Protected" />
              <TrustPill icon={Star} label="4.9 Rated" />
              <TrustPill icon={MapPin} label="180+ Destinations" />
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.48, duration: 0.45 }}
          >
            <motion.button
              whileHover={{
                scale: 1.035,
                boxShadow: "0 0 28px rgba(34,211,238,0.5)",
              }}
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
      className="group relative flex-1 rounded-3xl overflow-hidden"
      style={{ minHeight: "clamp(320px, 42vw, 480px)" }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format&fit=crop"
        alt="Travel partner"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Layered gradients — warm tone for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-800/55 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

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
        {/* Top — icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <Handshake size={22} strokeWidth={1.8} color="white" />
        </motion.div>

        {/* Bottom — copy + CTA */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.42,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
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

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <TrustPill icon={ShieldCheck} label="Secure Payments" />
              <TrustPill icon={Star} label="1,200+ Partners" />
              <TrustPill icon={MapPin} label="Zero Setup Cost" />
            </div>
          </motion.div>

          {/* CTA button — outlined white style for contrast */}
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

/* ── Divider "or" pill ── */
function OrDivider({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.5 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100">
        <ArrowLeftRight className="text-cyan" size={18} />
      </div>
    </motion.div>
  );
}

/* ── "or" for mobile — horizontal rule ── */
function OrMobile({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.5, duration: 0.35 }}
      className="flex lg:hidden items-center gap-3"
    >
      <span className="flex-1 h-px bg-gray-200" />
      <span
        className="text-xs font-bold text-gray-400 px-2"
        style={{ fontFamily: "var(--primary-font)" }}
      >
        or
      </span>
      <span className="flex-1 h-px bg-gray-200" />
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
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="pristina italic heading text-3xl sm:text-5xl lg:text-6xl leading-tight">
            Get Started
          </h2>
        </motion.div>

        {/* Panels */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-5">
          <TravellerPanel inView={inView} />
          <OrMobile inView={inView} />
          <OrDivider inView={inView} />
          <VendorPanel inView={inView} />
        </div>
      </div>
    </section>
  );
}
