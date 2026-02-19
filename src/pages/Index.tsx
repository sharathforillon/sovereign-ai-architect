import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SAEFSection from "@/components/SAEFSection";
import EngagementSection from "@/components/EngagementSection";
import PillarsSection from "@/components/PillarsSection";
import KillChainSection from "@/components/KillChainSection";
import SovereigntySection from "@/components/SovereigntySection";
import DeliverablesSection from "@/components/DeliverablesSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SAEFSection />
        <EngagementSection />
        <PillarsSection />
        <KillChainSection />
        <SovereigntySection />
        <DeliverablesSection />
        <ServicesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
