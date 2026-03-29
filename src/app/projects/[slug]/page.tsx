import Link from "next/link";
import { notFound } from "next/navigation";
import { projectDetails } from "@/lib/portfolioProjects";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm text-zinc-400 transition hover:text-white"
        >
          ← Ana səhifə
        </Link>
        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-white">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-300">
          {project.summary}
        </p>
        <ul className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
