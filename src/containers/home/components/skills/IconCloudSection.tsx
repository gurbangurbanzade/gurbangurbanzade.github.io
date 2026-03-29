"use client";
import { IconCloud } from "../../../../components/ui/interactive-icon-cloud";
import styles from "./IconCloudSection.module.scss";

interface IconCloudSectionProps {
  iconSlugs: string[];
}

export function IconCloudSection({ iconSlugs }: IconCloudSectionProps) {
  return (
    <div className={styles["icon-cloud-section"]}>
      <div className={styles["icon-cloud-section__container"]}>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  );
}
