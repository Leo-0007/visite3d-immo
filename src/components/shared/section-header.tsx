import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
          {badge}
        </p>
      )}
      <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.025em] text-[var(--v3d-text)]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--v3d-text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}
