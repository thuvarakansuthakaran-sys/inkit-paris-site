import Button from "@/components/Button";
import CatalogueImage from "@/components/CatalogueImage";
import FaqAccordion from "@/components/FaqAccordion";
import QuoteForm from "@/components/QuoteForm";
import { services } from "@/data/services";
import { catalogueItems, homepageCatalogueSlugs } from "@/data/catalogue";
import { faqEntries } from "@/data/faq";
import {
  CheckCircleIcon,
  MessageIcon,
  ClockIcon,
  ShirtIcon,
  NeedleIcon,
  DropletIcon,
  LayersIcon,
  CompassIcon,
  BriefcaseIcon,
  RouteIcon,
} from "@/components/icons";

const serviceIcons: Record<string, typeof NeedleIcon> = {
  "broderie-textile": NeedleIcon,
  "impression-dtf": DropletIcon,
  "flocage-textile": LayersIcon,
  "conseil-accompagnement": CompassIcon,
};

const valueProps = [
  {
    title: "Finitions soignées",
    description:
      "Chaque pièce est contrôlée avant expédition, pour un rendu professionnel durable.",
    icon: CheckCircleIcon,
  },
  {
    title: "Conseil personnalisé",
    description:
      "Nous vous orientons vers le textile et la technique adaptés à votre usage et votre budget.",
    icon: MessageIcon,
  },
  {
    title: "Délais maîtrisés",
    description:
      "Un accompagnement clair, de la validation de la maquette à la livraison.",
    icon: ClockIcon,
  },
  {
    title: "Large choix textile corporate",
    description:
      "Un catalogue pensé pour l'univers professionnel, du t-shirt au vêtement de travail.",
    icon: ShirtIcon,
  },
];

const differentiators = [
  {
    title: "Expertise B2B",
    description:
      "Nous travaillons exclusivement avec des entreprises, associations, collectivités et clubs sportifs.",
    icon: BriefcaseIcon,
  },
  {
    title: "Conseil avant tout",
    description:
      "Nous vous aidons à choisir le bon textile et la bonne technique, pas seulement à imprimer un logo.",
    icon: MessageIcon,
  },
  {
    title: "Trois techniques maîtrisées",
    description:
      "Broderie, impression DTF et flocage réalisés selon vos besoins, sans sous-traitance en cascade.",
    icon: LayersIcon,
  },
  {
    title: "Qualité contrôlée",
    description: "Chaque commande est vérifiée avant expédition.",
    icon: CheckCircleIcon,
  },
  {
    title: "Réactivité",
    description:
      "Une équipe disponible pour répondre rapidement à vos demandes de devis.",
    icon: ClockIcon,
  },
  {
    title: "Accompagnement de bout en bout",
    description:
      "Du fichier logo jusqu'au vêtement fini, nous gérons chaque étape du projet.",
    icon: RouteIcon,
  },
];

const steps = [
  {
    title: "Vous décrivez votre besoin",
    description: "Type de vêtement, quantité, logo, délai souhaité.",
  },
  {
    title: "Nous vous conseillons",
    description:
      "Choix du textile et de la technique de marquage la plus adaptée à votre projet.",
  },
  {
    title: "Validation de la maquette et du devis",
    description: "Vous validez le rendu et le prix avant lancement en production.",
  },
  {
    title: "Production et livraison",
    description:
      "Vos vêtements personnalisés sont produits, contrôlés puis livrés.",
  },
];

const homeFaq = faqEntries.filter((entry) => entry.showOnHome);
const homeCatalogue = catalogueItems.filter((item) =>
  homepageCatalogueSlugs.includes(item.slug)
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="font-serif text-4xl leading-tight text-ink lg:text-5xl">
              Vos vêtements professionnels, personnalisés avec exigence
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Inkit Paris accompagne les entreprises, associations, collectivités et
              clubs sportifs dans la personnalisation de leurs textiles : broderie,
              impression DTF, flocage et conseil sur-mesure. Une seule adresse pour un
              vêtement de travail personnalisé qui vous ressemble.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/devis" variant="primary">
                Demander un devis
              </Button>
              <Button href="/catalogue-textile" variant="secondary">
                Recevoir une sélection personnalisée
              </Button>
            </div>
            <p className="mt-6 text-xs tracking-wide text-ink/50">
              Réponse sous 24 à 48h · Devis gratuit et sans engagement
            </p>
          </div>
          <div className="relative">
            <CatalogueImage
              src="/images/catalogue/polo-fruit-of-the-loom-65-35.jpg"
              ratio="square"
              alt="Polo brodé avec logo personnalisé"
            />
            <div className="absolute -bottom-6 -left-6 hidden border border-line bg-paper px-5 py-4 shadow-lg sm:block">
              <p className="font-serif text-2xl text-ink">500+</p>
              <p className="text-xs text-ink/60">projets textiles réalisés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau de réassurance */}
      <section className="border-b border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-ink/60">
          Plus de 500 projets textiles réalisés · Entreprises, clubs et collectivités
          accompagnés partout en France
        </div>
      </section>

      {/* Proposition de valeur */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Un partenaire textile pensé pour les entreprises
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Nous savons qu&apos;un vêtement personnalisé engage l&apos;image de votre
            structure. C&apos;est pourquoi Inkit Paris associe conseil, choix de
            textiles professionnels et techniques de marquage maîtrisées — broderie,
            impression DTF, flocage — pour un rendu à la hauteur de votre marque, du
            premier échantillon à la livraison finale.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => (
              <div key={item.title} className="border-t border-ink pt-4">
                <item.icon className="h-6 w-6 text-sand-dark" />
                <h3 className="mt-3 font-serif text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="border-b border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Nos techniques de personnalisation textile
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Chaque projet a ses contraintes : quantité, budget, type de textile,
            emplacement du marquage. Inkit Paris maîtrise trois techniques
            complémentaires pour répondre précisément à votre besoin.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? NeedleIcon;
              return (
              <div
                key={service.slug}
                className="flex flex-col justify-between border border-line bg-paper p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center border border-line">
                    <Icon className="h-5 w-5 text-ink" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {service.shortDescription}
                  </p>
                </div>
                <Button
                  href={`/services/${service.slug}`}
                  variant="ghost"
                  className="mt-6 justify-start px-0 py-0 normal-case tracking-normal"
                >
                  {service.ctaLabel} →
                </Button>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogue textile */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Un catalogue textile pensé pour l&apos;univers professionnel
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            T-shirts personnalisés, polos brodés, sweats personnalisés, vestes
            personnalisées, vêtements de travail ou casquettes personnalisées : notre
            catalogue textile professionnel couvre l&apos;ensemble de vos besoins,
            pour vos équipes comme pour vos événements.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeCatalogue.map((item) => (
              <a
                key={item.slug}
                href={`/catalogue-textile/${item.slug}`}
                className="group block border border-line transition-shadow hover:shadow-md"
              >
                <CatalogueImage src={item.image} ratio="landscape" alt={item.imageIdea} />
                <div className="flex items-center justify-between p-4">
                  <span className="text-sm text-ink">{item.title}</span>
                  <span className="text-ink/40 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/catalogue-textile" variant="primary">
              Voir tout le catalogue textile
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Inkit Paris */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl">
            Pourquoi choisir Inkit Paris pour vos vêtements personnalisés
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="border-t border-paper/20 pt-4">
                <item.icon className="h-6 w-6 text-paper/70" />
                <h3 className="mt-3 font-serif text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-paper/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes du projet */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Votre projet textile en 4 étapes
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title}>
                <span className="font-serif text-4xl text-sand-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/devis" variant="secondary">
              Démarrer mon projet
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ courte */}
      <section className="border-b border-line bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Vos questions les plus fréquentes
          </h2>
          <div className="mt-10">
            <FaqAccordion entries={homeFaq} />
          </div>
          <div className="mt-8">
            <Button href="/faq" variant="ghost">
              Consulter toutes les questions →
            </Button>
          </div>
        </div>
      </section>

      {/* Formulaire de devis */}
      <section id="devis" className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-serif text-3xl text-ink">
            Recevez votre devis textile personnalisé
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Décrivez votre projet en quelques minutes. Notre équipe revient vers vous
            sous 24 à 48h avec un devis adapté à votre besoin.
          </p>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-paper-dark">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-ink">
            Un projet de textile personnalisé en tête ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
            Que vous ayez déjà une idée précise ou besoin d&apos;être conseillé, notre
            équipe vous répond rapidement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/devis" variant="primary">
              Demander un devis
            </Button>
            <Button href="/catalogue-textile" variant="secondary">
              Recevoir une sélection personnalisée
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
