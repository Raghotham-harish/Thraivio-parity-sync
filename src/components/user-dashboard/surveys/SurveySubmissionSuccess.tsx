import {
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  Home,
} from "lucide-react";

import type { Survey } from "@/types/survey";

interface SurveySubmissionSuccessProps {
  survey: Survey;

  /**
   * Called when the user wants to return to the survey list.
   */
  onBackToSurveys?: () => void;

  /**
   * Optional action to return to the dashboard.
   */
  onGoToDashboard?: () => void;

  /**
   * Optional response reference shown after submission.
   */
  responseId?: string;
}

export default function SurveySubmissionSuccess({
  survey,
  onBackToSurveys,
  onGoToDashboard,
  responseId,
}: SurveySubmissionSuccessProps) {
  return (
    <section className="mx-auto flex w-full max-w-2xl items-center justify-center">
      <div className="w-full rounded-xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
        {/* Success icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2
            size={36}
            className="text-green-600"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-2xl font-semibold text-slate-900">
          Survey Submitted Successfully
        </h1>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
          Thank you for completing{" "}
          <span className="font-medium text-slate-900">
            {survey.title}
          </span>
          . Your response has been submitted successfully.
        </p>

        {/* Submission information */}
        <div className="mx-auto mt-6 max-w-md rounded-lg bg-slate-50 p-4 text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
              <ClipboardCheck size={18} />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-slate-500">
                Survey
              </p>

              <p className="truncate text-sm font-medium text-slate-900">
                {survey.title}
              </p>
            </div>
          </div>

          {responseId && (
            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="text-xs text-slate-500">
                Response ID
              </p>

              <p className="mt-1 break-all font-mono text-xs text-slate-700">
                {responseId}
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {onBackToSurveys && (
            <button
              type="button"
              onClick={onBackToSurveys}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <ArrowLeft size={17} />
              Back to Surveys
            </button>
          )}

          {onGoToDashboard && (
            <button
              type="button"
              onClick={onGoToDashboard}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <Home size={17} />
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </section>
  );
}