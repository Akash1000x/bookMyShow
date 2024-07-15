import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className, ...props }: WrapperProps) {
  return (
    <div className={cn("mx-auto max-w-[78rem]", className)} {...props}>
      {children}
    </div>
  );
}
