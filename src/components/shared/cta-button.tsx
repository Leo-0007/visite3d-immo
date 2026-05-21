import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  external = false,
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/20",
    secondary:
      "border border-white/[0.08] text-white/60 hover:bg-white/[0.04] hover:text-white",
    ghost:
      "text-white/40 hover:text-white/70 underline underline-offset-4",
  };

  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ size }),
        "rounded-full px-8 text-sm transition-all duration-300",
        variants[variant],
        className
      )}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
