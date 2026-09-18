import { Trash2 } from "lucide-react";

import type { Company } from "@/types/admin-company";

interface DeleteCompanyDialogProps {
  open: boolean;

  company: Company | null;

  onClose: () => void;

  onConfirm: () => void;
}

const DeleteCompanyDialog = ({ open, company, onClose, onConfirm }: DeleteCompanyDialogProps) => {
  if (!open || !company) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-card p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDAD6]">
          <Trash2 className="h-7 w-7 text-red-600" />
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-xl font-bold text-foreground">Remove this company?</h2>
          <p className="mt-2 rounded-xl bg-secondary p-3 text-sm font-medium text-foreground">
            {company.name}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            This removes the company account and its {company.seatsUsed} active seat
            {company.seatsUsed === 1 ? "" : "s"}. This action cannot be undone.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-destructive py-2.5 text-sm font-semibold text-white transition-colors hover:bg-destructive/90"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCompanyDialog;
