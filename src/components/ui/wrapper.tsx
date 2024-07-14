import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className, ...props }: WrapperProps) {
  return (
    <div className={cn("max-w-[78rem] mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
