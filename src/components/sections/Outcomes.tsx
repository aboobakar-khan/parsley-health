"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Play } from "lucide-react";

export default function Outcomes() {
  const memberStories = [
    {
      id: "chelsea",
      name: "Chelsea",
      quote: "Completely changed my physical and mental health.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fe25ec9e1b4c3403bb8f9cc3a40636f78?width=640&quality=75&format=webp",
      alt: "Abubakar Health Member Chelsea",
      showCta: true,
    },
    {
      id: "bethany",
      name: "Bethany",
      quote: "I started getting answers through extensive testing.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2F677582783fa94c31a634ffbf187f306f?width=640&quality=75&format=webp",
      alt: "Abubakar Health Member Bethany",
      showCta: false,
    },
    {
      id: "julie",
      name: "Julie",
      quote: "Wow I might actually be able to fix this problem that I've dealt with my whole life.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fe27c31c07f794a62a8f85d2b1e85b054?width=640&quality=75&format=webp",
      alt: "Abubakar Health Member Julie",
      showCta: false,
    },
    {
      id: "christina",
      name: "Christina",
      quote: "They don't just put a band-aid on a symptom.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fe319d6282e194708b92df890ceaf2531?width=640&quality=75&format=webp",
      alt: "Abubakar Health Member Christina",
      showCta: false,
    },
  ];

  const comparisonRows = [
    {
      feature: "Finds the root cause",
      pcp: "x",
      functional: "check",
      concierge: "Varies",
      parsley: "check",
    },
    {
      feature: "Accepts insurance",
      pcp: "check",
      functional: "x",
      concierge: "x",
      parsley: "check",
    },
    {
      feature: "Typical cost",
      pcp: "$",
      functional: "$$$",
      concierge: "$$$$$",
      parsley: "$$",
    },
    {
      feature: "Care team and nutrition coach",
      pcp: "x",
      functional: "x",
      concierge: "x",
      parsley: "check",
    },
    {
      feature: "Tracks progress",
      pcp: "x",
      functional: "x",
      concierge: "x",
      parsley: "check",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#132D2E]">
      {/* ── PART 1: 89% REAL RESULTS WITH VIDEO STORY CARDS ───────────── */}
      <section className="py-20 lg:py-28 overflow-hidden border-b border-[#132D2E]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14">
            {/* Left Column: Stat Headline */}
            <div className="lg:w-[320px] lg:flex-shrink-0 mb-10 lg:mb-0">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#4CAF7D] mb-3">
                REAL RESULTS
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-light leading-[1.18] text-[#132D2E]">
                89% of Abubakar Health members improve or eliminate symptoms within a year
              </h2>
            </div>

            {/* Right Column: 9:16 Video / Portrait Member Stories Carousel */}
            <div className="flex-1 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory flex gap-4 sm:gap-6">
              {memberStories.map((story) => (
                <div
                  key={story.id}
                  className="flex-none w-[260px] sm:w-[280px] snap-start group relative rounded-2xl overflow-hidden shadow-md bg-white border border-[#132D2E]/10"
                >
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Floating Video Play Badge Button */}
                    <button
                      className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4CAF7D] cursor-pointer"
                      aria-label={`Play ${story.name}'s story video`}
                    >
                      <Play className="h-4 w-4 fill-white translate-x-0.5" />
                    </button>

                    {/* Content Layer at bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 flex flex-col justify-end">
                      <p className="font-sans text-xs tracking-wider uppercase text-white/70 font-semibold mb-1">
                        {story.name}
                      </p>
                      <p className="font-serif text-lg sm:text-[19px] font-light leading-snug text-white">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    {story.showCta && (
                      <div className="mt-4">
                        <a
                          href="/reviews"
                          className="inline-block rounded-full bg-[#C86D48] text-white px-5 py-2 text-xs font-medium hover:bg-[#B55D3A] transition-colors"
                        >
                          See all reviews
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2: HOW ABUBAKAR HEALTH COMPARES (Exact Match to Phone Screenshot) ── */}
      <section className="py-16 md:py-24 lg:py-36 overflow-visible relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#132D2E]/60 mb-3 sm:mb-4">
              HOW ABUBAKAR HEALTH COMPARES
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[58px] font-light leading-[1.15] text-[#132D2E] tracking-tight">
              Get more out of medicine than<br className="hidden sm:inline" /> you ever thought possible
            </h2>
          </div>

          {/* ── MOBILE 3-COLUMN TABLE (Exact Match to User's Phone Screenshot cb8fbc3b.jpg) ── */}
          <div className="block md:hidden border-t border-[#132D2E]/20 relative pb-12">
            {/* Table Header: 3 Columns */}
            <div className="grid grid-cols-3 items-stretch text-[#132D2E]">
              <div className="p-3 text-center leading-snug flex items-center justify-center text-[14px] sm:text-[15px] font-normal border-b border-[#132D2E]/20">
                Primary Care<br />Provider
              </div>
              <div className="p-3 text-center leading-snug flex items-center justify-center text-[14px] sm:text-[15px] font-normal border-b border-[#132D2E]/20">
                Functional<br />Medicine<br />Clinic
              </div>
              <div className="p-3 text-center text-[#132D2E] text-[15px] font-medium leading-snug flex items-center justify-center bg-[#BEE3D6] border-b border-[#132D2E]/20">
                Abubakar Health
              </div>
            </div>

            {/* Table Rows: 3 Columns */}
            <div>
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 items-stretch text-[#132D2E]"
                >
                  {/* Column 1: Primary Care Provider */}
                  <div className="p-3 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                    {row.pcp === "check" ? (
                      <svg className="w-6 h-6 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : row.pcp === "x" ? (
                      <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <span className="text-base font-medium text-[#132D2E]">{row.pcp}</span>
                    )}
                  </div>

                  {/* Column 2: Functional Medicine Clinic */}
                  <div className="p-3 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                    {row.functional === "check" ? (
                      <svg className="w-6 h-6 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : row.functional === "x" ? (
                      <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <span className="text-base font-medium text-[#132D2E]">{row.functional}</span>
                    )}
                  </div>

                  {/* Column 3: Abubakar Health (Solid Mint Column with stacked feature label) */}
                  <div className="p-3.5 flex flex-col items-center justify-center text-center bg-[#BEE3D6] border-b border-[#132D2E]/20">
                    {/* Stacked Feature Label inside Mint Column */}
                    <span className="text-[12px] text-[#132D2E]/80 leading-tight mb-2 font-normal">
                      {row.feature}
                    </span>
                    {row.parsley === "check" ? (
                      <svg className="w-6 h-6 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <span className="text-base font-medium text-[#132D2E]">{row.parsley}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP 5-COLUMN TABLE (hidden on mobile, visible md:block) ── */}
          <div className="hidden md:block relative pb-10">
            <div className="overflow-x-auto pb-4 scrollbar-none">
              <div className="min-w-[850px] border-t border-[#132D2E]/20 relative">
                {/* Continuous 100% Solid Mint Slab for Abubakar Health Column */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-[calc(100%*2/12)] bg-[#BEE3D6] pointer-events-none z-0"
                  aria-hidden="true"
                />

                {/* Table Header */}
                <div className="grid grid-cols-12 items-stretch text-sm font-medium text-[#132D2E] relative z-10">
                  <div className="col-span-4 p-6 md:p-8 border-b border-[#132D2E]/20" />
                  <div className="col-span-2 p-6 md:p-8 text-center leading-snug flex flex-col justify-end text-[16px] sm:text-[18px] lg:text-[19px] font-normal border-b border-[#132D2E]/20">
                    Primary Care<br />Provider
                  </div>
                  <div className="col-span-2 p-6 md:p-8 text-center leading-snug flex flex-col justify-end text-[16px] sm:text-[18px] lg:text-[19px] font-normal border-b border-[#132D2E]/20">
                    Functional<br />Medicine Clinic
                  </div>
                  <div className="col-span-2 p-6 md:p-8 text-center leading-snug flex flex-col justify-end text-[16px] sm:text-[18px] lg:text-[19px] font-normal border-b border-[#132D2E]/20">
                    Concierge<br />Clinic
                  </div>
                  <div className="col-span-2 p-6 md:p-8 text-center text-[#132D2E] text-[18px] sm:text-[20px] font-medium leading-snug flex items-center justify-center">
                    Abubakar Health
                  </div>
                </div>

                {/* Table Rows */}
                <div>
                  {comparisonRows.map((row) => (
                    <div
                      key={row.feature}
                      className="grid grid-cols-12 items-stretch text-[#132D2E] relative z-10"
                    >
                      {/* Feature Label */}
                      <div className="col-span-4 p-6 md:p-8 font-light text-lg sm:text-[21px] lg:text-[22px] text-[#132D2E] leading-normal flex items-center border-b border-[#132D2E]/20">
                        {row.feature}
                      </div>

                      {/* Primary Care Provider */}
                      <div className="col-span-2 p-6 md:p-8 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                        {row.pcp === "check" ? (
                          <svg className="w-7 h-7 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : row.pcp === "x" ? (
                          <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-lg sm:text-[20px] font-medium text-[#132D2E]">{row.pcp}</span>
                        )}
                      </div>

                      {/* Functional Medicine Clinic */}
                      <div className="col-span-2 p-6 md:p-8 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                        {row.functional === "check" ? (
                          <svg className="w-7 h-7 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : row.functional === "x" ? (
                          <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-lg sm:text-[20px] font-medium text-[#132D2E]">{row.functional}</span>
                        )}
                      </div>

                      {/* Concierge Clinic */}
                      <div className="col-span-2 p-6 md:p-8 flex items-center justify-center text-center border-b border-[#132D2E]/20">
                        {row.concierge === "check" ? (
                          <svg className="w-7 h-7 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : row.concierge === "x" ? (
                          <svg className="w-6 h-6 text-[#132D2E]/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-lg sm:text-[20px] font-medium text-[#132D2E]">{row.concierge}</span>
                        )}
                      </div>

                      {/* Abubakar Health Column */}
                      <div className="col-span-2 p-6 md:p-8 flex items-center justify-center text-center">
                        {row.parsley === "check" ? (
                          <svg className="w-7 h-7 text-[#132D2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : (
                          <span className="text-lg sm:text-[20px] font-medium text-[#132D2E] tracking-wider">{row.parsley}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Sticky Floating Button: Remains pinned while scrolling table */}
            <div className="sticky bottom-8 z-30 flex justify-center pointer-events-none mt-6">
              <a
                href="/join/care?focus=insurance"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#1E3B3A] hover:bg-[#132D2E] px-8 py-3.5 text-[15px] font-medium text-white shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Verify insurance</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
