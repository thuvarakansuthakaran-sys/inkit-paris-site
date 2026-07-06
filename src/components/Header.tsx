"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { useCart } from "./CartContext";
import { BagIcon } from "./icons";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/catalogue-textile", label: "Catalogue" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const count = items.length;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-tight text-ink">
          INKIT
          <span className="ml-2 align-middle text-[0.6rem] font-sans tracking-[0.3em] text-ink/60">
            PARIS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/devis" className="relative text-ink/80 hover:text-ink" aria-label="Ma sélection">
            <BagIcon className="h-6 w-6" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sand-dark text-[10px] text-paper">
                {count}
              </span>
            )}
          </Link>
          <Button href="/devis" variant="primary">
            Demander un devis
          </Button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <Link href="/devis" className="relative text-ink/80" aria-label="Ma sélection">
            <BagIcon className="h-6 w-6" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sand-dark text-[10px] text-paper">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="flex flex-col gap-1.5"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
            <span className="h-px w-6 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm text-ink/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/devis" variant="primary" className="mt-3 w-full">
              Demander un devis
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
