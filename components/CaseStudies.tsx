import React from "react";

const stats = [
  { value: "200+", label: "Problems Killed" },
  { value: "4hrs", label: "Avg. Time to Fix" },
  { value: "0", label: "Unresolved Issues" },
  { value: "100%", label: "Satisfaction Rate" },
];

const cases = [
  {
    verdict: "FIXED IN 3 HOURS",
    industry: "Series B Startup",
    challenge: "Payment system down during Black Friday. Engineering team couldn't find the bug. Revenue bleeding $50K/hour.",
    result: "Root cause found in 47 minutes. Fix shipped. Zero data loss.",
    detail: "Race condition in the payment queue — 3 lines of code, $400K saved",
  },
  {
    verdict: "FIXED OVERNIGHT",
    industry: "E-commerce Platform",
    challenge: "Migration from monolith to microservices stalled for 8 months. Team of 12 engineers stuck. Board losing patience.",
    result: "Critical path unblocked. First 3 services extracted in 48 hours.",
    detail: "Untangled the dependency graph nobody else would touch",
  },
  {
    verdict: "FIXED BEFORE LAUNCH",
    industry: "HealthTech Company",
    challenge: "HIPAA compliance audit in 5 days. App failing 23 security checks. Previous contractor ghosted.",
    result: "All 23 checks passed. Audit cleared. Launch on schedule.",
    detail: "Security hardening, encryption fixes, and audit trail — under pressure, no excuses",
  },
];

export function CaseStudies() {
  return (
    <section id="evidence" className="py-24 bg-saul-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            The Track Record
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            Problems That Don't Exist Anymore
          </h2>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 border border-saul-yellow/20 rounded-lg">
              <p className="font-display text-4xl md:text-5xl text-saul-yellow">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.industry}
              className="bg-saul-darker/80 border border-saul-yellow/10 rounded-lg overflow-hidden hover:border-saul-yellow/30 transition-all"
            >
              {/* Verdict banner */}
              <div className="bg-saul-yellow/10 px-6 py-3 flex items-center justify-between">
                <span className="font-display text-saul-yellow text-sm uppercase tracking-wider">
                  {c.verdict}
                </span>
                <span className="text-gray-500 text-xs uppercase">{c.industry}</span>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">{c.challenge}</p>
                <p className="font-display text-2xl text-white uppercase tracking-wider mb-3">
                  {c.result}
                </p>
                <p className="text-saul-yellow/70 text-xs uppercase tracking-wider">
                  {c.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
