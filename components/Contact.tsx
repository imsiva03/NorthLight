"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name")).trim()) errors.name = "Enter your name.";
  if (!emailPattern.test(String(data.get("email")).trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (String(data.get("message")).trim().length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  return errors;
}

const field = "mt-1.5 w-full rounded-xl border bg-card px-4 py-3 outline-none transition-colors focus:border-cobalt";

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    // Demo only: swap this delay for a fetch() to your API route or email service.
    await new Promise((r) => setTimeout(r, 800));
    form.reset();
    setStatus("sent");
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <SectionHeading id="contact-title" title="Tell us about your project" intro="Share a few details and we will reply within two working days." />

        <form onSubmit={onSubmit} noValidate className="space-y-5">
          {status === "sent" && (
            <p role="status" className="rounded-xl bg-signal px-4 py-3 font-medium text-ink">
              Message sent. We will be in touch soon.
            </p>
          )}

          <div>
            <label htmlFor="name" className="font-medium">Name</label>
            <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
              className={`${field} ${errors.name ? "border-red-500" : "border-line"}`} />
            {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="font-medium">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
              className={`${field} ${errors.email ? "border-red-500" : "border-line"}`} />
            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}
              className={`${field} ${errors.message ? "border-red-500" : "border-line"}`} />
            {errors.message && <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" disabled={status === "sending"}
            className="rounded-full bg-cobalt px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60">
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
