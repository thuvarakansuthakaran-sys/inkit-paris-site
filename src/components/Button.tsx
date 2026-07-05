import Link from "next/link";
import { ComponentProps } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

const variants: Record<string, string> = {
  primary:
    "bg-ink text-paper hover:bg-sand-dark border border-ink hover:border-sand-dark",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink underline underline-offset-4 hover:text-sand-dark",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
