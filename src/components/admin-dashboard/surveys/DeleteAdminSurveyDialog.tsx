import {
  AlertTriangle,
  Loader2,
  Trash2,
  X,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface DeleteAdminSurveyDialogProps {
  survey: Survey | null;
  open: boolean;
  loading?: boolean;

  onClose: () => void;
  onConfirm: (survey: Survey) => void;
}

export default function DeleteAdminSurveyDialog({
  survey,
  open,
  loading = false,
  onClose,
  onConfirm,
}: DeleteAdminSurveyDialogProps) {
  if (!open || !survey) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-survey-title"
    >
      <div className="w-full max-w-md rounded-xl bg-card shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <AlertTriangle size={20} />
            </div>

            <div>
              <h2
                id="delete-survey-title"
                className="text-base font-semibold text-foreground"
              >
                Delete Survey
              </h2>

              <p className="mt-0.5 text-xs text-muted-foreground">
                This action requires confirmation.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close dialog"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Are you sure you want to delete this survey?
          </p>

          <div className="mt-4 rounded-lg border border-red-100 bg-red-50 p-4">
            <p className="text-sm font-semibold text-foreground">
              {survey.title}
            </p>

            <div className="mt-2 space-y-1 text-xs text-muted-foreground">
              <p>
                Questions:{" "}
                <span className="font-medium">
                  {survey.questions.length}
                </span>
              </p>

              <p>
                Responses:{" "}
                <span className="font-medium">
                  {survey.responseCount}
                </span>
              </p>

              <p>
                Status:{" "}
                <span className="font-medium capitalize">
                  {survey.status}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="text-xs leading-5 text-amber-800">
              Deleting a survey may also affect its
              associated responses and analytics. Make
              sure this survey should no longer be
              available before continuing.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-2 border-t border-border px-5 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(survey)}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-lg bg-destructive px-4 py-2.5 text-sm font-medium text-white transition hover:bg-destructive/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 size={16} />
                Delete Survey
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}