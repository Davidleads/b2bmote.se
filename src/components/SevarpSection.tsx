import { Search, Settings, PiggyBank, ShieldCheck, Handshake, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const sevarpItems = [
  { letter: "S", label: "Situation", desc: "Kartläggning av kundens nuvarande verklighet." },
  { letter: "E", label: "Effekt", desc: "Identifiering av de faktiska drivkrafterna bakom beslutet." },
  { letter: "V", label: "Värde", desc: "Koppling mellan erbjudandet och kundens affärsnytta." },
  { letter: "A", label: "Affär", desc: "Eliminering av hinder för en tydlig väg framåt." },
  { letter: "R", label: "Risk", desc: "Hantering av osäkerhet för att skapa trygghet." },
  { letter: "P", label: "Partnerskap", desc: "Grunden för en långsiktig och lönsam relation." },
];

const steps = [
  { Icon: Search, text: "Situation – Kartläggning av kundens nuvarande verklighet." },
  { Icon: Settings, text: "Effekt – Identifiering av de faktiska drivkrafterna bakom beslutet." },
  { Icon: PiggyBank, text: "Värde – Koppling mellan erbjudandet och kundens affärsnytta." },
  { Icon: ShieldCheck, text: "Affär – Eliminering av hinder för en tydlig väg framåt." },
  { Icon: Handshake, text: "Risk & Partnerskap – Hantering av osäkerhet och grund för långsiktig relation." },
];

const ArrowCircle = () => (
  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gold bg-navy-light flex items-center justify-center">
    <svg className="w-7 h-7 sm:w-9 sm:h-9 text-gold" viewBox="0 0 40 40" fill="none">
      {/* Up */}
      <path d="M20 4l-4 5h8l-4-5z" fill="currentColor"/>
      <line x1="20" y1="9" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5"/>
      {/* Down */}
      <path d="M20 36l-4-5h8l-4 5z" fill="currentColor"/>
      <line x1="20" y1="31" x2="20" y2="23" stroke="currentColor" strokeWidth="1.5"/>
      {/* Left */}
      <path d="M4 20l5-4v8l-5-4z" fill="currentColor"/>
      <line x1="9" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1.5"/>
      {/* Right */}
      <path d="M36 20l-5-4v8l5-4z" fill="currentColor"/>
      <line x1="31" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1.5"/>
      {/* Diag top-left */}
      <path d="M8 8l1 5-5-1 4-4z" fill="currentColor"/>
      <line x1="11" y1="11" x2="16" y2="16" stroke="currentColor" strokeWidth="1.2"/>
      {/* Diag top-right */}
      <path d="M32 8l-1 5 5-1-4-4z" fill="currentColor"/>
      <line x1="29" y1="11" x2="24" y2="16" stroke="currentColor" strokeWidth="1.2"/>
      {/* Diag bottom-left */}
      <path d="M8 32l1-5-5 1 4 4z" fill="currentColor"/>
      <line x1="11" y1="29" x2="16" y2="24" stroke="currentColor" strokeWidth="1.2"/>
      {/* Diag bottom-right */}
      <path d="M32 32l-1-5 5 1-4 4z" fill="currentColor"/>
      <line x1="29" y1="29" x2="24" y2="24" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  </div>
);

const SevarpSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-cream-dark border-2 border-gold/30 rounded-xl p-5 sm:p-8 md:p-12">
          <Link to="/sevarp" className="block group">
            <h3 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-navy mb-2 group-hover:text-gold transition-colors">
              <Settings className="inline w-5 h-5 sm:w-7 sm:h-7 text-gold mr-2 -mt-1" />
              HUR DET FUNKAR <span className="font-body text-sm sm:text-lg font-normal">(Förenklad SEVARP)</span>
              <span className="ml-2 text-gold text-sm sm:text-base font-body underline">Läs mer →</span>
            </h3>
          </Link>
          <p className="font-body text-xs sm:text-base text-foreground mb-6 sm:mb-10">
            Jag jobbar med en strukturerad metod för att driva affärer från första kontakt till avslut:
          </p>

          {/* Better approach: 3-column group header row above 5-col icons */}
          <div className="flex items-center justify-center gap-1 sm:gap-3 mb-3 sm:mb-5">
            <span className="bg-gold/20 border border-gold/50 rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-navy font-heading text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
              Deras värld
            </span>
            <svg className="w-4 h-3 sm:w-6 sm:h-4 text-gold flex-shrink-0" viewBox="0 0 32 16" fill="none">
              <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="bg-gold/20 border border-gold/50 rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-navy font-heading text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
              Ditt värde
            </span>
            <svg className="w-4 h-3 sm:w-6 sm:h-4 text-gold flex-shrink-0" viewBox="0 0 32 16" fill="none">
              <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="bg-gold/20 border border-gold/50 rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-navy font-heading text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
              Till beslut
            </span>
          </div>

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
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <span className="font-body text-xs sm:text-sm text-foreground text-center">Vill ni göra det enklare för kunden att säga ja – då bör vi prata.</span>
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
          </div>

          {/* Callout box */}
          <div className="bg-gold/15 border-2 border-gold rounded-lg p-4 sm:p-6 max-w-xl mx-auto text-center mt-6 sm:mt-10">
            <p className="text-navy font-heading text-sm sm:text-lg font-bold">
              Resultatet? En säljprocess som bygger på logik, känsla och förtroende.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SevarpSection;
