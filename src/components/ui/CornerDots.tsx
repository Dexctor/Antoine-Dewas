import { cn } from "@/lib/utils";

interface CornerDotsProps {
  className?: string;
}

const CornerDots = ({ className }: CornerDotsProps) => {
  return (
    <>
      <span className={cn("absolute top-0 left-0 w-1.5 h-1.5 bg-emerald-500 -translate-x-1/2 -translate-y-1/2", className)} />
      <span className={cn("absolute top-0 right-0 w-1.5 h-1.5 bg-emerald-500 translate-x-1/2 -translate-y-1/2", className)} />
      <span className={cn("absolute bottom-0 left-0 w-1.5 h-1.5 bg-emerald-500 -translate-x-1/2 translate-y-1/2", className)} />
      <span className={cn("absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-500 translate-x-1/2 translate-y-1/2", className)} />
    </>
  );
};

export default CornerDots;
