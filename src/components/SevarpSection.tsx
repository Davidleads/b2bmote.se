import { Search, Settings, PiggyBank, ShieldCheck, Handshake } from "lucide-react";

const sevarpItems = [
  { letter: "S", label: "Situation" },
  { letter: "E", label: "Effekt" },
  { letter: "V", label: "Värde" },
  { letter: "A", label: "Affär" },
  { letter: "R", label: "Risk" },
  { letter: "P", label: "Partnerskap" },
];

const steps = [
  { Icon: Search, text: "Förstå er kund och situation" },
  { Icon: Settings, text: "Identifiera vad som faktiskt driver beslut" },
  { Icon: PiggyBank, text: "Koppla ert erbjudande till affärsvärde" },
  { Icon: ShieldCheck, text: "Eliminera tvekan och risk" },
  { Icon: Handshake, text: "Stäng affären och bygg långsiktighet" },
];

const SevarpSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="card-navy-bordered p-5 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-4xl text-cream text-center mb-3 sm:mb-4">
            En strukturerad modell för att driva affärer
          </h2>
          <p className="text-cream/80 text-center font-body text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-10">
            Jag arbetar med en egenutvecklad affärsmodell för att förstå kundens verklighet på djupet och säkerställa att varje dialog leder mot en relevant och hållbar affär.
          </p>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-md w-full">
              {sevarpItems.map((item, i) => (
                <div key={i} className="card-navy text-center border border-gold/50 py-2 sm:py-3 !p-2 sm:!p-4">
                  <span className="text-gold font-heading font-bold text-sm sm:text-lg">{item.letter}</span>
                  <span className="text-cream font-body text-[10px] sm:text-sm"> - {item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-light border border-gold/40 rounded-lg p-3 sm:p-4 max-w-xl mx-auto text-center">
            <p className="text-cream/90 font-body text-[10px] sm:text-sm italic">
              Istället för att fokusera på avslut i stunden, skapar jag affärer som bygger på förståelse, förtroende och långsiktighet.
            </p>
          </div>
        </div>

        <div className="bg-cream-dark border-2 border-gold/30 rounded-xl p-5 sm:p-8 md:p-12">
          <h3 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-navy mb-2">
            <Settings className="inline w-5 h-5 sm:w-7 sm:h-7 text-gold mr-2 -mt-1" />
            HUR DET FUNKAR <span className="font-body text-sm sm:text-lg font-normal">(Förenklad SEVARP)</span>
          </h3>
          <p className="font-body text-xs sm:text-base text-foreground mb-6 sm:mb-10">
            Jag jobbar med en strukturerad metod för att driva affärer från första kontakt till avslut:
          </p>

          <div className="grid grid-cols-5 gap-1 sm:gap-4 mb-6 sm:mb-10 relative">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy border-2 border-gold flex items-center justify-center mb-1 sm:mb-3">
                  <step.Icon className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-navy border-2 border-gold rounded-sm mb-1 sm:mb-2" />
                <p className="font-body text-[8px] sm:text-xs md:text-sm text-foreground">{step.text}</p>
              </div>
            ))}
            <div className="absolute top-[1.2rem] sm:top-[1.8rem] left-[10%] right-[10%] h-0.5 bg-navy" style={{ zIndex: 0 }} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="bg-navy rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-gold font-body text-[10px] sm:text-sm font-semibold">
              Enkelt utåt – avancerat bakom.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="font-body text-[10px] sm:text-sm text-foreground text-center">Vill ni göra det enklare för kunden att säga ja – då bör vi prata.</span>
              <a href="#contact" className="cta-box text-[10px] sm:text-xs whitespace-nowrap">
                Boka ett möte och se hur det fungerar i praktiken
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SevarpSection;
