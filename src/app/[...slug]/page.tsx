"use client";

import { useState, Suspense } from "react";
import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  HeartHandshake,
  Check,
  Send,
} from "lucide-react";

function PathBadge() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-[#132D2E]/5 border border-[#132D2E]/10 px-3 py-1 text-xs font-mono text-[#132D2E] mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D] animate-pulse" />
      <span>Route: {pathname}</span>
    </div>
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const featureCards = [
    {
      icon: ShieldCheck,
      title: "In-Network Insurance",
      desc: "Covered by major health plans nationwide with FSA/HSA eligibility, removing five-figure clinic fees.",
      badge: "Nationwide Coverage",
    },
    {
      icon: Activity,
      title: "75+ Biomarker Diagnostics",
      desc: "Advanced functional lab testing that digs deeper into hormones, gut microbiome, and cellular metabolism.",
      badge: "Clinical Precision",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Care Team",
      desc: "Board-certified doctors paired with functional nutrition coaching for longitudinal, sustainable recovery.",
      badge: "Personalized Care",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#132D2E] selection:bg-[#BEE3D6] selection:text-[#132D2E]">
      <Banner />
      <Navbar />

      <main className="flex-grow">
        {/* ── HERO BANNER SECTION ── */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#132D2E]/10">
          {/* Subtle Ambient Background Gradients */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#BEE3D6]/35 via-[#ECC8AE]/20 to-transparent blur-3xl opacity-70" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#132D2E] text-white px-4 py-1.5 text-xs font-medium tracking-wide shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#4CAF7D] animate-ping" />
              <span>Clinical Innovation &bull; In Active Development</span>
            </div>

            {/* Dynamic Path Indicator */}
            <div>
              <Suspense fallback={null}>
                <PathBadge />
              </Suspense>
            </div>

            {/* Display Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-light leading-[1.12] text-[#132D2E] tracking-tight">
              Medical care designed for root cause,{" "}
              <span className="italic font-normal">not quick fixes.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg lg:text-[19px] text-[#132D2E]/80 max-w-2xl mx-auto leading-relaxed font-normal">
              We are actively preparing this specialized clinical service with our board-certified medical team. In the meantime, explore our active memberships or connect directly with leadership.
            </p>

            {/* Email Priority Notification Form */}
            <div className="mt-10 max-w-md mx-auto">
              {submitted ? (
                <div className="inline-flex items-center gap-3 rounded-full bg-[#BEE3D6]/60 border border-[#4CAF7D]/40 px-6 py-3.5 text-sm text-[#132D2E] font-medium shadow-sm animate-fade-in">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4CAF7D] text-white">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>You&apos;re on the priority list! We&apos;ll notify you first.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center rounded-full bg-white p-1.5 shadow-md border border-[#132D2E]/10 focus-within:border-[#132D2E] transition-all"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    required
                    className="w-full rounded-l-full bg-transparent px-4 py-2 text-sm text-[#132D2E] placeholder:text-[#132D2E]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#132D2E] hover:bg-[#1a3d3e] text-white px-5 py-2.5 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    <span>Notify Me</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#132D2E] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1a3d3e] transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <a
                href="https://www.linkedin.com/in/aboobakarkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#132D2E]/25 bg-white text-[#132D2E] px-6 py-3.5 text-sm font-medium hover:border-[#132D2E] hover:bg-[#FAF8F5] transition-all shadow-sm"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#4CAF7D]" />
              </a>
            </div>
          </div>
        </section>

        {/* ── PREVIEW CARDS SECTION ── */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#4CAF7D] mb-2">
                WHAT TO EXPECT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#132D2E]">
                The Abubakar Health Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#132D2E]/10 bg-[#FAF8F5] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#132D2E] text-white">
                          <Icon className="w-6 h-6 text-[#4CAF7D]" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#132D2E]/60 bg-white px-2.5 py-1 rounded-full border border-[#132D2E]/10">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-light text-[#132D2E] mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#132D2E]/75 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#132D2E]/10 flex items-center justify-between text-xs text-[#132D2E]/60">
                      <span>Status</span>
                      <span className="font-medium text-[#4CAF7D] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D]" />
                        Active Development
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
