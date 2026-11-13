"use client";

import { useRef } from "react";
import conditionsData from "@/data/conditions.json";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Conditions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28 text-[#132D2E] overflow-hidden border-t border-[#132D2E]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading, Primary CTA & Slider Controls */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.18] text-[#132D2E] max-w-[340px]">
              We get to the root of complex and chronic conditions
            </h2>

            <div className="mt-8">
              <a
                href="/care/conditions"
                className="inline-flex items-center gap-2 rounded-full bg-[#24524A] px-7 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-[#1A3D37] transition-colors"
              >
                <span>See what we treat</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="mt-12 flex items-center gap-3" aria-label="Conditions carousel controls">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous condition slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24524A]/30 text-[#24524A] hover:border-[#24524A] hover:bg-[#24524A]/5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next condition slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24524A]/30 text-[#24524A] hover:border-[#24524A] hover:bg-[#24524A]/5 transition-colors cursor-pointer"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Scrollable Cards */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {conditionsData.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[280px] sm:w-[320px] rounded-2xl border border-[#24524A]/25 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all snap-start"
                >
                  <div>
                    {/* Circular Photo */}
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden bg-[#FAF8F5] mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-[17px] font-semibold text-[#132D2E] tracking-tight">
                      {item.title}
                    </h3>

                    {/* Medical details */}
                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#132D2E]/70 font-normal">
                      {item.detail}
                    </p>
                  </div>

                  {/* Bottom Text Link with Arrow (clean underline, no divider line) */}
                  <div className="mt-8 pt-2">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#24524A] underline underline-offset-4 decoration-[#24524A]/40 hover:decoration-[#24524A] transition-all"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/join/care"
            className="inline-flex items-center gap-2 rounded-full bg-[#24524A] px-8 py-3.5 text-sm font-medium text-white shadow-md hover:bg-[#1A3D37] transition-all"
          >
            <span>Book your visit</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}