/**
 * Abstract network/connection pattern SVG
 * No cliché hacker imagery - modern, professional
 */
export function NetworkPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract connecting nodes - representing global connectivity */}
      <g opacity="0.1">
        {/* Node connections */}
        <line x1="100" y1="100" x2="250" y2="180" stroke="currentColor" strokeWidth="1" />
        <line x1="250" y1="180" x2="400" y2="120" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="120" x2="550" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="100" x2="200" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="300" x2="400" y2="350" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="350" x2="600" y2="280" stroke="currentColor" strokeWidth="1" />
        <line x1="550" y1="200" x2="600" y2="280" stroke="currentColor" strokeWidth="1" />
        <line x1="250" y1="180" x2="200" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="120" x2="400" y2="350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Additional connection lines */}
        <line x1="150" y1="450" x2="350" y2="500" stroke="currentColor" strokeWidth="1" />
        <line x1="350" y1="500" x2="550" y2="420" stroke="currentColor" strokeWidth="1" />
        <line x1="550" y1="420" x2="700" y2="480" stroke="currentColor" strokeWidth="1" />
        
        {/* Nodes - representing data points/entities */}
        <circle cx="100" cy="100" r="4" fill="currentColor" />
        <circle cx="250" cy="180" r="6" fill="currentColor" />
        <circle cx="400" cy="120" r="5" fill="currentColor" />
        <circle cx="550" cy="200" r="4" fill="currentColor" />
        <circle cx="200" cy="300" r="5" fill="currentColor" />
        <circle cx="400" cy="350" r="6" fill="currentColor" />
        <circle cx="600" cy="280" r="4" fill="currentColor" />
        <circle cx="150" cy="450" r="3" fill="currentColor" />
        <circle cx="350" cy="500" r="5" fill="currentColor" />
        <circle cx="550" cy="420" r="4" fill="currentColor" />
        <circle cx="700" cy="480" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

