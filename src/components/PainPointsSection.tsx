import { CalendarCheck, Target, DollarSign } from "lucide-react";

const painPoints = [
  {
    problem: "Ni har möten – men de leder inte till affärer",
    solution: "Jag säkerställer att era möten blir relevanta och driver affär framåt",
    icon: CalendarCheck,
  },
  {
    problem: "Ni har leads – men de konverterar inte",
    solution: "Jag ökar träffsäkerheten i dialogen så rätt leads faktiskt blir kunder",
    icon: Target,
  },
  {
    problem: "Ni har ett erbjudande – men kunden tvekar",
    solution: "Jag skapar affärer som inte bara stängs – utan blir långsiktigt lönsamma",
    icon: DollarSign,
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-12">
          Känner ni igen er?
        </h2>
        <div className="space-y-6">
          {painPoints.map((item, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
              <div className="bg-cream-dark rounded-lg p-5 font-body text-foreground text-sm md:text-base">
                {item.problem}
              </div>
              <div className="flex justify-center">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-gold hidden md:block">
                  <path d="M0 12H36M36 12L26 4M36 12L26 20" stroke="hsl(42, 60%, 54%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-navy-bordered flex items-start gap-3">
                <item.icon className="w-8 h-8 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-cream text-sm md:text-base font-body font-semibold">
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
