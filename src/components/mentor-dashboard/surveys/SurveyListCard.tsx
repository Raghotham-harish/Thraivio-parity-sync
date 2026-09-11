import {
  BarChart3,
  CalendarDays,
  Copy,
  Edit3,
  Eye,
  FileText,
  Send,
  Trash2,
  Users,
} from "lucide-react";

import type {
  Survey,
  SurveyStatus,
} from "@/types/survey";

interface SurveyListCardProps {
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

const SurveyListCard = ({
  survey,
  onPreview,
  onEdit,
  onDuplicate,
  onDelete,
  onTogglePublish,
  onResponses,
}: SurveyListCardProps) => {
  const status = statusConfig[survey.status];

  const canPublish =
    survey.status === "draft" ||
    survey.status === "closed";

  const canUnpublish =
    survey.status === "published";

  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
      "
    >
      <div className="p-5">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center">

          {/* Survey Information */}
          <div className="flex min-w-0 flex-1 items-start gap-4">
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              "
            >
              <FileText size={22} />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className="
                    line-clamp-1
                    text-base
                    font-semibold
                    text-slate-900
                  "
                  title={survey.title}
                >
                  {survey.title}
                </h3>

                {/* Status */}
                <span
                  className={`
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    px-2.5
                    py-1
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

              <p
                className="
                  mt-1
                  line-clamp-2
                  max-w-3xl
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {survey.description ||
                  "No description has been added to this survey."}
              </p>

              {/* Dates */}
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={13} />

                  Created {formatDate(survey.createdAt)}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={13} />

                  Updated {formatDate(survey.updatedAt)}
                </span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div
            className="
              flex
              shrink-0
              flex-wrap
              items-center
              gap-3
              xl:border-l
              xl:border-slate-100
              xl:pl-5
            "
          >
            {/* Questions */}
            <div
              className="
                min-w-[100px]
                rounded-xl
                border
                border-slate-100
                bg-slate-50
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-2">
                <FileText
                  size={14}
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
                min-w-[100px]
                rounded-xl
                border
                border-slate-100
                bg-slate-50
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-2">
                <Users
                  size={14}
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

          {/* Actions */}
          <div
            className="
              flex
              shrink-0
              flex-wrap
              items-center
              gap-2
              xl:max-w-[310px]
              xl:justify-end
            "
          >
            {/* Preview */}
            <button
              type="button"
              onClick={() => onPreview(survey)}
              title="Preview survey"
              className="
                inline-flex
                items-center
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
              title="Edit survey"
              className="
                inline-flex
                items-center
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

            {/* Publish / Unpublish */}
            {(canPublish || canUnpublish) && (
              <button
                type="button"
                onClick={() =>
                  onTogglePublish(survey)
                }
                title={
                  canUnpublish
                    ? "Unpublish survey"
                    : "Publish survey"
                }
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border
                  border-slate-200
                  px-3
                  py-2.5
                  text-xs
                  font-medium
                  text-slate-600
                  transition
                  hover:bg-slate-50
                  hover:text-slate-900
                "
              >
                <Send size={15} />

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
              title="Duplicate survey"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                p-2.5
                text-slate-600
                transition
                hover:bg-slate-50
              "
            >
              <Copy size={16} />
            </button>

            {/* Delete */}
            <button
              type="button"
              onClick={() =>
                onDelete(survey)
              }
              title="Delete survey"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-red-100
                p-2.5
                text-red-600
                transition
                hover:bg-red-50
              "
            >
              <Trash2 size={16} />
            </button>

            {/* Responses */}
            {survey.responseCount > 0 && (
              <button
                type="button"
                onClick={() =>
                  onResponses(survey)
                }
                title="View responses"
                className="
                  inline-flex
                  items-center
                  gap-1.5
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

                Responses
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SurveyListCard;