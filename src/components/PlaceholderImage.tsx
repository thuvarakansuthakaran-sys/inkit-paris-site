type PlaceholderImageProps = {
  label: string;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
};

const ratios: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

// Bloc à remplacer par une vraie photo produit/atelier. Le libellé indique le
// type d'image attendu pour cet emplacement.
export default function PlaceholderImage({
  label,
  className = "",
  ratio = "landscape",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-end overflow-hidden border border-line bg-paper-dark ${ratios[ratio]} ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(20,18,15,0.05) 0px, rgba(20,18,15,0.05) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <span className="m-3 max-w-[80%] bg-paper/90 px-2 py-1 text-xs text-ink/70">
        Photo à venir : {label}
      </span>
    </div>
  );
}
