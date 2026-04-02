import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  variant?: "light" | "dark";
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const SectionWrapper = ({ variant = "light", id, className, children, noPadding = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        variant === "light" ? "section-light" : "section-dark",
        !noPadding && "section-padding",
        className
      )}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
