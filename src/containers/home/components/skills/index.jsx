"use client";
import { useState, useEffect } from "react";
import "./skills.scss";
import axios from "axios";
import Link from "next/link";

const Skils = () => {
  const headText = "Skills & Experience";
  const [skills, setSkills] = useState([]);
  const URL = process.env.NEXT_PUBLIC_SKILLS_URL;
  useEffect(() => {
    axios(URL).then((res) => {
      setSkills(res.data);
    });
  }, []);
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
              >
                Github
              </Link>{" "}
              for more details
            </p>
          </div>
          <div className="icons">
            {skills &&
              skills.map((skill, i) => {
                return (
                  <div
                    className="animate__animated animate__fadeInUp skilBox"
                    key={i}
                  >
                    <img
                      style={{ height: "70px", marginBottom: "10px" }}
                      src={skill.path}
                      alt=""
                    />
                    <p>{skill.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skils;
