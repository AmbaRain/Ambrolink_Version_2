import React, { useState } from 'react';
import { X, CheckCircle2, Home, Upload, DollarSign, MapPin } from 'lucide-react';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitProperty: (data: any) => void;
}

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({
  isOpen,
  onClose,
  onSubmitProperty,
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [city, setCity] = useState('Beverly Hills, CA');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<'villas' | 'apartments' | 'penthouses'>('villas');
  const [beds, setBeds] = useState('4');
  const [baths, setBaths] = useState('4');
  const [sqft, setSqft] = useState('3500');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price) return;

    onSubmitProperty({
      title,
      city,
      price: parseInt(price.replace(/[^0-9]/g, '')) || 2500000,
      category,
      beds: parseInt(beds) || 3,
      baths: parseInt(baths) || 3,
      sqft: parseInt(sqft) || 2800,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Home className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">List Architectural Property</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">Listing Submission Received!</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Our architectural curation board will review your property deed and specifications within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Property Residence Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The Cantilever Stone Pavilion"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Market Location
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900 font-medium bg-white"
                  >
                    <option value="Beverly Hills, CA">Beverly Hills, CA</option>
                    <option value="Aspen, CO">Aspen, CO</option>
                    <option value="Manhattan, NY">Manhattan, NY</option>
                    <option value="Malibu, CA">Malibu, CA</option>
                    <option value="Austin, TX">Austin, TX</option>
                    <option value="Seattle, WA">Seattle, WA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Asking Price (USD)
                  </label>
                  <input
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 3,250,000"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Beds
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Baths
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Sqft Area
                  </label>
                  <input
                    type="number"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900 font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                >
                  Submit Property to Private Index
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
