"use client";
import { useEffect, useState, useRef } from "react";
import { Code, Smartphone, Brain, Rocket } from "lucide-react";
import { gsap } from "gsap";
import styles from "./FeatureSteps.module.scss";

interface Feature {
  step: string;
  title: string;
  content: string;
}

interface FeatureStepsProps {
  features: Feature[];
  autoPlayInterval?: number;
}

export function FeatureSteps({
  features,
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const featureItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const icons = [Code, Smartphone, Brain, Rocket];

  // Auto-play effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [progress, features.length, autoPlayInterval]);

  // GSAP animation for feature items
  useEffect(() => {
    featureItemsRef.current.forEach((item, index) => {
      if (!item) return;

      const isActive = index === currentFeature;

      if (isActive) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(item, {
          opacity: 0.3,
          scale: 0.98,
          x: -10,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [currentFeature]);

  const getIcon = (index: number) => {
    return icons[index] || Code;
  };

  return (
    <div className={styles["feature-steps"]}>
      {features.map((feature, index) => {
        const IconComponent = getIcon(index);
        const isActive = index === currentFeature;

        return (
          <div
            key={index}
            ref={(el) => {
              featureItemsRef.current[index] = el;
            }}
            className={`${styles["feature-steps__item"]} ${
              isActive ? styles["feature-steps__item--active"] : ""
            }`}
            onClick={() => {
              setCurrentFeature(index);
              setProgress(0);
            }}
          >
            <div
              className={`${styles["feature-steps__icon-wrapper"]} ${
                isActive ? styles["feature-steps__icon-wrapper--active"] : ""
              }`}
            >
              {index <= currentFeature ? (
                <IconComponent
                  className={styles["feature-steps__icon"]}
                  size={20}
                />
              ) : (
                <span className={styles["feature-steps__number"]}>
                  {index + 1}
                </span>
              )}
            </div>
            <div className={styles["feature-steps__content"]}>
              <h3 className={styles["feature-steps__title"]}>
                {feature.title || feature.step}
              </h3>
              <p className={styles["feature-steps__description"]}>
                {feature.content}
              </p>
            </div>
            {isActive && (
              <div className={styles["feature-steps__progress"]}>
                <div
                  className={styles["feature-steps__progress-fill"]}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
