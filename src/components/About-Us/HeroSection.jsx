import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";

/* ── animation constants ─────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94];

const wordVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: EASE },
  }),
};

const cursiveVariants = {
  hidden: { opacity: 0, scale: 0.7, filter: "blur(24px)" },
  visible: {
    opacity: 0.08,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, delay: 0.6, ease: EASE },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.4, ease: EASE },
  },
};

const bounceTransition = {
  y: {
    duration: 1.4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const H1_WORDS = ["THE", "TRAVEL", "INDUSTRY", "WAS", "BUILT", "FOR", "THE", "GIANTS."];

/* ── component ───────────────────────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const [heroRevealed, setHeroRevealed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ── navbar bar transitions (scroll 0 → 0.18) ─────────── */
  const barTop = useTransform(scrollYProgress, [0, 0.18], ["38vh", "0vh"]);
  const barMaxW = useTransform(scrollYProgress, [0, 0.18], ["680px", "100vw"]);
  const barRadius = useTransform(scrollYProgress, [0, 0.18], ["999px", "0px"]);

  // glass background
  const glassBgOp = useTransform(scrollYProgress, [0, 0.18], [0.55, 0]);
  const glassBackground = useMotionTemplate`rgba(255, 255, 255, ${glassBgOp})`;
  const blurVal = useTransform(scrollYProgress, [0, 0.18], [24, 0]);
  const glassBackdrop = useMotionTemplate`blur(${blurVal}px)`;
  const borderOp = useTransform(scrollYProgress, [0, 0.18], [0.12, 0]);
  const glassBorder = useMotionTemplate`rgba(0, 0, 0, ${borderOp})`;
  const barShadowOp = useTransform(scrollYProgress, [0, 0.18], [0.08, 0]);
  const barShadow = useMotionTemplate`0 8px 32px rgba(0,0,0,${barShadowOp})`;

  // text color: dark on eggshell → white on dark hero
  const navTextColor = useTransform(scrollYProgress, [0.08, 0.22], ["#1a1a1a", "#ffffff"]);
  const navTextSubColor = useTransform(scrollYProgress, [0.08, 0.22], ["#555555", "rgba(255,255,255,0.7)"]);

  /* ── background transition (eggshell → dark hero) ──────── */
  const eggshellOpacity = useTransform(scrollYProgress, [0.05, 0.22], [1, 0]);

  /* ── hero content fade in ──────────────────────────────── */
  const heroOpacity = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0.18, 0.32], [50, 0]);

  /* ── parallax on bg image ──────────────────────────────── */
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* ── navbar fade out at section end ────────────────────── */
  const navOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [1, 1, 1, 0]);

  // trigger staggered word animation once hero is visible
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.22 && !heroRevealed) setHeroRevealed(true);
  });

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative w-full"
      style={{ height: "250vh", willChange: "transform" }}
    >
      {/* ── sticky viewport ────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── eggshell background (fades out) ──────────────── */}
        <motion.div
          className="absolute inset-0 z-[5]"
          style={{
            backgroundColor: "#f5f0eb",
            opacity: prefersReduced ? 0 : eggshellOpacity,
            pointerEvents: "none",
          }}
        />

        {/* ── dark hero background + parallax ──────────────── */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: prefersReduced ? 0 : bgParallaxY }}
        >
          <div
            className="absolute inset-0 w-full h-[140%]"
            style={{
              backgroundImage: "url('/hero-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>

        {/* ── navbar — glassmorphism pill → top bar ─────────── */}
        <motion.nav
          className="fixed left-0 right-0 z-50 flex justify-center"
          style={{
            top: prefersReduced ? "0vh" : barTop,
            opacity: prefersReduced ? 1 : navOpacity,
          }}
        >
          <motion.div
            className="flex items-center justify-between w-full px-6 md:px-10 py-3.5"
            style={{
              maxWidth: prefersReduced ? "100vw" : barMaxW,
              borderRadius: prefersReduced ? "0px" : barRadius,
              background: prefersReduced ? "transparent" : glassBackground,
              backdropFilter: prefersReduced ? "none" : glassBackdrop,
              WebkitBackdropFilter: prefersReduced ? "none" : glassBackdrop,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: prefersReduced ? "transparent" : glassBorder,
              boxShadow: prefersReduced ? "none" : barShadow,
              willChange: "transform, max-width, border-radius",
            }}
          >
            {/* logo */}
            <motion.span
              className="pristina text-2xl md:text-3xl tracking-wide select-none cursor-pointer"
              style={{ color: navTextColor }}
            >
              Wheyer
            </motion.span>

            {/* nav links */}
            <motion.div
              className="hidden md:flex items-center gap-5 text-sm font-medium"
              style={{ color: navTextSubColor }}
            >
              <a href="#" className="hover:opacity-80 transition-opacity duration-300">
                My Trip
              </a>
              <motion.span
                className="w-px h-4"
                style={{ backgroundColor: navTextSubColor }}
              />
              <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
                <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-[10px]">
                  👤
                </span>
                Become Partner
              </a>
              <motion.span
                className="w-px h-4"
                style={{ backgroundColor: navTextSubColor }}
              />
              <a href="#" className="hover:opacity-80 transition-opacity duration-300 flex items-center gap-1">
                Sign In / Sign up
                <span className="text-xs">→</span>
              </a>
            </motion.div>

            {/* mobile menu */}
            <motion.button
              className="md:hidden text-xl"
              style={{ color: navTextColor }}
              aria-label="Menu"
            >
              ☰
            </motion.button>
          </motion.div>
        </motion.nav>

        {/* ── centered "Wheyer" intro (visible before scroll) ── */}
        <motion.div
          className="absolute inset-0 z-[6] flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: eggshellOpacity }}
        >
          <motion.span
            className="pristina text-secondary select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
            initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            Wheyer
          </motion.span>
          <motion.p
            className="text-secondary/50 text-xs md:text-sm tracking-[0.3em] uppercase mt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          >
            India&apos;s first open travel marketplace
          </motion.p>
        </motion.div>

        {/* ── hero content (fades in after scroll) ─────────── */}
        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-16 lg:px-24 pt-20"
          style={{
            opacity: prefersReduced ? 1 : heroOpacity,
            y: prefersReduced ? 0 : heroY,
            willChange: "transform, opacity",
          }}
        >
          {/* label */}
          <p className="self-start text-white/60 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
            ✦ ABOUT WHEYER — 01 / ORIGIN
          </p>

          {/* H1 */}
          <div className="relative w-full">
            <h1
              className="font-secondary font-black text-white uppercase leading-[0.95] text-[clamp(2.4rem,7vw,6.5rem)] tracking-tight"
              style={{ perspective: "600px" }}
            >
              {H1_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  custom={i}
                  variants={prefersReduced ? {} : wordVariants}
                  initial="hidden"
                  animate={heroRevealed ? "visible" : "hidden"}
                  style={{ willChange: "transform, opacity" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* giant cursive overlay */}
            <motion.span
              className="pristina absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none select-none whitespace-nowrap z-0"
              style={{
                fontSize: "clamp(6rem, 18vw, 22rem)",
                willChange: "transform, opacity, filter",
              }}
              variants={prefersReduced ? {} : cursiveVariants}
              initial="hidden"
              animate={heroRevealed ? "visible" : "hidden"}
            >
              Wheyer
            </motion.span>
          </div>

          {/* bottom-right card */}
          <motion.div
            className="self-end mt-12 md:mt-16 max-w-md"
            variants={prefersReduced ? {} : cardVariants}
            initial="hidden"
            animate={heroRevealed ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-5">
              India&apos;s first vendor-first travel marketplace — where
              independent operators build real businesses, and travellers book
              real experiences with complete peace of mind.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-secondary font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors duration-300"
            >
              Join the Marketplace
              <span className="text-xs">↗</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ── footer bar ───────────────────────────────────── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-5 border-t border-white/10 text-white/50 text-xs md:text-sm"
          style={{ opacity: heroOpacity }}
        >
          <span className="hidden md:inline">
            • Gujarat, India · Founded September 2025
          </span>
          <span>• Building India&apos;s first open travel marketplace</span>
          <motion.span
            className="mt-2 md:mt-0 flex items-center gap-1 cursor-pointer"
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={bounceTransition}
          >
            Scroll to begin ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
