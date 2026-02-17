import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SAEFSection from "@/components/SAEFSection";
import SovereigntySection from "@/components/SovereigntySection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SAEFSection />
        <SovereigntySection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
