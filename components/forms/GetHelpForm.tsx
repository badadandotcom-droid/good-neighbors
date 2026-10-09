"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Illustration } from "@/components/illustrations/Illustration";
import { PhotoUpload, type FormPhoto } from "@/components/forms/PhotoUpload";
import { getSpeciesEntries } from "@/lib/data/wildlife";
import { trackAdsConversion, trackEvent } from "@/lib/analytics";
import { getPhone, getSameDayMessage } from "@/lib/config/resolvers";
import { ANALYTICS, BRAND } from "@/lib/config/site";
import {
  FIELD_LIMITS,
  PHONE_TYPES,
  THANK_YOU_PATH,
  VALIDATED_FIELDS,
  validateLead,
  type LeadFieldErrors,
} from "@/lib/forms/lead";
import { PHOTO_SEND_TIMEOUT_MS } from "@/lib/photos/limits";
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

/**
 * "navigating" is the moment between a delivered request and the thank-you
 * page appearing; "sent" only shows if that page is slow to load.
 */
type Status = "idle" | "submitting" | "navigating" | "sent";

const DEFAULT_SEND_ERROR = "Something went wrong sending your request. Please try again, or call us directly.";

/** After this long on "Sending…", reassure the visitor that it's still going. */
const SLOW_SEND_MS = 8000;

/** If the thank-you page hasn't appeared by then, confirm the request on this page instead. */
const SENT_FALLBACK_MS = 4000;

interface LeadResponse {
  ok: boolean;
  delivered?: boolean;
  errors?: LeadFieldErrors;
  error?: string;
}

export function GetHelpForm() {
  const species = getSpeciesEntries();
  const phone = getPhone();
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [sendError, setSendError] = useState<string | null>(null);
  // What to bring into view after a failed attempt: the first field to fix, or the message by the button.
  const [problem, setProblem] = useState<{ id: string; isField: boolean } | null>(null);
  const [slowSend, setSlowSend] = useState(false);
  const [started, setStarted] = useState(false);
  const [photos, setPhotos] = useState<FormPhoto[]>([]);
  const [photosBusy, setPhotosBusy] = useState(false);
  // Blocks a second tap before React re-renders the disabled button — one
  // request, one lead, one conversion.
  const sendingRef = useRef(false);
  const sentPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!problem) return;
    const target = document.getElementById(problem.id);
    if (!target) return;
    target.scrollIntoView({ block: problem.isField ? "center" : "nearest" });
    if (problem.isField) target.focus({ preventScroll: true });
  }, [problem]);

  useEffect(() => {
    if (status !== "submitting") return;
    const timer = setTimeout(() => setSlowSend(true), SLOW_SEND_MS);
    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (status !== "navigating") return;
    const timer = setTimeout(() => setStatus("sent"), SENT_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (status === "sent") sentPanelRef.current?.scrollIntoView({ block: "center" });
  }, [status]);

  /**
   * Sends the lead. With photos it goes as multipart so the JPEGs aren't
   * inflated. If that send fails for any reason other than a field the
   * customer needs to fix (upload refused, server or email error, no answer
   * within PHOTO_SEND_TIMEOUT_MS), the lead is re-sent without photos and the
   * email notes that photos were tried, so a photo problem never costs the
   * lead. Without photos it's the same JSON request as always.
   */
  async function postLead(payload: Record<string, unknown>): Promise<LeadResponse> {
    let body = payload;

    if (photos.length > 0) {
      const multipart = new FormData();
      multipart.append("payload", JSON.stringify(payload));
      photos.forEach((p, i) => multipart.append("photos", p.blob, `photo-${i + 1}.jpg`));
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), PHOTO_SEND_TIMEOUT_MS);
      try {
        const res = await fetch("/api/get-help", { method: "POST", body: multipart, signal: controller.signal });
        if ((res.headers.get("content-type") ?? "").includes("application/json")) {
          const result = (await res.json()) as LeadResponse;
          if (res.ok && result.ok) return result;
          // A field to fix fails the same way without photos — show it instead.
          if (result.errors && Object.keys(result.errors).length > 0) return { ...result, ok: false };
        }
      } catch {
        // No usable answer — fall back to sending the lead alone.
      } finally {
        clearTimeout(timeout);
      }
      body = { ...payload, photosFailed: true };
    }

    const res = await fetch("/api/get-help", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = (await res.json()) as LeadResponse;
    return res.ok ? result : { ...result, ok: false };
  }

  /** Shows what needs attention and brings it into view. */
  function showProblem(fieldErrors: LeadFieldErrors, message?: string) {
    const first = VALIDATED_FIELDS.find((field) => fieldErrors[field]);
    setErrors(fieldErrors);
    setSendError(first ? null : (message ?? DEFAULT_SEND_ERROR));
    setProblem({ id: first ?? "form-status", isField: Boolean(first) });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sendingRef.current || photosBusy) return;
    const data = new FormData(e.currentTarget);

    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      phoneType: String(data.get("phoneType") ?? ""),
      email: String(data.get("email") ?? ""),
      location: String(data.get("location") ?? ""),
      animal: String(data.get("animal") ?? ""),
      whereActivity: String(data.get("whereActivity") ?? ""),
      description: String(data.get("description") ?? ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") ?? ""),
    };

    trackEvent("form_submit");

    // The same check the server makes, so a missing field is flagged at once
    // instead of after uploading photos.
    const fieldErrors = validateLead(payload);
    if (Object.keys(fieldErrors).length > 0) {
      showProblem(fieldErrors);
      trackEvent("form_submit_error");
      return;
    }

    sendingRef.current = true;
    setStatus("submitting");
    setSlowSend(false);
    setErrors({});
    setSendError(null);

    try {
      const result = await postLead(payload);

      if (!result.ok) {
        showProblem(result.errors ?? {}, typeof result.error === "string" ? result.error : undefined);
        setStatus("idle");
        trackEvent("form_submit_error");
        sendingRef.current = false;
        return;
      }

      // Count a lead only when the server says it actually sent one. The spam
      // honeypot also answers ok:true, but without `delivered`. The conversion
      // is recorded here, once, before moving to the thank-you page (a
      // client-side navigation, so nothing in flight is cut off). The
      // thank-you page itself never records one.
      if (result.delivered === true) {
        trackEvent("form_submit_success");
        trackAdsConversion(ANALYTICS.googleAdsFormLeadSendTo);
      }
      setStatus("navigating");
      router.push(THANK_YOU_PATH);
    } catch {
      showProblem({});
      setStatus("idle");
      trackEvent("form_submit_error");
      sendingRef.current = false;
    }
  }

  /** A field's own message goes away as soon as the visitor changes it. */
  function clearFieldError(e: FormEvent<HTMLFormElement>) {
    const name = (e.target as HTMLInputElement).name;
    setErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name as keyof LeadFieldErrors];
      return next;
    });
  }

  if (status === "sent") {
    return (
      <div ref={sentPanelRef} className="rounded-sm border border-pine-100 bg-pine-50 p-8 text-center sm:p-10">
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
    // Loads the thank-you page ahead of time, so it appears the moment the request is sent.
    router.prefetch(THANK_YOU_PATH);
  }

  const busy = status !== "idle";
  const errorCount = Object.keys(errors).length;
  const errorSummary =
    errorCount === 1 && errors.consent
      ? "Please tick the box above, then press Get Help Now again."
      : "Please check the items marked above, then press Get Help Now again.";

  /** Ties a field to its message for screen readers. */
  function describedBy(field: keyof LeadFieldErrors) {
    return errors[field] ? { "aria-invalid": true, "aria-describedby": `${field}-error` } : {};
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstFocus} onChange={clearFieldError} noValidate>
      {/* Honeypot — hidden from real users, left blank by them. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <FormSection number={1} title="Your contact info">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name" error={errors.name} className="sm:col-span-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={FIELD_LIMITS.name}
              autoComplete="name"
              className={inputClass(!!errors.name)}
              {...describedBy("name")}
            />
          </Field>

          <div>
            <Field label="Phone number" htmlFor="phone" error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={FIELD_LIMITS.phone}
                autoComplete="tel"
                className={inputClass(!!errors.phone)}
                {...describedBy("phone")}
              />
            </Field>
            <fieldset className="mt-3">
              <legend className="mb-2 text-sm text-ink-700">
                Mobile or landline? <span className="text-stone-500">(optional)</span>
              </legend>
              <div className="flex gap-3">
                {PHONE_TYPES.map((type) => (
                  <label
                    key={type}
                    className="flex flex-1 cursor-pointer items-center gap-2.5 rounded-sm border border-stone-400 bg-bone-50 px-4 py-3 text-[15px] text-ink transition-colors hover:border-stone-500 has-[:checked]:border-pine-600 has-[:checked]:bg-pine-50"
                  >
                    <input type="radio" name="phoneType" value={type} className="h-4 w-4 shrink-0 accent-pine-600" />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <Field label="Email" htmlFor="email" error={errors.email} optional>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass(!!errors.email)}
              {...describedBy("email")}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection number={2} title="What's happening" last>
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
              maxLength={FIELD_LIMITS.description}
              rows={4}
              placeholder="e.g. Scratching in the attic in the early morning for the past two days."
              className={inputClass(!!errors.description)}
              {...describedBy("description")}
            />
          </Field>

          <div className="flex items-start gap-2.5 rounded-sm border border-wood-300 bg-wood-100/50 px-4 py-3 sm:col-span-2">
            <Illustration id="shield-home" className="mt-0.5 h-4 w-4 shrink-0 text-wood-700" />
            <p className="text-xs leading-relaxed text-wood-700">
              Only take photos from a safe place on the ground. Do not climb a ladder or get onto the roof.
            </p>
          </div>

          <div className="sm:col-span-2">
            <PhotoUpload photos={photos} onChange={setPhotos} onBusyChange={setPhotosBusy} disabled={busy} />
          </div>
        </div>
      </FormSection>

      <div className="mt-8">
        <label className="flex items-start gap-3 text-sm text-ink-700">
          <input
            id="consent"
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-stone-400 text-pine-600 accent-pine-600 focus-visible:outline-2 focus-visible:outline-pine-500"
            {...describedBy("consent")}
          />
          <span>
            I agree to be contacted by {BRAND.name} about my request. See our{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-charcoal">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-sm text-clay-500">
            {errors.consent}
          </p>
        )}
      </div>

      {(errorCount > 0 || sendError) && (
        <div
          id="form-status"
          role="alert"
          className="mt-5 flex flex-col gap-2 rounded-sm border border-clay-100 bg-clay-100/40 px-4 py-3"
        >
          <p className="text-sm text-clay-500">{errorCount > 0 ? errorSummary : sendError}</p>
          {errorCount === 0 && (
            <PhoneLink phone={phone} location="form-error" className="text-sm text-clay-500 hover:text-clay-600" />
          )}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-stone-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-700" aria-live="polite">
          {busy && slowSend ? "Still sending. Please keep this page open." : "Takes about a minute."}
        </p>
        <button
          type="submit"
          disabled={busy || photosBusy}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-pine-600 px-7 py-4 text-base font-medium text-bone-50 transition-colors hover:bg-pine-700 disabled:opacity-60"
        >
          {busy ? "Sending…" : "Get Help Now"}
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
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-clay-500">
          {error}
        </p>
      )}
    </div>
  );
}
