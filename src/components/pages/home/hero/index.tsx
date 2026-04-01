"use client";
import styles from "./style.module.scss";
import Arrow1 from "@/assets/images/heroBannerImg/arrow1.webp";
import Arrow2 from "@/assets/images/heroBannerImg/arrow2.webp";
import Arrow3 from "@/assets/images/heroBannerImg/arrow3.webp";
import Arrow4 from "@/assets/images/heroBannerImg/arrow4.webp";
import Slash from "@/assets/images/heroBannerImg/slash.webp";
import Profile1 from "@/assets/images/heroBannerImg/profile1.webp";
import { FaArrowRight } from "react-icons/fa";

type TProps = {
  onButtonClick?: () => void;
};

const Hero = ({ onButtonClick }: TProps) => {
  return (
    <section className={styles["hero__section"]}>
      <div className={styles["hero__content"]}>
        <div className={styles["hero__logo-box"]}>
          <div className={styles["hero__img-box"]}>
            <img
              src={Arrow1.src}
              className={styles["hero__arrow1"]}
              alt="Arrow 1"
            />
            <img
              src={Arrow2.src}
              className={styles["hero__arrow2"]}
              alt="Arrow 2"
            />
            <img
              src={Arrow3.src}
              className={styles["hero__arrow3"]}
              alt="Arrow 3"
            />
            <img
              src={Arrow4.src}
              className={styles["hero__arrow4"]}
              alt="Arrow 4"
            />
            <img
              src={Profile1.src}
              className={styles["hero__profile"]}
              alt="Profile"
            />
            <img
              src={Slash.src}
              className={styles["hero__slash"]}
              alt="Slash"
            />
          </div>
        </div>
        <div className={styles["hero__text-box"]}>
          <h1 className={styles["hero__title"]}>
            Hello, I am{" "}
            <span className={styles["hero__title-highlight"]}>Gurban</span>.
            <br /> Software Engineer.
          </h1>
          <button
            className={styles["hero__btn"]}
            onClick={onButtonClick}
            style={{ zIndex: 1 }}
          >
            View my work <FaArrowRight className={styles["hero__btn-arrow"]} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
