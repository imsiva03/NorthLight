import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-y border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading id="work-title" title="Selected work" intro="A few recent projects across branding, product design and the web." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}
