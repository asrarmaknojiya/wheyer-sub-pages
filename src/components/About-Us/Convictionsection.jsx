"use client";

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
function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.6"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
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

function Word({ word, range, progress, prefersReduced }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span
      className="inline-block mr-[0.3em] will-change-transform"
      style={{ opacity: prefersReduced ? 1 : opacity }}
    >
      {word}
    </motion.span>
  );
}

export default function ConvictionSection() {
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const defaultInitial = { opacity: 0, y: 40 };
  const defaultWhileInView = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  };
  const defaultViewport = { once: true, amount: 0.2 };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[540px] md:min-h-[620px] overflow-hidden"
    >
      {/* Background image — Parallax applied */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80')",
          y: prefersReduced ? 0 : bgY,
          scale: 1.1, // Scale up slightly to prevent edges showing during parallax
        }}
        aria-hidden="true"
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      {/* Glass panel — centred */}
      <div className="relative z-10 flex items-center justify-center w-full min-h-[540px] md:min-h-[620px] px-4 py-16 md:py-24">
        <motion.div
          initial={prefersReduced ? {} : defaultInitial}
          whileInView={prefersReduced ? {} : defaultWhileInView}
          viewport={defaultViewport}
          className="
            w-full max-w-3xl
            bg-white/10 backdrop-blur-md
            border border-white/15
            rounded-2xl
            px-8 md:px-16
            py-12 md:py-16
            text-center
            shadow-[0_8px_40px_rgba(0,0,0,0.25)]
          "
        >
          {/* Eyebrow label */}
          <motion.p
            className="inline-flex items-center gap-2 text-white/80 text-xs md:text-sm font-primary tracking-[0.2em] uppercase mb-8"
            initial={defaultInitial}
            whileInView={defaultWhileInView}
            viewport={defaultViewport}
          >
            <span className="text-white text-base leading-none">✦</span>
            The Conviction
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="
              font-secondary font-extrabold
              text-white
              text-3xl md:text-5xl lg:text-[3.25rem]
              leading-[1.1]
              uppercase
              tracking-tight
              mb-8
            "
            initial={defaultInitial}
            whileInView={defaultWhileInView}
            viewport={defaultViewport}
            transition={{ delay: 0.1 }}
          >
            Big OTAs give vendors
            <br className="hidden sm:block" /> a rent.
            <br />
            Wheyer gives them
            <br className="hidden sm:block" /> a business.
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="w-12 h-px bg-white/40 mx-auto mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          />

          {/* Body copy — word-by-word reveal */}
          <ScrollWords
            text="This is the belief Wheyer was founded on — and every decision we make comes back to it."
            className="font-primary text-white/85 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}