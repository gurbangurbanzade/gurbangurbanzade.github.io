"use client";
import { useState, useEffect, useRef } from "react";
import "./projects.scss";
import Image from "./../../assets/img/macbook.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import { DynamicFrameLayout } from "./DynamicFrameLayout";

gsap.registerPlugin(ScrollTrigger);

function Projects({
  activeIndex: propActiveIndex,
  containerRef: externalContainerRef,
}) {
  const [animationPlayed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(propActiveIndex || 0);
  const router = useRouter();
  const internalContainerRef = useRef(null);
  const projectsContainerRef = externalContainerRef || internalContainerRef;

  // 15 elementlik projects array
  const projects = [
    {
      id: 1,
      type: "video-grid",
      name: "Video Grid",
      description: "Interactive video grid layout with hover effects.",
    },
    {
      id: 2,
      type: "video-grid",
      name: "Video Grid",
      description: "Interactive video grid layout with hover effects.",
    },
    {
      id: 3,
      type: "video-grid",
      name: "Video Grid",
      description: "Interactive video grid layout with hover effects.",
    },
  ];

  const demoFrames = [
    {
      id: 1,
      video:
        "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
      defaultPos: { x: 0, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 2,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
      defaultPos: { x: 4, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 3,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
      defaultPos: { x: 8, y: 0, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 4,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
      defaultPos: { x: 0, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 5,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
      defaultPos: { x: 4, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 6,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
      defaultPos: { x: 8, y: 4, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 7,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
      defaultPos: { x: 0, y: 8, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 8,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
      defaultPos: { x: 4, y: 8, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
    {
      id: 9,
      video:
        "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
      defaultPos: { x: 8, y: 8, w: 4, h: 4 },
      mediaSize: 1,
      isHovered: false,
    },
  ];

  const totalSlides = projects.length - 2;

  useEffect(() => {
    if (propActiveIndex !== undefined) {
      setActiveIndex(propActiveIndex);
    }
  }, [propActiveIndex]);

  const renderProjectName = (name) => {
    return name.split("").map((letter, idx) => (
      <h1 key={idx} className={letter === " " ? "marginRight" : ""}>
        {letter === " " ? "\u00A0" : letter}
      </h1>
    ));
  };

  return (
    <>
      <div
        ref={projectsContainerRef}
        className="projects-wrapper projects-horizontal-container"
        style={{ display: "flex", width: `${totalSlides * 100}vw` }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-slide"
            style={{ width: "100vw", height: "100vh", flexShrink: 0 }}
          >
            {project.type === "intro" ? (
              <div id="projects" style={{ width: "100%", height: "100%" }}>
                <div
                  className={`${
                    animationPlayed
                      ? " animate__animated animate__slideInUp"
                      : " "
                  } projectsInfo`}
                >
                  <div className="portfolio-box">
                    <div className="portfolio">
                      {renderProjectName("Portfolio")}
                    </div>
                    <span> </span>
                    <h1> & </h1>
                    <span> </span>
                    <div className="previous">
                      {renderProjectName("Previous")}
                    </div>
                  </div>
                  <div className="projects">
                    {renderProjectName(project.name)}
                  </div>
                </div>
                <p>
                  {project.description} <Link href="/contact">contact me!</Link>
                </p>

                <a
                  className="seeProj"
                  href=""
                  onClick={() => {
                    router.push("projects-page");
                  }}
                >
                  {" "}
                  See Projects <span className="projSpan"> {">"} </span>
                </a>
              </div>
            ) : project.type === "video-grid" ? (
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundColor: "#18181b",
                }}
              >
                <DynamicFrameLayout
                  frames={demoFrames}
                  className="w-full h-full"
                  hoverSize={6}
                  gapSize={4}
                />
              </div>
            ) : (
              <div
                className={`${
                  animationPlayed
                    ? " animate__animated animate__slideInLeft"
                    : " "
                } Snobella`}
              >
                <div className="left">
                  <p>{project.type || ""}</p>
                  <div className="snobella">
                    {renderProjectName(project.name)}
                  </div>
                  <p>{project.description}</p>
                  <br />
                  <p>
                    <span style={{ fontWeight: "bold" }}>Built with:</span>{" "}
                    {((project as any).technologies || []).join(", ")}.
                  </p>
                  <br />
                  <div className="viewCodes">
                    <a
                      href={(project as any).githubUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      View the code <span>{">"}</span>
                    </a>
                    <a
                      href={(project as any).liveUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit the App <span>{">"}</span>
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>
                <div className="right">
                  <div className="img-wrapper">
                    <img
                      src={(project as any).image || Image.src}
                      alt={project.name}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

Projects.propTypes = {
  activeIndex: PropTypes.number,
  containerRef: PropTypes.shape({ current: PropTypes.any }),
};

export default Projects;
