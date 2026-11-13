import Banner from "@/components/layout/Banner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import Offerings from "@/components/sections/Offerings";
import Testimonials from "@/components/sections/Testimonials";
import Conditions from "@/components/sections/Conditions";
import Clinicians from "@/components/sections/Clinicians";
import Outcomes from "@/components/sections/Outcomes";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Banner />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ValueProp />
        <Offerings />
        <Testimonials />
        <Conditions />
        <Clinicians />
        <Outcomes />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
