import { useEffect, useState } from "react";
import { X } from "lucide-react";

import type { Company } from "@/types/admin-company";

interface CompanyFormModalProps {
  open: boolean;

  company: Company | null;

  onClose: () => void;

  onSave: (company: Company) => void;
}

const emptyCompany = (): Company => ({
  id: Date.now().toString(),
  name: "",
  logoUrl: "https://api.dicebear.com/9.x/initials/svg?seed=New%20Company&backgroundColor=2563EB",
  industry: "",
  plan: "starter",
  status: "pending",
  seatsPurchased: 10,
  seatsUsed: 0,
  billingContactName: "",
  billingContactEmail: "",
  createdAt: new Date().toISOString().slice(0, 10),
});

const CompanyFormModal = ({ open, company, onClose, onSave }: CompanyFormModalProps) => {
  const [formData, setFormData] = useState<Company>(emptyCompany());

  useEffect(() => {
    setFormData(company ?? emptyCompany());
  }, [company, open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {company ? "Edit Company" : "Add Company"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-foreground">Company Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Industry</label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="e.g. SaaS, Retail, Healthcare"
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Plan</label>
              <select
                value={formData.plan}
                onChange={(e) =>
                  setFormData({ ...formData, plan: e.target.value as Company["plan"] })
                }
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              >
                <option value="starter">Starter</option>
                <option value="growth">Growth</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Status</label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as Company["status"] })
                }
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Seats Purchased</label>
              <input
                type="number"
                min={0}
                value={formData.seatsPurchased}
                onChange={(e) =>
                  setFormData({ ...formData, seatsPurchased: Number(e.target.value) })
                }
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Brand Color (white-label)</label>
              <input
                type="color"
                value={formData.brandColor ?? "#2563EB"}
                onChange={(e) => setFormData({ ...formData, brandColor: e.target.value })}
                className="mt-2 h-11 w-full rounded-xl border border-border bg-background p-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Billing Contact Name</label>
              <input
                type="text"
                value={formData.billingContactName}
                onChange={(e) => setFormData({ ...formData, billingContactName: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Billing Contact Email</label>
              <input
                type="email"
                value={formData.billingContactEmail}
                onChange={(e) => setFormData({ ...formData, billingContactEmail: e.target.value })}
                className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {company ? "Save Changes" : "Create Company"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyFormModal;
