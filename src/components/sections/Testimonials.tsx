"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-[#E7F3EF] via-[#F2F8F6] to-[#FAF8F5] text-[#132D2E]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 5-Star Rating Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-xl sm:text-2xl tracking-[0.25em] text-[#132D2E] select-none">
            ★★★★★
          </span>
        </motion.div>

        {/* Featured Large Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[42px] font-light leading-[1.3] text-[#132D2E] tracking-tight">
            &ldquo;I&apos;ve tried every method, doctor, and diet. Nothing has compared to the incredible care at Abubakar Health that has made a massive difference in my healing after 10+ years of struggling.&rdquo;
          </blockquote>
        </motion.div>

        {/* Author Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base italic text-[#132D2E]/75 font-normal"
        >
          <p>
            <strong className="font-semibold text-[#132D2E]">Sam P.</strong> &bull; Verified Member
          </p>
        </motion.div>

        {/* Direct CTA Pill: Join now */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 md:mt-10"
        >
          <a
            href="/join/care"
            className="inline-flex items-center justify-center rounded-full bg-[#132D2E] hover:bg-[#1a3d3e] text-white px-9 py-4 text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            Join now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
