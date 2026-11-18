"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/effects/MagneticButton";
import TiltCard from "@/components/effects/TiltCard";
import KineticHeading from "@/components/effects/KineticHeading";

export default function ValueProp() {
  const cubicEase = [0.23, 1, 0.32, 1] as const;

  return (
    <div className="bg-[#FAF8F5] text-[#132D2E]">
      {/* Part 1: Finally, a doctor who asks why */}
      <section className="py-20 lg:py-28 overflow-hidden border-b border-[#132D2E]/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Copy with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: cubicEase }}
              className="lg:col-span-6"
            >
              <KineticHeading
                as="h2"
                lines={[
                  "Finally, a doctor who asks why",
                  "— not just what.",
                ]}
                className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-[#132D2E]"
              />
              <p className="mt-6 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                Proactive care from clinicians who are trained to uncover the root cause of complex conditions. Resolve your symptoms and start feeling like the best version of yourself again.
              </p>
              <div className="mt-8">
                <MagneticButton as="a" href="/join/care" className="rounded-full">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-md hover:bg-[#1B3340] transition-colors cursor-pointer">
                    Join today
                  </span>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right: Real Editorial Photo with 3D Perspective Tilt & Specular Sheen */}
            <div className="lg:col-span-6">
              <TiltCard
                maxTilt={6}
                spotlightColor="rgba(19, 45, 46, 0.08)"
                className="rounded-3xl shadow-xl aspect-[4/3] group bg-[#EADEC8]"
              >
                <img
                  src="https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2Fbae37b8d24f04a8c8ee69e30bf16bec2?width=1080&quality=80&format=webp"
                  alt="Doctor consulting with patient at Abubakar Health"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Functional medicine, now accessible with insurance */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Real Editorial Photo with 3D Tilt */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <TiltCard
                maxTilt={6}
                spotlightColor="rgba(19, 45, 46, 0.08)"
                className="rounded-3xl shadow-xl aspect-[4/3] group bg-[#EADEC8]"
              >
                <img
                  src="https://cdn-builder.parsleyhealth.com/api/v1/image/assets%2F996895949aaa465aa438b22f75b680b6%2F026cb3ecb4ba4d01ab84345692f5d680?width=1080&quality=80&format=webp"
                  alt="Patient reviewing healthcare benefits"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </TiltCard>
            </div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: cubicEase }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <KineticHeading
                as="h2"
                lines={[
                  "Functional medicine, now",
                  "accessible with insurance.",
                ]}
                className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-[#132D2E]"
              />
              <p className="mt-6 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                Abubakar Health is the first and only functional medicine provider to accept insurance nationwide. Membership starts at $150/month with in-network coverage.
              </p>
              <p className="mt-4 text-base sm:text-lg text-[#132D2E]/80 leading-relaxed font-normal">
                No five-figure program fees, no long wait times. See a clinician within days, from the comfort of your own space.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <MagneticButton
                  as="a"
                  href="/join/care?focus=insurance&entry=insurance-module"
                  className="rounded-full"
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-[#132D2E] px-8 py-4 text-sm font-medium text-white shadow-md hover:bg-[#1B3340] transition-colors cursor-pointer">
                    Check eligibility
                  </span>
                </MagneticButton>
                <a
                  href="/insurance"
                  className="text-sm font-medium text-[#132D2E] underline underline-offset-8 hover:text-[#1B3340] transition-colors"
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
