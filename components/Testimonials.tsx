import React from "react";
import type { Content } from "../content";

export function Testimonials({ content }: { content: Content }) {
  return (
    <section id="testimony" className="py-24 bg-saul-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            {content.testimonials.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            {content.testimonials.title}
          </h2>
          <p className="text-gray-500 text-sm mt-4">
            {content.testimonials.subtitle}
          </p>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.testimonials.items.map((t) => (
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
              <div className="border-t border-saul-yellow/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saul-yellow/60 hover:text-saul-yellow transition-colors"
                  title={`LinkedIn — ${t.name}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
