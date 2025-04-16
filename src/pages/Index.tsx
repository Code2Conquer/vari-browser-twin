
import DemoSection from "@/components/DemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavbarSection from "@/components/NavbarSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import PrivacySection from "@/components/PrivacySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UseCasesSection from "@/components/UseCasesSection";
import UserProfileSection from "@/components/UserProfileSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-obsidian">
      <NavbarSection />
      <UserProfileSection />
      
      <main>
        <HeroSection />
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="demo">
          <DemoSection />
        </section>
        
        <section id="use-cases">
          <UseCasesSection />
        </section>
        
        <section id="playground">
          <PlaygroundSection />
        </section>
        
        <PrivacySection />
        
        <TestimonialsSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
