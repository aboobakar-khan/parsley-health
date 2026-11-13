"use client";

import { useState } from "react";

export default function Offerings() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const roadmapItems = [
    "5 medical visits",
    "2 functional nutrition coach visits",
    "Labs and prescriptions",
    "Supplements (optional)",
    "Specialty tests (optional)",
    "Care team support",
  ];

  return (
    <section className="bg-[#132D2E] py-16 md:py-20 lg:py-28 text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-10">
        {/* Section Header: Experience the Abubakar Health Difference / Two ways to get started */}
        <div className="flex flex-col items-center gap-3 text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FAF8F5]/80 font-sans">
            Experience the Abubakar Health Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-[#FAF8F5]">
            Two ways to get started
          </h2>
        </div>

        {/* Desktop Interactive Expanding Accordion Cards (xl:flex) */}
        <div
          role="radiogroup"
          aria-label="Choose your Abubakar Health experience"
          className="hidden xl:flex w-full gap-3 items-stretch min-h-[604px]"
        >
          {/* ── CARD 0: Complete Care Membership ── */}
          <div
            role="radio"
            aria-checked={activeCard === 0}
            tabIndex={activeCard === 0 ? 0 : -1}
            onMouseEnter={() => setActiveCard(0)}
            onClick={() => setActiveCard(0)}
            style={{
              transition: "flex 550ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`min-h-[604px] min-w-0 bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-shadow duration-300 ${
              activeCard === 0 ? "flex-[7_1_0%]" : "flex-[3_1_0%] cursor-pointer hover:shadow-2xl"
            }`}
          >
            {/* Top Area */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#132D2E]/70 mb-3 font-sans">
                ONGOING CARE
              </p>
              <h3
                className={`font-serif font-light leading-tight text-[#132D2E] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0
                    ? "text-3xl sm:text-4xl lg:text-[40px]"
                    : "text-2xl sm:text-[28px] leading-[1.15]"
                }`}
              >
                Complete Care Membership
              </h3>

              {/* Description when Collapsed (smoothly visible) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0
                    ? "max-h-0 opacity-0 mt-0 pointer-events-none"
                    : "max-h-[160px] opacity-100 mt-4"
                }`}
              >
                <p className="font-sans text-sm text-[#132D2E]/80 leading-relaxed font-normal">
                  Our{" "}
                  <a
                    href="/care"
                    className="underline underline-offset-4 decoration-[#132D2E]/40 hover:decoration-[#132D2E]"
                  >
                    annual program
                  </a>{" "}
                  with a dedicated care team and personalized care plan. Medical visits, labs, and prescriptions billed to insurance.
                </p>
              </div>

              {/* Horizontal Timeline Roadmap when Expanded (smoothly visible) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0
                    ? "max-h-[220px] opacity-100 mt-10 mb-8"
                    : "max-h-0 opacity-0 mt-0 mb-0 pointer-events-none"
                }`}
              >
                <ol className="relative grid grid-cols-6 gap-x-3" aria-label="What's included in this plan">
                  {/* Connecting Line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[5.5px] right-[5.5px] top-[5px] h-px bg-[#132D2E]/25"
                  />
                  {roadmapItems.map((item, idx) => (
                    <li key={idx} className="relative flex flex-col items-start gap-3 pr-2">
                      <span
                        aria-hidden="true"
                        className="relative z-10 block h-[11px] w-[11px] rounded-full bg-[#4CAF7D] ring-2 ring-[#FAF8F5]"
                      />
                      <span className="font-sans text-[12px] sm:text-[13px] leading-[1.4] text-[#132D2E] font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Bottom Area: Pricing & CTA */}
            <div className="mt-auto pt-6">
              {/* Divider in collapsed state */}
              <span
                aria-hidden="true"
                className={`block h-px w-full bg-[#132D2E]/15 transition-opacity duration-500 mb-6 ${
                  activeCard === 0 ? "hidden" : "block"
                }`}
              />

              <div
                className={`grid grid-cols-1 gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 0 ? "lg:grid-cols-12 lg:items-end" : "flex flex-col"
                }`}
              >
                {/* Pricing & Join Now Button */}
                <div
                  className={`flex flex-col items-start text-left ${
                    activeCard === 0 ? "lg:col-span-7" : "w-full"
                  }`}
                >
                  <p className="font-sans text-base sm:text-[18px] text-[#132D2E] leading-snug">
                    <span className="font-medium">$150/month or $1,500/year</span>
                    {activeCard === 0 && (
                      <>
                        <span className="text-sm text-[#132D2E]/70 font-normal"> (in-network)</span>
                        <span aria-hidden="true"> &bull; </span>
                        <span className="text-sm text-[#132D2E]/60">$275/month (self-pay)</span>
                      </>
                    )}
                    {activeCard !== 0 && (
                      <span className="text-xs text-[#132D2E]/70 font-normal"> (in-network)</span>
                    )}
                  </p>
                  <p className="mt-1 font-sans text-xs sm:text-sm font-normal text-[#C86D48]">
                    Insurance accepted, HSA/FSA eligible
                  </p>
                  {activeCard === 0 && (
                    <p className="mt-1 font-sans text-xs text-[#132D2E]/60 transition-opacity duration-300">
                      12-month membership commitment
                    </p>
                  )}
                  <a
                    href="/join/care"
                    onClick={(e) => activeCard !== 0 && e.stopPropagation()}
                    className={`mt-5 inline-flex items-center justify-center rounded-full bg-[#132D2E] py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#1B3340] transition-all ${
                      activeCard === 0 ? "px-10" : "w-full px-6"
                    }`}
                  >
                    Join now
                  </a>
                </div>

                {/* Description when Expanded */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeCard === 0
                      ? "lg:col-span-5 max-h-[160px] opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/80 font-normal">
                    Our{" "}
                    <a
                      href="/care"
                      className="underline underline-offset-4 decoration-[#132D2E]/40 hover:decoration-[#132D2E]"
                    >
                      annual program
                    </a>{" "}
                    with a dedicated care team and personalized care plan. Medical visits, labs, and prescriptions billed to insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 1: Clinical Lab Review ── */}
          <div
            role="radio"
            aria-checked={activeCard === 1}
            tabIndex={activeCard === 1 ? 0 : -1}
            onMouseEnter={() => setActiveCard(1)}
            onClick={() => setActiveCard(1)}
            style={{
              transition: "flex 550ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`min-h-[604px] min-w-0 bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between p-8 sm:p-10 lg:p-12 transition-shadow duration-300 ${
              activeCard === 1 ? "flex-[7_1_0%]" : "flex-[3_1_0%] cursor-pointer hover:shadow-2xl"
            }`}
          >
            {/* Top Area */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#132D2E]/70 mb-3 font-sans">
                LAB INSIGHTS
              </p>
              <h3
                className={`font-serif font-light leading-tight text-[#132D2E] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1
                    ? "text-3xl sm:text-4xl lg:text-[40px]"
                    : "text-2xl sm:text-[28px] leading-[1.15]"
                }`}
              >
                Clinical Lab Review
              </h3>

              {/* Description when Collapsed (smoothly visible at top) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1
                    ? "max-h-0 opacity-0 mt-0 pointer-events-none"
                    : "max-h-[180px] opacity-100 mt-4"
                }`}
              >
                <p className="font-sans text-sm text-[#132D2E]/80 leading-relaxed font-normal">
                  Not ready for Complete Care yet? Meet with a clinician to{" "}
                  <a
                    href="/labs"
                    className="underline underline-offset-4 decoration-[#132D2E]/40 hover:decoration-[#132D2E]"
                  >
                    review your lab results
                  </a>{" "}
                  and get a clear picture of your health. Bring any bloodwork from the past 6 months.
                </p>
              </div>
            </div>

            {/* Bottom Area: Pricing & CTA */}
            <div className="mt-auto pt-6">
              {/* Divider in collapsed state */}
              <span
                aria-hidden="true"
                className={`block h-px w-full bg-[#132D2E]/15 transition-opacity duration-500 mb-6 ${
                  activeCard === 1 ? "hidden" : "block"
                }`}
              />

              <div
                className={`grid grid-cols-1 gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCard === 1 ? "lg:grid-cols-12 lg:items-end" : "flex flex-col"
                }`}
              >
                {/* Pricing & Review Your Labs Button */}
                <div
                  className={`flex flex-col items-start text-left ${
                    activeCard === 1 ? "lg:col-span-7" : "w-full"
                  }`}
                >
                  <p className="font-sans text-base sm:text-[18px] text-[#132D2E] leading-snug">
                    <span className="font-medium">$250/visit</span>
                    <span aria-hidden="true"> &bull; </span>
                    <span className="text-sm text-[#132D2E]/60">Self-pay only</span>
                  </p>
                  <p className="mt-1 font-sans text-xs sm:text-sm font-normal text-[#C86D48]">
                    HSA/FSA eligible
                  </p>
                  <p className="mt-1 font-sans text-xs text-[#132D2E]/60 leading-relaxed">
                    $250 credit will be applied to Complete Care membership if you sign up post-visit
                  </p>
                  <a
                    href="/join/labs"
                    onClick={(e) => activeCard !== 1 && e.stopPropagation()}
                    className={`mt-5 inline-flex items-center justify-center rounded-full border-2 border-[#132D2E] py-3.5 text-sm font-medium text-[#132D2E] hover:bg-[#132D2E] hover:text-white transition-all ${
                      activeCard === 1 ? "px-10" : "w-full px-6"
                    }`}
                  >
                    Review your labs
                  </a>
                </div>

                {/* Description when Expanded (smoothly visible at right bottom) */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeCard === 1
                      ? "lg:col-span-5 max-h-[180px] opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/80 font-normal">
                    Not ready for Complete Care yet? Meet with a clinician to{" "}
                    <a
                      href="/labs"
                      className="underline underline-offset-4 decoration-[#132D2E]/40 hover:decoration-[#132D2E]"
                    >
                      review your lab results
                    </a>{" "}
                    and get a clear picture of your health. Bring any bloodwork from the past 6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile & Tablet View (xl:hidden): Pixel-perfect authentic stacked cards ── */}
        <div className="flex xl:hidden flex-col gap-6 w-full max-w-[640px] mx-auto">
          {/* Mobile Card 1: Complete Care Membership */}
          <div className="flex flex-col gap-7 sm:gap-8 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 shadow-md">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#132D2E]/70 font-sans">
                ONGOING CARE
              </p>
              <h3 className="font-serif font-light tracking-[-0.01em] text-[#132D2E] text-[30px] sm:text-[34px] leading-[1.12]">
                Complete Care Membership
              </h3>
            </div>

            {/* Body Description */}
            <div className="font-sans text-[15px] leading-[1.6] tracking-[-0.01em] text-[#132D2E]/85">
              <p>
                Our{" "}
                <a
                  href="/care"
                  className="underline underline-offset-4 decoration-[#132D2E]/40 hover:decoration-[#132D2E]"
                >
                  annual program
                </a>{" "}
                with a dedicated care team and personalized care plan. Medical visits, labs, and prescriptions billed to insurance.
              </p>
            </div>

            {/* Vertical 6-step Roadmap with connecting line */}
            <ol className="relative flex flex-col gap-4 sm:gap-5" aria-label="What's included in this plan">
              <span
                aria-hidden="true"
                className="absolute left-[5px] top-[6px] bottom-[6px] w-px bg-[#132D2E]/30"
              />
              {roadmapItems.map((item, idx) => (
                <li key={idx} className="relative flex items-start gap-3.5 sm:gap-4">
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-[5px] block h-[11px] w-[11px] flex-none rounded-full bg-[#4CAF7D] ring-2 ring-[#FAF8F5]"
                  />
                  <span className="font-sans text-[14px] leading-[1.5] tracking-[-0.01em] text-[#132D2E]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            {/* Pricing & CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex w-full flex-col items-start text-left">
                <span aria-hidden="true" className="mb-6 block h-px w-full bg-[#132D2E]/15" />
                <p className="font-sans text-[18px] sm:text-[20px] leading-[1.4] tracking-[-0.01em] text-[#132D2E]">
                  <span className="font-medium">$150/month or $1,500/year (in-network)</span>
                  <span aria-hidden="true" className="text-[#132D2E]/40"> · </span>
                  <span className="text-[14px] text-[#132D2E]/70">$275/month (self-pay)</span>
                </p>
                <p className="mt-1 font-sans text-[15px] leading-6 tracking-[-0.01em] text-[#C86D48] font-medium">
                  Insurance accepted, HSA/FSA eligible
                </p>
                <p className="mt-1 font-sans text-[13px] sm:text-[14px] leading-[1.6] text-[#132D2E]/60">
                  12-month membership commitment
                </p>
              </div>

              <a
                href="/join/care"
                className="inline-flex items-center justify-center rounded-full bg-[#132D2E] text-white py-4 px-8 text-sm font-medium w-full sm:max-w-[280px] hover:bg-[#1B3340] active:scale-[0.99] transition-all shadow-sm"
              >
                Join now
              </a>
            </div>
          </div>

          {/* Mobile Card 2: Clinical Lab Review */}
          <div className="flex flex-col gap-7 sm:gap-8 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 shadow-md">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#132D2E]/70 font-sans">
                LAB INSIGHTS
              </p>
              <h3 className="font-serif font-light tracking-[-0.01em] text-[#132D2E] text-[30px] sm:text-[34px] leading-[1.12]">
                Clinical Lab Review
              </h3>
            </div>

            {/* Body Description */}
            <div className="font-sans text-[15px] leading-[1.6] tracking-[-0.01em] text-[#132D2E]/85">
              <p>
                Not ready for Complete Care yet? Meet with a clinician to{" "}
                <a
                  href="/labs"
                  className="underline underline-offset-4 decoration-[#132D2E]/40 hover:decoration-[#132D2E]"
                >
                  review your lab results
                </a>{" "}
                and get a clear picture of your health. Bring any bloodwork from the past 6 months.
              </p>
            </div>

            {/* Pricing & CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex w-full flex-col items-start text-left">
                <span aria-hidden="true" className="mb-6 block h-px w-full bg-[#132D2E]/15" />
                <p className="font-sans text-[18px] sm:text-[20px] leading-[1.4] tracking-[-0.01em] text-[#132D2E]">
                  <span className="font-medium">$250/visit</span>
                  <span aria-hidden="true" className="text-[#132D2E]/40"> · </span>
                  <span className="text-[14px] text-[#132D2E]/70">Self-pay only</span>
                </p>
                <p className="mt-1 font-sans text-[15px] leading-6 tracking-[-0.01em] text-[#C86D48] font-medium">
                  HSA/FSA eligible
                </p>
                <p className="mt-1 font-sans text-[13px] sm:text-[14px] leading-[1.6] text-[#132D2E]/60">
                  $250 credit will be applied to Complete Care membership if you sign up post-visit
                </p>
              </div>

              <a
                href="/join/labs"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#132D2E] text-[#132D2E] bg-transparent py-4 px-8 text-sm font-medium w-full sm:max-w-[280px] hover:bg-[#132D2E] hover:text-white active:scale-[0.99] transition-all"
              >
                Review your labs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
