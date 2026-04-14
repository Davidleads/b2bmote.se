import { BarChart3, TrendingUp, FileText } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "CRM-integration",
    texts: [
      "Smidig hantering i Microsoft-miljö och befintliga system.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Säljstöd",
    texts: [
      "Optimering av säljmail, mötessummeringar och beslutsunderlag.",
    ],
  },
  {
    icon: FileText,
    title: "Kontinuerlig optimering",
    texts: [
      "Insikter från verkliga kunddialoger används för att ständigt förbättra er säljstrategi.",
    ],
  },
];

const DataInsightSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-3 sm:mb-4">
          Datadriven mötesbokning och operativ kraft
        </h2>
        <p className="font-body text-xs sm:text-sm md:text-base text-foreground leading-relaxed max-w-3xl mb-8 sm:mb-10">
          Maximera er effektivitet med stöd i det dagliga säljarbetet. Genom att använda data och kundinsikter segmenteras målgruppen för att skapa erbjudanden som speglar deras specifika behov.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-cream-dark border-2 border-gold/30 rounded-xl overflow-hidden">
              <div className="bg-navy p-3 sm:p-6 flex justify-center">
                <card.icon className="w-6 h-6 sm:w-10 sm:h-10 text-gold" />
              </div>
              <div className="bg-gold px-2 sm:px-4 py-1.5 sm:py-2">
                <h4 className="font-heading font-bold text-navy text-[10px] sm:text-sm">{card.title}</h4>
              </div>
              <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                {card.texts.map((t, j) => (
                  <p key={j} className="font-body text-[10px] sm:text-xs md:text-sm text-foreground leading-relaxed">{t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataInsightSection;
