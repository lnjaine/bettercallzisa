import React from "react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-saul-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-saul-yellow text-sm uppercase tracking-wider">
              Better Call Zisa
            </span>
            <span className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <p className="text-gray-600 text-xs uppercase tracking-wider">
            Built with AI, obviously.
          </p>
        </div>
      </div>
    </footer>
  );
}
