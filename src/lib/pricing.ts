export type PriceRow = {
  name: string;
  detail?: string;
  price: string;
};

export const PHYSICAL_THERAPY_PRICING: PriceRow[] = [
  { name: "Initial Evaluation", detail: "60 minutes", price: "$200" },
  { name: "Follow-Up Treatment", detail: "50 minutes", price: "$180" },
  { name: "5-Visit Follow-Up Package", price: "$850" },
];

export const WELLNESS_PRICING: PriceRow[] = [
  {
    name: "Individual Wellness / Personal Training",
    detail: "per session",
    price: "$180",
  },
];

export const TELEHEALTH_PRICING: PriceRow[] = [
  { name: "Initial Evaluation", price: "$180" },
  { name: "Follow-Up", price: "$150" },
];

/** Services quoted case by case rather than at a fixed rate. */
export const INQUIRE_PRICING = [
  {
    name: "Group Classes",
    body: "Small-group memberships available.",
    note: "Contact for current schedule and pricing.",
  },
  {
    name: "Home Visits",
    body: "Concierge physical therapy is available in select areas.",
    note: "Contact for availability and pricing.",
  },
];

export const PAYMENT_OPTIONS = [
  "Cash/check",
  "HSA/FSA",
  "Superbills available upon request",
];

export const CANCELLATION_POLICY = {
  notice: "Please provide at least 24 hours' notice when cancelling or rescheduling.",
  fee: "Late cancellations and no-shows are subject to a $50 fee.",
};
