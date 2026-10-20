import React from 'react';
import { Property } from '../types/property';
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface FeaturedPropertiesProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  selectedCategory: string;
  onClearFilters: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  selectedCategory,
  onClearFilters,
}) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="properties" className="relative pt-8 pb-20 bg-[#f1f3f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching the exact dark title bar + 2 subtitle lines + right pill arrow */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="inline-block bg-[#68717a] text-white px-3.5 py-1 rounded-xs">
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
                Featured Properties
              </h2>
            </div>
            <p className="text-xs font-medium text-[#6c757d]">
              Hand-picked modern residences available for immediate acquisition
            </p>
            <div className="w-36 h-1.5 bg-[#cbd2d9] rounded-full" />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {selectedCategory !== 'all' && (
              <button
                onClick={onClearFilters}
                className="text-xs font-semibold text-[#5a626a] hover:text-[#343a40] underline mr-2 cursor-pointer"
              >
                Show All (8)
              </button>
            )}
            <button
              onClick={onClearFilters}
              className="group flex items-center gap-2 text-xs font-bold text-[#5a626a] hover:text-[#343a40] cursor-pointer"
            >
              <span className="px-4 py-1 bg-[#adb5bd] group-hover:bg-[#68717a] text-white rounded-full text-[11px] transition-colors">
                View All
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Empty State */}
        {properties.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <h3 className="text-base font-bold text-[#495057] mb-2">No Properties Match Filter</h3>
            <p className="text-xs text-[#6c757d] mb-5">
              Reset your search filters to view all 8 featured residences.
            </p>
            <button
              onClick={onClearFilters}
              className="px-5 py-2 bg-[#68717a] text-white rounded-full text-xs font-bold hover:bg-[#495057] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* 8 Property Cards (4 Columns x 2 Rows matching reference image) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {properties.map((prop) => {
              const isFav = favorites.includes(prop.id);

              return (
                <div
                  key={prop.id}
                  onClick={() => onSelectProperty(prop)}
                  className="bg-[#f8f9fb] rounded-xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  {/* Upper Image Area with Twin Mountains + Sun + Pill Tag + Heart */}
                  <div className="relative aspect-[16/11] bg-[#c5ccd3] overflow-hidden">
                    <ArchitecturalSvg
                      type="card-mountain"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top-Left Pill Badge */}
                    <div className="absolute top-3 left-3 bg-[#76808a] text-white text-[9px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                      {prop.tag}
                    </div>

                    {/* Top-Right Circular Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(prop.id);
                      }}
                      aria-label={isFav ? 'Remove from favorites' : 'Save to favorites'}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#e9ecef] hover:bg-white flex items-center justify-center text-[#5a626a] transition-all shadow-2xs active:scale-90 cursor-pointer"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isFav ? 'fill-[#495057] text-[#495057]' : 'fill-[#6c757d]/40 text-[#5a626a]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Lower Content matching wireframe bars + real data */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#f8f9fb]">
                    <div className="space-y-1.5">
                      {/* Price Bar */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-[#495057] tabular-nums">
                          {formatCurrency(prop.price)}
                        </span>
                        <span className="w-12 h-1.5 bg-[#8d96a0] rounded-full" />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-[#5a626a] text-xs line-clamp-1 group-hover:text-[#343a40]">
                        {prop.title}
                      </h3>

                      {/* Subtle second wireframe bar */}
                      <div className="w-3/4 h-1.5 bg-[#cfd6dd] rounded-full" />

                      {/* Location Pin Row */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#6c757d] pt-0.5">
                        <MapPin className="w-3 h-3 text-[#5a626a] shrink-0" />
                        <span className="truncate font-medium">{prop.city}</span>
                      </div>
                    </div>

                    {/* Bottom Specs Row (Bed, Bath, Area, Link) */}
                    <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-[#5a626a] font-semibold">
                      <span className="flex items-center gap-1" title={`${prop.beds} Bedrooms`}>
                        <Bed className="w-3.5 h-3.5 text-[#68717a]" />
                        <span>{prop.beds}</span>
                      </span>
                      <span className="flex items-center gap-1" title={`${prop.baths} Bathrooms`}>
                        <Bath className="w-3.5 h-3.5 text-[#68717a]" />
                        <span>{prop.baths}</span>
                      </span>
                      <span className="flex items-center gap-1" title={`${prop.sqft} Sqft`}>
                        <Square className="w-3 h-3 text-[#68717a]" />
                        <span className="tabular-nums">{prop.sqft}</span>
                      </span>
                      <span className="w-4 h-1.5 bg-[#adb5bd] rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Smooth Bottom Wave Transition into Trust Badges Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[28px] sm:h-[42px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C480,65 960,-10 1440,35 L1440,60 L0,60 Z"
            fill="#e9ecef"
          />
        </svg>
      </div>
    </section>
  );
};
