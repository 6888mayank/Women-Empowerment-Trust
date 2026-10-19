import React from 'react';

interface ProgramIllustrationProps {
  programId: string;
  category: string;
  number: string;
  title: string;
}

export default function ProgramIllustration({
  programId,
  category,
  number,
}: ProgramIllustrationProps) {
  // Render thematic, high-aesthetic vector SVG artwork for each program
  const renderSvgArtwork = () => {
    switch (programId) {
      case 'women-empowerment':
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Women Empowerment and Leadership Illustration"
          >
            <defs>
              <linearGradient id="bg-empower" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#174D3A" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
              <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#D5A94F" />
              </linearGradient>
              <linearGradient id="aura-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E5EEE5" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#174D3A" stopOpacity="0" />
              </linearGradient>
              <filter id="glow-empower" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background base */}
            <rect width="400" height="220" fill="url(#bg-empower)" />

            {/* Decorative background grid and halo */}
            <circle cx="200" cy="115" r="90" fill="url(#aura-grad)" />
            <circle cx="200" cy="115" r="70" stroke="#D5A94F" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
            <circle cx="200" cy="115" r="50" stroke="#E5EEE5" strokeWidth="1" strokeOpacity="0.2" />

            {/* Radiating sunbeams representing leadership */}
            <g stroke="#D5A94F" strokeWidth="1.5" strokeOpacity="0.45" strokeLinecap="round">
              <line x1="200" y1="25" x2="200" y2="40" />
              <line x1="265" y1="50" x2="255" y2="60" />
              <line x1="290" y1="115" x2="275" y2="115" />
              <line x1="265" y1="180" x2="255" y2="170" />
              <line x1="135" y1="50" x2="145" y2="60" />
              <line x1="110" y1="115" x2="125" y2="115" />
              <line x1="135" y1="180" x2="145" y2="170" />
            </g>

            {/* Center: Stylized Women Leaders in solidarity */}
            {/* Center figure (Lead) */}
            <g transform="translate(200, 115)">
              {/* Head */}
              <circle cx="0" cy="-35" r="14" fill="url(#gold-grad)" filter="url(#glow-empower)" />
              {/* Bindi / decorative star */}
              <circle cx="0" cy="-35" r="2.5" fill="#10382D" />
              {/* Torso & Sari drape */}
              <path
                d="M -22 18 C -20 -15, -12 -20, 0 -20 C 12 -20, 20 -15, 22 18 Z"
                fill="#FAF8F1"
              />
              <path
                d="M -18 18 C -8 -5, 8 -8, 20 -20 L 22 18 Z"
                fill="#D5A94F"
                fillOpacity="0.9"
              />
            </g>

            {/* Left peer figure */}
            <g transform="translate(148, 122)">
              <circle cx="0" cy="-28" r="11" fill="#E5EEE5" fillOpacity="0.85" />
              <path
                d="M -16 18 C -14 -10, -8 -15, 0 -15 C 8 -15, 14 -10, 16 18 Z"
                fill="#FAF8F1"
                fillOpacity="0.75"
              />
              <path
                d="M -12 18 C -5 -2, 5 -5, 14 -15 L 16 18 Z"
                fill="#174D3A"
                fillOpacity="0.6"
              />
            </g>

            {/* Right peer figure */}
            <g transform="translate(252, 122)">
              <circle cx="0" cy="-28" r="11" fill="#E5EEE5" fillOpacity="0.85" />
              <path
                d="M -16 18 C -14 -10, -8 -15, 0 -15 C 8 -15, 14 -10, 16 18 Z"
                fill="#FAF8F1"
                fillOpacity="0.75"
              />
              <path
                d="M 12 18 C 5 -2, -5 -5, -14 -15 L -16 18 Z"
                fill="#174D3A"
                fillOpacity="0.6"
              />
            </g>

            {/* Linked Hands / Unity arch */}
            <path
              d="M 130 155 Q 200 135 270 155"
              stroke="#D5A94F"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="1 0"
            />
            {/* Sparkles of empowerment */}
            <path d="M 115 70 L 117 76 L 123 78 L 117 80 L 115 86 L 113 80 L 107 78 L 113 76 Z" fill="#D5A94F" />
            <path d="M 285 65 L 286.5 70 L 291 71.5 L 286.5 73 L 285 78 L 283.5 73 L 279 71.5 L 283.5 70 Z" fill="#E5EEE5" />
          </svg>
        );

      case 'skill-development':
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Skill Development and Candle Making Illustration"
          >
            <defs>
              <linearGradient id="bg-skill" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="60%" stopColor="#1B4F3D" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
              <linearGradient id="candle-flame" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#D5A94F" />
                <stop offset="50%" stopColor="#F7C85C" />
                <stop offset="100%" stopColor="#FFF2B2" />
              </linearGradient>
              <radialGradient id="flame-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5D77F" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#D5A94F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#174D3A" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="400" height="220" fill="url(#bg-skill)" />

            {/* Light aura radiating from candle flame */}
            <circle cx="200" cy="85" r="75" fill="url(#flame-glow)" />

            {/* Concentric rings of warmth */}
            <circle cx="200" cy="85" r="55" stroke="#D5A94F" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 3" />
            <circle cx="200" cy="85" r="90" stroke="#E5EEE5" strokeWidth="1" strokeOpacity="0.15" />

            {/* Artisanal Stand / Pedestal */}
            <ellipse cx="200" cy="180" rx="65" ry="14" fill="#0B261E" />
            <ellipse cx="200" cy="178" rx="55" ry="10" fill="#174D3A" stroke="#D5A94F" strokeWidth="1" strokeOpacity="0.4" />

            {/* Center Pillar Candle */}
            <rect x="184" y="98" width="32" height="76" rx="4" fill="#FAF8F1" />
            <ellipse cx="200" cy="98" rx="16" ry="4" fill="#E5EEE5" />
            
            {/* Candle wax decorative stripe */}
            <path d="M 184 125 Q 200 132 216 125 L 216 138 Q 200 145 184 138 Z" fill="#D5A94F" fillOpacity="0.8" />

            {/* Wick */}
            <line x1="200" y1="98" x2="200" y2="88" stroke="#252B28" strokeWidth="2.5" strokeLinecap="round" />

            {/* Flame */}
            <path
              d="M 200 60 C 212 76, 212 86, 200 90 C 188 86, 188 76, 200 60 Z"
              fill="url(#candle-flame)"
            />
            {/* Inner flame core */}
            <path
              d="M 200 70 C 205 78, 205 84, 200 87 C 195 84, 195 78, 200 70 Z"
              fill="#FFFFFF"
            />

            {/* Side smaller artisanal candles / products */}
            <rect x="145" y="125" width="22" height="50" rx="3" fill="#E5EEE5" fillOpacity="0.8" />
            <ellipse cx="156" cy="125" rx="11" ry="3" fill="#FAF8F1" />
            <line x1="156" y1="125" x2="156" y2="118" stroke="#252B28" strokeWidth="1.5" />
            <path d="M 156 102 C 162 110, 162 116, 156 118 C 150 116, 150 110, 156 102 Z" fill="#D5A94F" />

            <rect x="233" y="118" width="22" height="57" rx="3" fill="#E5EEE5" fillOpacity="0.8" />
            <ellipse cx="244" cy="118" rx="11" ry="3" fill="#FAF8F1" />
            <line x1="244" y1="118" x2="244" y2="111" stroke="#252B28" strokeWidth="1.5" />
            <path d="M 244 95 C 250 103, 250 109, 244 111 C 238 109, 238 103, 244 95 Z" fill="#D5A94F" />

            {/* Artisan crafting sparkles & light rays */}
            <g fill="#D5A94F">
              <circle cx="200" cy="38" r="2.5" />
              <circle cx="160" cy="55" r="2" />
              <circle cx="240" cy="55" r="2" />
              <circle cx="280" cy="90" r="1.5" />
              <circle cx="120" cy="90" r="1.5" />
            </g>
          </svg>
        );

      case 'education-child-welfare':
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Education and Child Welfare Illustration"
          >
            <defs>
              <linearGradient id="bg-edu" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#174D3A" />
                <stop offset="100%" stopColor="#0D2B22" />
              </linearGradient>
              <linearGradient id="book-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FAF8F1" />
                <stop offset="100%" stopColor="#E5EEE5" />
              </linearGradient>
            </defs>

            <rect width="400" height="220" fill="url(#bg-edu)" />

            {/* Sun of Knowledge rising */}
            <circle cx="200" cy="80" r="42" fill="#D5A94F" fillOpacity="0.2" />
            <circle cx="200" cy="80" r="28" fill="#D5A94F" />
            <g stroke="#D5A94F" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7">
              <line x1="200" y1="40" x2="200" y2="48" />
              <line x1="235" y1="52" x2="228" y2="58" />
              <line x1="245" y1="80" x2="237" y2="80" />
              <line x1="165" y1="52" x2="172" y2="58" />
              <line x1="155" y1="80" x2="163" y2="80" />
            </g>

            {/* Graduation Cap floating at top */}
            <g transform="translate(200, 68)">
              {/* Cap diamond */}
              <polygon points="0,-16 26,-6 0,4 -26,-6" fill="#10382D" stroke="#FAF8F1" strokeWidth="1.5" />
              <rect x="-11" y="-3" width="22" height="9" fill="#10382D" rx="2" />
              {/* Tassel */}
              <circle cx="0" cy="-6" r="2" fill="#D5A94F" />
              <path d="M 0 -6 L 18 2 L 18 12" stroke="#D5A94F" strokeWidth="1.5" fill="none" />
              <circle cx="18" cy="13" r="2" fill="#D5A94F" />
            </g>

            {/* Large Open Book */}
            <g transform="translate(200, 150)">
              {/* Book Spine Shadow */}
              <ellipse cx="0" cy="20" rx="60" ry="8" fill="#0B261E" />
              
              {/* Left Page block */}
              <path
                d="M 0 10 C -25 5, -55 8, -75 -15 L -75 -35 C -55 -12, -25 -15, 0 -8 Z"
                fill="#E5EEE5"
                stroke="#174D3A"
                strokeWidth="1.5"
              />
              <path
                d="M 0 8 C -25 3, -55 6, -72 -17 L -72 -37 C -55 -14, -25 -17, 0 -10 Z"
                fill="url(#book-grad)"
              />
              {/* Page text lines */}
              <line x1="-55" y1="-20" x2="-15" y2="-15" stroke="#174D3A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
              <line x1="-55" y1="-12" x2="-15" y2="-7" stroke="#174D3A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
              <line x1="-50" y1="-4" x2="-20" y2="0" stroke="#174D3A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />

              {/* Right Page block */}
              <path
                d="M 0 10 C 25 5, 55 8, 75 -15 L 75 -35 C 55 -12, 25 -15, 0 -8 Z"
                fill="#E5EEE5"
                stroke="#174D3A"
                strokeWidth="1.5"
              />
              <path
                d="M 0 8 C 25 3, 55 6, 72 -17 L 72 -37 C 55 -14, 25 -17, 0 -10 Z"
                fill="url(#book-grad)"
              />
              {/* Page text lines */}
              <line x1="15" y1="-15" x2="55" y2="-20" stroke="#174D3A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
              <line x1="15" y1="-7" x2="55" y2="-12" stroke="#174D3A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
              <line x1="20" y1="0" x2="50" y2="-4" stroke="#174D3A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />

              {/* Book Spine */}
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#D5A94F" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Sprout of Growth emerging from the book */}
            <g transform="translate(200, 138)">
              <path d="M 0 0 C 0 -12, 10 -18, 14 -14 C 18 -10, 8 0, 0 0 Z" fill="#D5A94F" />
              <path d="M 0 0 C 0 -12, -10 -18, -14 -14 C -18 -10, -8 0, 0 0 Z" fill="#A5C8A5" />
            </g>
          </svg>
        );

      case 'community-health-sanitation':
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Community Health and Sanitation Illustration"
          >
            <defs>
              <linearGradient id="bg-health" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#154736" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
              <linearGradient id="shield-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FAF8F1" />
                <stop offset="100%" stopColor="#E5EEE5" />
              </linearGradient>
            </defs>

            <rect width="400" height="220" fill="url(#bg-health)" />

            {/* Ripple rings of clean water / hygiene */}
            <circle cx="200" cy="110" r="85" stroke="#E5EEE5" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="200" cy="110" r="65" stroke="#D5A94F" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <circle cx="200" cy="110" r="45" stroke="#E5EEE5" strokeWidth="1" strokeOpacity="0.25" />

            {/* Protective Health Shield */}
            <g transform="translate(200, 110)">
              <path
                d="M 0 -45 L 36 -28 C 36 12, 22 36, 0 48 C -22 36, -36 12, -36 -28 Z"
                fill="url(#shield-grad)"
                stroke="#D5A94F"
                strokeWidth="2"
              />
              
              {/* Inner Emblem: Medical Plus + Heartbeat line */}
              <circle cx="0" cy="0" r="24" fill="#10382D" />
              
              {/* Medical Cross */}
              <path
                d="M -5 -14 H 5 V -5 H 14 V 5 H 5 V 14 H -5 V 5 H -14 V -5 H -5 Z"
                fill="#D5A94F"
              />
            </g>

            {/* Pure Clean Water Droplets */}
            <g transform="translate(135, 110)">
              <path
                d="M 0 -18 C 10 -4, 12 6, 0 14 C -12 6, -10 -4, 0 -18 Z"
                fill="#D5A94F"
                fillOpacity="0.85"
              />
              <circle cx="-2" cy="4" r="2" fill="#FFFFFF" fillOpacity="0.8" />
            </g>
            <g transform="translate(265, 110)">
              <path
                d="M 0 -18 C 10 -4, 12 6, 0 14 C -12 6, -10 -4, 0 -18 Z"
                fill="#E5EEE5"
                fillOpacity="0.85"
              />
              <circle cx="-2" cy="4" r="2" fill="#FFFFFF" fillOpacity="0.8" />
            </g>

            {/* Clean Village Laurel / Leaf Wreath at base */}
            <path
              d="M 125 175 Q 200 195 275 175"
              stroke="#D5A94F"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Laurel leaves */}
            <circle cx="150" cy="182" r="3" fill="#E5EEE5" />
            <circle cx="175" cy="187" r="3" fill="#D5A94F" />
            <circle cx="225" cy="187" r="3" fill="#D5A94F" />
            <circle cx="250" cy="182" r="3" fill="#E5EEE5" />
          </svg>
        );

      case 'agriculture-sustainability':
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Agriculture and Rural Sustainability Illustration"
          >
            <defs>
              <linearGradient id="bg-agri" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0E3328" />
                <stop offset="50%" stopColor="#174D3A" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
              <linearGradient id="sun-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FAF8F1" />
                <stop offset="100%" stopColor="#D5A94F" />
              </linearGradient>
            </defs>

            <rect width="400" height="220" fill="url(#bg-agri)" />

            {/* Rising Agrarian Sun over field hills */}
            <circle cx="200" cy="85" r="36" fill="url(#sun-grad)" fillOpacity="0.9" />

            {/* Rolling village hills */}
            <path
              d="M 0 160 Q 120 125 240 155 Q 320 170 400 145 L 400 220 L 0 220 Z"
              fill="#10382D"
            />
            <path
              d="M 0 175 Q 160 145 300 175 Q 360 185 400 165 L 400 220 L 0 220 Z"
              fill="#0B261E"
            />

            {/* Center: Stylized Crops / Wheat & Paddy Stalks */}
            <g transform="translate(200, 145)">
              {/* Central stem */}
              <line x1="0" y1="15" x2="0" y2="-55" stroke="#D5A94F" strokeWidth="2.5" strokeLinecap="round" />
              {/* Top wheat grains */}
              <ellipse cx="0" cy="-60" rx="4" ry="7" fill="#FAF8F1" />
              <ellipse cx="-7" cy="-50" rx="4" ry="8" transform="rotate(-30 -7 -50)" fill="#D5A94F" />
              <ellipse cx="7" cy="-50" rx="4" ry="8" transform="rotate(30 7 -50)" fill="#D5A94F" />
              <ellipse cx="-8" cy="-36" rx="4" ry="8" transform="rotate(-35 -8 -36)" fill="#FAF8F1" />
              <ellipse cx="8" cy="-36" rx="4" ry="8" transform="rotate(35 8 -36)" fill="#FAF8F1" />
              <ellipse cx="-8" cy="-22" rx="4" ry="8" transform="rotate(-40 -8 -22)" fill="#D5A94F" />
              <ellipse cx="8" cy="-22" rx="4" ry="8" transform="rotate(40 8 -22)" fill="#D5A94F" />
            </g>

            {/* Left Crop Stalk */}
            <g transform="translate(160, 155) rotate(-15)">
              <line x1="0" y1="10" x2="0" y2="-45" stroke="#E5EEE5" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="0" cy="-48" rx="3.5" ry="6" fill="#D5A94F" />
              <ellipse cx="-6" cy="-38" rx="3" ry="6" transform="rotate(-30 -6 -38)" fill="#E5EEE5" />
              <ellipse cx="6" cy="-38" rx="3" ry="6" transform="rotate(30 6 -38)" fill="#E5EEE5" />
              <ellipse cx="-6" cy="-26" rx="3" ry="6" transform="rotate(-35 -6 -26)" fill="#D5A94F" />
              <ellipse cx="6" cy="-26" rx="3" ry="6" transform="rotate(35 6 -26)" fill="#D5A94F" />
            </g>

            {/* Right Crop Stalk */}
            <g transform="translate(240, 155) rotate(15)">
              <line x1="0" y1="10" x2="0" y2="-45" stroke="#E5EEE5" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="0" cy="-48" rx="3.5" ry="6" fill="#D5A94F" />
              <ellipse cx="-6" cy="-38" rx="3" ry="6" transform="rotate(-30 -6 -38)" fill="#E5EEE5" />
              <ellipse cx="6" cy="-38" rx="3" ry="6" transform="rotate(30 6 -38)" fill="#E5EEE5" />
              <ellipse cx="-6" cy="-26" rx="3" ry="6" transform="rotate(-35 -6 -26)" fill="#D5A94F" />
              <ellipse cx="6" cy="-26" rx="3" ry="6" transform="rotate(35 6 -26)" fill="#D5A94F" />
            </g>

            {/* Water conservation drop representing irrigation */}
            <g transform="translate(200, 185)">
              <circle cx="0" cy="0" r="12" fill="#D5A94F" fillOpacity="0.2" />
              <path d="M 0 -8 C 6 0, 7 5, 0 9 C -7 5, -6 0, 0 -8 Z" fill="#D5A94F" />
            </g>
          </svg>
        );

      case 'digital-financial-inclusion':
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Digital and Financial Inclusion Illustration"
          >
            <defs>
              <linearGradient id="bg-digital" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10382D" />
                <stop offset="50%" stopColor="#164A38" />
                <stop offset="100%" stopColor="#0B261E" />
              </linearGradient>
              <linearGradient id="phone-screen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1A5540" />
                <stop offset="100%" stopColor="#0E3328" />
              </linearGradient>
            </defs>

            <rect width="400" height="220" fill="url(#bg-digital)" />

            {/* Connectivity Network Grid & Nodes */}
            <g stroke="#D5A94F" strokeWidth="1" strokeOpacity="0.25">
              <line x1="80" y1="60" x2="160" y2="105" />
              <line x1="80" y1="140" x2="160" y2="105" />
              <line x1="320" y1="60" x2="240" y2="105" />
              <line x1="320" y1="140" x2="240" y2="105" />
              <line x1="200" y1="40" x2="200" y2="70" />
            </g>

            {/* Network Nodes */}
            <circle cx="80" cy="60" r="5" fill="#D5A94F" fillOpacity="0.8" />
            <circle cx="80" cy="140" r="4" fill="#E5EEE5" fillOpacity="0.6" />
            <circle cx="320" cy="60" r="5" fill="#D5A94F" fillOpacity="0.8" />
            <circle cx="320" cy="140" r="4" fill="#E5EEE5" fillOpacity="0.6" />
            <circle cx="200" cy="38" r="4" fill="#D5A94F" />

            {/* Center: Smartphone with Digital Banking Shield & Rupee */}
            <g transform="translate(200, 115)">
              {/* Smartphone Frame */}
              <rect x="-38" y="-55" width="76" height="110" rx="14" fill="#FAF8F1" stroke="#D5A94F" strokeWidth="2" />
              {/* Screen */}
              <rect x="-33" y="-48" width="66" height="96" rx="9" fill="url(#phone-screen)" />
              {/* Speaker bar & camera */}
              <circle cx="0" cy="-44" r="1.5" fill="#FAF8F1" fillOpacity="0.6" />

              {/* Secure Banking Shield on Screen */}
              <path
                d="M 0 -26 L 18 -16 C 18 6, 11 18, 0 24 C -11 18, -18 6, -18 -16 Z"
                fill="#10382D"
                stroke="#D5A94F"
                strokeWidth="1.5"
              />

              {/* Rupee Symbol (₹) in Gold */}
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fill="#D5A94F"
                fontSize="18"
                fontWeight="bold"
                fontFamily="system-ui, sans-serif"
              >
                ₹
              </text>

              {/* Digital Check badge */}
              <circle cx="16" cy="22" r="7" fill="#D5A94F" />
              <path d="M 13 22 L 15 24 L 19 19" stroke="#10382D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Rising growth / financial trend bar */}
            <g transform="translate(280, 140)">
              <rect x="0" y="8" width="6" height="14" rx="2" fill="#E5EEE5" fillOpacity="0.4" />
              <rect x="10" y="2" width="6" height="20" rx="2" fill="#E5EEE5" fillOpacity="0.6" />
              <rect x="20" y="-6" width="6" height="28" rx="2" fill="#D5A94F" />
            </g>
          </svg>
        );

      default:
        return (
          <svg
            viewBox="0 0 400 220"
            className="w-full h-full object-cover"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="400" height="220" fill="#174D3A" />
            <circle cx="200" cy="110" r="50" fill="#D5A94F" fillOpacity="0.2" />
          </svg>
        );
    }
  };

  return (
    <div className="relative h-48 sm:h-52 overflow-hidden bg-forest-deep select-none">
      {renderSvgArtwork()}

      {/* Elegant dark overlay gradient at bottom to seamlessly blend with card body */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none"></div>

      {/* Floating Badges */}
      <div className="absolute top-3.5 left-3.5">
        <span className="text-[11px] font-semibold text-white bg-forest-dark/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-sm">
          {category}
        </span>
      </div>
      <div className="absolute top-3.5 right-3.5">
        <span className="font-mono text-xs font-bold text-gold-light bg-forest-dark/90 px-2.5 py-1 rounded-md border border-gold/30 shadow-sm">
          {number}
        </span>
      </div>
    </div>
  );
}
