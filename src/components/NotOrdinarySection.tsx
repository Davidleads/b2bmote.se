import { Search, TrendingUp, Handshake, Heart, Brain, CheckCircle } from "lucide-react";

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
            Kundens beslut formas av både känsla och logik.
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
              <svg viewBox="0 0 300 170" className="w-full max-w-sm" fill="none">
                {/* Curve */}
                <path d="M40 140 Q80 130 120 100 Q160 70 210 50 Q250 30 270 20" stroke="hsl(42,60%,54%)" strokeWidth="3" fill="none"/>
                {/* Arrow head */}
                <polygon points="270,20 260,28 264,18" fill="hsl(42,60%,54%)"/>
                
                {/* Point 1 - Heart */}
                <circle cx="40" cy="140" r="14" fill="hsl(220,40%,15%)" stroke="hsl(42,60%,54%)" strokeWidth="1.5"/>
                <path d="M34 138 Q34 134 37 134 Q40 134 40 137 Q40 134 43 134 Q46 134 46 138 Q46 142 40 146 Q34 142 34 138Z" fill="hsl(42,60%,54%)"/>
                <text x="40" y="162" fill="hsl(220,40%,15%)" fontSize="7.5" textAnchor="middle" fontWeight="600">Först uppstår</text>
                <text x="40" y="170" fill="hsl(220,40%,15%)" fontSize="7" textAnchor="middle">en emotionell</text>
                <text x="40" y="178" fill="hsl(220,40%,15%)" fontSize="7" textAnchor="middle">respons.</text>

                {/* Point 2 - Brain/Process */}
                <circle cx="160" cy="78" r="14" fill="hsl(220,40%,15%)" stroke="hsl(42,60%,54%)" strokeWidth="1.5"/>
                <path d="M154 78 Q154 72 157 72 Q158 70 160 70 Q162 70 163 72 Q166 72 166 78 Q166 84 160 84 Q154 84 154 78Z" fill="hsl(42,60%,54%)"/>
                <text x="160" y="100" fill="hsl(220,40%,15%)" fontSize="7.5" textAnchor="middle" fontWeight="600">Sedan bearbetas</text>
                <text x="160" y="108" fill="hsl(220,40%,15%)" fontSize="7" textAnchor="middle">informationen.</text>

                {/* Point 3 - Handshake/Decision */}
                <circle cx="270" cy="20" r="14" fill="hsl(220,40%,15%)" stroke="hsl(42,60%,54%)" strokeWidth="1.5"/>
                <path d="M264 20 L268 22 L272 18 L276 22 L270 24 L264 20Z" fill="hsl(42,60%,54%)"/>
                <text x="270" y="42" fill="hsl(220,40%,15%)" fontSize="7.5" textAnchor="middle" fontWeight="600">Till slut fattas</text>
                <text x="270" y="50" fill="hsl(220,40%,15%)" fontSize="7" textAnchor="middle">beslutet.</text>
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
