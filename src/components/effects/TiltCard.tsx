"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  maxTilt?: number; // 4 to 9 degrees
  className?: string;
  spotlight?: boolean;
  spotlightColor?: string;
}

export default function TiltCard({
  children,
  maxTilt = 6,
  className = "",
  spotlight = true,
  spotlightColor = "rgba(19, 45, 46, 0.06)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const springConfig = { damping: 22, stiffness: 220, mass: 0.15 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCanHover(mq.matches && !reduced.matches);

    const handler = (e: MediaQueryListEvent) => {
      setCanHover(e.matches && !reduced.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    // Tilt angle
    const targetX = (ny - 0.5) * -2 * maxTilt;
    const targetY = (nx - 0.5) * 2 * maxTilt;

    rotateX.set(targetX);
    rotateY.set(targetY);

    if (spotlight) {
      setSpotlightPos({
        x: nx * 100,
        y: ny * 100,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    if (spotlight) {
      setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        perspective: 1200,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Specular Spotlight Sheen */}
      {spotlight && canHover && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out z-20"
          style={{
            opacity: spotlightPos.opacity,
            background: `radial-gradient(450px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${spotlightColor}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}
