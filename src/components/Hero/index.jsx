import React from "react";
import "./hero.scss";
import Github from "../../assets/img/github (1).svg";
import Instagram from "../../assets/img/instagram.svg";
import X from "../../assets/img/x-twitter.svg";
import Youtube from "../../assets/img/youtube.svg";
import ProfileImg from "../../assets/img/heroBannerImg/profile.png";
import Arrow1 from "../../assets/img/heroBannerImg/arrow1.png";
import Arrow2 from "../../assets/img/heroBannerImg/arrow2.png";
import Arrow3 from "../../assets/img/heroBannerImg/arrow3.png";
import Arrow4 from "../../assets/img/heroBannerImg/arrow4.png";
import Slash from "../../assets/img/heroBannerImg/slash.png";
import Profile1 from "../../assets/img/heroBannerImg/profile1.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({ onButtonClick }) => {
  return (
    <section
      className="hero-section"
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="content grid grid-rows-4">
        <div className="logoBox">
          <div className="imgBox">
            {/* <img src={ProfileImg.src} alt="" /> */}
            <img src={Arrow1.src} className="arrow1" alt="Arrow 1" />
            <img src={Arrow2.src} className="arrow2" alt="Arrow 2" />
            <img src={Arrow3.src} className="arrow3" alt="Arrow 3" />
            <img src={Arrow4.src} className="arrow4" alt="Arrow 4" />
            <img
              src={Profile1.src}
              className="profile1  animate__delay-2s"
              alt="Profile"
            />
            <img src={Slash.src} className="slash" alt="Slash" />
          </div>
        </div>
        <div className="textBox">
          <h1>
            Hello, I am <span>Gurban</span>.
            <br /> Web and Mobile developer.
          </h1>
          <button className="btn" onClick={onButtonClick} style={{ zIndex: 1 }}>
            View my work <FaArrowRight className="arrowLeft" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
