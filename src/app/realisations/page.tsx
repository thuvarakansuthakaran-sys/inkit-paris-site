import type { Metadata } from "next";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Nos Réalisations en Personnalisation Textile",
  description:
    "Découvrez des exemples concrets de vêtements personnalisés pour entreprises, associations et clubs sportifs réalisés par Inkit Paris.",
};

const placeholderProjects = [
  "Polos brodés pour une équipe commerciale",
  "Sweats personnalisés pour une association",
  "Maillots floqués pour un club sportif",
  "Vestes softshell pour une équipe technique",
  "T-shirts DTF pour un événement d'entreprise",
  "Casquettes brodées pour une collectivité",
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
              <div key={project} className="border border-line">
                <PlaceholderImage ratio="landscape" label={project} />
                <p className="p-4 text-sm text-ink/70">{project}</p>
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
