import HeroSlider from "./components/HeroSlider";
import AppointmentBar from "./components/AppointmentBar";
import BookingHelper from "./components/BookingHelper";
import Service from "./components/Service";
// import QuickLinks from "./components/QuickLinks";
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
      <AppointmentBar />
      <BookingHelper />
      <Service />
      {/* <QuickLinks /> */}
      <WhyChoose />
      <WhyChooseCards />
      <HealthStats />
      <DoctorVideo />
      <InfoBanner />
      <AboutSection />
      <ServicesCards />

      <LicenseBanner />
    </>
  );
}


