"use client";
import styles from "./index.module.scss";
import { FeatureSteps } from "./FeatureSteps";
import { IconCloudSection } from "./IconCloudSection";

interface SkillsProps {
  activeIndex?: number;
}

const features = [
  {
    step: "Step 1",
    title: "Front-end Development",
    content:
      "Building responsive, interactive web applications with React, Next.js, and TypeScript. Creating modern UI/UX with animations and smooth user experiences.",
  },
  {
    step: "Step 2",
    title: "Mobile Development",
    content:
      "Developing cross-platform mobile applications with React Native and Flutter. Delivering native performance and seamless user experiences across iOS and Android.",
  },
  {
    step: "Step 3",
    title: "AI Integration",
    content:
      "Integrating AI capabilities using OpenAI, Gemini APIs. Building intelligent applications, educational tools, and interactive learning systems.",
  },
  {
    step: "Step 4",
    title: "Full Stack Solutions",
    content:
      "End-to-end development from frontend to backend. Working with Node.js, databases, cloud services, and DevOps tools to deliver complete solutions.",
  },
];

const iconSlugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "react",
  "flutter",
  "tailwindcss",
  "css3",
  "git",
  "github",
  "nodedotjs",
  "openai",
  "firebase",
  "postgresql",
  "docker",
  "vercel",
];

const Skils = ({ activeIndex }: SkillsProps = {}) => {
  return (
    <section className={styles["skills-experience"]}>
      <div className={styles["skills-experience__container"]}>
        <h2 className={styles["skills-experience__title"]}>
          Tech Stack & Tools
        </h2>
        <p className={styles["skills-experience__subtitle"]}>
          I enjoy building interactive, fast, and accessible user interfaces.
        </p>

        <div className={styles["skills-experience__grid"]}>
          <div className={styles["skills-experience__features"]}>
            <FeatureSteps features={features} autoPlayInterval={4000} />
          </div>

          <div className={styles["skills-experience__icons"]}>
            <IconCloudSection iconSlugs={iconSlugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
