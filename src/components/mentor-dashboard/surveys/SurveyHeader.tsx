import { FileText, Plus } from "lucide-react";

interface SurveyHeaderProps {
  totalSurveys: number;
  onCreateSurvey: () => void;
}

const SurveyHeader = ({
  totalSurveys,
  onCreateSurvey,
}: SurveyHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Title */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FileText size={21} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Surveys
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Create and manage surveys for your students.
            </p>
          </div>
        </div>

        {/* Survey Count */}
        <div className="mt-3">
          <span className="text-sm text-slate-500">
            Total surveys:
          </span>

          <span className="ml-1 text-sm font-semibold text-slate-700">
            {totalSurveys}
          </span>
        </div>
      </div>

      {/* Create Button */}
      <button
        type="button"
        onClick={onCreateSurvey}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-sm
          transition-all
          duration-200
          hover:bg-blue-700
          hover:shadow-md
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2
          active:scale-[0.98]
        "
      >
        <Plus size={18} />

        <span>
          Create Survey
        </span>
      </button>
    </div>
  );
};

export default SurveyHeader;