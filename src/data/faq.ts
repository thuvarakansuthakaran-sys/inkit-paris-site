export type FaqEntry = {
  question: string;
  answer: string;
  showOnHome?: boolean;
};

export const faqEntries: FaqEntry[] = [
  {
    question: "Quelle est la quantité minimale de commande ?",
    answer:
      "Nos techniques permettent de travailler aussi bien de petites que de grandes séries. La quantité minimale dépend de la technique choisie — nous vous conseillons selon votre projet.",
    showOnHome: true,
  },
  {
    question: "Quel est le délai moyen de livraison ?",
    answer:
      "Comptez généralement entre 2 et 3 semaines selon la technique et la quantité, hors périodes de forte demande. Un délai précis vous est communiqué avec votre devis.",
    showOnHome: true,
  },
  {
    question: "Puis-je envoyer mon propre logo ?",
    answer:
      "Oui, vous pouvez joindre votre logo directement dans le formulaire de devis. Nous vous conseillons sur le meilleur rendu selon le textile choisi.",
    showOnHome: true,
  },
  {
    question: "Quelle technique choisir : broderie, DTF ou flocage ?",
    answer:
      "Cela dépend du textile, de l'usage et du rendu recherché. Si vous hésitez, sélectionnez « Je souhaite être conseillé » dans le formulaire de devis.",
    showOnHome: true,
  },
  {
    question:
      "Travaillez-vous avec les associations et clubs sportifs, ou uniquement les entreprises ?",
    answer:
      "Nous accompagnons les entreprises, mais aussi les associations, collectivités, clubs sportifs et organisateurs d'événements.",
    showOnHome: true,
  },
  {
    question: "Proposez-vous un échantillon avant de valider une grande quantité ?",
    answer:
      "Oui, un échantillon ou une maquette numérique peut être proposé selon la technique et la quantité, pour valider le rendu avant le lancement en production.",
  },
  {
    question: "Puis-je fournir mes propres vêtements pour la personnalisation ?",
    answer:
      "Cela peut être étudié au cas par cas selon la technique souhaitée. Précisez-le dans votre demande de devis, nous vous indiquerons si c'est possible.",
  },
  {
    question: "Quels textiles sont compatibles avec la broderie, le DTF et le flocage ?",
    answer:
      "La majorité des textiles (coton, polyester, mélanges) sont compatibles. Le choix de la technique dépend surtout du rendu recherché et de l'usage du vêtement.",
  },
  {
    question: "Comment se déroule le paiement ?",
    answer:
      "Les modalités de paiement vous sont communiquées avec votre devis, généralement sous forme d'acompte à la commande et de solde à la livraison.",
  },
  {
    question: "Livrez-vous partout en France ?",
    answer: "Oui, nous livrons vos commandes partout en France métropolitaine.",
  },
  {
    question: "Puis-je commander pour un événement ponctuel, sans engagement régulier ?",
    answer:
      "Bien sûr, nous accompagnons aussi bien des besoins ponctuels (événements, clubs, associations) que des collaborations récurrentes.",
  },
  {
    question: "Que se passe-t-il si je ne sais pas quel textile choisir ?",
    answer:
      "Sélectionnez « Je souhaite être conseillé » dans le formulaire de devis : notre équipe vous oriente selon votre usage, votre budget et le rendu recherché.",
  },
];
