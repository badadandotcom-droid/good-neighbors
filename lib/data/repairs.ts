/**
 * Damage repair — the repairs the owner has confirmed Good Neighbors does
 * (October 2026). Name only these on the site; ask the owner before adding
 * any other repair type. Every repair is matched to the home's existing
 * materials and colours (owner-confirmed).
 *
 * Repair talk stays limited to the spot the animal used and the damage it
 * caused. Whole-home prevention ("block and lock") is deliberately not
 * offered on public pages — see PLACEHOLDERS.md.
 */
export const DAMAGE_REPAIR_PATH = "/wildlife/damage-repair";

export interface RepairService {
  name: string;
  detail: string;
}

export const REPAIR_SERVICES: RepairService[] = [
  { name: "Roofs", detail: "Torn shingles and damaged roof boards repaired." },
  { name: "Soffits", detail: "Soffits repaired or replaced." },
  { name: "Fascia boards", detail: "Chewed or pulled-away fascia repaired." },
  { name: "Roof vents", detail: "Torn roof vents repaired or replaced." },
  { name: "Chimneys", detail: "Chimney caps installed and chimneys screened off." },
  { name: "Vent covers", detail: "Covers and screens for dryer, bathroom and attic vents." },
  { name: "Eavestroughs", detail: "Eavestroughs repaired where animals have damaged them." },
  { name: "Siding", detail: "Damaged siding repaired." },
  { name: "Attic insulation", detail: "Soiled or flattened insulation removed and replaced." },
  { name: "Attic cleanup", detail: "Droppings and nesting material cleaned out." },
  { name: "Walls and ceilings", detail: "Drywall repaired inside the home." },
  { name: "Decks, porches and sheds", detail: "Ground sealed with wire mesh dug into the soil." },
];
