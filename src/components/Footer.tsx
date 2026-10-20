import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f1f3f6] border-t border-slate-200/80 text-[#5a626a] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Logo Placeholder + Subtitle Bars + 4 Circular Social Icons */}
          <div className="lg:col-span-3 space-y-3">
            <a
              href="#hero"
              aria-label="Logo placeholder"
              className="w-24 h-8 rounded-lg border-2 border-dashed border-[#8d96a0] bg-[#e9ecef]/80 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-[#6c757d] hover:border-[#495057] transition-colors"
            >
              Logo
            </a>

            <div className="space-y-1.5">
              <p className="text-[11px] text-[#6c757d] leading-snug">
                Curated architectural residences & verified escrow.
              </p>
              <div className="w-36 h-1.5 bg-[#adb5bd] rounded-full" />
              <div className="w-28 h-1.5 bg-[#cbd2d9] rounded-full" />
            </div>

            {/* 4 Circular Social Icons matching wireframe */}
            <div className="flex items-center gap-2.5 pt-1">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#hero"
                  aria-label="Social link"
                  className="w-6 h-6 rounded-full border-2 border-[#8d96a0] hover:border-[#495057] text-[#5a626a] hover:text-[#343a40] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle 3 Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4">
            {/* Link Col 1 */}
            <div className="space-y-2">
              <div className="inline-block bg-[#8d96a0] text-white px-2.5 py-0.5 rounded-xs text-[10px] font-bold uppercase">
                Properties
              </div>
              <ul className="space-y-1.5 text-[11px] font-medium text-[#6c757d]">
                <li><a href="#properties" className="hover:text-[#343a40]">Modern Villas</a></li>
                <li><a href="#properties" className="hover:text-[#343a40]">Penthouses</a></li>
                <li><a href="#properties" className="hover:text-[#343a40]">Apartments</a></li>
                <li><a href="#properties" className="hover:text-[#343a40]">Commercial</a></li>
                <li><a href="#properties" className="hover:text-[#343a40]">New Projects</a></li>
              </ul>
            </div>

            {/* Link Col 2 */}
            <div className="space-y-2">
              <div className="inline-block bg-[#8d96a0] text-white px-2.5 py-0.5 rounded-xs text-[10px] font-bold uppercase">
                Locations
              </div>
              <ul className="space-y-1.5 text-[11px] font-medium text-[#6c757d]">
                <li><a href="#locations" className="hover:text-[#343a40]">Beverly Hills</a></li>
                <li><a href="#locations" className="hover:text-[#343a40]">Miami Beach</a></li>
                <li><a href="#locations" className="hover:text-[#343a40]">Manhattan</a></li>
                <li><a href="#locations" className="hover:text-[#343a40]">Aspen</a></li>
                <li><a href="#locations" className="hover:text-[#343a40]">Austin</a></li>
              </ul>
            </div>

            {/* Link Col 3 */}
            <div className="space-y-2">
              <div className="inline-block bg-[#8d96a0] text-white px-2.5 py-0.5 rounded-xs text-[10px] font-bold uppercase">
                Advisory
              </div>
              <ul className="space-y-1.5 text-[11px] font-medium text-[#6c757d]">
                <li><a href="#virtual-tour" className="hover:text-[#343a40]">3D Virtual Tour</a></li>
                <li><a href="#reviews" className="hover:text-[#343a40]">Client Reviews</a></li>
                <li><a href="#categories" className="hover:text-[#343a40]">Escrow Audit</a></li>
                <li><a href="#hero" className="hover:text-[#343a40]">Privacy Policy</a></li>
                <li><a href="#hero" className="hover:text-[#343a40]">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          {/* Right Col: Rounded Feature Box with Dark Square Badge on Left (Exact match to footer right card in image) */}
          <div className="lg:col-span-3">
            <div className="bg-[#f8f9fb] border border-slate-200/90 rounded-xl p-3.5 flex items-center gap-3.5 shadow-2xs">
              <div className="w-11 h-11 rounded-lg bg-[#8d96a0] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1.5 min-w-0">
                <div className="text-[11px] font-extrabold text-[#495057] truncate">
                  Certified Brokerage
                </div>
                <div className="w-full h-1.5 bg-[#adb5bd] rounded-full" />
                <div className="w-4/5 h-1.5 bg-[#cbd2d9] rounded-full" />
                <div className="w-3/5 h-1.5 bg-[#dbe0e6] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider & 4 Centered Dash Links matching wireframe bottom */}
        <div className="mt-8 pt-5 border-t border-slate-300/70 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4">
            <span className="w-7 h-1.5 bg-[#adb5bd] rounded-full" />
            <span className="w-7 h-1.5 bg-[#cbd2d9] rounded-full" />
            <span className="w-7 h-1.5 bg-[#cbd2d9] rounded-full" />
            <span className="w-7 h-1.5 bg-[#cbd2d9] rounded-full" />
          </div>
          <p className="text-[10px] text-[#8d96a0] font-medium">
            © 2026 HavenEstates Brokerage Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
