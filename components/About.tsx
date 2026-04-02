import React from "react";
import type { Content } from "../content";

export function About({ whatsappUrl, content }: { whatsappUrl: string; content: Content }) {
  return (
    <section id="counsel" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            {content.about.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            {content.about.title}
          </h2>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <img
              src="/zisa.jpg"
              alt="Zisa — Better Call Zisa"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-saul-yellow/30"
            />
          </div>

          {/* Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-display text-3xl text-saul-yellow uppercase tracking-wider">
                {content.about.name}
              </h3>
              <a
                href={content.about.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saul-yellow/60 hover:text-saul-yellow transition-colors"
                title="LinkedIn — Zisa"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {content.about.bio[0]}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              {content.about.bio[1]}
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {content.about.credentials.map((cred) => (
                <li key={cred} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-saul-yellow rounded-full flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{cred}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-saul-yellow hover:bg-saul-gold text-saul-darker font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 uppercase tracking-wider text-sm"
            >
              {content.about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
