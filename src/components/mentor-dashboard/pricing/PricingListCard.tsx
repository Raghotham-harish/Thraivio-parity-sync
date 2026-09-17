import { Pencil, Star, Trash2 } from "lucide-react";

import type { PricingPlan } from "@/types/pricing";

interface PricingListCardProps {
  pricing: PricingPlan;

  onEdit: (pricing: PricingPlan) => void;

  onDelete: (pricing: PricingPlan) => void;
}

const PricingListCard = ({ pricing, onEdit, onDelete }: PricingListCardProps) => {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl border px-4 py-3 shadow-sm transition-colors ${
        pricing.popular ? "border-primary bg-[#EFF6FF]" : "border-border bg-card hover:bg-secondary/40"
      }`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-semibold text-foreground">{pricing.title}</h3>
          {pricing.popular && (
            <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" />
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">{pricing.description}</p>
      </div>

      <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
        {pricing.duration}
      </span>

      <p className="w-16 shrink-0 text-right text-sm font-bold text-foreground">
        ${pricing.price}
      </p>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(pricing)}
          aria-label="Edit plan"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(pricing)}
          aria-label="Delete plan"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PricingListCard;
