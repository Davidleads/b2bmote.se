import davidPhoto from "@/assets/david-sheikh.jpeg";

const AboutMeSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-8 sm:mb-10">
          👤 Om <em>mig</em>
        </h2>
        <div className="bg-card rounded-xl border-2 border-gold/30 overflow-hidden grid grid-cols-[140px_1fr] sm:grid-cols-[240px_1fr] md:grid-cols-[300px_1fr] items-stretch">
          <div className="bg-cream-dark p-3 sm:p-6 flex items-center justify-center">
            <img
              src={davidPhoto}
              alt="David Sheikh"
              className="w-28 h-36 sm:w-48 sm:h-60 md:w-64 md:h-80 object-cover object-top rounded-lg"
              loading="lazy"
              width={256}
              height={256}
            />
          </div>
          <div className="p-3 sm:p-6 md:p-8 space-y-2 sm:space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-xl md:text-2xl text-navy">
              En <span className="text-gold">account manager</span> som inte bara skaffar kunder – utan <span className="font-bold">höjer er träffsäkerhet</span> i varje affär.
            </h3>
            <p className="font-body text-[10px] sm:text-sm text-foreground leading-relaxed">
              Jag arbetar med marknadsföring, psykologi och kundinsikt för att förstå vad som faktiskt driver ett köp – och ser till att era möten handlar om rätt saker.
            </p>
            <p className="font-body text-[10px] sm:text-sm text-foreground leading-relaxed hidden sm:block">
              Jag ger er rätt verktyg och insikter från verkliga kunddialoger, så att ni får en tydlig inblick i kundens värld och kan styra möten hela vägen till avtal. Jag ser vad som funkar i verkliga samtal – och ser till att ni gör mer av det som stänger affärer.
            </p>
            <div className="card-navy-bordered inline-block mt-1 sm:mt-2 !p-2 sm:!p-4">
              <p className="text-cream font-body text-[10px] sm:text-sm">
                <span className="text-gold font-semibold">Resultatet?</span> Fler affärer, högre hit rate och en säljprocess som håller från första kontakt till leverans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
