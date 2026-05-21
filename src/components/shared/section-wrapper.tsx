import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn("relative py-20 md:py-32", className)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
}
