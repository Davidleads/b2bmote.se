import { Calendar } from "lucide-react";
import heroArrow from "@/assets/hero-arrow.jpg";

const HeroSection = () => {
  return (
    <section className="section-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 space-y-8 sm:space-y-10">
        {/* Top: H1 with arrow image to the right */}
        <div className="grid grid-cols-[1fr_auto] gap-4 sm:gap-8 items-center">
          <h1 className="font-heading font-900 text-2xl sm:text-4xl lg:text-6xl leading-tight text-cream">
            Vi bokar möten med beslutsfattare åt B2B-bolag
          </h1>
          <div className="flex justify-center sm:justify-end">
            <img src={heroArrow} alt="Tillväxtpil" width={800} height={800} className="w-24 sm:w-full sm:max-w-xs rounded-lg" />
          </div>
        </div>

        {/* Middle: new subtitle + proof + CTA */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <p className="font-heading text-gold text-sm sm:text-lg md:text-xl font-bold">
            Slipp kalla leads – få färdiga möten direkt i din kalender
          </p>
          <p className="text-cream/80 font-body text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Snitt 3–8 möten per vecka
          </p>
          <div className="block">
            <a
              href="https://calendly.com/davidsealdeal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <Calendar className="w-4 h-4" />
              Boka gratis möte
            </a>
          </div>
          <p className="text-cream/60 font-body text-[10px] sm:text-xs">
            Tider: Tis–tors 09:00–17:00 • Fre 09:00–15:30
          </p>
        </div>

        {/* Bottom: original content */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto border-t border-cream/10 pt-8 sm:pt-10">
          <p className="font-heading text-gold text-sm sm:text-lg md:text-xl font-bold">
            Öka er träffsäkerhet och stäng fler affärer – utan att jaga fler leads
          </p>
          <p className="text-cream/80 font-body text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Jag hjälper er att förstå kundens verkliga behov och omvandla möten till affärer – genom att säkerställa att ni pratar om rätt saker, med rätt kunder, vid rätt tillfälle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
