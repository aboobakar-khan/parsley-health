"use client";

import footerData from "@/data/footer.json";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#132D2E] text-[#FAF8F5]">
      {/* Top CTA Band */}
      <div className="bg-[#EBF2F0] text-[#132D2E] py-20 lg:py-24 text-center border-b border-[#132D2E]/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#132D2E] mb-6">
            Ready for a different kind of care?
          </h2>
          <p className="mx-auto max-w-xl text-[#132D2E]/80 text-base sm:text-lg mb-8 font-normal leading-relaxed">
            Take the first step toward understanding the root cause of your symptoms with dedicated doctors and personalized care plans.
          </p>
          <a
            href="/join/care"
            className="inline-flex items-center gap-2 rounded-full bg-[#132D2E] px-9 py-4 text-sm font-medium text-white shadow-md hover:bg-[#1B3340] active:scale-95"
          >
            <span>Get started today</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 mb-16">
          {/* Brand & Newsletter col (spans 2 on lg) */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 font-medium text-base tracking-tight mb-4 text-[#FAF8F5]">
              <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
                <circle cx="16" cy="16" r="14" fill="#4CAF7D" />
                <path
                  d="M10 22 Q10 10 16 10 Q22 10 22 16 Q22 22 16 22"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="10" r="2.5" fill="white" />
              </svg>
              <span>PARSLEY HEALTH</span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/60 mb-6 max-w-sm font-normal">
              Root-cause functional medicine accessible nationwide with insurance.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] placeholder-white/40 focus:outline-none focus:border-[#FAF8F5]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#FAF8F5] px-5 py-2.5 text-xs sm:text-sm font-medium text-[#132D2E] hover:bg-white"
              >
                Join
              </button>
            </form>
          </div>

          {/* Nav columns */}
          {footerData.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/40 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#FAF8F5]/70 hover:text-white transition-colors font-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#FAF8F5]/40 font-normal">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            {footerData.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
