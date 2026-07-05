import { FaqEntry } from "@/data/faq";

export default function FaqAccordion({ entries }: { entries: FaqEntry[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {entries.map((entry) => (
        <details key={entry.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink">
            {entry.question}
            <span className="shrink-0 text-xl text-ink/50 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/70">
            {entry.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
