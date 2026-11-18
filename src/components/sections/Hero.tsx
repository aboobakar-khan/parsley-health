"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";
import KineticHeading from "@/components/effects/KineticHeading";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure scroll through the hero act
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Lerped spring physics matching scroll-craft standards
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Dimensional Layer Transforms (hero-depth.md)
  // Layer 1: Background plane recedes slightly
  const bgY = useTransform(smoothProgress, [0, 1], [0, 70]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  // Layer 2: Atmospheric light gradient softens on scroll
  const gradientOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0.75]);

  // Layer 3: Subject plane (portrait) glides upward, creating spatial depth
  const subjectY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const subjectScale = useTransform(smoothProgress, [0, 1], [1, 1.03]);

  // Layer 4: Typography plane subtle deceleration
  const copyY = useTransform(smoothProgress, [0, 1], [0, -20]);

  const cubicEase = [0.23, 1, 0.32, 1] as const;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#DCCBAF] min-h-[640px] sm:min-h-[680px] lg:min-h-[740px] flex items-center"
    >
      {/* ── LAYER 1 & 2: Background Plane & Atmospheric Gradient (Independent Parallax) ── */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url('https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fbfd79fe7d0d04888857d71a22f9308de?width=1920&quality=75&format=webp')`,
          }}
        />
        {/* Soft edge blend overlay */}
        <motion.div
          style={{
            opacity: gradientOpacity,
            backgroundImage: `linear-gradient(90deg, rgba(220, 203, 175, 1) 0%, rgba(220, 203, 175, 0.96) 45%, rgba(220, 203, 175, 0.25) 75%, transparent 100%)`,
          }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* ── LAYER 3: Dedicated Subject Motion Plane on Large Screens ── */}
      <motion.div
        style={{ y: subjectY, scale: subjectScale }}
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block will-change-transform"
      >
        {/* Ambient warm lighting halo over subject */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#ECC8AE]/25 blur-3xl" />
      </motion.div>

      {/* ── LAYER 4: Semantic Content & Typography Plane ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 w-full">
        <motion.div style={{ y: copyY }} className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow with kinetic fade */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: cubicEase }}
            className="inline-flex items-center gap-2 rounded-full bg-[#132D2E]/10 border border-[#132D2E]/15 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-[#132D2E] mb-5 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D] animate-pulse" />
            <span>Root Cause Medicine</span>
          </motion.div>

          {/* Kinetic Headline */}
          <KineticHeading
            as="h1"
            lines={[
              "Medical care that uncovers",
              "the root cause of your symptoms",
            ]}
            className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-light leading-[1.12] text-[#132D2E] tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: cubicEase }}
            className="mt-6 text-base sm:text-lg text-[#132D2E]/85 leading-relaxed font-normal"
          >
            Work with a board-certified functional medicine clinician, nutrition coach, and dedicated care team focused on root cause care, so you can feel better and stay well. Now accepting insurance nationwide.
          </motion.p>

          {/* Action Buttons with Magnetic Pointer Physics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: cubicEase }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="/join/care?focus=insurance&entry=home-hero-primary"
              className="rounded-full"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-md hover:bg-[#1B3340] active:scale-95 transition-colors cursor-pointer">
                Verify insurance
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/join/care?entry=home-hero-secondary"
              className="rounded-full"
            >
              <span className="inline-flex items-center justify-center rounded-full border-2 border-[#132D2E] px-8 py-3.5 text-sm font-medium text-[#132D2E] bg-transparent hover:bg-[#132D2E] hover:text-white transition-colors cursor-pointer">
                Join now
              </span>
            </MagneticButton>
          </motion.div>

          {/* Feature Checkmarks Strip with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: cubicEase }}
            className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm text-[#132D2E] font-normal"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#132D2E] text-white">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>Board-certified clinicians</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#132D2E] text-white">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>Nationwide telehealth</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#132D2E] text-white">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>HSA/FSA eligible</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
