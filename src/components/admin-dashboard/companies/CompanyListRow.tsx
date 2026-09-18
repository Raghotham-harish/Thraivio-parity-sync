import { Pencil, Trash2, Users } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Company } from "@/types/admin-company";

interface CompanyListRowProps {
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

const CompanyListRow = ({ company, onView, onEdit, onDelete }: CompanyListRowProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <img
        src={company.logoUrl}
        alt={company.name}
        className="h-10 w-10 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{company.name}</p>
        <p className="truncate text-xs text-muted-foreground">{company.industry}</p>
      </div>

      <span className="hidden shrink-0 text-xs font-semibold capitalize text-primary sm:block">
        {company.plan}
      </span>

      <div className="hidden w-24 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">
          {company.seatsUsed}/{company.seatsPurchased}
        </span>
        <p className="text-muted-foreground">seats</p>
      </div>

      <StatusBadge variant={statusVariant[company.status]} className="shrink-0">
        {company.status}
      </StatusBadge>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView(company)}
          aria-label="View team"
          title="View Team"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Users className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onEdit(company)}
          aria-label="Edit company"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(company)}
          aria-label="Delete company"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CompanyListRow;
