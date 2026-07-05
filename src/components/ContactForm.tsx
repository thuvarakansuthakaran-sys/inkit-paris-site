"use client";

import { FormEvent, useState } from "react";

const inputClasses =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";
const labelClasses = "mb-2 block text-sm font-medium text-ink";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper-dark px-6 py-10 text-center">
        <p className="font-serif text-2xl text-ink">Merci pour votre message.</p>
        <p className="mt-3 text-sm text-ink/70">
          Notre équipe vous répond dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div>
        <label className={labelClasses} htmlFor="name">
          Nom et prénom *
        </label>
        <input className={inputClasses} type="text" id="name" name="name" required />
      </div>
      <div>
        <label className={labelClasses} htmlFor="email">
          Email *
        </label>
        <input className={inputClasses} type="email" id="email" name="email" required />
      </div>
      <div>
        <label className={labelClasses} htmlFor="message">
          Message *
        </label>
        <textarea
          className={inputClasses}
          id="message"
          name="message"
          rows={5}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-ink px-8 py-3 text-sm uppercase tracking-wide text-paper transition-colors hover:bg-sand-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-700">
            Un problème est survenu lors de l&apos;envoi. Merci de réessayer ou de
            nous écrire directement par email.
          </p>
        )}
      </div>
    </form>
  );
}
