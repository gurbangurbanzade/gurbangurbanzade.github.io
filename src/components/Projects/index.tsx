"use client";
import { useState, useEffect, useRef } from "react";
import "./projects.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PropTypes from "prop-types";
import { DynamicFrameLayout, type ProjectFrame } from "./DynamicFrameLayout";
import { showcaseFrames } from "@/lib/portfolioProjects";

const GRID_ROWS = 3;
const GRID_COLS = 3;
const SLIDE_COUNT = 3;

const MOBILE_ROWS = 3;
const MOBILE_COLS = 1;

const DESKTOP_TOTAL = SLIDE_COUNT * GRID_ROWS * GRID_COLS; // 27
const MOBILE_TOTAL = SLIDE_COUNT * MOBILE_ROWS; // 9

/**
 * Real layihələri əvvəl sıraya düzür, qalan yerlər üçün
 * mövcud layihələrdən pseudo-random seçim edir.
 * Eyni indeksi ardıcıl iki dəfə seçməkdən qaçır.
 */
function buildFlatList(source: ProjectFrame[], total: number): ProjectFrame[] {
  const result: ProjectFrame[] = source.slice(
    0,
    Math.min(source.length, total),
  );
  if (result.length >= total) return result;

  // Sadə seeded-random: hər çağırış eyni nəticəni verir (SSR/hydration uyğunluğu)
  let seed = 42;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return Math.abs(seed) / 0xffffffff;
  };

  let lastIdx = result.length > 0 ? result.length - 1 : -1;
  while (result.length < total) {
    let idx: number;
    do {
      idx = Math.floor(rand() * source.length);
    } while (idx === lastIdx && source.length > 1);
    lastIdx = idx;
    result.push(source[idx]);
  }
  return result;
}

function positionedFrames(flat: ProjectFrame[], cols: number): ProjectFrame[] {
  return flat.map((f, i) => ({
    ...f,
    id: i + 1,
    defaultPos: {
      x: (i % cols) * 4,
      y: Math.floor(i / cols) * 4,
      w: 4,
      h: 4,
    },
  }));
}

/** Desktop: 27 kart — əvvəl real, sonra random doldurulan */
const desktopFlat = positionedFrames(
  buildFlatList(showcaseFrames, DESKTOP_TOTAL),
  GRID_COLS,
);
const slidePages = Array.from({ length: SLIDE_COUNT }, (_, slideIdx) => {
  const start = slideIdx * GRID_ROWS * GRID_COLS;
  return desktopFlat.slice(start, start + GRID_ROWS * GRID_COLS).map((f) => ({
    ...f,
    id: slideIdx * GRID_ROWS * GRID_COLS + f.id,
  }));
});

/**
 * Mobil: yalnız ilk 9 real layihə göstərilir.
 * Slayd 0 → item 0-2, Slayd 1 → item 3-5, Slayd 2 → item 6-8
 */
const mobileFlat = showcaseFrames.slice(0, MOBILE_TOTAL);
const mobileSlidePages = Array.from({ length: SLIDE_COUNT }, (_, slideIdx) => {
  const start = slideIdx * MOBILE_ROWS;
  return mobileFlat.slice(start, start + MOBILE_ROWS).map((f, i) => ({
    ...f,
    id: slideIdx * MOBILE_ROWS + i + 1,
    defaultPos: { x: 0, y: i * 4, w: 4, h: 4 },
  }));
});

type Slide =
  | { id: number; type: "video-grid"; frames: ProjectFrame[] }
  | { id: number; type: "intro"; name: string; description: string }
  | {
      id: number;
      type: "legacy";
      name: string;
      description: string;
      technologies?: string[];
      githubUrl?: string;
      liveUrl?: string;
      image?: string;
    };

function Projects({
  activeIndex: propActiveIndex,
  containerRef: externalContainerRef,
}: {
  activeIndex?: number;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const [animationPlayed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(propActiveIndex || 0);
  const router = useRouter();
  const internalContainerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = externalContainerRef || internalContainerRef;

  /** Hər horizontal slayd bir "səhifəni" (3 layihəni) göstərir */
  const slides: Slide[] = slidePages.map((frames, i) => ({
    id: i + 1,
    type: "video-grid" as const,
    frames,
  }));

  const totalSlides = slides.length; // 3 → konteyner 300vw, GSAP 200vw sürüşdürür

  const [compactGrid, setCompactGrid] = useState(false);

  useEffect(() => {
    if (propActiveIndex !== undefined) {
      setActiveIndex(propActiveIndex);
    }
  }, [propActiveIndex]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const update = () => setCompactGrid(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const renderProjectName = (name: string) => {
    return name.split("").map((letter, idx) => (
      <h1 key={idx} className={letter === " " ? "marginRight" : ""}>
        {letter === " " ? "\u00A0" : letter}
      </h1>
    ));
  };

  return (
    <>
      <div
        ref={projectsContainerRef as React.Ref<HTMLDivElement>}
        className="projects-wrapper projects-horizontal-container"
        style={{ display: "flex", width: `${totalSlides * 100}vw` }}
      >
        {slides.map((slide, slideIdx) => (
          <div
            key={slide.id}
            className="project-slide"
            style={{ width: "100vw", height: "100vh", flexShrink: 0 }}
          >
            {slide.type === "intro" && (
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
                    {renderProjectName(slide.name)}
                  </div>
                </div>
                <p>
                  {slide.description} <Link href="/contact">contact me!</Link>
                </p>

                <a
                  className="seeProj"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/projects");
                  }}
                >
                  {" "}
                  See Projects <span className="projSpan"> {">"} </span>
                </a>
              </div>
            )}
            {slide.type === "video-grid" && (
              <div
                className="box-border flex h-full min-h-0 w-full flex-col"
                style={{ backgroundColor: "#18181b" }}
              >
                <div className="min-h-0 flex-1 ">
                  <DynamicFrameLayout
                    frames={
                      compactGrid ? mobileSlidePages[slideIdx] : slide.frames
                    }
                    className="h-full min-h-[280px] w-full"
                    hoverSize={6}
                    gapSize={compactGrid ? 8 : 4}
                    gridRows={compactGrid ? MOBILE_ROWS : GRID_ROWS}
                    gridCols={compactGrid ? MOBILE_COLS : GRID_COLS}
                  />
                </div>
              </div>
            )}
            {slide.type === "legacy" && (
              <div
                className={`${
                  animationPlayed
                    ? " animate__animated animate__slideInLeft"
                    : " "
                } Snobella`}
              >
                <div className="left">
                  <p>legacy</p>
                  <div className="snobella">
                    {renderProjectName(slide.name)}
                  </div>
                  <p>{slide.description}</p>
                  <br />
                  <p>
                    <span style={{ fontWeight: "bold" }}>Built with:</span>{" "}
                    {(slide.technologies || []).join(", ")}.
                  </p>
                  <br />
                  <div className="viewCodes">
                    <a
                      href={slide.githubUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      View the code <span>{">"}</span>
                    </a>
                    <a
                      href={slide.liveUrl || "#"}
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
                    <img src={slide.image} alt={slide.name} />
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
