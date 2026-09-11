import {
  FileSearch,
  FileText,
  Plus,
  RotateCcw,
} from "lucide-react";

interface EmptySurveyProps {
  hasSurveys: boolean;
  hasFilters: boolean;
  onCreateSurvey: () => void;
  onClearFilters: () => void;
}

const EmptySurvey = ({
  hasSurveys,
  hasFilters,
  onCreateSurvey,
  onClearFilters,
}: EmptySurveyProps) => {
  /*
   * Case 1:
   * Mentor has no surveys at all.
   */
  if (!hasSurveys) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          {/* Icon */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-50
              text-blue-600
            "
          >
            <FileText size={30} />
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-xl font-semibold text-slate-900">
            No Surveys Yet
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Create your first survey to collect feedback,
            understand your students and improve your
            mentorship experience.
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={onCreateSurvey}
            className="
              mt-6
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

            Create Your First Survey
          </button>
        </div>
      </div>
    );
  }

  /*
   * Case 2:
   * Surveys exist but current search/filter
   * does not match any survey.
   */
  if (hasFilters) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          {/* Icon */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-slate-100
              text-slate-500
            "
          >
            <FileSearch size={30} />
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-xl font-semibold text-slate-900">
            No Matching Surveys
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-slate-500">
            We couldn't find any surveys matching your
            current search or filters. Try changing your
            search or clearing the filters.
          </p>

          {/* Clear Filters */}
          <button
            type="button"
            onClick={onClearFilters}
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-700
              transition-all
              duration-200
              hover:bg-slate-50
              hover:border-slate-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <RotateCcw size={17} />

            Clear Filters
          </button>
        </div>
      </div>
    );
  }

  /*
   * Fallback
   */
  return null;
};

export default EmptySurvey;