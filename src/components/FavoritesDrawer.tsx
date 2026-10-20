import React from 'react';
import { Property } from '../types/property';
import { X, Trash2, ArrowRight, Heart } from 'lucide-react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  allProperties: Property[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  allProperties,
  onToggleFavorite,
  onSelectProperty,
}) => {
  if (!isOpen) return null;

  const savedListings = allProperties.filter((p) => favorites.includes(p.id));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-extrabold text-slate-900 text-base">Saved Residences</h3>
            <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-full tabular-nums">
              {savedListings.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedListings.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-sm">No Saved Properties Yet</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Tap the heart icon on any residence to save it to your private portfolio.
              </p>
            </div>
          ) : (
            savedListings.map((prop) => (
              <div
                key={prop.id}
                className="bg-slate-50 rounded-xl border border-slate-200/80 p-3 flex gap-3 hover:border-slate-300 transition-all group"
              >
                <div
                  className="w-24 h-20 rounded-lg bg-slate-200 overflow-hidden shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                >
                  <ArchitecturalSvg type={prop.svgSceneType} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h5
                      onClick={() => {
                        onSelectProperty(prop);
                        onClose();
                      }}
                      className="font-bold text-slate-900 text-xs line-clamp-1 cursor-pointer hover:text-slate-700"
                    >
                      {prop.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 truncate">{prop.city}</p>
                    <div className="text-xs font-bold text-slate-900 tabular-nums mt-1">
                      {formatCurrency(prop.price)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        onSelectProperty(prop);
                        onClose();
                      }}
                      className="text-[11px] font-semibold text-slate-900 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onToggleFavorite(prop.id)}
                      className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedListings.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <button
              onClick={() => {
                alert('A portfolio brochure has been prepared for download.');
              }}
              className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-sm"
            >
              Export Portfolio PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
