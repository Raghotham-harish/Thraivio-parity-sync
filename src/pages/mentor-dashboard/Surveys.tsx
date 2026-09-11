import { useMemo, useState } from "react";

import type { Survey } from "@/types/survey";

import { dummySurveys } from "@/data/dummySurveys";

import SurveyHeader from "@/components/mentor-dashboard/surveys/SurveyHeader";
import SurveyToolbar, {
  type SurveySortOption,
} from "@/components/mentor-dashboard/surveys/SurveyToolbar";
import SurveyGridCard from "@/components/mentor-dashboard/surveys/SurveyGridCard";
import SurveyListCard from "@/components/mentor-dashboard/surveys/SurveyListCard";
import EmptySurvey from "@/components/mentor-dashboard/surveys/EmptySurvey";
import SurveyFormModal from "@/components/mentor-dashboard/surveys/SurveyFormModal";
import SurveyPreviewModal from "@/components/mentor-dashboard/surveys/SurveyPreviewModal";
import DeleteSurveyDialog from "@/components/mentor-dashboard/surveys/DeleteSurveyDialog";
import DuplicateSurveyDialog from "@/components/mentor-dashboard/surveys/DuplicateSurveyDialog";
import PublishSurveyDialog from "@/components/mentor-dashboard/surveys/PublishSurveyDialog";
import SurveyResponsesModal from "@/components/mentor-dashboard/surveys/SurveyResponsesModal";

interface SurveyResponse {
  id: string;
  userId: string;
  studentName: string;
  studentEmail?: string;
  answers: {
    questionId: string;
    value: string | string[] | number | boolean | null;
  }[];
  submittedAt: string;
}

const Surveys = () => {
  /*
   * -------------------------------------------------------
   * Survey data
   * -------------------------------------------------------
   *
   * For now the page uses dummy survey data.
   * Backend API integration will be connected in the
   * survey.service.ts phase.
   */
  const [surveys, setSurveys] =
    useState<Survey[]>(dummySurveys);

  /*
   * -------------------------------------------------------
   * Page state
   * -------------------------------------------------------
   */

  const [loading] =
  useState(false);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState<
      "all" | Survey["status"]
    >("all");

  const [sortBy, setSortBy] =
    useState<SurveySortOption>(
      "updated_desc"
    );

  const [view, setView] =
    useState<"grid" | "list">("grid");

  /*
   * -------------------------------------------------------
   * Modal state
   * -------------------------------------------------------
   */

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [isPreviewOpen, setIsPreviewOpen] =
    useState(false);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const [isDuplicateOpen, setIsDuplicateOpen] =
    useState(false);

  const [isPublishOpen, setIsPublishOpen] =
    useState(false);

  const [isResponsesOpen, setIsResponsesOpen] =
    useState(false);

  /*
   * Currently selected survey
   */
  const [selectedSurvey, setSelectedSurvey] =
    useState<Survey | null>(null);

  /*
   * Responses for selected survey.
   *
   * This will come from the backend later.
   */
  const [selectedResponses, setSelectedResponses] =
    useState<SurveyResponse[]>([]);

  /*
   * Action loading states
   */
  const [actionLoading, setActionLoading] =
    useState(false);

  /*
   * -------------------------------------------------------
   * Filter + sort
   * -------------------------------------------------------
   */

  const filteredSurveys = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    const result = surveys.filter((survey) => {
      const matchesSearch =
        !normalizedSearch ||
        survey.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        survey.description
          ?.toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "all" ||
        survey.status === statusFilter;

      return (
        matchesSearch && matchesStatus
      );
    });

    return result.sort((a, b) => {
      switch (sortBy) {
        case "updated_asc":
          return (
            new Date(a.updatedAt).getTime() -
            new Date(b.updatedAt).getTime()
          );

        case "title_asc":
          return a.title.localeCompare(
            b.title
          );

        case "title_desc":
          return b.title.localeCompare(
            a.title
          );

        case "responses_desc":
          return (
            b.responseCount -
            a.responseCount
          );

        case "responses_asc":
          return (
            a.responseCount -
            b.responseCount
          );

        case "updated_desc":
        default:
          return (
            new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime()
          );
      }
    });
  }, [
    surveys,
    search,
    statusFilter,
    sortBy,
  ]);

  /*
   * -------------------------------------------------------
   * Helpers
   * -------------------------------------------------------
   */

  const getMentorId = () => {
    try {
      const storedUser =
        localStorage.getItem("authUser");

      if (!storedUser) {
        return "";
      }

      const user = JSON.parse(storedUser);

      return user?.id || "";
    } catch {
      return "";
    }
  };

  /*
   * -------------------------------------------------------
   * Create
   * -------------------------------------------------------
   */

  const handleCreateSurvey = () => {
    setSelectedSurvey(null);
    setError("");
    setIsFormOpen(true);
  };

  /*
   * -------------------------------------------------------
   * Edit
   * -------------------------------------------------------
   */

  const handleEditSurvey = (
    survey: Survey
  ) => {
    setSelectedSurvey(survey);
    setError("");
    setIsFormOpen(true);
  };

  /*
   * -------------------------------------------------------
   * Preview
   * -------------------------------------------------------
   */

  const handlePreviewSurvey = (
    survey: Survey
  ) => {
    setSelectedSurvey(survey);
    setIsPreviewOpen(true);
  };

  /*
   * -------------------------------------------------------
   * Save / Create / Update
   * -------------------------------------------------------
   */

  const handleSaveSurvey = (
    payload: Omit<
      Survey,
      "id" | "createdAt" | "updatedAt"
    >
  ) => {
    try {
      setActionLoading(true);
      setError("");

      const now =
        new Date().toISOString();

      if (selectedSurvey) {
        const updatedSurvey: Survey = {
          ...selectedSurvey,
          ...payload,
          id: selectedSurvey.id,
          createdAt:
            selectedSurvey.createdAt,
          updatedAt: now,
        };

        setSurveys((currentSurveys) =>
          currentSurveys.map((survey) =>
            survey.id === selectedSurvey.id
              ? updatedSurvey
              : survey
          )
        );
      } else {
        const newSurvey: Survey = {
          ...payload,
          id: `survey-${Date.now()}`,
          mentorId:
            payload.mentorId ||
            getMentorId(),
          createdAt: now,
          updatedAt: now,
        };

        setSurveys((currentSurveys) => [
          newSurvey,
          ...currentSurveys,
        ]);
      }

      setIsFormOpen(false);
      setSelectedSurvey(null);
    } catch (error) {
      console.error(
        "Failed to save survey:",
        error
      );

      setError(
        "Failed to save survey. Please try again."
      );
    } finally {
      setActionLoading(false);
    }
  };

  /*
   * -------------------------------------------------------
   * Delete
   * -------------------------------------------------------
   */

  const handleDeleteSurvey = (
    survey: Survey
  ) => {
    setSelectedSurvey(survey);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = (
    survey: Survey
  ) => {
    try {
      setActionLoading(true);
      setError("");

      setSurveys((currentSurveys) =>
        currentSurveys.filter(
          (item) => item.id !== survey.id
        )
      );

      setIsDeleteOpen(false);
      setSelectedSurvey(null);
    } catch (error) {
      console.error(
        "Failed to delete survey:",
        error
      );

      setError(
        "Failed to delete survey. Please try again."
      );
    } finally {
      setActionLoading(false);
    }
  };

  /*
   * -------------------------------------------------------
   * Duplicate
   * -------------------------------------------------------
   */

  const handleDuplicateSurvey = (
    survey: Survey
  ) => {
    setSelectedSurvey(survey);
    setIsDuplicateOpen(true);
  };

  const handleConfirmDuplicate = (
    survey: Survey
  ) => {
    try {
      setActionLoading(true);
      setError("");

      const now =
        new Date().toISOString();

      const duplicatedSurvey: Survey = {
        ...survey,
        id: `survey-${Date.now()}`,
        title: `${survey.title} (Copy)`,
        status: "draft",
        responseCount: 0,
        createdAt: now,
        updatedAt: now,
        publishedAt: undefined,

        questions: survey.questions.map(
          (question, index) => ({
            ...question,
            id: `question-${Date.now()}-${index}`,
            order: index,
            options:
              question.options?.map(
                (option, optionIndex) => ({
                  ...option,
                  id: `option-${Date.now()}-${index}-${optionIndex}`,
                })
              ),
          })
        ),

        settings: {
          ...survey.settings,
        },
      };

      setSurveys((currentSurveys) => [
        duplicatedSurvey,
        ...currentSurveys,
      ]);

      setIsDuplicateOpen(false);
      setSelectedSurvey(null);
    } catch (error) {
      console.error(
        "Failed to duplicate survey:",
        error
      );

      setError(
        "Failed to duplicate survey. Please try again."
      );
    } finally {
      setActionLoading(false);
    }
  };

  /*
   * -------------------------------------------------------
   * Publish / Unpublish
   * -------------------------------------------------------
   */

  const handleTogglePublish = (
    survey: Survey
  ) => {
    setSelectedSurvey(survey);
    setIsPublishOpen(true);
  };

  const handleConfirmPublish = (
    survey: Survey
  ) => {
    try {
      setActionLoading(true);
      setError("");

      const isCurrentlyPublished =
        survey.status === "published";

      const now =
        new Date().toISOString();

      const updatedSurvey: Survey = {
        ...survey,
        status: isCurrentlyPublished
          ? "draft"
          : "published",
        updatedAt: now,
        publishedAt:
          isCurrentlyPublished
            ? undefined
            : survey.publishedAt ||
              now,
      };

      setSurveys((currentSurveys) =>
        currentSurveys.map((item) =>
          item.id === survey.id
            ? updatedSurvey
            : item
        )
      );

      setIsPublishOpen(false);
      setSelectedSurvey(null);
    } catch (error) {
      console.error(
        "Failed to update survey status:",
        error
      );

      setError(
        "Failed to update survey status. Please try again."
      );
    } finally {
      setActionLoading(false);
    }
  };

  /*
   * -------------------------------------------------------
   * Responses
   * -------------------------------------------------------
   */

  const handleResponses = (
    survey: Survey
  ) => {
    setSelectedSurvey(survey);

    /*
     * Temporary empty response data.
     *
     * Backend response API will replace this later.
     */
    setSelectedResponses([]);

    setIsResponsesOpen(true);
  };

  /*
   * -------------------------------------------------------
   * Clear filters
   * -------------------------------------------------------
   */

  const handleClearFilters = () => {
    setSearch("");
    setStatusFilter("all");
    setSortBy("updated_desc");
  };

  const hasFilters =
    Boolean(search.trim()) ||
    statusFilter !== "all";

  /*
   * -------------------------------------------------------
   * Render
   * -------------------------------------------------------
   */

  return (
    <div className="space-y-6">
      {/* Header */}
      <SurveyHeader
        totalSurveys={surveys.length}
        onCreateSurvey={
          handleCreateSurvey
        }
      />

      {/* Error */}
      {error && (
        <div
          className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-sm
            font-medium
            text-red-600
          "
        >
          {error}
        </div>
      )}

      {/* Toolbar */}
      <SurveyToolbar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={
          setStatusFilter
        }
        sortBy={sortBy}
        setSortBy={setSortBy}
        view={view}
        setView={setView}
      />

      {/* Content */}
      {loading ? (
        <div
          className="
            flex
            min-h-72
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
          "
        >
          <div className="text-center">
            <div
              className="
                mx-auto
                h-8
                w-8
                animate-spin
                rounded-full
                border-2
                border-slate-200
                border-t-blue-600
              "
            />

            <p className="mt-3 text-sm text-slate-500">
              Loading surveys...
            </p>
          </div>
        </div>
      ) : filteredSurveys.length === 0 ? (
        <EmptySurvey
          hasSurveys={surveys.length > 0}
          hasFilters={hasFilters}
          onCreateSurvey={
            handleCreateSurvey
          }
          onClearFilters={
            handleClearFilters
          }
        />
      ) : view === "grid" ? (
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredSurveys.map(
            (survey) => (
              <SurveyGridCard
                key={survey.id}
                survey={survey}
                onPreview={
                  handlePreviewSurvey
                }
                onEdit={
                  handleEditSurvey
                }
                onDuplicate={
                  handleDuplicateSurvey
                }
                onDelete={
                  handleDeleteSurvey
                }
                onTogglePublish={
                  handleTogglePublish
                }
                onResponses={
                  handleResponses
                }
              />
            )
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredSurveys.map(
            (survey) => (
              <SurveyListCard
                key={survey.id}
                survey={survey}
                onPreview={
                  handlePreviewSurvey
                }
                onEdit={
                  handleEditSurvey
                }
                onDuplicate={
                  handleDuplicateSurvey
                }
                onDelete={
                  handleDeleteSurvey
                }
                onTogglePublish={
                  handleTogglePublish
                }
                onResponses={
                  handleResponses
                }
              />
            )
          )}
        </div>
      )}

      {/* Create / Edit */}
      <SurveyFormModal
        isOpen={isFormOpen}
        survey={selectedSurvey}
        onClose={() => {
          if (!actionLoading) {
            setIsFormOpen(false);
            setSelectedSurvey(null);
          }
        }}
        onSave={handleSaveSurvey}
      />

      {/* Preview */}
      <SurveyPreviewModal
        isOpen={isPreviewOpen}
        survey={selectedSurvey}
        onClose={() => {
          setIsPreviewOpen(false);
          setSelectedSurvey(null);
        }}
      />

      {/* Delete */}
      <DeleteSurveyDialog
        isOpen={isDeleteOpen}
        survey={selectedSurvey}
        onClose={() => {
          if (!actionLoading) {
            setIsDeleteOpen(false);
            setSelectedSurvey(null);
          }
        }}
        onConfirm={
          handleConfirmDelete
        }
        loading={actionLoading}
      />

      {/* Duplicate */}
      <DuplicateSurveyDialog
        isOpen={isDuplicateOpen}
        survey={selectedSurvey}
        onClose={() => {
          if (!actionLoading) {
            setIsDuplicateOpen(false);
            setSelectedSurvey(null);
          }
        }}
        onConfirm={
          handleConfirmDuplicate
        }
        loading={actionLoading}
      />

      {/* Publish / Unpublish */}
      <PublishSurveyDialog
        isOpen={isPublishOpen}
        survey={selectedSurvey}
        onClose={() => {
          if (!actionLoading) {
            setIsPublishOpen(false);
            setSelectedSurvey(null);
          }
        }}
        onConfirm={
          handleConfirmPublish
        }
        loading={actionLoading}
      />

      {/* Responses */}
      <SurveyResponsesModal
        isOpen={isResponsesOpen}
        survey={selectedSurvey}
        responses={selectedResponses}
        onClose={() => {
          setIsResponsesOpen(false);
          setSelectedSurvey(null);
          setSelectedResponses([]);
        }}
        loading={false}
      />
    </div>
  );
};

export default Surveys;