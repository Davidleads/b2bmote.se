import heroArrow from "@/assets/hero-arrow.jpg";

const HeroSection = () => {
  return (
    <section className="section-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid grid-cols-[1fr_auto] sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="font-heading font-900 text-2xl sm:text-4xl lg:text-6xl leading-tight text-cream">
            Jag hittar rätt kunder, bokar möten – och driver dem hela vägen till affär
          </h1>
          <p className="font-heading text-gold text-sm sm:text-lg md:text-xl font-bold">
            Öka er träffsäkerhet och stäng fler affärer – utan att jaga fler leads
          </p>
          <p className="text-cream/80 font-body text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
            Jag hjälper er att förstå kundens verkliga behov och omvandla möten till affärer – genom att säkerställa att ni pratar om rätt saker, med rätt kunder, vid rätt tillfälle.
          </p>
          <div className="cta-box-outline inline-block text-xs sm:text-sm">
            Jag säljer inte bara möten – jag driver affärer.
          </div>
          <div className="block">
            <a href="#contact" className="cta-box inline-flex items-center gap-2 text-xs sm:text-sm">
              Boka ett kostnadsfritt möte <span>→</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <img src={heroArrow} alt="Tillväxtpil" width={800} height={800} className="w-32 sm:w-full sm:max-w-md rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
