import davidPhoto from "@/assets/david-sheikh.jpeg";

const AboutMeSection = () => {
  return (
    <section className="section-cream py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mb-8 sm:mb-10">
          Om Tillväxtpil & David Sheikh
        </h2>
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
            <p className="font-body text-xs sm:text-sm text-foreground leading-relaxed">
              Som experter inom B2B-försäljning, marknadsföring och kundpsykologi hjälper vi företag att inte bara skaffa fler kunder – utan att höja träffsäkerheten i varje enskild affär.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
