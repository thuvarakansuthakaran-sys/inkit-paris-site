import type { Metadata } from "next";
import Button from "@/components/Button";
import CatalogueImage from "@/components/CatalogueImage";

export const metadata: Metadata = {
  title: "Nos Réalisations en Personnalisation Textile",
  description:
    "Découvrez des exemples concrets de vêtements personnalisés pour entreprises, associations et clubs sportifs réalisés par Inkit Paris.",
};

const placeholderProjects = [
  {
    label: "Polos brodés pour une équipe commerciale",
    image: "/images/catalogue/polo-fruit-of-the-loom-65-35.jpg",
  },
  {
    label: "Sweats personnalisés pour une association",
    image: "/images/catalogue/sweat-bc-id222.jpg",
  },
  {
    label: "Maillots floqués pour un club sportif",
    image: "/images/catalogue/sport-justcool-tee.jpg",
  },
  {
    label: "Vestes softshell pour une équipe technique",
    image: "/images/catalogue/veste-regatta-craghoppers.jpg",
  },
  {
    label: "T-shirts DTF pour un événement d'entreprise",
    image: "/images/catalogue/tshirt-fruit-of-the-loom-original-t.jpg",
  },
  {
    label: "Casquettes brodées pour une collectivité",
    image: "/images/catalogue/casquette-beechfield-original.jpg",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="font-serif text-4xl text-ink">Nos réalisations</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Cette page sera prochainement enrichie avec des exemples concrets de
            projets réalisés pour nos clients. En attendant, voici le type de projets
            que nous accompagnons au quotidien.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderProjects.map((project) => (
              <div key={project.label} className="group border border-line transition-shadow hover:shadow-md">
                <CatalogueImage src={project.image} ratio="landscape" alt={project.label} />
                <p className="p-4 text-sm text-ink/70">{project.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl text-ink">
            Un projet similaire en tête ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
            Contactez-nous pour échanger sur votre besoin et découvrir des exemples
            adaptés à votre secteur.
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
