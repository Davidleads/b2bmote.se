import heroArrow from "@/assets/hero-arrow.jpg";

const HeroSection = () => {
  return (
    <section className="section-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-heading font-900 text-4xl md:text-5xl lg:text-6xl leading-tight text-cream">
            Jag hittar rätt kunder, bokar möten – och driver dem hela vägen till affär
          </h1>
          <p className="font-heading text-gold text-lg md:text-xl font-bold">
            Öka er träffsäkerhet och stäng fler affärer – utan att jaga fler leads
          </p>
          <p className="text-cream/80 font-body text-sm md:text-base leading-relaxed max-w-lg">
            Jag hjälper er att förstå kundens verkliga behov och omvandla möten till affärer – genom att säkerställa att ni pratar om rätt saker, med rätt kunder, vid rätt tillfälle.
          </p>
          <div className="cta-box-outline inline-block">
            Jag säljer inte bara möten – jag driver affärer.
          </div>
          <div className="block">
            <a href="#contact" className="cta-box inline-flex items-center gap-2">
              Boka ett kostnadsfritt möte <span>→</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={heroArrow} alt="Tillväxtpil" width={800} height={800} className="w-full max-w-md rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
