"use client";
import { forwardRef, HTMLAttributes } from "react";

const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", style = {}, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      style={{
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: "rgba(29, 30, 44, 0.6)",
        color: "#f9f5ff",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...style,
      }}
      {...props}
    />
  )
);

Card.displayName = "Card";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);

CardContent.displayName = "CardContent";
