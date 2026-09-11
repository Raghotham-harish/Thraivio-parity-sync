import {
  Copy,
  GripVertical,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";

import type {
  SurveyQuestion,
  SurveyQuestionType,
} from "@/types/survey";

import QuestionTypeSelector from "./QuestionTypeSelector";

interface SurveyQuestionCardProps {
  question: SurveyQuestion;
  index: number;

  onChange: (
    question: SurveyQuestion
  ) => void;

  onDelete: (
    questionId: string
  ) => void;

  onDuplicate: (
    questionId: string
  ) => void;

  onAddOption?: (
    questionId: string
  ) => void;
}

const questionTypeLabels: Record<
  SurveyQuestionType,
  string
> = {
  short_text: "Short Answer",
  long_text: "Long Answer",
  single_select: "Multiple Choice",
  multi_select: "Checkboxes",
  dropdown: "Dropdown",
  number: "Number",
  email: "Email",
  date: "Date",
  rating: "Rating",
  yes_no: "Yes / No",
};

const SurveyQuestionCard = ({
  question,
  index,
  onChange,
  onDelete,
  onDuplicate,
  onAddOption,
}: SurveyQuestionCardProps) => {
  const updateQuestion = (
    updates: Partial<SurveyQuestion>
  ) => {
    onChange({
      ...question,
      ...updates,
    });
  };

  const supportsOptions =
    question.type === "single_select" ||
    question.type === "multi_select" ||
    question.type === "dropdown";

  const addOption = () => {
    if (!onAddOption) {
      return;
    }

    onAddOption(question.id);
  };

  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition
        focus-within:border-blue-300
        focus-within:shadow-md
      "
    >
      {/* Question Header */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-3
          border-b
          border-slate-100
          px-4
          py-3
          sm:px-5
        "
      >
        {/* Drag Handle + Number */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Reorder question"
            className="
              cursor-grab
              rounded-lg
              p-1.5
              text-slate-300
              transition
              hover:bg-slate-100
              hover:text-slate-500
              active:cursor-grabbing
            "
          >
            <GripVertical size={18} />
          </button>

          <span
            className="
              flex
              h-8
              min-w-8
              items-center
              justify-center
              rounded-lg
              bg-blue-50
              px-2
              text-sm
              font-semibold
              text-blue-600
            "
          >
            {index + 1}
          </span>

          <span className="hidden text-xs font-medium text-slate-400 sm:block">
            Question
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() =>
              onDuplicate(question.id)
            }
            aria-label="Duplicate question"
            title="Duplicate question"
            className="
              rounded-lg
              p-2
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            <Copy size={16} />
          </button>

          <button
            type="button"
            onClick={() =>
              onDelete(question.id)
            }
            aria-label="Delete question"
            title="Delete question"
            className="
              rounded-lg
              p-2
              text-slate-400
              transition
              hover:bg-red-50
              hover:text-red-600
            "
          >
            <Trash2 size={16} />
          </button>

          <button
            type="button"
            aria-label="More question options"
            title="More options"
            className="
              rounded-lg
              p-2
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {/* Question Body */}
      <div className="space-y-5 p-4 sm:p-5">

        {/* Question + Type */}
        <div className="grid gap-4 lg:grid-cols-[1fr_220px]">

          {/* Question */}
          <div>
            <label
              htmlFor={`question-${question.id}`}
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-700
              "
            >
              Question
            </label>

            <input
              id={`question-${question.id}`}
              type="text"
              value={question.question}
              onChange={(event) =>
                updateQuestion({
                  question:
                    event.target.value,
                })
              }
              placeholder="Enter your question..."
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                text-slate-800
                outline-none
                transition
                placeholder:text-slate-400
                hover:border-slate-300
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            />
          </div>

          {/* Type */}
          <div>
            <label
              htmlFor={`type-${question.id}`}
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-700
              "
            >
              Question Type
            </label>

           <QuestionTypeSelector
  value={question.type}
  onChange={(type) =>
    updateQuestion({
      type,
    })
  }
/>
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor={`description-${question.id}`}
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
            "
          >
            Description
            <span className="ml-1 font-normal text-slate-400">
              (Optional)
            </span>
          </label>

          <textarea
            id={`description-${question.id}`}
            value={question.description || ""}
            onChange={(event) =>
              updateQuestion({
                description:
                  event.target.value,
              })
            }
            placeholder="Add additional instructions or context..."
            rows={2}
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-slate-800
              outline-none
              transition
              placeholder:text-slate-400
              hover:border-slate-300
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* Options */}
        {supportsOptions && (
          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                Answer Options
              </label>

              {onAddOption && (
                <button
                  type="button"
                  onClick={addOption}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-lg
                    px-2.5
                    py-1.5
                    text-xs
                    font-medium
                    text-blue-600
                    transition
                    hover:bg-blue-50
                  "
                >
                  <Plus size={14} />
                  Add Option
                </button>
              )}
            </div>

            <div className="space-y-2">
              {(question.options || []).map(
                (option, optionIndex) => (
                  <div
                    key={option.id}
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    {/* Option Indicator */}
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-100
                        text-xs
                        font-medium
                        text-slate-500
                      "
                    >
                      {optionIndex + 1}
                    </div>

                    {/* Option Input */}
                    <input
                      type="text"
                      value={option.label}
                      onChange={(event) => {
                        const updatedOptions =
                          (
                            question.options ||
                            []
                          ).map((item) =>
                            item.id ===
                            option.id
                              ? {
                                  ...item,
                                  label:
                                    event.target
                                      .value,
                                }
                              : item
                          );

                        updateQuestion({
                          options:
                            updatedOptions,
                        });
                      }}
                      placeholder={`Option ${
                        optionIndex + 1
                      }`}
                      className="
                        min-w-0
                        flex-1
                        rounded-xl
                        border
                        border-slate-200
                        px-4
                        py-2.5
                        text-sm
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                      "
                    />

                    {/* Remove Option */}
                    <button
                      type="button"
                      onClick={() => {
                        const updatedOptions =
                          (
                            question.options ||
                            []
                          ).filter(
                            (item) =>
                              item.id !==
                              option.id
                          );

                        updateQuestion({
                          options:
                            updatedOptions,
                        });
                      }}
                      aria-label={`Remove option ${
                        optionIndex + 1
                      }`}
                      className="
                        shrink-0
                        rounded-lg
                        p-2
                        text-slate-400
                        transition
                        hover:bg-red-50
                        hover:text-red-600
                      "
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                )
              )}

              {(!question.options ||
                question.options.length === 0) && (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center">
                  <p className="text-xs text-slate-500">
                    No options added yet.
                  </p>

                  {onAddOption && (
                    <button
                      type="button"
                      onClick={addOption}
                      className="
                        mt-2
                        text-xs
                        font-medium
                        text-blue-600
                        hover:text-blue-700
                      "
                    >
                      Add your first option
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Question Preview */}
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
            Answer Preview
          </p>

          {question.type === "short_text" && (
            <input
              disabled
              type="text"
              placeholder="Short answer"
              className="
                w-full
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-slate-400
              "
            />
          )}

          {question.type === "long_text" && (
            <textarea
              disabled
              rows={3}
              placeholder="Long answer"
              className="
                w-full
                resize-none
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-slate-400
              "
            />
          )}

          {question.type === "number" && (
            <input
              disabled
              type="number"
              placeholder="Enter a number"
              className="
                w-full
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-slate-400
              "
            />
          )}

          {question.type === "email" && (
            <input
              disabled
              type="email"
              placeholder="name@example.com"
              className="
                w-full
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-slate-400
              "
            />
          )}

          {question.type === "date" && (
            <input
              disabled
              type="date"
              className="
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-slate-400
              "
            />
          )}

          {question.type === "single_select" && (
            <div className="space-y-2">
              {(question.options || []).map(
                (option) => (
                  <label
                    key={option.id}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2.5
                    "
                  >
                    <input
                      disabled
                      type="radio"
                      name={`preview-${question.id}`}
                    />

                    <span className="text-sm text-slate-600">
                      {option.label}
                    </span>
                  </label>
                )
              )}
            </div>
          )}

          {question.type === "multi_select" && (
            <div className="space-y-2">
              {(question.options || []).map(
                (option) => (
                  <label
                    key={option.id}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2.5
                    "
                  >
                    <input
                      disabled
                      type="checkbox"
                    />

                    <span className="text-sm text-slate-600">
                      {option.label}
                    </span>
                  </label>
                )
              )}
            </div>
          )}

          {question.type === "dropdown" && (
            <select
              disabled
              className="
                w-full
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                py-2.5
                text-sm
                text-slate-400
              "
            >
              <option>
                Select an option
              </option>

              {(question.options || []).map(
                (option) => (
                  <option
                    key={option.id}
                    value={option.id}
                  >
                    {option.label}
                  </option>
                )
              )}
            </select>
          )}

          {question.type === "rating" && (
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map(
                (rating) => (
                  <button
                    key={rating}
                    type="button"
                    disabled
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      text-sm
                      text-slate-400
                    "
                  >
                    {rating}
                  </button>
                )
              )}
            </div>
          )}

          {question.type === "yes_no" && (
            <div className="flex flex-wrap gap-3">
              {["Yes", "No"].map(
                (answer) => (
                  <label
                    key={answer}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-2.5
                    "
                  >
                    <input
                      disabled
                      type="radio"
                      name={`preview-${question.id}`}
                    />

                    <span className="text-sm text-slate-600">
                      {answer}
                    </span>
                  </label>
                )
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-slate-400">
            Type:{" "}
            <span className="font-medium text-slate-500">
              {questionTypeLabels[
                question.type
              ]}
            </span>
          </span>

          {/* Required */}
          <label className="inline-flex cursor-pointer items-center gap-3">
            <span className="text-sm font-medium text-slate-600">
              Required
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={
                question.required
              }
              onClick={() =>
                updateQuestion({
                  required:
                    !question.required,
                })
              }
              className={`
                relative
                h-6
                w-11
                rounded-full
                transition
                ${
                  question.required
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }
              `}
            >
              <span
                className={`
                  absolute
                  top-1
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  shadow-sm
                  transition
                  ${
                    question.required
                      ? "left-6"
                      : "left-1"
                  }
                `}
              />
            </button>
          </label>
        </div>
      </div>
    </article>
  );
};

export default SurveyQuestionCard;