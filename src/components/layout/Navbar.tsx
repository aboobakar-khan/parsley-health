"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navData from "@/data/nav.json";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cubicEase = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#132D2E] border-b border-white/5 transition-colors">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
          {/* Logo wordmark in bone white matching screenshot */}
          <a href="/" className="flex items-center text-[#FAF8F5] hover:opacity-90 transition-opacity">
            <span className="font-sans text-[22px] font-semibold tracking-[-0.03em] text-[#FAF8F5]">
              Parsley Health
            </span>
          </a>

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

                  {/* Dropdown Menu (Exact 2-column white card matching screenshot) */}
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
                            /* 2-column condition categories grid */
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
                            /* 2-column menu layout for Complete Care & Lab Review */
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
            {/* White Pill Button: Join now */}
            <a
              href={navData.cta.join.href}
              className="rounded-full bg-white text-[#132D2E] px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-[#FAF8F5] transition-all whitespace-nowrap"
            >
              {navData.cta.join.label}
            </a>

            {/* Log in with arrow */}
            <a
              href={navData.cta.login.href}
              className="text-sm font-medium text-[#FAF8F5] flex items-center gap-1.5 hover:text-white hover:underline hover:underline-offset-[7px] hover:decoration-[#4CAF7D] transition-all whitespace-nowrap"
            >
              <span>{navData.cta.login.label}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-[#FAF8F5]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[120px] z-40 bg-[#132D2E] px-6 py-8 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-4 text-[#FAF8F5]">
            {navData.links.map((link) => (
              <div key={link.href} className="border-b border-white/10 pb-3">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium block"
                >
                  {link.label}
                </a>
                {link.submenu && (
                  <div className="mt-2 pl-4 flex flex-col gap-2">
                    {link.submenu.slice(0, 4).map((sub) => (
                      <a
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-white/70 hover:text-white"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={navData.cta.join.href}
                className="flex items-center justify-center rounded-full bg-white py-3 text-base font-medium text-[#132D2E]"
              >
                {navData.cta.join.label}
              </a>
              <a
                href={navData.cta.login.href}
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 py-3 text-base font-medium text-[#FAF8F5]"
              >
                <span>{navData.cta.login.label}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}