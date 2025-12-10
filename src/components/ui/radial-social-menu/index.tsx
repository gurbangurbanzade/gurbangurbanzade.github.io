"use client";
import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  Youtube,
  Menu,
  X,
} from "lucide-react";

export const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const icons = [
    {
      icon: <Instagram />,
      link: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Github />,
      link: "https://github.com/gurbangurbanzade",
      label: "GitHub",
    },
    {
      icon: <Twitter />,
      link: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Youtube />,
      link: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: <Linkedin />,
      link: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Mail />,
      link: "mailto:contact@example.com",
      label: "Email",
    },
  ];

  const radius = 140;
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    let animationFrame: number;
    const animate = () => {
      setAngleOffset((prev) => prev + 0.002);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isOpen]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Burger Menu Button - Center */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-xl ring-4 ring-purple-200/30 hover:scale-110 transition-transform duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="text-white w-5 h-5" />
        ) : (
          <Menu className="text-white w-5 h-5" />
        )}
      </button>

      {/* Dashed Circle Border - Only visible when open */}
      {isOpen && (
        <div
          className="absolute rounded-full border border-dashed border-gray-300/50 transition-opacity duration-300"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            top: `calc(50% - ${radius}px)`,
            left: `calc(50% - ${radius}px)`,
            opacity: isOpen ? 1 : 0,
          }}
        />
      )}

      {/* Rotating Social Icons - Only visible when open */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI + angleOffset;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 shadow-md hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-float"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? "auto" : "none",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {React.cloneElement(item.icon, {
              size: 28,
              className: "text-gray-700",
            })}
          </a>
        );
      })}
    </div>
  );
};
