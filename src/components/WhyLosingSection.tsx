import { Lightbulb, Users, TrendingUp, Banknote } from "lucide-react";

const benefits = [
  { icon: Lightbulb, text: "Identifiera kundens verkliga och dolda behov" },
  { icon: Users, text: "Förbättra säljsamtal och mötesstruktur" },
  { icon: TrendingUp, text: "Öka konvertering från möte till affär" },
  { icon: Banknote, text: "Skapa erbjudanden som kunder faktiskt vill köpa" },
];

const WhyLosingSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="gold-badge inline-block mb-4 sm:mb-6">VARFÖR NI TAPPAR AFFÄRER</p>
          <blockquote className="font-heading text-lg sm:text-2xl md:text-3xl italic text-navy max-w-3xl mx-auto leading-snug mb-4 sm:mb-6">
            "Företag förlorar inte affärer för att de saknar kvalitet – utan för att kunden saknar det känslomässiga värde som skapar trygghet i beslutet."
          </blockquote>
          <p className="font-heading font-bold text-navy text-sm sm:text-lg">
            Jag hjälper er att äga kundens uppmärksamhet, behov och beslut genom hela resan.
          </p>
        </div>

        <h3 className="font-body font-semibold text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8">
          Så skapar jag fler affärer för er
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {benefits.map((b, i) => (
            <div key={i} className="card-navy flex items-center gap-2 sm:gap-4 !p-3 sm:!p-4">
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0" />
              <span className="text-cream font-body text-xs sm:text-sm">{b.text}</span>
            </div>
          ))}
        </div>

        <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-8 sm:mb-10">
          Hur jag gör det
        </h3>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 w-full max-w-3xl mb-2">
            {["Psykologi +\nbeteendeanalys", "Datadriven\nsegmentering", "Social proof &\npositionering"].map((t, i) => (
              <div key={i} className="card-navy-bordered flex items-center justify-center text-center text-cream font-body text-[10px] sm:text-sm md:text-base font-semibold py-4 sm:py-5 min-h-[80px] sm:min-h-[100px] whitespace-pre-line">
                {t}
              </div>
            ))}
          </div>
          <svg viewBox="0 0 400 80" className="w-full max-w-2xl h-16 sm:h-20" fill="none">
            <path d="M67 0 L200 70" stroke="hsl(42,60%,54%)" strokeWidth="2"/>
            <path d="M200 0 L200 70" stroke="hsl(42,60%,54%)" strokeWidth="2"/>
            <path d="M333 0 L200 70" stroke="hsl(42,60%,54%)" strokeWidth="2"/>
          </svg>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
            {["Från deras värld", "till ditt värde", "till beslut"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="border-2 border-gold rounded-full px-3 sm:px-5 py-1.5 sm:py-2 font-body text-xs sm:text-sm font-semibold text-navy bg-cream-dark">
                  {t}
                </div>
                {i < 2 && (
                  <svg width="20" height="14" viewBox="0 0 24 16" fill="none">
                    <path d="M0 8H20M20 8L14 2M20 8L14 14" stroke="hsl(42,60%,54%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLosingSection;
