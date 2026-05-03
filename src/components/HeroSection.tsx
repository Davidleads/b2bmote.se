import { Calendar } from "lucide-react";
import logo from "@/assets/logo-b2bmote-full.png";

const HeroSection = () => {
  return (
    <>
      <section className="section-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 md:pt-10 pb-8 sm:pb-10 md:pb-12 space-y-6 sm:space-y-8">
          {/* Top: H1 with logo to the right */}
          <div className="grid grid-cols-[1fr_auto] gap-4 sm:gap-8 items-center">
            <h1 className="font-heading font-900 text-2xl sm:text-4xl lg:text-6xl leading-tight text-cream">
              Maximera er försäljning med kvalificerad mötesbokning för B2B
            </h1>
            <div className="flex justify-center sm:justify-end">
              <img src={logo} alt="B2Bmote.se" className="h-28 sm:h-40 md:h-52 w-auto" />
            </div>
          </div>

          {/* Middle: subtitle + CTA side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-6 items-center max-w-4xl mx-auto">
            <p className="font-heading text-gold text-sm sm:text-lg md:text-xl font-bold text-center sm:text-right">
              Få 3–8 kvalificerade möten per vecka. Fokusera på det ni gör bäst: stäng affärer.
            </p>
            <div className="flex justify-center sm:justify-start">
              <a
                href="https://calendly.com/davidsealdeal/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-box inline-flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                Boka ett strategisamtal
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <p className="font-heading text-navy text-sm sm:text-lg md:text-xl font-bold">
              Öka träffsäkerheten och konvertera fler leads till kunder
            </p>
            <p className="text-foreground/80 font-body text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Relevans vinner över volym. Jag identifierar kundens verkliga drivkrafter så att ni pratar om rätt saker vid rätt tillfälle – och säkrar affären hela vägen till signat avtal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
