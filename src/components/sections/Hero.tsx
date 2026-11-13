"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#DCCBAF] min-h-[620px] lg:min-h-[700px] flex items-center">
      {/* Right Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url('https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fbfd79fe7d0d04888857d71a22f9308de?width=1920&quality=75&format=webp')`,
          }}
        />
        {/* Soft edge blend overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(220, 203, 175, 1) 0%, rgba(220, 203, 175, 0.95) 45%, rgba(220, 203, 175, 0.2) 75%, transparent 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl lg:max-w-2xl"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-light leading-[1.12] text-[#132D2E] tracking-tight">
            Medical care that uncovers the root cause of your symptoms
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#132D2E]/85 leading-relaxed font-normal">
            Work with a board-certified functional medicine clinician, nutrition coach, and dedicated care team focused on root cause care, so you can feel better and stay well. Now accepting insurance nationwide.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/join/care?focus=insurance&entry=home-hero-primary"
              className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#1B3340] active:scale-95"
            >
              Verify insurance
            </a>
            <a
              href="/join/care?entry=home-hero-secondary"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#132D2E] px-8 py-3.5 text-sm font-medium text-[#132D2E] transition-all hover:bg-[#132D2E] hover:text-white"
            >
              Join now
            </a>
          </div>

          {/* Feature Checkmarks Strip */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#132D2E] font-normal">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
