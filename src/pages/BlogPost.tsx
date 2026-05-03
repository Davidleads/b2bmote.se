import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import blogImage from "@/assets/blog-behov.jpeg";

const BLOG_URL = "https://b2bmote.se/blogg/bra-produkt-fa-avslut";
const BLOG_TITLE = "Bra produkt men få avslut? Så löser du det | B2Bmote.se";
const BLOG_DESC = "Många B2B-företag har bra produkter men tappar affärer i säljprocessen. Så bygger du tydlighet i kundens beslut och stänger fler affärer.";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const BlogPost = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = BLOG_TITLE;
    setMeta("description", BLOG_DESC);
    setMeta("og:title", BLOG_TITLE, "property");
    setMeta("og:description", BLOG_DESC, "property");
    setMeta("og:url", BLOG_URL, "property");
    setMeta("og:type", "article", "property");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = BLOG_URL;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Bra produkt men få avslut? Därför tappar företag affärer – och så löser du det",
      description: BLOG_DESC,
      author: { "@type": "Person", name: "David Sheikh" },
      publisher: { "@type": "Organization", name: "B2Bmote.se" },
      mainEntityOfPage: BLOG_URL,
      url: BLOG_URL,
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      if (canonical) canonical.href = "https://b2bmote.se/";
      ld.remove();
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-cream">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy/70 hover:text-gold font-body text-sm transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till startsidan
          </Link>

          {/* Header */}
          <header className="space-y-4 mb-8">
            <span className="gold-badge inline-block">Blogginlägg</span>
            <h1 className="font-heading font-900 text-3xl sm:text-4xl md:text-5xl leading-tight text-navy">
              Bra produkt men få avslut? Därför tappar företag affärer – och så löser du det
            </h1>
            <p className="text-navy/60 font-body text-sm">
              Av David Sheikh · B2Bmote.se
            </p>
          </header>

          {/* Hero image */}
          <figure className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={blogImage}
              alt="Tre ägg märkta Nuläge, Värde och Behov i en skål – symbol för säljprocessens grundpelare"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <figcaption className="text-navy/60 text-xs font-body italic px-4 py-3 bg-cream-dark">
              Nuläge, Behov och Värde – grundpelarna för en affär som faktiskt går i mål.
            </figcaption>
          </figure>

          {/* Body */}
          <div className="prose-content space-y-6 font-body text-base sm:text-lg leading-relaxed text-navy/90">
            <p>
              Många företag utgår från att fler leads automatiskt leder till fler affärer. Men verkligheten ser ofta annorlunda ut. Problemet är sällan produkten utan hur den säljs. Det är vanligt att företag har möten, skickar offerter och har ett tydligt erbjudande, men ändå uteblir avsluten. Kunden tvekar, drar ut på beslutet eller väljer en konkurrent.
            </p>

            <p className="font-semibold text-navy">
              Det beror inte på brist på intresse.<br />
              Det beror på brist på tydlighet i kundens beslutsprocess.
            </p>

            <p>
              I många säljdialoger pratar man om vad man erbjuder, men inte varför det spelar roll för kunden. Fokus hamnar på funktioner istället för konsekvenser.
            </p>

            <div className="border-l-4 border-gold pl-5 py-2 bg-cream-dark/50 rounded-r-lg">
              <p className="mb-3 font-semibold text-navy">Om kunden inte tydligt förstår:</p>
              <ul className="space-y-2 list-disc list-inside marker:text-gold">
                <li>vad problemet faktiskt kostar</li>
                <li>varför det behöver lösas nu</li>
                <li>och hur lösningen påverkar deras verksamhet</li>
              </ul>
              <p className="mt-3 italic text-navy/80">
                …så finns det ingen anledning att ta ett beslut. Det är här de flesta affärer tappas.
              </p>
            </div>

            <p>
              Genom att arbeta strukturerat med hela säljprocessen – från nuläge till beslut – går det att förändra detta. Ett sätt att se det är genom att bryta ner dialogen i flera steg: först måste kundens situation förstås på riktigt. Därefter behöver effekten av nuläget tydliggöras.
            </p>

            <p className="text-xl sm:text-2xl font-heading font-bold text-gradient-brand">
              Vad händer om inget förändras?
            </p>

            <p>
              När det blir tydligt uppstår ett behov. Det är först då värdet i en lösning faktiskt kan uppfattas. Men många hoppar över dessa steg och går direkt till pris och erbjudande. Det leder till att affären känns osäker, vilket skapar tvekan.
            </p>

            <p>
              En affär avgörs alltså inte i slutet av processen, utan i hur väl kunden förstår sitt eget behov längs vägen. Företag som lyckas med försäljning arbetar inte bara med att presentera en lösning – de arbetar med att hjälpa kunden att fatta ett beslut. När dialogen utgår från kundens verklighet istället för säljarens agenda blir det också enklare att koppla erbjudandet till ett konkret affärsvärde.
            </p>

            <p className="text-lg sm:text-xl font-heading font-bold text-navy pt-2">
              Resultatet blir inte bara fler affärer, utan bättre affärer.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-navy text-cream text-center space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              Vill du se hur det här ser ut i praktiken?
            </h2>
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

          {/* Bottom back link */}
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

export default BlogPost;
