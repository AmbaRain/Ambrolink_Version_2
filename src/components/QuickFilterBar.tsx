import React from 'react';
import { Home, Building2, BedDouble, Building, MapPin, Tag } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

interface QuickFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const QuickFilterBar: React.FC<QuickFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6 stroke-[2.2]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 stroke-[2.2]" />;
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 stroke-[2.2]" />;
      case 'Building':
        return <Building className="w-6 h-6 stroke-[2.2]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 stroke-[2.2]" />;
      case 'Tag':
        return <Tag className="w-6 h-6 stroke-[2.2]" />;
      default:
        return <Home className="w-6 h-6 stroke-[2.2]" />;
    }
  };

  return (
    <section className="relative bg-[#f8f9fb] pt-2 pb-12 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-7">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? 'all' : cat.key)}
                className={`flex flex-col items-center justify-center py-4 px-3 rounded-2xl transition-all text-center group cursor-pointer ${
                  isSelected
                    ? 'bg-[#e2e6ec] text-[#343a40] shadow-xs ring-1 ring-[#68717a]/40'
                    : 'bg-[#eef0f4] text-[#495057] hover:bg-[#e5e9f0]'
                }`}
              >
                <div className="text-[#495057] transition-transform group-hover:scale-110">
                  {getIcon(cat.iconName)}
                </div>

                <span className="mt-2.5 text-[11px] font-bold text-[#495057] whitespace-nowrap">
                  {cat.label}
                </span>

                {/* Pill Indicator Bar Underneath Icon (Exact match to wireframe) */}
                <div
                  className={`mt-1.5 h-1.5 w-10 rounded-full transition-all ${
                    isSelected ? 'bg-[#495057]' : 'bg-[#8d96a0] group-hover:bg-[#5a626a]'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Smooth Bottom Wave Transition into Featured Properties Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[28px] sm:h-[42px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C360,65 820,-10 1440,30 L1440,60 L0,60 Z"
            fill="#f1f3f6"
          />
        </svg>
      </div>
    </section>
  );
};
