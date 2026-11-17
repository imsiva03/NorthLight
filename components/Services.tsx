import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionHeading id="services-title" title="What we do" intro="Four disciplines under one roof, so your brand, product and site stay consistent." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}
