import HeroSlider from "./components/HeroSlider";
import QuickLinks from "./components/QuickLinks";
import InfoBanner from "./components/InfoBanner";
import AboutSection from "./components/AboutSection";
import ServicesCards from "./components/ServicesCards";
import WhyChooseCards from "./components/WhyChooseCards";
import WhyChoose from "./components/WhyChoose";
import LicenseBanner from "./components/LicenseBanner";
import HealthStats from "./components/HealthStats";
import DoctorVideo from "./components/DoctorVideo";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <QuickLinks />
      <WhyChoose />
      <WhyChooseCards />
      <DoctorVideo />
      <InfoBanner />
      <AboutSection />
      <ServicesCards />
      <HealthStats />
      <LicenseBanner />
    </>
  );
}


