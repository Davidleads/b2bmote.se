import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import WhyLosingSection from "@/components/WhyLosingSection";
import SevarpSection from "@/components/SevarpSection";
import NotOrdinarySection from "@/components/NotOrdinarySection";
import DataInsightSection from "@/components/DataInsightSection";

import ExclusivitySection from "@/components/ExclusivitySection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <WhyLosingSection />
      <SevarpSection />
      <NotOrdinarySection />
      <DataInsightSection />
      <AboutMeSection />
      <ExclusivitySection />
    </main>
  );
};

export default Index;
