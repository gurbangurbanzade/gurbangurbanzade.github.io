"use client";
import "./skills.scss";
import Link from "next/link";
import { IconCloud } from "../../../../components/ui/interactive-icon-cloud";

const Skils = () => {
  const headText = "Skills & Experience";

  const iconSlugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <>
      <section className="skills-experience">
        <div className="container">
          <div className="content">
            <h2 className="problem">
              a problem is a change for you to do your best
            </h2>
            <div className="headText">
              {headText.split("").map((letter, i) => {
                return (
                  <h1
                    key={i}
                    className={letter === " " ? "bounce marginRight" : "bounce"}
                  >
                    {letter}
                  </h1>
                );
              })}
            </div>
            <h1 className="headTextMobile">Skills & Experience</h1>
            <h4>
              The main area of expertise is front end development (client side
              of the web).
            </h4>
            <p>
              HTML , CSS ,JS , building web applications with React , features,
              animations, and coding interactive layouts .
            </p>
            <p className="visit-linkedin">
              Visit my{" "}
              <Link
                className="toGithub"
                href="https://github.com/gurbangurbanzade"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>{" "}
              for more details
            </p>
          </div>
          <div
            className="icon-cloud-container"
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              maxWidth: "800px",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: "8px",
              // border: "1px solid rgba(255, 255, 255, 0.1)",
              // backgroundColor: "rgba(30, 24, 46, 0.6)",
              padding: "20px",
              minHeight: "500px",
              margin: "0 auto",
            }}
          >
            <IconCloud iconSlugs={iconSlugs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skils;
