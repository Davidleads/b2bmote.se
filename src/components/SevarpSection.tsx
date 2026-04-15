import { Search, Settings, PiggyBank, ShieldCheck, Handshake, Calendar } from "lucide-react";

const SevarpSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="card-navy-bordered p-5 sm:p-8 md:p-12">
          <h3 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-cream mb-2 text-center">
            SEVARP-modellen
          </h3>
          <p className="font-body text-xs sm:text-base text-cream/70 mb-8 sm:mb-12 text-center">
            En strukturerad metod för att driva affärer från första kontakt till avslut:
          </p>

          {/* Group labels */}
          <div className="grid grid-cols-3 mb-2 sm:mb-3 max-w-3xl mx-auto">
            <div className="col-span-1 text-center">
              <span className="text-gold font-heading font-bold text-[10px] sm:text-sm uppercase tracking-wider">Deras värld</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="text-gold font-heading font-bold text-[10px] sm:text-sm uppercase tracking-wider">Ditt värde</span>
            </div>
            <div className="col-span-1 text-center">
              <span className="text-gold font-heading font-bold text-[10px] sm:text-sm uppercase tracking-wider">Till beslut</span>
            </div>
          </div>

          {/* 5 steps in a row with connecting line */}
          <div className="grid grid-cols-5 gap-1 sm:gap-4 mb-8 sm:mb-12 relative max-w-3xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-[1rem] sm:top-[1.5rem] left-[10%] right-[10%] h-0.5 bg-gold/40" style={{ zIndex: 0 }} />

            {/* S */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy-light border-2 border-gold flex items-center justify-center mb-1 sm:mb-3">
                <Search className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <span className="text-gold font-heading font-bold text-xs sm:text-base mb-0.5">S</span>
              <p className="font-body text-[8px] sm:text-xs text-cream/80">Situation – Kartläggning av kundens nuvarande verklighet.</p>
            </div>

            {/* E */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy-light border-2 border-gold flex items-center justify-center mb-1 sm:mb-3">
                <Settings className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <span className="text-gold font-heading font-bold text-xs sm:text-base mb-0.5">E</span>
              <p className="font-body text-[8px] sm:text-xs text-cream/80">Effekt – Identifiering av de faktiska drivkrafterna.</p>
            </div>

            {/* V */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy-light border-2 border-gold flex items-center justify-center mb-1 sm:mb-3">
                <PiggyBank className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <span className="text-gold font-heading font-bold text-xs sm:text-base mb-0.5">V</span>
              <p className="font-body text-[8px] sm:text-xs text-cream/80">Värde – Koppling till kundens affärsnytta.</p>
            </div>

            {/* A */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy-light border-2 border-gold flex items-center justify-center mb-1 sm:mb-3">
                <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <span className="text-gold font-heading font-bold text-xs sm:text-base mb-0.5">A</span>
              <p className="font-body text-[8px] sm:text-xs text-cream/80">Affär – Eliminering av hinder för vägen framåt.</p>
            </div>

            {/* R+P */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy-light border-2 border-gold flex items-center justify-center mb-1 sm:mb-3">
                <Handshake className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
              </div>
              <span className="text-gold font-heading font-bold text-xs sm:text-base mb-0.5">R & P</span>
              <p className="font-body text-[8px] sm:text-xs text-cream/80">Risk & Partnerskap – Trygghet och långsiktig relation.</p>
            </div>
          </div>

          {/* Callout box */}
          <div className="bg-gold/15 border-2 border-gold rounded-lg p-4 sm:p-6 max-w-xl mx-auto text-center mb-6 sm:mb-8">
            <p className="text-cream font-heading text-sm sm:text-lg font-bold">
              Resultatet? En säljprocess som bygger på logik, känsla och förtroende.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="bg-gold/20 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-gold font-body text-[10px] sm:text-sm font-semibold border border-gold/50">
              Enkelt utåt – avancerat bakom.
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <span className="font-body text-xs sm:text-sm text-cream/80 text-center">Vill ni göra det enklare för kunden att säga ja – då bör vi prata.</span>
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
        </div>
      </div>
    </section>
  );
};

export default SevarpSection;
