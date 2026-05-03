import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PAGE_URL = "https://b2bmote.se/sevarp";
const PAGE_TITLE = "SEVARP – Situation, Effekt och Värde i B2B-försäljning | B2Bmote.se";
const PAGE_DESC = "Där affären faktiskt avgörs: Situation, Effekt och Värde. Så hjälper du kunden gå från nuläge till beslut – utan att jaga affären.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const Sevarp = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    setMeta("description", PAGE_DESC);
    setMeta("og:title", PAGE_TITLE, "property");
    setMeta("og:description", PAGE_DESC, "property");
    setMeta("og:url", PAGE_URL, "property");
    setMeta("og:type", "article", "property");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = PAGE_URL;

    return () => {
      document.title = prevTitle;
      if (canonical) canonical.href = "https://b2bmote.se/";
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-cream">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy/70 hover:text-gold font-body text-sm transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till startsidan
          </Link>

          <header className="space-y-4 mb-10">
            <span className="gold-badge inline-block">SEVARP</span>
            <h1 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl leading-tight text-navy">
              Där affären faktiskt avgörs: <span className="text-gradient-brand">Situation, Effekt och Värde</span>
            </h1>
          </header>

          <div className="prose-content space-y-6 font-body text-base sm:text-lg leading-relaxed text-navy/90">
            <p>De flesta vet att man måste förstå kunden.<br />Färre förstår vad det faktiskt innebär i praktiken.</p>

            <p>
              Det räcker inte att veta vad kunden gör.<br />
              Du måste förstå hur deras verklighet ser ut – och vad den leder till.
            </p>

            <p className="italic text-navy/80">Det är här många samtal stannar för tidigt.</p>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy pt-4">Situation – mer än bara nuläge</h2>
            <p>
              Att förstå situationen handlar inte om att samla fakta.<br />
              Det handlar om att förstå vad som är relevant i deras verklighet.
            </p>
            <p>Två företag kan ha exakt samma setup – men helt olika prioriteringar, risker och mål.</p>
            <p className="font-semibold text-navy">Om du inte fångar det, spelar resten ingen roll.</p>
            <div className="border-l-4 border-gold pl-5 py-2 bg-cream-dark/50 rounded-r-lg">
              <p>Situation är inte början på affären.<br />Det är grunden för allt som kommer efter.</p>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy pt-4">Effekt – där behovet skapas</h2>
            <p>Nästa steg är det som ofta missas:</p>
            <p className="text-xl sm:text-2xl font-heading font-bold text-gradient-brand">Vad leder situationen till?</p>
            <p>Inte i teori – utan i konsekvens.</p>
            <ul className="space-y-2 list-disc list-inside marker:text-gold">
              <li>Vad kostar det att fortsätta som idag?</li>
              <li>Vad bromsar dem?</li>
              <li>Vad riskerar de att missa?</li>
            </ul>
            <p>
              Så länge det bara är ett "problem" finns inget riktigt behov.<br />
              Det är först när konsekvensen blir tydlig som det uppstår ett tryck framåt.
            </p>
            <p className="font-semibold text-navy">Det är här dialogen skiftar.</p>
            <p>
              Från att handla om information<br />
              → till att handla om insikt
            </p>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy pt-4">Värde – först nu blir det relevant</h2>
            <p>De flesta pratar om värde för tidigt.</p>
            <p>De presenterar lösningar innan kunden ens har landat i varför något behöver förändras.</p>
            <p className="italic">Resultatet blir att värdet inte känns.</p>
            <p>
              Värde uppstår inte i det du säger.<br />
              Det uppstår i hur väl kunden kopplar det till sin egen situation och dess konsekvenser.
            </p>
            <p className="font-semibold text-navy">
              Det handlar inte om vad du erbjuder.<br />
              Det handlar om vad det möjliggör.
            </p>
            <ul className="space-y-2 list-disc list-inside marker:text-gold">
              <li>Kan de växa snabbare?</li>
              <li>Minska risk?</li>
              <li>Få bättre kontroll?</li>
            </ul>
            <p>Utan den kopplingen blir allt du säger bara "bra att ha".</p>
            <p className="font-semibold text-navy">Med den kopplingen blir det relevant.</p>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy pt-4">Det här är skiftet</h2>
            <p>Många ser försäljning som att presentera en lösning.</p>
            <p>Men i praktiken handlar det om något annat:</p>
            <div className="border-l-4 border-gold pl-5 py-3 bg-cream-dark/50 rounded-r-lg">
              <p className="font-semibold text-navy">
                Att hjälpa kunden gå från<br />
                <span className="text-gradient-brand">situation → konsekvens → insikt → värde</span>
              </p>
            </div>
            <p>Missar du ett steg, tappar du affären.</p>
            <p className="font-semibold text-navy">
              Får du med alla, behöver du inte jaga beslutet.<br />
              Det kommer naturligt.
            </p>
            <p className="text-navy/70 italic text-sm pt-4">
              (Nästa del: hur värde omvandlas till ett faktiskt beslut – och varför affärer ofta faller precis där.)
            </p>
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-navy text-cream text-center space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">Vill du se hur SEVARP fungerar i din säljprocess?</h2>
            <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto">
              Boka ett kostnadsfritt strategisamtal så går vi igenom var i processen ni tappar affärer – och vad som krävs för att stänga fler.
            </p>
            <a
              href="https://calendly.com/davidsealdeal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-box inline-flex items-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Boka ett strategisamtal
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-navy/70 hover:text-gold font-body text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tillbaka till startsidan
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default Sevarp;
