import type { StaticImageData } from "next/image";
import type { ProjectFrame } from "@/components/Projects/DynamicFrameLayout";

import yuvamImg from "@/assets/images/projects/yuvam.webp";
import kenwoodbuildersImg from "@/assets/images/projects/kenwoodBuilders.webp";
import haulcrafterImg from "@/assets/images/projects/haulCrafter.webp";
import vitanurImg from "@/assets/images/projects/vitanur.webp";
import bostonProImg from "@/assets/images/projects/bostonPro.webp";
import punkyaiImg from "@/assets/images/projects/punkyAi.webp";
import pimImg from "@/assets/images/projects/pim.webp";
import cmsImg from "@/assets/images/projects/cms.webp";
import omsImg from "@/assets/images/projects/oms.webp";
import ecomImg from "@/assets/images/projects/ecom.webp";
import atrendsImg from "@/assets/images/projects/atrends.webp";
import docabostonkitchensImg from "@/assets/images/projects/docabostonkitchens.webp";
import cashiImg from "@/assets/images/projects/cashi.webp";

// ─────────────────────────────────────────────────────────────────
//  LAYIHƏ SİYAHISI — yeni layihə əlavə etmək üçün yalnız bura bax
//  Yeni bir obekt əlavə et, qalanını sistem avtomatik idarə edər.
// ─────────────────────────────────────────────────────────────────

export interface Project {
  /** URL slug-u  (məs. "my-app" → /projects/my-app) */
  slug: string;

  /** Şəbəkədə görünən başlıq */
  title: string;

  /** Şəbəkə kartındakı qısa açıqlama */
  description: string;

  /** Detal səhifəsindəki tam açıqlama */
  summary: string;

  /** İstifadə olunan texnologiyalar */
  stack: string[];

  /** Layihə şəkli (import edilmiş asset və ya URL) */
  image?: StaticImageData | string;

  /** Canlı URL */
  liveUrl?: string;

  /** GitHub və ya başqa kod linki */
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "yuvam",
    title: "Yuvam",
    description: "---",
    summary: "---",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: yuvamImg,
    liveUrl: "https://yuvam.az/en",
  },
  {
    slug: "kenwoodbuilders",
    title: "Kenwood Builders",
    description: "",
    summary: "",
    stack: ["React", "UI/UX", "Responsive"],
    image: kenwoodbuildersImg,
    liveUrl: "https://kenwoodbuilders.com/",
  },
  {
    slug: "haulcrafter",
    title: "Haul Crafter",
    description: "",
    summary: "",
    stack: ["React", "Forms", "Accessibility"],
    image: haulcrafterImg,
    liveUrl: "https://haulcrafter.com/",
  },
  {
    slug: "vitanur",
    title: "Vitanur",
    description: "",
    summary: "",
    stack: ["JavaScript", "CSS", "HTML"],
    image: vitanurImg,
    liveUrl: "https://vitanur.com/",
  },
  {
    slug: "bostonprocarservice",
    title: "Boston Pro Car Service",
    description: "",
    summary: "",
    stack: ["React Native", "UI/UX", "Figma"],
    image: bostonProImg,
    liveUrl: "https://bostonprocarservice.com/",
  },
  {
    slug: "punkyai",
    title: "Punky AI Dashboard",
    description: "",
    summary: "",
    stack: ["React", "GSAP", "SCSS"],
    image: punkyaiImg,
    liveUrl: "https://dashboard-with-vue.vercel.app/new-dashboard",
  },
  {
    slug: "docabostonkitchens",
    title: "DoCa Boston Kitchens",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: docabostonkitchensImg,
    liveUrl: "https://docabostonkitchens.com/",
  },

  {
    slug: "cmspanel",
    title: "CMS Panel",
    description: "",
    summary: "",
    stack: ["React", "CSS Modules"],
    image: cmsImg,
    liveUrl: "https://cms-panel.machinarium.dev/",
  },
  {
    slug: "architecturaltrends",
    title: "Architectural Trends",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: atrendsImg,
    liveUrl: "https://architecturaltrends.com/",
  },
  {
    slug: "omspanel",
    title: "OMS Panel",
    description: "",
    summary: "",
    stack: ["React", "Framer Motion", "Tailwind"],
    image: omsImg,
    liveUrl: "https://oms-panel.machinarium.dev/",
  },
  {
    slug: "ecomcontrolpanel",
    title: "E-com Control Panel",
    description: "",
    summary: "",
    stack: ["React", "Framer Motion", "Tailwind"],
    image: ecomImg,
    liveUrl: "https://ecom-control-panel.machinarium.dev/",
  },
  {
    slug: "pimpanel",
    title: "PIM Panel",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "Recharts"],
    image: pimImg,
    liveUrl: "https://pim-panel.machinarium.dev/",
  },
  {
    slug: "cashi",
    title: "Cashi",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: cashiImg,
    liveUrl: "https://mfinance-panel.machinarium.dev/",
  },
  {
    slug: "yuvam",
    title: "Yuvam",
    description: "---",
    summary: "---",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: yuvamImg,
    liveUrl: "https://yuvam.az/en",
  },
  {
    slug: "kenwoodbuilders",
    title: "Kenwood Builders",
    description: "",
    summary: "",
    stack: ["React", "UI/UX", "Responsive"],
    image: kenwoodbuildersImg,
    liveUrl: "https://kenwoodbuilders.com/",
  },
  {
    slug: "haulcrafter",
    title: "Haul Crafter",
    description: "",
    summary: "",
    stack: ["React", "Forms", "Accessibility"],
    image: haulcrafterImg,
    liveUrl: "https://haulcrafter.com/",
  },
  {
    slug: "vitanur",
    title: "Vitanur",
    description: "",
    summary: "",
    stack: ["JavaScript", "CSS", "HTML"],
    image: vitanurImg,
    liveUrl: "https://vitanur.com/",
  },
  {
    slug: "bostonprocarservice",
    title: "Boston Pro Car Service",
    description: "",
    summary: "",
    stack: ["React Native", "UI/UX", "Figma"],
    image: bostonProImg,
    liveUrl: "https://bostonprocarservice.com/",
  },
  {
    slug: "punkyai",
    title: "Punky AI Dashboard",
    description: "",
    summary: "",
    stack: ["React", "GSAP", "SCSS"],
    image: punkyaiImg,
    liveUrl: "https://dashboard-with-vue.vercel.app/new-dashboard",
  },
  {
    slug: "docabostonkitchens",
    title: "DoCa Boston Kitchens",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: docabostonkitchensImg,
    liveUrl: "https://docabostonkitchens.com/",
  },

  {
    slug: "cmspanel",
    title: "CMS Panel",
    description: "",
    summary: "",
    stack: ["React", "CSS Modules"],
    image: cmsImg,
    liveUrl: "https://cms-panel.machinarium.dev/",
  },
  {
    slug: "architecturaltrends",
    title: "Architectural Trends",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: atrendsImg,
    liveUrl: "https://architecturaltrends.com/",
  },
  {
    slug: "omspanel",
    title: "OMS Panel",
    description: "",
    summary: "",
    stack: ["React", "Framer Motion", "Tailwind"],
    image: omsImg,
    liveUrl: "https://oms-panel.machinarium.dev/",
  },
  {
    slug: "ecomcontrolpanel",
    title: "E-com Control Panel",
    description: "",
    summary: "",
    stack: ["React", "Framer Motion", "Tailwind"],
    image: ecomImg,
    liveUrl: "https://ecom-control-panel.machinarium.dev/",
  },
  {
    slug: "pimpanel",
    title: "PIM Panel",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "Recharts"],
    image: pimImg,
    liveUrl: "https://pim-panel.machinarium.dev/",
  },
  {
    slug: "cashi",
    title: "Cashi",
    description: "",
    summary: "",
    stack: ["Next.js", "TypeScript", "SCSS"],
    image: cashiImg,
    liveUrl: "https://mfinance-panel.machinarium.dev/",
  },
];

// ─────────────────────────────────────────────────────────────────
//  Aşağıdakıları əl ilə redaktə etmə — `projects`-dən avtomatik yaranır
// ─────────────────────────────────────────────────────────────────

/** Şəbəkə komponenti üçün `ProjectFrame` massivi */
export const showcaseFrames: ProjectFrame[] = projects.map((p, i) => ({
  id: i + 1,
  defaultPos: { x: (i % 3) * 4, y: Math.floor(i / 3) * 4, w: 4, h: 4 },
  mediaSize: 1,
  image: p.image,
  title: p.title,
  description: p.description,
  detailHref: `/projects/${p.slug}`,
  liveUrl: p.liveUrl,
}));

/** Detal səhifəsi üçün slug-keyed map */
export type ProjectDetail = Pick<
  Project,
  "slug" | "title" | "summary" | "stack"
>;

export const projectDetails: Record<string, ProjectDetail> = Object.fromEntries(
  projects.map((p) => [
    p.slug,
    { slug: p.slug, title: p.title, summary: p.summary, stack: p.stack },
  ]),
);
