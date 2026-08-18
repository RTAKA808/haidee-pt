import { CANCELLATION_POLICY } from "@/lib/pricing";

/**
 * An answer is a sequence of blocks rather than plain strings, since several
 * answers mix prose with bullet lists and a link out to another page.
 */
export type FaqBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "link"; href: string; label: string };

export type FaqItem = {
  question: string;
  answer: FaqBlock[];
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need a doctor's referral for physical therapy?",
    answer: [
      {
        kind: "p",
        text: "California allows direct access to physical therapy, which means you can begin physical therapy without a physician's referral. Under California direct-access regulations, treatment without a physician diagnosis is limited to 45 calendar days or 12 visits, whichever occurs first. If continued physical therapy is appropriate beyond that point, a diagnosis from an appropriate licensed healthcare provider will be needed.",
      },
      {
        kind: "p",
        text: "If I feel that your symptoms warrant additional medical evaluation at any point, I will discuss this with you and help guide you toward the appropriate next step.",
      },
    ],
  },
  {
    question: "What should I expect at my first appointment?",
    answer: [
      {
        kind: "p",
        text: "Your initial evaluation is a 60-minute, one-on-one session focused on understanding the bigger picture.",
      },
      {
        kind: "p",
        text: "We'll discuss your current concerns, medical and injury history, previous treatments, daily activities, and goals. From there, I'll perform a physical and movement assessment to better understand what may be contributing to your symptoms or limitations.",
      },
      {
        kind: "p",
        text: "Your first visit will also include treatment when appropriate, education, and a discussion of your individualized plan moving forward.",
      },
    ],
  },
  {
    question: "How often will I need physical therapy?",
    answer: [
      { kind: "p", text: "There is no one-size-fits-all treatment schedule." },
      {
        kind: "p",
        text: "The frequency and duration of care will depend on your condition, goals, response to treatment, and ability to work independently between visits. After your evaluation, we'll discuss a recommended plan together and adjust it as you progress.",
      },
      {
        kind: "p",
        text: "My goal is not to keep you in physical therapy indefinitely, but to help you develop the knowledge, strength, and confidence to manage your health as independently as possible.",
      },
    ],
  },
  {
    question: "What types of conditions do you treat?",
    answer: [
      {
        kind: "p",
        text: "I work with a wide range of orthopedic and musculoskeletal concerns, including:",
      },
      {
        kind: "ul",
        items: [
          "Acute and chronic pain",
          "Neck and back pain",
          "Shoulder, hip, knee, and other joint concerns",
          "Sports and recreational injuries",
          "Post-surgical rehabilitation",
          "Mobility and strength limitations",
          "Balance concerns",
          "Return to sport or activity",
          "Long-standing or recurring musculoskeletal issues",
        ],
      },
      {
        kind: "p",
        text: "I work with people across many ages and activity levels, from young athletes to older adults.",
      },
      {
        kind: "p",
        text: "If you're unsure whether your particular concern is appropriate for my practice, a free 15-minute consultation is a great place to start.",
      },
    ],
  },
  {
    question: "What does treatment typically include?",
    answer: [
      {
        kind: "p",
        text: "Every treatment plan is individualized, so no two sessions will necessarily look the same.",
      },
      { kind: "p", text: "Depending on your needs, treatment may include:" },
      {
        kind: "ul",
        items: [
          "Fascial Counterstrain",
          "Other hands-on manual therapy techniques",
          "Soft tissue and joint techniques",
          "Mobility exercises",
          "Strengthening",
          "Balance and coordination training",
          "Neuromuscular re-education",
          "Movement retraining",
          "Patient education",
          "Individualized home exercises and self-management strategies",
        ],
      },
      {
        kind: "p",
        text: "My approach combines hands-on treatment with movement, exercise, and education to address both your current symptoms and your longer-term goals.",
      },
    ],
  },
  {
    question: "What is Fascial Counterstrain?",
    answer: [
      {
        kind: "p",
        text: "Fascial Counterstrain (FCS) is a gentle, hands-on manual therapy approach used to assess and address areas of dysfunction throughout the body.",
      },
      {
        kind: "p",
        text: "Rather than focusing only on the location where symptoms are felt, FCS takes a whole-body perspective and considers how different tissues and systems may be contributing to pain and movement limitations.",
      },
      {
        kind: "p",
        text: "Fascial Counterstrain is one tool within my broader approach to physical therapy and is incorporated when appropriate based on your individual presentation.",
      },
      {
        kind: "link",
        href: "/counterstrain",
        label: "Learn more about Fascial Counterstrain →",
      },
    ],
  },
  {
    question: "Is Fascial Counterstrain appropriate for everyone?",
    answer: [
      {
        kind: "p",
        text: "Not necessarily. Every person and condition is different.",
      },
      {
        kind: "p",
        text: "Your treatment is based on your individual evaluation, goals, medical history, and response to care. Fascial Counterstrain may be incorporated when appropriate, but it is not the only treatment technique I use.",
      },
      {
        kind: "p",
        text: "Treatment may also include other forms of manual therapy, movement, strengthening, balance training, education, and self-management strategies.",
      },
    ],
  },
  {
    question: "Do you only provide hands-on treatment?",
    answer: [
      {
        kind: "p",
        text: "No. While manual therapy is an important part of my practice, my approach extends beyond the treatment table.",
      },
      {
        kind: "p",
        text: "Hands-on treatment may help address pain or movement restrictions, while exercise and movement help us build on those changes through improved strength, mobility, balance, and function.",
      },
      {
        kind: "p",
        text: "My goal is to help you progress toward greater independence rather than becoming dependent on passive treatment.",
      },
    ],
  },
  {
    question: "Do you accept insurance?",
    answer: [
      {
        kind: "p",
        text: "Haidee Sui Physical Therapy is a cash-based, out-of-network practice and is not contracted as an in-network provider with insurance companies. Payment is due at the time of service.",
      },
      {
        kind: "p",
        text: "This model allows your treatment to be guided by your individual needs and goals rather than insurance restrictions or predetermined visit limitations.",
      },
      {
        kind: "p",
        text: "Upon request, I can provide a superbill containing the information you may need to submit a claim to your insurance company for potential out-of-network reimbursement.",
      },
      {
        kind: "p",
        text: "Reimbursement is determined entirely by your individual insurance plan and is not guaranteed.",
      },
      {
        kind: "p",
        text: "I recommend contacting your insurance company directly to ask about your out-of-network physical therapy benefits before beginning care if reimbursement is important to you.",
      },
    ],
  },
  {
    question: "Can I use my HSA or FSA?",
    answer: [
      {
        kind: "p",
        text: "HSA and FSA funds may generally be used for eligible physical therapy services.",
      },
      {
        kind: "p",
        text: "Eligibility for individual expenses is ultimately determined by your plan, so please check with your HSA/FSA administrator if you have questions about coverage.",
      },
    ],
  },
  {
    question: "What are your physical therapy rates?",
    answer: [
      { kind: "p", text: "Initial Evaluation — $200 (60 minutes)" },
      { kind: "p", text: "Follow-Up Treatment — $180 (45 minutes)" },
      {
        kind: "p",
        text: "5-Visit Follow-Up Package — $850 ($170 per visit)",
      },
      {
        kind: "p",
        text: "Packages apply to follow-up visits and must be used within the designated package period.",
      },
      { kind: "link", href: "/pricing", label: "View Full Pricing →" },
    ],
  },
  {
    // Shares its text with the /pricing page so the two cannot drift apart.
    question: "What is your cancellation policy?",
    answer: [
      { kind: "p", text: CANCELLATION_POLICY.notice },
      { kind: "p", text: CANCELLATION_POLICY.fee },
    ],
  },
  {
    question: "Do I have to be injured to work with you?",
    answer: [
      { kind: "p", text: "No." },
      {
        kind: "p",
        text: "Physical therapy is appropriate when there is a condition requiring skilled rehabilitation, but I also offer wellness and personal training services for people who want professional guidance with exercise, strength, mobility, balance, or maintaining an active lifestyle.",
      },
      {
        kind: "p",
        text: "You do not need to be experiencing pain or recovering from an injury to participate in wellness services.",
      },
    ],
  },
  {
    question:
      "What's the difference between physical therapy and wellness/personal training?",
    answer: [
      {
        kind: "p",
        text: "Physical therapy focuses on the evaluation and treatment of an injury, pain, functional limitation, or other condition requiring skilled rehabilitation.",
      },
      {
        kind: "p",
        text: "Wellness and personal training focus on fitness, strength, mobility, movement, and long-term health rather than treatment of a medical condition.",
      },
      {
        kind: "p",
        text: "Wellness can also provide a natural next step for someone who has completed physical therapy but would like continued guidance as they become stronger and more independent.",
      },
    ],
  },
];
