import React from "react";

const credentials = [
  "10+ years shipping production code under pressure",
  "Full-stack: from kernel-level bugs to React pixel-pushing",
  "200+ critical issues resolved — zero left unfinished",
  "Trusted by CTOs when their own team can't crack it",
];

export function About({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <section id="counsel" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-saul-yellow text-sm font-bold uppercase tracking-[0.3em] mb-3">
            The Engineer
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            One Call. Problem Gone.
          </h2>
          <div className="w-20 h-1 bg-saul-yellow mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-saul-yellow/20 to-saul-orange/20 flex items-center justify-center border-2 border-saul-yellow/30">
                <span className="font-display text-7xl md:text-8xl text-saul-yellow">Z</span>
              </div>
              {/* Decorative seal */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-saul-darker border-2 border-saul-yellow flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-saul-yellow text-xs block">EST.</span>
                  <span className="font-display text-saul-yellow text-sm block">AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-display text-3xl text-saul-yellow uppercase tracking-wider mb-4">
              Zisa
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I don't do meetings about meetings. I don't write proposals. You have a problem,
              you tell me what it is, we agree on the price, and I make it disappear. That's it.
              Over a decade of engineering, and the only thing I've never shipped is an excuse.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Your team is stuck? I unstick them. Your production is down? I bring it back.
              Your deadline is impossible? I make it possible. No junior devs, no subcontracting,
              no handoffs. When you call Zisa, Zisa picks up the keyboard.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map((cred) => (
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
              Describe Your Problem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
