import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/effects/SmoothScroll";
import ScrollProgress from "@/components/effects/ScrollProgress";

export const metadata: Metadata = {
  title: "Abubakar Health — Root Cause Medicine",
  description:
    "Medical care that uncovers the root cause of your symptoms. Functional medicine, now accessible with insurance nationwide.",
  keywords:
    "functional medicine, root cause medicine, telehealth, insurance, abubakar health",
  openGraph: {
    title: "Abubakar Health — Root Cause Medicine",
    description:
      "Board-certified functional medicine clinicians. Insurance accepted nationwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
