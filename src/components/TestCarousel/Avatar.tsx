"use client";
import { forwardRef, HTMLAttributes } from "react";

const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = "", style = {}, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      style={{
        position: "relative",
        display: "flex",
        height: "40px",
        width: "40px",
        flexShrink: 0,
        overflow: "hidden",
        borderRadius: "50%",
        ...style,
      }}
      {...props}
    />
  )
);

Avatar.displayName = "Avatar";

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = "", ...props }, ref) => (
    <img
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
);

AvatarImage.displayName = "AvatarImage";

interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className = "", children, style = {}, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: "rgba(162, 30, 255, 0.2)",
        color: "#f9f5ff",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
);

AvatarFallback.displayName = "AvatarFallback";
