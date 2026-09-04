"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Illustration } from "@/components/illustrations/Illustration";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Photo capture UX. Selection, drag-and-drop, thumbnail preview, and
 * removal are fully functional. What's NOT connected: actual upload to
 * storage. There's no backend bound yet (see PLACEHOLDERS.md), so files
 * stay client-side and are intentionally excluded from the form submission
 * payload rather than silently failing to send. Wire this to object storage
 * (S3/Cloudinary/etc.) and include the resulting URLs in the submission
 * payload in app/api/get-help/route.ts when ready.
 */
export function PhotoUpload({
  hint,
  maxFiles = 6,
  onFilesChange,
}: {
  hint: string;
  maxFiles?: number;
  onFilesChange?: (files: File[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  useEffect(() => {
    onFilesChange?.(files);
  }, [files, onFilesChange]);

  function addFiles(list: FileList | null) {
    if (!list) return;
    const incoming = Array.from(list).filter((f) => f.type.startsWith("image/"));
    setFiles((prev) => {
      const next = [...prev, ...incoming].slice(0, maxFiles);
      if (incoming.length) trackEvent("photo_added", { count: incoming.length });
      return next;
    });
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    trackEvent("photo_removed");
  }

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        Photos
      </label>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed px-6 py-7 text-center transition-colors",
          dragActive ? "border-pine-500 bg-pine-50" : "border-stone-400 bg-bone-50 hover:border-stone-500",
        )}
      >
        <Illustration id="camera" className="h-6 w-6 text-stone-500" />
        <p className="text-sm text-ink-700">
          <span className="font-medium text-pine-600">Add photos</span> or drag them here
        </p>
        <p className="text-xs text-stone-500">
          {hint} — up to {maxFiles} images
        </p>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {files.map((file, i) => (
            <Thumbnail key={`${file.name}-${i}`} file={file} onRemove={() => removeFile(i)} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Thumbnail({ file, onRemove }: { file: File; onRemove: () => void }) {
  const url = useMemo(() => URL.createObjectURL(file), [file]);

  useEffect(() => {
    return () => URL.revokeObjectURL(url);
  }, [url]);

  return (
    <li className="relative aspect-square overflow-hidden rounded-sm border border-stone-300 bg-stone-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${file.name}`}
        className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal/80 text-xs leading-none text-bone-50"
      >
        &times;
      </button>
    </li>
  );
}
