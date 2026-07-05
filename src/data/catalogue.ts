export type ProductReference = {
  tier: string;
  brand: string;
  model: string;
  detail: string;
  image?: string;
};

export type CatalogueItem = {
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
  imageIdea: string;
  image?: string;
  references?: ProductReference[];
};

export const catalogueItems: CatalogueItem[] = [
  {
    slug: "t-shirts-personnalises",
    title: "T-shirts personnalisés pour entreprises",
    description:
      "Une base incontournable pour vos équipes, vos événements ou vos opérations de communication, brodée ou imprimée selon vos besoins.",
    ctaLabel: "Voir les t-shirts personnalisables",
    imageIdea: "Pile de t-shirts unis pliés, gros plan sur le tissu coton",
    image: "/images/catalogue/tshirt-fruit-of-the-loom-original-t.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Fruit of the Loom",
        model: "Original T",
        detail: "100% coton, col rond, environ 145 g/m² — la référence économique.",
        image: "/images/catalogue/tshirt-fruit-of-the-loom-original-t.jpg",
      },
      {
        tier: "Milieu de gamme",
        brand: "B&C",
        model: "#E150",
        detail: "Coton 150 g/m², coupe classique, bonne base pour broderie et DTF.",
        image: "/images/catalogue/tshirt-bc-e150.jpg",
      },
      {
        tier: "Premium / éco-responsable",
        brand: "B&C",
        model: "#Inspire E150",
        detail: "Coton biologique 150 g/m², même coupe que le #E150 avec un argument RSE.",
        image: "/images/catalogue/tshirt-bc-inspire-e150.jpg",
      },
    ],
  },
  {
    slug: "polos-personnalises",
    title: "Polos personnalisés et polos brodés",
    description:
      "Le vêtement de référence pour une image professionnelle soignée, particulièrement adapté à la broderie de logo.",
    ctaLabel: "Voir les polos personnalisables",
    imageIdea: "Polo sur cintre, broderie logo en gros plan poitrine gauche",
    image: "/images/catalogue/polo-hero.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Fruit of the Loom",
        model: "65/35 Polo",
        detail: "Polycoton 180 g/m², lavable à 60°, résistant pour un usage régulier.",
        image: "/images/catalogue/polo-fruit-of-the-loom-65-35.jpg",
      },
      {
        tier: "Milieu de gamme",
        brand: "B&C",
        model: "My Polo 180",
        detail: "Coton piqué 180 g/m², coupe classique — best-seller du marquage textile.",
        image: "/images/catalogue/polo-bc-my-polo-180.jpg",
      },
      {
        tier: "Premium",
        brand: "Tee Jays",
        model: "Luxury Stretch Polo",
        detail: "Coton biologique et stretch, finition soignée pour une image haut de gamme.",
        image: "/images/catalogue/polo-tee-jays-luxury-stretch.jpg",
      },
    ],
  },
  {
    slug: "sweats-hoodies",
    title: "Sweats et hoodies personnalisés",
    description:
      "Confort et visibilité pour vos équipes, en broderie ou impression DTF, toutes saisons.",
    ctaLabel: "Voir les sweats personnalisables",
    imageIdea: "Sweat à capuche plié, logo floqué au dos",
    image: "/images/catalogue/sweat-hero.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Fruit of the Loom",
        model: "Classic Set-In Sweat",
        detail: "80/20, 280 g/m², manches droites — un sweat col rond solide et économique.",
        image: "/images/catalogue/sweat-fruit-of-the-loom-classic.jpg",
      },
      {
        tier: "Milieu de gamme",
        brand: "B&C",
        model: "ID.222 Crew / ID.223 Hoodie",
        detail: "Sweat 50/50 unisexe, disponible en col rond ou à capuche.",
        image: "/images/catalogue/sweat-bc-id222.jpg",
      },
      {
        tier: "Premium",
        brand: "Stedman",
        model: "Classic Hoodie",
        detail: "Gamme \"Better Basics\", conçue pour durer, disponibilité fiable en stock.",
        image: "/images/catalogue/sweat-stedman-classic-hoodie.jpg",
      },
    ],
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
