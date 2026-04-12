import { AlertTriangle, User, MapPin, Mail, Phone, Linkedin } from "lucide-react";

const ExclusivitySection = () => {
  return (
    <section id="contact" className="section-navy py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-10">
        <div className="border-2 border-gold/50 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
          <p className="text-gold font-body text-xs sm:text-sm flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold">EXKLUSIVITET:</span>
          </p>
          <p className="text-cream/80 font-body text-[10px] sm:text-sm leading-relaxed">
            Kapacitet är en strategisk resurs. Jag arbetar endast med ett begränsat antal kunder samtidigt för att leverera maximal effekt. Därför är tillgänglighet alltid tidskänslig.
          </p>
        </div>

        <p className="text-cream/80 font-body text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
          Att lägga tid och resurser på kvalificerade möten är en investering som stärker er pipeline och ger fler affärer att stänga. På lång sikt handlar det om avkastning på tiden ni lägger idag.
        </p>

        <h2 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-cream leading-snug max-w-2xl mx-auto">
          <span className="text-gold">Nästa steg:</span> Boka ett möte så visar jag exakt var ni tappar affärer – och hur vi fixar det.
        </h2>

        <a href="mailto:davidseeds@outlook.com" className="cta-box inline-block text-xs sm:text-base">
          Boka ett möte →
        </a>

        <div className="gold-divider max-w-xl mx-auto mt-6 sm:mt-10" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 pt-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-cream/80 font-body text-[10px] sm:text-sm">
            <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>David Sheikh</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-cream/80 font-body text-[10px] sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>Helsingborg</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-cream/80 font-body text-[10px] sm:text-sm">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>davidseeds@outlook.com</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-cream/80 font-body text-[10px] sm:text-sm">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>070-424 88 89</span>
          </div>
          <a
            href="https://www.linkedin.com/in/david-sheikh-7bb8a2319"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 text-cream/80 font-body text-[10px] sm:text-sm hover:text-gold transition-colors"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
