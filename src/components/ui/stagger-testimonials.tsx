"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

export interface TestimonialItem {
  tempId: number | string;
  testimonial: string;
  by: string;
  imgSrc?: string;
}

interface TestimonialCardProps {
  position: number;
  testimonial: TestimonialItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-[#5df8f5] bg-[#1e182e] text-[#f9f5ff]"
          : "z-0 border-white/10 bg-white/5 text-[#f9f5ff] hover:border-[#5df8f5]/40",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(93,248,245,0.18)"
          : "0px 0px 0px 0px transparent",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Corner cut diagonal line */}
      <span
        className="absolute block origin-top-right rotate-45 bg-white/10"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Avatar */}
      {testimonial.imgSrc ? (
        <img
          src={testimonial.imgSrc}
          alt={testimonial.by.split(",")[0]}
          className="mb-4 h-14 w-12 bg-white/10 object-cover object-top"
          style={{ boxShadow: "3px 3px 0px rgba(30,24,46,0.8)" }}
        />
      ) : (
        <div
          className="mb-4 flex h-14 w-12 items-center justify-center text-xl font-bold"
          style={{
            background: "rgba(93,248,245,0.12)",
            color: "#5df8f5",
            boxShadow: "3px 3px 0px rgba(30,24,46,0.8)",
          }}
        >
          {testimonial.by[0]?.toUpperCase() || "U"}
        </div>
      )}

      {/* Quote */}
      <h3
        className={cn(
          "text-base font-medium sm:text-lg",
          isCenter ? "text-[#f9f5ff]" : "text-[#f9f5ff]/70",
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>

      {/* Author */}
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-[#5df8f5]/80" : "text-[#f9f5ff]/35",
        )}
      >
        — {testimonial.by}
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Props: optional external list; falls back to
   the built-in demo list when nothing is passed.
───────────────────────────────────────────── */
interface StaggerTestimonialsProps {
  items?: TestimonialItem[];
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({
  items,
}) => {
  const source = items && items.length > 0 ? items : [];
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState<TestimonialItem[]>(source);

  /* Sync if parent data arrives after mount (e.g. async fetch) */
  useEffect(() => {
    if (items && items.length > 0) setList(items);
  }, [items]);

  useEffect(() => {
    const update = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMove = (steps: number) => {
    setList((prev) => {
      const next = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = next.shift();
          if (!item) break;
          next.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = next.pop();
          if (!item) break;
          next.unshift({ ...item, tempId: Math.random() });
        }
      }
      return next;
    });
  };

  if (!list.length) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: 600,
        background: "rgb(30, 24, 46)",
      }}
    >
      {list.map((testimonial, index) => {
        const position =
          list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Prev / Next */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center border-2 border-white/10 bg-white/5 text-2xl text-[#5df8f5] transition-colors hover:border-[#5df8f5]/50 hover:bg-[#5df8f5]/10 focus-visible:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center border-2 border-white/10 bg-white/5 text-2xl text-[#5df8f5] transition-colors hover:border-[#5df8f5]/50 hover:bg-[#5df8f5]/10 focus-visible:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
