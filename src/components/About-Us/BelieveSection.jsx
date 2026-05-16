"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CONVICTIONS = [
  {
    id: "c1",
    num: "01",
    short: "Own Your Business",
    title: "Vendors deserve to own their business — not rent space in someone else's",
    desc: "An operator who has spent 10 years learning Spiti Valley should be able to build a brand, not just a listing. Wheyer is where that's finally possible.",
    tags: ["Brand Ownership", "Operator Identity", "No Middlemen", "Direct Bookings", "Custom Storefront", "Your Rules"],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
  },
  {
    id: "c2",
    num: "02",
    short: "Trust is Foundation",
    title: "Trust is not a feature — it's the foundation",
    desc: "Escrow, verification, SOS — these aren't add-ons. They're the reason Wheyer exists. We've built it into the architecture, not the marketing.",
    tags: ["Escrow Payments", "Operator Verification", "SOS System", "Safe Transactions", "Dispute Resolution", "Built-in Trust"],
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=85",
  },
  {
    id: "c3",
    num: "03",
    short: "Humans Behind Trips",
    title: "Every trip has a human behind it — and that human should be visible",
    desc: "Algorithms don't know that the best way to see Kedarnath is with Ankit, who's been guiding there since 2016. Real people do.",
    tags: ["Human-first", "Guide Profiles", "Local Expertise", "Real Reviews", "Operator Stories", "Community"],
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=85",
  },
  {
    id: "c4",
    num: "04",
    short: "Small → Big Brands",
    title: "Small operators can build big brands — with the right platform",
    desc: "Indian travel is dominated by a handful of OTAs not because they're better, but because operators never had the infrastructure. That changes with Wheyer.",
    tags: ["Growth Tools", "Brand Builder", "Equal Access", "Analytics", "Marketing Suite", "Scale Ready"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85",
  },
];

const N = CONVICTIONS.length;
const mod = (n, m) => ((n % m) + m) % m;

export default function BelieveSection() {
  const containerRef = useRef(null);
  const progressRef = useRef(0); // float: floor=activeIndex, frac=transition 0→1
  const [renderProgress, setRenderProgress] = useState(0);
  const touchStartY = useRef(null);
  const lastTouchY = useRef(null);
  const wheelAccum = useRef(0);
  const wheelTimer = useRef(null);
  const rafRef = useRef(null);
  const isAnimating = useRef(false);

  const animateTo = useCallback((target) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    isAnimating.current = true;
    const from = progressRef.current;
    const dist = target - from;
    const duration = 650;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 4);
      progressRef.current = from + dist * ease;
      setRenderProgress(progressRef.current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        progressRef.current = target;
        setRenderProgress(target);
        isAnimating.current = false;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stepTo = useCallback((direction) => {
    const current = Math.round(progressRef.current);
    animateTo(current + direction);
  }, [animateTo]);

  const navigateTo = useCallback((targetCardIndex) => {
    if (isAnimating.current) return;
    const cur = mod(Math.round(progressRef.current), N);
    let delta = targetCardIndex - cur;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    animateTo(Math.round(progressRef.current) + delta);
  }, [animateTo]);

  // Wheel
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const isMouse = !e.deltaMode && Math.abs(e.deltaY) > 50;
      if (isMouse) {
        if (!isAnimating.current) stepTo(e.deltaY > 0 ? 1 : -1);
        return;
      }
      wheelAccum.current += e.deltaY;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => { wheelAccum.current = 0; }, 150);
      if (Math.abs(wheelAccum.current) >= 80 && !isAnimating.current) {
        const dir = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;
        stepTo(dir);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [stepTo]);

  // Touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      lastTouchY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      e.preventDefault();
      lastTouchY.current = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - lastTouchY.current;
      if (Math.abs(delta) > 40) stepTo(delta > 0 ? 1 : -1);
      touchStartY.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [stepTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") stepTo(1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") stepTo(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stepTo]);

  // Derive display
  const activeIndex = Math.floor(renderProgress);
  const frac = renderProgress - activeIndex;
  const currentCard = mod(activeIndex, N);
  const nextCard = mod(activeIndex + 1, N);

  const getImageLayer = (cardIndex) => {
    if (cardIndex === currentCard) {
      return { clipPath: `inset(${frac * 100}% 0 0 0)`, zIndex: 2 };
    }
    if (cardIndex === nextCard && frac > 0.001) {
      return { clipPath: `inset(0 0 ${(1 - frac) * 100}% 0)`, zIndex: 1 };
    }
    return { clipPath: "inset(0 0 100% 0)", zIndex: 0 };
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] text-white relative w-full select-none"
      style={{ height: "100vh", overflow: "hidden", touchAction: "none" }}
    >
      <div
        className="w-full h-full flex flex-col lg:flex-row px-6 md:px-16 gap-8 lg:gap-12 items-stretch py-8"
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >

        {/* ── LEFT SIDEBAR ── */}
        <div className="w-full lg:w-[28%] h-full flex flex-col justify-center gap-4 z-40">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ color: "#c8a96e", fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 700 }}>+</span>
            <span style={{ fontSize: "0.65rem", fontFamily: "monospace", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: 600 }}>
              What We Believe
            </span>
          </div>

          {CONVICTIONS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => navigateTo(i)}
              style={{
                fontFamily: "'Exo', sans-serif",
                fontSize: currentCard === i ? "1.5rem" : "1.15rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: currentCard === i ? "#ffffff" : "rgba(255,255,255,0.2)",
                opacity: currentCard === i ? 1 : 0.35,
                transform: currentCard === i ? "translateX(8px)" : "translateX(0px)",
                transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: 0,
              }}
            >
              <span style={{ fontFamily: "monospace", fontWeight: 400, fontSize: "0.6em", color: "#c8a96e", marginRight: "0.4rem" }}>
                [{c.num}]
              </span>
              {c.short}
            </button>
          ))}

          {/* Scroll cue */}
          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem", opacity: 0.3 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "0.6rem", fontFamily: "monospace", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Scroll or swipe</div>
              <div style={{ display: "flex", gap: "6px", fontSize: "0.75rem" }}>↑ ↓</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="w-full lg:w-[72%] h-full flex flex-col relative">

          {/* IMAGE STACK */}
          <div
            className="relative w-full flex-1 overflow-hidden bg-neutral-900"
            style={{ borderRadius: "1rem" }}
          >
            {CONVICTIONS.map((c, i) => (
              <img
                key={c.id}
                src={c.img}
                alt={c.title}
                style={{
                  ...getImageLayer(i),
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  willChange: "clip-path",
                  userSelect: "none",
                }}
                loading="eager"
                draggable={false}
              />
            ))}

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 45%, transparent 72%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            {/* Number badge */}
            <div
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                zIndex: 20,
                fontFamily: "monospace",
                color: "#c8a96e",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                transition: "opacity 0.3s",
              }}
            >
              [{CONVICTIONS[currentCard].num}]
            </div>

            {/* ── CONTENT OVERLAY ── */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20 }}>
              {CONVICTIONS.map((c, i) => {
                let opacity = 0;
                if (i === currentCard) opacity = Math.max(0, 1 - frac * 2.5);
                if (i === nextCard && frac > 0.2) opacity = Math.min(1, (frac - 0.2) * 2.5);

                const yShift = i === currentCard ? frac * -20 : (1 - frac) * 20;

                return (
                  <div
                    key={c.id}
                    style={{
                      opacity,
                      transform: `translateY(${yShift}px)`,
                      position: "absolute",
                      bottom: "1.75rem",
                      left: "1.75rem",
                      right: "1.75rem",
                      pointerEvents: opacity > 0.4 ? "auto" : "none",
                    }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
                      className="md:grid-cols-12"
                    >
                      <div className="md:col-span-7" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <h3
                          style={{
                            fontFamily: "'Exo', sans-serif",
                            fontSize: "clamp(1rem, 2vw, 1.4rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.3,
                            color: "#fff",
                            margin: 0,
                          }}
                        >
                          {c.title}
                        </h3>
                        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>
                          {c.desc}
                        </p>
                      </div>
                      <div className="md:col-span-5" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.6rem", fontFamily: "monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
                          Categories
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                          {c.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: "0.68rem",
                                fontFamily: "monospace",
                                letterSpacing: "0.03em",
                                padding: "0.25rem 0.625rem",
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "rgba(255,255,255,0.65)",
                                borderRadius: "6px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", justifyContent: "center", alignItems: "center" }}>
            {CONVICTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i)}
                style={{
                  width: currentCard === i ? "28px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: currentCard === i ? "#c8a96e" : "rgba(255,255,255,0.2)",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
                aria-label={`Go to ${CONVICTIONS[i].short}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}