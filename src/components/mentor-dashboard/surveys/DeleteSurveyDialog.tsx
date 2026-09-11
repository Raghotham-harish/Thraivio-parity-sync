import { AlertTriangle, Loader2, Trash2, X } from "lucide-react";

import type { Survey } from "@/types/survey";

interface DeleteSurveyDialogProps {
  isOpen: boolean;
  survey: Survey | null;
  onClose: () => void;
  onConfirm: (survey: Survey) => void;
  loading?: boolean;
}

const DeleteSurveyDialog = ({
  isOpen,
  survey,
  onClose,
  onConfirm,
  loading = false,
}: DeleteSurveyDialogProps) => {
  if (!isOpen || !survey) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[60]
        flex
        items-center
        justify-center
        bg-slate-900/50
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget &&
          !loading
        ) {
          onClose();
        }
      }}
    >
      <div
        className="
          w-full
          max-w-md
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            px-5
            py-4
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-red-50
                text-red-500
              "
            >
              <Trash2 size={19} />
            </div>

            <h2 className="text-lg font-bold text-slate-900">
              Delete Survey
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close delete dialog"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-600
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <X size={19} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-5">
          <div
            className="
              flex
              items-start
              gap-3
              rounded-xl
              border
              border-amber-200
              bg-amber-50
              p-4
            "
          >
            <AlertTriangle
              size={19}
              className="
                mt-0.5
                shrink-0
                text-amber-500
              "
            />

            <div>
              <p className="text-sm font-semibold text-amber-800">
                This action cannot be undone.
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-700">
                Deleting this survey may also remove its
                associated survey data according to the
                platform&apos;s deletion rules.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Are you sure you want to delete:
            </p>

            <div
              className="
                mt-2
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
              "
            >
              <p className="truncate text-sm font-semibold text-slate-800">
                {survey.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {survey.responseCount}{" "}
                {survey.responseCount === 1
                  ? "response"
                  : "responses"}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            flex-col-reverse
            gap-3
            border-t
            border-slate-200
            px-5
            py-4
            sm:flex-row
            sm:justify-end
          "
        >
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-600
              transition
              hover:bg-slate-50
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(survey)}
            disabled={loading}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-red-700
              focus:outline-none
              focus:ring-2
              focus:ring-red-500
              focus:ring-offset-2
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
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
};

export default DeleteSurveyDialog;