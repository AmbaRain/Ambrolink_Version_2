import React from 'react';
import { Home, Building2, Key, BedDouble, Building, Wrench, ArrowRight } from 'lucide-react';
import { EXPLORE_CATEGORIES } from '../data/mockData';

interface CategoryGridProps {
  onSelectCategory: (catKey: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Home':
        return <Home className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
      case 'Key':
        return <Key className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
      case 'BedDouble':
        return <BedDouble className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
      case 'Building':
        return <Building className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
      default:
        return <Home className="w-7 h-7 text-[#495057] stroke-[2.2]" />;
    }
  };

  const mapToFilterKey = (title: string): string => {
    if (title.includes('Villa')) return 'villas';
    if (title.includes('Apartment')) return 'apartments';
    if (title.includes('Commercial')) return 'commercial';
    if (title.includes('Rental')) return 'apartments';
    return 'all';
  };

  return (
    <section id="categories" className="pt-8 pb-10 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching wireframe dark bar + 2 subtitle lines + right pill arrow */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="inline-block bg-[#68717a] text-white px-3.5 py-1 rounded-xs">
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
                Explore By Category
              </h2>
            </div>
            <p className="text-xs font-medium text-[#6c757d]">
              Browse architectural properties organized by residence classification
            </p>
            <div className="w-36 h-1.5 bg-[#cbd2d9] rounded-full" />
          </div>

          <button
            onClick={() => {
              onSelectCategory('all');
              document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 text-xs font-bold text-[#5a626a] hover:text-[#343a40] self-start sm:self-auto cursor-pointer"
          >
            <span className="px-4 py-1 bg-[#adb5bd] group-hover:bg-[#68717a] text-white rounded-full text-[11px] transition-colors">
              All Types
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {EXPLORE_CATEGORIES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectCategory(mapToFilterKey(item.title));
                const target = document.getElementById('properties');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#f1f3f6] rounded-xl border border-slate-200/80 p-5 flex flex-col items-center text-center hover:bg-[#e6eaef] hover:shadow-sm transition-all duration-300 group cursor-pointer"
            >
              <div className="py-1 transition-transform group-hover:scale-110">
                {getCategoryIcon(item.icon)}
              </div>

              <h3 className="mt-2.5 text-xs font-extrabold text-[#495057] line-clamp-1">
                {item.title}
              </h3>
              <div className="mt-1.5 w-14 h-1.5 bg-[#9aa3ad] rounded-full" />

              <p className="mt-1.5 text-[10px] text-[#6c757d] font-semibold">
                {item.count}
              </p>
              <div className="mt-1 w-10 h-1 bg-[#cbd2d9] rounded-full" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
