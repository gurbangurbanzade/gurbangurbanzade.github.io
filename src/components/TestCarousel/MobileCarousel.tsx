"use client";

import { useState, useRef } from "react";
import CustomerModal from "./CustomerModal";

interface Customer {
  id?: string | number;
  name?: string;
  surname?: string;
  image?: string;
  img?: string;
  text?: string;
  body?: string;
  position?: string;
  country?: string;
  mapUrl?: string;
  map?: string;
  guideUrl?: string;
  guide?: string;
}

interface Testimonial {
  id: string | number;
  fullName: string;
  initials: string;
  img: string;
  position: string;
  country: string;
  body: string;
  mapUrl: string;
  guideUrl: string;
  color: string;
}

const ACCENT_COLORS = [
  "#5df8f5",
  "#667eea",
  "#a21eff",
  "#1fea64",
  "#ff6b6b",
  "#ffd93d",
  "#c77dff",
];

export default function MobileCarousel({ customers = [] }: { customers?: Customer[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const dragX = useRef(0);
  const [liveOffset, setLiveOffset] = useState(0);
  const isDragging = useRef(false);

  const testimonials: Testimonial[] = customers.map((c, i) => {
    const name = (c.name || "").trim();
    const surname = (c.surname || "").trim();
    const fullName = `${name} ${surname}`.trim() || "Anonymous";
    const initials = `${name[0] || ""}${surname[0] || ""}`.toUpperCase() || "?";
    return {
      id: c.id ?? i,
      fullName,
      initials,
      img: c.image || c.img || "",
      position: c.position || "",
      country: c.country || "",
      body: c.text || c.body || "",
      mapUrl: c.mapUrl || c.map || "",
      guideUrl: c.guideUrl || c.guide || "",
      color: ACCENT_COLORS[i % ACCENT_COLORS.length],
    };
  });

  const total = testimonials.length;
  if (!total) return null;

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  const navigate = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(dir === "left" ? next : prev);
      setDirection(null);
      setAnimating(false);
      setLiveOffset(0);
    }, 380);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (Math.abs(dy) > Math.abs(dx)) return;
    dragX.current = dx;
    setLiveOffset(dx);
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragX.current < -50) navigate("left");
    else if (dragX.current > 50) navigate("right");
    else setLiveOffset(0);
    dragX.current = 0;
  };

  const openModal = (t: Testimonial) => {
    setSelectedCustomer({
      name: t.fullName.split(" ")[0],
      surname: t.fullName.split(" ").slice(1).join(" "),
      img: t.img,
      body: t.body,
      position: t.position,
      country: t.country,
      mapUrl: t.mapUrl,
      guideUrl: t.guideUrl,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCustomer(null), 600);
  };

  const item = testimonials[current];
  const prevItem = testimonials[prev];
  const nextItem = testimonials[next];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "rgb(30, 24, 46)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0 48px",
        gap: "0",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "36px", padding: "0 24px" }}>
        <p style={{
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "rgba(249,245,255,0.35)",
          margin: "0 0 8px",
        }}>
          What people say
        </p>
        <h2 style={{
          fontSize: "clamp(26px, 7vw, 36px)",
          fontWeight: "800",
          color: "#f9f5ff",
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          Feedback
          <span style={{
            background: "linear-gradient(135deg, #5df8f5, #667eea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>.</span>
        </h2>
      </div>

      {/* Card viewport */}
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "420px",
          overflow: "hidden",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Prev ghost */}
        <GhostCard item={prevItem} side="left" liveOffset={liveOffset} animating={animating} direction={direction} />

        {/* Next ghost */}
        <GhostCard item={nextItem} side="right" liveOffset={liveOffset} animating={animating} direction={direction} />

        {/* Active card */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "calc(100% - 64px)",
            maxWidth: "360px",
            transform: `translate(-50%, -50%) translateX(${animating ? (direction === "left" ? -110 : 110) : liveOffset}px)`,
            transition: animating ? "transform 0.38s cubic-bezier(0.32,0.72,0,1), opacity 0.38s ease" : liveOffset ? "none" : "transform 0.3s ease",
            opacity: animating ? 0 : 1,
            zIndex: 10,
          }}
          onClick={() => !liveOffset && openModal(item)}
        >
          <ActiveCard item={item} />
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center", marginTop: "28px" }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === current || animating) return;
              setDirection(i > current ? "left" : "right");
              setCurrent(i);
            }}
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? item.color : "rgba(255,255,255,0.15)",
              border: "none",
              padding: 0,
              cursor: i === current ? "default" : "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Counter + arrows */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginTop: "20px",
      }}>
        <NavButton onClick={() => navigate("right")} disabled={animating}>
          ←
        </NavButton>
        <span style={{ fontSize: "12px", color: "rgba(249,245,255,0.35)", minWidth: "40px", textAlign: "center" }}>
          {current + 1} / {total}
        </span>
        <NavButton onClick={() => navigate("left")} disabled={animating}>
          →
        </NavButton>
      </div>

      <CustomerModal customer={selectedCustomer} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

function ActiveCard({ item }: { item: Testimonial }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: `1px solid ${item.color}33`,
      borderTop: `2px solid ${item.color}`,
      borderRadius: "24px",
      padding: "28px 24px 24px",
      boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${item.color}18`,
      cursor: "pointer",
      userSelect: "none",
    }}>
      {/* Avatar + name */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            position: "absolute",
            inset: "-3px",
            borderRadius: "50%",
            background: `conic-gradient(${item.color}, #667eea, ${item.color})`,
            zIndex: 0,
          }} />
          <div style={{
            position: "relative",
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            overflow: "hidden",
            zIndex: 1,
            background: `${item.color}18`,
          }}>
            {item.img ? (
              <img src={item.img} alt={item.fullName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "800",
                color: item.color,
              }}>
                {item.initials}
              </div>
            )}
          </div>
        </div>

        <div>
          <p style={{ fontSize: "15px", fontWeight: "700", color: "#f9f5ff", margin: 0, lineHeight: 1.2 }}>
            {item.fullName}
          </p>
          {item.position && (
            <p style={{
              fontSize: "11.5px",
              color: item.color,
              margin: "4px 0 0",
              fontWeight: "600",
              opacity: 0.85,
            }}>
              {item.position}
              {item.country ? ` · ${item.country}` : ""}
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: `${item.color}22`, marginBottom: "18px" }} />

      {/* Quote */}
      <div style={{
        fontSize: "48px",
        lineHeight: 0.7,
        color: item.color,
        opacity: 0.2,
        fontFamily: "Georgia, serif",
        userSelect: "none",
        marginBottom: "10px",
      }}>"</div>
      <p style={{
        fontSize: "14px",
        color: "rgba(249,245,255,0.82)",
        lineHeight: 1.7,
        margin: 0,
        display: "-webkit-box",
        WebkitLineClamp: 5,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {item.body}
      </p>

      {/* Tap hint */}
      <div style={{
        marginTop: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "4px",
      }}>
        <span style={{ fontSize: "10.5px", fontWeight: "600", color: item.color, opacity: 0.6, letterSpacing: "0.5px", textTransform: "uppercase" }}>
          Read more
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5h6M5 2l3 3-3 3" stroke={item.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        </svg>
      </div>
    </div>
  );
}

function GhostCard({ item, side, liveOffset, animating, direction }: {
  item: Testimonial;
  side: "left" | "right";
  liveOffset: number;
  animating: boolean;
  direction: "left" | "right" | null;
}) {
  const baseX = side === "left" ? -95 : 95;
  const incomingOffset = animating && direction === (side === "left" ? "right" : "left") ? 0 : baseX;
  const liveContrib = liveOffset ? (liveOffset / (window?.innerWidth || 400)) * 100 * (side === "left" ? 1 : -1) : 0;
  const peekClamp = Math.min(Math.max(liveContrib * 0.4, -40), 40);

  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "calc(100% - 64px)",
      maxWidth: "360px",
      transform: `translate(-50%, -50%) translateX(${animating ? (incomingOffset > 0 ? "0%" : "0%") : baseX + peekClamp}%) scale(0.88)`,
      opacity: animating && direction === (side === "left" ? "right" : "left") ? 1 : 0.35,
      transition: liveOffset ? "none" : "all 0.38s cubic-bezier(0.32,0.72,0,1)",
      zIndex: 5,
      pointerEvents: "none",
      filter: "blur(1px)",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: `2px solid ${item.color}55`,
        borderRadius: "24px",
        padding: "28px 24px 24px",
        height: "100%",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: `${item.color}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: "800",
            color: item.color,
            flexShrink: 0,
            overflow: "hidden",
          }}>
            {item.img
              ? <img src={item.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              : item.initials}
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "700", color: "rgba(249,245,255,0.7)", margin: 0 }}>{item.fullName}</p>
            {item.position && <p style={{ fontSize: "11px", color: item.color, margin: "3px 0 0", opacity: 0.6 }}>{item.position}</p>}
          </div>
        </div>
        <p style={{ fontSize: "13px", color: "rgba(249,245,255,0.4)", lineHeight: 1.6, margin: 0,
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {item.body}
        </p>
      </div>
    </div>
  );
}

function NavButton({ onClick, disabled, children }: { onClick: () => void; disabled: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: disabled ? "rgba(255,255,255,0.02)" : "rgba(93,248,245,0.07)",
        border: `1px solid ${disabled ? "rgba(255,255,255,0.05)" : "rgba(93,248,245,0.18)"}`,
        color: disabled ? "rgba(255,255,255,0.2)" : "#5df8f5",
        fontSize: "18px",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
}
