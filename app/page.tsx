import HeroSlider from "./components/HeroSlider";
import CounterBar from "./components/CounterBar";
import AppointmentBar from "./components/AppointmentBar";
import BookingHelper from "./components/BookingHelper";
import Service from "./components/Service";
// import QuickLinks from "./components/QuickLinks";
import InfoBanner from "./components/InfoBanner";
import AboutSection from "./components/AboutSection";
import ServicesCards from "./components/ServicesCards";
// import WhyChooseCards from "./components/WhyChooseCards";
import WhyChoose from "./components/WhyChoose";
import LicenseBanner from "./components/LicenseBanner";
import HealthStats from "./components/HealthStats";
import DoctorVideo from "./components/DoctorVideo";
import DoctorSlider from "./components/DoctorSlider";
import PatientSpeak from "./components/PatientSpeak";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import LegacyBanner from "./components/LegacyBanner";
import AppointmentCTA from "./components/AppointmentCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CounterBar />
      <AppointmentBar />
      <BookingHelper />

      <Service />

      {/* <QuickLinks /> */}
      <WhyChoose />
      <DoctorSlider />
      {/* <WhyChooseCards /> */}
      <HealthStats />
      <DoctorVideo />

      <PatientSpeak />
      <BlogSection />

      <InfoBanner />
      <AboutSection />
      <LegacyBanner />
      <ServicesCards />
      <FAQSection />
      <LicenseBanner />
      <AppointmentCTA />
    </>
  );
}


