import React from 'react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface SlantedPromoBannerProps {
  onExplore: () => void;
}

export const SlantedPromoBanner: React.FC<SlantedPromoBannerProps> = ({ onExplore }) => {
  return (
    <section className="py-10 sm:py-14 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="relative">
          {/* Secondary Offset Slanted Shadow Parallelogram on Bottom-Right (Exact match to image) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute -right-5 top-8 -bottom-3 w-48 bg-[#dfe4ea] md:-skew-x-[16deg] rounded-2xl z-0"
          />

          {/* Main Slanted Parallelogram Split Banner */}
          <div className="relative z-10 md:-skew-x-[16deg] rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12 min-h-[260px] bg-[#5a626a]">
            {/* Left Slanted Image Half */}
            <div className="md:col-span-5 relative h-56 md:h-auto overflow-hidden bg-[#cfd6dd]">
              <div className="w-full h-full md:skew-x-[16deg] md:scale-[1.22] origin-center">
                <ArchitecturalSvg type="promo-house" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Dark Charcoal Slanted Content Half */}
            <div className="md:col-span-7 bg-[#5c646c] text-white py-8 px-6 sm:px-12 flex flex-col justify-center">
              <div className="md:skew-x-[16deg] space-y-3.5 max-w-md">
                {/* Heading Bar */}
                <div>
                  <div className="inline-block bg-[#adb5bd]/80 text-[#2b3035] px-3.5 py-1 rounded-xs mb-1.5">
                    <h2 className="text-sm sm:text-base font-extrabold tracking-tight">
                      Find The Best Property Value With Us
                    </h2>
                  </div>
                </div>

                {/* 3 Subtitle Lines + Text */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Every listed residence undergoes comprehensive deed authenticity, structural grading, and independent market valuation.
                  </p>
                  <div className="w-full h-2 bg-[#8d96a0]/60 rounded-full" />
                  <div className="w-5/6 h-2 bg-[#8d96a0]/50 rounded-full" />
                  <div className="w-2/3 h-1.5 bg-[#8d96a0]/40 rounded-full" />
                </div>

                {/* White Rounded Pill CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onExplore}
                    className="px-7 py-2 rounded-full text-xs font-extrabold text-[#495057] bg-[#f1f3f6] hover:bg-white transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Explore Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
