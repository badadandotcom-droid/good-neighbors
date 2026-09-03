import type { PhotoSlot, PhotoSlotId } from "@/lib/types";

/**
 * ============================================================================
 * PHOTOGRAPHY SLOT SYSTEM
 * ============================================================================
 * No production photography exists yet (see PLACEHOLDERS.md). Rather than
 * scatter one-off placeholder captions across the codebase, every photo
 * spot on the site is typed to one of these slots. This list doubles as the
 * shoot brief for the eventual Good Neighbors photography session — hand it
 * to a photographer as-is. `<PhotoPlaceholder slot="...">` renders the slot
 * label + brief as its placeholder caption automatically.
 *
 * Deliberately excluded: cages, traps, frightened animals, staged
 * handshakes, crossed-arms contractor portraits. The brief throughout is
 * "home protection and professional problem solving," not animal capture.
 * ============================================================================
 */
export const PHOTOGRAPHY_SLOTS: Record<PhotoSlotId, PhotoSlot> = {
  arrival: {
    id: "arrival",
    label: "Arrival",
    brief: "A technician arriving at a well-kept residential property, branded vehicle visible, natural late-day light.",
  },
  inspection: {
    id: "inspection",
    label: "Inspection",
    brief: "A technician on a ladder or roof edge, closely inspecting a roofline, soffit, or vent — focused, unposed.",
  },
  conversation: {
    id: "conversation",
    label: "Conversation",
    brief: "A technician speaking naturally with a homeowner on the porch or driveway — relaxed body language, no forced smiles.",
  },
  crew: {
    id: "crew",
    label: "Crew at work",
    brief: "Two technicians working together on an exterior entry-point repair — genuine collaboration, mid-task.",
  },
  vehicle: {
    id: "vehicle",
    label: "Vehicle",
    brief: "The clean, branded Good Neighbors vehicle parked in a residential driveway or street.",
  },
  detail: {
    id: "detail",
    label: "Detail",
    brief: "A close, careful shot of hands doing precise work — sealing an entry point, examining a vent, handling equipment.",
  },
  streetscape: {
    id: "streetscape",
    label: "Streetscape",
    brief: "A representative residential street in this market — real housing stock and character, no landmark or skyline shots.",
  },
  "team-portrait": {
    id: "team-portrait",
    label: "Team portrait",
    brief: "A candid, environmental portrait of Good Neighbors people — on-site, in context, not a posed studio headshot.",
  },
};

export function getPhotoSlot(id: PhotoSlotId): PhotoSlot {
  return PHOTOGRAPHY_SLOTS[id];
}

/**
 * Real production photography, keyed by slot. Once a slot has an entry
 * here, every `<PhotoPlaceholder slot="...">` instance using it renders
 * the real photo instead of the synthetic placeholder — no call-site
 * changes needed. Add entries here as approved photos come in.
 */
export const REAL_PHOTOS: Partial<Record<PhotoSlotId, string>> = {
  inspection: "/images/inspection.png",
  conversation: "/images/conversation.png",
  detail: "/images/detail.png",
};
