import type { Metadata } from "next";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import { faqEntries } from "@/data/faq";

export const metadata: Metadata = {
  title: "Questions Fréquentes sur la Personnalisation Textile",
  description:
    "Délais, quantités minimales, techniques de marquage... Toutes les réponses à vos questions avant de lancer votre projet textile.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl text-ink">
            Questions fréquentes sur la personnalisation textile
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Retrouvez les réponses aux questions les plus courantes avant de lancer
            votre projet de textile personnalisé.
          </p>
          <div className="mt-10">
            <FaqAccordion entries={faqEntries} />
          </div>
        </div>
      </section>

      <section className="bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl text-ink">Une autre question ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
            Contactez-nous directement ou décrivez votre projet dans le formulaire de
            devis.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/devis" variant="primary">
              Demander un devis
            </Button>
            <Button href="/contact" variant="secondary">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
