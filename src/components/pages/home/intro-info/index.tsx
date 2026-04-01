"use client";

import { Code, Brain, MapPin, Building2 } from "lucide-react";
import styles from "./style.module.scss";

const stats = [
  { value: "4+",  label: "Years exp." },
  { value: "100+", label: "Mentored" },
  { value: "5+",  label: "Industries" },
];

const techStack = [
  "Next.js", "React", "TypeScript",
  "JavaScript", "SCSS", "Node.js", "Git",
];

const services = [
  { icon: Code,      color: "#5df8f5", label: "Frontend Engineering" },
  { icon: Building2, color: "#667eea", label: "Enterprise Systems" },
  { icon: Brain,     color: "#a21eff", label: "Mentoring & Education" },
];

const IntroInfo = () => {
  return (
    <div className={styles["info-side"]}>

      {/* ── badges ── */}
      <div className={styles["top-badges"]}>
        <span className={styles["avail-badge"]}>
          <span className={styles["avail-dot"]} />
          Available for opportunities
        </span>
        <span className={styles["location-badge"]}>
          <MapPin size={11} />
          Remote · Europe · Relocation
        </span>
      </div>

      {/* ── title block ── */}
      <div className={styles["intro-header"]}>
        <p className={styles["intro-eyebrow"]}>Frontend Engineer · 4+ yrs</p>
        <h1 className={styles["intro-title"]}>
          Building
          <span className={styles["title-accent"]}> products</span>
          <br />
          that{" "}
          <span className={styles["title-underline"]}>matter</span>
          <span className={styles["title-dot"]}>.</span>
        </h1>
        <p className={styles["intro-description"]}>
          Shipped Azerbaijan&apos;s{" "}
          <strong>first digital property insurance platform</strong> at PASHA
          Insurance and built a full e-commerce ecosystem at Machinarium —
          OMS, CMS, PIM, E-COM and admin tools. Clean code, scalable
          architecture, high engineering standards.
        </p>

        {/* ── service tags ── */}
        <div className={styles["service-row"]}>
          {services.map(({ icon: Icon, color, label }) => (
            <span
              key={label}
              className={styles["service-tag"]}
              style={{ "--tag-color": color } as React.CSSProperties}
            >
              <Icon size={13} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── stats ── */}
      <div className={styles["intro-stats"]}>
        {stats.map((s) => (
          <div key={s.label} className={styles["stat-item"]}>
            <span className={styles["stat-value"]}>{s.value}</span>
            <span className={styles["stat-label"]}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── tech chips ── */}
      <div className={styles["tech-stack"]}>
        {techStack.map((t) => (
          <span key={t} className={styles["tech-chip"]}>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default IntroInfo;
