import { Plus, RotateCcw } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import taskIllustration from "@/assets/illustrations/task.svg";
import searchIllustration from "@/assets/illustrations/search.svg";

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
      <EmptyState
        illustration={taskIllustration}
        title="No Surveys Yet"
        description="Create your first survey to collect feedback and understand your students."
        action={{
          label: "Create Your First Survey",
          onClick: onCreateSurvey,
          icon: Plus,
        }}
      />
    );
  }

  /*
   * Case 2:
   * Surveys exist but current search/filter
   * does not match any survey.
   */
  if (hasFilters) {
    return (
      <EmptyState
        illustration={searchIllustration}
        title="No Matching Surveys"
        description="We couldn't find any surveys matching your current search or filters."
        action={{
          label: "Clear Filters",
          onClick: onClearFilters,
          icon: RotateCcw,
        }}
      />
    );
  }

  /*
   * Fallback
   */
  return null;
};

export default EmptySurvey;
