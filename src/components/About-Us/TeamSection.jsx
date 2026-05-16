"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

/* ─── easing ─────────────────────────────────────────────── */
const E = [0.16, 1, 0.3, 1];

/* ─── data ───────────────────────────────────────────────── */
const FOUNDERS = [
  {
    id: "01",
    name: "Fardin",
    role: "Founder",
    dept: "Product & Business",
    bio: "Saw the gap before anyone else did — built the first prototype in a single weekend.",
    initials: "FA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face",
    tag: "Vision",
    accent: "#14b8a6", // teal-500
  },
  {
    id: "02",
    name: "Mr. Anas",
    role: "Co-Founder",
    dept: "Technology",
    bio: "Turns conviction into infrastructure. Writes the code that keeps operators in control.",
    initials: "AN",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&fit=crop&crop=face",
    tag: "Engineering",
    accent: "#2563eb", // blue-600
  },
];

const TEAM_REST = [
  { initials: "PR", label: "Product", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&fit=crop&crop=face" },
  { initials: "DS", label: "Design",  photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=120&q=80&fit=crop&crop=face" },
  { initials: "EN", label: "Eng",     photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=120&q=80&fit=crop&crop=face" },
  { initials: "GR", label: "Growth",  photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80&fit=crop&crop=face" },
  { initials: "DA", label: "Data",    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80&fit=crop&crop=face" },
  { initials: "OP", label: "Ops",     photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80&fit=crop&crop=face" },
];

/* ─── eyebrow label with animated spark ─────────────────── */
function EyebrowLabel({ text }) {
  const prefersReduced = useReducedMotion();
  const [sparkKey, setSparkKey] = useState(0);

  return (
    <motion.div
      className="inline-flex items-center gap-3 mb-7 group cursor-default"
      initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
      whileInView={prefersReduced ? {} : { opacity: 1, x: 0, transition: { duration: 0.6, ease: E } }}
      viewport={{ once: true, amount: 0.2 }}
      onHoverStart={() => setSparkKey((k) => k + 1)}
    >
      {/* spark icon — re-animates on every hover */}
      <motion.span
        key={sparkKey}
        className="relative flex items-center justify-center w-5 h-5 shrink-0"
        initial={prefersReduced ? {} : { rotate: 0, scale: 1 }}
        animate={prefersReduced ? {} : { rotate: [0, 20, -15, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 0.5, ease: E }}
      >
        <span className="text-secondary text-base leading-none select-none">✦</span>
        {/* ripple on hover */}
        <motion.span
          key={`ripple-${sparkKey}`}
          className="absolute inset-0 rounded-full border border-secondary/30"
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
      </motion.span>

      {/* text with animated underline */}
      <span className="relative font-primary text-[11px] uppercase tracking-[0.25em] text-gray">
        {text}
        <motion.span
          className="absolute -bottom-0.5 left-0 h-px bg-secondary/30 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: E, delay: 0.3 }}
        />
      </span>
    </motion.div>
  );
}

/* ─── word scroll reveal ─────────────────────────────────── */
function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.55"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            word={w}
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
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span
      className="inline-block mr-[0.25em]"
      style={{ opacity: prefersReduced ? 1 : opacity }}
    >
      {word}
    </motion.span>
  );
}

/* ─── marquee ────────────────────────────────────────────── */
function Marquee({ items, reverse = false, speed = 32 }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className=" whitespace-nowrap select-none">
      <motion.div
        className="inline-flex items-center gap-8"
        animate={{ x: reverse ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {tripled.map((item, i) => (
          <span key={i} className="font-secondary text-[10px] uppercase tracking-[0.3em] text-secondary/40 shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── founder photo card ─────────────────────────────────── */
function FounderCard({ person, index }) {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-default"
      style={{ aspectRatio: "3/4" }}
      initial={prefersReduced ? {} : { opacity: 0, y: 50 }}
      whileInView={prefersReduced ? {} : {
        opacity: 1, y: 0,
        transition: { duration: 0.85, ease: E, delay: index * 0.14 },
      }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* photo with scale */}
      <motion.img
        src={person.photo}
        alt={person.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.8, ease: E }}
      />

      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* accent colour wash on hover — uses person.accent */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: person.accent }}
        animate={{ opacity: hovered ? 0.18 : 0 }}
        transition={{ duration: 0.45, ease: E }}
      />

      {/* top-left tag */}
      <motion.div
        className="absolute top-4 left-4"
        animate={{ y: hovered ? -2 : 0 }}
        transition={{ duration: 0.35, ease: E }}
      >
        <span className="font-primary text-[10px] uppercase tracking-[0.2em] text-white/70 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
          {person.tag}
        </span>
      </motion.div>

      {/* top-right index */}
      <div className="absolute top-4 right-4 font-secondary text-white/25 text-[11px]">
        {person.id}
      </div>

      {/* bottom info — slides up slightly on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5"
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.45, ease: E }}
      >
        <p className="font-secondary font-extrabold text-white text-2xl md:text-3xl leading-tight">
          {person.name}
        </p>
        <p className="font-primary text-[11px] uppercase tracking-[0.18em] text-white/50 mt-1">
          {person.role} · {person.dept}
        </p>

        {/* bio slides in on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              className="font-primary text-xs text-white/75 mt-3 leading-relaxed overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", transition: { duration: 0.32, ease: E } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: E } }}
            >
              {person.bio}
            </motion.p>
          )}
        </AnimatePresence>

        {/* accent line that grows on hover */}
        <motion.div
          className="mt-4 h-px rounded-full origin-left"
          style={{ backgroundColor: person.accent }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 0.7 : 0 }}
          transition={{ duration: 0.4, ease: E }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── team cluster pill ───────────────────────────────────── */
function TeamPill({ member, index }) {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="relative flex items-center gap-0 rounded-full overflow-hidden border border-secondary/10 cursor-default"
      initial={prefersReduced ? {} : { opacity: 0, scale: 0.82 }}
      whileInView={prefersReduced ? {} : {
        opacity: 1, scale: 1,
        transition: { duration: 0.4, ease: E, delay: index * 0.05 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ borderColor: hovered ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.2 }}
    >
      {/* photo */}
      <div className="relative w-8 h-8 shrink-0 overflow-hidden">
        <img
          src={member.photo}
          alt={member.label}
          className="w-full h-full object-cover object-top"
        />
        {/* hover tint */}
        <motion.div
          className="absolute inset-0 bg-teal-500"
          animate={{ opacity: hovered ? 0.25 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </div>

      {/* label — expands on hover */}
      <motion.span
        className="font-primary text-[11px] uppercase tracking-[0.15em] text-secondary/50 overflow-hidden whitespace-nowrap"
        animate={{
          paddingLeft: hovered ? "10px" : "8px",
          paddingRight: hovered ? "12px" : "10px",
          color: hovered ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.4)",
        }}
        transition={{ duration: 0.25, ease: E }}
      >
        {member.label}
      </motion.span>
    </motion.div>
  );
}

/* ─── main section ───────────────────────────────────────── */
export default function TeamSection() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const ruleScale = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={sectionRef} className="relative w-full bg-bg overflow-hidden py-24 md:py-36">

      {/* ── HEADER ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-end mb-14">

          {/* left: eyebrow + headline */}
          <div>
            <EyebrowLabel text="The people building Wheyer" />

            <div>
              {[
                { text: "A small team", cls: "font-extrabold" },
                { text: "with a", cls: "font-extrabold" },
                { text: "clear conviction.", cls: "font-light italic", ghost: true },
              ].map((line, i) => (
                <div key={i} className="">
                  <motion.h2
                    className={`font-secondary uppercase leading-[1.0] block text-secondary ${line.cls}`}
                    style={{
                      fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                      color: line.ghost ? "transparent" : undefined,
                      WebkitTextStroke: line.ghost ? "1.5px #000" : undefined,
                    }}
                    initial={prefersReduced ? {} : { y: "110%" }}
                    whileInView={
                      prefersReduced
                        ? {}
                        : {
                            y: "0%",
                            transition: { duration: 0.8, ease: E, delay: i * 0.09 },
                          }
                    }
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {line.text}
                  </motion.h2>
                </div>
              ))}
            </div>
          </div>

          {/* right: description + stats */}
          <div className="space-y-6">
            <ScrollWords
              text="We are a lean team of 11 — developers, designers, and operators — building something we genuinely believe in. Every person here chose Wheyer because they see the same gap."
              className="font-primary text-gray text-base md:text-[1.05rem] leading-relaxed"
            />

            {/* stats */}
            <motion.div
              className="flex items-center gap-6 pt-2"
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.5, ease: E, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {[["11", "builders"], ["1", "belief"], ["0", "compromise"]].map(([n, l], i) => (
                <motion.div
                  key={l}
                  className="text-center group cursor-default"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: E }}
                >
                  <p className="font-secondary font-extrabold text-secondary text-3xl leading-none group-hover:text-teal-600 transition-colors duration-200">
                    {n}
                  </p>
                  <p className="font-primary text-[10px] uppercase tracking-[0.2em] text-gray mt-1">{l}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* animated rule */}
        <motion.div className="h-px bg-secondary/12 origin-left mb-14" style={{ scaleX: ruleScale }} />
      </div>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <div className="border-y border-secondary/8 py-3 mb-16 space-y-2.5 overflow-hidden">
        <Marquee items={["Developers", "Designers", "Operators", "Builders", "Believers", "Wheyer", "11 People"]} speed={28} />
        <Marquee items={["Lean", "Focused", "Mission-Driven", "Zero Compromise", "One Belief", "Real Operators"]} reverse speed={38} />
      </div>

      {/* ── MAIN GRID ───────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">

          {/* LEFT — founder cards */}
          <div className="space-y-5">
            <p className="font-primary text-[11px] uppercase tracking-[0.22em] text-gray mb-5">
              Founders
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <FounderCard person={FOUNDERS[0]} index={0} />
              </div>
              <div className="col-span-1 flex flex-col gap-4">
                <FounderCard person={FOUNDERS[1]} index={1} />

                {/* ambient travel photo */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl group cursor-default"
                  style={{ aspectRatio: "4/3" }}
                  initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.8, ease: E, delay: 0.3 } }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&q=80&fit=crop"
                    alt="Travel landscape"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ y: prefersReduced ? 0 : imgY }}
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-primary text-[10px] uppercase tracking-[0.2em] text-white/60">
                      The world we're building for
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* team cluster */}
            <div className="mt-6">
              <p className="font-primary text-[11px] uppercase tracking-[0.22em] text-gray mb-4">
                + 9 across the team
              </p>
              <div className="flex flex-wrap gap-2">
                {TEAM_REST.map((m, i) => (
                  <TeamPill key={i} member={m} index={i} />
                ))}
                <motion.div
                  className="flex items-center border border-secondary/10 rounded-full px-3 py-1"
                  initial={prefersReduced ? {} : { opacity: 0, scale: 0.85 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, scale: 1, transition: { duration: 0.4, ease: E, delay: 0.35 } }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="font-primary text-[11px] text-secondary/35">+ 3 more</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT — conviction panel */}
          <div className="flex flex-col gap-8 lg:pt-6">

            {/* hero image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl group cursor-default"
              style={{ aspectRatio: "4/5" }}
              initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.85, ease: E } }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&fit=crop"
                alt="The Wheyer team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ y: prefersReduced ? 0 : imgY }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:from-black/65 transition-all duration-500" />

              {/* floating quote chip */}
              <motion.div
                className="absolute top-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 group-hover:bg-white/15 transition-colors duration-300"
                initial={prefersReduced ? {} : { opacity: 0, y: -12 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: E, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <p className="font-secondary font-bold text-white text-sm md:text-base leading-snug">
                  "Not just a product. A position."
                </p>
                <p className="font-primary text-[11px] text-white/50 mt-1.5 uppercase tracking-[0.15em]">
                  — The founding belief
                </p>
              </motion.div>

              {/* bottom meta */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="font-secondary font-bold text-white text-lg">Wheyer Team</p>
                  <p className="font-primary text-[11px] uppercase tracking-[0.18em] text-white/50">India · Remote · Est. 2024</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="font-primary text-[11px] uppercase tracking-wider text-white/50">Active</span>
                </div>
              </div>
            </motion.div>

            {/* conviction card */}
            <motion.div
              className="group rounded-2xl bg-secondary p-7 md:p-8 relative overflow-hidden cursor-default"
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0, transition: { duration: 0.7, ease: E, delay: 0.15 } }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.35, ease: E }}
            >
              {/* grid texture */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
                aria-hidden="true"
              />

              {/* teal glow that appears on hover */}
              <motion.div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-teal-500 blur-3xl pointer-events-none"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <p className="font-secondary font-bold text-primary text-lg md:text-xl leading-snug mb-6">
                  We believe travel operators deserve ownership — not tenancy.
                  Wheyer exists to give them the tools the giants never will.
                </p>
                <div className="flex items-center justify-between">
                  {/* stacked avatars */}
                  <div className="flex -space-x-2">
                    {[...FOUNDERS, ...TEAM_REST.slice(0, 3)].map((m, i) => (
                      <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                        <img src={m.photo} alt={m.name || m.label} className="w-full h-full object-cover object-top" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-secondary flex items-center justify-center shrink-0">
                      <span className="font-secondary text-[9px] font-bold text-white/40">+6</span>
                    </div>
                  </div>
                  <span className="font-primary text-[11px] uppercase tracking-[0.18em] text-white/30">
                    All in
                  </span>
                </div>
              </div>
            </motion.div>

            {/* hiring row */}
            <motion.div
              className="group flex items-center gap-3 cursor-default"
              initial={prefersReduced ? {} : { opacity: 0 }}
              whileInView={prefersReduced ? {} : { opacity: 1, transition: { duration: 0.5, ease: E, delay: 0.3 } }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
              <span className="font-primary text-xs text-gray tracking-wide group-hover:text-secondary transition-colors duration-200">
                We're hiring — join people who actually believe in this
              </span>
              <motion.span
                className="text-secondary/30 text-sm ml-auto"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}