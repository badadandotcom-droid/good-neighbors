"use client";

import { useActionState, useEffect } from "react";
import { submitLead } from "@/app/actions";
import { trackEvent } from "@/lib/analytics";
import type { LeadFields, LeadFormState } from "@/lib/leads";
import { PHONE_LOCAL, PHONE_TOLLFREE } from "@/lib/site";

const INITIAL: LeadFormState = { status: "idle" };

const INPUT =
  "mt-1.5 block w-full rounded-[0.625rem] border-[1.5px] border-field bg-white px-3.5 py-3 text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none aria-[invalid=true]:border-red-700";
const LABEL = "block text-sm font-bold text-ink";
const HINT = "font-normal text-muted";
const ERROR = "mt-1.5 text-sm font-semibold text-red-700";

/**
 * The online request form — for visitors who won't phone (late at night, at
 * work, or just phone-shy). Rendered only through LeadFormSection, which hides
 * it until delivery is configured. Photos are pointed at the local number's
 * texts rather than uploaded here: that keeps the form light on a phone, and
 * SMS only ever goes to PHONE_LOCAL.
 */
export function LeadForm({ page }: { page: string }) {
  const [state, formAction, pending] = useActionState(submitLead, INITIAL);

  useEffect(() => {
    if (state.status === "sent") trackEvent("lead_form", { location: page });
  }, [state, page]);

  if (state.status === "sent") {
    return (
      <div role="status" className="card px-6 py-9 text-center sm:px-10">
        <p className="font-display text-2xl font-extrabold">Thanks{state.name ? `, ${state.name}` : ""} — request received.</p>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
          We&apos;ll {state.reply === "text" ? "text" : "call"} you at {state.phone} as soon as we&apos;re
          free, day or night. If there&apos;s a photo of the nest area, text it
          to{" "}
          <a href={PHONE_LOCAL.smsHref} className="font-semibold text-ink underline decoration-yellow-deep decoration-2 underline-offset-4">
            {PHONE_LOCAL.display}
          </a>
          .
        </p>
      </div>
    );
  }

  const values: Partial<LeadFields> = state.status === "idle" ? {} : state.values;
  const errors = state.status === "invalid" ? state.errors : {};

  return (
    <form action={formAction} className="card px-5 py-7 text-left sm:px-8 sm:py-9">
      <input type="hidden" name="page" value={page} />
      {/* Honeypot — off-screen and skipped by keyboard and screen readers; see app/actions.ts. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={LABEL}>
            Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            className={INPUT}
          />
          {errors.name && <p id="lead-name-error" className={ERROR}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="lead-phone" className={LABEL}>
            Phone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
            inputMode="tel"
            defaultValue={values.phone}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "lead-phone-error" : undefined}
            className={INPUT}
          />
          {errors.phone && <p id="lead-phone-error" className={ERROR}>{errors.phone}</p>}
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={LABEL}>How should we reply?</legend>
        <div className="mt-1.5 flex gap-3">
          {(
            [
              ["text", "Text me"],
              ["call", "Call me"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className="flex min-h-12 flex-1 cursor-pointer items-center gap-2.5 rounded-[0.625rem] border-[1.5px] border-field bg-white px-3.5 text-base font-semibold has-[:checked]:border-ink has-[:checked]:bg-yellow-tint"
            >
              <input
                type="radio"
                name="reply"
                value={value}
                defaultChecked={(values.reply ?? "text") === value}
                className="h-4 w-4 accent-black"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="lead-address" className={LABEL}>
          Address or nearest intersection <span className={HINT}>(optional)</span>
        </label>
        <input
          id="lead-address"
          name="address"
          type="text"
          maxLength={200}
          autoComplete="street-address"
          defaultValue={values.address}
          className={INPUT}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="lead-details" className={LABEL}>
          What are you seeing?
        </label>
        <textarea
          id="lead-details"
          name="details"
          required
          rows={4}
          maxLength={2000}
          placeholder="e.g. Wasps going in and out under the back soffit, about 12 ft up"
          defaultValue={values.details}
          aria-invalid={errors.details ? true : undefined}
          aria-describedby={errors.details ? "lead-details-error" : undefined}
          className={INPUT}
        />
        {errors.details && <p id="lead-details-error" className={ERROR}>{errors.details}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="lead-email" className={LABEL}>
          Email <span className={HINT}>(optional)</span>
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          maxLength={200}
          autoComplete="email"
          defaultValue={values.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "lead-email-error" : undefined}
          className={INPUT}
        />
        {errors.email && <p id="lead-email-error" className={ERROR}>{errors.email}</p>}
      </div>

      {state.status === "failed" && (
        <p role="alert" className="mt-6 rounded-[0.625rem] border-[1.5px] border-red-700 bg-white px-4 py-3 text-sm font-semibold text-red-700">
          Sorry — your request didn&apos;t go through. Please try again, or call {PHONE_TOLLFREE.display} or
          text {PHONE_LOCAL.display}.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary mt-7 min-h-14 w-full px-7 py-4 text-lg disabled:cursor-wait"
      >
        {pending ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
