import React, { CSSProperties } from 'react';

interface DotsBackgroundProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  gap?: number;
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({
  className = '',
  dotSize = 2,
  dotColor = 'rgba(209, 213, 219, 0.5)',
  gap = 20,
}) => {
  const dotStyle: CSSProperties = {
    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${gap}px ${gap}px`,
    backgroundPosition: '0 0',
  };

  return <div className={className} style={dotStyle} />;
};

export default DotsBackground;

// Usage Example:
// <DotsBackground 
//   className="absolute inset-0 w-full h-full opacity-50" 
//   dotSize={2} 
//   gap={24} 
//   dotColor="rgba(255,255,255,0.3)" 
// />

// Or as a full-page background:
// <div className="relative min-h-screen">
//   <DotsBackground 
//     className="absolute inset-0 -z-10" 
//     dotSize={3} 
//     gap={20} 
//     dotColor="#E5E7EB" 
//   />
//   <div className="relative z-10">
//     {/* Your content here */}
//   </div>
// </div>