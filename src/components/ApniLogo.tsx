interface ApniLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  customImageUrl?: string | null;
}

export default function ApniLogo({ className = '', size = 'md', customImageUrl }: ApniLogoProps) {
  if (customImageUrl) {
    return (
      <img
        src={customImageUrl}
        alt="Apni Dukaan Logo"
        className={`object-contain rounded-2xl ${className}`}
      />
    );
  }

  const dimensions = {
    sm: 'w-24 h-24',
    md: 'w-44 h-44',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80',
  }[size];

  return (
    <div className={`relative flex items-center justify-center p-3 select-none ${dimensions} ${className}`}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft background tint */}
        <rect width="500" height="500" rx="36" fill="#FAF7F0" />

        {/* Roof & Chimney */}
        {/* Chimney */}
        <path
          d="M 330 140 L 330 90 L 360 90 L 360 170 Z"
          fill="#145A32"
        />
        <rect x="325" y="85" width="40" height="12" rx="3" fill="#145A32" />

        {/* Roof Gable */}
        <path
          d="M 250 55 L 390 190 L 360 200 L 250 95 L 140 200 L 110 190 Z"
          fill="#145A32"
        />

        {/* Attic 4-pane Window */}
        <rect x="236" y="125" width="12" height="12" rx="1.5" fill="#145A32" />
        <rect x="252" y="125" width="12" height="12" rx="1.5" fill="#145A32" />
        <rect x="236" y="141" width="12" height="12" rx="1.5" fill="#145A32" />
        <rect x="252" y="141" width="12" height="12" rx="1.5" fill="#145A32" />

        {/* Storefront Pillars */}
        <path
          d="M 160 210 L 195 210 L 175 320 L 130 320 Z"
          fill="#145A32"
        />
        <path
          d="M 340 210 L 305 210 L 325 320 L 370 320 Z"
          fill="#145A32"
        />

        {/* Scalloped Storefront Awning (Canopy) with alternating green & warm gold */}
        {/* Green scallops */}
        <path
          d="M 130 200 Q 140 180 160 180 L 175 225 Q 155 235 130 220 Z"
          fill="#145A32"
        />
        <path
          d="M 215 180 L 240 180 L 245 230 Q 230 235 210 230 Z"
          fill="#145A32"
        />
        <path
          d="M 290 180 L 315 180 L 320 230 Q 305 235 285 230 Z"
          fill="#145A32"
        />
        <path
          d="M 340 180 Q 360 180 370 200 L 370 220 Q 345 235 325 225 Z"
          fill="#145A32"
        />

        {/* Gold scallops */}
        <path
          d="M 175 180 L 215 180 L 210 230 Q 192 235 175 225 Z"
          fill="#E5A912"
        />
        <path
          d="M 240 180 L 290 180 L 285 230 Q 265 235 245 230 Z"
          fill="#E5A912"
        />
        <path
          d="M 315 180 L 340 180 L 325 225 Q 332 230 345 228 Z"
          fill="#E5A912"
        />

        {/* Scallop bottom ruffles */}
        <circle cx="145" cy="225" r="14" fill="#145A32" />
        <circle cx="193" cy="230" r="14" fill="#E5A912" />
        <circle cx="240" cy="232" r="14" fill="#145A32" />
        <circle cx="287" cy="230" r="14" fill="#E5A912" />
        <circle cx="345" cy="227" r="14" fill="#145A32" />

        {/* Center Emblem: Green leaf/flame contour + Golden droplet */}
        <path
          d="M 250 225 C 220 260 215 295 235 325 C 245 340 255 340 265 325 C 285 295 280 260 250 225 Z"
          fill="#145A32"
        />
        {/* Inner cream cutout */}
        <path
          d="M 250 240 C 230 270 230 295 245 315 C 250 322 250 322 255 315 C 270 295 270 270 250 240 Z"
          fill="#FAF7F0"
        />
        {/* Golden Milk / Ghee / Oil Drop */}
        <path
          d="M 250 260 C 242 275 240 288 245 295 C 248 300 252 300 255 295 C 260 288 258 275 250 260 Z"
          fill="#E5A912"
        />

        {/* Base ground curve */}
        <path
          d="M 110 340 Q 250 320 390 340 Q 250 330 110 340 Z"
          fill="#145A32"
        />

        {/* Typography: APNI DUKAAN */}
        <text
          x="250"
          y="400"
          textAnchor="middle"
          fill="#145A32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="68"
          letterSpacing="2"
        >
          APNI
        </text>
        <text
          x="250"
          y="460"
          textAnchor="middle"
          fill="#145A32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="56"
          letterSpacing="4"
        >
          DUKAAN
        </text>

        {/* 3 Golden accent rays on left */}
        <line x1="100" y1="380" x2="80" y2="375" stroke="#E5A912" strokeWidth="6" strokeLinecap="round" />
        <line x1="95" y1="410" x2="70" y2="415" stroke="#E5A912" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="440" x2="82" y2="455" stroke="#E5A912" strokeWidth="6" strokeLinecap="round" />

        {/* 3 Golden accent rays on right */}
        <line x1="400" y1="380" x2="420" y2="375" stroke="#E5A912" strokeWidth="6" strokeLinecap="round" />
        <line x1="405" y1="410" x2="430" y2="415" stroke="#E5A912" strokeWidth="6" strokeLinecap="round" />
        <line x1="400" y1="440" x2="418" y2="455" stroke="#E5A912" strokeWidth="6" strokeLinecap="round" />

        {/* Subline: Aapke Ghar Ki Apni Dukaan */}
        <line x1="80" y1="482" x2="135" y2="482" stroke="#E5A912" strokeWidth="3" strokeLinecap="round" />
        <text
          x="250"
          y="488"
          textAnchor="middle"
          fill="#1B251F"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="0.5"
        >
          Aapke Ghar Ki Apni Dukaan
        </text>
        <line x1="365" y1="482" x2="420" y2="482" stroke="#E5A912" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
