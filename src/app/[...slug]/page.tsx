"use client";

import { Suspense } from "react";
import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

function PathDisplay() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  return (
    <span className="font-mono text-xs sm:text-sm bg-[#132D2E]/5 text-[#132D2E] px-2.5 py-1 rounded-md inline-block mb-3 border border-[#132D2E]/10">
      {pathname}
    </span>
  );
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 lg:py-28 px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#132D2E]/5 border border-[#132D2E]/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#4CAF7D] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#4CAF7D]" />
            <span>Coming Soon &bull; Abubakar Health</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-[#132D2E]">
            We are actively crafting this experience.
          </h1>

          {/* Path info & subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#132D2E]/75 leading-relaxed font-normal max-w-xl mx-auto">
            <Suspense fallback={null}>
              <PathDisplay />
            </Suspense>
            <br />
            Our full clinical program, in-network insurance verification, and specialized diagnostics are being prepared with the highest clinical care.
          </p>

          {/* Key Value Points */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-lg mx-auto">
            <div className="bg-white/80 border border-[#132D2E]/10 rounded-xl p-3.5 shadow-sm flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#4CAF7D] flex-shrink-0 mt-0.5" />
              <span className="text-xs text-[#132D2E]/90 font-medium leading-snug">
                Root-cause medicine &amp; lab review
              </span>
            </div>
            <div className="bg-white/80 border border-[#132D2E]/10 rounded-xl p-3.5 shadow-sm flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#4CAF7D] flex-shrink-0 mt-0.5" />
              <span className="text-xs text-[#132D2E]/90 font-medium leading-snug">
                Covered by major insurance
              </span>
            </div>
            <div className="bg-white/80 border border-[#132D2E]/10 rounded-xl p-3.5 shadow-sm flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#4CAF7D] flex-shrink-0 mt-0.5" />
              <span className="text-xs text-[#132D2E]/90 font-medium leading-snug">
                Personalized care plans
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#132D2E] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1a3d3e] transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <a
              href="https://www.linkedin.com/in/aboobakarkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#132D2E]/20 bg-white/60 text-[#132D2E] px-6 py-3.5 text-sm font-medium hover:bg-white hover:border-[#132D2E] transition-all"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-[#4CAF7D]" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
