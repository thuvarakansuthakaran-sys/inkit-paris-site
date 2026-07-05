import type { Metadata } from "next";
import Button from "@/components/Button";
import CatalogueImage from "@/components/CatalogueImage";
import { catalogueItems } from "@/data/catalogue";

export const metadata: Metadata = {
  title: "Catalogue Textile Professionnel | Vêtements à Personnaliser",
  description:
    "T-shirts, polos, sweats, vestes, vêtements de travail... Découvrez le catalogue textile professionnel Inkit Paris et demandez votre sélection.",
};

export default function CataloguePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-serif text-4xl text-ink">
            Un catalogue textile professionnel, pensé pour l&apos;entreprise
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            T-shirts personnalisés, polos brodés, sweats personnalisés, vestes
            personnalisées, vêtements de travail, casquettes personnalisées... Chaque
            catégorie peut être brodée, imprimée en DTF ou floquée selon votre besoin.
          </p>
          <div className="mt-8">
            <Button href="/devis" variant="primary">
              Recevoir une sélection personnalisée
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalogueItems.map((item) => (
              <a
                key={item.slug}
                href={`/catalogue-textile/${item.slug}`}
                className="group block border border-line"
              >
                <CatalogueImage src={item.image} ratio="landscape" alt={item.imageIdea} />
                <div className="p-5">
                  <h2 className="font-serif text-lg text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-ink">
                    {item.ctaLabel}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
