import { BarChart3, TrendingUp, FileText } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Datainsamling & Analys",
    texts: [
      "Använd verktyg för webbanalys, kundfeedback och CRM-system för att samla in och analysera data om hur kunder interagerar med ert varumärke.",
      "Att använda data och kundinsikter för att förstå kunders preferenser och beteenden. Segmentera din målgrupp och skapa erbjudanden som speglar deras specifika behov.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Kontinuerlig Optimering",
    texts: [
      "Denna insikt används för att kontinuerligt förbättra erbjudanden och försäljningsstrategier.",
    ],
  },
  {
    icon: FileText,
    title: "Operativ Integration",
    texts: [
      "Jag kan även hjälpa er med att skriva säljmail, summera kundsamtal, skapa offerter eller analysera data i era kalkylblad.",
      "Integreras smidigt om ni kör Microsoft-miljö.",
    ],
  },
];

const DataInsightSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-8 sm:mb-10">
          Data, Insikt & Operativ Kraft
        </h2>
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
