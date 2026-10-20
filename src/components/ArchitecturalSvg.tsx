import React from 'react';

interface SvgProps {
  type: string;
  className?: string;
}

export const ArchitecturalSvg: React.FC<SvgProps> = ({ type, className = 'w-full h-full' }) => {
  if (type === 'hero-house') {
    return (
      <svg
        viewBox="0 0 800 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wallLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eef1f5" />
            <stop offset="100%" stopColor="#d5dbe2" />
          </linearGradient>
          <linearGradient id="wallMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8c0c9" />
            <stop offset="100%" stopColor="#949ea9" />
          </linearGradient>
          <linearGradient id="wallDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7d8792" />
            <stop offset="100%" stopColor="#5e6771" />
          </linearGradient>
          <linearGradient id="windowGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8f98a3" />
            <stop offset="100%" stopColor="#adb5be" />
          </linearGradient>
        </defs>

        {/* Sun Circle in Top Right matching image */}
        <circle cx="715" cy="65" r="34" fill="#9ea7b1" opacity="0.65" />

        {/* Soft Right Background Hill Curve */}
        <path
          d="M350,380 Q580,220 800,150 L800,520 L350,520 Z"
          fill="#cfd5dc"
          opacity="0.55"
        />

        {/* Modernist 3D Perspective Villa (Matching exact geometry in image) */}
        {/* Left Upper Volume */}
        <polygon points="180,210 430,95 430,275 180,335" fill="url(#wallMid)" />
        <polygon points="430,95 510,125 510,290 430,275" fill="url(#wallLight)" />
        {/* Left Upper Recessed Window Frame */}
        <polygon points="215,220 405,135 405,255 215,305" fill="#7c8590" />
        <polygon points="235,230 390,160 390,250 235,292" fill="url(#windowGlass)" />
        <line x1="315" y1="194" x2="315" y2="270" stroke="#7c8590" strokeWidth="4" />

        {/* Center-Right Tall Tower Volume */}
        <polygon points="445,45 555,15 555,275 445,275" fill="url(#wallDark)" />
        <polygon points="555,15 725,95 725,335 555,275" fill="url(#wallLight)" />

        {/* Recessed Tall Slot Window on Center Tower */}
        <polygon points="485,65 525,52 525,245 485,245" fill="#9aa3ad" />

        {/* Right Wing Upper Window & Balcony */}
        <polygon points="585,95 695,145 695,265 585,225" fill="#7c8590" />
        <polygon points="595,105 680,145 680,255 595,222" fill="url(#windowGlass)" />
        <line x1="640" y1="125" x2="640" y2="238" stroke="#7c8590" strokeWidth="5" />

        {/* Horizontal Cantilever Mid-Floor Slab */}
        <polygon points="140,320 565,255 740,315 740,340 565,282 140,345" fill="#eef1f5" />
        <polygon points="140,345 565,282 565,302 140,362" fill="#8b949f" />

        {/* Lower Ground Floor Base & Pillars */}
        <polygon points="155,360 565,300 565,475 155,495" fill="url(#wallDark)" />
        <polygon points="565,300 715,342 715,495 565,475" fill="url(#wallMid)" />

        {/* Ground Floor Windows & Pillars */}
        <polygon points="195,380 345,360 345,475 195,485" fill="#9aa3ad" />
        <polygon points="385,352 530,330 530,468 385,475" fill="#9aa3ad" />
        <line x1="270" y1="370" x2="270" y2="480" stroke="#5e6771" strokeWidth="6" />
        <line x1="455" y1="340" x2="455" y2="472" stroke="#5e6771" strokeWidth="6" />

        {/* Right Side Ground Floor Tall Pillar Cutouts */}
        <polygon points="600,335 640,348 640,480 600,475" fill="#6b747e" />
        <polygon points="660,355 695,366 695,485 660,480" fill="#6b747e" />

        {/* Botanical 3-Leaf Plant in Bottom Right Foreground (Exact match to image) */}
        <g transform="translate(650, 290)">
          {/* Center Tall Leaf */}
          <path
            d="M45,190 Q48,95 62,15 Q82,65 72,140 Q62,175 45,190 Z"
            fill="#88919b"
          />
          <path d="M45,190 Q55,105 62,25" stroke="#6c757f" strokeWidth="2" fill="none" />
          {/* Left Leaf */}
          <path
            d="M42,190 Q5,145 8,90 Q38,110 46,160 Z"
            fill="#949da7"
          />
          <path d="M42,190 Q24,140 12,98" stroke="#6c757f" strokeWidth="1.5" fill="none" />
          {/* Right Leaf */}
          <path
            d="M48,190 Q95,145 108,85 Q115,135 65,180 Z"
            fill="#7b848e"
          />
          <path d="M48,190 Q80,145 102,95" stroke="#5e6771" strokeWidth="1.5" fill="none" />
        </g>
      </svg>
    );
  }

  if (type === 'interior-living-room') {
    return (
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background Room Shell */}
        <rect width="800" height="480" fill="#d8dde4" />

        {/* Left & Right Angled Wall Perspectives */}
        <polygon points="0,0 140,55 140,355 0,430" fill="#c5ccd4" />
        <polygon points="800,0 660,55 660,355 800,430" fill="#bfc7d0" />

        {/* Ceiling Plane */}
        <polygon points="0,0 800,0 660,55 140,55" fill="#e4e8ee" />

        {/* Floor Plane with Rug */}
        <polygon points="140,355 660,355 800,480 0,480" fill="#cfd5dc" />
        <polygon points="160,395 640,395 710,465 90,465" fill="#b0b8c1" />

        {/* Panoramic Floor-to-Ceiling Window */}
        <rect x="140" y="55" width="520" height="300" fill="#e8ecf0" stroke="#9aa3ad" strokeWidth="4" />
        {/* Distant Landscape View Outside Window */}
        <path d="M140,260 Q280,210 420,250 T660,235 L660,355 L140,355 Z" fill="#bdcad6" opacity="0.6" />
        <path d="M140,295 Q340,265 520,290 T660,280 L660,355 L140,355 Z" fill="#9ea9b5" opacity="0.5" />

        {/* Window Vertical Mullions */}
        <line x1="270" y1="55" x2="270" y2="355" stroke="#9aa3ad" strokeWidth="3" />
        <line x1="400" y1="55" x2="400" y2="355" stroke="#9aa3ad" strokeWidth="3" />
        <line x1="530" y1="55" x2="530" y2="355" stroke="#9aa3ad" strokeWidth="3" />
        <line x1="140" y1="115" x2="660" y2="115" stroke="#9aa3ad" strokeWidth="2" />

        {/* Modern Low-Profile Sectional Sofa */}
        <rect x="215" y="310" width="350" height="45" rx="6" fill="#949da7" />
        <rect x="195" y="335" width="390" height="42" rx="6" fill="#7d8690" />
        {/* Sofa Cushions */}
        <rect x="225" y="295" width="105" height="28" rx="4" fill="#a6afb9" />
        <rect x="338" y="295" width="105" height="28" rx="4" fill="#a6afb9" />
        <rect x="450" y="295" width="105" height="28" rx="4" fill="#a6afb9" />

        {/* Low Coffee Table in Front */}
        <polygon points="290,390 490,390 505,415 275,415" fill="#68717a" />
        <rect x="295" y="415" width="195" height="8" fill="#525a62" />

        {/* Large Potted Indoor Plant on Right (Matching wireframe video card) */}
        <g transform="translate(650, 190)">
          <polygon points="35,180 75,180 68,235 42,235" fill="#7d8690" />
          <path d="M55,185 Q45,100 58,20 Q75,80 62,185 Z" fill="#8b949e" />
          <path d="M52,185 Q10,130 15,75 Q45,105 55,185 Z" fill="#9aa3ad" />
          <path d="M58,185 Q100,130 105,70 Q85,135 58,185 Z" fill="#747d87" />
        </g>
      </svg>
    );
  }

  if (type === 'promo-house') {
    return (
      <svg
        viewBox="0 0 700 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sky Background */}
        <rect width="700" height="460" fill="#d5dce3" />

        {/* Top-Left Dark Curved Sweep */}
        <path d="M0,0 L160,0 Q90,95 0,170 Z" fill="#8d96a0" opacity="0.55" />

        {/* Bottom-Left Hill Curve */}
        <path d="M0,260 Q110,290 190,390 L0,390 Z" fill="#7b848e" />

        {/* Modernist Cantilevered Villa (Matching Banner 1 in reference image) */}
        {/* Left Wing */}
        <polygon points="150,245 310,165 310,355 150,375" fill="#adb5be" />
        <polygon points="175,255 290,200 290,335 175,355" fill="#7c858f" />

        {/* Main Forward Cantilever Box */}
        <polygon points="275,185 485,95 485,275 275,305" fill="#bfc7d0" />
        <polygon points="485,95 620,145 620,305 485,275" fill="#e6eaef" />
        {/* Large Recessed Window in Cantilever Box */}
        <polygon points="305,195 465,125 465,255 305,280" fill="#747d87" />
        <polygon points="505,135 595,168 595,272 505,252" fill="#8b949e" />

        {/* Ground Floor Recessed Base */}
        <polygon points="280,295 495,270 495,380 280,385" fill="#68717a" />
        <polygon points="495,270 610,295 610,380 495,380" fill="#9aa3ad" />

        {/* Forecourt / Terrace Slab */}
        <polygon points="0,375 700,365 700,460 0,460" fill="#cfd6dd" />
        <polygon points="120,395 580,385 630,445 70,445" fill="#9ea7b1" opacity="0.6" />
      </svg>
    );
  }

  // Property Card Graphic: Exact Rounded Twin Mountains + Sun Circle from Reference Image
  return (
    <svg
      viewBox="0 0 600 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Card Image Canvas */}
      <rect width="600" height="380" fill="#c5ccd3" />

      {/* Sun Circle above right mountain peak */}
      <circle cx="375" cy="125" r="24" fill="#7c858f" />

      {/* Main Left Rounded Mountain Peak */}
      <path
        d="M145,285 L245,155 Q260,135 275,155 L375,285 Z"
        fill="#7c858f"
      />

      {/* Overlapping Right Smaller Rounded Mountain Peak */}
      <path
        d="M295,285 L370,195 Q382,180 394,195 L465,285 Z"
        fill="#8d96a0"
      />
    </svg>
  );
};
