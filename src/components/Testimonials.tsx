import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="pt-8 pb-12 bg-[#eef1f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header matching the reference image */}
        <div className="flex flex-col items-center text-center mb-10 space-y-2">
          <div className="inline-block bg-[#68717a] text-white px-5 py-1 rounded-xs">
            <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
              Client Experiences & Reviews
            </h2>
          </div>
          <p className="text-xs font-medium text-[#6c757d] max-w-md">
            Verified feedback from homeowners and architectural collectors
          </p>
          <div className="w-56 h-1.5 bg-[#adb5bd] rounded-full" />
          <div className="w-40 h-1.5 bg-[#cbd2d9] rounded-full" />
        </div>

        {/* 3 Testimonial Cards Flanked by Left & Right Circular Arrow Buttons */}
        <div className="relative flex items-center gap-3 sm:gap-5">
          {/* Left Circular Arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden sm:flex w-8 h-8 rounded-full bg-[#dfe4ea] hover:bg-[#cbd2d9] text-[#495057] items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 3 Cards Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={t.id}
                className={`bg-[#f8f9fb] rounded-xl border p-5 flex flex-col justify-between transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-[#8d96a0] shadow-md bg-white'
                    : 'border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="space-y-3.5">
                  {/* Top Row: Circular User Avatar + Name & Bars */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#cbd2d9] text-[#5a626a] flex items-center justify-center shrink-0 overflow-hidden">
                      <User className="w-6 h-6 fill-[#68717a] text-[#68717a] mt-1" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-xs font-extrabold text-[#495057] truncate">
                        {t.name}
                      </h4>
                      <div className="w-3/4 h-1.5 bg-[#adb5bd] rounded-full" />
                      <div className="w-1/2 h-1.5 bg-[#cfd6dd] rounded-full" />
                    </div>
                  </div>

                  {/* Review Quote + Wireframe Lines */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-[#5a626a] leading-relaxed line-clamp-3">
                      "{t.content}"
                    </p>
                    <div className="w-full h-1.5 bg-[#dbe0e6] rounded-full" />
                    <div className="w-2/3 h-1.5 bg-[#dbe0e6] rounded-full" />
                  </div>
                </div>

                {/* Bottom 5 Dark Stars */}
                <div className="mt-4 pt-2 flex items-center gap-1 text-[#5a626a]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#5a626a] text-[#5a626a]" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Circular Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden sm:flex w-8 h-8 rounded-full bg-[#dfe4ea] hover:bg-[#cbd2d9] text-[#495057] items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
