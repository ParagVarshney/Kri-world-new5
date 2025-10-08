// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileActionButtons from "./components/MobileActionButtons";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import WebsiteDevelopmentPage from "./components/WebsiteDevelopmentPage";
import DigitalMarketingPage from "./components/DigitalMarketingPage";
import AppDevelopmentPage from "./components/AppDevelopmentPage";
import ViedoDevelopmentPage from "./components/ViedoDevelopmentPage";

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ Dropdown service routes */}
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopmentPage />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketingPage />}
        />
        <Route
          path="/services/app-development"
          element={<AppDevelopmentPage />}
        />
        <Route
          path="/services/video-development"
          element={<ViedoDevelopmentPage />}
        />
      </Routes>

      <Footer />
      <MobileActionButtons />
    </div>
  );
}

export default App;
