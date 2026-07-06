export type ProductReference = {
  tier: string;
  brand: string;
  model: string;
  detail: string;
  image?: string;
  techniques: string[];
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
        techniques: ["Impression DTF", "Broderie"],
      },
      {
        tier: "Milieu de gamme",
        brand: "B&C",
        model: "#E150",
        detail: "Coton 150 g/m², coupe classique, bonne base pour broderie et DTF.",
        image: "/images/catalogue/tshirt-bc-e150.jpg",
        techniques: ["Broderie", "Impression DTF"],
      },
      {
        tier: "Premium / éco-responsable",
        brand: "B&C",
        model: "#Inspire E150",
        detail: "Coton biologique 150 g/m², même coupe que le #E150 avec un argument RSE.",
        image: "/images/catalogue/tshirt-bc-inspire-e150.jpg",
        techniques: ["Impression DTF", "Broderie"],
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
        techniques: ["Broderie"],
      },
      {
        tier: "Milieu de gamme",
        brand: "B&C",
        model: "My Polo 180",
        detail: "Coton piqué 180 g/m², coupe classique — best-seller du marquage textile.",
        image: "/images/catalogue/polo-bc-my-polo-180.jpg",
        techniques: ["Broderie"],
      },
      {
        tier: "Premium",
        brand: "Tee Jays",
        model: "Luxury Stretch Polo",
        detail: "Coton biologique et stretch, finition soignée pour une image haut de gamme.",
        image: "/images/catalogue/polo-tee-jays-luxury-stretch.jpg",
        techniques: ["Broderie"],
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
        techniques: ["Broderie", "Flocage"],
      },
      {
        tier: "Milieu de gamme",
        brand: "B&C",
        model: "ID.222 Crew / ID.223 Hoodie",
        detail: "Sweat 50/50 unisexe, disponible en col rond ou à capuche.",
        image: "/images/catalogue/sweat-bc-id222.jpg",
        techniques: ["Broderie", "Flocage", "Impression DTF"],
      },
      {
        tier: "Premium",
        brand: "Stedman",
        model: "Classic Hoodie",
        detail: "Gamme \"Better Basics\", conçue pour durer, disponibilité fiable en stock.",
        image: "/images/catalogue/sweat-stedman-classic-hoodie.jpg",
        techniques: ["Broderie", "Flocage"],
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
    image: "/images/catalogue/veste-pen-duick-atlantic.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Result",
        model: "Softshell Jacket 3 couches",
        detail: "Veste softshell essentiel, coupe unisexe, bon compromis prix/technicité.",
        image: "/images/catalogue/veste-result-softshell.jpg",
        techniques: ["Broderie", "Flocage"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Regatta / Craghoppers",
        model: "Basecamp Softshell Jacket",
        detail: "Veste softshell technique, robuste, pensée pour un usage extérieur régulier.",
        image: "/images/catalogue/veste-regatta-craghoppers.jpg",
        techniques: ["Broderie", "Flocage"],
      },
      {
        tier: "Premium",
        brand: "Pen Duick",
        model: "Atlantic (2 ou 3 couches)",
        detail: "Softshell française haut de gamme, alliant technicité et allure soignée.",
        image: "/images/catalogue/veste-pen-duick-atlantic.jpg",
        techniques: ["Broderie"],
      },
    ],
  },
  {
    slug: "vetements-de-travail",
    title: "Vêtements de travail personnalisés",
    description:
      "Un textile résistant pensé pour le terrain, personnalisé à l'image de votre entreprise.",
    ctaLabel: "Voir les vêtements de travail",
    imageIdea: "Veste ou pantalon de travail robuste, marquage dos",
    image: "/images/catalogue/travail-herock-persia.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Result",
        model: "Lite Coverall",
        detail: "Combinaison de travail légère, économique, pour un usage quotidien.",
        image: "/images/catalogue/travail-result-lite-coverall.jpg",
        techniques: ["Flocage", "Broderie"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Herock",
        model: "Persia",
        detail: "Veste de travail robuste multi-poches, référence chez les professionnels du terrain.",
        image: "/images/catalogue/travail-herock-persia.jpg",
        techniques: ["Broderie", "Flocage"],
      },
      {
        tier: "Premium",
        brand: "Herock",
        model: "Poseidon",
        detail: "Veste softshell technique à capuche, pensée pour les conditions exigeantes.",
        image: "/images/catalogue/travail-herock-poseidon.jpg",
        techniques: ["Broderie", "Flocage"],
      },
    ],
  },
  {
    slug: "haute-visibilite",
    title: "Vêtements haute visibilité personnalisés",
    description:
      "Sécurité et conformité sur les chantiers et zones à risque, avec un marquage adapté aux normes.",
    ctaLabel: "Voir la gamme haute visibilité",
    imageIdea: "Gilet fluo avec bandes réfléchissantes et logo entreprise",
    image: "/images/catalogue/hautevis-korntex-hannover.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Yoko",
        model: "Hi-Vis 2 Band Waistcoat",
        detail: "Gilet de sécurité classique à bandes réfléchissantes, la base incontournable.",
        image: "/images/catalogue/hautevis-yoko-gilet.jpg",
        techniques: ["Flocage"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Korntex",
        model: "Safety Vest « Hannover »",
        detail: "Gilet de sécurité normé, confortable, adapté à un usage régulier.",
        image: "/images/catalogue/hautevis-korntex-hannover.jpg",
        techniques: ["Flocage"],
      },
      {
        tier: "Premium",
        brand: "Korntex",
        model: "Premium Multifun. Vest « Munich »",
        detail: "Gilet multipoches haute visibilité, pensé pour les métiers techniques.",
        image: "/images/catalogue/hautevis-korntex-munich.jpg",
        techniques: ["Flocage", "Broderie"],
      },
    ],
  },
  {
    slug: "casquettes-bonnets",
    title: "Casquettes et bonnets personnalisés",
    description:
      "Un accessoire brodé ou floqué pour renforcer la visibilité de votre marque au quotidien.",
    ctaLabel: "Voir les casquettes personnalisables",
    imageIdea: "Casquette brodée logo avant, gros plan",
    image: "/images/catalogue/casquette-beechfield-original.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Beechfield",
        model: "Original 5 Panel Cap",
        detail: "La casquette 5 pans la plus vendue, idéale pour la broderie de logo.",
        image: "/images/catalogue/casquette-beechfield-original.jpg",
        techniques: ["Broderie"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Atlantis Headwear",
        model: "Liberty Five / Start Five",
        detail: "Casquette baseball de qualité supérieure, large choix de coloris.",
        image: "/images/catalogue/casquette-atlantis-headwear.jpg",
        techniques: ["Broderie"],
      },
      {
        tier: "Premium",
        brand: "Flexfit",
        model: "Wooly Combed",
        detail: "La référence des casquettes ajustées, coupe et finition premium.",
        image: "/images/catalogue/casquette-flexfit-wooly.jpg",
        techniques: ["Broderie"],
      },
    ],
  },
  {
    slug: "sacs-bagagerie",
    title: "Sacs et bagagerie personnalisés",
    description:
      "Sacs à dos, totebags et bagagerie personnalisée pour vos équipes, événements ou opérations commerciales.",
    ctaLabel: "Voir la bagagerie personnalisable",
    imageIdea: "Tote bag ou sac à dos avec logo brodé",
    image: "/images/catalogue/bagagerie-bagbase-tote.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "BagBase",
        model: "Minimal Lifestyle Tote",
        detail: "Sac fourre-tout minimaliste, idéal pour un cadeau d'entreprise ou un événement.",
        image: "/images/catalogue/bagagerie-bagbase-tote.jpg",
        techniques: ["Broderie", "Impression DTF"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Quadra",
        model: "Stockholm Laptop Backpack",
        detail: "Sac à dos professionnel avec compartiment ordinateur, look soigné.",
        image: "/images/catalogue/bagagerie-quadra-stockholm.jpg",
        techniques: ["Broderie"],
      },
      {
        tier: "Premium",
        brand: "Quadra",
        model: "Tungsten Business Traveller",
        detail: "Valise cabine à roulettes, gamme voyage haut de gamme pour vos équipes.",
        image: "/images/catalogue/bagagerie-quadra-tungsten.jpg",
        techniques: ["Broderie"],
      },
    ],
  },
  {
    slug: "textile-enfant",
    title: "Textile enfant personnalisé",
    description:
      "Pour vos événements, clubs et associations, une gamme textile enfant adaptée à toutes les tailles.",
    ctaLabel: "Voir le textile enfant",
    imageIdea: "T-shirt enfant coloré avec logo de club",
    image: "/images/catalogue/enfant-jhk-tshirt.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "JHK",
        model: "Kid Unisex T-Shirt",
        detail: "T-shirt enfant 155 g/m², coupe unisexe, toutes tailles.",
        image: "/images/catalogue/enfant-jhk-tshirt.jpg",
        techniques: ["Impression DTF", "Flocage"],
      },
      {
        tier: "Milieu de gamme",
        brand: "JHK",
        model: "Sweatshirt Kid",
        detail: "Sweat col rond enfant, confortable pour un usage quotidien ou événementiel.",
        image: "/images/catalogue/enfant-jhk-sweatshirt.jpg",
        techniques: ["Flocage", "Broderie"],
      },
      {
        tier: "Premium",
        brand: "Larkwood",
        model: "Gamme molleton enfant",
        detail: "Sweat et ensembles molletonnés doux, finitions soignées pour les tout-petits.",
        image: "/images/catalogue/enfant-larkwood-fleece.jpg",
        techniques: ["Broderie"],
      },
    ],
  },
  {
    slug: "sport",
    title: "Textile sport personnalisé pour clubs et équipes",
    description:
      "Maillots, shorts et tenues techniques personnalisés pour vos clubs sportifs et événements.",
    ctaLabel: "Voir le textile sport",
    imageIdea: "Maillot de sport avec flocage nom et numéro",
    image: "/images/catalogue/sport-teejays-polo.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Just Cool",
        model: "Cool T (Neoteric™)",
        detail: "Tee-shirt technique respirant, idéal pour l'entraînement et les événements sportifs.",
        image: "/images/catalogue/sport-justcool-tee.jpg",
        techniques: ["Impression DTF", "Flocage"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Tombo",
        model: "1/4 Zip Technical Top",
        detail: "Haut technique col zippé, parfait pour les clubs et équipes en toute saison.",
        image: "/images/catalogue/sport-tombo-zip-top.jpg",
        techniques: ["Impression DTF", "Flocage"],
      },
      {
        tier: "Premium",
        brand: "Tee Jays",
        model: "Luxury Sport Polo",
        detail: "Polo de sport haut de gamme, pour une image soignée hors terrain.",
        image: "/images/catalogue/sport-teejays-polo.jpg",
        techniques: ["Broderie"],
      },
    ],
  },
  {
    slug: "goodies-accessoires",
    title: "Goodies et accessoires personnalisés",
    description:
      "Petits objets et accessoires textiles pour compléter vos opérations événementielles ou vos cadeaux d'entreprise.",
    ctaLabel: "Voir les goodies personnalisables",
    imageIdea: "Assortiment de petits accessoires textiles (tour de cou, serviette...)",
    image: "/images/catalogue/goodies-hamam-sultan.jpg",
    references: [
      {
        tier: "Entrée de gamme",
        brand: "Towel City",
        model: "Serviette invité / visage",
        detail: "Petite serviette éponge personnalisable, idéale en cadeau d'accueil.",
        image: "/images/catalogue/goodies-towelcity-hand.jpg",
        techniques: ["Broderie"],
      },
      {
        tier: "Milieu de gamme",
        brand: "Towel City",
        model: "Gamme Sport / Bain",
        detail: "Serviettes éponge de qualité, plusieurs coloris, pour le sport ou le quotidien.",
        image: "/images/catalogue/goodies-towelcity-sport.jpg",
        techniques: ["Broderie"],
      },
      {
        tier: "Premium",
        brand: "The One Towelling",
        model: "Fouta Hamam Sultan",
        detail: "Serviette-fouta légère et élégante, un goodie premium qui sort de l'ordinaire.",
        image: "/images/catalogue/goodies-hamam-sultan.jpg",
        techniques: ["Broderie"],
      },
    ],
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
