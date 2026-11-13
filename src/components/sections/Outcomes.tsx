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
      alt: "Parsley Member Chelsea",
      showCta: true,
    },
    {
      id: "bethany",
      name: "Bethany",
      quote: "I started getting answers through extensive testing.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2F677582783fa94c31a634ffbf187f306f?width=640&quality=75&format=webp",
      alt: "Parsley Member Bethany",
      showCta: false,
    },
    {
      id: "julie",
      name: "Julie",
      quote: "Wow I might actually be able to fix this problem that I've dealt with my whole life.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fe27c31c07f794a62a8f85d2b1e85b054?width=640&quality=75&format=webp",
      alt: "Parsley Member Julie",
      showCta: false,
    },
    {
      id: "christina",
      name: "Christina",
      quote: "They don't just put a band-aid on a symptom.",
      image: "https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fe319d6282e194708b92df890ceaf2531?width=640&quality=75&format=webp",
      alt: "Parsley Member Christina",
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
                89% of Parsley members improve or eliminate symptoms within a year
              </h2>
            </div>

            {/* Right Column: 9:16 Video / Portrait Member Stories Carousel */}
            <div className="flex-1 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory flex gap-4 sm:gap-6">
              {memberStories.map((story) => (
                <div
                  key={story.id}
                  className="flex-none w-[220px] sm:w-[245px] rounded-2xl bg-white border border-[#132D2E]/15 p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all snap-start"
                >
                  {/* Portrait Video Thumbnail (9:16 aspect) */}
                  <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-[#132D2E] mb-3">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#132D2E] shadow-md">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Member Name and Quote */}
                  <div className="px-1 pt-1 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-[17px] font-medium text-[#2E6B56] mb-1">
                        {story.name}
                      </div>
                      <div className="h-px w-full bg-[#132D2E]/10 my-2" />
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/80 font-normal">
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

      {/* ── PART 2: HOW PARSLEY COMPARES TABLE (Exact Match to Uploaded Screenshot) ── */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-tight text-[#132D2E]">
              Get more out of medicine than<br className="hidden sm:inline" /> you ever thought possible
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[700px] border-t border-[#132D2E]/15">
              {/* Table Header */}
              <div className="grid grid-cols-12 items-end border-b border-[#132D2E]/15 text-sm font-medium text-[#132D2E]">
                <div className="col-span-4 p-4 md:p-6" />
                <div className="col-span-2 p-4 text-center leading-snug">
                  Primary Care<br />Provider
                </div>
                <div className="col-span-2 p-4 text-center leading-snug">
                  Functional<br />Medicine Clinic
                </div>
                <div className="col-span-2 p-4 text-center leading-snug">
                  Concierge<br />Clinic
                </div>
                {/* Highlighted Parsley Health Column Header - perfectly flush mint block */}
                <div className="col-span-2 p-5 text-center bg-[#BEE3D6] text-[#132D2E] font-medium leading-snug">
                  Parsley Health
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-[#132D2E]/15">
                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-12 items-center text-sm text-[#132D2E]"
                  >
                    {/* Feature Label */}
                    <div className="col-span-4 p-4 md:p-6 font-normal text-base text-[#132D2E]">
                      {row.feature}
                    </div>

                    {/* Primary Care Provider */}
                    <div className="col-span-2 p-4 flex justify-center text-center">
                      {row.pcp === "check" ? (
                        <Check className="h-5 w-5 text-[#132D2E] stroke-[2.5]" />
                      ) : row.pcp === "x" ? (
                        <X className="h-5 w-5 text-[#9CA3AF] stroke-[1.5]" />
                      ) : (
                        <span className="text-sm text-[#132D2E]">{row.pcp}</span>
                      )}
                    </div>

                    {/* Functional Medicine Clinic */}
                    <div className="col-span-2 p-4 flex justify-center text-center">
                      {row.functional === "check" ? (
                        <Check className="h-5 w-5 text-[#132D2E] stroke-[2.5]" />
                      ) : row.functional === "x" ? (
                        <X className="h-5 w-5 text-[#9CA3AF] stroke-[1.5]" />
                      ) : (
                        <span className="text-sm text-[#132D2E]">{row.functional}</span>
                      )}
                    </div>

                    {/* Concierge Clinic */}
                    <div className="col-span-2 p-4 flex justify-center text-center">
                      {row.concierge === "check" ? (
                        <Check className="h-5 w-5 text-[#132D2E] stroke-[2.5]" />
                      ) : row.concierge === "x" ? (
                        <X className="h-5 w-5 text-[#9CA3AF] stroke-[1.5]" />
                      ) : (
                        <span className="text-sm text-[#132D2E]">{row.concierge}</span>
                      )}
                    </div>

                    {/* Parsley Health Column (Highlighted Mint Background) */}
                    <div className="col-span-2 p-5 flex justify-center text-center bg-[#BEE3D6]">
                      {row.parsley === "check" ? (
                        <Check className="h-5 w-5 text-[#132D2E] stroke-[2.5]" />
                      ) : (
                        <span className="text-sm font-medium text-[#132D2E]">{row.parsley}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlapping Floating Pill Button: Verify insurance → */}
            <div className="relative -mt-5 z-10 flex justify-center">
              <a
                href="/join/care?focus=insurance"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E3B3A] px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-[#152B2A] transition-all"
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