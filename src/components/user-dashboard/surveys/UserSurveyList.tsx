import type { Survey } from "@/types/survey";
import { EmptyState } from "@/components/shared/EmptyState";
import taskIllustration from "@/assets/illustrations/task.svg";
import UserSurveyCard from "./UserSurveyCard";

interface UserSurveyListProps {
  surveys: Survey[];

  /**
   * Survey IDs that the logged-in user has already submitted.
   */
  completedSurveyIds?: string[];

  /**
   * Optional answered-question count by survey ID.
   */
  answeredQuestions?: Record<string, number>;

  /**
   * Optional mentor names by mentor ID.
   */
  mentorNames?: Record<string, string>;

  onStartSurvey?: (survey: Survey) => void;

  onViewResponse?: (survey: Survey) => void;
}

export default function UserSurveyList({
  surveys,
  completedSurveyIds = [],
  answeredQuestions = {},
  mentorNames = {},
  onStartSurvey,
  onViewResponse,
}: UserSurveyListProps) {
  if (surveys.length === 0) {
    return (
      <EmptyState
        illustration={taskIllustration}
        title="No Surveys Available"
        description="New surveys will appear here when they become available."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {surveys.map((survey) => {
        const completed = completedSurveyIds.includes(
          survey.id
        );

        return (
          <UserSurveyCard
            key={survey.id}
            survey={survey}
            completed={completed}
            answeredQuestions={
              answeredQuestions[survey.id] ?? 0
            }
            mentorName={mentorNames[survey.mentorId]}
            onStart={onStartSurvey}
            onViewResponse={onViewResponse}
          />
        );
      })}
    </div>
  );
}