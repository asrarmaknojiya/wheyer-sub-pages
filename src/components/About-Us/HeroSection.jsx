




import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/*
  FIXED ARCHITECTURE:
  ───────────────────
  section height: 300vh
    • 0  → 100vh : curtain lift (scroll space for the clip animation)
    • 100vh → 300vh : hero is fully revealed, user scrolls normally
                      through the hero content (200vh of reading space)

  All layers are position:fixed so they pin to viewport.
  When section.bottom <= 0, all layers hide so next sections show.

  NAV FIX: instead of morphing maxWidth (which causes shrink),
  the nav pill stays full-width and only borderRadius morphs.
  No maxWidth changes = no shrinking effect.
*/

const EASE = [0.25, 0.46, 0.45, 0.94];
const H1_LINE1 = ["THE", "TRAVEL", "INDUSTRY", "WAS"];
const H1_LINE2 = ["BUILT", "FOR", "THE", "GIANTS."];

const wordVariants = {
  hidden:  { opacity: 0, y: 55, rotateX: 30 },
  visible: (i) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: EASE },
  }),
};

export default function HeroSection() {
  const sectionRef     = useRef(null);
  const curtainRef     = useRef(null);
  const heroBgRef      = useRef(null);
  const heroCtxRef     = useRef(null);
  const navRef         = useRef(null);
  const prefersReduced = useReducedMotion();

  const [wordsVisible,   setWordsVisible]   = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      return;
    }

    const section = sectionRef.current;
    const curtain = curtainRef.current;
    const heroBg  = heroBgRef.current;
    const heroCtx = heroCtxRef.current;
    const nav     = navRef.current;
    if (!section || !curtain || !heroBg || !heroCtx || !nav) return;

    let rafId       = null;
    let lastRevealed = false;

    const tick = () => {
      rafId = null;
      const vh   = window.innerHeight;
      const rect = section.getBoundingClientRect();

      // Hide all fixed layers once hero scrolls fully out of view
      const pastSection   = rect.bottom <= 0;
      const beforeSection = rect.top >= vh;
      const hidden        = pastSection || beforeSection;

      const d = hidden ? "none" : "";
      curtain.style.display  = d;
      heroBg.style.display   = d;
      heroCtx.style.display  = d;
      nav.style.display      = d;

      if (hidden) return;

      // p = 0→1 over first 100vh of section scroll
      const scrolledIn = -rect.top;           // px scrolled into section
      const p          = Math.min(Math.max(scrolledIn / vh, 0), 1);

      // ── Curtain clips upward ──
      curtain.style.clipPath = `inset(${p * 100}% 0 0 0)`;

      // ── Nav morphs during curtain phase ──
      if (!lastRevealed) morphNav(nav, p);

      // ── Reveal once curtain fully gone ──
      if (p >= 1 && !lastRevealed) {
        lastRevealed = true;
        heroCtx.style.opacity      = "1";
        heroCtx.style.pointerEvents = "auto";
        finalizeNav(nav);
        setWordsVisible(true);
        setContentVisible(true);
      }

      // ── Reset if scrolled back up ──
      if (p < 0.98 && lastRevealed) {
        lastRevealed = false;
        heroCtx.style.opacity      = "0";
        heroCtx.style.pointerEvents = "none";
        setWordsVisible(false);
        setContentVisible(false);
      }
    };

    const onScroll = () => { if (!rafId) rafId = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", tick,     { passive: true });
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", tick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReduced]);

  const shouldShowWords = prefersReduced || wordsVisible;
  const shouldShowContent = prefersReduced || contentVisible;

  return (
    <>
      {/* ── z:10  HERO BG — always behind, never animates ── */}
      <div
        ref={heroBgRef}
        className="fixed inset-0 z-[10]"
        aria-hidden="true"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#0b0b0b",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
      </div>

      {/* ── z:20  HERO CONTENT — hidden until curtain gone ── */}
      <div
        ref={heroCtxRef}
        className="fixed inset-0 z-[20] flex flex-col justify-between px-6 md:px-16 lg:px-24"
        style={{
          opacity: 0,
          transition: "opacity 420ms ease",
          pointerEvents: "none",
          paddingTop: "80px",
          paddingBottom: "28px",
        }}
      >
        {/* Label */}
        {/* <motion.p
          className="text-white/55 text-[11px] md:text-xs tracking-[0.28em] uppercase mt-2"
          initial={{ opacity: 0, y: 14 }}
          animate={shouldShowContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="text-cyan-400 mr-1">✦</span>
          ABOUT WHEYER — 01 / ORIGIN
        </motion.p> */}

        {/* Middle row: H1 left + card right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 flex-1 justify-end pb-6">

          {/* LEFT — H1 + CTA */}
          <div className="max-w-3xl" style={{ perspective: "700px" }}>
            <h1
              className="font-black text-white uppercase leading-[0.92] tracking-tight"
              style={{
                fontFamily: "'Exo', sans-serif",
                fontSize: "clamp(2.4rem, 7vw, 5rem)",
              }}
            >
              <span className="block">
                {H1_LINE1.map((w, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    className="inline-block mr-[0.25em]"
                    custom={i}
                    variants={prefersReduced ? {} : wordVariants}
                    initial="hidden"
                    animate={shouldShowWords ? "visible" : "hidden"}
                    style={{ willChange: "transform, opacity" }}
                  >{w}</motion.span>
                ))}
              </span>
              <span className="block">
                {H1_LINE2.map((w, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    className="inline-block mr-[0.25em]"
                    custom={i + H1_LINE1.length}
                    variants={prefersReduced ? {} : wordVariants}
                    initial="hidden"
                    animate={shouldShowWords ? "visible" : "hidden"}
                    style={{ willChange: "transform, opacity" }}
                  >{w}</motion.span>
                ))}
              </span>
            </h1>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-white text-gray-900 font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 active:scale-[0.97] transition-all duration-300"
              initial={{ opacity: 0, y: 18 }}
              animate={shouldShowContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
              style={{ pointerEvents: "auto" }}
            >
              Join the Marketplace
              <span className="text-xs font-bold">↗</span>
            </motion.a>
          </div>

          {/* RIGHT — Description card */}
          <motion.div
            className="md:max-w-sm lg:max-w-md shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={shouldShowContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.45, ease: EASE }}
            style={{ pointerEvents: "auto" }}
          >
            <div
              className="rounded-2xl p-5 md:p-6"
              style={{
                background: "rgba(15,15,15,0.52)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="text-white/75 text-sm md:text-base leading-relaxed">
                India&apos;s first vendor-first travel marketplace — where
                independent operators build real businesses, and travellers
                book real experiences with complete peace of mind.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-4 text-white/40 text-[11px] md:text-xs gap-2 md:gap-0"
          initial={{ opacity: 0 }}
          animate={shouldShowContent ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
        >
          <span className="hidden md:inline">• Gujarat, India · Founded September 2025</span>
          <span>• Building India&apos;s first open travel marketplace</span>
          <motion.span
            className="flex items-center gap-1 cursor-default select-none"
            animate={shouldShowContent ? { y: [0, 5, 0] } : {}}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          >
            Scroll to begin ↓
          </motion.span>
        </motion.div>
      </div>

      {/* ── z:30  CURTAIN — eggshell, clips upward on scroll ── */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[30] flex flex-col items-center justify-center"
        style={{ backgroundColor: "#f4efe9", clipPath: "inset(0% 0 0 0)" }}
      >
        <motion.p
          className="text-[#1a1a1a]/35 text-[11px] md:text-sm tracking-[0.35em] mt-15 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        >
          India&apos;s first open travel marketplace
        </motion.p>

        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: EASE }}
        >
          <span className="text-[#1a1a1a]/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            className="w-px bg-[#1a1a1a]/20 origin-top"
            style={{ height: "36px" }}
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* ── z:50  NAV — logo + pill side by side, 30px gap ── */}
      <nav
        ref={navRef}
        className="fixed left-0 right-0 z-[50] flex justify-center"
        style={{ top: "38vh" }}
        aria-label="Main navigation"
      >
        {/*
          KEY FIX: width stays 100%, only borderRadius + colors morph.
          No maxWidth animation = no shrinking.
          Logo and pill are flex siblings with 30px gap.
        */}
        <div
          data-nav-inner=""
          className="flex items-center px-6 md:px-10 py-3"
          style={{
            width: "70%",
            gap: "30px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "1px solid rgba(0,0,0,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo — outside pill, 30px gap from links */}
          <span
            data-nav-logo=""
            className="pristina text-2xl md:text-3xl tracking-wide select-none cursor-pointer whitespace-nowrap shrink-0"
            style={{ color: "#1a1a1a" }}
          >
            Wheyer
          </span>

          {/* Nav links */}
          <div
            data-nav-links=""
            className="hidden md:flex items-center gap-5 text-sm font-medium flex-1 justify-end"
            style={{ color: "#555" }}
          >
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">My Trip</a>
            <span className="w-px h-4 bg-current opacity-25" />
            <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity whitespace-nowrap">
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-[11px]">👤</span>
              Become Partner
            </a>
            <span className="w-px h-4 bg-current opacity-25" />
            <a href="#" className="flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap">
              Sign In / Sign up <span className="text-xs ml-0.5 opacity-70">→</span>
            </a>
          </div>

          <button
            data-nav-btn=""
            className="md:hidden text-xl leading-none ml-auto"
            style={{ color: "#1a1a1a" }}
            aria-label="Open menu"
          >☰</button>
        </div>
      </nav>

      {/*
        ── SCROLL SPACE ──
        300vh total:
        • First  100vh → curtain lift animation
        • Next   200vh → hero fully revealed, normal scroll
      */}
      <section
        ref={sectionRef}
        id="hero-section"
        aria-label="Hero"
        style={{ height: "200vh", display: "block" }}
      />
    </>
  );
}

/* ─── NAV HELPERS ─────────────────────────────── */

function morphNav(nav, p) {
  const inner = nav.querySelector("[data-nav-inner]");
  const logo  = nav.querySelector("[data-nav-logo]");
  const links = nav.querySelector("[data-nav-links]");
  const btn   = nav.querySelector("[data-nav-btn]");
  if (!inner) return;

  // Move from 38vh → 0vh
  nav.style.top = `max(4px, ${(1 - p) * 38}vh)`;

  // Only radius morphs — NO width/maxWidth change (prevents shrink)
  inner.style.borderRadius = "999px";

  // Glass fades out
  const op = Math.max(0, 0.55 - p * 0.55);
  const bl = Math.max(0, 22  - p * 22);
  const bo = Math.max(0, 0.12 - p * 0.12);
  const so = Math.max(0, 0.08 - p * 0.08);
  inner.style.background           = `rgba(255,255,255,${op})`;
  inner.style.backdropFilter       = `blur(${bl}px)`;
  inner.style.WebkitBackdropFilter = `blur(${bl}px)`;
  inner.style.borderColor          = `rgba(0,0,0,${bo})`;
  inner.style.boxShadow            = `0 8px 32px rgba(0,0,0,${so})`;

  // Text color: dark → white
  const t = Math.min(p * 1.4, 1);
  if (logo)  logo.style.color  = lerpRGB([26,26,26],  [255,255,255], t);
  if (links) links.style.color = lerpRGB([85,85,85],  [255,255,255], t);
  if (btn)   btn.style.color   = lerpRGB([26,26,26],  [255,255,255], t);
}

function finalizeNav(nav) {
  const inner = nav.querySelector("[data-nav-inner]");
  const logo  = nav.querySelector("[data-nav-logo]");
  const links = nav.querySelector("[data-nav-links]");
  const btn   = nav.querySelector("[data-nav-btn]");
  if (!inner) return;

  nav.style.top                    = "4px";
  inner.style.borderRadius         = "999px";
  inner.style.background           = "rgba(0,0,0,0.30)";
  inner.style.backdropFilter       = "blur(16px)";
  inner.style.WebkitBackdropFilter = "blur(16px)";
  inner.style.borderColor          = "rgba(255,255,255,0.07)";
  inner.style.boxShadow            = "none";
  if (logo)  logo.style.color  = "#ffffff";
  if (links) links.style.color = "rgba(255,255,255,0.80)";
  if (btn)   btn.style.color   = "#ffffff";
}

function lerpRGB(a, b, t) {
  return `rgb(${Math.round(a[0]+(b[0]-a[0])*t)},${Math.round(a[1]+(b[1]-a[1])*t)},${Math.round(a[2]+(b[2]-a[2])*t)})`;
}
