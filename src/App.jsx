import AOS from "aos";
import { AboutSection } from "./components/AboutSection";
import { DetailsSection } from "./components/DetailsSection";
import { EventSection } from "./components/EventSection";
import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import { LocationSection } from "./components/LocationSection";
import { MapSection } from "./components/MapSection";
import { OfferSection } from "./components/OfferSection";
import { PlaceSection } from "./components/PlaceSection";

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
