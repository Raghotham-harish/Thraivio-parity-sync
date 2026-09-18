import { Pencil, Trash2, Users } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Company } from "@/types/admin-company";

interface CompanyGridCardProps {
  company: Company;

  onView: (company: Company) => void;

  onEdit: (company: Company) => void;

  onDelete: (company: Company) => void;
}

const statusVariant: Record<Company["status"], StatusBadgeVariant> = {
  active: "success",
  pending: "warning",
  suspended: "error",
};

const planLabel: Record<Company["plan"], string> = {
  starter: "Starter",
  growth: "Growth",
  enterprise: "Enterprise",
};

const CompanyGridCard = ({ company, onView, onEdit, onDelete }: CompanyGridCardProps) => {
  const seatsPct = company.seatsPurchased
    ? Math.round((company.seatsUsed / company.seatsPurchased) * 100)
    : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Company + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <img
            src={company.logoUrl}
            alt={company.name}
            className="h-9 w-9 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{company.name}</p>
            <p className="truncate text-xs text-muted-foreground">{company.industry}</p>
          </div>
        </div>
        <StatusBadge variant={statusVariant[company.status]} className="shrink-0">
          {company.status}
        </StatusBadge>
      </div>

      {/* Plan */}
      <p className="mt-3 text-xs font-semibold text-primary">{planLabel[company.plan]} plan</p>

      {/* Seats */}
      <div className="mt-2 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${Math.min(seatsPct, 100)}%` }}
          />
        </div>
        <span className="shrink-0 text-[11px] font-semibold text-muted-foreground">
          {company.seatsUsed}/{company.seatsPurchased} seats
        </span>
      </div>

      {/* Billing contact */}
      <p className="mt-2.5 truncate text-xs text-muted-foreground">
        {company.billingContactName} · {company.billingContactEmail}
      </p>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(company)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Users className="h-4 w-4" />
          View Team
        </button>
        <button
          type="button"
          onClick={() => onEdit(company)}
          aria-label="Edit company"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(company)}
          aria-label="Delete company"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CompanyGridCard;
