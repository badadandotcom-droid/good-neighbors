"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Illustration } from "@/components/illustrations/Illustration";
import { PHOTO_LIMITS } from "@/lib/photos/limits";

export interface FormPhoto {
  id: string;
  /** Shrunk JPEG, ready to send. */
  blob: Blob;
  previewUrl: string;
}

/**
 * Optional photos for the Get Help form. No `capture` attribute, so phones
 * offer both the camera and the photo library. Each photo is shrunk to a
 * small JPEG in the browser (lib/photos/processPhoto.ts, loaded only when a
 * photo is first added) and sent with the lead email — nothing is stored.
 */
export function PhotoUpload({
  photos,
  onChange,
  onBusyChange,
  disabled,
}: {
  photos: FormPhoto[];
  onChange: (photos: FormPhoto[]) => void;
  onBusyChange: (busy: boolean) => void;
  disabled?: boolean;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const photosRef = useRef(photos);
  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);

  // Free preview memory when the form unmounts (e.g. after a successful send).
  useEffect(() => () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.previewUrl)), []);

  async function addFiles(list: FileList | null) {
    if (!list || list.length === 0) return;
    const room = PHOTO_LIMITS.maxCount - photos.length;
    const picked = Array.from(list).slice(0, Math.max(0, room));
    const skippedForCount = list.length - picked.length;
    if (picked.length === 0) {
      setNotice(`You can add up to ${PHOTO_LIMITS.maxCount} photos.`);
      return;
    }

    setBusy(true);
    onBusyChange(true);
    setNotice(null);

    const added: FormPhoto[] = [];
    let failed = 0;
    let overTotal = 0;
    let total = photos.reduce((sum, p) => sum + p.blob.size, 0);
    try {
      const { processPhoto } = await import("@/lib/photos/processPhoto");
      for (const file of picked) {
        try {
          const blob = await processPhoto(file);
          if (total + blob.size > PHOTO_LIMITS.maxBytesTotal) {
            overTotal++;
            continue;
          }
          total += blob.size;
          added.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, blob, previewUrl: URL.createObjectURL(blob) });
        } catch {
          failed++;
        }
      }
    } catch {
      failed = picked.length; // the processing code itself failed to load
    }

    if (added.length) onChange([...photos, ...added]);

    const messages: string[] = [];
    if (failed) {
      messages.push(
        failed === 1
          ? "One photo couldn't be added. It may be too large or in a format we can't read."
          : `${failed} photos couldn't be added. They may be too large or in a format we can't read.`,
      );
    }
    if (overTotal) messages.push("That's as many photos as we can send at once.");
    if (skippedForCount) messages.push(`You can add up to ${PHOTO_LIMITS.maxCount} photos.`);
    if (messages.length) messages.push("You can still send your request.");
    setNotice(messages.length ? messages.join(" ") : null);

    setBusy(false);
    onBusyChange(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  function remove(id: string) {
    const photo = photos.find((p) => p.id === id);
    if (photo) URL.revokeObjectURL(photo.previewUrl);
    onChange(photos.filter((p) => p.id !== id));
    setNotice(null);
  }

  const full = photos.length >= PHOTO_LIMITS.maxCount;

  return (
    <div>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/*,.heic,.heif"
        multiple
        className="sr-only"
        tabIndex={-1}
        disabled={disabled || busy || full}
        onChange={(e) => addFiles(e.target.files)}
      />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled || busy || full}
          className="inline-flex items-center gap-2 rounded-sm border-2 border-pine-600 bg-bone-50 px-5 py-3 text-[15px] font-medium text-pine-700 transition-colors hover:bg-pine-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Illustration id="camera" weight="bold" className="h-5 w-5" />
          {busy ? "Adding photos…" : "Add photos"}
        </button>
        <span className="text-xs text-stone-500">
          Optional · up to {PHOTO_LIMITS.maxCount} photos
          {photos.length > 0 && ` · ${photos.length} added`}
        </span>
      </div>

      {photos.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-3" aria-label="Photos added">
          {photos.map((photo, i) => (
            <li key={photo.id} className="relative h-20 w-20 overflow-hidden rounded-sm border border-stone-300 bg-stone-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.previewUrl} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => remove(photo.id)}
                disabled={disabled}
                aria-label={`Remove photo ${i + 1}`}
                className="absolute top-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-charcoal/85 text-base leading-none text-bone-50 hover:bg-charcoal"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}

      {notice && (
        <p role="status" className="mt-3 text-sm leading-relaxed text-clay-500">
          {notice}
        </p>
      )}
    </div>
  );
}
