import {
  AlertCircle,
  CheckCircle2,
  Globe2,
  Loader2,
  X,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface PublishSurveyDialogProps {
  isOpen: boolean;
  survey: Survey | null;
  onClose: () => void;
  onConfirm: (survey: Survey) => void;
  loading?: boolean;
}

const PublishSurveyDialog = ({
  isOpen,
  survey,
  onClose,
  onConfirm,
  loading = false,
}: PublishSurveyDialogProps) => {
  if (!isOpen || !survey) {
    return null;
  }

  const isPublished = survey.status === "published";

  const hasQuestions = survey.questions.length > 0;

  const hasEmptyQuestion = survey.questions.some(
    (question) => !question.question.trim()
  );

  const hasInvalidOptions = survey.questions.some(
    (question) =>
      ["single_select", "multi_select", "dropdown"].includes(
        question.type
      ) &&
      (!question.options ||
        question.options.length === 0 ||
        question.options.some(
          (option) => !option.label.trim()
        ))
  );

  const canPublish =
    hasQuestions &&
    !hasEmptyQuestion &&
    !hasInvalidOptions;

  const handleConfirm = () => {
    if (!isPublished && !canPublish) {
      return;
    }

    onConfirm(survey);
  };

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
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                ${
                  isPublished
                    ? "bg-amber-50 text-amber-600"
                    : "bg-green-50 text-green-600"
                }
              `}
            >
              {isPublished ? (
                <Globe2 size={19} />
              ) : (
                <CheckCircle2 size={19} />
              )}
            </div>

            <h2 className="text-lg font-bold text-slate-900">
              {isPublished
                ? "Unpublish Survey"
                : "Publish Survey"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close publish dialog"
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
              {survey.questions.length}{" "}
              {survey.questions.length === 1
                ? "question"
                : "questions"}
            </p>
          </div>

          {isPublished ? (
            <div
              className="
                rounded-xl
                border
                border-amber-200
                bg-amber-50
                p-4
              "
            >
              <div className="flex items-start gap-3">
                <Globe2
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-amber-600
                  "
                />

                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    Unpublish this survey?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-amber-700">
                    Students will no longer be able to
                    access this survey while it is
                    unpublished. Existing responses will remain available.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div
                className="
                  rounded-xl
                  border
                  border-green-200
                  bg-green-50
                  p-4
                "
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="
                      mt-0.5
                      shrink-0
                      text-green-600
                    "
                  />

                  <div>
                    <p className="text-sm font-semibold text-green-800">
                      Ready to publish?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-green-700">
                      Publishing will make this survey
                      available to eligible students.
                    </p>
                  </div>
                </div>
              </div>

              {!canPublish && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    p-4
                  "
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle
                      size={18}
                      className="
                        mt-0.5
                        shrink-0
                        text-red-500
                      "
                    />

                    <div>
                      <p className="text-sm font-semibold text-red-700">
                        Survey needs attention
                      </p>

                      <ul className="mt-2 space-y-1 text-xs leading-5 text-red-600">
                        {!hasQuestions && (
                          <li>
                            • Add at least one question.
                          </li>
                        )}

                        {hasEmptyQuestion && (
                          <li>
                            • Complete all question
                            text.
                          </li>
                        )}

                        {hasInvalidOptions && (
                          <li>
                            • Complete all options for
                            choice-based questions.
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
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
            onClick={handleConfirm}
            disabled={
              loading ||
              (!isPublished && !canPublish)
            }
            className={`
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              disabled:cursor-not-allowed
              disabled:opacity-50
              ${
                isPublished
                  ? "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500"
                  : "bg-green-600 hover:bg-green-700 focus:ring-green-500"
              }
            `}
          >
            {loading ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />
                {isPublished
                  ? "Unpublishing..."
                  : "Publishing..."}
              </>
            ) : (
              <>
                {isPublished ? (
                  <Globe2 size={16} />
                ) : (
                  <CheckCircle2 size={16} />
                )}

                {isPublished
                  ? "Unpublish Survey"
                  : "Publish Survey"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishSurveyDialog;