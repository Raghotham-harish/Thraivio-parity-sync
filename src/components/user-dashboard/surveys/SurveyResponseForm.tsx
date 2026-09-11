import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleCheck,
  Mail,
  Star,
} from "lucide-react";

import type {
  Survey,
  SurveyQuestion,
} from "@/types/survey";

interface SurveyResponseFormProps {
  survey: Survey;

  /**
   * Existing answers when a user resumes an incomplete survey.
   */
  initialAnswers?: Record<string, unknown>;

  /**
   * Called after successful local validation.
   * Backend submission will be handled by the parent/service layer.
   */
  onSubmit?: (
    survey: Survey,
    answers: Record<string, unknown>
  ) => void | Promise<void>;

  /**
   * Close/cancel the response form.
   */
  onCancel?: () => void;

  /**
   * Shows a loading state while submitting.
   */
  submitting?: boolean;
}

type AnswerValue =
  | string
  | number
  | boolean
  | string[]
  | null;

const getInitialAnswer = (
  question: SurveyQuestion,
  initialAnswers: Record<string, unknown>
): AnswerValue => {
  const existing = initialAnswers[question.id];

  if (existing !== undefined) {
    return existing as AnswerValue;
  }

  switch (question.type) {
    case "multi_select":
      return [];

    case "yes_no":
      return null;

    case "number":
      return "";

    default:
      return "";
  }
};

export default function SurveyResponseForm({
  survey,
  initialAnswers = {},
  onSubmit,
  onCancel,
  submitting = false,
}: SurveyResponseFormProps) {
  const [answers, setAnswers] =
    useState<Record<string, AnswerValue>>(() => {
      const initial: Record<string, AnswerValue> = {};

      survey.questions
        .slice()
        .sort((a, b) => a.order - b.order)
        .forEach((question) => {
          initial[question.id] = getInitialAnswer(
            question,
            initialAnswers
          );
        });

      return initial;
    });

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const questions = useMemo(
    () =>
      [...survey.questions].sort(
        (a, b) => a.order - b.order
      ),
    [survey.questions]
  );

  const currentQuestion =
    questions[currentQuestionIndex];

  const totalQuestions = questions.length;

  const progress =
    totalQuestions > 0
      ? Math.round(
          ((currentQuestionIndex + 1) /
            totalQuestions) *
            100
        )
      : 0;

  const isLastQuestion =
    currentQuestionIndex === totalQuestions - 1;

  const updateAnswer = (
    questionId: string,
    value: AnswerValue
  ) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: value,
    }));

    setErrors((previous) => {
      if (!previous[questionId]) {
        return previous;
      }

      const next = { ...previous };
      delete next[questionId];
      return next;
    });
  };

  const validateQuestion = (
    question: SurveyQuestion
  ) => {
    const value = answers[question.id];

    if (!question.required) {
      return true;
    }

    if (
      value === null ||
      value === undefined ||
      value === ""
    ) {
      setErrors((previous) => ({
        ...previous,
        [question.id]: "This question is required.",
      }));

      return false;
    }

    if (
      Array.isArray(value) &&
      value.length === 0
    ) {
      setErrors((previous) => ({
        ...previous,
        [question.id]: "Please select at least one option.",
      }));

      return false;
    }

    return true;
  };

  const validateAllQuestions = () => {
    const validationErrors: Record<string, string> = {};

    questions.forEach((question) => {
      const value = answers[question.id];

      if (!question.required) {
        return;
      }

      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        validationErrors[question.id] =
          "This question is required.";
        return;
      }

      if (
        Array.isArray(value) &&
        value.length === 0
      ) {
        validationErrors[question.id] =
          "Please select at least one option.";
      }
    });

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleNext = () => {
    if (!currentQuestion) {
      return;
    }

    if (!validateQuestion(currentQuestion)) {
      return;
    }

    setCurrentQuestionIndex((previous) =>
      Math.min(previous + 1, totalQuestions - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  };

  const handleSubmit = async () => {
    if (!validateAllQuestions()) {
      const firstErrorIndex = questions.findIndex(
        (question) => errors[question.id]
      );

      if (firstErrorIndex >= 0) {
        setCurrentQuestionIndex(firstErrorIndex);
      }

      return;
    }

    const cleanedAnswers: Record<string, unknown> = {};

    Object.entries(answers).forEach(
      ([questionId, value]) => {
        cleanedAnswers[questionId] = value;
      }
    );

    await onSubmit?.(survey, cleanedAnswers);
  };

  const toggleMultiSelectOption = (
    questionId: string,
    optionId: string
  ) => {
    const currentValue = answers[questionId];

    const selectedValues = Array.isArray(currentValue)
      ? currentValue
      : [];

    const exists =
      selectedValues.includes(optionId);

    const nextValue = exists
      ? selectedValues.filter(
          (value) => value !== optionId
        )
      : [...selectedValues, optionId];

    updateAnswer(questionId, nextValue);
  };

  const renderQuestionInput = (
    question: SurveyQuestion
  ) => {
    const value = answers[question.id];

    switch (question.type) {
      case "short_text":
        return (
          <input
            type="text"
            value={typeof value === "string" ? value : ""}
            onChange={(event) =>
              updateAnswer(
                question.id,
                event.target.value
              )
            }
            placeholder="Enter your answer"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        );

      case "long_text":
        return (
          <textarea
            value={typeof value === "string" ? value : ""}
            onChange={(event) =>
              updateAnswer(
                question.id,
                event.target.value
              )
            }
            placeholder="Enter your answer"
            rows={5}
            className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        );

      case "single_select":
        return (
          <div className="space-y-3">
            {(question.options ?? []).map((option) => {
              const selected =
                value === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    updateAnswer(
                      question.id,
                      option.id
                    )
                  }
                  className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition ${
                    selected
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {selected ? (
                    <CircleCheck
                      size={19}
                      className="shrink-0 text-blue-600"
                    />
                  ) : (
                    <Circle
                      size={19}
                      className="shrink-0 text-slate-400"
                    />
                  )}

                  <span className="text-sm text-slate-700">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        );

      case "multi_select":
        return (
          <div className="space-y-3">
            {(question.options ?? []).map((option) => {
              const selected =
                Array.isArray(value) &&
                value.includes(option.id);

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    toggleMultiSelectOption(
                      question.id,
                      option.id
                    )
                  }
                  className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition ${
                    selected
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      selected
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {selected && <Check size={13} />}
                  </span>

                  <span className="text-sm text-slate-700">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        );

      case "dropdown":
        return (
          <div className="relative">
            <select
              value={typeof value === "string" ? value : ""}
              onChange={(event) =>
                updateAnswer(
                  question.id,
                  event.target.value
                )
              }
              className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">
                Select an option
              </option>

              {(question.options ?? []).map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                >
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        );

      case "number":
        return (
          <input
            type="number"
            value={
              value === "" ||
              value === null ||
              value === undefined
                ? ""
                : String(value)
            }
            onChange={(event) => {
              const nextValue = event.target.value;

              updateAnswer(
                question.id,
                nextValue === ""
                  ? ""
                  : Number(nextValue)
              );
            }}
            placeholder="Enter a number"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        );

      case "email":
        return (
          <div className="relative">
            <Mail
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              value={
                typeof value === "string"
                  ? value
                  : ""
              }
              onChange={(event) =>
                updateAnswer(
                  question.id,
                  event.target.value
                )
              }
              placeholder="name@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        );

      case "date":
        return (
          <div className="relative">
            <CalendarDays
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="date"
              value={
                typeof value === "string"
                  ? value
                  : ""
              }
              onChange={(event) =>
                updateAnswer(
                  question.id,
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        );

      case "rating": {
        const rating =
          typeof value === "number" ? value : 0;

        return (
          <div className="flex flex-wrap items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
              const selected = star <= rating;

              return (
                <button
                  key={star}
                  type="button"
                  aria-label={`Rate ${star} out of 5`}
                  onClick={() =>
                    updateAnswer(
                      question.id,
                      star
                    )
                  }
                  className="rounded-md p-1 transition hover:bg-slate-100"
                >
                  <Star
                    size={30}
                    fill={selected ? "currentColor" : "none"}
                    className={
                      selected
                        ? "text-amber-500"
                        : "text-slate-300"
                    }
                  />
                </button>
              );
            })}
          </div>
        );
      }

      case "yes_no":
        return (
          <div className="grid grid-cols-2 gap-3">
            {[true, false].map((option) => {
              const selected = value === option;

              return (
                <button
                  key={String(option)}
                  type="button"
                  onClick={() =>
                    updateAnswer(
                      question.id,
                      option
                    )
                  }
                  className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${
                    selected
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {option ? "Yes" : "No"}
                </button>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  if (totalQuestions === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <h2 className="text-lg font-semibold text-slate-900">
          No Questions
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          This survey does not contain any questions yet.
        </p>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="mt-5 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Go Back
          </button>
        )}
      </div>
    );
  }

  return (
    <section className="mx-auto w-full max-w-3xl">
      {/* Survey heading */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Mail size={21} />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              {survey.title}
            </h1>

            {survey.description && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {survey.description}
              </p>
            )}
          </div>
        </div>

        {/* Progress */}
        {survey.settings.showProgressBar && (
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Question {currentQuestionIndex + 1} of{" "}
                {totalQuestions}
              </span>

              <span className="font-medium text-slate-700">
                {progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Current question */}
      {currentQuestion && (
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-start gap-2">
              <h2 className="text-base font-semibold leading-6 text-slate-900">
                {currentQuestion.question}
              </h2>

              {currentQuestion.required && (
                <span
                  className="text-red-500"
                  aria-label="Required"
                >
                  *
                </span>
              )}
            </div>

            {currentQuestion.description && (
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {currentQuestion.description}
              </p>
            )}
          </div>

          <div className="mt-5">
            {renderQuestionInput(currentQuestion)}
          </div>

          {errors[currentQuestion.id] && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors[currentQuestion.id]}
            </p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={submitting}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>
          )}

          {currentQuestionIndex > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              disabled={submitting}
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft size={17} />
              Previous
            </button>
          )}
        </div>

        {!isLastQuestion ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={submitting}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <ChevronRight size={17} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </>
            ) : (
              <>
                <Check size={17} />
                Submit Survey
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
}