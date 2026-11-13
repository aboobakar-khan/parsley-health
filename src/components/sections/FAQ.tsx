"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "@/data/faq.json";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  // Default to second question open or first question open (as in screenshot where "Does Abubakar Health take insurance?" is open)
  const [openId, setOpenId] = useState<string | null>("insurance");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="bg-[#EBF2F0] py-20 lg:py-32 text-[#132D2E] overflow-visible">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20 justify-between items-start">
          {/* ── Left Column: Smooth Sticky Sidebar with Big Serif Text ── */}
          <div className="md:w-5/12 md:sticky md:top-36 md:self-start">
            <h2 className="font-serif text-[40px] sm:text-[48px] lg:text-[58px] font-light leading-[1.1] text-[#132D2E] tracking-[-0.01em]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* ── Right Column: Clean Border-Divided Accordion ── */}
          <div className="w-full md:w-7/12 flex flex-col">
            <div className="border-t border-[#132D2E]/20">
              {faqData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="border-b border-[#132D2E]/20">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 py-6 md:py-8 text-left transition-colors cursor-pointer group"
                    >
                      <span className="text-[18px] sm:text-[20px] md:text-[21px] font-medium text-[#132D2E] tracking-tight leading-snug pr-4">
                        {item.question}
                      </span>
                      <div className="mt-1 flex-shrink-0 text-[#2E6B56]">
                        {isOpen ? (
                          <Minus className="h-[18px] w-[18px] stroke-[1.5] text-[#2E6B56] transition-transform duration-200" />
                        ) : (
                          <Plus className="h-[18px] w-[18px] stroke-[1.5] text-[#2E6B56] transition-transform duration-200 group-hover:scale-110" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`content-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: cubicEase }}
                          className="overflow-hidden"
                        >
                          <div
                            className="pb-8 pt-0 font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#132D2E]/80 font-normal [&>a]:underline [&>a]:underline-offset-4 [&>a]:decoration-[#132D2E]/40 [&>a:hover]:decoration-[#132D2E]"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}