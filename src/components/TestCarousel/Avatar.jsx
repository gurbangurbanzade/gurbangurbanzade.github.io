"use client";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const Avatar = forwardRef(
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

export const AvatarImage = forwardRef(({ className = "", ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));

AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = forwardRef(
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

Avatar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

AvatarImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

AvatarFallback.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
