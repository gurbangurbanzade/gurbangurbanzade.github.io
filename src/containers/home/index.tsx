"use client";
import "./homePage.scss";
import Intro from "./components/intro/index";
import Footer from "../../components/Footer";
import Skills from "./components/skills";
import "animate.css";
import Hero from "../../components/pages/home/hero";
import Projects from "../../components/Projects";
import Feedback from "./components/feedback";
import Navbar from "../../components/layout/navbar";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-bezier-curve-editor/index.css";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const sections = containerRef.current?.querySelectorAll(".scroll-section");
    if (sections && sections[index]) {
      const section = sections[index];
      const elementTop =
        section.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });

      // Update active index immediately for better UX
      setActiveIndex(index);
    }
  };

  const slideToProjects = () => scrollToSection(3);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loading) return;

    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll(".scroll-section");
    const projectsSection = projectsSectionRef.current;
    const projectsContainer = projectsContainerRef.current;

    // Scroll progress tracking for all sections except projects (index 2)
    // Sections order: 0=Hero, 1=Intro, 2=Projects, 3=Feedback, 4=Footer
    sections.forEach((section, index) => {
      if (index === 2) return; // Skip projects section (index 2) for vertical scroll tracking

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          setActiveIndex(index);
        },
        onEnterBack: () => {
          setActiveIndex(index);
        },
        markers: false,
        invalidateOnRefresh: true,
      });
    });

    // Horizontal scroll for projects section
    if (projectsSection && projectsContainer) {
      const setupHorizontalScroll = () => {
        if (!projectsContainer) return;

        // 3 slides, each 100vw, container is 300vw wide
        // We need to scroll 200vw (from first slide to third slide)
        const totalWidth = projectsContainer.scrollWidth - window.innerWidth;

        if (totalWidth <= 0) {
          // Retry if container not ready
          setTimeout(setupHorizontalScroll, 100);
          return;
        }

        ScrollTrigger.create({
          trigger: projectsSection,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          markers: false,
          onUpdate: (self) => {
            // Scroll horizontally: progress 0 = first slide, progress 1 = third slide
            const scrollX = -totalWidth * self.progress;
            gsap.set(projectsContainer, {
              x: scrollX,
            });
          },
          onEnter: () => {
            setActiveIndex(2); // Projects is at index 2
          },
          onLeave: () => {
            setActiveIndex(3); // Next section after Projects
          },
          onEnterBack: () => {
            setActiveIndex(2); // Projects is at index 2
          },
          onLeaveBack: () => {
            setActiveIndex(1); // Previous section before Projects
          },
          invalidateOnRefresh: true,
        });
      };

      // Wait for container to be fully rendered
      setTimeout(setupHorizontalScroll, 200);
    }

    // Refresh ScrollTrigger after a short delay to ensure proper calculation
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="sound-wave">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          {/* <Navbar /> */}
          <div className="home-background">
            <div className="home-background__gradient-mesh"></div>
            <div className="home-background__shapes">
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="home-background__shape"></div>
              ))}
            </div>
            <div className="home-background__grid"></div>
          </div>
          <div
            ref={containerRef}
            className="Main1 gsap-scroll-container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="scroll-section">
              <Hero onButtonClick={slideToProjects} />
            </div>
            <div className="scroll-section">
              <Intro activeIndex={activeIndex} />
            </div>
            <div className="scroll-section skillsSlider">
              <Skills activeIndex={activeIndex} />
            </div>
            <div
              ref={projectsSectionRef}
              className="scroll-section projects-section"
            >
              <Projects
                activeIndex={activeIndex}
                containerRef={projectsContainerRef}
              />
            </div>
            <div className="scroll-section">
              <Feedback activeIndex={activeIndex} />
            </div>
            <div className="scroll-section">
              <Footer
                onButtonClick={slideToProjects}
                activeIndex={activeIndex}
                context="main1"
              />
            </div>
          </div>

          <div className="Main2">
            <Hero />
            <Intro />
            <Skills />
            <Projects />
            <Feedback />
            <Footer context="main2" />
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
