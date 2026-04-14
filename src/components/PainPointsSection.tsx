import { CalendarCheck, Target, DollarSign } from "lucide-react";

const painPoints = [
  {
    problem: "Ni har möten – men de leder inte till affärer",
    solution: "Tillsammans ser vi till att varje möte har rätt fokus och driver affären framåt",
    icon: CalendarCheck,
  },
  {
    problem: "Ni har leads – men de konverterar inte",
    solution: "Vi skärper dialogen så att rätt leads faktiskt blir kunder – inte bara namn i en lista",
    icon: Target,
  },
  {
    problem: "Ni har ett erbjudande – men kunden tvekar",
    solution: "Vi bygger affärer som kunden känner sig trygg att säga ja till – och som håller på sikt",
    icon: DollarSign,
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-8 sm:mb-12">
          Känner ni igen er?
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {painPoints.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 md:gap-6 items-center">
              <div className="bg-cream-dark rounded-lg p-3 sm:p-5 font-body text-foreground text-xs sm:text-sm md:text-base">
                {item.problem}
              </div>
              <div className="flex justify-center">
                <svg width="32" height="20" viewBox="0 0 40 24" fill="none">
                  <path d="M0 12H36M36 12L26 4M36 12L26 20" stroke="hsl(42, 60%, 54%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-navy-bordered flex items-start gap-2 sm:gap-3 !p-3 sm:!p-4">
                <item.icon className="w-5 h-5 sm:w-8 sm:h-8 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-cream text-xs sm:text-sm md:text-base font-body font-semibold">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
