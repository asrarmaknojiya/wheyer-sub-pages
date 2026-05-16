import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
} from "framer-motion";
import Image from "next/image";

/* ── constants ───────────────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94];

const clipReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.2, ease: EASE },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

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

/* ── staggered letter reveal ─────────────────────────────── */
function LetterReveal({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={prefersReduced ? {} : { opacity: 0, y: 60, scale: 0.5 }}
          animate={
            isInView && !prefersReduced
              ? { opacity: 1, y: 0, scale: 1 }
              : prefersReduced
              ? { opacity: 1 }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: 0.04 * i,
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── component ───────────────────────────────────────────── */
export default function ProblemSection() {
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
      id="problem-section"
      className="relative w-full bg-[var(--color-bg)] overflow-hidden py-24 md:py-36"
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ── header ──────────────────────────────────────── */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-secondary/50 mb-4"
          initial={defaultInitial}
          whileInView={defaultWhileInView}
          viewport={defaultViewport}
        >
          ✦ THE PROBLEM WE SAW
        </motion.p>

        <motion.h2
          className="font-secondary font-black text-secondary uppercase text-[clamp(1.8rem,4.5vw,4rem)] leading-[1.05] tracking-tight mb-20"
          initial={defaultInitial}
          whileInView={defaultWhileInView}
          viewport={defaultViewport}
        >
          TWO SIDES OF THE SAME
          <br />
          BROKEN SYSTEM.
        </motion.h2>

        {/* ── columns ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-start">
          {/* LEFT — old model */}
          <motion.div
            className="space-y-6"
            variants={prefersReduced ? {} : slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {/* image with clip reveal */}
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              variants={prefersReduced ? {} : clipReveal}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <Image
                src="/travel-flatlay.png"
                alt="Travel planning flat lay"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

            <span className="inline-block text-xs tracking-[0.2em] uppercase text-red-500 font-semibold">
              ✕ THE OLD MODEL
            </span>

            <h3 className="font-secondary font-bold text-2xl md:text-3xl text-secondary">
              Vendors get a rent
            </h3>

            <p className="text-secondary/60 text-sm md:text-base leading-relaxed">
              OTAs control the listing. Control the pricing. Control the
              customer relationship. Operators do the work — the platform takes
              the margin, the data, and the loyalty. Operators can&apos;t grow a
              brand. They can&apos;t build repeat business. They&apos;re
              invisible behind the platform&apos;s name.
            </p>
          </motion.div>

          {/* CENTER — TO / SOLUTION */}
          <div className="hidden lg:flex flex-col items-center justify-center self-center py-12 px-4">
            <LetterReveal
              text="TO"
              className="font-secondary font-black text-secondary text-6xl xl:text-7xl uppercase tracking-tight leading-none block"
            />
            <LetterReveal
              text="SOLUTION"
              className="font-secondary font-black text-secondary text-6xl xl:text-7xl uppercase tracking-tight leading-none block mt-2"
            />
          </div>

          {/* mobile center text */}
          <div className="lg:hidden flex items-center justify-center py-8">
            <LetterReveal
              text="TO SOLUTION"
              className="font-secondary font-black text-secondary text-4xl md:text-5xl uppercase tracking-tight leading-none text-center block"
            />
          </div>

          {/* RIGHT — Wheyer model */}
          <motion.div
            className="space-y-6"
            variants={prefersReduced ? {} : slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {/* image with clip reveal */}
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              variants={prefersReduced ? {} : clipReveal}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <Image
                src="/woman-pier.png"
                alt="Woman on pier with arms raised"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

            <span className="inline-block text-xs tracking-[0.2em] uppercase text-teal-600 font-semibold">
              ✦ THE WHEYER MODEL
            </span>

            <h3 className="font-secondary font-bold text-2xl md:text-3xl text-secondary">
              Vendors build a business.
            </h3>

            <p className="text-secondary/60 text-sm md:text-base leading-relaxed">
              Every operator gets a verified storefront with their name, their
              face, their story. They create their own packages. Set their own
              prices. Build a reputation. Earn repeat customers. Wheyer provides
              infrastructure — operators build the brand.
            </p>
          </motion.div>
        </div>

        {/* ── bottom paragraph ────────────────────────────── */}
        <div className="mt-20 md:mt-28 max-w-4xl mx-auto">
          <ScrollWords
            text="And on the traveller side, the problem was just as real. Indian travellers were paying thousands of rupees to operators they'd never met, with no protection. Nobody was solving trust — for either side. Wheyer was built to solve both."
            className="text-secondary font-medium text-lg md:text-2xl lg:text-3xl leading-snug tracking-tight text-center"
          />
        </div>
      </div>
    </section>
  );
}
