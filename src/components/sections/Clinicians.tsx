"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Clinicians() {
  const credentials = [
    "Board-certified, with advanced functional medicine training",
    "Can prescribe medication when needed, including GLP-1s and hormone therapies",
    "Track your health progress via clinically validated Parsley Symptom Index (PSI)",
  ];

  return (
    <section className="bg-[#EADEC8] py-20 lg:py-28 text-[#132D2E] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Doctor Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#DCCBAF] shadow-lg aspect-[4/5] max-w-md mx-auto">
              <img
                src="https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2F488dfa40ea544a4a85bc137b856bc79a?width=1080&quality=80&format=webp"
                alt="Dr. Robin Berzin, MD – Functional Medicine Physician and Founder of Parsley Health"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                <div className="font-serif text-xl sm:text-2xl font-light">Dr. Robin Berzin, MD</div>
                <div className="text-xs text-white/80 mt-1 font-normal">
                  Functional Medicine Physician &amp; Founder of Parsley Health
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-[#132D2E]">
              Work with functional medicine experts who look deeper
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#132D2E]/85 leading-relaxed font-normal">
              Parsley clinicians are board-certified and experienced in conventional, functional, and longevity medicine.
            </p>

            <ul className="mt-8 space-y-4">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#132D2E]">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#132D2E] text-white mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="/providers"
                className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-sm hover:bg-[#1B3340]"
              >
                Meet our clinicians
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
