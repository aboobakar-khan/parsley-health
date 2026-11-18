"use client";

import React from "react";
import { motion } from "framer-motion";

interface KineticHeadingProps {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  delay?: number;
  greet?: boolean;
}

export default function KineticHeading({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  greet = false,
}: KineticHeadingProps) {
  const Component = as;
  const cubicEase = [0.23, 1, 0.32, 1] as const;
  const shouldGreet = greet || as === "h1";

  return (
    <Component className={className}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          className="block overflow-hidden py-[0.06em] -my-[0.06em]"
        >
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={shouldGreet ? { y: "0%", opacity: 1 } : undefined}
            whileInView={!shouldGreet ? { y: "0%", opacity: 1 } : undefined}
            viewport={!shouldGreet ? { once: true, amount: 0.05 } : undefined}
            transition={{
              duration: 0.85,
              delay: delay + idx * 0.12,
              ease: cubicEase,
            }}
            className="block will-change-transform"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
