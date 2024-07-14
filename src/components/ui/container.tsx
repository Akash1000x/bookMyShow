import { cn } from "@/lib/utils";

interface containerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children, ...props }: containerProps) {
  return (
    <div className={cn("px-5", className)} {...props}>
      {children}
    </div>
  );
}
