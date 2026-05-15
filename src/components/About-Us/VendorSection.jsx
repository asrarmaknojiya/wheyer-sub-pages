import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Store, ShieldCheck, Star, LayoutDashboard, Globe,
  ArrowRight, TrendingUp, Users, IndianRupee, Eye,
  CheckCircle2, BadgeCheck, MapPin,
} from "lucide-react";

const features = [
  { icon: Store,           title: "Create your storefront",        desc: "A full profile page — no dev needed."        },
  { icon: LayoutDashboard, title: "List & manage experiences",     desc: "One dashboard for all your packages."        },
  { icon: Globe,           title: "Reach high-intent travelers",   desc: "Travelers who are ready to book."            },
  { icon: ShieldCheck,     title: "Secure payments via escrow",    desc: "Guaranteed funds, zero disputes."            },
  { icon: Star,            title: "Build credibility with reviews",desc: "Trust signals that convert browsers."        },
];

const stats = [
  { icon: Eye,         label: "Profile Views", value: "2,340", delta: "+18%" },
  { icon: Users,       label: "Bookings",      value: "186",   delta: "+34%" },
  { icon: IndianRupee, label: "Revenue",        value: "₹4.2L", delta: "+27%" },
  { icon: TrendingUp,  label: "Conversion",    value: "7.9%",  delta: "+2.1%"},
];

const listings = [
  {
    title: "Rann of Kutch Expedition",
    location: "Gujarat, India",
    price: "₹8,499",
    rating: 4.9,
    reviews: 128,
    tag: "Best Seller",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Backwater Houseboat Stay",
    location: "Kerala, India",
    price: "₹12,200",
    rating: 4.7,
    reviews: 94,
    tag: "New",
    img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=400&auto=format&fit=crop",
  },
];

/* ── Stat chip ── */
function StatChip({ item, delay, inView }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 border border-gray-100 shadow-[0px_2px_6px_rgba(99,99,99,0.07)]"
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
           style={{ background: "rgba(34,211,238,0.09)" }}>
        <Icon size={13} strokeWidth={2} style={{ color: "var(--color-cyan)" }} />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] text-gray-400 leading-none mb-0.5 truncate"
           style={{ fontFamily: "var(--primary-font)" }}>{item.label}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-bold leading-none"
                style={{ fontFamily: "var(--secondary-font)", color: "var(--color-secondary)" }}>
            {item.value}
          </span>
          <span className="text-[9px] font-semibold" style={{ color: "var(--color-green)" }}>
            {item.delta}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Listing card ── */
function ListingCard({ item, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-3 bg-white rounded-2xl p-2.5 border border-gray-100 hover:shadow-[0px_4px_14px_rgba(99,99,99,0.10)] transition-shadow"
    >
      <div className="w-[76px] h-[68px] rounded-xl overflow-hidden shrink-0">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <span
            className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide mb-1"
            style={{
              background: item.tag === "Best Seller" ? "rgba(34,211,238,0.10)" : "rgba(20,184,166,0.10)",
              color: item.tag === "Best Seller" ? "var(--color-cyan)" : "var(--color-green)",
              fontFamily: "var(--primary-font)",
            }}
          >{item.tag}</span>
          <p className="text-xs font-semibold leading-snug truncate"
             style={{ fontFamily: "var(--secondary-font)", color: "var(--color-secondary)" }}>
            {item.title}
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin size={8} strokeWidth={2} style={{ color: "var(--color-gray)" }} />
            <span className="text-[9px] truncate" style={{ color: "var(--color-gray)", fontFamily: "var(--primary-font)" }}>
              {item.location}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <Star size={8} fill="#FBBF24" stroke="none" />
            <span className="text-[9px] font-semibold"
                  style={{ color: "var(--color-secondary)", fontFamily: "var(--primary-font)" }}>
              {item.rating}
            </span>
            <span className="text-[9px]" style={{ color: "var(--color-gray)", fontFamily: "var(--primary-font)" }}>
              ({item.reviews})
            </span>
          </div>
          <span className="text-[11px] font-bold"
                style={{ color: "var(--color-secondary)", fontFamily: "var(--secondary-font)" }}>
            {item.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Mock dashboard panel ── */
function DashboardPanel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Browser shell */}
      <div
        className="rounded-3xl overflow-hidden border border-gray-200 bg-gray-50/80"
        style={{ boxShadow: "0px 24px 64px rgba(0,0,0,0.09), 0px 4px 16px rgba(0,0,0,0.05)" }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-gray-100">
          <div className="flex gap-1.5 shrink-0">
            {["#FC5F5A","#FDBC2C","#34C749"].map((c, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="h-5 w-44 rounded-md bg-gray-100 flex items-center justify-center">
              <span className="text-[9px] text-gray-400" style={{ fontFamily: "var(--primary-font)" }}>
                wheyer.com/partner/dashboard
              </span>
            </div>
          </div>
        </div>

        {/* Inner content */}
        <div className="p-4 space-y-3.5">

          {/* Partner header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.4 }}
            className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-gray-100"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ background: "var(--color-cyan)", fontFamily: "var(--secondary-font)" }}
            >MA</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-bold leading-none"
                   style={{ fontFamily: "var(--secondary-font)", color: "var(--color-secondary)" }}>
                  MajestyTrip
                </p>
                <BadgeCheck size={13} strokeWidth={2} style={{ color: "var(--color-cyan)" }} />
              </div>
              <p className="text-[10px] mt-0.5" style={{ color: "var(--color-gray)", fontFamily: "var(--primary-font)" }}>
                Verified Travel Partner · Gujarat
              </p>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="#FBBF24" stroke="none" />)}
              <span className="text-[10px] font-semibold ml-1"
                    style={{ color: "var(--color-secondary)", fontFamily: "var(--primary-font)" }}>4.9</span>
            </div>
          </motion.div>

          {/* Stats 2×2 */}
          <div className="grid grid-cols-2 gap-2">
            {stats.map((s, i) => (
              <StatChip key={s.label} item={s} delay={0.26 + i * 0.07} inView={inView} />
            ))}
          </div>

          {/* Listings header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.52, duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                  style={{ fontFamily: "var(--primary-font)" }}>Active Listings</span>
            <span className="text-[10px] font-semibold" style={{ color: "var(--color-cyan)", fontFamily: "var(--primary-font)" }}>
              2 of 8 shown
            </span>
          </motion.div>

          {/* Listings */}
          <div className="space-y-2">
            {listings.map((l, i) => (
              <ListingCard key={l.title} item={l} delay={0.58 + i * 0.1} inView={inView} />
            ))}
          </div>

          {/* Note strip */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.82, duration: 0.38 }}
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-dashed"
            style={{ borderColor: "var(--color-cyan)", background: "rgba(34,211,238,0.04)" }}
          >
            <CheckCircle2 size={13} strokeWidth={2} style={{ color: "var(--color-cyan)" }} className="shrink-0" />
            <p className="text-[11px] font-medium"
               style={{ color: "var(--color-secondary)", fontFamily: "var(--primary-font)" }}>
              No website or booking system needed — everything is here.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating badge — revenue */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.82, x: -8 }}
        animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ delay: 0.95, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-[0px_8px_28px_rgba(99,99,99,0.14)] z-10 hidden sm:block"
      >
        <p className="text-[9px] font-semibold uppercase tracking-wider mb-0.5"
           style={{ fontFamily: "var(--primary-font)", color: "var(--color-green)" }}>This Month</p>
        <p className="text-xl font-bold leading-none"
           style={{ fontFamily: "var(--secondary-font)", color: "var(--color-secondary)" }}>₹4.2L</p>
        <p className="text-[10px] mt-0.5"
           style={{ fontFamily: "var(--primary-font)", color: "var(--color-gray)" }}>earned via Wheyer</p>
      </motion.div> */}

      {/* Floating badge — setup */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.82, x: 8 }}
        animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ delay: 1.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-[0px_8px_28px_rgba(99,99,99,0.14)] z-10 hidden sm:flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
             style={{ background: "rgba(34,211,238,0.09)" }}>
          <ShieldCheck size={14} strokeWidth={2} style={{ color: "var(--color-cyan)" }} />
        </div>
        <div>
          <p className="text-xs font-bold leading-none"
             style={{ fontFamily: "var(--secondary-font)", color: "var(--color-secondary)" }}>
            Setup in 5 minutes
          </p>
          <p className="text-[10px] mt-0.5"
             style={{ fontFamily: "var(--primary-font)", color: "var(--color-gray)" }}>
            Free to join · No tech skills needed
          </p>
        </div>
      </motion.div> */}
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
          className="mb-10 md:mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-5 rounded-full" style={{ background: "var(--color-cyan)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--primary-font)" }}>
              For Travel Partners
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="heading !text-3xl sm:!text-4xl !leading-tight max-w-lg">
              Grow Your Travel Business<br className="hidden sm:block" /> on Wheyer
            </h2>
            <p className="text-sm leading-relaxed max-w-xs"
               style={{ fontFamily: "var(--primary-font)", color: "var(--color-gray)" }}>
              Go digital without building your own website or booking system.
            </p>
          </div>
        </motion.div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT — clean feature list */}
          <div className="flex flex-col lg:pt-2 order-2 lg:order-1">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.09, duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 px-3 -mx-3 rounded-xl transition-colors duration-200 cursor-default"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-cyan-400"
                    style={{ background: "rgba(34,211,238,0.09)" }}
                  >
                    <Icon size={15} strokeWidth={2.2}
                          className="transition-colors duration-300 group-hover:text-white"
                          style={{ color: "var(--color-cyan)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug"
                       style={{ fontFamily: "var(--secondary-font)", color: "var(--color-secondary)" }}>
                      {item.title}
                    </p>
                    <p className="text-xs mt-0.5 leading-relaxed"
                       style={{ fontFamily: "var(--primary-font)", color: "var(--color-gray)" }}>
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold tabular-nums shrink-0 mt-1 select-none"
                        style={{ fontFamily: "var(--secondary-font)", color: "var(--color-cyan)", opacity: 0.25 }}>
                    0{i + 1}
                  </span>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.52, duration: 0.4 }}
              className="mt-7 flex items-center gap-3 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white text-sm font-semibold"
                style={{
                  background: "var(--color-cyan)",
                  fontFamily: "var(--primary-font)",
                  boxShadow: "0 4px 14px rgba(34,211,238,0.28)",
                }}
              >
                Become a Partner
                <ArrowRight size={14} strokeWidth={2.5} />
              </motion.button>
              <span className="text-xs text-gray-400" style={{ fontFamily: "var(--primary-font)" }}>
                Free to join · Setup in 5 min
              </span>
            </motion.div>
          </div>

          {/* RIGHT — mock dashboard */}
          <div className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 sm:px-6 order-1 lg:order-2">
            <DashboardPanel />
          </div>
        </div>
      </div>
    </section>
  );
}