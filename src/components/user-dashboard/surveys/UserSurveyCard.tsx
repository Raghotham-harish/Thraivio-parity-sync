import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  PlayCircle,
  UserRound,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface UserSurveyCardProps {
  survey: Survey;

  /**
   * Whether the logged-in user has already submitted this survey.
   */
  completed?: boolean;

  /**
   * Number of questions already answered.
   * Used only for showing progress.
   */
  answeredQuestions?: number;

  /**
   * Optional mentor name shown on the card.
   */
  mentorName?: string;

  /**
   * Called when the user wants to start/fill the survey.
   */
  onStart?: (survey: Survey) => void;

  /**
   * Called when the user wants to view their submitted response.
   */
  onViewResponse?: (survey: Survey) => void;
}

const getStatusConfig = (
  survey: Survey,
  completed: boolean
) => {
  if (completed) {
    return {
      label: "Completed",
      className:
        "bg-green-50 text-green-700 border-green-200",
      icon: CheckCircle2,
    };
  }

  if (survey.status === "closed") {
    return {
      label: "Closed",
      className:
        "bg-slate-100 text-slate-600 border-slate-200",
      icon: Clock3,
    };
  }

  if (survey.status === "archived") {
    return {
      label: "Archived",
      className:
        "bg-slate-100 text-slate-600 border-slate-200",
      icon: FileText,
    };
  }

  if (survey.status === "draft") {
    return {
      label: "Not Available",
      className:
        "bg-amber-50 text-amber-700 border-amber-200",
      icon: Clock3,
    };
  }

  return {
    label: "Available",
    className:
      "bg-blue-50 text-blue-700 border-blue-200",
    icon: PlayCircle,
  };
};

export default function UserSurveyCard({
  survey,
  completed = false,
  answeredQuestions = 0,
  mentorName,
  onStart,
  onViewResponse,
}: UserSurveyCardProps) {
  const totalQuestions = survey.questions?.length ?? 0;

  const safeAnsweredQuestions = Math.min(
    Math.max(answeredQuestions, 0),
    totalQuestions
  );

  const progress =
    totalQuestions > 0
      ? Math.round(
          (safeAnsweredQuestions / totalQuestions) * 100
        )
      : 0;

  const status = getStatusConfig(survey, completed);
  const StatusIcon = status.icon;

  const isClosed =
    survey.status === "closed" ||
    survey.status === "archived" ||
    survey.status === "draft";

  const canStart =
    survey.status === "published" &&
    survey.settings.acceptResponses &&
    !completed;

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <ClipboardList size={22} />
          </div>

          <div className="min-w-0">
            <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
              {survey.title}
            </h3>

            {mentorName && (
              <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <UserRound size={14} />
                <span className="truncate">
                  {mentorName}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Status */}
        <div
          className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${status.className}`}
        >
          <StatusIcon size={13} />
          {status.label}
        </div>
      </div>

      {/* Description */}
      {survey.description && (
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
          {survey.description}
        </p>
      )}

      {/* Survey information */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-50 px-3 py-2.5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FileText size={14} />
            Questions
          </div>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {totalQuestions}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 px-3 py-2.5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 size={14} />
            Response
          </div>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {completed ? "Submitted" : "Pending"}
          </p>
        </div>
      </div>

      {/* Progress */}
      {!completed &&
        !isClosed &&
        totalQuestions > 0 &&
        safeAnsweredQuestions > 0 && (
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Your progress
              </span>

              <span className="font-medium text-slate-700">
                {safeAnsweredQuestions}/{totalQuestions}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

      {/* Footer */}
      <div className="mt-auto pt-5">
        {completed ? (
          <button
            type="button"
            onClick={() => onViewResponse?.(survey)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <FileText size={16} />
            View Response
          </button>
        ) : canStart ? (
          <button
            type="button"
            onClick={() => onStart?.(survey)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <PlayCircle size={17} />
            Start Survey
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-400"
          >
            {survey.status === "closed"
              ? "Survey Closed"
              : survey.status === "archived"
                ? "Survey Archived"
                : "Not Available"}
          </button>
        )}
      </div>
    </article>
  );
}