"use client";

import { useState, useRef, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  X,
  ExternalLink,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";
import styles from "./style.module.scss";

interface DetailItem {
  company: string;
  companyUrl?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: { name: string; desc: string }[];
}

interface TimelineItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "study";
  accent: string;
  detail: DetailItem;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Pasha Insurance",
    location: "Baku, AZ",
    period: "12/2024 – Present",
    type: "work",
    accent: "#56c2f3",
    detail: {
      company: "Pasha Insurance",
      companyUrl: "https://pashainsurance.az",
      description:
        "PASHA Insurance is one of the recognized leaders in the insurance services market of Azerbaijan.",
      achievements: [
        "Developed Azerbaijan's first digital property insurance platform (Yuvam) from scratch — solo.",
        "Built payment system, user accounts, insurance purchase flow and admin panel.",
        "Developed an admin panel for telesales of property insurance.",
        "Implemented facial recognition-based verification for citizens' property data.",
        "Integrated a secure payment gateway for seamless transactions.",
        "Ensured compliance with data protection and security standards.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "SCSS",
        "Tailwind",
        "Zustand",
        "JWT",
        "Go",
        "Node.js",
        "Recharts",
        "Zod",
      ],
      projects: [
        {
          name: "Yuvam",
          desc: "First digital property insurance platform in Azerbaijan",
        },
      ],
    },
  },
  {
    title: "Senior Frontend Engineer",
    company: "Machinarium",
    location: "Istanbul, TR",
    period: "11/2023 – 12/2024",
    type: "work",
    accent: "#dd3d01",
    detail: {
      company: "Machinarium",
      description:
        "Machinarium specializes in e-commerce services and helps migrate legacy systems to Shopify's headless platform.",
      achievements: [
        "Redeveloped a financial project dashboard for internal analytics and reporting.",
        "Built and maintained core modules of a unified e-commerce ecosystem.",
        "Contributed to a large-scale platform where all e-commerce ops are managed centrally.",
        "Worked directly with backend engineers and UX/UI designers for seamless integration.",
        "Implemented performance optimizations and feature enhancements across the ecosystem.",
      ],
      technologies: [
        "Next.js",
        "React",
        "Vue.js",
        "TypeScript",
        "SCSS",
        "Tailwind",
        "Shadcn",
        "Git",
      ],
      projects: [
        { name: "OMS Panel", desc: "Order Management System" },
        { name: "CMS Panel", desc: "Customer Management System" },
        { name: "PIM Panel", desc: "Product Information Management" },
        {
          name: "E-com Control Panel",
          desc: "Centralized e-commerce operations hub",
        },
      ],
    },
  },
  {
    title: "Software Instructor",
    company: "Code Academy",
    location: "Baku, AZ",
    period: "10/2022 – 12/2024",
    type: "work",
    accent: "#458184",
    detail: {
      company: "Code Academy",
      companyUrl: "https://codeacademy.az",
      description:
        "A place where people achieve their dreams by learning Information Technologies.",
      achievements: [
        "Designed and delivered 400+ hours of structured frontend curriculum.",
        "Taught and mentored 100+ students, guiding them to job-ready developers.",
        "Provided 1:1 mentorship and interview prep for 20+ students.",
        "Guest lecturer at BSU, AzTU, AzMİU and Lankaran State University.",
        "Aligned course content with industry needs in collaboration with academic coordinators.",
      ],
      technologies: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Node.js"],
    },
  },
  {
    title: "Frontend Engineer",
    company: "Vitanur",
    location: "Boston, USA",
    period: "04/2023 – 11/2023",
    type: "work",
    accent: "#bddd4c",
    detail: {
      company: "Vitanur",
      description:
        "A full-service digital marketing and development firm delivering innovative solutions for businesses online.",
      achievements: [
        "Built multiple websites from scratch, including web and admin panels.",
        "Implemented SEO and performance optimizations to improve speed and visibility.",
        "Collaborated with digital marketing specialists and patent experts.",
        "Developed reusable UI components and scalable structures.",
        "Added new features and continuous improvements across client websites.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "SCSS",
        "Tailwind",
        "Zustand",
        "Shadcn",
      ],
      projects: [
        { name: "Haul Crafter", desc: "Moving & handyman service provider" },
        { name: "Kenwood Builders", desc: "Construction management website" },
        {
          name: "BostonPro Car Service",
          desc: "Professional car service platform",
        },
        {
          name: "DOCA Boston Kitchens",
          desc: "Premium kitchen collection showcase",
        },
        { name: "Cashi", desc: "Intuitive finance insights tool" },
      ],
    },
  },
  {
    title: "B.Sc. IT & Systems Eng.",
    company: "ASOIU",
    location: "Baku, AZ",
    period: "09/2010 – 05/2014",
    type: "study",
    accent: "#ff9704",
    detail: {
      company: "Azerbaijan State Oil and Industry University",
      description:
        "Bachelor of Information Technology and Systems Engineering.",
      achievements: [
        "Studied computer science fundamentals, systems engineering, and software development.",
        "Gained strong theoretical foundation in algorithms, databases, and networking.",
      ],
      technologies: ["C#", "SQL", "Algorithms", "Data Structures"],
    },
  },
];

const CareerTimeline = () => {
  const [active, setActive] = useState<TimelineItem | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.eyebrow}>My Journey</p>
      <h2 className={styles.heading}>
        Career<span className={styles["heading-accent"]}>.</span>
      </h2>

      <div
        ref={timelineRef}
        className={`${styles["v-timeline"]} ${visible ? styles["v-timeline--visible"] : ""}`}
      >
        <div className={styles["v-line"]} />
        {timelineItems.map((item, i) => {
          const isRight = i % 2 === 0;
          const Icon = item.type === "study" ? GraduationCap : Briefcase;
          return (
            <div
              key={i}
              className={`${styles["v-item"]} ${isRight ? styles["v-item--right"] : styles["v-item--left"]}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div
                className={styles["v-dot"]}
                style={{
                  background: item.accent,
                  boxShadow: `0 0 0 4px ${item.accent}28`,
                }}
              >
                <Icon size={12} />
              </div>
              <div
                className={`${styles["v-card"]} ${!isRight ? styles["v-card-right"] : styles["v-card-left"]}`}
                style={{ "--accent": item.accent } as React.CSSProperties}
                onClick={() => setActive(item)}
              >
                <span className={styles["v-period"]}>{item.period}</span>
                <h3 className={styles["v-title"]}>{item.title}</h3>
                <p className={styles["v-company"]}>{item.company}</p>
                <p className={styles["v-location"]}>{item.location}</p>
                <span className={styles["v-cta"]}>
                  View details <ChevronRight size={11} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Detail drawer ── */}
      {active && (
        <div
          className={styles["drawer-backdrop"]}
          onClick={() => setActive(null)}
        >
          <div
            className={styles["drawer"]}
            style={{ "--accent": active.accent } as React.CSSProperties}
            onClick={(e) => e.stopPropagation()}
          >
            {/* top bar */}
            <div className={styles["drawer-bar"]} />

            {/* header */}
            <div className={styles["drawer-header"]}>
              <div className={styles["drawer-header-left"]}>
                <div
                  className={styles["drawer-icon"]}
                  style={{
                    background: `${active.accent}22`,
                    color: active.accent,
                    border: `1px solid ${active.accent}44`,
                  }}
                >
                  {active.type === "study" ? (
                    <GraduationCap size={18} />
                  ) : (
                    <Briefcase size={18} />
                  )}
                </div>
                <div>
                  <h3 className={styles["drawer-title"]}>{active.title}</h3>
                  <div className={styles["drawer-meta"]}>
                    <span>
                      <MapPin size={11} /> {active.location}
                    </span>
                    <span>
                      <Calendar size={11} /> {active.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles["drawer-header-right"]}>
                {active.detail.companyUrl && (
                  <a
                    href={active.detail.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["drawer-link"]}
                    style={{
                      color: active.accent,
                      borderColor: `${active.accent}44`,
                    }}
                  >
                    <ExternalLink size={13} />
                    Website
                  </a>
                )}
                <button
                  className={styles["drawer-close"]}
                  onClick={() => setActive(null)}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* accent divider */}
            <div
              className={styles["drawer-divider"]}
              style={{
                background: `linear-gradient(90deg, ${active.accent}, transparent)`,
              }}
            />

            {/* description */}
            <p className={styles["drawer-desc"]}>{active.detail.description}</p>

            {/* achievements */}
            <div className={styles["drawer-section"]}>
              <h4 className={styles["drawer-section-title"]}>
                Key Achievements
              </h4>
              <ul className={styles["drawer-list"]}>
                {active.detail.achievements.map((a, i) => (
                  <li key={i} className={styles["drawer-list-item"]}>
                    <span
                      className={styles["drawer-bullet"]}
                      style={{ background: active.accent }}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* projects */}
            {active.detail.projects && (
              <div className={styles["drawer-section"]}>
                <h4 className={styles["drawer-section-title"]}>Projects</h4>
                <div className={styles["drawer-projects"]}>
                  {active.detail.projects.map((p, i) => (
                    <div
                      key={i}
                      className={styles["drawer-project-chip"]}
                      style={{
                        borderColor: `${active.accent}44`,
                        color: active.accent,
                      }}
                    >
                      <span className={styles["drawer-project-name"]}>
                        {p.name}
                      </span>
                      <span className={styles["drawer-project-desc"]}>
                        {p.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* technologies */}
            <div className={styles["drawer-section"]}>
              <h4 className={styles["drawer-section-title"]}>Technologies</h4>
              <div className={styles["drawer-techs"]}>
                {active.detail.technologies.map((t) => (
                  <span
                    key={t}
                    className={styles["drawer-tech"]}
                    style={{
                      background: `${active.accent}12`,
                      color: active.accent,
                      borderColor: `${active.accent}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerTimeline;
