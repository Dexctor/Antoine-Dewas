import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

const FadeIn = ({ delay = 0, className, children }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (prefersReducedMotion || delay === 0) {
            setIsVisible(true);
          } else {
            timeoutId = window.setTimeout(() => setIsVisible(true), delay * 1000);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "50px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out motion-reduce:transition-none",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 motion-reduce:translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeIn;
