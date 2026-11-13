"use client";

import { useState } from "react";
import navData from "@/data/nav.json";
import { X } from "lucide-react";

export default function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Announcement"
      className="relative z-50 flex min-h-[48px] items-center justify-center bg-[#D8EFE8] px-6 py-2.5 text-center text-xs sm:text-sm text-[#132D2E] border-b border-[#132D2E]/10"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 pr-6 font-normal">
        <span>{navData.announcement.text}</span>
        <a
          href={navData.announcement.cta.href}
          className="font-medium underline decoration-[#132D2E]/40 underline-offset-4 hover:decoration-[#132D2E]"
        >
          {navData.announcement.cta.label}
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#132D2E]/70 hover:bg-black/5 hover:text-[#132D2E] transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
