import React, { useState } from 'react';
import { Property } from '../types/property';
import {
  X,
  Heart,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Share2,
  Car,
  Compass,
  Play,
} from 'lucide-react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onLaunchVirtualTour: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onLaunchVirtualTour,
}) => {
  if (!property) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'floorplan'>('overview');
  const [tourDate, setTourDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleBookTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourDate || !clientName) return;
    setBookingConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
              {property.tag}
            </span>
            <span className="text-xs text-slate-500">{property.architectureStyle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(property.id)}
              aria-label="Toggle favorite"
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`}
              />
            </button>
            <button
              onClick={onClose}
              aria-label="Close details"
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Main Visual Image Hero */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            {activeTab === 'floorplan' ? (
              <div className="w-full h-full bg-slate-900 text-slate-300 p-8 flex flex-col justify-center items-center font-mono">
                <Compass className="w-12 h-12 text-slate-400 mb-3" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Architectural CAD Blueprint</h4>
                <p className="text-xs text-slate-400 mt-1 text-center max-w-md">
                  Scale: 1:50 · Dual-Level Master Suite & Cantilevered Terrace · Living Volume 4,200 sqft
                </p>
                <div className="mt-4 border border-dashed border-slate-600 p-4 rounded-lg text-center text-xs text-slate-400">
                  Ground Floor: 2,400 sqft · Upper Master Suite: 1,800 sqft · Covered Travertine Loggia: 650 sqft
                </div>
              </div>
            ) : (
              <>
                <ArchitecturalSvg type={property.svgSceneType} className="w-full h-full object-cover" />
                <button
                  onClick={onLaunchVirtualTour}
                  className="absolute bottom-4 right-4 bg-slate-900/90 hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur-xs transition-transform active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Launch 3D Virtual Tour</span>
                </button>
              </>
            )}
          </div>

          {/* Primary Details Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{property.location}, {property.city}</span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                {formatCurrency(property.price)}
              </div>
              <span className="text-xs text-slate-400 font-medium">EST. $14,200/month</span>
            </div>
          </div>

          {/* Key Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-100">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <Bed className="w-5 h-5 text-slate-600" />
              <div>
                <span className="block text-xs font-bold text-slate-900">{property.beds} Bedrooms</span>
                <span className="text-[10px] text-slate-400">Master suites included</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <Bath className="w-5 h-5 text-slate-600" />
              <div>
                <span className="block text-xs font-bold text-slate-900">{property.baths} Bathrooms</span>
                <span className="text-[10px] text-slate-400">En-suite designer baths</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <Maximize className="w-5 h-5 text-slate-600" />
              <div>
                <span className="block text-xs font-bold text-slate-900 tabular-nums">{property.sqft} sqft</span>
                <span className="text-[10px] text-slate-400">Interior conditioned</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
              <Car className="w-5 h-5 text-slate-600" />
              <div>
                <span className="block text-xs font-bold text-slate-900">{property.garage} Car Garage</span>
                <span className="text-[10px] text-slate-400">Built in {property.yearBuilt}</span>
              </div>
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Architectural Narrative</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Curated Amenities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Notable Amenities & Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 px-3 py-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Showing Scheduler & Agent Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-100">
            {/* Agent Info */}
            <div className="md:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {property.agent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{property.agent.name}</h5>
                  <p className="text-[11px] text-slate-500">{property.agent.role}</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{property.agent.email}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Listing License #94012</span>
              </div>
            </div>

            {/* Schedule Showing Form */}
            <div className="md:col-span-7 bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Schedule Private Viewing
              </h5>

              {bookingConfirmed ? (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-emerald-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Viewing Requested!</span>
                  </div>
                  <p>Our advisor {property.agent.name} will contact you shortly to confirm access on {tourDate}.</p>
                </div>
              ) : (
                <form onSubmit={handleBookTour} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Eleanor Rigby"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    Confirm Tour Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
