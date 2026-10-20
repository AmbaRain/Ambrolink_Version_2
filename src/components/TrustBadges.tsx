import React from 'react';
import { ShieldCheck, Lock, Clock, Headphones, Award, Settings } from 'lucide-react';
import { TRUST_BADGES } from '../data/mockData';

export const TrustBadges: React.FC = () => {
  const getBadgeIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#495057]" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#495057]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#495057]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#495057]" />;
      case 'UserCheck':
        return <Award className="w-6 h-6 text-[#495057]" />;
      case 'Sliders':
        return <Settings className="w-6 h-6 text-[#495057]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#495057]" />;
    }
  };

  return (
    <section className="relative pt-8 pb-16 sm:pb-20 bg-[#e9ecef]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Double-Ring Circular Icon Badge matching image */}
              <div className="w-16 h-16 rounded-full bg-[#dde2e7] p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-[#e6eaef] border border-[#cbd2d9] flex items-center justify-center shadow-2xs">
                  {getBadgeIcon(badge.icon)}
                </div>
              </div>

              {/* Primary Bar + Title */}
              <h4 className="mt-3 text-xs font-extrabold text-[#495057]">
                {badge.title}
              </h4>
              <div className="mt-1 w-16 h-1.5 bg-[#9aa3ad] rounded-full" />

              {/* Subtitle + Secondary Bars */}
              <p className="mt-1.5 text-[10px] font-medium text-[#6c757d] leading-tight max-w-[130px]">
                {badge.subtitle}
              </p>
              <div className="mt-1 w-20 h-1 bg-[#cbd2d9] rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Smooth Bottom Wave Transition into Explore Categories */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[26px] sm:h-[38px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C420,-10 980,60 1440,15 L1440,55 L0,55 Z"
            fill="#f8f9fb"
          />
        </svg>
      </div>
    </section>
  );
};
