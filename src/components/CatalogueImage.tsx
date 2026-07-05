import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

type CatalogueImageProps = {
  src?: string;
  alt: string;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  sizes?: string;
};

const ratios: Record<string, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function CatalogueImage({
  src,
  alt,
  className = "",
  ratio = "landscape",
  sizes = "(min-width: 1024px) 400px, 100vw",
}: CatalogueImageProps) {
  if (!src) {
    return <PlaceholderImage label={alt} ratio={ratio} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${ratios[ratio]} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
