"use client";
import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Card, CardContent } from "./Card";
import { Marquee } from "./Marquee";
import CustomerModal from "./CustomerModal";
import PropTypes from "prop-types";
import "./style.module.scss";

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

function TestimonialCard({
  customer,
  onCardClick,
}: {
  customer: Customer;
  onCardClick?: (customer: Customer) => void;
}) {
  const cardRef = useRef(null);
  const name = customer.name || "";
  const surname = customer.surname || "";
  const fullName = `${name} ${surname}`.trim();
  const image = customer.img || "";
  const text = customer.body || "";
  const position = customer.position || "";

  const handleClick = () => {
    if (onCardClick) {
      onCardClick(customer);
    }
  };

  return (
    <Card
      ref={cardRef}
      onClick={handleClick}
      style={{
        width: "280px",
        minWidth: "200px",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(93, 248, 245, 0.15)";
        e.currentTarget.style.borderColor = "rgba(93, 248, 245, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <CardContent style={{ padding: "20px" }}>
        {/* Quote mark */}
        <div
          style={{
            fontSize: "40px",
            lineHeight: 1,
            color: "#5df8f5",
            opacity: 0.25,
            fontFamily: "Georgia, serif",
            marginBottom: "8px",
            userSelect: "none",
          }}
        >
          "
        </div>

        {/* Review text */}
        <blockquote
          style={{
            margin: "0 0 16px",
            fontSize: "13px",
            color: "rgba(249, 245, 255, 0.75)",
            lineHeight: 1.65,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {text}
        </blockquote>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "14px",
          }}
        />

        {/* Author row */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            style={{
              width: "38px",
              height: "38px",
              outline: "2px solid rgba(93, 248, 245, 0.3)",
              outlineOffset: "2px",
            }}
          >
            <AvatarImage src={image} alt={fullName} />
            <AvatarFallback>{name[0] || "U"}</AvatarFallback>
          </Avatar>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <figcaption
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#f9f5ff",
                lineHeight: 1.2,
              }}
            >
              {fullName}
            </figcaption>
            {position && (
              <span
                style={{
                  fontSize: "11px",
                  color: "#5df8f5",
                  opacity: 0.8,
                  fontWeight: "500",
                }}
              >
                {position}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

TestimonialCard.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    surname: PropTypes.string,
    image: PropTypes.string,
    img: PropTypes.string,
    text: PropTypes.string,
    body: PropTypes.string,
    position: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  onCardClick: PropTypes.func,
};

export default function TestCarousel({
  customers = [],
}: {
  customers?: Customer[];
}) {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Transform customers array to testimonials format if needed
  const testimonials = customers.map((customer, index) => ({
    id: customer.id || index,
    name: customer.name || "",
    surname: customer.surname || "",
    username: `@${(customer.name || "user").toLowerCase().replace(/\s/g, "")}`,
    body: customer.text || "",
    img: customer.image || "",
    position: customer.position || "",
    country: customer.country || "",
    mapUrl: customer.mapUrl || customer.map || "",
    guideUrl: customer.guideUrl || customer.guide || "",
  }));

  const handleCardClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCustomer(null);
    }, 600);
  };

  return (
    <div
      style={{
        borderRadius: "8px",
        position: "relative",
        display: "flex",
        height: "100dvh",
        width: "100vw",
        // maxWidth: "800px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        gap: "6px",
        perspective: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          width: "100%",
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {/* Vertical Marquee 1 (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {testimonials.map((review) => (
            <TestimonialCard
              key={`col1-${review.id}`}
              customer={review}
              onCardClick={handleCardClick}
            />
          ))}
        </Marquee>

        {/* Vertical Marquee 2 (upwards) */}
        <Marquee
          vertical
          pauseOnHover
          reverse
          repeat={3}
          className="[--duration:40s]"
        >
          {testimonials.map((review) => (
            <TestimonialCard
              key={`col2-${review.id}`}
              customer={review}
              onCardClick={handleCardClick}
            />
          ))}
        </Marquee>

        {/* Vertical Marquee 3 (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {testimonials.map((review) => (
            <TestimonialCard
              key={`col3-${review.id}`}
              customer={review}
              onCardClick={handleCardClick}
            />
          ))}
        </Marquee>

        {/* Vertical Marquee 4 (upwards) */}
        <Marquee
          vertical
          pauseOnHover
          reverse
          repeat={3}
          className="[--duration:40s]"
        >
          {testimonials.map((review) => (
            <TestimonialCard
              key={`col4-${review.id}`}
              customer={review}
              onCardClick={handleCardClick}
            />
          ))}
        </Marquee>

        {/* Gradient overlays for vertical marquee */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "0 0 auto 0",
            height: "25%",
            background:
              "linear-gradient(to bottom, rgba(30, 24, 46, 1), transparent)",
          }}
        ></div>
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "auto 0 0 0",
            height: "25%",
            background:
              "linear-gradient(to top, rgba(30, 24, 46, 1), transparent)",
          }}
        ></div>
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "0 auto 0 0",
            width: "25%",
            background:
              "linear-gradient(to right, rgba(30, 24, 46, 1), transparent)",
          }}
        ></div>
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: "0 0 0 auto",
            width: "25%",
            background:
              "linear-gradient(to left, rgba(30, 24, 46, 1), transparent)",
          }}
        ></div>
      </div>

      <CustomerModal
        customer={selectedCustomer}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

TestCarousel.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      surname: PropTypes.string,
      image: PropTypes.string,
      text: PropTypes.string,
      position: PropTypes.string,
      country: PropTypes.string,
    }),
  ),
};
