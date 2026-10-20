import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <section className="relative bg-[#eef1f5] pt-6 overflow-hidden">
      {/* Dramatic Multi-Layered Top Wave Crest (Exact match to reference image) */}
      <div className="w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[45px] sm:h-[65px] md:h-[80px] block"
          preserveAspectRatio="none"
        >
          {/* Secondary Back Wave Layer */}
          <path
            d="M0,55 C280,5 560,75 880,35 C1140,0 1320,30 1440,55 L1440,90 L0,90 Z"
            fill="#8d96a0"
            opacity="0.55"
          />
          {/* Primary Dark Slate Wave Body */}
          <path
            d="M0,45 C240,-5 520,65 860,40 C1120,18 1290,5 1440,48 L1440,90 L0,90 Z"
            fill="#5a626a"
          />
        </svg>
      </div>

      {/* Main Dark Wave Banner Body */}
      <div className="relative bg-[#5a626a] text-white pb-12 pt-2 overflow-hidden">
        {/* Bottom-Right Layered Hill Contour inside the dark banner */}
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 right-0 w-full h-24 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M820,140 C980,85 1180,95 1440,35 L1440,140 Z"
            fill="#7c858f"
            opacity="0.45"
          />
          <path
            d="M980,140 C1140,95 1290,105 1440,65 L1440,140 Z"
            fill="#9aa3ad"
            opacity="0.35"
          />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Bar Heading + 2 Subtitle Lines */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="inline-block bg-[#9aa3ad] text-[#2b3035] px-4 py-1 rounded-xs">
                <h2 className="text-sm sm:text-base font-extrabold tracking-tight">
                  Stay Updated With Latest Architectural Offers
                </h2>
              </div>
              <p className="text-xs text-slate-200 max-w-lg">
                Subscribe to our private property index for off-market modernist villas and priority virtual tour invitations.
              </p>
              <div className="w-4/5 h-1.5 bg-[#8d96a0] rounded-full" />
              <div className="w-3/5 h-1.5 bg-[#8d96a0]/70 rounded-full" />
            </div>

            {/* Right Side: White Pill Input with Dark Slate Pill Button Inside */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-[#495057] border border-slate-500 rounded-full px-5 py-3 flex items-center justify-center gap-2 text-xs font-bold text-white shadow-md">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed to Private Property Index!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f1f3f6] rounded-full p-1.5 flex items-center shadow-lg"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-transparent text-xs font-semibold text-[#495057] placeholder:text-[#8d96a0] focus:outline-none px-4"
                  />
                  <button
                    type="submit"
                    className="px-7 py-2 rounded-full bg-[#68717a] hover:bg-[#495057] text-white text-xs font-bold transition-colors shrink-0 shadow-xs cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
