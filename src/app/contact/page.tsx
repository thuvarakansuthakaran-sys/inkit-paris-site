import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contactez Inkit Paris | Personnalisation Textile Entreprise",
  description:
    "Une question, un projet de textile personnalisé ? Contactez l'équipe Inkit Paris pour échanger sur votre besoin.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-4xl text-ink">Contactez Inkit Paris</h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Une question, un projet de textile personnalisé ? Écrivez-nous ou
            décrivez directement votre besoin dans notre formulaire de devis.
          </p>

          <div className="mt-10 space-y-4 text-sm text-ink/80">
            <p>
              <span className="block text-ink/50">Email</span>
              <a href={`mailto:${company.email}`} className="text-ink">
                {company.email}
              </a>
            </p>
            <p>
              <span className="block text-ink/50">Téléphone</span>
              <a href={`tel:${company.phone}`} className="text-ink">
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="block text-ink/50">Adresse</span>
              {company.address}
            </p>
            <p>
              <span className="block text-ink/50">Horaires</span>
              {company.hours}
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
