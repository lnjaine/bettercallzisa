import React, { useState } from "react";
import type { Content } from "../content";

export function Navbar({ whatsappUrl, content }: { whatsappUrl: string; content: Content }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-saul-darker/95 backdrop-blur-sm border-b border-saul-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-saul-yellow text-xl tracking-wider uppercase">
            Better Call Zisa
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-saul-yellow transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-saul-yellow text-saul-darker font-bold text-sm px-5 py-2 rounded hover:bg-saul-gold transition-colors uppercase tracking-wide"
            >
              {content.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-saul-yellow p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-saul-dark border-t border-saul-yellow/20">
          <div className="px-4 py-4 space-y-3">
            {content.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-gray-300 hover:text-saul-yellow uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-saul-yellow text-saul-darker font-bold text-sm px-5 py-2 rounded text-center uppercase tracking-wide"
            >
              {content.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
