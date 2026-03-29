"use client";

import { Code, Smartphone, Brain } from "lucide-react";
import { GlowingEffect } from "../../../../components/ui/glowing-effect";
import styles from "./style.module.scss";
import "../../../Career/style.scss";

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
      {/* ── Sol: info ── */}
      <div className={styles["info-side"]}>
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

      {/* ── Sağ: karyera timeline (Career section-dan eyni dizayn) ── */}
      <div className={styles["timeline-side"]}>
        <div className="career">
          <section className="design-section">
            <div className="timeline">
              {/* row 5 */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle top"></div>
              <div className="timeline-component timeline-content animated animatedFadeInUp fadeInUp six">
                <div className="lineCardCareer deadBlue"></div>
                <div className="textCareer">
                  <h3>Junior Front-End Developer</h3>
                  <p>Remote worker at AFB</p>
                  <p>2037</p>
                </div>
              </div>
              {/* row 4 */}
              <div className="timeline-component timeline-content study animated animatedFadeInUp fadeInUp five">
                <div className="textCareer">
                  <h3>Masters Degree at Data Science</h3>
                  <p>UNEC</p>
                  <p>2035-2037</p>
                </div>
                <div className="lineCardCareer deadOrange"></div>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>
              {/* row 3 */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-component timeline-content animated animatedFadeInUp fadeInUp four">
                <div className="lineCardCareer brightOrange"></div>
                <div className="textCareer">
                  <h3>Help Desk</h3>
                  <p>Azercell</p>
                  <p>2034-2035</p>
                </div>
              </div>
              {/* row 2 */}
              <div className="timeline-component timeline-content study animated animatedFadeInUp fadeInUp three">
                <div className="textCareer">
                  <h3>Bachelor degree of Computer Science</h3>
                  <p>Baku State University</p>
                  <p>2030-2034</p>
                </div>
                <div className="lineCardCareer deadOrange deadOrangeBorder"></div>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-component timeline-content animated animatedFadeInUp fadeInUp two">
                <div className="lineCardCareer neonBlue"></div>
                <div className="textCareer">
                  <h3>Volunteer as Business Manager</h3>
                  <p>Azercell</p>
                  <p>2030-2034</p>
                </div>
              </div>
              {/* row 1 */}
              <div className="timeline-component timeline-content study animated animatedFadeInUp fadeInUp one" style={{ paddingTop: 0, paddingBottom: 0 }}>
                <div className="textCareer">
                  <h3>School</h3>
                  <p>School №32</p>
                  <p>2019-2030</p>
                </div>
                <div className="lineCardCareer deadGreen"></div>
              </div>
              <div className="timeline-middle bottom">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>
            </div>
          </section>
        </div>
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
