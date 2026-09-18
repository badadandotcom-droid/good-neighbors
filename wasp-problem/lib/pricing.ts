export type PriceLineItem = {
  id: string;
  label: string;
  amount: number;
  qualifier: string;
  /** One short supporting line under the label, for the cases the headline figure doesn't cover. */
  note?: string;
};

export const PRICING: readonly PriceLineItem[] = [
  { id: "visible-nest", label: "Visible / exposed nest", amount: 180, qualifier: "+ HST" },
  { id: "hidden-nest", label: "Hidden nest", amount: 220, qualifier: "+ HST" },
  { id: "additional-nest", label: "Each additional nest", amount: 80, qualifier: "+ HST" },
  {
    id: "ladder-fee",
    label: "Nest height 10–35 ft",
    amount: 65,
    qualifier: "+ HST",
    note: "Access under 10 ft is included. Over 35 ft: $150 + HST ladder fee.",
  },
] as const;

export const NEST_TYPE_EXPLANATION = {
  visible:
    "Visible means the nest itself can be seen — for example, hanging under an eave or attached to a wall.",
  hidden:
    "Hidden means wasps are entering and leaving through an opening — a soffit, wall void, or hole — but the nest itself isn't visible from outside.",
} as const;
