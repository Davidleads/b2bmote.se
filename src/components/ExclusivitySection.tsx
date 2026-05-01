import { AlertTriangle, User, MapPin, Mail, Phone, Linkedin } from "lucide-react";

const ExclusivitySection = () => {
  return (
    <section id="contact" className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-10">
        <div className="border-2 border-gold/50 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto bg-cream-dark/40">
          <p className="text-navy font-body text-xs sm:text-sm flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-gold" />
            <span className="font-bold">EXKLUSIVITET:</span>
          </p>
          <p className="text-foreground/80 font-body text-[10px] sm:text-sm leading-relaxed">
            Kapaciteten är begränsad för att säkerställa maximal effekt och exklusivitet för varje uppdragsgivare. Att investera i kvalificerade möten är det snabbaste sättet att stärka er pipeline och öka avkastningen på er säljtid.
          </p>
        </div>

        <h2 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-navy leading-snug max-w-2xl mx-auto">
          <span className="text-gold">Nästa steg:</span> Boka ett kort möte för att identifiera var ni har störst potential att öka er försäljning.
        </h2>

        <a
          href="https://calendly.com/davidsealdeal/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-box inline-flex items-center gap-2 text-xs sm:text-base"
        >
          <Mail className="w-4 h-4" />
          Boka ett strategisamtal
        </a>

        <div className="mt-6 sm:mt-10 space-y-3">
          <h3 className="font-heading font-bold text-lg sm:text-2xl text-navy">Kontakta mig</h3>
          <p className="text-foreground/80 font-body text-xs sm:text-sm">
            Ring, mejla eller boka en tid i kalendern så tar vi det därifrån.
          </p>
        </div>

        <div className="gold-divider max-w-xl mx-auto mt-6 sm:mt-10" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 pt-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-foreground/80 font-body text-[10px] sm:text-sm">
            <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>David Sheikh</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-foreground/80 font-body text-[10px] sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>Helsingborg</span>
          </div>
          <a href="mailto:davidsealdeal@gmail.com" className="flex items-center gap-1.5 sm:gap-2 text-foreground/80 font-body text-[10px] sm:text-sm hover:text-gold transition-colors">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>davidsealdeal@gmail.com</span>
          </a>
          <a href="tel:+46704248889" className="flex items-center gap-1.5 sm:gap-2 text-foreground/80 font-body text-[10px] sm:text-sm hover:text-gold transition-colors">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span>070-424 88 89</span>
          </a>
          <a
            href="https://www.linkedin.com/in/davidsheikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 text-foreground/80 font-body text-[10px] sm:text-sm hover:text-gold transition-colors"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
