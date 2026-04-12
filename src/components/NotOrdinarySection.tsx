import { Search, TrendingUp, Handshake } from "lucide-react";

const NotOrdinarySection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-cream-dark border rounded-xl p-5 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy text-center mb-6 sm:mb-10">
            Jag är inte en vanlig mötesbokare.
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
            <div className="flex justify-center">
              <div className="bg-cream rounded-lg px-4 sm:px-8 py-3 sm:py-4 relative">
                <span className="font-body text-sm sm:text-lg text-muted-foreground line-through decoration-gold decoration-2">Fokus på aktivitet</span>
              </div>
            </div>
            <div className="card-navy-bordered space-y-2 sm:space-y-4 !p-3 sm:!p-6">
              <p className="text-gold font-body font-bold text-xs sm:text-sm">Jag går in och:</p>
              {[
                { icon: Search, text: "Förstår er affär på djupet" },
                { icon: TrendingUp, text: "Förbättrar hur ni säljer" },
                { icon: Handshake, text: "Säkerställer att möten faktiskt blir affärer" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 bg-navy rounded-lg px-2 sm:px-4 py-2 sm:py-3 border border-gold/30">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                  <span className="text-cream font-body text-[10px] sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center mt-6 sm:mt-8">
            <span className="font-heading text-base sm:text-xl md:text-2xl text-navy">Fokus är inte aktivitet</span>
            <span className="font-heading text-base sm:text-xl md:text-2xl font-bold text-navy"> – utan resultat.</span>
          </p>
        </div>

        <div className="bg-cream-dark rounded-xl p-5 sm:p-8 md:p-12 border">
          <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-navy mb-6 sm:mb-8">
            🧠 Kundens beslut formas av både känsla och logik.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="card-navy-bordered">
              <p className="text-cream font-body text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Att identifiera kunders dolda behov kräver lyhördhet och förmågan att ställa rätt frågor. Lyssna aktivt på kundens svar och observera deras beteenden för att upptäcka behov de kanske inte ens är medvetna om själva.
              </p>
              <p className="text-cream font-body text-xs sm:text-sm leading-relaxed">
                Ju bättre du förstår och problematiserar kundens behov, desto större är möjligheten att påverka beslutet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-heading font-bold text-navy text-sm sm:text-lg mb-3 sm:mb-4">Activation Curve</p>
              <svg viewBox="0 0 300 150" className="w-full max-w-sm" fill="none">
                <path d="M30 130 Q80 120 120 90 Q160 60 200 40 Q240 20 270 10" stroke="hsl(42,60%,54%)" strokeWidth="3" fill="none"/>
                <circle cx="30" cy="130" r="6" fill="hsl(220,40%,15%)"/>
                <circle cx="150" cy="70" r="6" fill="hsl(220,40%,15%)"/>
                <circle cx="270" cy="10" r="6" fill="hsl(220,40%,15%)"/>
                <polygon points="270,10 260,18 264,8" fill="hsl(42,60%,54%)"/>
                <text x="10" y="148" fill="hsl(220,40%,15%)" fontSize="9">Först uppstår</text>
                <text x="10" y="158" fill="hsl(220,40%,15%)" fontSize="8">en emotionell respons.</text>
                <text x="120" y="60" fill="hsl(220,40%,15%)" fontSize="9" textAnchor="middle">Sedan bearbetas</text>
                <text x="120" y="70" fill="hsl(220,40%,15%)" fontSize="8" textAnchor="middle">informationen.</text>
                <text x="260" y="35" fill="hsl(220,40%,15%)" fontSize="9" textAnchor="end">Till slut fattas</text>
                <text x="260" y="45" fill="hsl(220,40%,15%)" fontSize="8" textAnchor="end">beslutet.</text>
              </svg>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground mt-2">Cognition Curve</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="card-navy-bordered text-center !p-3 sm:!p-6">
              <p className="text-gold font-body text-sm sm:text-lg font-bold">"</p>
              <p className="text-cream font-body text-[10px] sm:text-sm">
                <span className="text-gold font-semibold">Du säljer inte produkt –</span><br/>
                Du säljer affärseffekt
              </p>
            </div>
            <div className="card-navy-bordered text-center !p-3 sm:!p-6">
              <p className="text-gold font-body text-sm sm:text-lg font-bold">"</p>
              <p className="text-cream font-body text-[10px] sm:text-sm">
                <span className="text-gold font-semibold">Du förhandlar inte pris –</span><br/>
                Du förhandlar värde, risk och resultat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotOrdinarySection;
