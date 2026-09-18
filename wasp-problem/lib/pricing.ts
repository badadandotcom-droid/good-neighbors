export type PriceLineItem = {
  id: string;
  label: string;
  amount: number;
  qualifier: string;
  /** Shown as "+$65" rather than "$65": an add-on to the service price, not a price on its own. */
  addOn?: boolean;
  /** Supporting lines under the label, for the cases the headline figure doesn't cover. Each string is its own line; the first stands apart from the rest. */
  note?: readonly string[];
};

export const PRICING: readonly PriceLineItem[] = [
  { id: "visible-nest", label: "Visible / exposed nest", amount: 180, qualifier: "+ HST" },
  { id: "hidden-nest", label: "Hidden nest", amount: 220, qualifier: "+ HST" },
  { id: "additional-nest", label: "Each additional nest", amount: 80, qualifier: "+ HST" },
  {
    id: "ladder-fee",
    label: "Ladder service",
    amount: 65,
    addOn: true,
    qualifier: "+ HST",
    note: [
      "For nests or entry points 10–35 ft high.",
      "Under 10 ft: included in your service price.",
      "Over 35 ft: quoted separately.",
    ],
  },
] as const;

export const NEST_TYPE_EXPLANATION = {
  visible:
    "Visible means the nest itself can be seen — for example, hanging under an eave or attached to a wall.",
  hidden:
    "Hidden means wasps are entering and leaving through an opening — a soffit, wall void, or hole — but the nest itself isn't visible from outside.",
} as const;
