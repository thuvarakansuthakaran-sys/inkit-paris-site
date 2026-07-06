import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CatalogueImage from "@/components/CatalogueImage";
import AddToSelectionButton from "@/components/AddToSelectionButton";
import { catalogueItems } from "@/data/catalogue";

type Params = { slug: string };

const sizeGuide = [
  { size: "S", chest: "88 - 96 cm" },
  { size: "M", chest: "96 - 104 cm" },
  { size: "L", chest: "104 - 112 cm" },
  { size: "XL", chest: "112 - 120 cm" },
  { size: "XXL", chest: "120 - 128 cm" },
];

export function generateStaticParams() {
  return catalogueItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = catalogueItems.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function CatalogueItemPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = catalogueItems.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const isSizeGuide = item.slug === "guide-des-tailles";
  const otherItems = catalogueItems.filter((entry) => entry.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl text-ink">{item.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              {item.description}
            </p>
            {!isSizeGuide && (
              <div className="mt-8">
                <Button href="/devis" variant="primary">
                  Demander un devis pour cette catégorie
                </Button>
              </div>
            )}
          </div>
          <CatalogueImage src={item.image} ratio="square" alt={item.imageIdea} />
        </div>
      </section>

      {item.references && item.references.length > 0 && (
        <section className="border-b border-line bg-paper-dark">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-serif text-2xl text-ink">
              Exemples de références disponibles
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ink/60">
              Une sélection resserrée pour se repérer entre les niveaux de gamme.
              D&apos;autres marques et modèles sont disponibles sur demande.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {item.references.map((ref) => (
                <div
                  key={ref.model}
                  className="group border border-line bg-paper transition-shadow hover:shadow-md"
                >
                  <CatalogueImage
                    src={ref.image}
                    ratio="portrait"
                    alt={`${ref.brand} ${ref.model}`}
                  />
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wide text-sand-dark">
                      {ref.tier}
                    </span>
                    <h3 className="mt-2 font-serif text-lg text-ink">
                      {ref.brand} — {ref.model}
                    </h3>
                    <p className="mt-2 text-sm text-ink/70">{ref.detail}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ref.techniques.map((technique) => (
                        <span
                          key={technique}
                          className="border border-line px-2 py-1 text-xs text-ink/70"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                    <AddToSelectionButton
                      id={`${item.slug}-${ref.brand}-${ref.model}`}
                      categoryTitle={item.title}
                      brand={ref.brand}
                      model={ref.model}
                      technique={ref.techniques[0]}
                      image={ref.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isSizeGuide && (
        <section className="border-b border-line bg-paper-dark">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="font-serif text-2xl text-ink">
              Correspondance des tailles (indicative)
            </h2>
            <p className="mt-3 text-sm text-ink/60">
              Les correspondances varient selon les fournisseurs et les coupes. Un
              guide précis par référence est communiqué avec chaque devis.
            </p>
            <table className="mt-8 w-full border border-line text-sm">
              <thead>
                <tr className="border-b border-line bg-paper text-left">
                  <th className="px-4 py-3 font-medium text-ink">Taille</th>
                  <th className="px-4 py-3 font-medium text-ink">Tour de poitrine</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row) => (
                  <tr key={row.size} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 text-ink">{row.size}</td>
                    <td className="px-4 py-3 text-ink/70">{row.chest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8">
              <Button href="/devis" variant="primary">
                Demander un devis
              </Button>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl text-ink">Autres catégories</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {otherItems.map((other) => (
              <a
                key={other.slug}
                href={`/catalogue-textile/${other.slug}`}
                className="group block border border-line"
              >
                <CatalogueImage src={other.image} ratio="landscape" alt={other.imageIdea} />
                <div className="p-4">
                  <span className="text-sm text-ink group-hover:underline">
                    {other.title}
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
