import type { Metadata } from "next";
import Button from "@/components/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Nos Services de Personnalisation Textile",
  description:
    "Broderie textile, impression DTF, flocage et conseil : découvrez les techniques de personnalisation textile d'Inkit Paris pour vos vêtements professionnels.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-serif text-4xl text-ink">
            Nos techniques de personnalisation textile
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Broderie, impression DTF, flocage textile : chaque technique répond à un
            usage, un budget et un rendu différents. Nos équipes vous conseillent pour
            choisir celle qui valorisera le mieux votre image de marque.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="border border-line p-8">
                <h2 className="font-serif text-2xl text-ink">{service.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {service.intro}
                </p>
                <Button
                  href={`/services/${service.slug}`}
                  variant="ghost"
                  className="mt-6 justify-start px-0 py-0 normal-case tracking-normal"
                >
                  En savoir plus →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl text-ink">
            Vous hésitez sur la technique à choisir ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
            Décrivez votre projet, nous vous orientons vers la solution la plus
            adaptée.
          </p>
          <div className="mt-8">
            <Button href="/devis" variant="primary">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
