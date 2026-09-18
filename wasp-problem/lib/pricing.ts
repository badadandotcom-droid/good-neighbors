export type PriceLineItem = {
  id: string;
  label: string;
  /** A dollar figure, or "TBD" for a line item that is quoted per job — some ladder work costs far more than a flat fee could cover. */
  amount: number | "TBD";
  qualifier: string;
};

export const PRICING: readonly PriceLineItem[] = [
  { id: "visible-nest", label: "Visible / exposed nest", amount: 180, qualifier: "+ HST" },
  { id: "hidden-nest", label: "Hidden nest", amount: 220, qualifier: "+ HST" },
  { id: "additional-nest", label: "Each additional nest", amount: 80, qualifier: "+ HST" },
  { id: "ladder-fee", label: "Ladder fee, when required", amount: "TBD", qualifier: "to be discussed" },
] as const;

export const NEST_TYPE_EXPLANATION = {
  visible:
    "Visible means the nest itself can be seen — for example, hanging under an eave or attached to a wall.",
  hidden:
    "Hidden means wasps are entering and leaving through an opening — a soffit, wall void, or hole — but the nest itself isn't visible from outside.",
} as const;
