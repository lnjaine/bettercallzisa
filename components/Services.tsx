import React from "react";

const services = [
  {
    icon: "🔥",
    title: "Production Fires",
    description:
      "Server down. Users screaming. Your team is frozen. Zisa walks in, finds the root cause, ships the fix. Done. You sleep tonight.",
  },
  {
    icon: "🕸️",
    title: "Legacy Nightmares",
    description:
      "That codebase nobody wants to touch? The one that breaks if you look at it wrong? Hand it over. It'll be clean, fast, and working by morning.",
  },
  {
    icon: "⏰",
    title: "Impossible Deadlines",
    description:
      "Launch is Friday. Feature isn't built. Your team says it can't be done. Zisa says watch me. No excuses, no extensions. Just delivered.",
  },
  {
    icon: "🧬",
    title: "Deep Technical Debt",
    description:
      "The bug that's been there for 6 months. The migration everyone's afraid of. The architecture that doesn't scale. Consider it handled.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            What I Fix
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            Your Worst Problems
          </h2>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-saul-dark/50 border-l-4 border-saul-yellow p-6 rounded-r-lg hover:bg-saul-dark/80 transition-all group"
            >
              <span className="text-4xl block mb-4">{service.icon}</span>
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3 group-hover:text-saul-yellow transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
