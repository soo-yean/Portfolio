import React from "react";

interface IllustrationProps {
  variant: "happy" | "curious" | "working" | "idea" | "laptop";
  className?: string;
}

const Illustration: React.FC<IllustrationProps> = ({
  variant,
  className = "",
}) => {
  const colors = {
    happy: "var(--color-pastel-yellow)",
    curious: "var(--color-pastel-blue)",
    working: "var(--color-pastel-green)",
    idea: "var(--color-pastel-pink)",
    laptop: "var(--color-pastel-blue)",
  };

  const renderFace = () => {
    switch (variant) {
      case "happy":
        return (
          <g transform="translate(50, 50)">
            <circle cx="-15" cy="0" r="5" fill="#000" />
            <circle cx="15" cy="0" r="5" fill="#000" />
            <path
              d="M-6 15 Q0 19 6 15"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        );
      case "curious":
        return (
          <g transform="translate(50, 50)">
            <circle cx="-15" cy="0" r="5" fill="#000" />
            <circle cx="15" cy="0" r="5" fill="#000" />
            <path
              d="M-8 15 Q-4 20 0 15 Q4 20 8 15"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="25" cy="-25" r="3" fill="#000" opacity="0.2" />
          </g>
        );
      case "working":
        return (
          <g transform="translate(50, 50)">
            {/* Glasses */}
            <circle
              cx="-18"
              cy="0"
              r="16"
              fill="none"
              stroke="#000"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="0"
              r="16"
              fill="none"
              stroke="#000"
              strokeWidth="3"
            />
            <path d="M-2 0 L2 0" stroke="#000" strokeWidth="3" />
            {/* Eyes */}
            <circle cx="-18" cy="0" r="4" fill="#000" />
            <circle cx="18" cy="0" r="4" fill="#000" />
          </g>
        );
      case "idea":
        return (
          <g transform="translate(50, 50)">
            <circle cx="-15" cy="-5" r="5" fill="#000" />
            <circle cx="15" cy="-5" r="5" fill="#000" />
            <circle
              cx="0"
              cy="15"
              r="8"
              fill="none"
              stroke="#000"
              strokeWidth="3"
            />
          </g>
        );
      case "laptop":
        return (
          <g transform="translate(50, 50)">
            <rect
              x="-20"
              y="10"
              width="40"
              height="24"
              rx="2"
              fill="none"
              stroke="#000"
              strokeWidth="3"
            />
            <path
              d="M-25 34 L25 34"
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="-12" cy="-5" r="5" fill="#000" />
            <circle cx="12" cy="-5" r="5" fill="#000" />
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
