/**
 * Abstract tech pattern - circuits/data flow aesthetic
 * Modern, clean - no cliché padlocks or hooded figures
 */
export function AbstractTech({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Abstract circuit-like pattern */}
      <g opacity="0.12" stroke="currentColor" strokeWidth="1.5">
        {/* Horizontal data flow lines */}
        <line x1="50" y1="150" x2="200" y2="150" />
        <line x1="250" y1="150" x2="400" y2="150" />
        <line x1="450" y1="150" x2="750" y2="150" />
        
        {/* Vertical connectors */}
        <line x1="200" y1="150" x2="200" y2="250" />
        <line x1="400" y1="150" x2="400" y2="300" />
        <line x1="600" y1="150" x2="600" y2="350" />
        
        {/* Diagonal flows */}
        <line x1="200" y1="250" x2="350" y2="300" strokeDasharray="4 4" />
        <line x1="400" y1="300" x2="550" y2="350" strokeDasharray="4 4" />
        
        {/* Bottom tier */}
        <line x1="100" y1="450" x2="300" y2="450" />
        <line x1="350" y1="450" x2="700" y2="450" />
        
        {/* Junction points - representing nodes/decisions */}
        <circle cx="200" cy="150" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="400" cy="150" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="200" cy="250" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" />
        <circle cx="350" cy="300" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" />
        <circle cx="400" cy="300" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="550" cy="350" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" />
        <circle cx="600" cy="350" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Data packet indicators - small squares */}
        <rect x="98" y="148" width="4" height="4" fill="currentColor" opacity="0.6" />
        <rect x="348" y="298" width="4" height="4" fill="currentColor" opacity="0.6" />
        <rect x="548" y="348" width="4" height="4" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}

