import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import ManufacturingSection from "../components/ManufacturingSection";
import IndustriesSection from "../components/IndustriesSection";
import SustainabilitySection from "../components/SustainabilitySection";
import GlobalPresence from "../components/GlobalPresence";
import Testimonials from "../components/Testimonials";
import NewsSection from "../components/NewsSection";
import CTASection from "../components/CTASection";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <AboutSection />
      <ProductsSection />
      <ManufacturingSection />
      <IndustriesSection />
      <SustainabilitySection />
      <GlobalPresence />
      <Testimonials />
      <NewsSection />
      <TestimonialsCTA />
      <CTASection />
      <Footer />
    </>
  );
}