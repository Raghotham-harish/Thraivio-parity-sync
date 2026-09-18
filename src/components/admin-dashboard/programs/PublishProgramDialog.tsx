import {
  CheckCircle2,
  Globe,
  Loader2,
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

interface PublishProgramDialogProps {
  open: boolean;
  program: Program | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: (
    programId: string,
    action: "publish" | "unpublish"
  ) => void;
  isLoading?: boolean;
}

export default function PublishProgramDialog({
  open,
  program,
  onOpenChange,
  onConfirm,
  isLoading = false,
}: PublishProgramDialogProps) {
  if (!program) {
    return null;
  }

  const isPublished = program.status === "published";
  const action = isPublished ? "unpublish" : "publish";

  const handleClose = () => {
    if (!isLoading) {
      onOpenChange(false);
    }
  };

  const handleConfirm = () => {
    if (!program.id || isLoading) {
      return;
    }

    onConfirm(program.id, action);
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
        <div
          className={`px-6 pb-6 pt-7 sm:px-8 ${
            isPublished ? "bg-[#FFFBEB]" : "bg-[#ECFDF5]"
          }`}
        >
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
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                isPublished ? "bg-[#FFFBEB]" : "bg-[#ECFDF5]"
              }`}
            >
              {isPublished ? (
                <Globe className="h-8 w-8 text-[#B45309]" />
              ) : (
                <CheckCircle2 className="h-8 w-8 text-[#065F46]" />
              )}
            </div>

            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                {isPublished
                  ? "Unpublish Program?"
                  : "Publish Program?"}
              </DialogTitle>

              <DialogDescription className="mt-2 text-sm leading-6 text-muted-foreground">
                {isPublished
                  ? "This program will no longer be visible as a published program."
                  : "This program will become available to users after publishing."}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Program Details */}
        <div className="px-6 py-5 sm:px-8">
          <div className="rounded-2xl border border-border bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Selected Program
            </p>

            <h3 className="mt-2 line-clamp-2 text-base font-bold text-foreground">
              {program.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {program.category}
            </p>

            <div className="mt-3 inline-flex rounded-full bg-card px-3 py-1 text-xs font-semibold capitalize text-muted-foreground ring-1 ring-border">
              Current status: {program.status}
            </div>
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
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${
              isPublished
                ? "bg-[#F59E0B] hover:bg-[#F59E0B]"
                : "bg-[#10B981] hover:bg-[#10B981]"
            }`}
          >
            {isLoading && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}

            {isLoading
              ? "Processing..."
              : isPublished
                ? "Unpublish Program"
                : "Publish Program"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}