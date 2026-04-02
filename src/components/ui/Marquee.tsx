import { cn } from "@/lib/utils";

interface MarqueeProps {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

const Marquee = ({ speed = 30, className, children }: MarqueeProps) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex items-center animate-marquee w-max"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
