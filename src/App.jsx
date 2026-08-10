import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/leadership" element={<Leadershippage />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/products" element={<Products />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/sourcing" element={<Sourcing />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/RequestSamplePage" element={<RequestSamplePage /> } />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
