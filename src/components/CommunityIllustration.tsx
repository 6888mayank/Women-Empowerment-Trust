import React from 'react';

interface CommunityIllustrationProps {
  title: string;
}

export default function CommunityIllustration({ title }: CommunityIllustrationProps) {
  const renderSvg = () => {
    switch (title) {
      case 'Rural Women & Self-Help Groups':
        return (
          <svg
            viewBox="0 0 360 180"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Rural Women & Self-Help Groups Illustration"
          >
            <defs>
              <linearGradient id="bg-shg" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="60%" stopColor="#164A38" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
              <linearGradient id="gold-shg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#D5A94F" />
              </linearGradient>
            </defs>

            <rect width="360" height="180" fill="url(#bg-shg)" />

            {/* Radiant Circle of Collective Savings & Empowerment */}
            <circle cx="180" cy="90" r="60" stroke="#D5A94F" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
            <circle cx="180" cy="90" r="42" fill="#E5EEE5" fillOpacity="0.08" />

            {/* Central Diya / Prosperity Flame */}
            <path d="M 180 65 C 185 73, 185 79, 180 82 C 175 79, 175 73, 180 65 Z" fill="url(#gold-shg)" />
            <path d="M 172 82 Q 180 87 188 82 Q 185 90 175 90 Z" fill="#D5A94F" />

            {/* Women in a collaborative circle (4 silhouettes) */}
            {/* Top Leader */}
            <g transform="translate(180, 52)">
              <circle cx="0" cy="0" r="8" fill="url(#gold-shg)" />
              <path d="M -11 20 C -9 7, 9 7, 11 20 Z" fill="#FAF8F1" />
            </g>

            {/* Left Member */}
            <g transform="translate(140, 92)">
              <circle cx="0" cy="0" r="7.5" fill="#E5EEE5" />
              <path d="M -10 18 C -8 6, 8 6, 10 18 Z" fill="#FAF8F1" fillOpacity="0.85" />
            </g>

            {/* Right Member */}
            <g transform="translate(220, 92)">
              <circle cx="0" cy="0" r="7.5" fill="#E5EEE5" />
              <path d="M -10 18 C -8 6, 8 6, 10 18 Z" fill="#FAF8F1" fillOpacity="0.85" />
            </g>

            {/* Bottom Member */}
            <g transform="translate(180, 130)">
              <circle cx="0" cy="0" r="7.5" fill="#D5A94F" />
              <path d="M -10 18 C -8 6, 8 6, 10 18 Z" fill="#FAF8F1" fillOpacity="0.9" />
            </g>

            {/* Connecting Solidarity Arch / Handshake links */}
            <path
              d="M 148 108 Q 180 125 212 108"
              stroke="#D5A94F"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 148 76 Q 180 58 212 76"
              stroke="#E5EEE5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.6"
              fill="none"
            />
          </svg>
        );

      case 'Dalit & Tribal Communities':
        return (
          <svg
            viewBox="0 0 360 180"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Dalit and Tribal Communities Illustration"
          >
            <defs>
              <linearGradient id="bg-tribal" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#174837" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
            </defs>

            <rect width="360" height="180" fill="url(#bg-tribal)" />

            {/* Tribal Sun / Equality Wheel Motif */}
            <circle cx="180" cy="85" r="48" stroke="#D5A94F" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.5" />
            <circle cx="180" cy="85" r="32" fill="#E5EEE5" fillOpacity="0.1" />
            <circle cx="180" cy="85" r="14" fill="#D5A94F" />

            {/* Radiant Sun Rays (Social Equality & Constitutional Dignity) */}
            <g stroke="#D5A94F" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75">
              <line x1="180" y1="28" x2="180" y2="20" />
              <line x1="180" y1="142" x2="180" y2="150" />
              <line x1="123" y1="85" x2="115" y2="85" />
              <line x1="237" y1="85" x2="245" y2="85" />
              <line x1="140" y1="45" x2="134" y2="39" />
              <line x1="220" y1="45" x2="226" y2="39" />
              <line x1="140" y1="125" x2="134" y2="131" />
              <line x1="220" y1="125" x2="226" y2="131" />
            </g>

            {/* Traditional Indigenous Village Huts / Habitations */}
            <g transform="translate(105, 120)">
              {/* Hut Roof */}
              <polygon points="20,0 40,25 0,25" fill="#D5A94F" fillOpacity="0.8" />
              <rect x="6" y="25" width="28" height="20" fill="#FAF8F1" fillOpacity="0.75" />
              <rect x="16" y="32" width="8" height="13" fill="#10382D" />
            </g>

            <g transform="translate(215, 120)">
              <polygon points="20,0 40,25 0,25" fill="#D5A94F" fillOpacity="0.8" />
              <rect x="6" y="25" width="28" height="20" fill="#FAF8F1" fillOpacity="0.75" />
              <rect x="16" y="32" width="8" height="13" fill="#10382D" />
            </g>

            {/* Protective Sacred Tree / Mahua Tree Silhouette */}
            <g transform="translate(180, 125)">
              <line x1="0" y1="15" x2="0" y2="-15" stroke="#E5EEE5" strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="-22" r="14" fill="#E5EEE5" fillOpacity="0.25" stroke="#D5A94F" strokeWidth="1.5" />
              <circle cx="-6" cy="-20" r="4" fill="#D5A94F" />
              <circle cx="6" cy="-20" r="4" fill="#D5A94F" />
            </g>
          </svg>
        );

      case 'Children & Adolescent Girls':
        return (
          <svg
            viewBox="0 0 360 180"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Children and Adolescent Girls Illustration"
          >
            <defs>
              <linearGradient id="bg-child" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#184F3D" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
            </defs>

            <rect width="360" height="180" fill="url(#bg-child)" />

            {/* Rising Star of Future Potential */}
            <circle cx="240" cy="55" r="26" fill="#D5A94F" fillOpacity="0.25" />
            <circle cx="240" cy="55" r="16" fill="#D5A94F" />

            {/* Flying birds / butterflies representing freedom and education */}
            <path d="M 90 45 Q 100 38 110 45 Q 120 38 130 45 Q 120 42 110 47 Q 100 42 90 45 Z" fill="#E5EEE5" fillOpacity="0.8" />
            <path d="M 125 65 Q 133 60 141 65 Q 149 60 157 65 Q 149 63 141 67 Q 133 63 125 65 Z" fill="#FAF8F1" fillOpacity="0.6" />

            {/* Girl Child Silhouette holding book / school slate */}
            <g transform="translate(160, 85)">
              {/* Head with pony / ribbon */}
              <circle cx="0" cy="-26" r="10" fill="#FAF8F1" />
              <path d="M 6 -32 C 14 -35, 16 -24, 8 -24 Z" fill="#D5A94F" />

              {/* School uniform dress */}
              <path d="M -14 28 L -8 -10 C -4 -13, 4 -13, 8 -10 L 14 28 Z" fill="#E5EEE5" />
              
              {/* School Bag / Backpack */}
              <rect x="-18" y="-4" width="7" height="18" rx="2" fill="#D5A94F" />

              {/* Open Book in hand */}
              <path d="M 5 0 L 18 -4 L 18 10 L 5 14 Z" fill="#FAF8F1" stroke="#10382D" strokeWidth="1" />
              <path d="M 18 -4 L 30 0 L 30 14 L 18 10 Z" fill="#FAF8F1" stroke="#10382D" strokeWidth="1" />
            </g>

            {/* Sprout & Floral Growth ground line */}
            <path d="M 60 145 Q 180 135 300 145" stroke="#D5A94F" strokeWidth="2" strokeLinecap="round" />
            <circle cx="100" cy="141" r="3" fill="#D5A94F" />
            <circle cx="120" cy="139" r="3" fill="#E5EEE5" />
            <circle cx="220" cy="139" r="3" fill="#D5A94F" />
            <circle cx="250" cy="142" r="3" fill="#E5EEE5" />
          </svg>
        );

      case 'Small & Marginal Farmers':
        return (
          <svg
            viewBox="0 0 360 180"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Small and Marginal Farmers Illustration"
          >
            <defs>
              <linearGradient id="bg-farmer" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0E3328" />
                <stop offset="50%" stopColor="#164A38" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
            </defs>

            <rect width="360" height="180" fill="url(#bg-farmer)" />

            {/* Morning Sun over farm fields */}
            <circle cx="180" cy="70" r="32" fill="#D5A94F" fillOpacity="0.85" />

            {/* Terraced Agricultural Field Contours */}
            <path d="M 0 130 Q 90 105 180 120 Q 270 135 360 115 L 360 180 L 0 180 Z" fill="#10382D" />
            <path d="M 0 145 Q 120 125 240 145 Q 300 155 360 140 L 360 180 L 0 180 Z" fill="#0B261E" />

            {/* Farmer with Turban/Pagri & Hoe / Sickle in field */}
            <g transform="translate(135, 115)">
              <circle cx="0" cy="-24" r="8" fill="#FAF8F1" />
              {/* Farmer Head cloth / pagri */}
              <ellipse cx="0" cy="-28" rx="9" ry="4" fill="#D5A94F" />
              {/* Torso */}
              <path d="M -10 16 L -6 -12 L 6 -12 L 10 16 Z" fill="#E5EEE5" />
              {/* Tool / Farming implement */}
              <line x1="8" y1="-5" x2="22" y2="20" stroke="#FAF8F1" strokeWidth="2" strokeLinecap="round" />
              <path d="M 20 18 L 28 14 L 25 24 Z" fill="#D5A94F" />
            </g>

            {/* Woman Farmer standing beside (Equal recognition) */}
            <g transform="translate(205, 118)">
              <circle cx="0" cy="-22" r="8" fill="#FAF8F1" />
              {/* Pallu / head drape */}
              <path d="M -9 -25 C 0 -30, 10 -25, 9 -12 Z" fill="#D5A94F" />
              <path d="M -8 16 L -5 -10 L 5 -10 L 8 16 Z" fill="#FAF8F1" />
            </g>

            {/* Golden Paddy / Wheat Sheaves at side */}
            <g transform="translate(270, 130)">
              <line x1="0" y1="20" x2="0" y2="-20" stroke="#D5A94F" strokeWidth="2" />
              <ellipse cx="-4" cy="-16" rx="2" ry="4" transform="rotate(-30 -4 -16)" fill="#D5A94F" />
              <ellipse cx="4" cy="-16" rx="2" ry="4" transform="rotate(30 4 -16)" fill="#D5A94F" />
              <ellipse cx="-4" cy="-8" rx="2" ry="4" transform="rotate(-30 -4 -8)" fill="#E5EEE5" />
              <ellipse cx="4" cy="-8" rx="2" ry="4" transform="rotate(30 4 -8)" fill="#E5EEE5" />
            </g>
          </svg>
        );

      case 'Economically Disadvantaged Households':
        return (
          <svg
            viewBox="0 0 360 180"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Economically Disadvantaged Households Illustration"
          >
            <defs>
              <linearGradient id="bg-house" x1="0" y1="0" x2="360" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#174A39" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
            </defs>

            <rect width="360" height="180" fill="url(#bg-house)" />

            {/* Protective Hands / Community Safety Canopy over Home */}
            <path
              d="M 110 80 Q 180 35 250 80"
              stroke="#D5A94F"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 125 90 Q 180 50 235 90"
              stroke="#E5EEE5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.4"
              fill="none"
            />

            {/* Warm Village Home */}
            <g transform="translate(180, 105)">
              {/* Triangular pitched roof */}
              <polygon points="0,-32 46,0 -46,0" fill="#D5A94F" />
              {/* House walls */}
              <rect x="-38" y="0" width="76" height="42" fill="#FAF8F1" />
              {/* Door with warm welcoming light */}
              <rect x="-11" y="12" width="22" height="30" rx="3" fill="#10382D" />
              <circle cx="-5" cy="27" r="1.5" fill="#D5A94F" />
              {/* Side window */}
              <rect x="16" y="8" width="14" height="14" rx="2" fill="#D5A94F" fillOpacity="0.8" />
              <line x1="23" y1="8" x2="23" y2="22" stroke="#FAF8F1" strokeWidth="1" />
              <line x1="16" y1="15" x2="30" y2="15" stroke="#FAF8F1" strokeWidth="1" />
            </g>

            {/* Stepping Stones / Pathway leading out of vulnerability towards stability */}
            <g transform="translate(180, 158)">
              <ellipse cx="0" cy="0" rx="16" ry="5" fill="#E5EEE5" fillOpacity="0.8" />
              <ellipse cx="-28" cy="8" rx="14" ry="4" fill="#D5A94F" fillOpacity="0.7" />
              <ellipse cx="28" cy="8" rx="14" ry="4" fill="#D5A94F" fillOpacity="0.7" />
            </g>
          </svg>
        );

      default:
        return (
          <svg
            viewBox="0 0 360 180"
            className="w-full h-full object-cover"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="360" height="180" fill="#174D3A" />
            <circle cx="180" cy="90" r="40" fill="#D5A94F" fillOpacity="0.3" />
          </svg>
        );
    }
  };

  return (
    <div className="relative h-44 sm:h-48 overflow-hidden bg-forest-deep select-none">
      {renderSvg()}
      {/* Subtle blend gradient at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
}
