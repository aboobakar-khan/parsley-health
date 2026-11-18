"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Clinicians() {
  const credentials = [
    "Board-certified, with advanced functional medicine training",
    "Can prescribe medication when needed, including GLP-1s and hormone therapies",
    "Track your health progress via clinically validated Abubakar Health Symptom Index (AHSI)",
  ];

  const cubicEase = [0.23, 1, 0.32, 1] as const;

  return (
    <section className="bg-[#EADEC8] py-20 lg:py-28 text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Doctor Photo with Group Hover Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: cubicEase }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#DCCBAF] shadow-xl aspect-[4/5] max-w-md mx-auto group">
              <img
                src="https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2F488dfa40ea544a4a85bc137b856bc79a?width=1080&quality=80&format=webp"
                alt="Dr. Robin Berzin, MD – Functional Medicine Physician and Co-Founder at Abubakar Health"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 text-white z-10">
                <div className="font-serif text-xl sm:text-2xl font-light">Dr. Robin Berzin, MD</div>
                <div className="text-xs text-white/80 mt-1 font-normal">
                  Functional Medicine Physician &amp; Co-Founder at Abubakar Health
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
            className="lg:col-span-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-[#132D2E]">
              Work with functional medicine experts who look deeper
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#132D2E]/85 leading-relaxed font-normal">
              Abubakar Health clinicians are board-certified and experienced in conventional, functional, and longevity medicine.
            </p>

            <ul className="mt-8 space-y-4">
              {credentials.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: cubicEase }}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#132D2E]"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#132D2E] text-white mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="/providers"
                className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-md hover:bg-[#1B3340] transition-colors"
              >
                Meet our clinicians
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
