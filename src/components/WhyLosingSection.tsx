import { Lightbulb, Users, TrendingUp, Banknote } from "lucide-react";

const benefits = [
  { icon: Lightbulb, text: "Behovsanalys: Identifiering av kundens dolda behov och drivkrafter." },
  { icon: Users, text: "Säljoptimering: Förbättrad mötesstruktur och vassare säljsamtal." },
  { icon: TrendingUp, text: "Ökad hit rate: Högre konvertering från första kontakt till påskrivet avtal." },
  { icon: Banknote, text: "Värdebaserad försäljning: Erbjudanden paketerade efter kundens verklighet." },
];

const WhyLosingSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="gold-badge inline-block mb-4 sm:mb-6">DÄRFÖR TAPPAR FÖRETAG B2B-AFFÄRER</p>
          <p className="font-body text-xs sm:text-sm md:text-base text-foreground max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
            Affärer går ofta förlorade, inte på grund av bristande kvalitet, utan för att kunden saknar den trygghet som krävs för ett beslut. Genom att kombinera psykologi och beteendeanalys skapas det emotionella värde som krävs för att äga kundens uppmärksamhet genom hela köpresan.
          </p>
        </div>

        <h3 className="font-body font-semibold text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8">
          Så skapas högre tillväxt för er:
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {benefits.map((b, i) => (
            <div key={i} className="card-navy flex items-center gap-2 sm:gap-4 !p-3 sm:!p-4">
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0" />
              <span className="text-cream font-body text-xs sm:text-sm">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLosingSection;
