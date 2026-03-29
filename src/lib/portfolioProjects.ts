import type { ProjectFrame } from "@/components/Projects/DynamicFrameLayout";
import portfolioImg from "@/assets/img/portfolio.png";
import snobellaImg from "@/assets/img/snobella.png";
import signupImg from "@/assets/img/sign-up-form.png";
import calculatorImg from "@/assets/img/calculator.png";
import phoneImg from "@/assets/img/phone.png";
import stylishImg from "@/assets/img/stylish.png";
import macbookImg from "@/assets/img/macbook.png";
import pinkCalculatorImg from "@/assets/img/PinkCaculator.png";
import phoneCalcImg from "@/assets/img/phoneCalc.png";

/** Layihə şəbəkəsi və detal səhifələri üçün ortaq məlumat */
export const showcaseFrames: ProjectFrame[] = [
  {
    id: 1,
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    image: portfolioImg,
    title: "Portfolio",
    description: "Şəxsi brend, layihə nümayişi və əlaqə bölməsi olan müasir portfolio saytı.",
    detailHref: "/projects/portfolio",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 2,
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    image: snobellaImg,
    title: "Snobella",
    description: "E-ticarət üçün məhsul kataloqu, səbət və istifadəçi axını ilə UI nümunəsi.",
    detailHref: "/projects/snobella",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 3,
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    image: signupImg,
    title: "Qeydiyyat forması",
    description: "Form validasiyası, əlçatanlıq və təmiz vizual ierarxiya ilə qeydiyyat axını.",
    detailHref: "/projects/sign-up-form",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 4,
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    image: calculatorImg,
    title: "Kalkulyator",
    description: "Bütün əsas riyazi əməliyyatları dəstəkləyən sadə və sürətli kalkulyator tətbiqi.",
    detailHref: "/projects/calculator",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 5,
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    image: phoneImg,
    title: "Mobil UI",
    description: "Mobil cihazlar üçün optimallaşdırılmış interfeys nümunəsi və komponent kitabxanası.",
    detailHref: "/projects/mobile-ui",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 6,
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    image: stylishImg,
    title: "Stylish",
    description: "Moda sahəsi üçün vizual cəhətdən zəngin brend identifikasiyası və UI sistemi.",
    detailHref: "/projects/stylish",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 7,
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    image: macbookImg,
    title: "Dashboard",
    description: "Analitika və idarəetmə paneli üçün responsiv masa üstü tətbiqi nümunəsi.",
    detailHref: "/projects/dashboard",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 8,
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    image: pinkCalculatorImg,
    title: "Pink Calculator",
    description: "Minimalizmə söykənən rəngli kalkulyator — UI detallarına diqqətin nümunəsi.",
    detailHref: "/projects/pink-calculator",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
  {
    id: 9,
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    image: phoneCalcImg,
    title: "Phone Calc",
    description: "Mobil əsaslı kalkulyator: toxunuşa cavab verən düymələr və canlı animasiyalar.",
    detailHref: "/projects/phone-calc",
    liveUrl: "https://gurbangurbanzada.github.io/",
  },
];

export type ProjectDetail = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  portfolio: {
    slug: "portfolio",
    title: "Portfolio",
    summary:
      "Bu layihə şəxsi portfolio üçün əsas səhifə, layihələr bölməsi və əlaqə forması birləşdirir. Məqsəd sürətli yüklənmə və aydın vizual ierarxiyadır.",
    stack: ["Next.js", "TypeScript", "SCSS"],
  },
  snobella: {
    slug: "snobella",
    title: "Snobella",
    summary:
      "E-ticarət interfeysi üçün məhsul şəbəkəsi, filtrlər və mobil uyğun düzgün boşluqlar ilə hazırlanmış nümunə.",
    stack: ["React", "UI/UX", "Responsive"],
  },
  "sign-up-form": {
    slug: "sign-up-form",
    title: "Qeydiyyat forması",
    summary:
      "İstifadəçi qeydiyyatı üçün addım-addım forma, xəta mesajları və fokus vəziyyətləri üçün aydın dizayn.",
    stack: ["React", "Forms", "Accessibility"],
  },
  calculator: {
    slug: "calculator",
    title: "Kalkulyator",
    summary:
      "Bütün əsas riyazi əməliyyatları dəstəkləyən sadə, sürətli və istifadəçi dostu kalkulyator tətbiqi.",
    stack: ["JavaScript", "CSS", "HTML"],
  },
  "mobile-ui": {
    slug: "mobile-ui",
    title: "Mobil UI",
    summary:
      "Mobil cihazlar üçün diqqətlə optimallaşdırılmış interfeys nümunəsi: toxunuş hədəfləri, rəng sistemi və komponent kitabxanası.",
    stack: ["React Native", "UI/UX", "Figma"],
  },
  stylish: {
    slug: "stylish",
    title: "Stylish",
    summary:
      "Moda sahəsi üçün güclü tipografiya, isti rəng palitri və animasiyalı keçidlərlə brend UI sistemi.",
    stack: ["React", "GSAP", "SCSS"],
  },
  dashboard: {
    slug: "dashboard",
    title: "Dashboard",
    summary:
      "Analitika məlumatlarını real vaxtda vizuallaşdıran idarəetmə paneli. Qrafiklər, cədvəllər və filtr sistemi daxildir.",
    stack: ["Next.js", "TypeScript", "Recharts"],
  },
  "pink-calculator": {
    slug: "pink-calculator",
    title: "Pink Calculator",
    summary:
      "Minimalizmə söykənən, rəngli kalkulyator — düymə animasiyaları və UI detallarına xüsusi diqqətin nümunəsi.",
    stack: ["React", "CSS Modules"],
  },
  "phone-calc": {
    slug: "phone-calc",
    title: "Phone Calc",
    summary:
      "Mobil əsaslı kalkulyator tətbiqi: toxunuşa cavab verən böyük düymələr, canlı keçid animasiyaları və yüngül arxitektura.",
    stack: ["React", "Framer Motion", "Tailwind"],
  },
};
