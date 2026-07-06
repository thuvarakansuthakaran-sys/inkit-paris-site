import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CatalogueImage from "@/components/CatalogueImage";
import { services, getServiceBySlug } from "@/data/services";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl text-ink">{service.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              {service.intro}
            </p>
            <div className="mt-8">
              <Button href="/devis" variant="primary">
                {service.ctaLabel === "Être conseillé"
                  ? "Être conseillé gratuitement"
                  : `Demander un devis ${service.title.toLowerCase()}`}
              </Button>
            </div>
          </div>
          <CatalogueImage
            src={service.image}
            ratio="square"
            alt={`${service.title} — vêtement personnalisé en gros plan`}
          />
        </div>
      </section>

      <section className="border-b border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl text-ink">Pourquoi choisir cette technique</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.advantages.map((advantage) => (
              <li key={advantage} className="border-t border-ink pt-3 text-sm text-ink/70">
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl text-ink">{service.fabricsTitle}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.fabrics.map((fabric) => (
              <span
                key={fabric}
                className="border border-line px-4 py-2 text-sm text-ink/80"
              >
                {fabric}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl">Un projet en tête ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            Décrivez-nous votre besoin, nous revenons vers vous sous 24 à 48h avec un
            devis adapté.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/devis" variant="primary" className="bg-paper text-ink hover:bg-sand">
              Demander un devis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
