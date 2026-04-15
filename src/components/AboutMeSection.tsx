import { CheckCircle } from "lucide-react";
import davidPhoto from "@/assets/david-sheikh.jpeg";

const AboutMeSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-card rounded-xl border-2 border-gold/30 overflow-hidden flex flex-col sm:grid sm:grid-cols-[240px_1fr] md:grid-cols-[300px_1fr] items-stretch">
          <div className="bg-cream-dark p-4 sm:p-6 flex items-center justify-center">
            <img
              src={davidPhoto}
              alt="David Sheikh"
              className="w-40 h-52 sm:w-48 sm:h-60 md:w-64 md:h-80 object-cover object-top rounded-lg"
              loading="lazy"
              width={256}
              height={320}
            />
          </div>
          <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
            <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-navy">
              Trött på möten som inte leder till avslut?
            </h3>
            <p className="font-body text-xs sm:text-sm text-foreground leading-relaxed">
              Som Account Manager ser jag bortom de traditionella säljflosklerna. Genom att kombinera psykologi, marknadsföring och djupgående kundinsikt identifierar jag vad som faktiskt driver ett köpbeslut i just er bransch.
            </p>
            <p className="font-body text-xs sm:text-sm text-foreground leading-relaxed">
              Jag arbetar nära era kunder för att förstå deras verkliga drivkrafter. Genom insikter från faktiska dialoger ger jag ert säljteam förutsättningarna att fokusera på rätt aktiviteter och navigera komplexa affärer hela vägen till avtal.
            </p>
            <p className="font-heading font-bold text-sm sm:text-base text-navy mt-2">Resultatet?</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs sm:text-sm text-foreground">Ökad relevans i varje möte – eliminera tidstjuvar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs sm:text-sm text-foreground">Maximerad konverteringsgrad – högre hit rate genom insikt.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs sm:text-sm text-foreground">Strukturerad säljresa – progression från start till mål.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
