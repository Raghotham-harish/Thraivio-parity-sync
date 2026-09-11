import { useMemo, useState } from "react";
import {
  BarChart3,
  ClipboardList,
  Grid2X2,
  List,
} from "lucide-react";

import type { Survey } from "@/types/survey";
import { dummySurveys } from "@/data/dummySurveys";

import AdminSurveyCard from "@/components/admin-dashboard/surveys/AdminSurveyCard";
import AdminSurveyFilters, {
  type AdminSurveyStatusFilter,
} from "@/components/admin-dashboard/surveys/AdminSurveyFilters";
import AdminSurveyResponses, {
  type AdminSurveyResponse,
} from "@/components/admin-dashboard/surveys/AdminSurveyResponses";
import DeleteAdminSurveyDialog from "@/components/admin-dashboard/surveys/DeleteAdminSurveyDialog";

type ViewMode = "grid" | "list";

export default function SurveysManagement() {
  const [surveys, setSurveys] =
    useState<Survey[]>(dummySurveys);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState<AdminSurveyStatusFilter>("all");

  const [viewMode, setViewMode] =
    useState<ViewMode>("grid");

  const [selectedSurvey, setSelectedSurvey] =
    useState<Survey | null>(null);

  const [responsesSurvey, setResponsesSurvey] =
    useState<Survey | null>(null);

  const [deleteSurvey, setDeleteSurvey] =
    useState<Survey | null>(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  /*
   * Temporary response data.
   *
   * This will come from the backend after
   * SurveyResponse APIs are implemented.
   */
  const [responses] = useState<
    AdminSurveyResponse[]
  >([]);

  /*
   * Dummy mentor information for the frontend phase.
   */
  const mentorNames: Record<string, string> = {
    "mentor-001": "Sunil Kumar",
  };

  const mentorEmails: Record<string, string> = {
    "mentor-001": "mentor@gmail.com",
  };

  /*
   * Filter surveys.
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
          .includes(normalizedSearch) ||
        mentorNames[survey.mentorId]
          ?.toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "all" ||
        survey.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [
    surveys,
    searchTerm,
    statusFilter,
  ]);

  /*
   * Clear filters.
   */
  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  /*
   * Preview survey.
   *
   * For now we store the selected survey.
   * A dedicated admin preview can be connected later
   * if required by the business flow.
   */
  const handlePreview = (survey: Survey) => {
    setSelectedSurvey(survey);
  };

  /*
   * Open responses.
   */
  const handleViewResponses = (
    survey: Survey
  ) => {
    setResponsesSurvey(survey);
  };

  /*
   * Open delete confirmation.
   */
  const handleDelete = (survey: Survey) => {
    setDeleteSurvey(survey);
  };

  /*
   * Confirm deletion.
   *
   * This is temporary local-state deletion.
   * Backend DELETE API will replace this in Phase 5.
   */
  const handleConfirmDelete = async (
    survey: Survey
  ) => {
    try {
      setDeleteLoading(true);

      /*
       * Future:
       *
       * await deleteSurveyApi(survey.id);
       */

      setSurveys((previous) =>
        previous.filter(
          (item) => item.id !== survey.id
        )
      );

      setDeleteSurvey(null);

      if (selectedSurvey?.id === survey.id) {
        setSelectedSurvey(null);
      }

      if (
        responsesSurvey?.id === survey.id
      ) {
        setResponsesSurvey(null);
      }
    } catch (error) {
      console.error(
        "Failed to delete survey:",
        error
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  /*
   * Preview panel.
   */
  if (selectedSurvey) {
    return (
      <div className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <h1 className="text-lg font-semibold text-slate-900">
                  Survey Preview
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedSurvey.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedSurvey(null)
                }
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Back
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-900">
                  {selectedSurvey.title}
                </h2>

                {selectedSurvey.description && (
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {selectedSurvey.description}
                  </p>
                )}

                <div className="mt-5 space-y-4">
                  {[
                    ...selectedSurvey.questions,
                  ]
                    .sort(
                      (a, b) =>
                        a.order - b.order
                    )
                    .map((question) => (
                      <div
                        key={question.id}
                        className="rounded-lg border border-slate-200 bg-white p-4"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-slate-400">
                            Q{question.order}
                          </span>

                          <div>
                            <p className="text-sm font-medium leading-6 text-slate-900">
                              {question.question}

                              {question.required && (
                                <span className="ml-1 text-red-500">
                                  *
                                </span>
                              )}
                            </p>

                            {question.description && (
                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                {question.description}
                              </p>
                            )}

                            {question.options &&
                              question.options.length >
                                0 && (
                                <div className="mt-3 space-y-2">
                                  {question.options.map(
                                    (option) => (
                                      <div
                                        key={option.id}
                                        className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600"
                                      >
                                        {option.label}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*
   * Responses view.
   */
  if (responsesSurvey) {
    const surveyResponses =
      responses.filter(
        (response) =>
          response.surveyId ===
          responsesSurvey.id
      );

    return (
      <div className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <AdminSurveyResponses
            survey={responsesSurvey}
            responses={surveyResponses}
            onClose={() =>
              setResponsesSurvey(null)
            }
          />
        </div>
      </div>
    );
  }

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
                Survey Management
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Monitor and manage surveys across
                the platform.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
              <BarChart3 size={16} />
              {filteredSurveys.length} Surveys
            </div>

            {/* View toggle */}
            <div className="flex rounded-lg border border-slate-300 bg-white p-1">
              <button
                type="button"
                onClick={() =>
                  setViewMode("grid")
                }
                aria-label="Grid view"
                className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
                  viewMode === "grid"
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                <Grid2X2 size={16} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setViewMode("list")
                }
                aria-label="List view"
                className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
                  viewMode === "list"
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                <List size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6">
          <AdminSurveyFilters
            searchTerm={searchTerm}
            statusFilter={statusFilter}
            onSearchChange={setSearchTerm}
            onStatusChange={setStatusFilter}
            onClearFilters={
              handleClearFilters
            }
          />
        </div>

        {/* Empty state */}
        {filteredSurveys.length === 0 ? (
          <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <ClipboardList
                  size={22}
                  className="text-slate-400"
                />
              </div>

              <h2 className="mt-4 text-base font-semibold text-slate-900">
                No Surveys Found
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filter.
              </p>

              {(searchTerm ||
                statusFilter !== "all") && (
                <button
                  type="button"
                  onClick={
                    handleClearFilters
                  }
                  className="mt-4 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid */
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredSurveys.map((survey) => (
              <AdminSurveyCard
                key={survey.id}
                survey={survey}
                mentorName={
                  mentorNames[
                    survey.mentorId
                  ]
                }
                mentorEmail={
                  mentorEmails[
                    survey.mentorId
                  ]
                }
                onPreview={
                  handlePreview
                }
                onViewResponses={
                  handleViewResponses
                }
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          /* List */
          <div className="mt-6 space-y-4">
            {filteredSurveys.map((survey) => (
              <div
                key={survey.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-semibold text-slate-900">
                        {survey.title}
                      </h2>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium capitalize text-slate-600">
                        {survey.status}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                      <span>
                        Owner:{" "}
                        <strong className="font-medium text-slate-700">
                          {mentorNames[
                            survey.mentorId
                          ] ||
                            "Unknown Mentor"}
                        </strong>
                      </span>

                      <span>
                        Questions:{" "}
                        <strong className="font-medium text-slate-700">
                          {survey.questions.length}
                        </strong>
                      </span>

                      <span>
                        Responses:{" "}
                        <strong className="font-medium text-slate-700">
                          {survey.responseCount}
                        </strong>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handlePreview(survey)
                      }
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Preview
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleViewResponses(
                          survey
                        )
                      }
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Responses
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(survey)
                      }
                      className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Delete Dialog */}
        <DeleteAdminSurveyDialog
          survey={deleteSurvey}
          open={Boolean(deleteSurvey)}
          loading={deleteLoading}
          onClose={() => {
            if (!deleteLoading) {
              setDeleteSurvey(null);
            }
          }}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  );
}