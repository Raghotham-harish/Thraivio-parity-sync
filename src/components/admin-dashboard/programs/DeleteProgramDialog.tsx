import {
  AlertTriangle,
  Loader2,
  Trash2,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { Program } from "@/services/program.service";

interface DeleteProgramDialogProps {
  open: boolean;
  program: Program | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: (programId: string) => void;
  isLoading?: boolean;
}

export default function DeleteProgramDialog({
  open,
  program,
  onOpenChange,
  onConfirm,
  isLoading = false,
}: DeleteProgramDialogProps) {
  if (!program) {
    return null;
  }

  const handleClose = () => {
    if (!isLoading) {
      onOpenChange(false);
    }
  };

  const handleConfirm = () => {
    if (!program.id || isLoading) {
      return;
    }

    onConfirm(program.id);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isLoading) {
          onOpenChange(value);
        }
      }}
    >
      <DialogContent
        className="
 w-[calc(100%-2rem)]
 max-w-md
 overflow-hidden
 rounded-2xl
          border-0
          bg-card
          p-0
        "
      >
        {/* Header */}
        <div className="relative bg-[#FFDAD6] px-6 pb-5 pt-7 sm:px-8">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="absolute right-4 top-4 rounded-xl p-2 text-muted-foreground transition hover:bg-card hover:text-foreground disabled:opacity-50"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDAD6]">
              <AlertTriangle className="h-8 w-8 text-[#BA1A1A]" />
            </div>

            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                Delete Program?
              </DialogTitle>

              <DialogDescription className="mt-2 text-sm leading-6 text-muted-foreground">
                This action cannot be undone. The selected program
                will be permanently deleted.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Program Information */}
        <div className="px-6 py-5 sm:px-8">
          <div className="rounded-2xl border border-border bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Selected Program
            </p>

            <h3 className="mt-2 line-clamp-2 text-base font-bold text-foreground">
              {program.title}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold capitalize text-muted-foreground ring-1 ring-border">
                {program.status}
              </span>

              <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground ring-1 ring-border">
                {program.category}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#F59E0B] bg-[#FFFBEB] p-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />

            <p className="text-xs leading-5 text-[#B45309]">
              Please verify that you want to remove this program
              before continuing.
            </p>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex-col gap-3 border-t border-border bg-card px-6 py-5 sm:flex-row sm:px-8">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="w-full rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            disabled={isLoading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#BA1A1A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#BA1A1A] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}

            {isLoading ? "Deleting..." : "Delete Program"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}