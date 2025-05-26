import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export  const LaptopIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#722ed1",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="12"
        rx="1"
        stroke={color}
        strokeWidth="2"
      />
      <path d="M2 18H22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill={color} />
    </svg>
  );
};
