import { cn } from "@/lib/utils";

interface MarqueeProps {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

const Marquee = ({ speed = 30, className, children }: MarqueeProps) => {
  return (
    <div className={cn("w-full max-w-full overflow-hidden", className)}>
      <div
        className="flex w-max max-w-none items-center animate-marquee motion-reduce:animate-none"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
