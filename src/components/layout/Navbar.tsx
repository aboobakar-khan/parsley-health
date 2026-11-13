"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navData from "@/data/nav.json";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── TOP NAVBAR ── */}
      <header className="sticky top-0 z-50 w-full bg-[#132D2E] border-b border-white/5 transition-colors">
        <div className="mx-auto flex h-[72px] sm:h-[78px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Mobile Left: Hamburger + Logo Wordmark */}
          <div className="flex items-center gap-3 lg:gap-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center p-2 text-[#FAF8F5] hover:opacity-80 active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6 stroke-[1.75]" />
            </button>

            <a
              href="/"
              className="flex items-center text-[#FAF8F5] hover:opacity-90 transition-opacity"
            >
              <span className="font-sans text-[20px] sm:text-[22px] font-semibold tracking-[-0.03em] text-[#FAF8F5]">
                Abubakar Health
              </span>
            </a>
          </div>

          {/* Desktop Nav Links with Micro-Interactions & Submenus */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 h-full">
            {navData.links.map((link) => {
              const hasSubmenu = Boolean(link.submenu && link.submenu.length > 0);
              const isHovered = hoveredMenu === link.label;

              return (
                <div
                  key={link.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => hasSubmenu && setHoveredMenu(link.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <a
                    href={link.href}
                    className={`text-[14px] xl:text-[14.5px] font-medium text-[#FAF8F5] transition-colors py-2 relative flex items-center ${
                      isHovered ? "text-white" : "hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Animated green underline matching original decoration-clover */}
                    {isHovered && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4CAF7D]"
                        transition={{ duration: 0.2, ease: cubicEase }}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu (Exact 2-column white card) */}
                  <AnimatePresence>
                    {hasSubmenu && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: cubicEase }}
                        className="absolute top-full left-0 z-50 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-black/5 p-8 sm:p-10">
                          {link.label === "What We Treat" ? (
                            <div className="grid grid-cols-2 gap-x-12 gap-y-4 min-w-[500px]">
                              {link.submenu?.map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.href}
                                  className="text-[14px] font-medium text-[#132D2E] hover:text-[#4CAF7D] transition-colors py-1"
                                >
                                  {sub.title}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-x-12 gap-y-5 min-w-[420px]">
                              {link.submenu?.map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.href}
                                  className="text-[14.5px] font-medium text-[#132D2E] hover:text-[#4CAF7D] transition-colors py-1 whitespace-nowrap"
                                >
                                  {sub.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: [Join now] button + [Log in ->] link */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <a
              href={navData.cta.join.href}
              className="rounded-full bg-white text-[#132D2E] px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-[#FAF8F5] transition-all whitespace-nowrap"
            >
              {navData.cta.join.label}
            </a>

            <a
              href={navData.cta.login.href}
              className="text-sm font-medium text-[#FAF8F5] flex items-center gap-1.5 hover:text-white hover:underline hover:underline-offset-[7px] hover:decoration-[#4CAF7D] transition-all whitespace-nowrap"
            >
              <span>{navData.cta.login.label}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Right: Pill button [Join now] matching phone screenshot */}
          <div className="lg:hidden flex items-center">
            <a
              href={navData.cta.join.href}
              className="rounded-full border-2 border-white/90 text-white px-5 py-2 text-sm font-medium hover:bg-white/10 active:scale-95 transition-all"
            >
              Join now
            </a>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER NAVIGATION MENU (Ivory Background Matching Real Parsley Health) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] lg:hidden flex flex-col bg-[#FAF8F5]"
          >
            {/* Drawer Header with Logo & Close Button */}
            <div className="flex items-center justify-between px-6 h-[72px] bg-[#132D2E] border-b border-white/10 flex-shrink-0">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-[20px] font-semibold tracking-[-0.03em] text-[#FAF8F5]"
              >
                Abubakar Health
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FAF8F5] hover:bg-white/20 active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body: Main Categories Only (Submenus revealed only on click) */}
            <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">
              <nav
                className="flex flex-col divide-y divide-[#132D2E]/10"
                aria-label="Mobile navigation"
              >
                {navData.links.map((link) => {
                  const hasSubmenu = Boolean(link.submenu && link.submenu.length > 0);
                  const isExpanded = openAccordion === link.label;

                  if (!hasSubmenu) {
                    /* Direct Main Link (e.g. Pricing & Insurance, Supplements) */
                    return (
                      <div key={link.label} className="py-2">
                        <a
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-3.5 px-2 text-[17px] font-medium text-[#132D2E] hover:text-[#4CAF7D] transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-4 h-4 text-[#132D2E]/40" />
                        </a>
                      </div>
                    );
                  }

                  /* Main Category with Submenu Accordion */
                  return (
                    <div key={link.label} className="py-2">
                      <button
                        onClick={() =>
                          setOpenAccordion(isExpanded ? null : link.label)
                        }
                        className="flex w-full items-center justify-between py-3.5 px-2 text-left text-[17px] font-medium text-[#132D2E] hover:text-[#4CAF7D] active:text-[#4CAF7D] transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{link.label}</span>
                        <span
                          className={`transition-transform duration-300 ${
                            isExpanded
                              ? "rotate-180 text-[#4CAF7D]"
                              : "text-[#132D2E]/40"
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </span>
                      </button>

                      {/* Smooth Sub-menu Expand / Collapse */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 pl-5 pb-3 pt-1 border-l-2 border-[#4CAF7D]/35 flex flex-col gap-3">
                              {link.submenu?.map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[15px] font-normal text-[#132D2E]/75 hover:text-[#132D2E] active:text-[#4CAF7D] py-1 transition-colors block"
                                >
                                  {sub.title}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Action Buttons in Drawer */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={navData.cta.join.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[#132D2E] py-4 text-center text-sm font-medium text-white shadow-md hover:bg-[#1B3340] active:scale-[0.99] transition-all"
                >
                  {navData.cta.join.label}
                </a>

                <a
                  href={navData.cta.login.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#132D2E]/25 py-3.5 text-center text-sm font-medium text-[#132D2E] hover:bg-[#132D2E]/5 transition-all"
                >
                  <span>{navData.cta.login.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* LinkedIn / Abubakar Health Profile Pill */}
                <div className="mt-4 pt-4 border-t border-[#132D2E]/10 text-center">
                  <a
                    href="https://www.linkedin.com/in/aboobakarkhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#132D2E]/60 hover:text-[#132D2E] transition-colors"
                  >
                    <span>Connect with Abubakar Khan on LinkedIn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE STICKY FLOATING CTA BUTTON ("Verify insurance →" matching phone screenshot) ── */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-5 flex items-center justify-center pointer-events-none md:hidden">
        <a
          href="/join/care?focus=insurance"
          className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#132D2E] text-white py-4 px-8 text-[15px] font-medium shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:bg-[#1B3340] active:scale-95 transition-all w-full max-w-[340px]"
        >
          <span>Verify insurance</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
