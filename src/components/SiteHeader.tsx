import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import logo from "@/assets/logo-b-icon.png";

const navItems = [
  { label: "Metod", href: "#metod" },
  { label: "Insikter", href: "#insikter" },
  { label: "Om mig", href: "#om-mig" },
  { label: "Blogg", href: "/blogg/bra-produkt-fa-avslut" },
  { label: "Kontakt", href: "#contact" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      if (location.pathname !== "/") {
        navigate("/" + href);
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-navy/10 ${
        scrolled ? "bg-cream/95 backdrop-blur shadow-md" : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="B2Bmote.se startsida">
          <img src={logo} alt="B2Bmote.se" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-navy hover:text-gold font-body text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-navy hover:text-gold font-body text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://calendly.com/davidsealdeal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-box inline-flex items-center gap-2 text-xs"
          >
            <Calendar className="w-4 h-4" />
            Boka samtal
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-navy p-2 -mr-2"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-cream border-t border-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-navy hover:text-gold font-body text-base py-2 border-b border-navy/10"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="text-navy hover:text-gold font-body text-base py-2 border-b border-navy/10"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://calendly.com/davidsealdeal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box inline-flex items-center justify-center gap-2 text-sm mt-2"
            >
              <Calendar className="w-4 h-4" />
              Boka strategisamtal
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
