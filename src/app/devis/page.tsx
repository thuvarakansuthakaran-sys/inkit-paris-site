import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Demande de Devis Textile Personnalisé",
  description:
    "Décrivez votre projet de personnalisation textile et recevez un devis adapté à votre entreprise sous 24 à 48h.",
};

export default function DevisPage() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-serif text-4xl text-ink">
          Recevez votre devis textile personnalisé
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Décrivez votre projet en quelques minutes : type de vêtement, quantité,
          technique souhaitée. Notre équipe revient vers vous sous 24 à 48h avec un
          devis adapté à votre besoin.
        </p>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
