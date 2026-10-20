import React from 'react';
import { Play, Check } from 'lucide-react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface VirtualTourBannerProps {
  onOpenVirtualTour: () => void;
}

export const VirtualTourBanner: React.FC<VirtualTourBannerProps> = ({ onOpenVirtualTour }) => {
  const bullets = [
    {
      title: 'High-Definition 360° Spatial Walkthroughs',
      subtitle: 'Navigate fluidly through living zones, private courtyards, and terraces',
    },
    {
      title: 'Certified CAD Floor Plans & Elevations',
      subtitle: 'Inspect structural beam spans, ceiling heights, and window dimensions',
    },
    {
      title: 'Live Guided Video Tour With Senior Partner',
      subtitle: 'Request a synchronized walk-through with our licensed architectural advisor',
    },
  ];

  return (
    <section id="virtual-tour" className="relative py-12 sm:py-16 bg-[#f1f3f6] overflow-hidden">
      {/* Top Wave Curve Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[22px] sm:h-[32px] block"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,15 C980,45 460,0 0,30 Z" fill="#f8f9fb" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side: Dark Title Bar + Subtitle Lines + 3 Circular Checkmark Rows */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-block bg-[#68717a] text-white px-3.5 py-1 rounded-xs">
                <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
                  Virtual 3D Property Tours
                </h2>
              </div>
              <p className="text-xs font-medium text-[#6c757d]">
                Step inside any residence from anywhere in the world with millimeter accuracy.
              </p>
              <div className="w-4/5 h-1.5 bg-[#cbd2d9] rounded-full" />
            </div>

            {/* 3 Checkmark Bullet Rows matching wireframe */}
            <div className="space-y-4 pt-1">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#68717a] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs font-bold text-[#495057] leading-tight">
                      {b.title}
                    </h4>
                    <p className="text-[11px] text-[#6c757d] line-clamp-1">
                      {b.subtitle}
                    </p>
                    <div className="w-2/3 h-1.5 bg-[#cbd2d9] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Slanted Parallelogram Living Room Video Card + Offset Right Wing */}
          <div className="lg:col-span-7 px-2 sm:px-6">
            <div className="relative">
              {/* Offset Slanted Wing on the Right (Exact match to reference image) */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute -right-5 top-5 -bottom-3 w-44 bg-[#e2e6ec] md:-skew-x-[16deg] rounded-2xl z-0"
              />

              {/* Slanted Parallelogram Video Card */}
              <div
                onClick={onOpenVirtualTour}
                className="relative z-10 md:-skew-x-[16deg] rounded-2xl overflow-hidden shadow-lg border border-white/60 bg-[#cfd6dd] group cursor-pointer aspect-[16/9]"
              >
                <div className="w-full h-full md:skew-x-[16deg] md:scale-[1.18] origin-center">
                  <ArchitecturalSvg
                    type="interior-living-room"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Centered Play Button with White Ring & Dark Circle (Counter-skewed) */}
                <div className="absolute inset-0 flex items-center justify-center md:skew-x-[16deg]">
                  <div className="w-14 h-14 rounded-full bg-white/85 p-1.5 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-[#5a626a] text-white flex items-center justify-center">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Curve Divider into Prime Locations */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[24px] sm:h-[36px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,15 C520,55 960,-10 1440,25 L1440,50 L0,50 Z"
            fill="#f8f9fb"
          />
        </svg>
      </div>
    </section>
  );
};
