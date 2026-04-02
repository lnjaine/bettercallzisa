import React from "react";
import type { Content } from "../content";

export function Hero({ whatsappUrl, content }: { whatsappUrl: string; content: Content }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-saul-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-saul-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-1 h-40 bg-saul-yellow/30" />
        <div className="absolute top-1/2 right-0 w-1 h-40 bg-saul-yellow/30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 border-2 border-saul-yellow/50 bg-saul-yellow/10 rounded-full px-6 py-2.5 mb-10">
          <span className="w-3 h-3 bg-saul-yellow rounded-full animate-pulse" />
          <span className="text-saul-yellow text-base font-bold uppercase tracking-widest">
            {content.hero.badge}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider leading-none mb-6">
          {content.hero.headline[0].split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              <span className="text-saul-yellow">{line}</span>
            </span>
          ))}
          <br />
          <span className="text-saul-orange">{content.hero.headline[1]}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          {content.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-saul-yellow hover:bg-saul-gold text-saul-darker font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 uppercase tracking-wider flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {content.hero.cta}
          </a>
          <a
            href="#evidence"
            className="border border-gray-600 hover:border-saul-yellow text-gray-300 hover:text-saul-yellow font-medium text-lg px-8 py-4 rounded-lg transition-all uppercase tracking-wider"
          >
            {content.hero.ctaSecondary}
          </a>
        </div>

        {/* Legal seal decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-24 rounded-full border-2 border-saul-yellow/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-saul-yellow/50 flex items-center justify-center">
              <span className="font-display text-saul-yellow text-xl">FIX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
