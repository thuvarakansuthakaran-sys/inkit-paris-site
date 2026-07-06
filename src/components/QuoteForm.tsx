"use client";

import { FormEvent, useState } from "react";
import { useCart } from "./CartContext";

const clientTypes = [
  "Entreprise",
  "Association",
  "Collectivité",
  "Club sportif",
  "Organisateur d'événement",
  "Autre",
];

const textileTypes = [
  "T-shirt",
  "Polo",
  "Sweat",
  "Veste",
  "Vêtement de travail",
  "Casquette",
  "Autre",
  "Je ne sais pas encore",
];

const quantities = ["Moins de 20", "20 à 50", "50 à 100", "100 à 500", "Plus de 500"];

const techniques = [
  "Broderie",
  "Impression DTF",
  "Flocage",
  "Je souhaite être conseillé",
];

const inputClasses =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";
const labelClasses = "mb-2 block text-sm font-medium text-ink";

type Status = "idle" | "submitting" | "success" | "error";

type QuoteFormProps = {
  initialProduct?: string;
  initialTextileType?: string;
  initialTechniques?: string[];
};

export default function QuoteForm({
  initialProduct,
  initialTextileType,
  initialTechniques = [],
}: QuoteFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>(
    initialTechniques.filter((t) => techniques.includes(t))
  );
  const { items, removeItem, updateQuantity, clear } = useCart();

  function toggleTechnique(value: string) {
    setSelectedTechniques((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    selectedTechniques.forEach((t) => formData.append("technique", t));

    if (items.length > 0) {
      formData.set("selection", JSON.stringify(items));
      const summary = items
        .map(
          (item) =>
            `- ${item.brand} ${item.model} (${item.categoryTitle}) — ${item.quantity} pièces — ${item.technique}`
        )
        .join("\n");
      const existingMessage = (formData.get("message") as string) || "";
      formData.set(
        "message",
        `Produits sélectionnés :\n${summary}${existingMessage ? "\n\n" + existingMessage : ""}`
      );
    }

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
      setSelectedTechniques([]);
      clear();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper-dark px-6 py-10 text-center">
        <p className="font-serif text-2xl text-ink">
          Merci, votre demande a bien été envoyée.
        </p>
        <p className="mt-3 text-sm text-ink/70">
          Notre équipe l&apos;étudie et revient vers vous sous 24 à 48h avec votre
          devis personnalisé.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      {items.length > 0 ? (
        <div className="border border-line bg-paper-dark p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg text-ink">
              Votre sélection ({items.length})
            </h3>
            <button
              type="button"
              onClick={clear}
              className="text-xs text-ink/50 underline underline-offset-4 hover:text-ink"
            >
              Vider la sélection
            </button>
          </div>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 border-t border-line pt-3 first:border-t-0 first:pt-0"
              >
                {item.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt=""
                    className="h-14 w-14 flex-shrink-0 object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="text-sm text-ink">
                    {item.brand} — {item.model}
                  </p>
                  <p className="text-xs text-ink/50">
                    {item.categoryTitle} · {item.technique}
                  </p>
                </div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-20 border border-line bg-paper px-2 py-1.5 text-sm text-ink"
                  aria-label={`Quantité pour ${item.brand} ${item.model}`}
                />
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="px-1 text-ink/40 hover:text-ink"
                  aria-label={`Retirer ${item.brand} ${item.model}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        initialProduct && (
          <div className="border border-line bg-paper-dark px-4 py-3 text-sm text-ink md:col-span-2">
            Vous personnalisez : <span className="font-medium">{initialProduct}</span>
            <input type="hidden" name="produit" value={initialProduct} />
          </div>
        )
      )}

      <div>
        <label className={labelClasses} htmlFor="name">
          Nom et prénom *
        </label>
        <input className={inputClasses} type="text" id="name" name="name" required />
      </div>

      <div>
        <label className={labelClasses} htmlFor="company">
          Société *
        </label>
        <input
          className={inputClasses}
          type="text"
          id="company"
          name="company"
          required
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">
          Email professionnel *
        </label>
        <input className={inputClasses} type="email" id="email" name="email" required />
      </div>

      <div>
        <label className={labelClasses} htmlFor="phone">
          Téléphone *
        </label>
        <input className={inputClasses} type="tel" id="phone" name="phone" required />
      </div>

      <div>
        <label className={labelClasses} htmlFor="clientType">
          Type de client
        </label>
        <select className={inputClasses} id="clientType" name="clientType">
          {clientTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="textileType">
          Type de textile souhaité
        </label>
        <select
          className={inputClasses}
          id="textileType"
          name="textileType"
          defaultValue={initialTextileType ?? textileTypes[0]}
        >
          {textileTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="quantity">
          Quantité estimée
        </label>
        <select className={inputClasses} id="quantity" name="quantity">
          {quantities.map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="deliveryDate">
          Date souhaitée de livraison
        </label>
        <input
          className={inputClasses}
          type="date"
          id="deliveryDate"
          name="deliveryDate"
        />
      </div>

      <fieldset className="md:col-span-2">
        <legend className={labelClasses}>Technique souhaitée</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {techniques.map((technique) => (
            <label
              key={technique}
              className="flex items-center gap-2 text-sm text-ink/80"
            >
              <input
                type="checkbox"
                checked={selectedTechniques.includes(technique)}
                onChange={() => toggleTechnique(technique)}
                className="h-4 w-4 border-line"
              />
              {technique}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelClasses} htmlFor="markingLocation">
          Emplacement du marquage
        </label>
        <input
          className={inputClasses}
          type="text"
          id="markingLocation"
          name="markingLocation"
          placeholder="Ex : poitrine gauche, dos"
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="file">
          Logo ou fichier à joindre
        </label>
        <input
          className={`${inputClasses} py-2.5`}
          type="file"
          id="file"
          name="file"
          accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.svg"
        />
      </div>

      <div className="md:col-span-2">
        <label className={labelClasses} htmlFor="message">
          Message complémentaire
        </label>
        <textarea
          className={inputClasses}
          id="message"
          name="message"
          rows={4}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-ink px-8 py-3 text-sm uppercase tracking-wide text-paper transition-colors hover:bg-sand-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
        </button>
        <p className="mt-3 text-xs text-ink/50">
          Vos informations sont utilisées uniquement pour traiter votre demande de
          devis et ne sont jamais transmises à des tiers.
        </p>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-700">
            Un problème est survenu lors de l&apos;envoi. Merci de réessayer ou de nous
            contacter directement par email.
          </p>
        )}
      </div>
    </form>
  );
}
