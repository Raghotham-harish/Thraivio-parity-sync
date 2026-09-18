import { useState } from "react";
import { Mail, Palette, Users } from "lucide-react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import { ThraivioMark } from "@/components/shared/ThraivioLogos";
import type { Company, CompanyEmployee } from "@/types/admin-company";

interface CompanyDetailDrawerProps {
  open: boolean;

  company: Company | null;

  employees: CompanyEmployee[];

  onClose: () => void;
}

const statusVariant: Record<Company["status"], StatusBadgeVariant> = {
  active: "success",
  pending: "warning",
  suspended: "error",
};

const roleVariant: Record<CompanyEmployee["role"], StatusBadgeVariant> = {
  "company-admin": "info",
  employee: "neutral",
};

const CompanyDetailDrawer = ({ open, company, employees, onClose }: CompanyDetailDrawerProps) => {
  const [previewBranded, setPreviewBranded] = useState(false);

  if (!company) return null;

  const seatsPct = company.seatsPurchased
    ? Math.round((company.seatsUsed / company.seatsPurchased) * 100)
    : 0;
  const brandColor = company.brandColor ?? "#2563EB";

  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()}>
      <SheetContent side="right" className="w-full max-w-xl gap-0 overflow-y-auto p-0">
        <SheetTitle className="sr-only">{company.name} team</SheetTitle>

        {/* Header */}
        <div className="border-b border-border p-6">
          <div className="flex items-center gap-3">
            <img src={company.logoUrl} alt={company.name} className="h-12 w-12 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-xl font-bold text-foreground">{company.name}</h2>
              <p className="truncate text-sm text-muted-foreground">{company.industry}</p>
            </div>
            <StatusBadge variant={statusVariant[company.status]}>{company.status}</StatusBadge>
          </div>
        </div>

        {/* Seats */}
        <div className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <Users className="h-4 w-4 text-primary" />
              Seats
            </p>
            <p className="text-sm font-semibold text-foreground">
              {company.seatsUsed} / {company.seatsPurchased} used
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.min(seatsPct, 100)}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {company.seatsPurchased - company.seatsUsed} seats available on the {company.plan} plan.
          </p>
        </div>

        {/* Billing */}
        <div className="border-b border-border p-6">
          <p className="text-sm font-semibold text-foreground">Billing Contact</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Mail className="h-3.5 w-3.5" />
            {company.billingContactName} · {company.billingContactEmail}
          </p>
        </div>

        {/* White-label preview */}
        <div className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <Palette className="h-4 w-4 text-primary" />
              White-Label Preview
            </p>
            <button
              type="button"
              onClick={() => setPreviewBranded((prev) => !prev)}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {previewBranded ? "Show default" : "Show branded"}
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Preview only — this does not deploy a live branded subdomain, which needs real
            infrastructure/DNS work beyond this pass.
          </p>

          <div
            className="mt-4 flex items-center gap-3 rounded-xl border border-border p-4 transition-colors"
            style={{ backgroundColor: previewBranded ? brandColor : undefined }}
          >
            {previewBranded ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                <ThraivioMark className="h-5 w-5" />
              </div>
            ) : (
              <div className="icon-bg flex h-9 w-9 items-center justify-center rounded-lg">
                <ThraivioMark className="h-5 w-5" />
              </div>
            )}
            <div>
              <p className={`text-sm font-semibold ${previewBranded ? "text-white" : "text-foreground"}`}>
                {company.name} Portal
              </p>
              <p className={`text-xs ${previewBranded ? "text-white/80" : "text-muted-foreground"}`}>
                Powered by Thraivio
              </p>
            </div>
          </div>
        </div>

        {/* Employees */}
        <div className="p-6">
          <p className="mb-3 text-sm font-semibold text-foreground">
            Team ({employees.length})
          </p>
          <div className="space-y-2">
            {employees.length === 0 ? (
              <p className="text-sm text-muted-foreground">No team members added yet.</p>
            ) : (
              employees.map((employee) => (
                <div
                  key={employee.id}
                  className="flex items-center gap-3 rounded-xl border border-border p-3"
                >
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{employee.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{employee.email}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <StatusBadge variant={roleVariant[employee.role]}>
                      {employee.role === "company-admin" ? "Admin" : "Employee"}
                    </StatusBadge>
                    <span className="text-[11px] text-muted-foreground">
                      {employee.programsEnrolled} programs
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CompanyDetailDrawer;
