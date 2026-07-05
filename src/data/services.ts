export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  advantages: string[];
  fabricsTitle: string;
  fabrics: string[];
};

export const services: Service[] = [
  {
    slug: "broderie-textile",
    title: "Broderie textile",
    shortDescription:
      "Un marquage haut de gamme, résistant au lavage, idéal pour les polos, vestes et casquettes professionnelles.",
    ctaLabel: "Découvrir la broderie",
    metaTitle: "Broderie Textile Professionnelle pour Entreprises – Inkit Paris",
    metaDescription:
      "Polos brodés, vestes, casquettes personnalisées... Inkit Paris réalise la broderie textile de vos vêtements professionnels avec une finition premium.",
    intro:
      "La broderie textile reste la technique de référence pour une image d'entreprise soignée et durable. Le fil vient recouvrir le tissu pour un rendu en relief, résistant au lavage et au temps — idéal pour des polos brodés ou des vestes personnalisées qui doivent tenir sur la durée.",
    advantages: [
      "Un rendu premium et durable, particulièrement adapté aux logos d'entreprise",
      "Une excellente résistance aux lavages répétés",
      "Adaptée aux polos, vestes, casquettes et vêtements de travail",
      "Convient aussi bien aux petites qu'aux grandes séries",
    ],
    fabricsTitle: "Sur quels textiles ?",
    fabrics: ["Polos", "Vestes et softshells", "Casquettes", "Vêtements de travail"],
  },
  {
    slug: "impression-dtf",
    title: "Impression DTF",
    shortDescription:
      "Une impression textile précise et colorée, adaptée aux logos complexes et aux petites comme grandes séries.",
    ctaLabel: "Découvrir l'impression DTF",
    metaTitle: "Impression DTF Textile pour Entreprises – Inkit Paris",
    metaDescription:
      "Impression DTF pour un marquage textile coloré, précis et durable, adapté à tous types de vêtements professionnels. Devis rapide et personnalisé.",
    intro:
      "L'impression DTF (Direct to Film) permet de reproduire fidèlement des logos complexes, des dégradés et des visuels multicolores sur la quasi-totalité des textiles. Une technique flexible, précise, pour un textile personnalisé au rendu net.",
    advantages: [
      "Un rendu fidèle, même sur les logos détaillés ou multicolores",
      "Compatible avec un grand nombre de matières textiles",
      "Adaptée aux petites séries comme aux grandes quantités",
      "Une bonne tenue au lavage dans la durée",
    ],
    fabricsTitle: "Sur quels textiles ?",
    fabrics: ["T-shirts", "Sweats et hoodies", "Textile sport", "Textile enfant"],
  },
  {
    slug: "flocage-textile",
    title: "Flocage textile",
    shortDescription:
      "Un marquage mat et qualitatif, parfait pour les vêtements de travail, événements et équipes sportives.",
    ctaLabel: "Découvrir le flocage",
    metaTitle: "Flocage Textile Entreprise | Marquage Vêtements Pro – Inkit Paris",
    metaDescription:
      "Flocage textile résistant pour vêtements de travail, associations et clubs sportifs. Un rendu mat et qualitatif, pensé pour durer.",
    intro:
      "Le flocage textile applique une matière découpée puis thermocollée sur le vêtement, pour un rendu mat, épais et qualitatif. Une technique solide, particulièrement adaptée aux vêtements de travail personnalisés et à la numérotation sportive.",
    advantages: [
      "Un rendu mat et texturé, valorisant pour les logos simples",
      "Une technique très résistante, adaptée aux vêtements de travail",
      "Idéale pour la numérotation sportive et le floquage événementiel",
      "Un bon rapport qualité/prix sur les petites séries",
    ],
    fabricsTitle: "Sur quels textiles ?",
    fabrics: ["Vêtements de travail", "Haute visibilité", "Textile sport", "Textile événementiel"],
  },
  {
    slug: "conseil-accompagnement",
    title: "Conseil & accompagnement",
    shortDescription:
      "Vous hésitez sur le textile ou la technique ? Nos équipes vous guident selon votre secteur, votre budget et votre image de marque.",
    ctaLabel: "Être conseillé",
    metaTitle: "Conseil en Personnalisation Textile pour Entreprises – Inkit Paris",
    metaDescription:
      "Un accompagnement sur-mesure pour choisir le bon textile et la bonne technique de marquage selon votre budget et votre usage.",
    intro:
      "Choisir le bon textile et la bonne technique de marquage n'est pas toujours évident. Nos équipes vous accompagnent à chaque étape, du choix du vêtement à la validation de la maquette, pour un résultat à la hauteur de votre image de marque.",
    advantages: [
      "L'usage réel du vêtement (quotidien, événementiel, extérieur...)",
      "Le budget et la quantité souhaités",
      "Le rendu recherché selon la complexité de votre logo",
      "Les délais et contraintes de votre projet",
    ],
    fabricsTitle: "Ce que nous analysons avec vous",
    fabrics: [
      "Usage et fréquence de port",
      "Budget et quantité",
      "Rendu visuel recherché",
      "Délai de livraison souhaité",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
