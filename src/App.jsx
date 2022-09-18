import React from "react";
import AOS from "aos";
import { HomeSection } from "./components/HomeSection";
import { FeatureSection } from "./components/FeatureSection";
import { EventSection } from "./components/EventSection";
import { PlaceSection } from "./components/PlaceSection";
import { OfferSection } from "./components/OfferSection";
import { AboutSection } from "./components/AboutSection";
import { LocationSection } from "./components/LocationSection";
import { DetailsSection } from "./components/DetailsSection";
import { Footer } from "./components/Footer";
import { MapSection } from "./components/MapSection";

export function App() {
  AOS.init();
  return (
    <>
      <HomeSection />
      <AboutSection />
      <OfferSection />
      <PlaceSection />
      <EventSection />
      <FeatureSection />
      <LocationSection />
      <MapSection />
      <DetailsSection />
      <Footer />
    </>
  );
}
