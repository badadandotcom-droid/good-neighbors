export type PriceLineItem = {
  id: string;
  label: string;
  amount: number;
  /** True for the rows that stack on top of a base price. No longer shown with a "+" in the table — plain numbers align better in a right-aligned column — but still kept separate so the FAQ and any future UI can describe them as add-ons if needed. */
  addOn?: boolean;
  qualifier: string;
  /** Supporting lines under the label, for the cases the headline figure doesn't cover. Each string is its own line; the first stands apart from the rest. */
  note?: readonly string[];
};

export const PRICING: readonly PriceLineItem[] = [
  { id: "visible-nest", label: "Visible / exposed nest", amount: 210, qualifier: "" },
  { id: "hidden-nest", label: "Hidden nest", amount: 250, qualifier: "" },
  { id: "additional-nest", label: "Each additional nest", amount: 100, addOn: true, qualifier: "" },
  {
    id: "ladder-fee",
    label: "Ladder fees",
    amount: 75,
    addOn: true,
    qualifier: "",
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
