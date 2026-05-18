"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";

/* ─── Premium Studio Easing Mechanics ───────────────────── */
const CUBIC_EASE = [0.16, 1, 0.3, 1];
const SPRING_TRANSITION = { type: "spring", stiffness: 220, damping: 28 };

/* ─── Restructured Studio Data ───────────────────────────── */
const FOUNDERS = [
  {
    id: "01",
    name: "Fardin",
    role: "Founder",
    dept: "Product & Business",
    bio: "Saw the gap before anyone else did — built the first prototype in a single weekend.",
    initials: "FA",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face",
    tag: "Vision / Architecture",
  },
  {
    id: "02",
    name: "Mr. Anas",
    role: "Co-Founder",
    dept: "Technology",
    bio: "Turns conviction into infrastructure. Writes the code that keeps operators in control.",
    initials: "AN",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&fit=crop&crop=face",
    tag: "Systems / Engineering",
  },
];

const TEAM_REST = [
  { id: "03", initials: "PR", label: "Product Strategy", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&fit=crop&crop=face" },
  { id: "04", initials: "DS", label: "Brand Design", photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&q=80&fit=crop&crop=face" },
  { id: "05", initials: "EN", label: "Core Infrastructure", photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200&q=80&fit=crop&crop=face" },
  { id: "06", initials: "GR", label: "Growth Systems", photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&fit=crop&crop=face" },
  { id: "07", initials: "DA", label: "Data Intelligence", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80&fit=crop&crop=face" },
  { id: "08", initials: "OP", label: "Scale Operations", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80&fit=crop&crop=face" },
];

/* ─── Kinetic Marquee Line ───────────────────────────────── */
function StudioMarquee({ items, reverse = false, speed = 25 }) {
  const duplicated = [...items, ...items, ...items, ...items];
  return (
    <div className="w-full overflow-hidden whitespace-nowrap border-b border-neutral-900 bg-neutral-950 py-4 select-none">
      <motion.div
        className="inline-flex gap-16 items-center"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {duplicated.map((item, i) => (
          <div key={i} className="flex items-center gap-6 group/marquee cursor-default">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400 transition-colors duration-300 group-hover/marquee:text-neutral-200">
              {item}
            </span>
            <span className="text-neutral-600 text-xs transition-transform duration-700 ease-out group-hover/marquee:rotate-180 group-hover/marquee:scale-150 group-hover/marquee:text-white">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Asymmetric Brutalist Founder Panel ─────────────────── */
function EditorialFounderCard({ person, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="group relative w-full border-b border-neutral-900 lg:border-b-0 lg:border-r border-dashed last:border-r-0 flex flex-col justify-between p-6 md:p-10 transition-all duration-500 ease-out hover:bg-neutral-100/80 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
      initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: CUBIC_EASE, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full">
        {/* Top Data Bar */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-400 block mb-1">[{person.id}]</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded-sm">
              {person.tag}
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 text-right">
            {person.dept}
          </p>
        </div>

        {/* Name Graphic */}
        <div className="relative mb-8">
          <h3 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-neutral-950 uppercase leading-none transition-transform duration-500 group-hover:translate-x-3">
            {person.name}
          </h3>
          <p className="font-serif text-xl italic text-neutral-500 mt-2 font-light transition-all duration-500 group-hover:translate-x-3 group-hover:text-neutral-800">
            {person.role}
          </p>
        </div>
      </div>

      {/* Frame Visual / Bios Trigger */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-12">
        <div className="md:col-span-7">
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed tracking-wide max-w-sm">
            {person.bio}
          </p>
        </div>

        <div className="md:col-span-5 flex justify-end perspective-[1000px]">
          <div className="relative w-28 h-36 md:w-32 md:h-44 overflow-hidden grayscale bg-neutral-200 border border-neutral-900 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-neutral-950 group-hover:shadow-[6px_6px_0px_0px_rgba(10,10,10,1)]">
            <motion.img
              src={person.photo}
              alt={person.name}
              className="w-full h-full object-cover object-top"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: CUBIC_EASE }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Studio Interactive Team Row Matrix ─────────────────── */
function StudioTeamRow({ member, index }) {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="relative border-b border-neutral-900 py-5 px-4 md:px-8 flex items-center justify-between group cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-neutral-950 md:hover:px-12 hover:px-6"
      initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
      whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: CUBIC_EASE, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-6 z-10">
        <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-500 transition-all duration-500 group-hover:translate-x-2">
          // {member.id}
        </span>
        <h4 className="font-sans text-lg md:text-xl font-bold uppercase tracking-wider text-neutral-950 group-hover:text-white transition-all duration-500 group-hover:translate-x-2">
          {member.label}
        </h4>
      </div>

      <div className="flex items-center gap-8 z-10">
        <span className="font-mono text-xs tracking-widest uppercase text-neutral-400 group-hover:text-neutral-300 transition-all duration-500 group-hover:-translate-x-2 hidden sm:inline">
          Team Member
        </span>
        <div className="font-mono text-sm font-semibold text-neutral-950 group-hover:text-neutral-900 transition-all duration-500 w-8 h-8 rounded-full border border-neutral-900 group-hover:border-white flex items-center justify-center bg-white/50 backdrop-blur-sm group-hover:bg-white group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {member.initials}
        </div>
      </div>

      {/* Floating Hover Preview Card (Shopify / Dialect Concept) */}
      <AnimatePresence>
        {hovered && !prefersReduced && (
          <motion.div
            className="absolute pointer-events-none right-24 md:right-36 top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 z-20 overflow-hidden grayscale-0 border-2 border-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] origin-center"
            initial={{ opacity: 0, scale: 0.4, rotate: -10, y: "-50%" }}
            animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 4 : -4, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.4, rotate: 10, y: "-50%" }}
            transition={SPRING_TRANSITION}
          >
            <img src={member.photo} alt={member.label} className="w-full h-full object-cover object-top" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Architectural Component ──────────────────────── */
export default function TeamSection() {
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth typography stretch mimicking Mugen Studio interactive layouts
  const titleXLeft = useTransform(scrollYProgress, [0, 0.45], ["-10%", "0%"]);
  const titleXRight = useTransform(scrollYProgress, [0, 0.45], ["10%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-neutral-50 text-neutral-950 overflow-hidden pt-20 pb-0 border-t border-neutral-900"
    >
      {/* ── SECTION HERO HEADER (Mugen Studio Aesthetics) ── */}
      <div className="w-full px-4 md:px-10 lg:px-16 border-b border-neutral-900 pb-16">
        <div className="flex flex-col mb-12">
          <div className="overflow-hidden">
            <motion.h2
              style={{ x: prefersReduced ? 0 : titleXLeft }}
              className="font-sans font-black uppercase text-[11vw] tracking-tighter leading-[0.85] text-neutral-950"
            >
              Architecting
            </motion.h2>
          </div>
          <div className="overflow-hidden flex justify-end">
            <motion.h2
              style={{ x: prefersReduced ? 0 : titleXRight }}
              className="font-sans font-light italic text-[11vw] tracking-tight leading-[0.85] text-neutral-950"
              style={{ WebkitTextStroke: "1px #0a0a0a", color: "transparent" }}
            >
              The Conviction.
            </motion.h2>
          </div>
        </div>

        {/* Structural Info Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-neutral-900/40 border-dashed">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-neutral-950 rounded-full animate-ping" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                Studio Blueprint // Wheyer Core
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-neutral-600 text-lg md:text-xl leading-relaxed tracking-wide">
              We are a lean execution squad of 11 builders—developers, designers, and systems operators. We abandoned standard industry playbooks because we share an absolute singular position.
            </p>
          </div>
          <div className="lg:col-span-3 flex lg:justify-end gap-10">
            <div>
              <p className="font-mono text-[2.5rem] font-bold tracking-tight leading-none text-neutral-950">11</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Builders</p>
            </div>
            <div className="border-l border-neutral-300 pl-8">
              <p className="font-mono text-[2.5rem] font-bold tracking-tight leading-none text-neutral-950">00</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Compromise</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── INTERMEDIARY MOVING KINETIC MARQUEE ── */}
      <StudioMarquee items={["THE PEOPLE BUILDING WHEYER", "CORE OPERATIONS MATRIX", "ZERO TENANCY OWNERSHIP", "ESTABLISHED 2024"]} speed={35} />

      {/* ── CENTRAL ASYMMETRIC GRID LAYER (Studio Dialect Style) ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-neutral-900">
        {FOUNDERS.map((person, idx) => (
          <EditorialFounderCard key={person.id} person={person} index={idx} />
        ))}
      </div>

      {/* ── SYSTEM ROW MATRICES (Shopify Premium System Rows) ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-start bg-neutral-100">
        {/* Left Informational Structural Grid */}
        <div className="lg:col-span-4 p-6 md:p-10 lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-neutral-900 h-auto lg:h-screen flex flex-col justify-between overflow-hidden relative z-10 bg-neutral-100">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">// Core Cluster</p>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-neutral-950">
              The Distributed Engineering Matrix
            </h3>
          </div>

          {/* Central Decorative Photo/Graphic Matrix */}
          <div className="hidden lg:flex flex-grow items-center justify-center w-full relative py-12">
            <div className="relative w-full max-w-[240px] aspect-[4/5] bg-neutral-200 border border-neutral-900 shadow-[8px_8px_0px_0px_rgba(10,10,10,1)] group/matrix overflow-hidden">
              <motion.img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&fit=crop" 
                alt="Server Matrix" 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover/matrix:grayscale-0 group-hover/matrix:scale-110"
              />
              {/* Overlay Grid lines */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border border-neutral-900/20" />
                ))}
              </div>
              <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Rotating Technical Badge */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-28 h-28 bg-neutral-950 text-white rounded-full flex items-center justify-center p-2 shadow-xl border-4 border-neutral-100 z-10 hidden xl:flex">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                className="w-full h-full relative flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible absolute inset-0">
                  <path id="curve" fill="transparent" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  <text className="text-[10px] font-mono uppercase tracking-[0.2em] fill-white">
                    <textPath href="#curve">
                      System Architecture /// Core Matrix /// 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse absolute" />
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-900">
            <p className="font-sans text-neutral-500 text-sm leading-relaxed max-w-xs">
              Every system element is managed end-to-end. No middle managers. No abstract architecture. Pure execution.
            </p>
          </div>
        </div>

        {/* Right Active Dynamic Content Rows */}
        <div className="lg:col-span-8 bg-neutral-50">
          {TEAM_REST.map((member, idx) => (
            <StudioTeamRow key={member.id} member={member} index={idx} />
          ))}

          {/* Dynamic Interactive Hiring CTA Box */}
          <div className="group/cta relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-neutral-950 text-white transition-all duration-700 hover:bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/0 via-neutral-800/20 to-neutral-800/0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 ease-in-out" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 group-hover/cta:text-neutral-300 transition-colors">Talent Acquisition</span>
              </div>
              <h4 className="font-sans text-xl md:text-2xl font-semibold tracking-wide uppercase group-hover/cta:translate-x-2 transition-transform duration-500">
                We design for active ownership.
              </h4>
            </div>
            <motion.div
              className="relative z-10 inline-flex items-center gap-4 border border-neutral-700 px-6 py-3 cursor-pointer text-xs uppercase font-mono tracking-widest transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:border-white group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Matrix <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}