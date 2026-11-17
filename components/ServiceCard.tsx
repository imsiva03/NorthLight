import type { Service } from "@/lib/data";

export default function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <article className="rounded-2xl border border-line bg-card p-6">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-cobalt text-white">
        <Icon size={22} aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
