import {
  BarChart3,
  ClipboardList,
  Eye,
  FileText,
  MoreVertical,
  UserRound,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface AdminSurveyCardProps {
  survey: Survey;

  /**
   * Mentor/owner name.
   */
  mentorName?: string;

  /**
   * Mentor/owner email.
   */
  mentorEmail?: string;

  /**
   * Open survey preview.
   */
  onPreview?: (survey: Survey) => void;

  /**
   * Open survey responses.
   */
  onViewResponses?: (survey: Survey) => void;

  /**
   * Delete/remove survey.
   */
  onDelete?: (survey: Survey) => void;
}

const statusConfig: Record<
  Survey["status"],
  {
    label: string;
    className: string;
  }
> = {
  draft: {
    label: "Draft",
    className:
      "border-amber-200 bg-amber-50 text-amber-700",
  },
  published: {
    label: "Published",
    className:
      "border-green-200 bg-green-50 text-green-700",
  },
  closed: {
    label: "Closed",
    className:
      "border-slate-200 bg-slate-100 text-slate-600",
  },
  archived: {
    label: "Archived",
    className:
      "border-slate-200 bg-slate-100 text-slate-600",
  },
};

export default function AdminSurveyCard({
  survey,
  mentorName,
  mentorEmail,
  onPreview,
  onViewResponses,
  onDelete,
}: AdminSurveyCardProps) {
  const status = statusConfig[survey.status];

  const questionCount =
    survey.questions?.length ?? 0;

  const responseCount =
    survey.responseCount ?? 0;

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

            <p className="mt-1 text-xs text-slate-400">
              ID: {survey.id}
            </p>
          </div>
        </div>

        {/* Status */}
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      {/* Description */}
      {survey.description && (
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
          {survey.description}
        </p>
      )}

      {/* Mentor / Owner */}
      <div className="mt-5 rounded-lg bg-slate-50 p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
            <UserRound size={17} />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-slate-500">
              Survey Owner
            </p>

            <p className="truncate text-sm font-medium text-slate-900">
              {mentorName || "Unknown Mentor"}
            </p>

            {mentorEmail && (
              <p className="truncate text-xs text-slate-500">
                {mentorEmail}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-slate-100 px-3 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FileText size={14} />
            Questions
          </div>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            {questionCount}
          </p>
        </div>

        <div className="rounded-lg border border-slate-100 px-3 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <BarChart3 size={14} />
            Responses
          </div>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            {responseCount}
          </p>
        </div>
      </div>

      {/* Dates */}
      <div className="mt-4 space-y-1 text-xs text-slate-500">
        <div className="flex items-center justify-between gap-3">
          <span>Created</span>

          <span className="font-medium text-slate-700">
            {new Date(
              survey.createdAt
            ).toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span>Updated</span>

          <span className="font-medium text-slate-700">
            {new Date(
              survey.updatedAt
            ).toLocaleDateString()}
          </span>
        </div>

        {survey.publishedAt && (
          <div className="flex items-center justify-between gap-3">
            <span>Published</span>

            <span className="font-medium text-slate-700">
              {new Date(
                survey.publishedAt
              ).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-auto flex items-center gap-2 pt-5">
        <button
          type="button"
          onClick={() => onPreview?.(survey)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Eye size={16} />
          Preview
        </button>

        <button
          type="button"
          onClick={() =>
            onViewResponses?.(survey)
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <BarChart3 size={16} />
          Responses
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => onDelete?.(survey)}
            aria-label={`Manage ${survey.title}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}