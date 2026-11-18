"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis smooth inertial scrolling with scroll-craft calibrated lerp
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Publish scroll progress --sc-p and --sc-y to document for scroll-craft tokens
    lenis.on("scroll", (e: { progress: number; scroll: number; velocity: number }) => {
      document.documentElement.style.setProperty("--sc-p", e.progress.toFixed(4));
      document.documentElement.style.setProperty("--sc-y", `${Math.round(e.scroll)}px`);
      document.documentElement.style.setProperty("--sc-v", Math.abs(e.velocity).toFixed(2));
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
