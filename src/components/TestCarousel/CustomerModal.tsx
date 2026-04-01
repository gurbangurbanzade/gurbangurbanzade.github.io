"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

interface CustomerModalProps {
  customer: any;
  isOpen: boolean;
  onClose: () => void;
}

function CustomerModal({ customer, isOpen, onClose }: CustomerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showGuideLocation, setShowGuideLocation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const overlay = modalRef.current?.querySelector(".modal-overlay");
      const content = contentRef.current;
      if (!overlay || !content) return;

      // Animate overlay
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      // Animate content - simple scale and fade
      gsap.fromTo(
        content,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
    } else {
      // Close animation
      const overlay = modalRef.current?.querySelector(".modal-overlay");
      const content = contentRef.current;
      if (overlay) {
        gsap.to(overlay, { opacity: 0, duration: 0.2 });
      }
      if (content) {
        gsap.to(content, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
        });
      }
    }
  }, [isOpen]);

  if (!isOpen || !customer) return null;

  const name = customer.name || "";
  const surname = customer.surname || "";
  const fullName = `${name} ${surname}`.trim();
  const image = customer.img || customer.image || "";
  const text = customer.body || customer.text || "";
  const position = customer.position || "";
  const country = customer.country || "";
  const mapUrl = customer.mapUrl || customer.map || "";
  const guideUrl = customer.guideUrl || customer.guide || "";

  return (
    <div
      ref={modalRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        pointerEvents: isOpen ? "auto" : "none",
        padding: "20px",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="modal-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(8, 6, 18, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />

      {/* Modal card */}
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "560px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "rgba(18, 14, 32, 0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: "2px solid #5df8f5",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(93,248,245,0.08)",
          transformOrigin: "center center",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.1) transparent",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "34px",
            height: "34px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(249,245,255,0.6)",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            const t = e.currentTarget as HTMLButtonElement;
            t.style.background = "rgba(255,255,255,0.1)";
            t.style.color = "#f9f5ff";
          }}
          onMouseLeave={(e) => {
            const t = e.currentTarget as HTMLButtonElement;
            t.style.background = "rgba(255,255,255,0.05)";
            t.style.color = "rgba(249,245,255,0.6)";
          }}
        >
          ×
        </button>

        {/* Header: avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ position: "relative", flexShrink: 0 }}>
            <Avatar style={{ width: "68px", height: "68px" }}>
              <AvatarImage src={image} alt={fullName} />
              <AvatarFallback style={{ fontSize: "26px" }}>{name[0] || "U"}</AvatarFallback>
            </Avatar>
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: "-3px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #5df8f5, #667eea)",
                zIndex: -1,
                opacity: 0.6,
              }}
            />
          </div>

          <div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "800",
                color: "#f9f5ff",
                margin: "0 0 4px",
                lineHeight: 1.2,
              }}
            >
              {fullName}
            </h2>
            {position && (
              <span
                style={{
                  display: "inline-block",
                  fontSize: "11.5px",
                  fontWeight: "600",
                  color: "#5df8f5",
                  background: "rgba(93,248,245,0.1)",
                  border: "1px solid rgba(93,248,245,0.2)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  marginBottom: "4px",
                }}
              >
                {position}
              </span>
            )}
            {country && (
              <p style={{ fontSize: "12px", color: "rgba(249,245,255,0.4)", margin: "4px 0 0" }}>
                {country}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, #5df8f5, transparent)",
            opacity: 0.3,
            marginBottom: "24px",
          }}
        />

        {/* Review section */}
        <div style={{ marginBottom: "28px" }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "rgba(249,245,255,0.3)",
              marginBottom: "14px",
            }}
          >
            Review
          </p>

          {/* Big quote mark */}
          <div
            style={{
              fontSize: "64px",
              lineHeight: 0.8,
              color: "#5df8f5",
              opacity: 0.15,
              fontFamily: "Georgia, serif",
              userSelect: "none",
              marginBottom: "8px",
            }}
          >
            "
          </div>

          <p
            style={{
              fontSize: "15px",
              color: "rgba(249,245,255,0.8)",
              lineHeight: 1.75,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {text}
          </p>
        </div>

        {/* Action buttons */}
        {(mapUrl || guideUrl) && (
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  background: "rgba(93,248,245,0.08)",
                  border: "1px solid rgba(93,248,245,0.25)",
                  color: "#5df8f5",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "13px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget as HTMLAnchorElement;
                  t.style.background = "rgba(93,248,245,0.15)";
                  t.style.transform = "translateY(-2px)";
                  t.style.boxShadow = "0 8px 20px rgba(93,248,245,0.15)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget as HTMLAnchorElement;
                  t.style.background = "rgba(93,248,245,0.08)";
                  t.style.transform = "translateY(0)";
                  t.style.boxShadow = "none";
                }}
              >
                View Map
              </a>
            )}
            {guideUrl && (
              <button
                onClick={() => setShowGuideLocation(!showGuideLocation)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  background: showGuideLocation
                    ? "rgba(162,30,255,0.15)"
                    : "rgba(162,30,255,0.08)",
                  border: "1px solid rgba(162,30,255,0.25)",
                  color: "#a21eff",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget as HTMLButtonElement;
                  t.style.background = "rgba(162,30,255,0.18)";
                  t.style.transform = "translateY(-2px)";
                  t.style.boxShadow = "0 8px 20px rgba(162,30,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget as HTMLButtonElement;
                  t.style.background = showGuideLocation
                    ? "rgba(162,30,255,0.15)"
                    : "rgba(162,30,255,0.08)";
                  t.style.transform = "translateY(0)";
                  t.style.boxShadow = "none";
                }}
              >
                {showGuideLocation ? "Hide Guide Location" : "Show Guide Location"}
              </button>
            )}
          </div>
        )}

        {/* Guide iframe */}
        {showGuideLocation && guideUrl && (
          <div
            style={{
              marginTop: "20px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(162,30,255,0.2)",
              background: "rgba(162,30,255,0.05)",
            }}
          >
            <p
              style={{
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(162,30,255,0.6)",
                padding: "12px 16px 0",
                margin: 0,
              }}
            >
              Guide Location
            </p>
            <div style={{ width: "100%", height: "320px" }}>
              {guideUrl.startsWith("http") ? (
                <iframe
                  src={guideUrl}
                  width="100%"
                  height="100%"
                  style={{ border: "none", display: "block" }}
                  title="Guide Location"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href={guideUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#5df8f5", textDecoration: "none", fontSize: "14px" }}
                  >
                    Open Guide: {guideUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerModal;
