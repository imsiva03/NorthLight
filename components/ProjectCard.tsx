import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ title, category, image, alt }: Project) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-card">
      <div className="overflow-hidden">
        <Image src={image} alt={alt} width={800} height={600}
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <span className="shrink-0 text-sm text-muted">{category}</span>
      </div>
    </article>
  );
}
