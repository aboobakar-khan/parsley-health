"use client";

import { motion } from "framer-motion";
import testimonialsData from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 text-[#132D2E] bg-gradient-to-b from-[#D8EFE8] to-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl tracking-widest text-[#132D2E] mb-4">
            ★★★★★
          </h2>
          <p className="text-sm font-medium uppercase tracking-wider text-[#132D2E]/60">
            Thousands of members rate us 5 stars
          </p>
        </div>

        {/* Featured Large Quote */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-[#132D2E]">
            &ldquo;I&apos;ve tried every method, doctor, and diet. Nothing has compared to the incredible care at Abubakar Health that has made a massive difference in my healing after 10+ years of struggling.&rdquo;
          </blockquote>
          <div className="mt-6 text-sm text-[#132D2E]/60 font-medium">
            Verified Abubakar Health Member
          </div>
        </div>

        {/* Supporting cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonialsData.slice(1, 4).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs text-amber-500 mb-3 tracking-widest">★★★★★</div>
                <p className="text-sm text-[#132D2E]/80 leading-relaxed font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 text-xs text-[#132D2E]/50 flex justify-between">
                <span className="font-medium text-[#132D2E]">{t.author}</span>
                <span>{t.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/reviews"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#132D2E] px-8 py-3 text-sm font-medium text-[#132D2E] hover:bg-[#132D2E] hover:text-white transition-all"
          >
            See all reviews
          </a>
        </div>
      </div>
    </section>
  );
}
