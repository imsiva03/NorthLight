type Props = { id: string; title: string; intro: string };

export default function SectionHeading({ id, title, intro }: Props) {
  return (
    <div className="max-w-xl">
      <h2 id={id} className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-muted">{intro}</p>
    </div>
  );
}
