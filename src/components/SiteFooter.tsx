import { Mail, Phone, Linkedin, MapPin, Calendar, User } from "lucide-react";
import logo from "@/assets/logo-b2bmote-full.png";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <img src={logo} alt="B2Bmote.se" className="h-10 w-auto" />
            <p className="text-cream/70 text-sm font-body leading-relaxed max-w-xs">
              Kvalificerad mötesbokning för B2B. Slipp kalla leads – få färdiga säljmöten direkt i kalendern.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-gold text-sm font-bold uppercase tracking-widest mb-4">
              Navigera
            </h3>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#metod" className="text-cream/80 hover:text-gold transition-colors">Metod</a></li>
              <li><a href="#insikter" className="text-cream/80 hover:text-gold transition-colors">Insikter</a></li>
              <li><a href="#om-mig" className="text-cream/80 hover:text-gold transition-colors">Om mig</a></li>
              <li><a href="#contact" className="text-cream/80 hover:text-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-gold text-sm font-bold uppercase tracking-widest mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm font-body">
              <li className="flex items-start gap-2 text-cream/80">
                <User className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>David Sheikh</span>
              </li>
              <li className="flex items-start gap-2 text-cream/80">
                <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:+46704248889" className="hover:text-gold transition-colors">
                  070-424 88 89
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/80">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a href="mailto:davidsealdeal@gmail.com" className="hover:text-gold transition-colors break-all">
                  davidsealdeal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/80">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>Helsingborg</span>
              </li>
              <li className="flex items-start gap-2 text-cream/80">
                <Linkedin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a
                  href="https://www.linkedin.com/in/davidsheikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-heading text-gold text-sm font-bold uppercase tracking-widest mb-4">
              Kom igång
            </h3>
            <p className="text-cream/70 text-sm font-body mb-4 leading-relaxed">
              Boka ett kostnadsfritt strategisamtal så pratar vi pipeline.
            </p>
            <a
              href="https://calendly.com/davidsealdeal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box inline-flex items-center gap-2 text-xs"
            >
              <Calendar className="w-4 h-4" />
              Boka samtal
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between">
          <p className="text-cream/60 text-xs font-body">
            © {year} B2Bmote.se. Alla rättigheter förbehållna.
          </p>
          <p className="text-cream/60 text-xs font-body">
            Kvalificerad mötesbokning för B2B
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
