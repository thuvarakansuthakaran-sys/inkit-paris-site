"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

type Props = {
  id: string;
  categoryTitle: string;
  brand: string;
  model: string;
  technique: string;
  image?: string;
};

export default function AddToSelectionButton({
  id,
  categoryTitle,
  brand,
  model,
  technique,
  image,
}: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem({ id, categoryTitle, brand, model, technique, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-4 inline-flex items-center gap-1 text-sm text-ink underline underline-offset-4 transition-colors hover:text-sand-dark"
    >
      {added ? "Ajouté à votre sélection ✓" : "Ajouter à ma sélection →"}
    </button>
  );
}
