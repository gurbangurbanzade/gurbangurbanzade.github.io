"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import PropTypes from "prop-types";

function CustomerModal({ customer, isOpen, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
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
      }}
      onClick={onClose}
    >
      <div
        className="modal-overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(10px)",
        }}
      ></div>
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "900px",
          maxHeight: "90vh",
          backgroundColor: "rgb(30, 24, 46)",
          background:
            "linear-gradient(135deg, rgba(30, 24, 46, 1) 0%, rgba(23, 30, 55, 1) 100%)",
          borderRadius: "20px",
          padding: "40px",
          overflowY: "auto",
          border: "2px solid rgba(31, 234, 100, 0.2)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
          transformOrigin: "center center",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(162, 30, 255, 0.2)",
            border: "2px solid #a21eff",
            color: "#a21eff",
            fontSize: "28px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#a21eff";
            e.target.style.color = "white";
            e.target.style.transform = "rotate(90deg)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(162, 30, 255, 0.2)";
            e.target.style.color = "#a21eff";
            e.target.style.transform = "rotate(0deg)";
          }}
        >
          ×
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <Avatar
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            <AvatarImage src={image} alt={fullName} />
            <AvatarFallback style={{ fontSize: "32px" }}>
              {name[0] || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#1fea64",
                marginBottom: "8px",
              }}
            >
              {fullName}
            </h2>
            {position && (
              <p
                style={{
                  fontSize: "18px",
                  color: "#a21eff",
                  marginBottom: "4px",
                }}
              >
                {position}
              </p>
            )}
            {country && (
              <p style={{ fontSize: "14px", color: "#f9f5ff", opacity: 0.8 }}>
                {country}
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              color: "#1fea64",
              marginBottom: "15px",
            }}
          >
            Review
          </h3>
          <p
            style={{
              fontSize: "18px",
              color: "#f9f5ff",
              lineHeight: "1.8",
            }}
          >
            {text}
          </p>
        </div>

        {(mapUrl || guideUrl) && (
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "15px 30px",
                  background: "transparent",
                  border: "2px solid #1fea64",
                  color: "#1fea64",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#1fea64";
                  e.target.style.color = "#1d1e2c";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 10px 20px rgba(31, 234, 100, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#1fea64";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                View Map
              </a>
            )}
            {guideUrl && (
              <button
                onClick={() => setShowGuideLocation(!showGuideLocation)}
                style={{
                  display: "inline-block",
                  padding: "15px 30px",
                  background: showGuideLocation ? "transparent" : "#a21eff",
                  border: "2px solid #a21eff",
                  color: showGuideLocation ? "#a21eff" : "white",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!showGuideLocation) {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#a21eff";
                  }
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 10px 20px rgba(162, 30, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  if (!showGuideLocation) {
                    e.target.style.background = "#a21eff";
                    e.target.style.color = "white";
                  }
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {showGuideLocation
                  ? "Hide Guide Location"
                  : "Show Guide Location"}
              </button>
            )}
          </div>
        )}
        {showGuideLocation && guideUrl && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "rgba(162, 30, 255, 0.1)",
              borderRadius: "10px",
              border: "1px solid rgba(162, 30, 255, 0.3)",
            }}
          >
            <h4
              style={{
                fontSize: "18px",
                color: "#a21eff",
                marginBottom: "15px",
              }}
            >
              Guide Location
            </h4>
            <div
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "2px solid rgba(162, 30, 255, 0.2)",
              }}
            >
              {guideUrl.startsWith("http") ? (
                <iframe
                  src={guideUrl}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
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
                    color: "#f9f5ff",
                  }}
                >
                  <a
                    href={guideUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#1fea64",
                      textDecoration: "none",
                      fontSize: "18px",
                    }}
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

CustomerModal.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    surname: PropTypes.string,
    img: PropTypes.string,
    image: PropTypes.string,
    body: PropTypes.string,
    text: PropTypes.string,
    position: PropTypes.string,
    country: PropTypes.string,
    mapUrl: PropTypes.string,
    map: PropTypes.string,
    guideUrl: PropTypes.string,
    guide: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomerModal;
