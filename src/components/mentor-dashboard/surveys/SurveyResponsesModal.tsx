import {
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  FileText,
  Mail,
  MessageSquare,
  Star,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

import type { Survey } from "@/types/survey";

interface SurveyAnswer {
  questionId: string;
  value: string | string[] | number | boolean | null;
}

interface SurveyResponse {
  id: string;
  userId: string;
  studentName: string;
  studentEmail?: string;
  answers: SurveyAnswer[];
  submittedAt: string;
}

interface SurveyResponsesModalProps {
  isOpen: boolean;
  survey: Survey | null;
  responses: SurveyResponse[];
  onClose: () => void;
  loading?: boolean;
}

const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Unknown date";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const formatAnswer = (
  value: SurveyAnswer["value"]
) => {
  if (value === null || value === undefined) {
    return "No answer";
  }

  if (Array.isArray(value)) {
    return value.length > 0
      ? value.join(", ")
      : "No answer";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
};

const SurveyResponsesModal = ({
  isOpen,
  survey,
  responses,
  onClose,
  loading = false,
}: SurveyResponsesModalProps) => {
  const [expandedResponse, setExpandedResponse] =
    useState<string | null>(null);

  if (!isOpen || !survey) {
    return null;
  }

  const toggleResponse = (responseId: string) => {
    setExpandedResponse((current) =>
      current === responseId ? null : responseId
    );
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
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              "
            >
              <BarChart3 size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-slate-900">
                Survey Responses
              </h2>

              <p className="truncate text-xs text-slate-400">
                {survey.title}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close responses"
            className="
              flex
              h-9
              w-9
              shrink-0
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

        {/* Summary */}
        <div
          className="
            grid
            shrink-0
            grid-cols-2
            gap-3
            border-b
            border-slate-200
            bg-slate-50
            p-4
            sm:grid-cols-3
            sm:px-6
          "
        >
          <div
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3
            "
          >
            <p className="text-xs text-slate-400">
              Total Responses
            </p>

            <p className="mt-1 text-xl font-bold text-slate-800">
              {responses.length}
            </p>
          </div>

          <div
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3
            "
          >
            <p className="text-xs text-slate-400">
              Questions
            </p>

            <p className="mt-1 text-xl font-bold text-slate-800">
              {survey.questions.length}
            </p>
          </div>

          <div
            className="
              col-span-2
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3
              sm:col-span-1
            "
          >
            <p className="text-xs text-slate-400">
              Status
            </p>

            <p className="mt-1 text-sm font-semibold capitalize text-slate-700">
              {survey.status}
            </p>
          </div>
        </div>

        {/* Responses */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-3 p-4 sm:p-6">
            {loading ? (
              <div
                className="
                  flex
                  min-h-60
                  items-center
                  justify-center
                "
              >
                <div className="text-center">
                  <div
                    className="
                      mx-auto
                      h-8
                      w-8
                      animate-spin
                      rounded-full
                      border-2
                      border-slate-200
                      border-t-blue-600
                    "
                  />

                  <p className="mt-3 text-sm text-slate-500">
                    Loading responses...
                  </p>
                </div>
              </div>
            ) : responses.length === 0 ? (
              <div
                className="
                  flex
                  min-h-60
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-300
                  bg-slate-50
                  px-5
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-slate-400
                    shadow-sm
                  "
                >
                  <FileText size={21} />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-700">
                  No responses yet
                </h3>

                <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
                  Students&apos; submitted responses will
                  appear here once they complete this
                  survey.
                </p>
              </div>
            ) : (
              responses.map((response) => {
                const isExpanded =
                  expandedResponse === response.id;

                return (
                  <div
                    key={response.id}
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                    "
                  >
                    {/* Response Header */}
                    <button
                      type="button"
                      onClick={() =>
                        toggleResponse(response.id)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                        p-4
                        text-left
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-50
                            text-blue-600
                          "
                        >
                          <User size={18} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {response.studentName}
                          </p>

                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                            {response.studentEmail && (
                              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                                <Mail size={12} />
                                {response.studentEmail}
                              </span>
                            )}

                            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                              <CalendarDays size={12} />
                              {formatDate(
                                response.submittedAt
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          text-slate-400
                        "
                      >
                        {isExpanded ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </div>
                    </button>

                    {/* Response Details */}
                    {isExpanded && (
                      <div
                        className="
                          border-t
                          border-slate-200
                          bg-slate-50
                          p-4
                        "
                      >
                        <div className="space-y-3">
                          {survey.questions
                            .slice()
                            .sort(
                              (a, b) =>
                                a.order - b.order
                            )
                            .map(
                              (
                                question,
                                questionIndex
                              ) => {
                                const answer =
                                  response.answers.find(
                                    (item) =>
                                      item.questionId ===
                                      question.id
                                  );

                                return (
                                  <div
                                    key={question.id}
                                    className="
                                      rounded-xl
                                      border
                                      border-slate-200
                                      bg-white
                                      p-4
                                    "
                                  >
                                    <div className="flex items-start gap-3">
                                      <div
                                        className="
                                          flex
                                          h-7
                                          w-7
                                          shrink-0
                                          items-center
                                          justify-center
                                          rounded-lg
                                          bg-slate-100
                                          text-xs
                                          font-semibold
                                          text-slate-500
                                        "
                                      >
                                        {questionIndex +
                                          1}
                                      </div>

                                      <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-slate-700">
                                          {
                                            question.question
                                          }

                                          {question.required && (
                                            <span className="ml-1 text-red-500">
                                              *
                                            </span>
                                          )}
                                        </p>

                                        <div className="mt-2 flex items-start gap-2">
                                          <MessageSquare
                                            size={15}
                                            className="
                                              mt-0.5
                                              shrink-0
                                              text-slate-400
                                            "
                                          />

                                          <p className="text-sm leading-6 text-slate-600">
                                            {formatAnswer(
                                              answer?.value ??
                                                null
                                            )}
                                          </p>
                                        </div>

                                        {question.type ===
                                          "rating" &&
                                          answer?.value && (
                                            <div className="mt-2 flex items-center gap-1">
                                              {[
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                              ].map(
                                                (
                                                  rating
                                                ) => (
                                                  <Star
                                                    key={
                                                      rating
                                                    }
                                                    size={
                                                      15
                                                    }
                                                    className={
                                                      rating <=
                                                      Number(
                                                        answer.value
                                                      )
                                                        ? "fill-current text-amber-400"
                                                        : "text-slate-200"
                                                    }
                                                  />
                                                )
                                              )}
                                            </div>
                                          )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            gap-3
            border-t
            border-slate-200
            bg-white
            px-5
            py-3
            sm:px-6
          "
        >
          <p className="hidden text-xs text-slate-400 sm:block">
            Click a response to view all answers.
          </p>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              ml-auto
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
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyResponsesModal;