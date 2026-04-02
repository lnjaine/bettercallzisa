import React from "react";
import type { Content } from "../content";

export function Services({ content }: { content: Content }) {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            {content.services.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            {content.services.title}
          </h2>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.items.map((service) => (
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
