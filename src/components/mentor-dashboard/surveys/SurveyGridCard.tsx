import {
  BarChart3,
  CalendarDays,
  Copy,
  Edit3,
  Eye,
  FileText,
  MoreVertical,
  Send,
  Trash2,
  Users,
} from "lucide-react";

import type {
  Survey,
  SurveyStatus,
} from "@/types/survey";

interface SurveyGridCardProps {
  survey: Survey;

  onPreview: (survey: Survey) => void;
  onEdit: (survey: Survey) => void;
  onDuplicate: (survey: Survey) => void;
  onDelete: (survey: Survey) => void;
  onTogglePublish: (survey: Survey) => void;
  onResponses: (survey: Survey) => void;
}

const statusConfig: Record<
  SurveyStatus,
  {
    label: string;
    className: string;
    dotClassName: string;
  }
> = {
  draft: {
    label: "Draft",
    className: "bg-slate-100 text-slate-700",
    dotClassName: "bg-slate-500",
  },

  published: {
    label: "Published",
    className: "bg-green-50 text-green-700",
    dotClassName: "bg-green-500",
  },

  closed: {
    label: "Closed",
    className: "bg-orange-50 text-orange-700",
    dotClassName: "bg-orange-500",
  },

  archived: {
    label: "Archived",
    className: "bg-red-50 text-red-700",
    dotClassName: "bg-red-500",
  },
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

const SurveyGridCard = ({
  survey,
  onPreview,
  onEdit,
  onDuplicate,
  onDelete,
  onTogglePublish,
  onResponses,
}: SurveyGridCardProps) => {
  const status = statusConfig[survey.status];

  const canPublish =
    survey.status === "draft" ||
    survey.status === "closed";

  const canUnpublish =
    survey.status === "published";

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-lg
      "
    >
      {/* Top Accent */}
      <div className="h-1 bg-blue-600" />

      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              "
            >
              <FileText size={21} />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  line-clamp-2
                  text-base
                  font-semibold
                  leading-6
                  text-slate-900
                "
                title={survey.title}
              >
                {survey.title}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Created {formatDate(survey.createdAt)}
              </p>
            </div>
          </div>

          {/* More Menu Placeholder */}
          <button
            type="button"
            aria-label={`More options for ${survey.title}`}
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
              hover:text-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <MoreVertical size={19} />
          </button>
        </div>

        {/* Status */}
        <div className="mt-4">
          <span
            className={`
              inline-flex
              items-center
              gap-1.5
              rounded-full
              px-3
              py-1.5
              text-xs
              font-medium
              ${status.className}
            `}
          >
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${status.dotClassName}
              `}
            />

            {status.label}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            mt-4
            line-clamp-2
            min-h-[48px]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {survey.description ||
            "No description has been added to this survey."}
        </p>

        {/* Statistics */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {/* Questions */}
          <div
            className="
              rounded-xl
              border
              border-slate-100
              bg-slate-50
              p-3
            "
          >
            <div className="flex items-center gap-2">
              <FileText
                size={15}
                className="text-slate-400"
              />

              <span className="text-xs text-slate-500">
                Questions
              </span>
            </div>

            <p className="mt-1 text-lg font-bold text-slate-900">
              {survey.questions.length}
            </p>
          </div>

          {/* Responses */}
          <div
            className="
              rounded-xl
              border
              border-slate-100
              bg-slate-50
              p-3
            "
          >
            <div className="flex items-center gap-2">
              <Users
                size={15}
                className="text-slate-400"
              />

              <span className="text-xs text-slate-500">
                Responses
              </span>
            </div>

            <p className="mt-1 text-lg font-bold text-slate-900">
              {survey.responseCount}
            </p>
          </div>
        </div>

        {/* Updated Date */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays size={14} />

          <span>
            Updated {formatDate(survey.updatedAt)}
          </span>
        </div>

        {/* Main Actions */}
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Preview */}
            <button
              type="button"
              onClick={() => onPreview(survey)}
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border
                border-slate-200
                px-3
                py-2.5
                text-xs
                font-medium
                text-slate-700
                transition
                hover:bg-slate-50
                focus:outline-none
                focus:ring-2
                focus:ring-blue-100
              "
            >
              <Eye size={15} />
              Preview
            </button>

            {/* Edit */}
            <button
              type="button"
              onClick={() => onEdit(survey)}
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-lg
                bg-blue-600
                px-3
                py-2.5
                text-xs
                font-medium
                text-white
                transition
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-200
              "
            >
              <Edit3 size={15} />
              Edit
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="mt-2 grid grid-cols-3 gap-2">
            {/* Publish / Unpublish */}
            {(canPublish || canUnpublish) && (
              <button
                type="button"
                onClick={() =>
                  onTogglePublish(survey)
                }
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1
                  rounded-lg
                  border
                  border-slate-200
                  px-2
                  py-2
                  text-xs
                  font-medium
                  text-slate-600
                  transition
                  hover:bg-slate-50
                  hover:text-slate-900
                "
              >
                <Send size={14} />

                {canUnpublish
                  ? "Unpublish"
                  : "Publish"}
              </button>
            )}

            {/* Duplicate */}
            <button
              type="button"
              onClick={() =>
                onDuplicate(survey)
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-1
                rounded-lg
                border
                border-slate-200
                px-2
                py-2
                text-xs
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                hover:text-slate-900
              "
            >
              <Copy size={14} />

              Duplicate
            </button>

            {/* Delete */}
            <button
              type="button"
              onClick={() =>
                onDelete(survey)
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-1
                rounded-lg
                border
                border-red-100
                px-2
                py-2
                text-xs
                font-medium
                text-red-600
                transition
                hover:bg-red-50
              "
            >
              <Trash2 size={14} />

              Delete
            </button>
          </div>

          {/* Responses */}
          {survey.responseCount > 0 && (
            <button
              type="button"
              onClick={() =>
                onResponses(survey)
              }
              className="
                mt-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-blue-100
                bg-blue-50
                px-3
                py-2.5
                text-xs
                font-medium
                text-blue-700
                transition
                hover:bg-blue-100
              "
            >
              <BarChart3 size={15} />

              View Responses
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default SurveyGridCard;