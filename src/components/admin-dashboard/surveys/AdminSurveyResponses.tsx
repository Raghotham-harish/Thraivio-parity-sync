import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Mail,
  UserRound,
} from "lucide-react";

import type { Survey } from "@/types/survey";

export interface AdminSurveyResponseAnswer {
  questionId: string;
  answer: unknown;
}

export interface AdminSurveyResponse {
  id: string;
  surveyId: string;
  userId: string;
  userName?: string;
  userEmail?: string;
  answers: AdminSurveyResponseAnswer[];
  submittedAt: string;
}

interface AdminSurveyResponsesProps {
  survey: Survey;
  responses: AdminSurveyResponse[];

  onClose?: () => void;
}

const formatAnswer = (answer: unknown): string => {
  if (
    answer === null ||
    answer === undefined ||
    answer === ""
  ) {
    return "No answer";
  }

  if (Array.isArray(answer)) {
    if (answer.length === 0) {
      return "No answer";
    }

    return answer.join(", ");
  }

  if (typeof answer === "boolean") {
    return answer ? "Yes" : "No";
  }

  if (
    typeof answer === "object"
  ) {
    return JSON.stringify(answer);
  }

  return String(answer);
};

const formatDate = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return date.toLocaleString();
};

export default function AdminSurveyResponses({
  survey,
  responses,
  onClose,
}: AdminSurveyResponsesProps) {
  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ClipboardList size={22} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Survey Responses
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {survey.title}
              </p>
            </div>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="self-start rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Close
            </button>
          )}
        </div>

        {/* Summary */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">
              Total Responses
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-900">
              {responses.length}
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">
              Questions
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-900">
              {survey.questions.length}
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">
              Status
            </p>

            <p className="mt-1 text-lg font-semibold capitalize text-slate-900">
              {survey.status}
            </p>
          </div>
        </div>
      </div>

      {/* Empty state */}
      {responses.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <ClipboardList
              size={22}
              className="text-slate-400"
            />
          </div>

          <h3 className="mt-4 text-base font-semibold text-slate-900">
            No Responses Yet
          </h3>

          <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-slate-500">
            No students have submitted a response for
            this survey yet.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-200">
          {responses.map((response, index) => (
            <AdminResponseItem
              key={response.id}
              response={response}
              survey={survey}
              responseNumber={index + 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}

interface AdminResponseItemProps {
  response: AdminSurveyResponse;
  survey: Survey;
  responseNumber: number;
}

function AdminResponseItem({
  response,
  survey,
  responseNumber,
}: AdminResponseItemProps) {
  const [expanded, setExpanded] = useState(
    responseNumber === 1
  );

  const questions = [...survey.questions].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div className="p-5 sm:p-6">
      {/* Response header */}
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={expanded}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <UserRound size={18} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-sm font-semibold text-slate-900">
                {response.userName ||
                  "Unknown Student"}
              </h3>

              <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                Submitted
              </span>
            </div>

            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              {response.userEmail && (
                <span className="flex items-center gap-1.5">
                  <Mail size={13} />
                  {response.userEmail}
                </span>
              )}

              <span>
                {formatDate(response.submittedAt)}
              </span>
            </div>
          </div>
        </div>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
          {expanded ? (
            <ChevronUp size={19} />
          ) : (
            <ChevronDown size={19} />
          )}
        </span>
      </button>

      {/* Answers */}
      {expanded && (
        <div className="mt-5 space-y-4">
          {questions.map((question) => {
            const responseAnswer =
              response.answers.find(
                (item) =>
                  item.questionId === question.id
              );

            const answer = responseAnswer?.answer;

            return (
              <div
                key={question.id}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-slate-400">
                    Q{question.order}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-6 text-slate-900">
                      {question.question}
                    </p>

                    <div className="mt-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                      <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
                        {formatAnswer(answer)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex items-center gap-2 pt-1 text-xs text-green-600">
            <CheckCircle2 size={14} />
            Response submitted on{" "}
            {formatDate(response.submittedAt)}
          </div>
        </div>
      )}
    </div>
  );
}