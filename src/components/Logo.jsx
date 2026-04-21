export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="renovo-classic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Outer Elegant Hexagon */}
      <path 
        d="M100 15 L175 55 L175 145 L100 185 L25 145 L25 55 Z" 
        stroke="url(#renovo-classic)" 
        strokeWidth="6" 
        strokeLinejoin="round" 
      />
      
      {/* Inner Classic R */}
      <path 
        d="M75 140 L75 60 L115 60 C132 60 142 68 142 82 C142 96 132 104 115 104 L75 104" 
        stroke="url(#renovo-classic)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M105 104 L140 140" 
        stroke="url(#renovo-classic)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Stylish Accent Dot */}
      <circle cx="100" cy="35" r="4" fill="#06b6d4" />
    </svg>
  );
}
