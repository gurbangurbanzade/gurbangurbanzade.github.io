"use client";

import { Code, Smartphone, Brain } from "lucide-react";
import { GlowingEffect } from "../../../../components/ui/glowing-effect";
import styles from "./style.module.scss";

interface IntroProps {
  activeIndex?: number;
}

const services = [
  {
    icon: Code,
    title: "Front-end Development",
    description:
      "React, Next.js, TypeScript, responsive UI, animations, and modern web experiences",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "React Native / Expo, cross-platform apps, native performance, and seamless user experiences",
  },
  {
    icon: Brain,
    title: "AI-driven Apps / Education Tools",
    description:
      "Gemini / ChatGPT integrations, interactive learning games, test systems, and intelligent solutions",
  },
];

const Intro = ({ activeIndex }: IntroProps = {}) => {
  return (
    <div className={styles.intro}>
      <div className={styles["intro-part"]}>
        <div className={styles["intro-header"]}>
          <h2 className={styles["intro-subtitle"]}>What I Do</h2>
          <h1 className={styles["intro-title"]}>
            Software Engineer
            <span className={styles["title-accent"]}>.</span>
          </h1>
          <p className={styles["intro-description"]}>
            Transforming ideas into powerful digital solutions through code,
            creativity, and cutting-edge technology.
          </p>
        </div>

        <ul className={styles["services-grid"]}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <GridItem
                key={index}
                icon={<IconComponent className={styles["service-icon"]} />}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className={styles["grid-item"]}>
      <div className={styles["grid-item-wrapper"]}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className={styles["grid-item-content"]}>
          <div className={styles["grid-item-inner"]}>
            <div className={styles["service-icon-wrapper"]}>{icon}</div>
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>{title}</h3>
              <p className={styles["service-description"]}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Intro;
