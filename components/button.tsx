import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "cafe";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-blue text-white hover:bg-[#78a0ff] shadow-blue",
  secondary: "border border-line bg-surface text-ink hover:border-blue hover:bg-surface-raised",
  cafe: "bg-amber text-coal hover:bg-[#efbd76]"
};

export function Button({ children, href, variant = "primary", external = false, className = "" }: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (external) {
    return <a href={href} target="_blank" rel="noreferrer" className={classes}>{children}</a>;
  }

  if (href.startsWith("tel:")) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <Link href={href} className={classes}>{children}</Link>;
}
