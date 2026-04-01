"use client";

import styles from "./style.module.scss";
import CareerTimeline from "../../../../components/pages/home/career-timeline";
import IntroInfo from "@/components/pages/home/intro-info";

interface IntroProps {
  activeIndex?: number;
}

const Intro = ({ activeIndex }: IntroProps = {}) => {
  return (
    <div className={styles.intro}>
      <IntroInfo />
      <CareerTimeline />
    </div>
  );
};

export default Intro;
