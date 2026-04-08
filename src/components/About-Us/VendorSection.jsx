import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Store,
  ShieldCheck,
  Star,
  LayoutDashboard,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Create your storefront",
    desc: "A full profile page — no dev needed.",
    num: "01",
  },
  {
    icon: LayoutDashboard,
    title: "List & manage experiences",
    desc: "One dashboard for all your packages.",
    num: "02",
  },
  {
    icon: Globe,
    title: "Reach high-intent travelers",
    desc: "Travelers who are ready to book.",
    num: "03",
  },
  {
    icon: ShieldCheck,
    title: "Secure payments via escrow",
    desc: "Guaranteed funds, zero disputes.",
    num: "04",
  },
  {
    icon: Star,
    title: "Build credibility with reviews",
    desc: "Trust signals that convert browsers.",
    num: "05",
  },
];

const images = [
  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=600&auto=format&fit=crop",
];

/* ── Feature chip ── */
function FeatureChip({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-gray-100 bg-white hover:border-cyan-200 hover:shadow-[0px_4px_20px_rgba(34,211,238,0.10)] transition-all duration-300"
    >
      {/* Step number */}
      <span
        className="text-[11px] font-bold tabular-nums shrink-0 w-5 text-center"
        style={{
          fontFamily: "var(--secondary-font)",
          color: "var(--color-cyan)",
          opacity: 0.5,
        }}
      >
        {item.num}
      </span>

      {/* Divider */}
      <span className="w-px h-6 bg-gray-100 shrink-0" />

      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-cyan-400"
        style={{ background: "rgba(34,211,238,0.09)" }}
      >
        <Icon
          size={15}
          strokeWidth={2.2}
          className="transition-colors duration-300 group-hover:text-white"
          style={{ color: "var(--color-cyan)" }}
        />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p
          className="text-sm font-semibold leading-none mb-0.5"
          style={{
            fontFamily: "var(--secondary-font)",
            color: "var(--color-secondary)",
          }}
        >
          {item.title}
        </p>
        <p
          className="text-xs truncate"
          style={{
            fontFamily: "var(--primary-font)",
            color: "var(--color-gray)",
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Checkmark on hover */}
      <CheckCircle2
        size={15}
        strokeWidth={2}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: "var(--color-cyan)" }}
      />
    </motion.div>
  );
}

/* ── Stacked photo collage ── */
function PhotoCollage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative w-full"
      style={{ height: "clamp(380px, 50vw, 520px)" }}
    >
      {/* Card 1 — large bottom-left */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 16 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 bottom-0 w-[62%] rounded-2xl overflow-hidden shadow-[0px_8px_30px_rgba(0,0,0,0.14)]"
        style={{ height: "72%" }}
      >
        <img src={images[0]} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Card 2 — tall right */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: -16 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ delay: 0.22, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 w-[54%] rounded-2xl overflow-hidden shadow-[0px_8px_30px_rgba(0,0,0,0.12)]"
        style={{ height: "80%" }}
      >
        <img src={images[1]} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>

      {/* Card 3 — small bottom-right overlap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 12 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay: 0.38, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-4 bottom-0 w-[38%] rounded-2xl overflow-hidden shadow-[0px_8px_30px_rgba(0,0,0,0.14)] border-2 border-white"
        style={{ height: "36%" }}
      >
        <img src={images[2]} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Floating — active partners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.48 }}
        className="absolute top-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-[0px_4px_20px_rgba(99,99,99,0.16)] border border-gray-100 z-10"
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
          style={{
            fontFamily: "var(--primary-font)",
            color: "var(--color-cyan)",
          }}
        >
          Active Partners
        </p>
        <p
          className="text-2xl font-bold leading-none"
          style={{
            fontFamily: "var(--secondary-font)",
            color: "var(--color-secondary)",
          }}
        >
          1,200+
        </p>
        <p
          className="text-[11px] mt-0.5"
          style={{
            fontFamily: "var(--primary-font)",
            color: "var(--color-gray)",
          }}
        >
          across India
        </p>
      </motion.div>

      {/* Floating — escrow badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.62, duration: 0.45 }}
        className="absolute z-10 bg-white rounded-xl px-3 py-2.5 shadow-[0px_4px_20px_rgba(99,99,99,0.16)] border border-gray-100 flex items-center gap-2 whitespace-nowrap"
        style={{ bottom: "37%", left: "54%", transform: "translateX(-50%)" }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "rgba(34,211,238,0.10)" }}
        >
          <ShieldCheck
            size={13}
            strokeWidth={2}
            style={{ color: "var(--color-cyan)" }}
          />
        </div>
        <div>
          <p
            className="text-xs font-bold leading-none"
            style={{
              fontFamily: "var(--secondary-font)",
              color: "var(--color-secondary)",
            }}
          >
            Escrow Protected
          </p>
          <p
            className="text-[10px] mt-0.5"
            style={{
              fontFamily: "var(--primary-font)",
              color: "var(--color-gray)",
            }}
          >
            Every payment secured
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main export ── */
export default function ForVendors() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section className="py-14 sm:py-20">
      <div className="sec-container">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 14 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1 h-5 rounded-full"
              style={{ background: "var(--color-cyan)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "var(--primary-font)" }}
            >
              For Travel Partners
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="heading !text-3xl sm:!text-4xl !leading-tight max-w-lg">
              Grow Your Travel Business
              <br className="hidden sm:block" /> on Wheyer
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{
                fontFamily: "var(--primary-font)",
                color: "var(--color-gray)",
              }}
            >
              Go digital without building your own website or booking system.
            </p>
          </div>
        </motion.div>

        {/* Body — collage left, chips right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <PhotoCollage />

          {/* RIGHT */}
          {/* RIGHT SIDE — Snake Stepper */}
          <div className="relative flex flex-col w-[97%]" style={{ gap: 0 }}>
            {features.map((item, i) => {
              const Icon = item.icon;
              const isReversed = i % 2 !== 0;

              return (
                <div key={item.num}>
                  <div
                    className={`flex ${isReversed ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group flex items-start gap-3 px-4 py-4 rounded-[18px] border border-gray-100 bg-white hover:border-cyan-300 hover:shadow-[0px_4px_20px_rgba(34,211,238,0.10)] transition-all duration-300 w-full"
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-cyan-400"
                        style={{ background: "rgba(34,211,238,0.09)" }}
                      >
                        <Icon
                          size={16}
                          strokeWidth={2.2}
                          className="transition-colors duration-300 group-hover:text-white"
                          style={{ color: "var(--color-cyan)" }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <p
                          className="text-sm font-semibold leading-snug mb-0.5"
                          style={{
                            fontFamily: "var(--secondary-font)",
                            color: "var(--color-secondary)",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="text-xs leading-relaxed"
                          style={{
                            fontFamily: "var(--primary-font)",
                            color: "var(--color-gray)",
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Snake Connector — skip after last item */}
                  {i < features.length - 1 && (
                    <div className="relative w-full" style={{ height: "36px" }}>
                      <svg
                        width="100%"
                        height="36"
                        viewBox="0 0 400 36"
                        preserveAspectRatio="none"
                        overflow="visible"
                      >
                        <defs>
                          <marker
                            id={`arrow-${i}`}
                            viewBox="0 0 10 10"
                            refX="8"
                            refY="5"
                            markerWidth="5"
                            markerHeight="5"
                            orient="auto-start-reverse"
                          >
                            <path
                              d="M2 1L8 5L2 9"
                              fill="none"
                              stroke="#22D3EE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </marker>
                        </defs>

                        {/* Right-side arc (after odd-indexed cards: 0, 2, 4) */}
                        {!isReversed && (
                          <path
                            d="M 399 0 Q 428 18 399 36"
                            fill="none"
                            stroke="#22D3EE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="5 4"
                            opacity="0.6"
                            markerEnd={`url(#arrow-${i})`}
                          />
                        )}

                        {/* Left-side arc (after even-indexed reversed cards: 1, 3) */}
                        {isReversed && (
                          <path
                            d="M 1 0 Q -28 18 1 36"
                            fill="none"
                            stroke="#22D3EE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="5 4"
                            opacity="0.6"
                            markerEnd={`url(#arrow-${i})`}
                          />
                        )}
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-5 p-5 rounded-3xl bg-gray-50/50 border border-dashed border-gray-200"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4
                    className="font-bold text-base"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Ready to scale?
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Takes less than 5 minutes to set up.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-black transition-all text-white"
                  style={{ background: "var(--color-secondary)" }}
                >
                  Get Started
                  <ArrowRight
                    size={15}
                    style={{ color: "var(--color-cyan)" }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
