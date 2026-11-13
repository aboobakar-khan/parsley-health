# REVERSE.md — parsleyhealth.com

> **Captured by REA v6.9.0** on 2026-11-13.  
> Evidence ID: `ev_69471c6db2b25838b678f13bf01396237f3386528738c79cc9c418f7d241b35a`  
> DOM: 345 KB · 416 events · 81 network transactions

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (Build ID `uRDOOpAGlKpp-y5NMtEtu`, SSR) |
| CMS | Builder.io (API key `996895949aaa465aa438b22f75b680b6`) |
| CSS | Tailwind CSS (compiled to `_next/static/css/88af5f5b47a3470e.css`) |
| Fonts | Euclid Circular B (Medium/Regular/Light) + Teodor Light — `static.parsley.health/fonts/` |
| Analytics | PostHog (via `pollen.parsleyhealth.com` proxy) + Customer.io + LogRocket |
| Images | Builder.io CDN (`cdn-builder.parsleyhealth.com`) — WebP, responsive |

**Brand Colors (reverse-engineered from CSS):**
- Background dark: `#1B3340` (deep sea) — applied to `<html>` via `bg-deep-sea`
- Accent green: `#4CAF7D`
- Text on dark: `#FFFFFF` / `#E8F0ED`
- Text on light: `#1B3340`
- Light section bg: `#F5F3EE` (warm cream)
- Card bg light: `#FFFFFF`

**CSS Variables:**
```css
--navbar-height-px: 79px;
--announcement-banner-height-px: 58px;
```

---

## Scene Map

### Scene 0 — Announcement Banner (58px)
**Purpose:** Promotional strip at the very top.  
**Content:**
- Text: "Parsley is in-network nationwide and FSA/HSA eligible."
- CTA Link: `Verify insurance` → `/join/care?focus=insurance&entry=fsa-hsa-banner&utm_source=www&utm_medium=announcement-banner&utm_campaign=evergreen&utm_content=verify-insurance`
- Style: dark background strip, centered text, dismissible

---

### Scene 1 — Navigation Bar (79px)
**Purpose:** Primary site navigation — sticky.  
**Content:**
- Logo: Parsley Health (SVG wordmark)
- Nav links:
  - `Complete Care Membership` → `/care?entry=nav-complete-care`
  - `Clinical Lab Review` → `/labs?entry=nav-lab-review`
  - `Pricing & Insurance` → `/insurance?entry=nav-insurance`
  - `What We Treat` → `/care/conditions?entry=nav-conditions` (dropdown)
  - `Supplements` → `/store?entry=nav-store`
- Right CTAs:
  - `Log in` → `https://my.parsleyhealth.com/login` (text link with arrow)
  - `Join now` → `/join/care?entry=nav-join-now` (filled button)
- Theme: dark navbar on `#1B3340`

---

### Scene 2 — Hero Section
**Purpose:** Full-width hero above the fold.  
**H1:** `Medical care that uncovers the root cause of your symptoms`  
**Subtext:** `Work with a board-certified functional medicine clinician and dedicated care team focused on root cause care, so you can feel better and stay well. Now accepting insurance nationwide.`  
**Badges (inline icon + text):**
- `Board-certified clinicians`
- `Nationwide telehealth`
**CTAs:**
- Primary: `Verify insurance` → `/join/care?focus=insurance&entry=home-hero-primary`
- Secondary: `Join now` → `/join/care?entry=home-hero-secondary`  
**Background:** Full-bleed image from Builder.io CDN — `3750f4a4ca2248f2b799908c3506f3e9` (doctor/patient scene, dark overlay)  
**Style:** Dark section, white text, two-column layout (text left, image right or full bleed with overlay)

---

### Scene 3 — Value Proposition
**Purpose:** Explain the differentiator vs. conventional medicine.  
**H2:** `Finally, a doctor who asks why — not just what.`  
**H2:** `Functional medicine, now accessible with insurance.`  
**Body Copy:**
- `Proactive care from clinicians who are trained to uncover the root cause of complex conditions. Resolve your symptoms and start feeling like the best version of yourself again.`
- `Parsley Health is the first and only functional medicine provider to accept insurance nationwide. Membership starts at $150/month with in-network coverage.`
- `No five-figure program fees, no long wait times. See a clinician within days, from the comfort of your own space.`  
**CTA:** `Learn more about insurance` → `/insurance`  
**Style:** Light cream section (`#F5F3EE`), dark text

---

### Scene 4 — Two Offerings (Product Cards)
**Purpose:** Bifurcate visitors into two purchase paths.  
**H2:** `Two ways to get started`

**Card A — Complete Care Membership:**
- Pricing: `$150/month or $1,500/year (in-network) · $275/month (self-pay)`
- Badges: `Insurance accepted, HSA/FSA eligible` · `12-month membership commitment`
- Description: `Our annual program with a dedicated care team and personalized care plan. Medical visits, labs, and prescriptions billed to insurance.`
- CTA: `Join today` → `/join/care`
- Secondary CTA: `Check eligibility` → `/join/care?focus=insurance&entry=insurance-module`
- Link: `Learn more about insurance` → `/insurance`

**Card B — Clinical Lab Review:**
- Pricing: `$250/visit · Self-pay only`
- Badge: `$250 credit will be applied to Complete Care membership if you sign up post-visit`
- Description: `Not ready for Complete Care yet? Meet with a clinician to review your lab results and get a clear picture of your health. Bring any bloodwork from the past 6 months.`
- CTA: `Review your labs` → `/join/labs`

**Style:** White cards on cream/dark bg, side-by-side layout on desktop

---

### Scene 5 — Social Proof / Testimonials
**Purpose:** Build trust via ratings and reviews.  
**H2:** `★★★★★` (5 stars)  
**Testimonial quote:**
> "I've tried every method, doctor, and diet. Nothing has compared to the incredible care at Parsley that has made a massive difference in my healing after 10+ years of struggling."

**Additional short quotes (from DOM):**
- "Completely changed my physical and mental health."
- "I started getting answers through extensive testing."
- "Wow I might actually be able to fix this problem that I've dealt with my whole life."
- "The whole practice is unique, revolutionary, more of what we need in health care versus just sick care."
- "They don't just put a band-aid on a symptom."

**CTA:** `See all reviews` → `/reviews`  
**Style:** Dark background section, centered white text, carousel of quotes

---

### Scene 6 — Conditions Treated
**Purpose:** Show breadth of conditions Parsley addresses.  
**H2:** `We get to the root of complex and chronic conditions`  
**H3:** `Longevity & Healthspan`

**Condition Cards (10 items):**

| Condition | Detail |
|---|---|
| Gut & Digestive Health | IBS, IBD, acid reflux, SIBO, leaky gut, constipation, diarrhea, food intolerances, bloating, gas |
| Hormone Health & Balance | Fatigue, weight changes, PMS, acne, irregular cycles, hair loss, insulin resistance, PCOS, PMOS |
| Autoimmune & Inflammation | Crohn's disease, Hashimoto's, lupus, psoriasis, rheumatoid arthritis, ulcerative colitis, joint pain |
| Unexplained Symptoms | Allergic reactions, anxiety, bloating, brain fog, fatigue, headaches, insomnia, joint pain, low mood, skin rashes |
| Mental & Emotional Health | Agitation, anxiety, brain fog, changes in appetite or weight, difficulty concentrating, fatigue, feeling hopeless |
| Heart Health | High cholesterol, hypertension, family history of heart disease, elevated inflammation markers |
| Metabolic Health | Weight gain or resistance, insulin resistance, prediabetes, type 2 diabetes, metabolic syndrome, GLP-1 support |
| Longevity & Healthspan | Blood sugar imbalance, bone density, disease prevention, heart health, memory changes, muscle loss, sleep issues |
| Perimenopause & Menopause | Hot flashes, low libido, memory issues, mood swings, night sweats, sleep disturbances, weight changes |
| Fertility, Pregnancy, & Postpartum | Anemia, gestational diabetes, irregular periods, PMOS/PCOS, PMS, postpartum recovery |
| Detox & Environmental Exposure | Mold exposure, chemical sensitivity, mercury and heavy metals poisoning, chronic fatigue, headaches |

**CTA:** `See what we treat` → `/care/conditions`  
**Style:** Grid of cards, dark or cream bg with icons/images per category

---

### Scene 7 — Clinicians Section
**Purpose:** Humanize the brand with real provider faces.  
**H2:** `Work with functional medicine experts who look deeper`  
**Body:** `Parsley clinicians are board-certified and experienced in conventional, functional, and longevity medicine.`

**Clinician Credentials (bullet points):**
- Board-certified, with advanced functional medicine training
- Can prescribe medication when needed, including GLP-1s and hormone therapies
- Track your health progress via clinically validated Parsley Symptom Index (PSI)

**Featured Clinician:**
- Name: `Dr. Robin Berzin, MD`
- Role: `Functional Medicine Physician and Founder of Parsley Health`
- Image: Builder.io CDN `bae37b8d24f04a8c8ee69e30bf16bec2`

**Style:** Split layout — provider grid/slider left, credentials right. Provider cards include name, title, photo.

---

### Scene 8 — Outcomes Metric + CTA
**Purpose:** Quantify results to close skeptical visitors.  
**H2:** `89% of Parsley members improve or eliminate symptoms within a year`  
**H2:** `Get more out of medicine than you ever thought possible`  
**Comparison table implied** (from DOM: "Primary Care Provider" vs "Functional Medicine Clinic"):

| Feature | Primary Care Provider | Parsley Health |
|---|---|---|
| Root cause focus | ✗ | ✓ |
| Insurance accepted | ✓ | ✓ |
| Advanced lab testing | ✗ | ✓ |
| Nutrition coaching | ✗ | ✓ |
| Personalized care plan | ✗ | ✓ |

**Style:** Dark bg with large stat callout, then comparison table on light bg

---

### Scene 9 — FAQ Accordion
**Purpose:** Handle purchase objections pre-emptively.  
**H2:** `Frequently Asked Questions`

**Q&A Items:**

1. **What's included in a Complete Care membership?**  
   Complete Care is an annual functional medicine program that pairs you with a dedicated clinician for ongoing medical care throughout the year. Membership includes 5 provider visits, access to advanced diagnostics — like in-depth lab testing (billed to insurance) or specialty tests — a personalized care plan, functional nutrition coaching visits, and exclusive perks. Your care team, led by your board-certified clinician, supports you in establishing, implementing, and adjusting your care plan as your health evolves.

2. **Does Parsley Health take insurance?**  
   Yes. Parsley Health is in-network nationwide. Membership pricing starts at $150/month (in-network) or $275/month (self-pay). HSA/FSA also accepted.

3. **How is this different from other telehealth providers or my PCP?**  
   Unlike typical telehealth or PCPs focused on acute care, Parsley clinicians spend more time with you, run advanced functional labs, and build a personalized care plan targeting root causes — not just symptoms.

4. **How does Parsley's Clinical Lab Review visit differ from the Complete Care program?**  
   The Lab Review is a one-time $250 visit to review existing bloodwork. Complete Care is a full 12-month membership with ongoing care, coaching, and a dedicated care team.

5. **Can I purchase Parsley supplements without being a member?**  
   Yes — the Parsley supplement store is open to non-members.

**Style:** Accordion — click to expand/collapse each item. Light bg section.

---

### Scene 10 — Footer CTA + Navigation
**Purpose:** Final conversion push + site navigation.  
**H2:** `Ready for a different kind of care?`

**Newsletter Signup:**
- H3: `Sign up for our newsletter`
- Input: email field + submit

**Social Share:**
- H3: `Share Parsley`
- Facebook, Instagram, LinkedIn icons

**Footer Nav Columns:**

| Complete Care | Clinical Lab Review | About Us | Resources | Centers |
|---|---|---|---|---|
| Pricing & Insurance | How It Works | About Parsley | Parsley Symptom Index | (location pages) |
| How It Works | What We Test | What We Offer | (blog/articles) | |
| Our Clinicians | Why Our Providers | Dr. Robin Berzin | | |
| Nutrition Coaching | | Reviews | | |

**Legal:**
- `© 2024 Parsley Health. All rights reserved.`
- Privacy Policy · Terms of Use

**Style:** Dark footer (`#1B3340`) with white text, multi-column grid

---

## Network Map

| Origin | Purpose |
|---|---|
| `www.parsleyhealth.com` | Next.js app, chunks, CSS |
| `cdn-builder.parsleyhealth.com` | Builder.io image CDN |
| `pollen.parsleyhealth.com` | Analytics proxy (PostHog + Customer.io) |
| `static.parsley.health` | Custom fonts (Euclid Circular B, Teodor Light) |
| `snapwidget.com` | Instagram embed widget (ID 1124223) |
| `cdn.lgrckt-in.com` | LogRocket session replay |
| `static.cloudflareinsights.com` | Cloudflare Web Analytics |

---

## Rebuild Rules

1. **Never** load any `parsleyhealth.com` JavaScript
2. Plain HTML + CSS + vanilla JS only (no frameworks)
3. Use `@font-face` from `static.parsley.health` CDN for fonts (they are static assets, not JS)
4. Images from `cdn-builder.parsleyhealth.com` are allowed (static CDN image assets)
5. No analytics tags, no tracking pixels
6. Build one `index.html` — fully self-contained
7. Check each scene in browser before moving to the next
