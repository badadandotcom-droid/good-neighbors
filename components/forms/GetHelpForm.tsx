"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { PhotoUpload } from "@/components/forms/PhotoUpload";
import { getSpeciesEntries } from "@/lib/data/wildlife";
import { trackEvent } from "@/lib/analytics";
import { getPhone, getSameDayMessage } from "@/lib/config/resolvers";
import { BRAND } from "@/lib/config/site";
import { PhoneLink } from "@/components/shared/PhoneLink";
import { cn } from "@/lib/utils";

const WHERE_OPTIONS = [
  "Attic",
  "Wall",
  "Roof or exterior",
  "Chimney",
  "Basement or crawlspace",
  "Yard or under a deck/shed",
  "Not sure",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function GetHelpForm() {
  const species = getSpeciesEntries();
  const phone = getPhone();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      location: String(data.get("location") ?? ""),
      animal: String(data.get("animal") ?? ""),
      whereActivity: String(data.get("whereActivity") ?? ""),
      description: String(data.get("description") ?? ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") ?? ""),
    };

    setStatus("submitting");
    setErrors({});
    trackEvent("form_submit");

    try {
      const res = await fetch("/api/get-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setStatus("error");
        trackEvent("form_submit_error");
        return;
      }

      setStatus("success");
      trackEvent("form_submit_success");
      form.reset();
    } catch {
      setStatus("error");
      setErrors({});
      trackEvent("form_submit_error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-pine-100 bg-pine-50 p-8 text-center sm:p-10">
        <p className="font-display text-2xl text-pine-700">Request received</p>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ink-700">
          Thank you — we have your information and will be in touch shortly. If your situation is urgent, calling
          is the fastest way to reach us.
        </p>
        <PhoneLink phone={phone} location="form-success" className="mt-5 justify-center text-lg text-pine-700" />
      </div>
    );
  }

  function handleFirstFocus() {
    if (started) return;
    setStarted(true);
    trackEvent("form_start");
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstFocus} noValidate>
      {/* Honeypot — hidden from real users, left blank by them. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <FormSection number={1} title="Your contact info">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" error={errors.name} className="sm:col-span-2">
            <input id="name" name="name" type="text" required autoComplete="name" className={inputClass(!!errors.name)} />
          </Field>

          <Field label="Phone number" htmlFor="phone" error={errors.phone}>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass(!!errors.phone)} />
          </Field>

          <Field label="Email" htmlFor="email" error={errors.email} optional>
            <input id="email" name="email" type="email" autoComplete="email" className={inputClass(!!errors.email)} />
          </Field>
        </div>
      </FormSection>

      <FormSection number={2} title="What's happening">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Property location or postal code" htmlFor="location" optional className="sm:col-span-2">
            <input id="location" name="location" type="text" placeholder="e.g. Scarborough, or M1B 2K5" className={inputClass(false)} />
          </Field>

          <Field label="What are you dealing with?" htmlFor="animal" optional>
            <select id="animal" name="animal" defaultValue="" className={inputClass(false)}>
              <option value="">Not sure</option>
              {species.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other">Something else</option>
            </select>
          </Field>

          <Field label="Where is it happening?" htmlFor="whereActivity" optional>
            <select id="whereActivity" name="whereActivity" defaultValue="" className={inputClass(false)}>
              <option value="" disabled>
                Select an area
              </option>
              {WHERE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Tell us what's happening" htmlFor="description" error={errors.description} className="sm:col-span-2">
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              placeholder="e.g. Scratching in the attic in the early morning for the past two days."
              className={inputClass(!!errors.description)}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection number={3} title="Photos" optional last>
        <PhotoUpload />
      </FormSection>

      <div className="mt-8">
        <label className="flex items-start gap-3 text-sm text-ink-700">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-stone-400 text-pine-600 focus-visible:outline-2 focus-visible:outline-pine-500"
          />
          <span>
            I agree to be contacted by {BRAND.name} about my request. See our{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-charcoal">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && <p className="mt-1.5 text-sm text-clay-500">{errors.consent}</p>}
      </div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="mt-5 rounded-sm border border-clay-100 bg-clay-100/40 px-4 py-3 text-sm text-clay-500">
          Something went wrong sending your request. Please try again, or call us directly.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-stone-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-700">
          Takes about a minute. <span className="text-stone-500">A real person follows up — not a bot.</span>
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-pine-600 px-7 py-4 text-base font-medium text-bone-50 transition-colors hover:bg-pine-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Get Help Now"}
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-stone-500">{getSameDayMessage()}</p>
    </form>
  );
}

function FormSection({
  number,
  title,
  optional,
  last,
  children,
}: {
  number: number;
  title: string;
  optional?: boolean;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={cn("pt-8 first:pt-0", !last && "border-b border-stone-200 pb-8", last && "pb-2")}>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pine-600 font-display text-sm text-pine-600">
          {number}
        </span>
        <h3 className="font-display text-lg text-charcoal">
          {title} {optional && <span className="font-sans text-sm font-normal text-stone-500">(optional)</span>}
        </h3>
      </div>
      {children}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-sm border bg-bone-50 px-4 py-3.5 text-[15px] text-ink transition-colors focus-visible:outline-2 focus-visible:outline-pine-500",
    hasError ? "border-clay-500" : "border-stone-400 hover:border-stone-500",
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label} {optional && <span className="font-normal text-stone-500">(optional)</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-clay-500">{error}</p>}
    </div>
  );
}
