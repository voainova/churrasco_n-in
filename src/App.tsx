import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SocialProofSection from "./components/SocialProofSection";
import BenefitsSection from "./components/BenefitsSection";
import SpeakersSection from "./components/SpeakersSection";
import ScheduleSection from "./components/ScheduleSection";
import TargetAudienceSection from "./components/TargetAudienceSection";
import OfferSection from "./components/OfferSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0f0805] text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <BenefitsSection />
        <SpeakersSection />
        <ScheduleSection />
        <TargetAudienceSection />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
