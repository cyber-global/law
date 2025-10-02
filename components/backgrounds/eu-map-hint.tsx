/**
 * Simplified EU map outline - subtle hint of geographic coverage
 * Abstract, minimal - not a full detailed map
 */
export function EUMapHint({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract EU shape outline - very simplified */}
      <g opacity="0.08" stroke="currentColor" strokeWidth="2" fill="none">
        {/* Simplified Europe outline - artistic interpretation */}
        <path d="M 200 100 Q 250 80 300 90 L 350 120 Q 380 140 400 180 L 420 240 Q 430 280 420 320 L 400 380 Q 380 420 340 440 L 280 450 Q 220 450 180 430 L 140 400 Q 110 360 100 310 L 95 250 Q 100 190 140 150 L 180 120 Q 190 110 200 100 Z" />
        
        {/* Capital city markers - dots representing major hubs */}
        <circle cx="200" cy="200" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="280" cy="180" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="350" cy="220" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="300" cy="300" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="220" cy="280" r="3" fill="currentColor" opacity="0.4" />
        
        {/* Connection lines - cross-border work */}
        <line x1="200" y1="200" x2="280" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <line x1="280" y1="180" x2="350" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <line x1="350" y1="220" x2="300" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <line x1="300" y1="300" x2="220" y2="280" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

