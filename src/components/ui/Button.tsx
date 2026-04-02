import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "primary-light" | "secondary-light";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const Button = ({
  variant = "primary",
  href,
  onClick,
  children,
  showArrow = true,
  className,
  type = "button",
}: ButtonProps) => {
  const baseClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    "primary-light": "btn-primary-light",
    "secondary-light": "btn-secondary-light",
  }[variant];

  const arrowColor = variant === "primary" || variant === "secondary-light"
    ? "text-emerald-400"
    : "text-emerald-500";

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className={cn("w-4 h-4 transition-transform duration-300 group-hover:translate-x-1", arrowColor)} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseClass, "group", className)}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(baseClass, "group", className)}>
      {content}
    </button>
  );
};

export default Button;
