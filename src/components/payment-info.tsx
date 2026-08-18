import Link from "next/link";

import { PAYMENT_OPTIONS } from "@/lib/pricing";

/**
 * `detailed` renders the full private-pay explanation for the pricing page.
 * Without it you get the condensed version used on the home page.
 */
export default function PaymentInfo({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className={detailed ? "text-3xl font-bold" : "text-center text-3xl font-bold"}>
        Private-Pay Care
      </h2>

      <p className="text-muted-foreground mt-4 leading-relaxed">
        Haidee Sui Physical Therapy is a cash-based practice. This allows
        treatment decisions to be guided by your goals and clinical needs rather
        than insurance restrictions.
      </p>

      <div className="mt-6">
        <p className="font-semibold">Payment Options</p>
        <ul className="text-muted-foreground mt-2 space-y-1">
          {PAYMENT_OPTIONS.map((option) => (
            <li key={option}>• {option}</li>
          ))}
        </ul>
      </div>

      {detailed ? (
        <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
          <p>
            Superbills may be submitted to your insurance company for possible
            out-of-network reimbursement.
          </p>
          <p>
            Coverage and reimbursement depend on your individual insurance plan.
          </p>
        </div>
      ) : (
        <p className="text-muted-foreground mt-6 leading-relaxed">
          Superbills may be submitted to your insurance company for possible
          out-of-network reimbursement.{" "}
          <Link
            href="/pricing"
            className="text-accent hover:text-accent/80 font-semibold underline-offset-4 transition-colors hover:underline"
          >
            See full pricing and payment details →
          </Link>
        </p>
      )}
    </div>
  );
}
