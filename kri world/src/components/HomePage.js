import React from "react";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import AboutKriworld from "../components/AboutkriWorld";
import Services from "../components/Services";
//import Plans from "../components/Plans";
import Why from "../components/Why";
import Industries from "../components/Industries";
import ProcessSection from "../components/ProcessSection";
import ClientReviews from "../components/ClientReviews";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <AboutKriworld />
      <Services />
      {/* <Plans /> */}
      <Why />
      <Industries />
      <ProcessSection />
      <ClientReviews />
      <ContactSection />
    </>
  );
}

