"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="bg-[#132D2E] py-16 lg:py-24 text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-10">
        {/* Section Header: Experience the Parsley Difference / Two ways to get started */}
        <div className="flex flex-col items-center gap-3 text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FAF8F5]/80 font-sans">
            Experience the Parsley Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-[#FAF8F5]">
            Two ways to get started
          </h2>
        </div>

        {/* Desktop Interactive Expanding Accordion Cards (lg:flex) */}
        <div
          role="radiogroup"
          aria-label="Choose your Parsley experience"
          className="hidden lg:flex w-full gap-3 items-stretch min-h-[604px]"
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

        {/* Mobile View (lg:hidden): Stacked Cards */}
        <div className="flex lg:hidden flex-col gap-6">
          {/* Card 1 Mobile */}
          <div className="rounded-2xl bg-[#FAF8F5] p-8 flex flex-col gap-6 shadow-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#132D2E]/70 font-sans">
              ONGOING CARE
            </p>
            <h3 className="font-serif text-3xl font-light leading-tight text-[#132D2E]">
              Complete Care Membership
            </h3>
            <p className="font-sans text-sm text-[#132D2E]/80 leading-relaxed">
              Our annual program with a dedicated care team and personalized care plan. Medical visits, labs, and prescriptions billed to insurance.
            </p>
            <div className="pt-4 border-t border-[#132D2E]/10">
              <p className="font-sans text-base text-[#132D2E] font-medium">
                $150/month or $1,500/year (in-network)
              </p>
              <p className="text-xs text-[#132D2E]/60 mt-0.5">$275/month (self-pay)</p>
              <p className="text-sm font-normal text-[#C86D48] mt-1.5">Insurance accepted, HSA/FSA eligible</p>
              <a
                href="/join/care"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#132D2E] px-8 py-3.5 text-sm font-medium text-white shadow-sm"
              >
                Join now
              </a>
            </div>
          </div>

          {/* Card 2 Mobile */}
          <div className="rounded-2xl bg-[#FAF8F5] p-8 flex flex-col gap-6 shadow-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#132D2E]/70 font-sans">
              LAB INSIGHTS
            </p>
            <h3 className="font-serif text-3xl font-light leading-tight text-[#132D2E]">
              Clinical Lab Review
            </h3>
            <p className="font-sans text-sm text-[#132D2E]/80 leading-relaxed">
              Not ready for Complete Care yet? Meet with a clinician to review your lab results and get a clear picture of your health. Bring any bloodwork from the past 6 months.
            </p>
            <div className="pt-4 border-t border-[#132D2E]/10">
              <p className="font-sans text-base text-[#132D2E] font-medium">$250/visit &bull; Self-pay only</p>
              <p className="text-sm font-normal text-[#C86D48] mt-1.5">HSA/FSA eligible</p>
              <a
                href="/join/labs"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border-2 border-[#132D2E] px-8 py-3.5 text-sm font-medium text-[#132D2E]"
              >
                Review your labs
              </a>
            </div>
          </div>
        </div>

        {/* Centered Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/join/care"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3B3A] border border-white/10 px-8 py-3.5 text-sm font-medium text-white shadow-md hover:bg-[#284E4D] transition-all"
          >
            <span>Book your visit</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}