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
        <section id="utmaningar"><PainPointsSection /></section>
        <WhyLosingSection />
        <section id="metod"><SevarpSection /></section>
        <NotOrdinarySection />
        <section id="insikter"><DataInsightSection /></section>
        <section id="om-mig"><AboutMeSection /></section>
        <ExclusivitySection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
