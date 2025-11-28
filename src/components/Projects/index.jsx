"use client";
import React, { useState, useEffect } from "react";
import "./projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import Image from "./../../assets/img/macbook.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { useRef } from "react";

function Projects() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const [swiper, setSwiper] = useState(null);

  const sliderGoDefault = () => {
    if (swiper) {
      swiper.slideTo(0);
    }
  };

  const sliderGoSnobella = () => {
    if (swiper) {
      swiper.slideTo(1);
    }
  };

  const sliderGoCalculator = () => {
    if (swiper) {
      swiper.slideTo(2);
    }
  };

  const sliderGoBack = () => {
    if (swiper) {
      if (activeIndex > 0) {
        swiper.slideTo(activeIndex - 1);
      }
    }
  };

  const sliderGoForward = () => {
    if (swiper) {
      if (activeIndex < 2) {
        swiper.slideTo(activeIndex + 1);
      }
    }
  };

  const sliderGoBackDefault = () => {
    if (swiper) {
      swiper.slideTo(0);
    }
  };

  const sliderGoForwardDefault = () => {
    if (swiper) {
      swiper.slideTo(2);
    }
  };
  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        modules={[Pagination]}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        speed={2000}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div id="projects" style={{ width: "100%" }}>
            <div className="container">
              <div
                className={`${
                  animationPlayed
                    ? " animate__animated animate__slideInUp"
                    : " "
                } projectsInfo`}
              >
                <div className="portfolio-box">
                  <div className="portfolio">
                    <h1>P</h1>
                    <h1>o</h1>
                    <h1>r</h1>
                    <h1>t</h1>
                    <h1>f</h1>
                    <h1>o</h1>
                    <h1>l</h1>
                    <h1>i</h1>
                    <h1>o</h1>
                  </div>
                  <span> </span>
                  <h1> & </h1>
                  <span> </span>
                  <div className="previous">
                    <h1>P</h1>
                    <h1>r</h1>
                    <h1>e</h1>
                    <h1>v</h1>
                    <h1>i</h1>
                    <h1>o</h1>
                    <h1>u</h1>
                    <h1>s</h1>
                  </div>
                </div>

                <div className="projects">
                  <h1>P</h1>
                  <h1>r</h1>
                  <h1>o</h1>
                  <h1>j</h1>
                  <h1>e</h1>
                  <h1>c</h1>
                  <h1>t</h1>
                  <h1>s</h1>
                </div>
              </div>
              <p>
                I have built various different projects to fit different aspects
                of the client's business. If you want to see more examples of my
                work than the ones showcased in this site, please{" "}
                <Link href="/contact">contact me!</Link>
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`${
              animationPlayed ? " animate__animated animate__slideInLeft" : " "
            } Snobella`}
          >
            <div className="left">
              <p>E-COMMERCE APPLICATION</p>
              <div className="snobella">
                <h1>S</h1>
                <h1>N</h1>
                <h1>O</h1>
                <h1>B</h1>
                <h1>E</h1>
                <h1>L</h1>
                <h1>L</h1>
                <h1>A</h1>
              </div>
              <p>Online store for selling different types of clothes.</p>
              <br />
              <p>
                <span style={{ fontWeight: "bold" }}>Built with:</span> React,
                Redux, Node, JavaScript, SASS, Custom Stripe Integration,
                Firebase (NoSQL Database, Cloud Functions, Cloud Storage,
                Hosting).
              </p>
              <br />
              <div className="viewCodes">
                <a href="https://github.com/" target="_blank">
                  {" "}
                  View the code <span>{">"}</span>
                </a>
                <a
                  href="https://ecommercefullwebsite.onrender.com/"
                  target="_blank"
                >
                  Visit the App <span>{">"}</span>
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            <div className="right">
              <div className="img-wrapper">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className={`${
              animationPlayed ? " animate__animated animate__slideInLeft" : " "
            } Calculator`}
          >
            <div className="left">
              <p>REACT CALCULATOR APP</p>
              <div className="calculator">
                <h1>C</h1>
                <h1>A</h1>
                <h1>L</h1>
                <h1>C</h1>
                <h1>U</h1>
                <h1>L</h1>
                <h1>A</h1>
                <h1>T</h1>
                <h1>O</h1>
                <h1>R</h1>
              </div>
              <p>
                Simple Calculator for calculating simple arithmetic operations.
              </p>
              <br />
              <p>
                <span style={{ fontWeight: "bold" }}>Built with:</span> React,
                Redux, Node, JavaScript, SASS, Custom Stripe Integration,
                Firebase (NoSQL Database, Cloud Functions, Cloud Storage,
                Hosting).
              </p>
              <br />
              <div className="viewCodes">
                <a href="https://github.com/" target="_blank">
                  {" "}
                  View the code <span>{">"}</span>
                </a>
                <a href="https://simplecalc-kq0f.onrender.com/" target="_blank">
                  Visit the App <span>{">"}</span>
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            <div className="right">
              <div className="img-wrapper">
                {/* <img src={Calculator} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div
          style={{
            width: "100vw",
            zIndex: "1",
            position: "absolute",
            bottom: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul
            style={{
              fontSize: "20px",
              color: "#ff3870",
              display: "flex",
              gap: "5px",
              transition: "none",
            }}
          >
            <li
              onClick={() => {
                sliderGoBackDefault();
              }}
              style={{
                cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                opacity: activeIndex === 0 ? 0.5 : 1,
                pointerEvents: activeIndex === 0 ? "none" : "auto",
              }}
            >
              <HiChevronDoubleLeft />
            </li>
            <li
              onClick={() => {
                sliderGoBack();
              }}
              style={{
                cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                opacity: activeIndex === 0 ? 0.5 : 1,
                pointerEvents: activeIndex === 0 ? "none" : "auto",
              }}
            >
              <HiChevronLeft />
            </li>
            <li
              onClick={() => {
                sliderGoDefault();
              }}
              style={{
                border: activeIndex === 0 ? "1px solid #ff3870" : "none",
                borderRadius: "7px",
              }}
            >
              <PiNumberOneBold />
            </li>
            <li
              onClick={() => {
                sliderGoSnobella();
              }}
              style={{
                border: activeIndex === 1 ? "1px solid #ff3870" : "none",
                borderRadius: "7px",
              }}
            >
              <PiNumberTwoBold />
            </li>
            <li
              onClick={() => {
                sliderGoCalculator();
              }}
              style={{
                border: activeIndex === 2 ? "1px solid #ff3870" : "none",
                borderRadius: "7px",
              }}
            >
              <PiNumberThreeBold />
            </li>
            <li
              onClick={() => {
                sliderGoForward();
              }}
              style={{
                cursor: activeIndex === 2 ? "not-allowed" : "pointer",
                opacity: activeIndex === 2 ? 0.5 : 1,
                pointerEvents: activeIndex === 2 ? "none" : "auto",
              }}
            >
              <HiChevronRight />
            </li>
            <li
              onClick={() => {
                sliderGoForwardDefault();
              }}
              style={{
                cursor: activeIndex === 2 ? "not-allowed" : "pointer",
                opacity: activeIndex === 2 ? 0.5 : 1,
                pointerEvents: activeIndex === 2 ? "none" : "auto",
              }}
            >
              <HiChevronDoubleRight />
            </li>
          </ul>
        </div>
      </Swiper>
    </>
  );
}

export default Projects;
