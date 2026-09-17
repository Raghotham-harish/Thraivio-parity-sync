import { Pencil, Star, Trash2 } from "lucide-react";

import type { PricingPlan } from "@/types/pricing";

interface PricingGridCardProps {
  pricing: PricingPlan;

  onEdit: (pricing: PricingPlan) => void;

  onDelete: (pricing: PricingPlan) => void;
}

const PricingGridCard = ({ pricing, onEdit, onDelete }: PricingGridCardProps) => {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm transition-all hover:shadow-md ${
        pricing.popular ? "border-primary bg-[#EFF6FF]" : "border-border bg-card"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">{pricing.title}</h3>
            {pricing.popular && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
                <Star className="h-3 w-3 fill-current" />
                Popular
              </span>
            )}
          </div>
          <p className="truncate text-xs text-muted-foreground">{pricing.duration}</p>
        </div>
        <p className="shrink-0 text-lg font-bold text-foreground">${pricing.price}</p>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{pricing.description}</p>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(pricing)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(pricing)}
          aria-label="Delete plan"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PricingGridCard;
