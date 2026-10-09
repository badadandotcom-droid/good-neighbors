/**
 * Client-only photo processing for the Get Help form. Loaded with a dynamic
 * import the first time someone adds a photo, so the contact page itself
 * stays light.
 *
 * Every photo is decoded, rotated upright, scaled to at most MAX_EDGE px on
 * its long side and re-encoded as JPEG, so what reaches the server is always
 * a small, plain JPEG whatever the phone produced (iPhone HEIC included).
 */
import { PHOTO_LIMITS } from "@/lib/photos/limits";

const MAX_EDGE = 1600;
/** Tried in order until the JPEG fits under PHOTO_LIMITS.maxBytesEach. */
const ATTEMPTS: { edge: number; quality: number }[] = [
  { edge: MAX_EDGE, quality: 0.82 },
  { edge: MAX_EDGE, quality: 0.7 },
  { edge: 1280, quality: 0.7 },
  { edge: 1024, quality: 0.65 },
];

export class PhotoError extends Error {}

function isHeic(file: File): boolean {
  return /image\/hei[cf]/i.test(file.type) || /\.hei[cf]$/i.test(file.name);
}

async function decodeWithBrowser(blob: Blob): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(blob, { imageOrientation: "from-image" });
    } catch {
      // fall through to <img>, which some browsers decode more formats with
    }
  }
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function decode(file: File): Promise<ImageBitmap | HTMLImageElement> {
  try {
    return await decodeWithBrowser(file);
  } catch (error) {
    // Safari reads HEIC itself; other browsers need the converter, which is
    // only downloaded when this actually happens.
    if (!isHeic(file)) throw error;
    const { default: heic2any } = await import("heic2any");
    const converted = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.9 });
    return decodeWithBrowser(Array.isArray(converted) ? converted[0] : converted);
  }
}

function encode(source: ImageBitmap | HTMLImageElement, edge: number, quality: number): Promise<Blob> {
  const w = "naturalWidth" in source ? source.naturalWidth : source.width;
  const h = "naturalHeight" in source ? source.naturalHeight : source.height;
  const scale = Math.min(1, edge / Math.max(w, h));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(w * scale));
  canvas.height = Math.max(1, Math.round(h * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) return Promise.reject(new PhotoError("no canvas"));
  ctx.fillStyle = "#fff"; // transparent PNGs become white, not black
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new PhotoError("encode failed"))), "image/jpeg", quality),
  );
}

/** Returns a small JPEG ready to send, or throws PhotoError with nothing sent. */
export async function processPhoto(file: File): Promise<Blob> {
  if (file.size > PHOTO_LIMITS.maxOriginalBytes) throw new PhotoError("too big");

  let source: ImageBitmap | HTMLImageElement;
  try {
    source = await decode(file);
  } catch {
    throw new PhotoError("unreadable");
  }

  try {
    for (const { edge, quality } of ATTEMPTS) {
      const blob = await encode(source, edge, quality);
      if (blob.size <= PHOTO_LIMITS.maxBytesEach) return blob;
    }
    throw new PhotoError("too big after resize");
  } finally {
    if ("close" in source) source.close();
  }
}
