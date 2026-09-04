import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ManufacturingSection from "./components/ManufacturingSection";
import IndustriesSection from "./components/IndustriesSection";
import SustainabilitySection from "./components/SustainabilitySection";
import NewsSection from "./components/NewsSection";
import TestimonialsCTA from "./components/TestimonialsCTA";
import Footer from "./components/Footer";

import Aboutpage from "./pages/Aboutpage";
import Leadershippage from "./pages/Leadershippage";
import Milestone from "./pages/Milestone";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import Plant from "./pages/Plant";
import Automation from "./pages/Automation";
import Sustainability from "./pages/Sustainability";
import Sourcing from "./pages/Sourcing";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import ContactPage from "./pages/Contactpage";
import RequestSamplePage from "./pages/Requestsamplepage";

import "./App.css";

/* =========================================
   SCROLL TO TOP
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* =========================================
   HOME PAGE
========================================= */

function HomePage() {
  return (
    <>
      <Hero />

      <div className="content-wrapper">
        <Stats />
        <AboutSection />
        <ProductsSection />
        <ManufacturingSection />
        <IndustriesSection />
        <SustainabilitySection />
        <NewsSection />
        <TestimonialsCTA />
        <Footer />
      </div>
    </>
  );
}

/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter>

      {/* Always move page to top when route changes */}
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* ABOUT */}
        <Route path="/about" element={<Aboutpage />} />

        {/* LEADERSHIP */}
        <Route path="/leadership" element={<Leadershippage />} />

        {/* MILESTONE */}
        <Route path="/milestone" element={<Milestone />} />

        {/* PRODUCTS */}
        <Route path="/products" element={<Products />} />

        {/* APPLICATIONS */}
        <Route path="/applications" element={<Applications />} />

        {/* PLANT */}
        <Route path="/plant" element={<Plant />} />

        {/* AUTOMATION */}
        <Route path="/automation" element={<Automation />} />

        {/* SUSTAINABILITY */}
        <Route path="/sustainability" element={<Sustainability />} />

        {/* SOURCING */}
        <Route path="/sourcing" element={<Sourcing />} />

        {/* CLIENTS */}
        <Route path="/clients" element={<Clients />} />

        {/* CAREERS */}
        <Route path="/careers" element={<Careers />} />

        {/* CONTACT */}
        <Route path="/contact" element={<ContactPage />} />

        {/* REQUEST SAMPLE */}
        <Route
          path="/RequestSamplePage"
          element={<RequestSamplePage />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
