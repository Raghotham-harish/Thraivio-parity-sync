import { useMemo, useState } from "react";
import {
  ClipboardList,
  Search,
  X,
} from "lucide-react";

import type { Survey } from "@/types/survey";
import { dummySurveys } from "@/data/dummySurveys";

import UserSurveyList from "@/components/user-dashboard/surveys/UserSurveyList";
import SurveyResponseForm from "@/components/user-dashboard/surveys/SurveyResponseForm";
import SurveySubmissionSuccess from "@/components/user-dashboard/surveys/SurveySubmissionSuccess";

type SurveyView =
  | "list"
  | "form"
  | "success";

type FilterStatus =
  | "all"
  | "available"
  | "completed"
  | "closed";

export default function Surveys() {
  const [surveys] = useState<Survey[]>(dummySurveys);

  const [view, setView] =
    useState<SurveyView>("list");

  const [selectedSurvey, setSelectedSurvey] =
    useState<Survey | null>(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState<FilterStatus>("all");

  const [completedSurveyIds, setCompletedSurveyIds] =
    useState<string[]>([]);

  const [answeredQuestions] =
    useState<Record<string, number>>({});

  const [submittedResponseId, setSubmittedResponseId] =
    useState<string | undefined>();

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  /*
   * Dummy mentor names for now.
   *
   * Once the backend integration is added,
   * this will come from the mentor/user data.
   */
  const mentorNames: Record<string, string> = {
    "mentor-001": "Sunil Kumar",
  };

  /*
   * Filter surveys for the logged-in user.
   */
  const filteredSurveys = useMemo(() => {
    const normalizedSearch =
      searchTerm.trim().toLowerCase();

    return surveys.filter((survey) => {
      const matchesSearch =
        !normalizedSearch ||
        survey.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        survey.description
          ?.toLowerCase()
          .includes(normalizedSearch);

      const completed =
        completedSurveyIds.includes(survey.id);

      let matchesStatus = true;

      switch (statusFilter) {
        case "available":
          matchesStatus =
            survey.status === "published" &&
            survey.settings.acceptResponses &&
            !completed;
          break;

        case "completed":
          matchesStatus = completed;
          break;

        case "closed":
          matchesStatus =
            survey.status === "closed" ||
            survey.status === "archived";
          break;

        case "all":
        default:
          matchesStatus = true;
          break;
      }

      return matchesSearch && matchesStatus;
    });
  }, [
    surveys,
    searchTerm,
    statusFilter,
    completedSurveyIds,
  ]);

  const handleStartSurvey = (survey: Survey) => {
    setError(null);
    setSelectedSurvey(survey);
    setView("form");
  };

  const handleViewResponse = (survey: Survey) => {
    setError(null);
    setSelectedSurvey(survey);

    /*
     * Response viewing will be connected to the backend
     * once SurveyResponse APIs are available.
     *
     * For now we simply open the survey information.
     */
    setView("success");
  };

  const handleSubmitSurvey = async (
    survey: Survey,
    answers: Record<string, unknown>
  ) => {
    try {
      setSubmitting(true);
      setError(null);

      /*
       * Backend API integration will be added here.
       *
       * Example future flow:
       *
       * await submitSurveyResponse({
       *   surveyId: survey.id,
       *   answers,
       * });
       */

      console.log(
        "Survey response:",
        {
          surveyId: survey.id,
          answers,
        }
      );

      /*
       * Temporary response ID for frontend testing.
       */
      const temporaryResponseId =
        `response-${Date.now()}`;

      setCompletedSurveyIds((previous) =>
        previous.includes(survey.id)
          ? previous
          : [...previous, survey.id]
      );

      setSubmittedResponseId(
        temporaryResponseId
      );

      setView("success");
    } catch (submitError) {
      console.error(
        "Failed to submit survey:",
        submitError
      );

      setError(
        "Unable to submit the survey. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackToSurveys = () => {
    setSelectedSurvey(null);
    setSubmittedResponseId(undefined);
    setError(null);
    setView("list");
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    statusFilter !== "all";

  /*
   * Survey response form.
   */
  if (
    view === "form" &&
    selectedSurvey
  ) {
    return (
      <div className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <SurveyResponseForm
          survey={selectedSurvey}
          onSubmit={handleSubmitSurvey}
          onCancel={handleBackToSurveys}
          submitting={submitting}
        />

        {error && (
          <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>
    );
  }

  /*
   * Submission success screen.
   */
  if (
    view === "success" &&
    selectedSurvey
  ) {
    return (
      <div className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <SurveySubmissionSuccess
          survey={selectedSurvey}
          responseId={submittedResponseId}
          onBackToSurveys={handleBackToSurveys}
        />
      </div>
    );
  }

  /*
   * Main survey list.
   */
  return (
    <div className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ClipboardList size={22} />
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                My Surveys
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Complete surveys shared by your mentors.
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-500">
            {filteredSurveys.length}{" "}
            {filteredSurveys.length === 1
              ? "survey"
              : "surveys"}
          </div>
        </div>

        {/* Search + Filters */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search surveys..."
                className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value as FilterStatus
                )
              }
              className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="all">
                All Surveys
              </option>
              <option value="available">
                Available
              </option>
              <option value="completed">
                Completed
              </option>
              <option value="closed">
                Closed
              </option>
            </select>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Survey List */}
        <div className="mt-6">
          <UserSurveyList
            surveys={filteredSurveys}
            completedSurveyIds={
              completedSurveyIds
            }
            answeredQuestions={
              answeredQuestions
            }
            mentorNames={mentorNames}
            onStartSurvey={
              handleStartSurvey
            }
            onViewResponse={
              handleViewResponse
            }
          />
        </div>
      </div>
    </div>
  );
}