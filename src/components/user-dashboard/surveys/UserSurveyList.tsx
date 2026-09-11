import type { Survey } from "@/types/survey";
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
      <div className="flex min-h-[260px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <span className="text-xl text-slate-400">📋</span>
          </div>

          <h3 className="mt-4 text-base font-semibold text-slate-900">
            No Surveys Available
          </h3>

          <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">
            There are no surveys available for you at the moment.
            New surveys will appear here when they become available.
          </p>
        </div>
      </div>
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