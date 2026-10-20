import React, { useState } from 'react';
import { X, RotateCcw, ZoomIn, ZoomOut, Maximize2, Compass, Eye, Info, Volume2, VolumeX } from 'lucide-react';
import { ArchitecturalSvg } from './ArchitecturalSvg';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeRoom, setActiveRoom] = useState<'living' | 'master' | 'pool' | 'kitchen'>('living');
  const [panX, setPanX] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [muted, setMuted] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const rooms = [
    { id: 'living', label: 'Living Pavilion', time: '11:00 AM Solar Study' },
    { id: 'master', label: 'Master Suite', time: '2:30 PM Sunlight' },
    { id: 'pool', label: 'Negative-Edge Terrace', time: 'Golden Hour Dusk' },
    { id: 'kitchen', label: 'Gourmet Kitchen', time: 'Architectural Details' },
  ];

  const hotspots = {
    living: [
      { id: 'h1', x: '35%', y: '40%', title: 'Floor-To-Ceiling Low-E Glass', desc: '14ft motorized sliding acoustic glass curtain panels.' },
      { id: 'h2', x: '65%', y: '75%', title: 'Honed Roman Travertine', desc: 'Continuous indoor-outdoor zero-threshold slab installation.' },
    ],
    master: [
      { id: 'h3', x: '50%', y: '50%', title: 'Cantilever Balcony', desc: 'Structural post-tensioned slab with frameless glass railing.' },
    ],
    pool: [
      { id: 'h4', x: '45%', y: '65%', title: '60ft Negative Edge Reflection Pool', desc: 'Ozone-treated saltwater filtration with concealed infinity trough.' },
    ],
    kitchen: [
      { id: 'h5', x: '55%', y: '55%', title: 'Calacatta Marble Monolith Island', desc: 'Bookmatched seamless Italian marble with integrated induction burners.' },
    ],
  };

  const handlePan = (delta: number) => {
    setPanX((prev) => Math.min(Math.max(prev + delta, -200), 200));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in">
      <div className="relative w-full max-w-5xl h-[88vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
        {/* Top Overlay Bar */}
        <div className="px-6 py-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between z-20 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Compass className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold">The Glass Horizon: 360° Virtual Walkthrough</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
                  4K SPATIAL 3D
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Current View: {rooms.find(r => r.id === activeRoom)?.label} · {rooms.find(r => r.id === activeRoom)?.time}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMuted(!muted)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title={muted ? 'Unmute Ambient Sound' : 'Mute'}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={() => {
                setPanX(0);
                setZoom(1);
              }}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport Canvas */}
        <div className="relative flex-1 bg-slate-950 overflow-hidden cursor-grab active:cursor-grabbing select-none flex items-center justify-center">
          <div
            className="w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `scale(${zoom}) translateX(${panX}px)`,
            }}
          >
            {activeRoom === 'living' && (
              <ArchitecturalSvg type="interior-living-room" className="w-full h-full object-cover" />
            )}
            {activeRoom === 'master' && (
              <ArchitecturalSvg type="hero-house" className="w-full h-full object-cover" />
            )}
            {activeRoom === 'pool' && (
              <ArchitecturalSvg type="promo-house" className="w-full h-full object-cover" />
            )}
            {activeRoom === 'kitchen' && (
              <ArchitecturalSvg type="interior-living-room" className="w-full h-full object-cover scale-110" />
            )}
          </div>

          {/* Interactive Hotspot Indicators */}
          {(hotspots[activeRoom] || []).map((spot) => (
            <div
              key={spot.id}
              className="absolute z-10"
              style={{ left: spot.x, top: spot.y }}
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                className="relative group p-1"
              >
                <div className="w-6 h-6 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg border border-slate-900/30 animate-pulse">
                  <Info className="w-3.5 h-3.5" />
                </div>
              </button>

              {activeHotspot === spot.id && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 rounded-xl p-3 shadow-2xl border border-slate-200 w-64 z-30 animate-fade-in text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>{spot.title}</span>
                    <button onClick={() => setActiveHotspot(null)}>
                      <X className="w-3 h-3 text-slate-400 hover:text-slate-900" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">{spot.desc}</p>
                </div>
              )}
            </div>
          ))}

          {/* Floating Pan & Zoom Controls */}
          <div className="absolute bottom-20 right-6 bg-slate-900/90 backdrop-blur-md rounded-xl p-2 border border-slate-700 flex flex-col gap-2 z-20">
            <button
              onClick={() => setZoom((z) => Math.min(z + 0.2, 2.2))}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.2, 0.8))}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <div className="h-px bg-slate-800 my-0.5" />
            <button
              onClick={() => handlePan(-60)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 text-xs font-bold"
              title="Pan Left"
            >
              ◀
            </button>
            <button
              onClick={() => handlePan(60)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 text-xs font-bold"
              title="Pan Right"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Room Switcher Navigation Bar Bottom */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto z-20">
          {rooms.map((room) => {
            const isSelected = activeRoom === room.id;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoom(room.id as any);
                  setActiveHotspot(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-md scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {room.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
