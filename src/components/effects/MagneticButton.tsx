"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number; // 0.1 to 0.45
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  as?: "button" | "a" | "div";
  href?: string;
  [key: string]: unknown;
}

export default function MagneticButton({
  children,
  strength = 0.28,
  className = "",
  onClick,
  as = "div",
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);

  // High-fidelity spring physics (lerp equivalent from scroll-craft)
  const springConfig = { damping: 18, stiffness: 180, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Only enable magnetic tracking on pointer: fine and hover: hover devices
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
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = motion[as as keyof typeof motion] as React.ElementType;

  return (
    <Component
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
