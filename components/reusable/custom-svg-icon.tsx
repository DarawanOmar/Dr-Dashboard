import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.ReactNode;
  color?: string;
  hoverColor?: string;
  height?: number;
  width?: number;
}
interface SvgIconPropsSecond {
  color?: string;
  size?: number;
  hoverColor?: string;
  viewBox?: string;
  className?: string;
  svgPaths: string[]; // Array of SVG paths
}

export const CustomSvgIcon: React.FC<SvgIconProps> = ({
  svg,
  color = "currentColor",
  hoverColor = color,
  viewBox = "0 0 23 24",
  width,
  height,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <svg
      {...props}
      width={width || "23"}
      height={height || "24"}
      viewBox={viewBox}
      fill={isHovered ? hoverColor : color}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {svg}
    </svg>
  );
};

export default CustomSvgIcon;

export const SvgIcon: React.FC<SvgIconPropsSecond> = ({
  color = "#000", // Default color is black
  size = 24, // Default size is 24px
  hoverColor = "#555", // Default hover color
  className = "",
  svgPaths,
}) => {
  return (
    <div
      className={`inline-flex ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300 ease-in-out" // Smooth color transition
        style={{ cursor: "pointer" }}
      >
        {/* Map through each SVG path and render a path element */}
        {svgPaths.map((d, index) => (
          <path key={index} d={d} fill={color} />
        ))}
      </svg>
      <style jsx>{`
        div:hover svg path {
          fill: ${hoverColor};
        }
      `}</style>
    </div>
  );
};
