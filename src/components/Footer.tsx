import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-xl">
            INKIT
            <span className="ml-2 text-[0.6rem] tracking-[0.3em] text-paper/60">
              PARIS
            </span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            Personnalisation textile pour entreprises, associations, collectivités et
            clubs sportifs : broderie, impression DTF, flocage et conseil sur-mesure.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-paper">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            <li><Link href="/catalogue-textile">Catalogue textile</Link></li>
            <li><Link href="/realisations">Réalisations</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-paper">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-paper">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            </li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. Tous droits réservés.</p>
          <p>Personnalisation textile professionnelle — broderie, DTF, flocage.</p>
        </div>
      </div>
    </footer>
  );
}
