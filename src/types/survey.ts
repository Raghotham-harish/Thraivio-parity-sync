export type SurveyQuestionType =
  | "short_text"
  | "long_text"
  | "single_select"
  | "multi_select"
  | "dropdown"
  | "number"
  | "email"
  | "date"
  | "rating"
  | "yes_no";

export type SurveyStatus =
  | "draft"
  | "published"
  | "closed"
  | "archived";

export interface SurveyOption {
  id: string;
  label: string;
}

export interface SurveyQuestion {
  id: string;

  type: SurveyQuestionType;

  question: string;

  description?: string;

  required: boolean;

  options?: SurveyOption[];

  order: number;
}

export interface SurveySettings {
  acceptResponses: boolean;

  requireLogin: boolean;

  allowMultipleSubmissions: boolean;

  showProgressBar: boolean;

  shuffleQuestions: boolean;

  showResultsToStudents: boolean;
}

export interface Survey {
  id: string;

  title: string;

  description?: string;

  mentorId: string;

  questions: SurveyQuestion[];

  status: SurveyStatus;

  settings: SurveySettings;

  responseCount: number;

  createdAt: string;

  updatedAt: string;

  publishedAt?: string;
}