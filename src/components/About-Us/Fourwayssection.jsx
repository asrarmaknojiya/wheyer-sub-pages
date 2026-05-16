"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

/* ─── constants ────────────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94];

const ITEMS = [
  {
    id: "01",
    title: "Explore Trips",
    desc: "Pick an operator's experience and set your own departure date and group size. The operator's knowledge, your schedule.",
  },
  {
    id: "02",
    title: "Group Tours",
    desc: "Join a curated group journey led by a verified local expert. Every detail handled — you just show up.",
  },
  {
    id: "03",
    title: "Things To Do",
    desc: "Book activities, workshops, and day experiences directly from the people who run them.",
  },
  {
    id: "04",
    title: "Unique Stays",
    desc: "Discover handpicked accommodation hosted by real people. Not a chain, not an algorithm — a home.",
  },
];

/* ─── word-by-word scroll reveal (from OriginSection) ──── */
function ScrollParagraph({ text, className }) {
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
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        return (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em] will-change-transform"
            style={{ opacity: prefersReduced ? 1 : opacity }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

/* ─── accordion row ────────────────────────────────────── */
function AccordionRow({ item, isOpen, onToggle, index }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className="border-b border-secondary/15 last:border-b-0"
      initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
      whileInView={
        prefersReduced
          ? {}
          : { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: index * 0.08 } }
      }
      viewport={{ once: true, amount: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 text-left group"
      >
        {/* number */}
        <span className="font-primary text-[11px] text-gray w-6 shrink-0">
          {item.id}.
        </span>

        {/* title */}
        <span
          className={`font-secondary font-semibold text-base md:text-lg flex-1 transition-colors duration-200 ${
            isOpen ? "text-secondary" : "text-secondary/75 group-hover:text-secondary"
          }`}
        >
          {item.title}
        </span>

        {/* arrow */}
        <motion.span
          className="text-secondary/50 text-lg shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          →
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.35, ease: EASE } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.25, ease: EASE } }}
            className="overflow-hidden"
          >
            <p className="font-primary text-sm text-gray leading-relaxed pl-10 pb-5 max-w-sm">
              {item.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── main section ─────────────────────────────────────── */
export default function FourWaysSection() {
  const [openId, setOpenId] = useState("01");
  const prefersReduced = useReducedMotion();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // subtle parallax on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg overflow-hidden py-24 md:py-36"
    >
      {/* ── very faint grain texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ──────────────────────────────── */}
          <div>
            {/* eyebrow */}
            <motion.p
              className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.22em] uppercase text-gray mb-7"
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={
                prefersReduced
                  ? {}
                  : { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
              }
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="text-secondary text-sm">✦</span>
              What you can do on Wheyer
            </motion.p>

            {/* big headline — mixed weight editorial style */}
            <motion.h2
              className="font-secondary font-extrabold uppercase leading-[1.05] text-secondary mb-10"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              initial={prefersReduced ? {} : { opacity: 0, y: 32 }}
              whileInView={
                prefersReduced
                  ? {}
                  : { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.1 } }
              }
              viewport={{ once: true, amount: 0.3 }}
            >
              Four ways to travel —{" "}
              <span className="block">all with verified</span>
              <span className="block">
                operators,{" "}
                <span
                  className="font-light italic"
                  style={{ color: "var(--color-green)" }}
                >
                  all escrow‑protected.
                </span>
              </span>
            </motion.h2>

            {/* accordion */}
            <div className="mt-2">
              {ITEMS.map((item, i) => (
                <AccordionRow
                  key={item.id}
                  item={item}
                  index={i}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div className="flex flex-col gap-8 lg:pt-2">
            {/* word-scroll body copy */}
            <ScrollParagraph
              text="Every listing is created by a real person with a face, a story, and a reputation on the line. Every payment is held in escrow until the trip begins."
              className="font-primary text-gray text-base md:text-lg leading-relaxed max-w-sm"
            />

            {/* image with parallax */}
            <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
              <motion.div
                className="absolute inset-[-8%] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80')",
                  y: prefersReduced ? 0 : imageY,
                }}
              />
              {/* subtle inner shadow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>

            {/* small trust badge */}
            <motion.div
              className="flex items-center gap-3 self-start"
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={
                prefersReduced
                  ? {}
                  : { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.3 } }
              }
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="font-primary text-xs tracking-wide text-gray">
                Escrow protected · Verified operators · No hidden fees
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}