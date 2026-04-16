import { Calendar } from "lucide-react";
import heroArrow from "@/assets/hero-arrow.jpg";
import logo from "@/assets/logo-b2bmote.png";

const HeroSection = () => {
  return (
    <section className="section-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 md:pt-10 pb-12 sm:pb-16 md:pb-24 space-y-6 sm:space-y-8">
        {/* Top: H1 with arrow image to the right */}
        <div className="grid grid-cols-[1fr_auto] gap-4 sm:gap-8 items-center">
          <h1 className="font-heading font-900 text-2xl sm:text-4xl lg:text-6xl leading-tight text-cream">
            Maximera er försäljning med kvalificerad mötesbokning för B2B
          </h1>
          <div className="flex justify-center sm:justify-end">
            <img src={heroArrow} alt="Tillväxtpil – Slipp kalla leads och få färdiga säljmöten direkt i kalendern" width={800} height={800} className="w-24 sm:w-full sm:max-w-xs rounded-lg" />
          </div>
        </div>

        {/* Middle: subtitle + proof + CTA */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          <p className="font-heading text-gold text-sm sm:text-lg md:text-xl font-bold">
            Få ett snitt på 3–8 kvalificerade möten per vecka och fokusera på det ni gör bäst: att stänga affärer.
          </p>
          <div className="block">
            <a
              href="https://calendly.com/davidsealdeal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <Calendar className="w-4 h-4" />
              Boka ett strategisamtal
            </a>
          </div>
          {/* Logo under CTA */}
          <div className="flex justify-center pt-2">
            <img src={logo} alt="B2Bmote.se" className="h-12 sm:h-16 md:h-20 w-auto" />
          </div>
        </div>

        {/* Bottom: original content */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto border-t border-cream/10 pt-8 sm:pt-10">
          <p className="font-heading text-gold text-sm sm:text-lg md:text-xl font-bold">
            Öka träffsäkerheten och konvertera fler leads till kunder
          </p>
          <p className="text-cream/80 font-body text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Relevans vinner över volym. Jag identifierar kundens verkliga drivkrafter så att ni pratar om rätt saker vid rätt tillfälle – och säkrar affären hela vägen till signat avtal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
