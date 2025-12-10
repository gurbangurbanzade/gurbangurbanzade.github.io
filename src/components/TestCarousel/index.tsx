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
        width: "300px",
        minWidth: "200px",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(31, 234, 100, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
      }}
    >
      <CardContent
        style={{
          padding: "24px",
          paddingTop: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            style={{
              width: "36px",
              height: "36px",
            }}
          >
            <AvatarImage src={image} alt={fullName} />
            <AvatarFallback>{name[0] || "U"}</AvatarFallback>
          </Avatar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <figcaption
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#f9f5ff",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {fullName}
              {position && (
                <span style={{ fontSize: "12px", opacity: 0.7 }}>
                  ({position})
                </span>
              )}
            </figcaption>
          </div>
        </div>
        <blockquote
          style={{
            marginTop: "12px",
            fontSize: "14px",
            color: "#f9f5ff",
            opacity: 0.9,
          }}
        >
          {text}
        </blockquote>
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
    null
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
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        position: "relative",
        display: "flex",
        height: "90vh",
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
    })
  ),
};
