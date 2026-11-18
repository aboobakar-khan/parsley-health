"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/effects/TiltCard";
import MagneticButton from "@/components/effects/MagneticButton";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  const cubicEase = [0.23, 1, 0.32, 1] as const;
  // Display the 3 core patient reviews featured in the authentic design
  const featuredReviews = testimonials.slice(1, 4);

  return (
    <section className="w-full py-20 lg:py-28 bg-[#EEF5F2] text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Testimonial Cards Grid with 3D Tilt & Specular Sheen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featuredReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: cubicEase,
              }}
              className="h-full"
            >
              <TiltCard
                maxTilt={5}
                spotlightColor="rgba(19, 45, 46, 0.05)"
                className="h-full bg-white rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#132D2E]/5"
              >
                <div>
                  {/* Gold Stars */}
                  <div className="flex items-center gap-1 text-[#E68A00] text-sm mb-5 select-none">
                    {"★".repeat(5)}
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-sans text-[15px] sm:text-base leading-relaxed text-[#132D2E]/90 font-normal">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Attribution Divider & Name */}
                <div className="mt-8 pt-5 border-t border-[#132D2E]/10 flex items-center justify-between text-xs sm:text-[13px] text-[#132D2E]/70 font-sans">
                  <span className="font-semibold text-[#132D2E]">{review.author}</span>
                  <span>{review.location}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Centered CTA: See all reviews */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease: cubicEase }}
          className="mt-12 sm:mt-16 text-center"
        >
          <MagneticButton as="a" href="/reviews" className="rounded-full">
            <span className="inline-flex items-center justify-center rounded-full border-2 border-[#132D2E] px-10 py-3.5 text-sm font-medium text-[#132D2E] bg-white hover:bg-[#132D2E] hover:text-white transition-all shadow-sm hover:shadow-md cursor-pointer">
              See all reviews
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
