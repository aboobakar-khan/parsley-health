"use client";

import footerData from "@/data/footer.json";

export default function Footer() {
  return (
    <footer className="bg-[#132D2E] text-[#FAF8F5] pt-12 pb-10 border-t border-[#4CAF7D]/30">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        {/* Main 4-Column Footer Grid matching uploaded screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* ── COLUMN 1: Brand Wordmark, Newsletter Pill, Socials & HIPAA (lg:col-span-4) ── */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            {/* Wordmark */}
            <a href="/" className="inline-block text-[#FAF8F5] hover:opacity-90 transition-opacity">
              <span className="font-sans text-[26px] font-semibold tracking-[-0.03em] text-white">
                Parsley Health
              </span>
            </a>

            {/* Newsletter */}
            <div className="mt-7 w-full max-w-[320px]">
              <h3 className="text-sm font-medium text-[#4CAF7D] mb-3">
                Sign up for our newsletter
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center rounded-full bg-white p-1 shadow-sm"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-l-full bg-transparent px-4 py-2 text-sm text-[#132D2E] placeholder:text-[#132D2E]/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#4CAF7D] hover:bg-[#3D9468] text-white px-5 py-2.5 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Share Parsley & HIPAA Emblem */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-[#4CAF7D] mb-3">
                Share Parsley
              </h3>
              <div className="flex items-center gap-4 text-white">
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/parsleyhealth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all text-[#FAF8F5]"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/parsleyhealth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all text-[#FAF8F5]"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/parsley-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all text-[#FAF8F5]"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@parsleyhealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-all text-[#FAF8F5]"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>

                {/* HIPAA Compliant Emblem */}
                <div className="flex items-center gap-1.5 pl-2 opacity-90 hover:opacity-100 transition-opacity">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      d="M12 2v20M12 2a4 4 0 0 1 4 4c0 3-4 5-4 8M12 2a4 4 0 0 0-4 4c0 3 4 5 4 8"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="2" r="1.5" fill="currentColor" />
                    <path d="M8 8h8M7 12h10" strokeLinecap="round" />
                  </svg>
                  <div className="flex flex-col text-[10px] uppercase font-bold tracking-tight text-white leading-tight">
                    <span>HIPAA</span>
                    <span>COMPLIANT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: Complete Care & Clinical Lab Review (lg:col-span-3) ── */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Complete Care Group */}
            <div>
              <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                Complete Care
              </h3>
              <ul className="space-y-2">
                {footerData.completeCare.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] text-[#FAF8F5]/85 hover:text-white hover:underline hover:underline-offset-4 decoration-[#4CAF7D] transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Lab Review Group */}
            <div>
              <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                Clinical Lab Review
              </h3>
              <ul className="space-y-2">
                {footerData.clinicalLabReview.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] text-[#FAF8F5]/85 hover:text-white hover:underline hover:underline-offset-4 decoration-[#4CAF7D] transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── COLUMN 3: About Us & Action Buttons (lg:col-span-3) ── */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                About Us
              </h3>
              <ul className="space-y-2">
                {footerData.aboutUs.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] text-[#FAF8F5]/85 hover:text-white hover:underline hover:underline-offset-4 decoration-[#4CAF7D] transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons matching screenshot */}
            <div className="mt-8 flex flex-col gap-3 w-full max-w-[280px]">
              {/* Peach Pill Button: Join Parsley */}
              <a
                href="/join/care"
                className="inline-flex items-center justify-center rounded-full bg-[#ECC8AE] text-[#132D2E] py-3.5 px-6 text-sm font-medium shadow-sm hover:opacity-95 transition-opacity text-center whitespace-nowrap"
              >
                Join Parsley
              </a>

              {/* Outline Pill Button: Speak with an advisor */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#ECC8AE] text-white py-3.5 px-6 text-sm font-medium hover:border-white transition-colors text-center whitespace-nowrap"
              >
                Speak with an advisor
              </a>
            </div>
          </div>

          {/* ── COLUMN 4: Resources & Centers (lg:col-span-2) ── */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Resources Group */}
            <div>
              <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerData.resources.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] text-[#FAF8F5]/85 hover:text-white hover:underline hover:underline-offset-4 decoration-[#4CAF7D] transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Centers Group */}
            <div>
              <h3 className="text-[15px] font-medium text-[#4CAF7D] mb-3 whitespace-nowrap">
                Centers
              </h3>
              <ul className="space-y-2">
                {footerData.centers.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] text-[#FAF8F5]/85 hover:text-white hover:underline hover:underline-offset-4 decoration-[#4CAF7D] transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Divider Line & Legal Metadata ── */}
        <div className="border-t border-[#4CAF7D]/30 pt-8 flex flex-col sm:items-end items-center gap-3">
          {/* Copyright Address */}
          <p className="text-[12px] sm:text-[13px] text-[#FAF8F5]/70 text-center sm:text-right font-normal">
            {footerData.copyright}
          </p>

          {/* Legal Links Row with Vertical Dividers */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2.5 gap-y-1 text-[12px] sm:text-[12.5px] text-[#FAF8F5]/75">
            {footerData.legal.map((item, idx) => (
              <span key={item.label} className="inline-flex items-center gap-2.5">
                <a
                  href={item.href}
                  className="hover:text-white hover:underline hover:underline-offset-2 transition-colors"
                >
                  {item.label}
                </a>
                {idx < footerData.legal.length - 1 && (
                  <span aria-hidden="true" className="h-2.5 w-px bg-[#4CAF7D]/50 inline-block" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}