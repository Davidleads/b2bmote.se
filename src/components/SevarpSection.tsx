const sevarpItems = [
  { letter: "S", label: "Situation" },
  { letter: "E", label: "Effekt" },
  { letter: "V", label: "Värde" },
  { letter: "A", label: "Affär" },
  { letter: "R", label: "Risk" },
  { letter: "P", label: "Partnerskap" },
];

const SevarpSection = () => {
  return (
    <section className="section-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* SEVARP model */}
        <div className="card-navy-bordered p-8 md:p-12 mb-16">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-cream text-center mb-4">
            En strukturerad modell för att driva affärer
          </h2>
          <p className="text-cream/80 text-center font-body text-sm md:text-base max-w-2xl mx-auto mb-10">
            Jag arbetar med en egenutvecklad affärsmodell för att förstå kundens verklighet på djupet och säkerställa att varje dialog leder mot en relevant och hållbar affär.
          </p>

          {/* Diamond layout */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md w-full">
              {sevarpItems.map((item, i) => (
                <div key={i} className="card-navy text-center border border-gold/50 py-3">
                  <span className="text-gold font-heading font-bold text-lg">{item.letter}</span>
                  <span className="text-cream font-body text-sm"> - {item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-light border border-gold/40 rounded-lg p-4 max-w-xl mx-auto text-center">
            <p className="text-cream/90 font-body text-sm italic">
              Istället för att fokusera på avslut i stunden, skapar jag affärer som bygger på förståelse, förtroende och långsiktighet.
            </p>
          </div>
        </div>

        {/* HUR DET FUNKAR */}
        <div className="bg-cream-dark border-2 border-gold/30 rounded-xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-2">
            ⚙ HUR DET FUNKAR <span className="font-body text-lg font-normal">(Förenklad SEVARP)</span>
          </h3>
          <p className="font-body text-foreground mb-10">
            Jag jobbar med en strukturerad metod för att driva affärer från första kontakt till avslut:
          </p>

          {/* Process steps */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-10 relative">
            {[
              { icon: "🔍", text: "Förstå er kund\noch situation" },
              { icon: "⚙️", text: "Identifiera vad\nsom faktiskt\ndriver beslut" },
              { icon: "💰", text: "Koppla ert\nerbjudande till\naffärsvärde" },
              { icon: "✅", text: "Eliminera\ntvekan och risk" },
              { icon: "🤝", text: "Stäng affären\noch bygg\nlångsiktighet" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="w-4 h-4 bg-navy border-2 border-gold rounded-sm mb-2" />
                <p className="font-body text-xs md:text-sm text-foreground whitespace-pre-line">{step.text}</p>
              </div>
            ))}
            {/* Connection line */}
            <div className="absolute top-[3.2rem] left-[10%] right-[10%] h-0.5 bg-navy hidden md:block" style={{ zIndex: 0 }} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="bg-navy rounded-full px-6 py-2 text-gold font-body text-sm font-semibold">
              Enkelt utåt – avancerat bakom.
            </div>
            <div className="flex items-center gap-4">
              <span className="font-body text-sm text-foreground">Vill ni göra det enklare för kunden att säga ja – då bör vi prata.</span>
              <a href="#contact" className="cta-box text-xs whitespace-nowrap">
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
