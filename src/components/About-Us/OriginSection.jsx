import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/* ── constants ───────────────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94];

/* ── word-by-word scroll reveal ──────────────────────────── */
function ScrollParagraph({ text, className, staggerOffset = 0 }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.55"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            prefersReduced={prefersReduced}
          />
        );
      })}
    </p>
  );
}

function ScrollWord({ word, range, progress, prefersReduced }) {
  const opacity = useTransform(progress, range, [0.08, 1]);
  return (
    <motion.span
      className="inline-block mr-[0.28em] will-change-transform"
      style={{ opacity: prefersReduced ? 1 : opacity }}
    >
      {word}
    </motion.span>
  );
}

/* ── component ───────────────────────────────────────────── */
export default function OriginSection() {
  const prefersReduced = useReducedMotion();

  const defaultWhileInView = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  };
  const defaultInitial = { opacity: 0, y: 40 };
  const defaultViewport = { once: true, amount: 0.2 };

  return (
    <section
      id="origin-section"
      className="relative w-full bg-secondary overflow-hidden py-28 md:py-40"
      style={{ willChange: "transform" }}
    >
      {/* subtle radial glow behind quote */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ── label ──────────────────────────────────────── */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 mb-16 md:mb-24"
          initial={defaultInitial}
          whileInView={defaultWhileInView}
          viewport={defaultViewport}
        >
          ✦ WHERE IT BEGAN
        </motion.p>

        {/* ── quote card ─────────────────────────────────── */}
        <motion.blockquote
          className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl px-8 md:px-14 py-12 md:py-16 mb-24 md:mb-32 backdrop-blur-sm"
          initial={
            prefersReduced
              ? {}
              : { opacity: 0, y: 60, scale: 0.97 }
          }
          whileInView={
            prefersReduced
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    duration: 0.8,
                  },
                }
          }
          viewport={{ once: true, amount: 0.3 }}
          style={{ willChange: "transform, opacity" }}
        >
          {/* glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ boxShadow: "0 0 0px 0px rgba(255,255,255,0)" }}
            whileInView={{
              boxShadow: [
                "0 0 0px 0px rgba(255,255,255,0)",
                "0 0 60px 8px rgba(255,255,255,0.06)",
                "0 0 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2.5, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* open quote */}
          <span className="pristina text-white/15 text-8xl md:text-9xl leading-none select-none absolute -top-2 left-6 md:left-10">
            &ldquo;
          </span>

          <p className="relative z-10 text-white/85 text-lg md:text-xl lg:text-2xl leading-relaxed font-light mt-8">
            They had the knowledge. They had the motivation. They had everything
            a great travel business needs. But the digital landscape was built
            for the giants — not for them. And nobody was fixing that.
          </p>

          {/* close quote */}
          <span className="pristina text-white/15 text-8xl md:text-9xl leading-none select-none absolute -bottom-10 right-6 md:right-10">
            &rdquo;
          </span>

          {/* divider */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
            {/* avatar */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
              F
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Fardin</p>
              <p className="text-white/40 text-xs">Founder, Wheyer</p>
            </div>
          </div>
        </motion.blockquote>

        {/* ── body paragraphs ────────────────────────────── */}
        <div className="space-y-10 md:space-y-14">
          <ScrollParagraph
            text="Working inside India's IT and travel industry, we kept meeting the same people. Travel operators with years of experience on the ground. Trek leaders who knew their mountains better than any algorithm. Local hosts who could show travellers a side of their destination no OTA ever could."
            className="text-white/70 text-base md:text-lg leading-relaxed text-center"
            staggerOffset={0}
          />

          <ScrollParagraph
            text="They had passion. They had knowledge. They had everything a great travel business needs. But the digital landscape wasn't built for them — it was built for the platforms that extracted value from them."
            className="text-white/70 text-base md:text-lg leading-relaxed text-center"
            staggerOffset={1}
          />

          <ScrollParagraph
            text="The more we looked, the more we saw the same pattern. The big OTAs weren't just dominant — they were extractive. Operators would list, give up pricing control, hand over their customers, and receive a commission in return. No storefront. No brand."
            className="text-white/70 text-base md:text-lg leading-relaxed text-center"
            staggerOffset={2}
          />
        </div>
      </div>
    </section>
  );
}
