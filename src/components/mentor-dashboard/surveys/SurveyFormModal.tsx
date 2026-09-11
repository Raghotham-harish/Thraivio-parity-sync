import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

import type {
  Survey,
  SurveyQuestion,
  SurveyQuestionType,
  SurveySettings as SurveySettingsType,
} from "@/types/survey";

import QuestionOptions from "./QuestionOptions";
import SurveyQuestionCard from "./SurveyQuestionCard";
import SurveySettings from "./SurveySettings";

interface SurveyFormModalProps {
  isOpen: boolean;
  survey?: Survey | null;
  onClose: () => void;
  onSave: (
    survey: Omit<Survey, "id" | "createdAt" | "updatedAt">
  ) => void;
}

const defaultSettings: SurveySettingsType = {
  acceptResponses: true,
  requireLogin: true,
  allowMultipleSubmissions: false,
  showProgressBar: true,
  shuffleQuestions: false,
  showResultsToStudents: false,
};

const createQuestion = (
  order: number
): SurveyQuestion => ({
  id: `question-${Date.now()}-${order}`,
  type: "short_text",
  question: "",
  description: "",
  required: false,
  order,
});

const optionBasedTypes: SurveyQuestionType[] = [
  "single_select",
  "multi_select",
  "dropdown",
];

const SurveyFormModal = ({
  isOpen,
  survey = null,
  onClose,
  onSave,
}: SurveyFormModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<
    SurveyQuestion[]
  >([]);
  const [settings, setSettings] =
    useState<SurveySettingsType>(defaultSettings);
  const [status, setStatus] = useState<
    "draft" | "published"
  >("draft");
  const [error, setError] = useState("");

  const isEditMode = Boolean(survey);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (survey) {
      setTitle(survey.title);
      setDescription(survey.description || "");
      setQuestions(
        [...survey.questions].sort(
          (a, b) => a.order - b.order
        )
      );
      setSettings({
        ...defaultSettings,
        ...survey.settings,
      });

      setStatus(
        survey.status === "published"
          ? "published"
          : "draft"
      );
    } else {
      setTitle("");
      setDescription("");
      setQuestions([createQuestion(0)]);
      setSettings(defaultSettings);
      setStatus("draft");
    }

    setError("");
  }, [isOpen, survey]);

  if (!isOpen) {
    return null;
  }

  const handleAddQuestion = () => {
    setQuestions((currentQuestions) => [
      ...currentQuestions,
      createQuestion(currentQuestions.length),
    ]);
  };

  const handleQuestionChange = (
    updatedQuestion: SurveyQuestion
  ) => {
    setQuestions((currentQuestions) =>
      currentQuestions.map((question) =>
        question.id === updatedQuestion.id
          ? updatedQuestion
          : question
      )
    );
  };

  const handleDeleteQuestion = (
    questionId: string
  ) => {
    setQuestions((currentQuestions) =>
      currentQuestions
        .filter(
          (question) => question.id !== questionId
        )
        .map((question, index) => ({
          ...question,
          order: index,
        }))
    );
  };

  const handleDuplicateQuestion = (
    questionId: string
  ) => {
    setQuestions((currentQuestions) => {
      const index = currentQuestions.findIndex(
        (question) => question.id === questionId
      );

      if (index === -1) {
        return currentQuestions;
      }

      const original = currentQuestions[index];

      const duplicate: SurveyQuestion = {
        ...original,
        id: `question-${Date.now()}-${index}`,
        question: original.question
          ? `${original.question} (Copy)`
          : "",
        options: original.options
          ? original.options.map((option) => ({
              ...option,
              id: `option-${Date.now()}-${Math.random()}`,
            }))
          : undefined,
        order: index + 1,
      };

      return [
        ...currentQuestions
          .slice(0, index + 1)
          .map((question) => ({
            ...question,
            order: question.order,
          })),
        duplicate,
        ...currentQuestions
          .slice(index + 1)
          .map((question) => ({
            ...question,
            order: question.order + 1,
          })),
      ];
    });
  };

  const handleAddOption = (
    questionId: string
  ) => {
    setQuestions((currentQuestions) =>
      currentQuestions.map((question) => {
        if (question.id !== questionId) {
          return question;
        }

        const currentOptions = question.options || [];

        return {
          ...question,
          options: [
            ...currentOptions,
            {
              id: `option-${Date.now()}-${currentOptions.length}`,
              label: `Option ${
                currentOptions.length + 1
              }`,
            },
          ],
        };
      })
    );
  };

  const handleOptionsChange = (
    questionId: string,
    options: NonNullable<
      SurveyQuestion["options"]
    >
  ) => {
    setQuestions((currentQuestions) =>
      currentQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              options,
            }
          : question
      )
    );
  };

  const handleSave = () => {
    setError("");

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("Please enter a survey title.");
      return;
    }

    if (questions.length === 0) {
      setError(
        "Please add at least one question."
      );
      return;
    }

    const hasEmptyQuestion = questions.some(
      (question) => !question.question.trim()
    );

    if (hasEmptyQuestion) {
      setError(
        "Please enter text for every question."
      );
      return;
    }

    const hasInvalidOptions = questions.some(
      (question) =>
        optionBasedTypes.includes(question.type) &&
        (!question.options ||
          question.options.length === 0 ||
          question.options.some(
            (option) => !option.label.trim()
          ))
    );

    if (hasInvalidOptions) {
      setError(
        "Please add valid options to every choice-based question."
      );
      return;
    }

    const normalizedQuestions =
      questions.map((question, index) => ({
        ...question,
        question: question.question.trim(),
        description:
          question.description?.trim() || "",
        order: index,
        options: question.options?.map(
          (option) => ({
            ...option,
            label: option.label.trim(),
          })
        ),
      }));

    onSave({
      title: trimmedTitle,
      description: description.trim(),
      mentorId: survey?.mentorId || "",
      questions: normalizedQuestions,
      status,
      settings,
      responseCount: survey?.responseCount || 0,
      publishedAt:
        status === "published"
          ? survey?.publishedAt ||
            new Date().toISOString()
          : undefined,
    });

    onClose();
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
          max-w-5xl
          flex-col
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
            shrink-0
            items-center
            justify-between
            border-b
            border-slate-200
            px-5
            py-4
            sm:px-6
          "
        >
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {isEditMode
                ? "Edit Survey"
                : "Create Survey"}
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Build a survey for your students.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close survey form"
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

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-5 sm:p-6">
            {/* Basic Information */}
            <section className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  Basic Information
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Add the basic details of your survey.
                </p>
              </div>

              <div>
                <label
                  htmlFor="survey-title"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  Survey Title
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                </label>

                <input
                  id="survey-title"
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="e.g. Student Feedback Survey"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    px-4
                    py-3
                    text-sm
                    text-slate-700
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

              <div>
                <label
                  htmlFor="survey-description"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  Description
                </label>

                <textarea
                  id="survey-description"
                  value={description}
                  onChange={(event) =>
                    setDescription(
                      event.target.value
                    )
                  }
                  placeholder="Explain what this survey is about..."
                  rows={3}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    px-4
                    py-3
                    text-sm
                    text-slate-700
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
            </section>

            {/* Questions */}
            <section className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    Questions
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Add and arrange the questions students
                    will answer.
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-slate-600
                  "
                >
                  {questions.length}{" "}
                  {questions.length === 1
                    ? "Question"
                    : "Questions"}
                </span>
              </div>

              <div className="space-y-4">
                {questions.map(
                  (question, index) => (
                    <div
                      key={question.id}
                      className="space-y-3"
                    >
                      <SurveyQuestionCard
                        question={question}
                        index={index}
                        onChange={
                          handleQuestionChange
                        }
                        onDelete={
                          handleDeleteQuestion
                        }
                        onDuplicate={
                          handleDuplicateQuestion
                        }
                        onAddOption={
                          optionBasedTypes.includes(
                            question.type
                          )
                            ? handleAddOption
                            : undefined
                        }
                      />

                      {optionBasedTypes.includes(
                        question.type
                      ) && (
                        <div
                          className="
                            ml-0
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            p-4
                            sm:ml-4
                          "
                        >
                          <QuestionOptions
                            options={
                              question.options || []
                            }
                            onChange={(options) =>
                              handleOptionsChange(
                                question.id,
                                options
                              )
                            }
                          />
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              <button
                type="button"
                onClick={handleAddQuestion}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-dashed
                  border-blue-300
                  bg-blue-50
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-blue-600
                  transition
                  hover:border-blue-400
                  hover:bg-blue-100
                "
              >
                <Plus size={17} />
                Add Question
              </button>
            </section>

            {/* Settings */}
            <section
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-4
                sm:p-5
              "
            >
              <SurveySettings
                settings={settings}
                onChange={setSettings}
              />
            </section>

            {/* Status */}
            <section className="space-y-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  Survey Status
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Choose whether to save this survey as a
                  draft or publish it.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setStatus("draft")
                  }
                  className={`
                    rounded-xl
                    border
                    p-4
                    text-left
                    transition
                    ${
                      status === "draft"
                        ? "border-blue-300 bg-blue-50 ring-2 ring-blue-100"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }
                  `}
                >
                  <p className="text-sm font-semibold text-slate-700">
                    Save as Draft
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Keep the survey private while you
                    continue editing it.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setStatus("published")
                  }
                  className={`
                    rounded-xl
                    border
                    p-4
                    text-left
                    transition
                    ${
                      status === "published"
                        ? "border-green-300 bg-green-50 ring-2 ring-green-100"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }
                  `}
                >
                  <p className="text-sm font-semibold text-slate-700">
                    Publish Survey
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Make the survey available for students
                    to complete.
                  </p>
                </button>
              </div>
            </section>

            {/* Error */}
            {error && (
              <div
                className="
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-red-600
                "
              >
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            shrink-0
            flex-col-reverse
            gap-3
            border-t
            border-slate-200
            bg-white
            px-5
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-end
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
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="
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
              hover:shadow-md
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
            "
          >
            {isEditMode
              ? "Save Changes"
              : "Create Survey"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyFormModal;