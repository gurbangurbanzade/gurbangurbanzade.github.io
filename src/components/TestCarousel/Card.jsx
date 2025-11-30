"use client";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const Card = forwardRef(
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

export const CardContent = forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

CardContent.displayName = "CardContent";

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

CardContent.propTypes = {
  className: PropTypes.string,
};
