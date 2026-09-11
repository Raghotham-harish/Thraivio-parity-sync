import {
  Copy,
  FileText,
  Loader2,
  X,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface DuplicateSurveyDialogProps {
  isOpen: boolean;
  survey: Survey | null;
  onClose: () => void;
  onConfirm: (survey: Survey) => void;
  loading?: boolean;
}

const DuplicateSurveyDialog = ({
  isOpen,
  survey,
  onClose,
  onConfirm,
  loading = false,
}: DuplicateSurveyDialogProps) => {
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
                bg-blue-50
                text-blue-600
              "
            >
              <Copy size={19} />
            </div>

            <h2 className="text-lg font-bold text-slate-900">
              Duplicate Survey
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close duplicate dialog"
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
          <p className="text-sm leading-6 text-slate-500">
            Create a copy of this survey with all of its
            questions and settings.
          </p>

          <div
            className="
              flex
              items-start
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              p-4
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-white
                text-slate-500
                shadow-sm
              "
            >
              <FileText size={18} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800">
                {survey.title}
              </p>

              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                <span>
                  {survey.questions.length}{" "}
                  {survey.questions.length === 1
                    ? "question"
                    : "questions"}
                </span>

                <span>
                  {survey.responseCount}{" "}
                  {survey.responseCount === 1
                    ? "response"
                    : "responses"}
                </span>
              </div>
            </div>
          </div>

          <div
            className="
              rounded-xl
              border
              border-blue-100
              bg-blue-50
              px-4
              py-3
            "
          >
            <p className="text-xs leading-5 text-blue-700">
              The duplicated survey will start as a
              <span className="font-semibold">
                {" "}
                draft
              </span>
              . Existing student responses will not be
              copied.
            </p>
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
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
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
                Duplicating...
              </>
            ) : (
              <>
                <Copy size={16} />
                Duplicate Survey
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuplicateSurveyDialog;