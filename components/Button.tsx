import type { AnchorHTMLAttributes } from "react";

export type Variant = "primary" | "outline" | "link";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap border text-base font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "border-amaranth bg-amaranth px-6 py-2.5 text-white hover:border-amaranth-dark hover:bg-amaranth-dark",
  outline:
    "border-white/20 px-6 py-2.5 text-white hover:border-white/40 hover:bg-white/10",
  link: "border-transparent px-0 py-2.5 text-white hover:text-white/70",
};

/** `<button>`, `<a>` зэрэг ямар ч элемент дээр ижил стиль өгөх туслах. */
export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className = "",
  href = "#",
  ...props
}: ButtonProps) {
  return <a href={href} className={buttonClasses(variant, className)} {...props} />;
}
