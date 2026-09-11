import {
  CalendarDays,
  Check,
  ChevronDown,
  Circle,
  CircleDot,
  FileText,
  Hash,
  Mail,
  MessageSquare,
  Star,
  X,
} from "lucide-react";

import type {
  Survey,
  SurveyQuestion,
} from "@/types/survey";

interface SurveyPreviewModalProps {
  isOpen: boolean;
  survey: Survey | null;
  onClose: () => void;
}

const SurveyPreviewModal = ({
  isOpen,
  survey,
  onClose,
}: SurveyPreviewModalProps) => {
  if (!isOpen || !survey) {
    return null;
  }

  const renderQuestion = (
    question: SurveyQuestion,
    index: number
  ) => {
    const options = question.options || [];

    return (
      <div
        key={question.id}
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
        "
      >
        <div className="flex items-start gap-3">
          <div
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-blue-50
              text-xs
              font-bold
              text-blue-600
            "
          >
            {index + 1}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-800">
                {question.question}
              </h3>

              {question.required && (
                <span className="text-sm font-bold text-red-500">
                  *
                </span>
              )}
            </div>

            {question.description && (
              <p className="mt-1 text-xs leading-5 text-slate-400">
                {question.description}
              </p>
            )}

            <div className="mt-4">
              {renderAnswerField(question, options)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAnswerField = (
    question: SurveyQuestion,
    options: NonNullable<SurveyQuestion["options"]>
  ) => {
    switch (question.type) {
      case "short_text":
        return (
          <div className="relative">
            <MessageSquare
              size={16}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              disabled
              placeholder="Your answer"
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-10
                pr-4
                text-sm
                text-slate-500
                outline-none
              "
            />
          </div>
        );

      case "long_text":
        return (
          <textarea
            disabled
            rows={4}
            placeholder="Your answer"
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
              text-sm
              text-slate-500
              outline-none
            "
          />
        );

      case "single_select":
        return (
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.id}
                className="
                  flex
                  cursor-default
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                "
              >
                <CircleDot
                  size={18}
                  className="text-slate-400"
                />

                <span className="text-sm text-slate-600">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );

      case "multi_select":
        return (
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.id}
                className="
                  flex
                  cursor-default
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-[18px]
                    w-[18px]
                    items-center
                    justify-center
                    rounded
                    border
                    border-slate-300
                    bg-white
                  "
                >
                  <Check
                    size={12}
                    className="text-transparent"
                  />
                </div>

                <span className="text-sm text-slate-600">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );

      case "dropdown":
        return (
          <div className="relative">
            <select
              disabled
              defaultValue=""
              className="
                w-full
                appearance-none
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                pr-10
                text-sm
                text-slate-400
                outline-none
              "
            >
              <option value="" disabled>
                Select an option
              </option>

              {options.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                >
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              className="
                pointer-events-none
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />
          </div>
        );

      case "number":
        return (
          <div className="relative">
            <Hash
              size={16}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="number"
              disabled
              placeholder="Enter a number"
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-10
                pr-4
                text-sm
                text-slate-500
                outline-none
              "
            />
          </div>
        );

      case "email":
        return (
          <div className="relative">
            <Mail
              size={16}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="email"
              disabled
              placeholder="name@example.com"
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-10
                pr-4
                text-sm
                text-slate-500
                outline-none
              "
            />
          </div>
        );

      case "date":
        return (
          <div className="relative">
            <CalendarDays
              size={16}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="date"
              disabled
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-10
                pr-4
                text-sm
                text-slate-500
                outline-none
              "
            />
          </div>
        );

      case "rating":
        return (
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                disabled
                aria-label={`Rating ${rating}`}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-slate-200
                  bg-slate-50
                  text-slate-300
                "
              >
                <Star size={18} />
              </button>
            ))}
          </div>
        );

      case "yes_no":
        return (
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              disabled
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                font-medium
                text-slate-600
              "
            >
              <Circle size={16} />
              Yes
            </button>

            <button
              type="button"
              disabled
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                font-medium
                text-slate-600
              "
            >
              <Circle size={16} />
              No
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-900/50
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-slate-50
          shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-slate-200
            bg-white
            px-5
            py-4
            sm:px-6
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
              <FileText size={19} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Survey Preview
              </h2>

              <p className="text-xs text-slate-400">
                Student view
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
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
            "
          >
            <X size={19} />
          </button>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-2xl space-y-5 p-5 sm:p-7">
            {/* Survey Intro */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-blue-600
                  "
                >
                  Preview
                </span>

                {survey.settings.showProgressBar && (
                  <span
                    className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-slate-500
                    "
                  >
                    {survey.questions.length}{" "}
                    Questions
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-2xl font-bold text-slate-900">
                {survey.title}
              </h1>

              {survey.description && (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {survey.description}
                </p>
              )}

              {survey.settings.showProgressBar && (
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      Progress
                    </span>

                    <span className="text-xs font-semibold text-slate-500">
                      0%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-0 rounded-full bg-blue-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Questions */}
            {survey.questions
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((question, index) =>
                renderQuestion(question, index)
              )}

            {/* Submit */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >
              <button
                type="button"
                disabled
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  opacity-50
                "
              >
                Submit Response
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                This is a preview. Responses cannot be
                submitted here.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            shrink-0
            border-t
            border-slate-200
            bg-white
            px-5
            py-3
            text-right
            sm:px-6
          "
        >
          <button
            type="button"
            onClick={onClose}
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
            "
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPreviewModal;