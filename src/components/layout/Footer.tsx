"use client";

import footerData from "@/data/footer.json";
import HipaaLogo from "./HipaaLogo";

export default function Footer() {
  const socialIcons = (
    <div className="flex items-center gap-3 text-white">
      <ul className="flex gap-2 text-white items-center">
        {/* Facebook */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg height="22" viewBox="6 6 24 24" width="22" className="w-5 h-5 fill-current">
              <path d="M30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 23.9895 10.3882 28.954 16.125 29.8542V21.4687H13.0781V18H16.125V15.3562C16.125 12.3488 17.9166 10.6875 20.6576 10.6875C21.9701 10.6875 23.3438 10.9219 23.3438 10.9219V13.875H21.8306C20.34 13.875 19.875 14.8001 19.875 15.75V18H23.2031L22.6711 21.4687H19.875V29.8542C25.6118 28.954 30 23.9895 30 18Z" />
            </svg>
          </a>
        </li>

        {/* Instagram */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5">
              <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0m112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112z" />
              <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128m0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80" />
              <circle cx="393.6" cy="118.4" r="17.056" />
            </svg>
          </a>
        </li>

        {/* LinkedIn -> Aboobakar Khan profile */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/aboobakarkhan/"
            aria-label="Aboobakar Khan LinkedIn"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" className="w-5 h-5">
              <path fill="#fff" fillRule="evenodd" d="M2.556 23h17.888A2.556 2.556 0 0 0 23 20.444V2.556A2.556 2.556 0 0 0 20.444 0H2.556A2.556 2.556 0 0 0 0 2.556v17.888A2.556 2.556 0 0 0 2.556 23" clipRule="evenodd" />
              <path fill="#284849" fillRule="evenodd" d="M19.805 19.806h-3.413v-5.814c0-1.594-.605-2.484-1.867-2.484-1.372 0-2.09.927-2.09 2.484v5.814H9.148V8.732h3.289v1.491s.989-1.83 3.339-1.83 4.03 1.435 4.03 4.401zM5.223 7.28a2.036 2.036 0 0 1-2.029-2.043c0-1.129.908-2.044 2.029-2.044S7.25 4.11 7.25 5.238A2.035 2.035 0 0 1 5.223 7.28M3.524 19.806h3.43V8.732h-3.43z" clipRule="evenodd" />
            </svg>
          </a>
        </li>

        {/* YouTube */}
        <li className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <a
            href="https://www.youtube.com/"
            aria-label="YouTube"
            className="hover:text-gray-300 transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" className="w-6 h-6">
              <path fill="#fff" d="M29.76 13.642s-.233-1.654-.955-2.381c-.914-.956-1.936-.961-2.405-1.017C23.044 10 18.005 10 18.005 10h-.01s-5.039 0-8.395.244c-.469.056-1.49.06-2.405 1.017-.722.727-.951 2.381-.951 2.381S6 15.588 6 17.528v1.819c0 1.94.24 3.886.24 3.886s.233 1.654.95 2.381c.915.956 2.115.924 2.65 1.027 1.92.182 8.16.239 8.16.239s5.044-.01 8.4-.249c.469-.056 1.49-.06 2.405-1.017.722-.727.956-2.381.956-2.381s.239-1.94.239-3.886v-1.819c0-1.94-.24-3.886-.24-3.886m-14.24 7.913v-6.746l6.483 3.385z" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Official Vector HIPAA Compliant Emblem */}
      <div className="pl-1">
        <HipaaLogo className="h-8 w-auto text-white" />
      </div>
    </div>
  );

  const newsletterForm = (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3">
        Sign up for our newsletter
      </h3>
      <div className="flex max-w-[310px]">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex w-full px-4 py-2.5 h-11 shadow-sm border border-[#4CAF7D]/25 rounded-l-full bg-white text-[#27484A] placeholder:text-[#27484A]/60 text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-r-full font-semibold min-h-[44px] text-white bg-[#5DA188] hover:bg-[#4E8F77] h-11 min-w-[85px] px-4 text-sm transition-colors cursor-pointer whitespace-nowrap shadow-sm"
        >
          Sign Up
        </button>
      </div>
    </form>
  );

  return (
    <footer className="relative bg-[#274849] text-white py-12 px-5 sm:px-10 lg:py-16 w-full">
      <div className="max-w-[1040px] mx-auto">
        {/* ── TOP HORIZONTAL DIVIDER LINE ── */}
        <div className="border-t border-[#4C7D75]/60 mb-10 sm:mb-12" />

        {/* ── MOBILE / PHONE FOOTER (Matches Uploaded Screenshot af62f399.jpg) ── */}
        <div className="block lg:hidden">
          {/* Wordmark (Bold) */}
          <div className="mb-8">
            <a href="/" className="inline-block hover:opacity-90 transition-opacity">
              <span className="font-sans text-[26px] font-bold tracking-[-0.03em] text-white">
                Abubakar Health
              </span>
            </a>
          </div>

          {/* 2-Column Responsive Layout */}
          <div className="flex flex-row gap-6 sm:gap-10 mb-12">
            {/* Left Column: About Us, Centers, and Action Buttons */}
            <div className="flex-1 flex flex-col gap-8">
              {/* About Us */}
              <div>
                <h3 className="text-[15px] font-semibold text-[#6FB29F] mb-3.5 whitespace-nowrap">
                  About Us
                </h3>
                <ul className="space-y-2.5">
                  {footerData.aboutUs.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.6] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Centers */}
              <div>
                <h3 className="text-[15px] font-semibold text-[#6FB29F] mb-3.5 whitespace-nowrap">
                  Centers
                </h3>
                <ul className="space-y-2.5">
                  {footerData.centers.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.6] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: Join Abubakar Health & Speak with an advisor */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="/join/care"
                  className="inline-flex items-center justify-center rounded-full bg-[#EBCFB8] text-[#284849] hover:bg-white transition-colors py-3 px-5 text-sm font-semibold w-full max-w-[280px] text-center shadow-sm"
                >
                  Join Abubakar Health
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#EACEB7] text-white hover:border-white transition-colors py-3 px-5 text-sm font-semibold w-full max-w-[280px] text-center"
                >
                  Speak with an advisor
                </a>
              </div>
            </div>

            {/* Right Column: Resources, Complete Care, Clinical Lab Review */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Resources */}
              <div>
                <h3 className="text-[15px] font-semibold text-[#6FB29F] mb-3.5 whitespace-nowrap">
                  Resources
                </h3>
                <ul className="space-y-2.5">
                  {footerData.resources.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.6] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Care */}
              <div>
                <h3 className="text-[15px] font-semibold text-[#6FB29F] mb-3.5 whitespace-nowrap">
                  Complete Care
                </h3>
                <ul className="space-y-2.5">
                  {footerData.completeCare.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.6] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Lab Review */}
              <div>
                <h3 className="text-[15px] font-semibold text-[#6FB29F] mb-3.5 whitespace-nowrap">
                  Clinical Lab Review
                </h3>
                <ul className="space-y-2.5">
                  {footerData.clinicalLabReview.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[14px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.6] block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup on Mobile */}
          <div className="mb-8">{newsletterForm}</div>

          {/* Share Abubakar Health on Mobile */}
          <div className="mb-8">
            <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3.5">
              Share Abubakar Health
            </h3>
            {socialIcons}
          </div>
        </div>

        {/* ── DESKTOP 4-COLUMN FOOTER NAVIGATION (hidden lg:flex) ── */}
        <div className="hidden lg:flex flex-row justify-between gap-8 pb-4">
          {/* COLUMN 1: Brand Wordmark, Newsletter, Socials & HIPAA */}
          <div className="min-w-[280px] flex-shrink-0">
            <div className="mb-6">
              <a href="/" className="inline-block hover:opacity-90 transition-opacity">
                <span className="font-sans text-[28px] font-bold tracking-[-0.03em] text-white">
                  Abubakar Health
                </span>
              </a>
            </div>

            <div className="mb-8">{newsletterForm}</div>

            <div>
              <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3.5">
                Share Abubakar Health
              </h3>
              {socialIcons}
            </div>
          </div>

          {/* COLUMNS 2, 3, 4: Tight Centered Layout */}
          <div className="flex flex-1 justify-between gap-8">
            {/* COLUMN 2: Complete Care & Clinical Lab Review */}
            <div className="min-w-[130px] max-w-[180px]">
              <div>
                <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3 whitespace-nowrap">
                  Complete Care
                </h3>
                <ul className="space-y-2">
                  {footerData.completeCare.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.8]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3 whitespace-nowrap">
                  Clinical Lab Review
                </h3>
                <ul className="space-y-2">
                  {footerData.clinicalLabReview.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.8]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLUMN 3: About Us + CTAs */}
            <div className="min-w-[140px] max-w-[195px]">
              <div>
                <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3 whitespace-nowrap">
                  About Us
                </h3>
                <ul className="space-y-2">
                  {footerData.aboutUs.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.8]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 space-y-3">
                <a
                  href="/join/care"
                  className="inline-flex items-center justify-center rounded-full bg-[#EBCFB8] text-[#284849] hover:bg-white transition-colors py-2.5 px-5 text-sm font-semibold w-full text-center whitespace-nowrap shadow-sm"
                >
                  Join Abubakar Health
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#EACEB7] text-white hover:border-white transition-colors py-2.5 px-5 text-sm font-semibold w-full text-center whitespace-nowrap"
                >
                  Speak with an advisor
                </a>
              </div>
            </div>

            {/* COLUMN 4: Resources & Centers */}
            <div className="min-w-[130px] max-w-[170px]">
              <div>
                <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3 whitespace-nowrap">
                  Resources
                </h3>
                <ul className="space-y-2">
                  {footerData.resources.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.8]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h3 className="text-[14.5px] font-semibold text-[#6FB29F] mb-3 whitespace-nowrap">
                  Centers
                </h3>
                <ul className="space-y-2">
                  {footerData.centers.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[13.5px] text-white font-medium hover:text-[#6FB29F] transition-colors leading-[1.8]"
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

        {/* ── BOTTOM HORIZONTAL DIVIDER LINE ── */}
        <div className="border-t border-[#4C7D75]/60 mt-10 pt-6">
          <div className="flex flex-col lg:items-end gap-1.5">
            {/* Copyright */}
            <div className="text-[11.5px] sm:text-[12px] text-white/95 text-center lg:text-right font-normal">
              {footerData.copyright}
            </div>

            {/* Legal Links with Close Vertical Divider Lines */}
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end text-[11.5px] sm:text-[12px] text-white/90">
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
                      className="text-[#4C7D75] mx-1 sm:mx-1.5 font-light select-none"
                    >
                      |
                    </span>
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
