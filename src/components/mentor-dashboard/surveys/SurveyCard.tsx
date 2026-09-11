import {
  BarChart3,
  Eye,
  MoreVertical,
  Pencil,
  Users,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface SurveyCardProps {
  survey: Survey;
  onEdit: (survey: Survey) => void;
  onPreview: (survey: Survey) => void;
  onResponses: (survey: Survey) => void;
  onMenu: (survey: Survey) => void;
}

const SurveyCard = ({
  survey,
  onEdit,
  onPreview,
  onResponses,
  onMenu,
}: SurveyCardProps) => {
  const statusClasses = {
    draft: "bg-slate-100 text-slate-700",
    published: "bg-green-100 text-green-700",
    closed: "bg-amber-100 text-amber-700",
    archived: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-slate-900">
            {survey.title}
          </h2>

          <p className="mt-1 line-clamp-2 text-sm text-slate-500">
            {survey.description || "No description added."}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onMenu(survey)}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Survey options"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            statusClasses[survey.status]
          }`}
        >
          {survey.status.charAt(0).toUpperCase() +
            survey.status.slice(1)}
        </span>

        <span className="text-sm text-slate-500">
          {survey.questions.length}{" "}
          {survey.questions.length === 1
            ? "Question"
            : "Questions"}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-50 p-3">
          <div className="flex items-center gap-2 text-slate-500">
            <Users size={16} />

            <span className="text-xs">
              Responses
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            {survey.responseCount}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3">
          <div className="flex items-center gap-2 text-slate-500">
            <BarChart3 size={16} />

            <span className="text-xs">
              Questions
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            {survey.questions.length}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={() => onEdit(survey)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Pencil size={15} />

          Edit
        </button>

        <button
          type="button"
          onClick={() => onPreview(survey)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Eye size={15} />

          Preview
        </button>

        <button
          type="button"
          onClick={() => onResponses(survey)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Users size={15} />

          Responses
        </button>
      </div>
    </div>
  );
};

export default SurveyCard;