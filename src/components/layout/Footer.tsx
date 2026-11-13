"use client";

import footerData from "@/data/footer.json";
import HipaaLogo from "./HipaaLogo";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const socialCards = [
    {
      id: "liver",
      category: "Care Insight",
      tagColor: "text-[#78C9A6]",
      bg: "bg-[#1E3B3B]",
      quote: "Your liver with regular alcohol vs without it.",
      badge: "@abubakarhealth",
      serif: true,
    },
    {
      id: "gratitude",
      category: "Mind & Body",
      tagColor: "text-[#ECC8AE]",
      bg: "bg-[#78613A]",
      quote: "I'm grateful my body is healing every day.",
      badge: "Community",
      serif: true,
    },
    {
      id: "hormones",
      category: "Root Cause",
      tagColor: "text-[#BEE3D6]",
      bg: "bg-[#596944]",
      quote: "Hormone symptoms are usually not just a hormone issue.",
      badge: "Lab testing",
      serif: false,
    },
    {
      id: "bloat",
      category: "Gut Health",
      tagColor: "text-[#78C9A6]",
      bg: "bg-[#243F3D]",
      quote: "When and where you bloat says a lot about your microbiome.",
      badge: "Digestion",
      serif: false,
    },
    {
      id: "myth-fact",
      category: "Myth vs Fact",
      tagColor: "text-[#ECC8AE]",
      bg: "bg-[#2B4B52]",
      quote: "Insulin resistance develops from repeat metabolic patterns over time.",
      badge: "Metabolic",
      serif: false,
    },
    {
      id: "connection",
      category: "Whole Picture",
      tagColor: "text-[#78C9A6]",
      bg: "bg-[#435252]",
      quote: "Heavy periods, fatigue & brain fog: uncovering the root connection.",
      badge: "Longevity",
      serif: false,
    },
  ];

  return (
    <footer className="relative bg-[#284849] text-white py-12 px-6 sm:px-10 md:px-14 lg:py-20 lg:px-20 xl:px-28 w-full">
      <div className="max-w-[1120px] mx-auto">
        {/* ── TOP SECTION: Instagram & Community Editorial Grid ── */}
        <div className="border-b border-[#4CAF7D]/35 pb-8 mb-8 lg:mb-14">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <span className="text-[14px] font-medium text-[#78C9A6] tracking-wide">
              @abubakarhealth
            </span>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#78C9A6] hover:opacity-80 transition-opacity"
            >
              <span>Follow Us</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>

          {/* 6 High-Fidelity Editorial Cards Grid matching original SnapWidget embed */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {socialCards.map((card) => (
              <div
                key={card.id}
                className={`relative aspect-square rounded-xl overflow-hidden ${card.bg} p-4 flex flex-col justify-between text-white shadow-sm border border-white/5 hover:scale-[1.02] transition-transform cursor-pointer`}
              >
                <div className={`text-[10px] uppercase tracking-wider font-semibold ${card.tagColor}`}>
                  {card.category}
                </div>
                <p
                  className={`text-xs sm:text-[12.5px] leading-snug ${
                    card.serif ? "font-serif italic font-light" : "font-sans font-medium"
                  }`}
                >
                  &ldquo;{card.quote}&rdquo;
                </p>
                <span className="text-[10px] text-white/60 font-medium">
                  {card.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN NAVIGATION BLOCK ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mb-8 lg:mb-14">
          {/* ── COLUMN 1: Brand Wordmark, Newsletter, Socials & HIPAA ── */}
          <div className="min-w-[280px] lg:min-w-[300px] flex-shrink-0">
            {/* Wordmark */}
            <div className="mb-7">
              <a href="/" className="inline-block hover:opacity-90 transition-opacity">
                <span className="font-sans text-[26px] sm:text-[28px] font-semibold tracking-[-0.03em] text-white">
                  Abubakar Health
                </span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mb-8">
              <form onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3">
                  Sign up for our newsletter
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex w-full px-4 py-2 h-12 shadow-sm border border-[#4CAF7D]/25 rounded-l-full bg-white text-[#284849] placeholder:text-[#284849]/60 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-r-full font-medium min-h-[46px] text-white bg-[#4CAF7D] hover:bg-[#3d9468] h-12 min-w-[90px] px-4 text-[15px] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Social Channels & HIPAA */}
            <div>
              <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3">
                Share Abubakar Health
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-white">
                <ul className="flex gap-2 text-white items-center">
                  {/* Facebook */}
                  <li className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <a
                      href="https://www.facebook.com/"
                      aria-label="Facebook"
                      className="hover:text-gray-300 transition-colors"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg height="24" viewBox="6 6 24 24" width="24" className="w-6 h-6 fill-current">
                        <path d="M30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 23.9895 10.3882 28.954 16.125 29.8542V21.4687H13.0781V18H16.125V15.3562C16.125 12.3488 17.9166 10.6875 20.6576 10.6875C21.9701 10.6875 23.3438 10.9219 23.3438 10.9219V13.875H21.8306C20.34 13.875 19.875 14.8001 19.875 15.75V18H23.2031L22.6711 21.4687H19.875V29.8542C25.6118 28.954 30 23.9895 30 18Z" />
                      </svg>
                    </a>
                  </li>

                  {/* Instagram */}
                  <li className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <a
                      href="https://www.instagram.com/"
                      aria-label="Instagram"
                      className="hover:text-gray-300 transition-colors"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6">
                        <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0m112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112z" />
                        <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128m0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80" />
                        <circle cx="393.6" cy="118.4" r="17.056" />
                      </svg>
                    </a>
                  </li>

                  {/* LinkedIn -> Aboobakar Khan Profile */}
                  <li className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <a
                      href="https://www.linkedin.com/in/aboobakarkhan/"
                      aria-label="Aboobakar Khan LinkedIn"
                      className="hover:text-gray-300 transition-colors"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none" className="w-6 h-6">
                        <path fill="#fff" fillRule="evenodd" d="M2.556 23h17.888A2.556 2.556 0 0 0 23 20.444V2.556A2.556 2.556 0 0 0 20.444 0H2.556A2.556 2.556 0 0 0 0 2.556v17.888A2.556 2.556 0 0 0 2.556 23" clipRule="evenodd" />
                        <path fill="#284849" fillRule="evenodd" d="M19.805 19.806h-3.413v-5.814c0-1.594-.605-2.484-1.867-2.484-1.372 0-2.09.927-2.09 2.484v5.814H9.148V8.732h3.289v1.491s.989-1.83 3.339-1.83 4.03 1.435 4.03 4.401zM5.223 7.28a2.036 2.036 0 0 1-2.029-2.043c0-1.129.908-2.044 2.029-2.044S7.25 4.11 7.25 5.238A2.035 2.035 0 0 1 5.223 7.28M3.524 19.806h3.43V8.732h-3.43z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>

                  {/* YouTube */}
                  <li className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <a
                      href="https://www.youtube.com/"
                      aria-label="YouTube"
                      className="hover:text-gray-300 transition-colors"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" className="w-7 h-7">
                        <path fill="#fff" d="M29.76 13.642s-.233-1.654-.955-2.381c-.914-.956-1.936-.961-2.405-1.017C23.044 10 18.005 10 18.005 10h-.01s-5.039 0-8.395.244c-.469.056-1.49.06-2.405 1.017-.722.727-.951 2.381-.951 2.381S6 15.588 6 17.528v1.819c0 1.94.24 3.886.24 3.886s.233 1.654.95 2.381c.915.956 2.115.924 2.65 1.027 1.92.182 8.16.239 8.16.239s5.044-.01 8.4-.249c.469-.056 1.49-.06 2.405-1.017.722-.727.956-2.381.956-2.381s.239-1.94.239-3.886v-1.819c0-1.94-.24-3.886-.24-3.886m-14.24 7.913v-6.746l6.483 3.385z" />
                      </svg>
                    </a>
                  </li>
                </ul>

                {/* Official Vector HIPAA Compliant Emblem from REA */}
                <div className="pl-2">
                  <HipaaLogo className="h-9 w-auto text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMNS: Navigation & Actions ── */}
          <div className="flex flex-1 flex-wrap sm:flex-nowrap justify-between gap-8 lg:gap-12">
            {/* COLUMN 2: Complete Care & Clinical Lab Review */}
            <div className="min-w-[140px] max-w-[200px]">
              <div>
                <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                  Complete Care
                </h3>
                <ul className="space-y-2">
                  {footerData.completeCare.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] sm:text-[14px] text-white/90 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                  Clinical Lab Review
                </h3>
                <ul className="space-y-2">
                  {footerData.clinicalLabReview.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] sm:text-[14px] text-white/90 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLUMN 3: About Us + CTA Buttons */}
            <div className="min-w-[150px] max-w-[210px]">
              <div>
                <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                  About Us
                </h3>
                <ul className="space-y-2">
                  {footerData.aboutUs.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] sm:text-[14px] text-white/90 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exact CTA Buttons matching original REA dump */}
              <div className="mt-8 space-y-3">
                <a
                  href="/join/care"
                  className="inline-flex items-center justify-center rounded-full bg-[#EBCFB8] text-[#284849] hover:bg-white transition-colors py-3 px-6 text-sm font-medium w-full text-center whitespace-nowrap shadow-sm"
                >
                  Join Abubakar Health
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#EBCFB8] text-white hover:border-white transition-colors py-3 px-6 text-sm font-medium w-full text-center whitespace-nowrap"
                >
                  Speak with an advisor
                </a>
              </div>
            </div>

            {/* COLUMN 4: Resources & Centers */}
            <div className="min-w-[140px] max-w-[200px]">
              <div>
                <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                  Resources
                </h3>
                <ul className="space-y-2">
                  {footerData.resources.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] sm:text-[14px] text-white/90 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                  Centers
                </h3>
                <ul className="space-y-2">
                  {footerData.centers.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] sm:text-[14px] text-white/90 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM LEGAL BAR WITH DIVIDER LINE MATCHING ORIGINAL ── */}
        <div className="border-t border-[#4CAF7D]/35 pt-6 mt-8 lg:mt-12">
          <div className="flex flex-col lg:items-end gap-2">
            <div className="text-[12px] sm:text-[13px] text-white text-center lg:text-right font-normal">
              {footerData.copyright}
            </div>
            <div className="flex flex-row flex-wrap lg:flex-nowrap lg:items-center items-center justify-center lg:justify-end gap-2 lg:gap-0 text-[12px] sm:text-[12.5px] text-white/85">
              {footerData.legal.map((item, idx) => (
                <span key={item.label} className="inline-flex items-center">
                  <a
                    href={item.href}
                    className="hover:text-gray-300 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                  {idx < footerData.legal.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="w-[1px] h-[10px] bg-[#4CAF7D] mx-2 hidden sm:inline-block"
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
