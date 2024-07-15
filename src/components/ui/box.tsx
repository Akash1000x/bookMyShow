"use client";
import { cn } from "@/lib/utils";
import * as React from "react";

interface BoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Box = React.forwardRef<HTMLButtonElement, BoxProps>(({ className, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      {...props}
      className={cn(
        "h-8 w-8 rounded border border-green-500 disabled:border-none disabled:bg-zinc-600 disabled:text-white/50",
        className,
      )}
    ></button>
  );
});
Box.displayName = "Box";

export default Box;
