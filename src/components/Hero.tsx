import React from 'react';
import { Search, MapPin, Home, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface HeroProps {
  locationFilter: string;
  setLocationFilter: (val: string) => void;
  typeFilter: string;
  setTypeFilter: (val: string) => void;
  priceFilter: string;
  setPriceFilter: (val: string) => void;
  onSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  priceFilter,
  setPriceFilter,
  onSearch,
}) => {
  return (
    <section id="hero" className="relative pt-10 pb-28 sm:pb-36 overflow-hidden bg-[#dfe4ea]">
      {/* Background Sweeping Hill Curves & Right House Illustration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right-side Architectural Villa + Sun + Botanical Plant */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] opacity-95">
          <ArchitecturalSvg type="hero-house" className="w-full h-full object-cover object-right" />
        </div>

        {/* Left Sweeping Hill Curves (Exact match to reference image left slopes) */}
        <svg
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Back Lighter Left Slope */}
          <path
            d="M0,120 C160,240 310,370 520,490 L0,560 Z"
            fill="#b8c0c8"
            opacity="0.7"
          />
          {/* Front Darker Left Slope */}
          <path
            d="M0,210 C120,310 240,420 390,520 L0,560 Z"
            fill="#8d959e"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Main Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Hero Headline Block */}
        <div className="max-w-2xl mx-auto pt-4 sm:pt-8 space-y-3 text-center flex flex-col items-center">
          <div className="space-y-2 flex flex-col items-center w-full">
            <div className="inline-block bg-[#68717a] text-white px-5 py-1.5 rounded-sm shadow-2xs">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                Find Your Modern Dream Home
              </h1>
            </div>
            <div className="inline-block bg-[#68717a]/90 text-white/95 px-4 py-1 rounded-sm">
              <p className="text-sm sm:text-base font-bold tracking-tight">
                Curated Luxury Villas & Architectural Estates
              </p>
            </div>
          </div>

          <div className="space-y-1.5 pt-1 max-w-md flex flex-col items-center">
            <p className="text-xs sm:text-sm font-medium text-[#5a626a] bg-[#b0b8c1]/50 backdrop-blur-xs px-3 py-1 rounded-xs">
              Verified structural ownership, transparent escrow, and 3D virtual walkthroughs.
            </p>
            <div className="w-3/4 h-2 bg-[#b0b8c1]/70 rounded-full" />
          </div>
        </div>

        {/* Floating White Search Bar (Centered across lower Hero exactly like image) */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
            }}
            className="bg-[#f8f9fb] rounded-2xl shadow-lg shadow-slate-900/10 border border-white/80 px-4 py-3 flex flex-col md:flex-row items-stretch md:items-center gap-3"
          >
            {/* Field 1: Location */}
            <div className="flex-1 flex items-center justify-between gap-2 px-2 py-1.5 rounded-xl hover:bg-slate-200/50 transition-colors">
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <MapPin className="w-4 h-4 text-[#5a626a] shrink-0" />
                <div className="w-full min-w-0">
                  <select
                    aria-label="Location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#495057] focus:outline-none cursor-pointer appearance-none truncate"
                  >
                    <option value="all">All Locations</option>
                    <option value="Beverly Hills">Beverly Hills, CA</option>
                    <option value="Aspen">Aspen, CO</option>
                    <option value="Manhattan">Manhattan, NY</option>
                    <option value="Malibu">Malibu, CA</option>
                    <option value="Seattle">Seattle, WA</option>
                    <option value="Palm Springs">Palm Springs, CA</option>
                    <option value="Chicago">Chicago, IL</option>
                    <option value="Austin">Austin, TX</option>
                  </select>
                  <div className="w-16 h-1.5 bg-[#cbd2d9] rounded-full mt-1" />
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#6c757d] shrink-0 pointer-events-none" />
            </div>

            <div className="hidden md:block w-px h-7 bg-slate-300/70" />

            {/* Field 2: Property Type */}
            <div className="flex-1 flex items-center justify-between gap-2 px-2 py-1.5 rounded-xl hover:bg-slate-200/50 transition-colors">
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <Home className="w-4 h-4 text-[#5a626a] shrink-0" />
                <div className="w-full min-w-0">
                  <select
                    aria-label="Property Type"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#495057] focus:outline-none cursor-pointer appearance-none truncate"
                  >
                    <option value="all">Property Type</option>
                    <option value="villas">Modernist Villas</option>
                    <option value="apartments">Apartments</option>
                    <option value="penthouses">Penthouses</option>
                  </select>
                  <div className="w-16 h-1.5 bg-[#cbd2d9] rounded-full mt-1" />
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#6c757d] shrink-0 pointer-events-none" />
            </div>

            <div className="hidden md:block w-px h-7 bg-slate-300/70" />

            {/* Field 3: Price Range */}
            <div className="flex-1 flex items-center justify-between gap-2 px-2 py-1.5 rounded-xl hover:bg-slate-200/50 transition-colors">
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <SlidersHorizontal className="w-4 h-4 text-[#5a626a] shrink-0" />
                <div className="w-full min-w-0">
                  <select
                    aria-label="Price Range"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#495057] focus:outline-none cursor-pointer appearance-none truncate"
                  >
                    <option value="all">Price Range</option>
                    <option value="under-2m">Under $2,000,000</option>
                    <option value="2m-3.5m">$2M - $3.5M</option>
                    <option value="3.5m-plus">$3.5M+</option>
                  </select>
                  <div className="w-16 h-1.5 bg-[#cbd2d9] rounded-full mt-1" />
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#6c757d] shrink-0 pointer-events-none" />
            </div>

            {/* Rounded Pill Search Button */}
            <button
              type="submit"
              className="px-8 py-2.5 bg-[#68717a] hover:bg-[#495057] text-white rounded-full transition-all flex items-center justify-center shrink-0 shadow-xs active:scale-95 cursor-pointer"
              aria-label="Search properties"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Prominent Bottom White S-Curve Wave Cutout (Rises high on left, dips on right) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[55px] sm:h-[85px] md:h-[110px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C240,-10 520,25 840,85 C1120,130 1320,95 1440,55 L1440,120 L0,120 Z"
            fill="#f8f9fb"
          />
        </svg>
      </div>
    </section>
  );
};
