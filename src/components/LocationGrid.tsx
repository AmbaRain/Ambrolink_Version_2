import React from 'react';
import { Home, Building2, BedDouble, Building, MapPin, ArrowRight } from 'lucide-react';
import { PRIME_LOCATIONS } from '../data/mockData';

interface LocationGridProps {
  onSelectLocation: (city: string) => void;
}

export const LocationGrid: React.FC<LocationGridProps> = ({ onSelectLocation }) => {
  const getLocationIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Home className="w-5 h-5 text-[#495057]" />;
      case 1:
        return <Building2 className="w-5 h-5 text-[#495057]" />;
      case 2:
        return <Building2 className="w-5 h-5 text-[#495057]" />;
      case 3:
        return <BedDouble className="w-5 h-5 text-[#495057]" />;
      case 4:
        return <Building className="w-5 h-5 text-[#495057]" />;
      case 5:
        return <MapPin className="w-5 h-5 text-[#495057]" />;
      default:
        return <Building className="w-5 h-5 text-[#495057]" />;
    }
  };

  return (
    <section id="locations" className="relative pt-8 pb-20 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching wireframe dark bar + subtitle lines + right pill arrow */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="inline-block bg-[#68717a] text-white px-3.5 py-1 rounded-xs">
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
                Prime Locations
              </h2>
            </div>
            <p className="text-xs font-medium text-[#6c757d]">
              Explore architectural residences across our highest-demand metropolitan markets
            </p>
            <div className="w-36 h-1.5 bg-[#cbd2d9] rounded-full" />
          </div>

          <button
            onClick={() => {
              onSelectLocation('all');
              document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 text-xs font-bold text-[#5a626a] hover:text-[#343a40] self-start sm:self-auto cursor-pointer"
          >
            <span className="px-4 py-1 bg-[#adb5bd] group-hover:bg-[#68717a] text-white rounded-full text-[11px] transition-colors">
              All Cities
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 6 Location Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PRIME_LOCATIONS.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => {
                onSelectLocation(loc.city);
                const target = document.getElementById('properties');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-xl border border-slate-200/80 p-4 flex flex-col items-center text-center hover:border-slate-300 hover:shadow-sm transition-all duration-300 group cursor-pointer"
            >
              {/* Circular Icon Badge */}
              <div className="w-11 h-11 rounded-full bg-[#e9ecef] flex items-center justify-center transition-transform group-hover:scale-110">
                {getLocationIcon(idx)}
              </div>

              <h3 className="mt-2.5 text-xs font-extrabold text-[#495057] truncate w-full">
                {loc.city}
              </h3>

              {/* Primary Dark Indicator Bar */}
              <div className="mt-1.5 w-14 h-1.5 bg-[#8d96a0] rounded-full" />

              <p className="mt-1.5 text-[10px] text-[#6c757d] font-semibold">
                {loc.propertiesCount} Listings · {loc.avgPrice}
              </p>

              {/* Secondary Light Bars */}
              <div className="mt-1 w-16 h-1 bg-[#cfd6dd] rounded-full" />
            </button>
          ))}
        </div>
      </div>

      {/* Smooth Sweeping Wave Curve into Testimonials Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[45px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C380,-5 920,65 1440,15 L1440,60 L0,60 Z"
            fill="#eef1f5"
          />
        </svg>
      </div>
    </section>
  );
};
