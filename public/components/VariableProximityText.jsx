"use client";

import { useRef, useState, useEffect } from "react";

export default function VariableProximityText({
  label,
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 800",
  radius = 100,
  falloff = "linear",
  className = "",
  fontFamily = "var(--font-heading), Gabarito, system-ui, sans-serif",
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateFalloff = (distance) => {
    if (distance > radius) return 0;

    const normalizedDistance = distance / radius;

    switch (falloff) {
      case "exponential":
        return Math.pow(1 - normalizedDistance, 2);
      case "gaussian":
        return Math.exp(-Math.pow(normalizedDistance * 2, 2));
      case "linear":
      default:
        return 1 - normalizedDistance;
    }
  };

  const getCharacterStyle = (index) => {
    if (!containerRef.current) return {};

    const chars = containerRef.current.querySelectorAll(".char");
    const char = chars[index];
    if (!char) return {};

    const rect = char.getBoundingClientRect();
    const charCenterX = rect.left + rect.width / 2;
    const charCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mousePos.x - charCenterX, 2) +
        Math.pow(mousePos.y - charCenterY, 2),
    );

    const intensity = calculateFalloff(distance);

    // Parse variation settings
    const fromSettings = fromFontVariationSettings
      .split(",")
      .map((s) => s.trim());
    const toSettings = toFontVariationSettings.split(",").map((s) => s.trim());

    const interpolatedSettings = fromSettings
      .map((setting, i) => {
        const [axis, fromValue] = setting.split(" ");
        const toValue = toSettings[i]?.split(" ")[1] || fromValue;
        const from = parseFloat(fromValue);
        const to = parseFloat(toValue);
        const value = from + (to - from) * intensity;
        return `${axis} ${value}`;
      })
      .join(", ");

    return {
      fontVariationSettings: interpolatedSettings,
      fontFamily: fontFamily,
      transition: "font-variation-settings 0.1s ease-out",
    };
  };

  return (
    <div ref={containerRef} className={className} style={{ fontFamily }}>
      {label.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={getCharacterStyle(index)}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
