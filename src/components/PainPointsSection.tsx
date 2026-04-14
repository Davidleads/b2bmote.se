import { CalendarCheck, Target, DollarSign } from "lucide-react";

const painPoints = [
  {
    problem: "Möten som inte leder till avslut",
    solution: "Vi implementerar en struktur där varje möte har ett tydligt fokus och driver affärsprocessen framåt.",
    icon: CalendarCheck,
  },
  {
    problem: "Leads som inte konverterar",
    solution: "Vi skärper säljdialogen så att era leads blir faktiska kunder, inte bara namn i ett CRM-system.",
    icon: Target,
  },
  {
    problem: "Kunder som tvekar trots ett starkt erbjudande",
    solution: "Vi bygger det förtroende och det mervärde som krävs för att kunden ska våga säga ja.",
    icon: DollarSign,
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-8 sm:mb-12">
          Känner ni igen utmaningarna?
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
