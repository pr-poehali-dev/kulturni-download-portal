import React from "react";

interface KulturniLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
  className?: string;
}

const KulturniLogo: React.FC<KulturniLogoProps> = ({ 
  size = "md", 
  withText = true,
  className = ""
}) => {
  // Определение размеров в зависимости от параметра size
  const dimensions = {
    sm: { outer: 60, inner: 40, textSize: "text-sm", spacing: "mt-1" },
    md: { outer: 100, inner: 70, textSize: "text-lg", spacing: "mt-3" },
    lg: { outer: 150, inner: 110, textSize: "text-xl", spacing: "mt-4" },
    xl: { outer: 220, inner: 180, textSize: "text-2xl", spacing: "mt-6" }
  };

  const { outer, inner, textSize, spacing } = dimensions[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div 
          className="animate-pulse-glow"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${outer * 0.6}px solid transparent`,
            borderRight: `${outer * 0.6}px solid transparent`,
            borderBottom: `${outer * 1.1}px solid #080808`,
            filter: 'drop-shadow(0 0 8px #6eaed7)'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            top: '10%',
            left: `${-inner * 0.6}px`,
            width: 0,
            height: 0,
            borderLeft: `${inner * 0.6}px solid transparent`,
            borderRight: `${inner * 0.6}px solid transparent`,
            borderBottom: `${inner * 1.1}px solid #0a0a0a`,
          }}
        ></div>
      </div>

      {withText && (
        <div className={`${textSize} font-medium kulturni-text ${spacing}`}>
          Kulturni.cc
        </div>
      )}
    </div>
  );
};

export default KulturniLogo;