import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Cloud configuration props
const cloudProps = {
  containerProps: {
    className: "flex justify-center items-center w-full pt-10",
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Helper function to render a custom icon (light mode only)
const renderCustomIcon = (icon) => {
  return renderSimpleIcon({
    icon,
    bgHex: "#f3f2ef", // Light background
    fallbackHex: "#6e6e73",
    minContrastRatio: 1.2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

// Main IconCloud component
export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);

  // Fetch icons data
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  // Render icons
  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <Cloud {...cloudProps}>{renderedIcons}</Cloud>
      </div>
    </div>
  );
}
