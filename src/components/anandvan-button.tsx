import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
};

export function AnandvanButton({ children, className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "primary" && "bg-primary text-primary-foreground shadow-[var(--shadow-button)] hover:bg-primary/90",
        variant === "outline" && "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        variant === "light" && "bg-background text-primary hover:bg-accent",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}