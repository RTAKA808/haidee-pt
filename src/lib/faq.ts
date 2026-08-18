export type FaqItem = {
  question: string;
  /** Each string renders as its own paragraph. */
  answer: string[];
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need a referral?",
    answer: [
      "California allows patients to begin physical therapy through direct access, subject to state requirements.",
    ],
  },
  {
    question: "Do you take insurance?",
    answer: [
      "Haidee Sui Physical Therapy is a private-pay practice and is not contracted with insurance companies.",
      "Superbills are available upon request.",
    ],
  },
  {
    question: "Can I use HSA or FSA funds?",
    answer: [
      "Eligible physical therapy services may generally be paid for using HSA or FSA funds.",
    ],
  },
  {
    question: "What should I expect at my first appointment?",
    answer: [
      "Your initial visit includes a detailed conversation about your concerns and goals, a physical and movement assessment, treatment when appropriate, and development of your individualized plan.",
    ],
  },
  {
    question: "How often will I need treatment?",
    answer: [
      "Frequency depends on your goals, condition, response to treatment, and ability to work independently between visits.",
      "We'll determine a recommended plan together after your evaluation.",
    ],
  },
  {
    question: "What is your cancellation policy?",
    answer: [
      "Please provide at least 24 hours' notice when cancelling or rescheduling.",
      "Late cancellations and no-shows are subject to a $50 fee.",
    ],
  },
];
