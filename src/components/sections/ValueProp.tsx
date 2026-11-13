"use client";

import { motion } from "framer-motion";

export default function ValueProp() {
  return (
    <div className="bg-[#FAF8F5] text-[#132D2E]">
      {/* Part 1: Finally, a doctor who asks why */}
      <section className="py-20 lg:py-28 overflow-hidden border-b border-[#132D2E]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-[#132D2E]">
                Finally, a doctor who asks why — not just what.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                Proactive care from clinicians who are trained to uncover the root cause of complex conditions. Resolve your symptoms and start feeling like the best version of yourself again.
              </p>
              <div className="mt-8">
                <a
                  href="/join/care"
                  className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-sm hover:bg-[#1B3340]"
                >
                  Join today
                </a>
              </div>
            </motion.div>

            {/* Right: Real Editorial Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative overflow-hidden rounded-3xl bg-[#EADEC8] shadow-md aspect-[4/3]">
                <img
                  src="https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fbae37b8d24f04a8c8ee69e30bf16bec2?width=1080&quality=80&format=webp"
                  alt="Doctor consulting with patient at Parsley Health"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2: Functional medicine, now accessible with insurance */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Real Editorial Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl bg-[#EADEC8] shadow-md aspect-[4/3]">
                <img
                  src="https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2F026cb3ecb4ba4d01ab84345692f5d680?width=1080&quality=80&format=webp"
                  alt="Patient reviewing healthcare benefits"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-[#132D2E]">
                Functional medicine, now accessible with insurance.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                Parsley Health is the first and only functional medicine provider to accept insurance nationwide. Membership starts at $150/month with in-network coverage.
              </p>
              <p className="mt-4 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                No five-figure program fees, no long wait times. See a clinician within days, from the comfort of your own space.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="/join/care?focus=insurance&entry=insurance-module"
                  className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-sm hover:bg-[#1B3340]"
                >
                  Check eligibility
                </a>
                <a
                  href="/insurance"
                  className="text-sm font-medium text-[#132D2E] underline underline-offset-8 hover:text-[#1B3340]"
                >
                  Learn more about insurance →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
