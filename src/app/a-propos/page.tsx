import type { Metadata } from "next";
import Button from "@/components/Button";
import CatalogueImage from "@/components/CatalogueImage";

export const metadata: Metadata = {
  title: "À Propos d'Inkit Paris | Spécialiste Textile Personnalisé B2B",
  description:
    "Inkit Paris accompagne les entreprises, associations, collectivités et clubs dans la personnalisation de leurs vêtements. Découvrez notre savoir-faire.",
};

const commitments = [
  {
    title: "Comprendre avant de produire",
    description:
      "Chaque projet commence par un échange sur votre usage, votre budget et le rendu recherché, avant de proposer une technique.",
  },
  {
    title: "Un catalogue sélectionné",
    description:
      "Nous travaillons avec un catalogue textile professionnel choisi pour sa qualité et son adéquation à l'univers de l'entreprise.",
  },
  {
    title: "Un suivi de bout en bout",
    description:
      "De la validation de la maquette à la livraison, nous suivons chaque commande pour garantir un résultat conforme à vos attentes.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl text-ink">À propos d&apos;Inkit Paris</h1>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Inkit Paris (Inkit Group, SASU) est une entreprise spécialisée dans la
              personnalisation textile pour les professionnels. Nous accompagnons les
              entreprises, associations, collectivités, clubs sportifs et
              organisateurs d&apos;événements dans le choix, la personnalisation et la
              production de leurs vêtements : broderie, impression DTF et flocage
              textile.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Notre approche : comprendre votre besoin avant de proposer une
              technique, pour un rendu qui valorise réellement votre image de marque.
            </p>
          </div>
          <CatalogueImage
            src="/images/catalogue/sweat-hero.jpg"
            ratio="square"
            alt="Univers de la personnalisation textile Inkit Paris"
          />
        </div>
      </section>

      <section className="border-b border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-3xl text-ink">Notre engagement</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title} className="border-t border-ink pt-4">
                <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl">Discutons de votre projet</h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            Que votre besoin soit clair ou encore à préciser, notre équipe vous
            répond rapidement.
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
