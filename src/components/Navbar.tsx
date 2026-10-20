import React, { useState } from 'react';
import { Home, Heart, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenListProperty: () => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoritesCount,
  onOpenFavorites,
  onOpenListProperty,
  onOpenAuth,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Properties', href: '#properties' },
    { label: 'Services', href: '#categories' },
    { label: 'Virtual Tour', href: '#virtual-tour' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#f4f6f8]/95 backdrop-blur-md border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Logo Placeholder Container */}
        <a
          href="#hero"
          aria-label="Logo placeholder"
          className="w-28 h-9 rounded-lg border-2 border-dashed border-[#8d96a0] bg-[#e9ecef]/80 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-[#6c757d] shrink-0 hover:border-[#495057] transition-colors"
        >
          Logo
        </a>

        {/* Zone 2: 5 Navigation Links with pill-line accents */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#6c757d]">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex flex-col items-center gap-1 hover:text-[#343a40] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              <span>{link.label}</span>
              <span
                className={`h-1 rounded-full transition-all ${
                  idx === 0
                    ? 'w-7 bg-[#6c757d] group-hover:bg-[#343a40]'
                    : 'w-6 bg-[#adb5bd]/70 group-hover:bg-[#495057]'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Right Controls (Heart, User, Rounded Pill CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenFavorites}
            aria-label="View saved favorite properties"
            className="relative p-2 rounded-full text-[#495057] hover:bg-slate-200/70 transition-colors cursor-pointer"
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-[#495057] text-[#495057]' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#495057] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center tabular-nums">
                {favoritesCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenAuth}
            aria-label="Account sign in"
            className="p-2 rounded-full text-[#495057] hover:bg-slate-200/70 transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenListProperty}
            className="hidden sm:inline-flex items-center px-5 py-2 text-xs font-bold text-white bg-[#68717a] rounded-full hover:bg-[#495057] transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            List Property
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#495057] hover:bg-slate-200/60"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#f4f6f8] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-[#495057] hover:bg-slate-200/60 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenListProperty();
            }}
            className="w-full mt-2 py-2.5 text-center text-xs font-bold text-white bg-[#68717a] rounded-full"
          >
            List Property
          </button>
        </div>
      )}
    </header>
  );
};
