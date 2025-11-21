import React from 'react';

interface IllustrationProps {
  variant: 'happy' | 'curious' | 'working' | 'idea';
  className?: string;
}

const Illustration: React.FC<IllustrationProps> = ({ variant, className = '' }) => {
  const colors = {
    happy: 'var(--color-pastel-yellow)',
    curious: 'var(--color-pastel-blue)',
    working: 'var(--color-pastel-green)',
    idea: 'var(--color-pastel-pink)',
  };

  const renderFace = () => {
    switch (variant) {
      case 'happy':
        return (
          <g transform="translate(50, 50)">
            <circle cx="-15" cy="-10" r="5" fill="#000" />
            <circle cx="15" cy="-10" r="5" fill="#000" />
            <path d="M-20 10 Q0 25 20 10" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        );
      case 'curious':
        return (
          <g transform="translate(50, 50)">
            <circle cx="-15" cy="-10" r="5" fill="#000" />
            <circle cx="15" cy="-10" r="5" fill="#000" />
            <path d="M-5 15 Q0 10 5 15" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="25" cy="-25" r="3" fill="#000" opacity="0.2" />
          </g>
        );
      case 'working':
        return (
          <g transform="translate(50, 50)">
            <rect x="-25" y="-15" width="16" height="6" rx="3" fill="#000" />
            <rect x="9" y="-15" width="16" height="6" rx="3" fill="#000" />
            <path d="M-10 15 L10 15" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        );
      case 'idea':
        return (
          <g transform="translate(50, 50)">
            <circle cx="-15" cy="-5" r="5" fill="#000" />
            <circle cx="15" cy="-5" r="5" fill="#000" />
            <circle cx="0" cy="15" r="8" fill="none" stroke="#000" strokeWidth="3" />
          </g>
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {/* Blob Shape */}
        <path 
          d="M50 5 C20 5 5 20 5 50 C5 80 20 95 50 95 C80 95 95 80 95 50 C95 20 80 5 50 5 Z" 
          fill={colors[variant]} 
          className="animate-float"
        />
        {/* Face */}
        {renderFace()}
      </svg>
    </div>
  );
};

export default Illustration;
