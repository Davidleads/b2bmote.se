import { AlertTriangle, User, MapPin, Mail, Phone } from "lucide-react";

const ExclusivitySection = () => {
  return (
    <section id="contact" className="section-navy py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        {/* Exclusivity box */}
        <div className="border-2 border-gold/50 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gold font-body text-sm flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold">EXKLUSIVITET:</span>
          </p>
          <p className="text-cream/80 font-body text-sm leading-relaxed">
            Kapacitet är en strategisk resurs. Jag arbetar endast med ett begränsat antal kunder samtidigt för att leverera maximal effekt. Därför är tillgänglighet alltid tidskänslig.
          </p>
        </div>

        <p className="text-cream/80 font-body text-base leading-relaxed max-w-2xl mx-auto">
          Att lägga tid och resurser på kvalificerade möten är en investering som stärker er pipeline och ger fler affärer att stänga. På lång sikt handlar det om avkastning på tiden ni lägger idag.
        </p>

        <h2 className="font-heading font-bold text-2xl md:text-3xl text-cream leading-snug max-w-2xl mx-auto">
          <span className="text-gold">Nästa steg:</span> Boka ett möte så visar jag exakt var ni tappar affärer – och hur vi fixar det.
        </h2>

        <a href="mailto:davidseeds@outlook.com" className="cta-box inline-block text-base">
          Boka ett möte →
        </a>

        {/* Contact info */}
        <div className="gold-divider max-w-xl mx-auto mt-10" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-4">
          <div className="flex items-center gap-2 text-cream/80 font-body text-sm">
            <User className="w-4 h-4 text-gold" />
            <span>David Sheikh</span>
          </div>
          <div className="flex items-center gap-2 text-cream/80 font-body text-sm">
            <MapPin className="w-4 h-4 text-gold" />
            <span>Helsingborg</span>
          </div>
          <div className="flex items-center gap-2 text-cream/80 font-body text-sm">
            <Mail className="w-4 h-4 text-gold" />
            <span>davidseeds@outlook.com</span>
          </div>
          <div className="flex items-center gap-2 text-cream/80 font-body text-sm">
            <Phone className="w-4 h-4 text-gold" />
            <span>070-424 88 89</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
