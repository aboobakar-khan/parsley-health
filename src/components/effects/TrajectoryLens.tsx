"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

export default function TrajectoryLens() {
  const [mode, setMode] = useState<"root-cause" | "conventional">("root-cause");

  const metrics = {
    "root-cause": {
      title: "Abubakar Root-Cause Medicine",
      subtitle: "Whole-body cellular resolution powered by advanced biomarkers & specialized nutrition",
      timeWithDoctor: "4+ hours annually",
      biomarkers: "75+ in-depth markers",
      clinicalResolution: "89% symptom reduction",
      careTeam: "Doctor + Functional Nutrition Coach",
      insuranceStatus: "In-network coverage accepted",
      badgeColor: "bg-[#4CAF7D] text-white",
      curvePath: "M 20 180 C 120 170, 200 130, 300 80 C 400 40, 500 25, 580 20",
      accentColor: "#4CAF7D",
    },
    conventional: {
      title: "Conventional Sick-Care System",
      subtitle: "Quick 15-minute consultations focused primarily on masking acute symptoms with prescriptions",
      timeWithDoctor: "15 mins average",
      biomarkers: "Basic CBC / metabolic only",
      clinicalResolution: "Temporary mask with flare-ups",
      careTeam: "Rotating physician only",
      insuranceStatus: "Copay per rushed visit",
      badgeColor: "bg-[#C86D48] text-white",
      curvePath: "M 20 180 C 80 120, 160 170, 240 130 C 320 175, 420 145, 580 165",
      accentColor: "#C86D48",
    },
  };

  const current = metrics[mode];
  const cubicEase = [0.23, 1, 0.32, 1] as const;

  return (
    <section className="relative py-20 lg:py-32 bg-[#132D2E] text-[#FAF8F5] overflow-hidden border-t border-[#FAF8F5]/10">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            mode === "root-cause"
              ? "radial-gradient(circle 600px at 70% 30%, #4CAF7D, transparent 70%)"
              : "radial-gradient(circle 600px at 70% 30%, #C86D48, transparent 70%)",
          transition: "background 0.8s ease",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase text-[#BEE3D6] mb-3 font-sans">
            SIGNATURE CLINICAL LENS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.16] tracking-tight text-[#FAF8F5]">
            See the difference between masking symptoms and true recovery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FAF8F5]/80 font-normal leading-relaxed">
            Toggle between traditional rushed care and Abubakar Health&apos;s root-cause protocol to compare the physiological trajectory over 12 months.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#0A1A1B] border border-[#FAF8F5]/15 shadow-inner">
            <button
              onClick={() => setMode("root-cause")}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                mode === "root-cause"
                  ? "bg-[#4CAF7D] text-[#0A1A1B] font-semibold shadow-md"
                  : "text-[#FAF8F5]/70 hover:text-white"
              }`}
            >
              Abubakar Root-Cause Care
            </button>
            <button
              onClick={() => setMode("conventional")}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                mode === "conventional"
                  ? "bg-[#C86D48] text-white font-semibold shadow-md"
                  : "text-[#FAF8F5]/70 hover:text-white"
              }`}
            >
              Standard 15-Min Clinic
            </button>
          </div>
        </div>

        {/* Interactive Trajectory Canvas & Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Dynamic Biological Trajectory Graph (Col 7) */}
          <TiltCard
            maxTilt={5}
            spotlightColor="rgba(190, 227, 214, 0.08)"
            className="lg:col-span-7 bg-[#0C1E1F]/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#FAF8F5]/10 shadow-2xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#BEE3D6] font-semibold block">
                    BIOMARKER TRAJECTORY & CELLULAR HEALTH
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mt-1 font-light">
                    12-Month Health Progression Curve
                  </h3>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase ${current.badgeColor}`}
                >
                  {mode === "root-cause" ? "Sustained Healing" : "Chronic Cycle"}
                </span>
              </div>

              {/* Dynamic SVG Precision Curve */}
              <div className="relative w-full h-[230px] sm:h-[260px] bg-[#071314]/60 rounded-2xl p-4 border border-[#FAF8F5]/5 overflow-hidden">
                {/* Horizontal Baseline Grids */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                  <div className="border-b border-[#FAF8F5] w-full" />
                  <div className="border-b border-[#FAF8F5] w-full" />
                  <div className="border-b border-[#FAF8F5] w-full" />
                  <div className="border-b border-[#FAF8F5] w-full" />
                </div>

                {/* SVG Curve */}
                <svg
                  viewBox="0 0 600 200"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={current.accentColor} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={current.accentColor} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Area under curve */}
                  <motion.path
                    d={`${current.curvePath} L 580 200 L 20 200 Z`}
                    fill="url(#curveGradient)"
                    initial={false}
                    animate={{ d: `${current.curvePath} L 580 200 L 20 200 Z` }}
                    transition={{ duration: 0.8, ease: cubicEase }}
                  />

                  {/* Stroke Line */}
                  <motion.path
                    d={current.curvePath}
                    fill="none"
                    stroke={current.accentColor}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={false}
                    animate={{
                      d: current.curvePath,
                      stroke: current.accentColor,
                    }}
                    transition={{ duration: 0.8, ease: cubicEase }}
                  />
                </svg>

                {/* Time Axis Markers */}
                <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[11px] text-[#FAF8F5]/50 font-mono">
                  <span>Month 0: Intake</span>
                  <span>Month 3: Advanced Labs</span>
                  <span>Month 6: Nutrition Plan</span>
                  <span>Month 12: Resolution</span>
                </div>
              </div>
            </div>

            {/* Trajectory Insights Footer */}
            <div className="mt-6 pt-5 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-normal leading-relaxed max-w-lg">
                {current.subtitle}
              </p>
              <div className="text-right flex-none">
                <span className="text-xs text-[#FAF8F5]/50 block font-mono">CLINICAL OUTCOME</span>
                <span className="text-sm font-semibold text-[#BEE3D6]">{current.clinicalResolution}</span>
              </div>
            </div>
          </TiltCard>

          {/* Right: Comparative Clinical Telemetry (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <TiltCard
              maxTilt={4}
              spotlightColor="rgba(255, 255, 255, 0.05)"
              className="bg-[#0C1E1F]/90 rounded-2xl p-6 border border-[#FAF8F5]/10 shadow-xl backdrop-blur-md"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#BEE3D6]">
                01 / TIME WITH CLINICIAN
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5] mt-1">
                {current.timeWithDoctor}
              </p>
              <p className="text-xs text-[#FAF8F5]/70 mt-2 leading-relaxed">
                {mode === "root-cause"
                  ? "Extended 60-minute initial intakes and regular check-ins ensure we uncover your complete medical story."
                  : "The average primary care doctor visit lasts just 13 to 18 minutes, leaving no time for root causes."}
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={4}
              spotlightColor="rgba(255, 255, 255, 0.05)"
              className="bg-[#0C1E1F]/90 rounded-2xl p-6 border border-[#FAF8F5]/10 shadow-xl backdrop-blur-md"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#BEE3D6]">
                02 / ADVANCED TESTING
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5] mt-1">
                {current.biomarkers}
              </p>
              <p className="text-xs text-[#FAF8F5]/70 mt-2 leading-relaxed">
                {mode === "root-cause"
                  ? "Comprehensive hormones, gut microbiome, metabolic indicators, inflammatory markers, and nutrient levels."
                  : "Standard basic panels frequently miss subclinical dysfunctions and chronic inflammatory triggers."}
              </p>
            </TiltCard>

            <TiltCard
              maxTilt={4}
              spotlightColor="rgba(255, 255, 255, 0.05)"
              className="bg-[#0C1E1F]/90 rounded-2xl p-6 border border-[#FAF8F5]/10 shadow-xl backdrop-blur-md"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#BEE3D6]">
                03 / CARE ARCHITECTURE
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5] mt-1">
                {current.careTeam}
              </p>
              <p className="text-xs text-[#FAF8F5]/70 mt-2 leading-relaxed">
                {mode === "root-cause"
                  ? "Direct unlimited messaging with your dedicated doctor and licensed nutrition specialist."
                  : "Fragmented referrals across disparate clinics without continuous care coordination."}
              </p>
            </TiltCard>

            {/* Magnetic CTA Hook */}
            <div className="mt-2 text-center lg:text-left">
              <MagneticButton
                as="a"
                href="/join/care"
                className="w-full text-center rounded-full bg-[#BEE3D6] hover:bg-[#a9d9c9] text-[#132D2E] font-medium py-4 px-8 text-sm transition-all shadow-lg active:scale-95"
              >
                Experience Abubakar Health Care →
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
