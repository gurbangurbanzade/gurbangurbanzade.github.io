"use client";
import { useRef, useMemo } from "react";
import PropTypes from "prop-types";

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = "off",
  ariaRole = "marquee",
  ...props
}) {
  const marqueeRef = useRef(null);

  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        !vertical ? "flex-row" : "flex-col",
        className
      )}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
    >
      {useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, i) => (
              <div
                key={i}
                className={cn(
                  !vertical
                    ? "flex-row [gap:var(--gap)]"
                    : "flex-col [gap:var(--gap)]",
                  "flex shrink-0 justify-around",
                  !vertical && "animate-marquee flex-row",
                  vertical && !reverse && "animate-marquee-vertical flex-col",
                  vertical &&
                    reverse &&
                    "animate-marquee-vertical-reverse flex-col",
                  pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse]
      )}
    </div>
  );
}

Marquee.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  repeat: PropTypes.number,
  ariaLabel: PropTypes.string,
  ariaLive: PropTypes.string,
  ariaRole: PropTypes.string,
};
