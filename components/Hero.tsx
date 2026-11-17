import type { CSSProperties } from "react";

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
      {/* Background: layered gradients plus large rings, no image weight */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 70% at 85% 20%, rgba(59,75,255,.55), transparent 70%), radial-gradient(40% 50% at 10% 90%, rgba(255,210,63,.18), transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full border border-white/15" />
      <div aria-hidden className="pointer-events-none absolute -right-10 top-32 h-[22rem] w-[22rem] rounded-full border border-signal/40" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <h1 id="hero-title" className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="rise block" style={delay(0)}>Northlight</span>
          <span className="rise block text-white/70" style={delay(1)}>makes brands</span>
          <span className="rise block text-signal" style={delay(2)}>easy to find.</span>
        </h1>
        <p className="rise mt-8 max-w-md text-lg text-white/75" style={delay(4)}>
          A design studio for products, websites and identities that people understand at a glance.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4" style={delay(5)}>
          <a href="#work" className="rounded-full bg-signal px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5">View our work</a>
          <a href="#contact" className="rounded-full border border-white/30 px-7 py-3.5 font-semibold transition-colors hover:bg-white/10">Start a project</a>
        </div>
      </div>
    </section>
  );
}
