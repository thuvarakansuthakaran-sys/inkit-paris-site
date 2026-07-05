export type CatalogueItem = {
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageIdea: string;
};

export const catalogueItems: CatalogueItem[] = [
  {
    slug: "t-shirts-personnalises",
    title: "T-shirts personnalisés pour entreprises",
    description:
      "Une base incontournable pour vos équipes, vos événements ou vos opérations de communication, brodée ou imprimée selon vos besoins.",
    ctaLabel: "Voir les t-shirts personnalisables",
    imageIdea: "Pile de t-shirts unis pliés, gros plan sur le tissu coton",
  },
  {
    slug: "polos-personnalises",
    title: "Polos personnalisés et polos brodés",
    description:
      "Le vêtement de référence pour une image professionnelle soignée, particulièrement adapté à la broderie de logo.",
    ctaLabel: "Voir les polos personnalisables",
    imageIdea: "Polo sur cintre, broderie logo en gros plan poitrine gauche",
  },
  {
    slug: "sweats-hoodies",
    title: "Sweats et hoodies personnalisés",
    description:
      "Confort et visibilité pour vos équipes, en broderie ou impression DTF, toutes saisons.",
    ctaLabel: "Voir les sweats personnalisables",
    imageIdea: "Sweat à capuche plié, logo floqué au dos",
  },
  {
    slug: "vestes-softshells",
    title: "Vestes et softshells personnalisées",
    description:
      "Des vestes techniques et softshells pour une image professionnelle en extérieur, floquées ou brodées.",
    ctaLabel: "Voir les vestes personnalisables",
    imageIdea: "Veste softshell sur mannequin buste, logo poitrine",
  },
  {
    slug: "vetements-de-travail",
    title: "Vêtements de travail personnalisés",
    description:
      "Un textile résistant pensé pour le terrain, personnalisé à l'image de votre entreprise.",
    ctaLabel: "Voir les vêtements de travail",
    imageIdea: "Veste ou pantalon de travail robuste, marquage dos",
  },
  {
    slug: "haute-visibilite",
    title: "Vêtements haute visibilité personnalisés",
    description:
      "Sécurité et conformité sur les chantiers et zones à risque, avec un marquage adapté aux normes.",
    ctaLabel: "Voir la gamme haute visibilité",
    imageIdea: "Gilet fluo avec bandes réfléchissantes et logo entreprise",
  },
  {
    slug: "casquettes-bonnets",
    title: "Casquettes et bonnets personnalisés",
    description:
      "Un accessoire brodé ou floqué pour renforcer la visibilité de votre marque au quotidien.",
    ctaLabel: "Voir les casquettes personnalisables",
    imageIdea: "Casquette brodée logo avant, gros plan",
  },
  {
    slug: "sacs-bagagerie",
    title: "Sacs et bagagerie personnalisés",
    description:
      "Sacs à dos, totebags et bagagerie personnalisée pour vos équipes, événements ou opérations commerciales.",
    ctaLabel: "Voir la bagagerie personnalisable",
    imageIdea: "Tote bag ou sac à dos avec logo brodé",
  },
  {
    slug: "textile-enfant",
    title: "Textile enfant personnalisé",
    description:
      "Pour vos événements, clubs et associations, une gamme textile enfant adaptée à toutes les tailles.",
    ctaLabel: "Voir le textile enfant",
    imageIdea: "T-shirt enfant coloré avec logo de club",
  },
  {
    slug: "sport",
    title: "Textile sport personnalisé pour clubs et équipes",
    description:
      "Maillots, shorts et tenues techniques personnalisés pour vos clubs sportifs et événements.",
    ctaLabel: "Voir le textile sport",
    imageIdea: "Maillot de sport avec flocage nom et numéro",
  },
  {
    slug: "goodies-accessoires",
    title: "Goodies et accessoires personnalisés",
    description:
      "Petits objets et accessoires textiles pour compléter vos opérations événementielles ou vos cadeaux d'entreprise.",
    ctaLabel: "Voir les goodies personnalisables",
    imageIdea: "Assortiment de petits accessoires textiles (tour de cou, serviette...)",
  },
  {
    slug: "guide-des-tailles",
    title: "Guide des tailles textile professionnel",
    description:
      "Retrouvez les correspondances de tailles pour choisir sereinement vos vêtements avant de passer commande.",
    ctaLabel: "Consulter le guide des tailles",
    imageIdea: "Mètre ruban stylisé ou tableau de correspondance des tailles",
  },
];

// Sous-ensemble affiché en aperçu sur la page d'accueil
export const homepageCatalogueSlugs = [
  "t-shirts-personnalises",
  "polos-personnalises",
  "sweats-hoodies",
  "vestes-softshells",
  "vetements-de-travail",
  "casquettes-bonnets",
];
