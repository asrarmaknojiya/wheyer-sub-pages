import React from 'react'
import Image from 'next/image'
import { Search, BookOpen, Lock, Star, CheckCircle, ShieldCheck, Users, Scale } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: 'Search',
    desc: 'Browse verified operators with transparent pricing upfront.',
    img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
    // shows: person planning trip on laptop/map
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    ring: 'group-hover:ring-blue-400/40',
  },
  {
    icon: BookOpen,
    step: 'Book',
    desc: 'Confirm your trip with a full price breakdown — no hidden fees.',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    // shows: person filling booking form / confirming on phone
    color: 'text-color-cyan',
    bg: 'bg-color-cyan/10',
    border: 'border-color-cyan/20',
    ring: 'group-hover:ring-cyan-400/40',
  },
  {
    icon: Lock,
    step: 'Escrow',
    desc: 'Your payment is held securely — operator gets paid only after delivery.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    // shows: secure payment / lock / card
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    ring: 'group-hover:ring-yellow-400/40',
  },
  {
    icon: Star,
    step: 'Experience',
    desc: 'Travel with full confidence — accountability is always in place.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    // shows: happy traveler on beach
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    ring: 'group-hover:ring-orange-400/40',
  },
  {
    icon: CheckCircle,
    step: 'Completion',
    desc: 'Trip done, payment releases. Everyone wins — fairly.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    // shows: celebration / successful trip done
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    ring: 'group-hover:ring-green-400/40',
  },
]

const pillars = [
  {
    icon: Lock,
    title: 'Secure Transactions',
    desc: 'Every rupee held in escrow until your experience is confirmed complete.',
  },
  {
    icon: Users,
    title: 'Vendor Accountability',
    desc: 'Operators are verified, rated, and removed if they underperform.',
  },
  {
    icon: Scale,
    title: 'Fair Dispute Handling',
    desc: 'Structured resolution within 24 hours by a neutral team — every time.',
  },
]

export default function TrustLayer() {
  return (
    <section className="w-full py-20 md:py-28 overflow-hidden">
      <div className="sec-container">
        <div className="max-w-7xl mx-auto">

          {/* ── LABEL + HEADING ── */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-color-cyan bg-color-cyan/10 border border-color-cyan/20 px-4 py-1.5 rounded-full mb-6">
              Trust Layer
            </span>
            <h2 className="about-heading heading font-secondary m-0 leading-tight mb-4">
              Built on <span className="text-color-cyan italic">Trust.</span>
            </h2>
            <p className="about-heading-title heading-title max-w-lg mx-auto">
              Every booking follows a structured system that protects you from the moment you search to the moment you're home.
            </p>
          </div>

          {/* ── STEP CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={i}
                  className={`group relative rounded-2xl overflow-hidden border border-secondary/8  transition-all duration-300 cursor-default`}
                  style={{ minHeight: '320px' }}
                >
                  {/* Full bleed image */}
                  <div className="absolute inset-0">
                    <Image
                      src={s.img}
                      alt={s.step}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* gradient: dark bottom, slight top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                  </div>

                  {/* Step number — top left */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`w-8 h-8 rounded-full  flex items-center justify-center`}>
                      <span className={`font-secondary font-extrabold text-xs text-white`}>{i + 1}</span>
                    </div>
                  </div>

                  {/* Icon — top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`w-8 h-8 rounded-full  flex items-center justify-center`}>
                      <Icon size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Content — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h4 className={`font-secondary font-bold text-lg mb-1 text-white`}>
                      {s.step}
                    </h4>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── FLOW PATH LABEL ── */}
          <div className="flex items-center justify-center gap-2 mb-16 flex-wrap px-4">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <span className={`font-secondary font-bold text-xs md:text-sm text-black`}>
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <span className="text-secondary/20 text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── THREE PILLARS ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-secondary/8 bg-white p-7 hover:shadow-lg hover:border-color-cyan/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-color-cyan/5 rounded-bl-full" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-color-cyan/10 border border-color-cyan/20 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-color-cyan" />
                    </div>
                    <h3 className="heading font-secondary text-base mb-2">{p.title}</h3>
                    <p className="heading-title text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── BOTTOM STATEMENT ── */}
          <div className="rounded-3xl bg-secondary overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              <div className="px-10 md:px-14 py-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <ShieldCheck size={36} className="text-color-cyan mb-5" />
                <h3 className="font-secondary text-white font-bold text-2xl md:text-3xl leading-tight mb-4">
                  Trust is not a feature.{' '}
                  <span className="text-color-cyan italic">It's the foundation.</span>
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Every decision we make is filtered through one question: does this protect the traveler?
                </p>
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                {[
                  { num: '100%', label: 'Bookings escrow protected' },
                  { num: '24hr', label: 'Max dispute resolution' },
                  { num: '₹0', label: 'Hidden fees ever' },
                  { num: '5★', label: 'Vendor accountability standard' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col justify-center px-8 py-8">
                    <div className="font-secondary text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.num}
                    </div>
                    <div className="text-white/40 text-xs leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}