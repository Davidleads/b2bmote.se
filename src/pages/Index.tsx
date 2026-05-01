import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import WhyLosingSection from "@/components/WhyLosingSection";
import SevarpSection from "@/components/SevarpSection";
import NotOrdinarySection from "@/components/NotOrdinarySection";
import DataInsightSection from "@/components/DataInsightSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExclusivitySection from "@/components/ExclusivitySection";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main id="top" className="min-h-screen">
        <HeroSection />
        <section id="utmaningar" className="scroll-mt-20"><PainPointsSection /></section>
        <WhyLosingSection />
        <section id="metod" className="scroll-mt-20"><SevarpSection /></section>
        <NotOrdinarySection />
        <section id="insikter" className="scroll-mt-20"><DataInsightSection /></section>
        <section id="om-mig" className="scroll-mt-20"><AboutMeSection /></section>
        <ExclusivitySection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
