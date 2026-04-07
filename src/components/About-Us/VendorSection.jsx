import { Store, ShieldCheck, Star, LayoutDashboard, Globe } from "lucide-react";

export default function VendorSection() {
  const features = [
    {
      icon: <Store size={18} />,
      text: "Create your storefront",
    },
    {
      icon: <LayoutDashboard size={18} />,
      text: "List and manage experiences",
    },
    {
      icon: <Globe size={18} />,
      text: "Reach high-intent travelers",
    },
    {
      icon: <ShieldCheck size={18} />,
      text: "Get secure payments via escrow",
    },
    {
      icon: <Star size={18} />,
      text: "Build credibility with reviews & trust signals",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="sec-container grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — VISUAL */}
        <div className="relative">

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=900&auto=format&fit=crop"
              alt="vendor travel"
              className="w-full h-87.5 sm:h-105 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>

          {/* FLOATING STATS CARD */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-4 shadow-lg flex items-center gap-3">
            <ShieldCheck className="text-cyan" size={20} />
            <div>
              <p className="text-sm font-semibold text-secondary">
                Secure Vendor Payments
              </p>
              <span className="text-xs text-gray">
                Powered by escrow system
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-6">

          {/* HEADER */}
          <div>
            <h2 className="heading about-heading">
              For Travel Partners
            </h2>
            <p className="about-heading-title">
              Wheyer helps travel businesses go digital and grow faster without complexity.
            </p>
          </div>

          {/* FEATURES */}
          <div className="space-y-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 w-8 h-8 flex items-center justify-center rounded-lg bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white transition">
                  {item.icon}
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div className="p-4 rounded-xl border border-primary/40 bg-white/60 backdrop-blur-md">
            <p className="text-sm text-secondary font-medium">
              No need to build your own website or booking system.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button className="px-6 py-3 rounded-xl bg-blue text-white hover:bg-blue-hover transition shadow-md">
              Become a Partner
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}