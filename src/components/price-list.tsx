import type { PriceRow } from "@/lib/pricing";

export default function PriceList({ rows }: { rows: PriceRow[] }) {
  return (
    <ul className="divide-border divide-y">
      {rows.map((row) => (
        <li
          key={row.name}
          className="flex items-baseline justify-between gap-6 py-3"
        >
          <div>
            <p className="font-medium">{row.name}</p>
            {row.detail && (
              <p className="text-muted-foreground text-sm">{row.detail}</p>
            )}
          </div>
          <p className="text-accent shrink-0 font-semibold">{row.price}</p>
        </li>
      ))}
    </ul>
  );
}
