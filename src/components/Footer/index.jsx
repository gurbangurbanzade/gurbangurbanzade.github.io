"use client";
import React from "react";
import Link from "next/link";
import "./style.scss";
import { useState, useEffect } from "react";


function Footer({ onButtonClick, activeIndex, context }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (context === "main1" && activeIndex === 4) {
      setAnimationClass("animate__backInRight");
    } else if (context === "main2" && activeIndex === 4) {
      setAnimationClass("animate__backOutRight");
    } else {
      setAnimationClass("");
    }
  }, [activeIndex, context]);

  return (
    <footer>
      <div
        // className={`${
        //   animationPlayed ? " animate__backInRight" : "animate__backOutRight "
        // } animate__animated footerItems container`}
        // style={{ animationDuration: "2s" }}
        className="footerItems container"
        // className={`footerItems container animate__animated ${animationClass}`}
        // style={{ animationDuration: "2s" }}
      >
        <div className="leftFooter"></div>
        <div className="rightFooter">
          <div className="links">
            <p>
              {" "}
              <Link href="/contact" className="p">
                Contact
              </Link>
            </p>{" "}
          </div>

          <div className="links">
            <p>
              {" "}
              <Link href="/projects-page" onClick={onButtonClick} className="p">
                Projects
              </Link>{" "}
            </p>{" "}
          </div>
          <div className="links">
            <p>
              {" "}
              <Link href="/riddle" className="p">
                Riddle
              </Link>
            </p>{" "}
          </div>
          <div className="links">
            <p>
              <Link href="/blog" className="p">
                Blog
              </Link>
            </p>{" "}
          </div>
          <div className="links">
            <p>
              <Link href="/about" className="p">
                About
              </Link>
            </p>{" "}
          </div>
          <div className="links">
            <p>
              <Link href="/career" className="p">
                Career
              </Link>
            </p>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <div className='line'></div> */
}
