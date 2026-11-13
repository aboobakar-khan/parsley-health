# Parsley Health Rebuild

A faithful, modern full-stack reconstruction of [Parsley Health](https://www.parsleyhealth.com/) built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and modular JSON content models.

---

## ✨ Features & Scene-by-Scene Rebuild

- **Announcement Banner:** FSA/HSA verification notice with dismissible action.
- **Top Navigation Bar:**
  - `Parsley Health` wordmark.
  - Interactive two-column dropdown mega menus for *Complete Care Membership*, *Clinical Lab Review*, and *What We Treat* (11 condition categories).
  - Clover green hover underline micro-interaction (`#4CAF7D`).
  - Right CTAs: `Join now` white pill button + `Log in →` with arrow.
- **Hero Section:** Warm sand (`#DCCBAF`) display headline, high-resolution lifestyle photography, dual pill buttons, and benefit tags.
- **Value Proposition ("Finally, a doctor who asks why"):** Alternating editorial two-column clinical photography layouts.
- **Interactive Expanding Pricing Accordion ("Two ways to get started"):**
  - Smooth flex-accordion (`flex-[7]` vs `flex-[3]`) animated with the exact production cubic bezier easing `[0.22, 1, 0.36, 1]`.
  - Continuous visible text with no blank fading pauses.
  - *Complete Care Membership:* 6-step connected roadmap timeline with pricing and insurance terms.
  - *Clinical Lab Review:* $250 visit with $250 credit guarantee.
- **Patient Testimonials:** 5-star clinical review carousel.
- **Chronic Conditions Carousel ("We get to the root of complex and chronic conditions"):**
  - Smooth left/right circular arrow navigation.
  - Rounded cards with circular avatars, clinical condition summaries, and deep links.
- **Clinical Experts Section:** Functional medicine MD credentials and founder spotlight (Dr. Robin Berzin, MD).
- **Outcomes Metric (89%) & Video Stories:**
  - 89% member symptom improvement stat.
  - 9:16 portrait member story video cards with play overlays and quotes.
- **Comparison Matrix ("Get more out of medicine than you ever thought possible"):**
  - Side-by-side feature comparison: PCP vs Functional Medicine vs Concierge vs **Parsley Health**.
  - Solid rectangular mint column (`#BEE3D6`) across all 5 rows.
  - Overlapping floating pill CTA: `Verify insurance →`.
- **Frequently Asked Questions:**
  - Sticky editorial sidebar with large serif typography.
  - Full-bleed border-divided accordion with smooth height & opacity expansion.
- **Footer:** Pre-footer CTA banner + full 5-column sitemap, newsletter signup, and disclaimers.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.4.6 (App Router, Turbopack)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Data Architecture:** Modular JSON data files (`src/data/*.json`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. View the Side-by-Side Comparison Dashboard
Navigate to [http://localhost:3000/compare.html](http://localhost:3000/compare.html) to see synchronized viewport screenshot comparisons against the live parsleyhealth.com site.

### 4. Build for Production
```bash
npm run build
npm start
```
