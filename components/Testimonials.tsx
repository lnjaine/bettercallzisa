import React from "react";

const testimonials = [
  {
    quote:
      "Our payments were down on Black Friday. Our entire team was panicking. Zisa fixed it in under an hour. I don't know how. I don't care. It worked.",
    name: "Daniel R.",
    role: "CTO",
    company: "Series B Fintech",
    verdict: "PROBLEM ELIMINATED",
  },
  {
    quote:
      "We had a migration that was stuck for 8 months. Twelve engineers couldn't crack it. Zisa unblocked it in a weekend. Worth every cent.",
    name: "Rafael K.",
    role: "VP Engineering",
    company: "SaaS Platform",
    verdict: "WORTH EVERY CENT",
  },
  {
    quote:
      "I called Zisa on a Tuesday with a launch deadline on Friday. He didn't ask why it was late. He just shipped it. On Thursday.",
    name: "Ana L.",
    role: "Head of Product",
    company: "HealthTech Startup",
    verdict: "DELIVERED EARLY",
  },
];

export function Testimonials() {
  return (
    <section id="testimony" className="py-24 bg-saul-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Don't Take My Word For It
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            They Called. It Worked.
          </h2>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-saul-darker/80 border border-saul-yellow/10 rounded-lg p-6 hover:border-saul-yellow/30 transition-all flex flex-col"
            >
              {/* Verdict stamp */}
              <div className="mb-4">
                <span className="inline-block font-display text-xs text-saul-yellow uppercase tracking-[0.2em] border border-saul-yellow/30 px-3 py-1 rounded">
                  {t.verdict}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 flex-grow">
                <span className="text-saul-yellow text-2xl font-display leading-none">"</span>
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-saul-yellow/10 pt-4">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
