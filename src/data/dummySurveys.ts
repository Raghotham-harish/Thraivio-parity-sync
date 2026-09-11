import type {
  Survey,
  SurveyQuestion,
  SurveySettings,
} from "@/types/survey";

/* -------------------------------------------------------------------------- */
/* Shared Settings                                                            */
/* -------------------------------------------------------------------------- */

const defaultSurveySettings: SurveySettings = {
  acceptResponses: true,
  requireLogin: true,
  allowMultipleSubmissions: false,
  showProgressBar: true,
  shuffleQuestions: false,
  showResultsToStudents: false,
};

/* -------------------------------------------------------------------------- */
/* Helper                                                                     */
/* -------------------------------------------------------------------------- */

const createQuestion = (
  question: SurveyQuestion
): SurveyQuestion => {
  return question;
};

/* -------------------------------------------------------------------------- */
/* Survey 1 — Published                                                       */
/* -------------------------------------------------------------------------- */

const studentFeedbackQuestions: SurveyQuestion[] = [
  createQuestion({
    id: "q-student-feedback-1",
    type: "single_select",
    question:
      "How would you rate your overall mentorship experience?",
    description:
      "Please select the option that best describes your experience.",
    required: true,
    options: [
      {
        id: "q-student-feedback-1-option-1",
        label: "Excellent",
      },
      {
        id: "q-student-feedback-1-option-2",
        label: "Good",
      },
      {
        id: "q-student-feedback-1-option-3",
        label: "Average",
      },
      {
        id: "q-student-feedback-1-option-4",
        label: "Poor",
      },
    ],
    order: 1,
  }),

  createQuestion({
    id: "q-student-feedback-2",
    type: "rating",
    question:
      "How helpful were the mentorship sessions?",
    description:
      "Rate the overall usefulness of your sessions.",
    required: true,
    order: 2,
  }),

  createQuestion({
    id: "q-student-feedback-3",
    type: "long_text",
    question:
      "What did you like most about the mentorship?",
    description:
      "Share anything that you found particularly valuable.",
    required: false,
    order: 3,
  }),

  createQuestion({
    id: "q-student-feedback-4",
    type: "long_text",
    question:
      "What could we improve?",
    required: false,
    order: 4,
  }),
];

const studentFeedbackSurvey: Survey = {
  id: "survey-student-feedback",

  title: "Student Feedback Survey",

  description:
    "Help us understand your mentorship experience and improve the quality of future sessions.",

  mentorId: "mentor-001",

  questions: studentFeedbackQuestions,

  status: "published",

  settings: {
    ...defaultSurveySettings,
    acceptResponses: true,
    allowMultipleSubmissions: false,
  },

  responseCount: 24,

  createdAt: "2026-08-20T10:30:00.000Z",

  updatedAt: "2026-09-05T12:15:00.000Z",

  publishedAt: "2026-08-21T09:00:00.000Z",
};

/* -------------------------------------------------------------------------- */
/* Survey 2 — Draft                                                           */
/* -------------------------------------------------------------------------- */

const careerAssessmentQuestions: SurveyQuestion[] = [
  createQuestion({
    id: "q-career-assessment-1",
    type: "short_text",
    question:
      "What is your current career goal?",
    description:
      "Tell us the role, field or career direction you are targeting.",
    required: true,
    order: 1,
  }),

  createQuestion({
    id: "q-career-assessment-2",
    type: "multi_select",
    question:
      "Which areas are you interested in?",
    required: true,
    options: [
      {
        id: "q-career-assessment-2-option-1",
        label: "Frontend Development",
      },
      {
        id: "q-career-assessment-2-option-2",
        label: "Backend Development",
      },
      {
        id: "q-career-assessment-2-option-3",
        label: "Full Stack Development",
      },
      {
        id: "q-career-assessment-2-option-4",
        label: "DevOps",
      },
      {
        id: "q-career-assessment-2-option-5",
        label: "AI / Machine Learning",
      },
    ],
    order: 2,
  }),

  createQuestion({
    id: "q-career-assessment-3",
    type: "dropdown",
    question:
      "How many years of professional experience do you have?",
    required: true,
    options: [
      {
        id: "q-career-assessment-3-option-1",
        label: "Less than 1 year",
      },
      {
        id: "q-career-assessment-3-option-2",
        label: "1–2 years",
      },
      {
        id: "q-career-assessment-3-option-3",
        label: "3–5 years",
      },
      {
        id: "q-career-assessment-3-option-4",
        label: "5+ years",
      },
    ],
    order: 3,
  }),

  createQuestion({
    id: "q-career-assessment-4",
    type: "long_text",
    question:
      "What challenges are you currently facing in your career?",
    required: false,
    order: 4,
  }),
];

const careerAssessmentSurvey: Survey = {
  id: "survey-career-assessment",

  title: "Career Goals Assessment",

  description:
    "Understand your students' career goals, interests and challenges so you can provide more focused mentorship.",

  mentorId: "mentor-001",

  questions: careerAssessmentQuestions,

  status: "draft",

  settings: {
    ...defaultSurveySettings,
    acceptResponses: false,
    allowMultipleSubmissions: false,
  },

  responseCount: 8,

  createdAt: "2026-09-01T08:00:00.000Z",

  updatedAt: "2026-09-08T11:30:00.000Z",
};

/* -------------------------------------------------------------------------- */
/* Survey 3 — Published                                                       */
/* -------------------------------------------------------------------------- */

const sessionQualityQuestions: SurveyQuestion[] = [
  createQuestion({
    id: "q-session-quality-1",
    type: "rating",
    question:
      "How would you rate today's session?",
    required: true,
    order: 1,
  }),

  createQuestion({
    id: "q-session-quality-2",
    type: "yes_no",
    question:
      "Was the session useful for you?",
    required: true,
    order: 2,
  }),

  createQuestion({
    id: "q-session-quality-3",
    type: "single_select",
    question:
      "How clear was the mentor's explanation?",
    required: true,
    options: [
      {
        id: "q-session-quality-3-option-1",
        label: "Very clear",
      },
      {
        id: "q-session-quality-3-option-2",
        label: "Clear",
      },
      {
        id: "q-session-quality-3-option-3",
        label: "Somewhat unclear",
      },
      {
        id: "q-session-quality-3-option-4",
        label: "Very unclear",
      },
    ],
    order: 3,
  }),

  createQuestion({
    id: "q-session-quality-4",
    type: "long_text",
    question:
      "Is there anything you would like to cover in the next session?",
    required: false,
    order: 4,
  }),
];

const sessionQualitySurvey: Survey = {
  id: "survey-session-quality",

  title: "Session Quality Survey",

  description:
    "Share quick feedback after your mentorship session so future sessions can be even more useful.",

  mentorId: "mentor-001",

  questions: sessionQualityQuestions,

  status: "published",

  settings: {
    ...defaultSurveySettings,
    allowMultipleSubmissions: true,
    showProgressBar: false,
  },

  responseCount: 41,

  createdAt: "2026-07-15T09:30:00.000Z",

  updatedAt: "2026-08-28T15:20:00.000Z",

  publishedAt: "2026-07-16T10:00:00.000Z",
};

/* -------------------------------------------------------------------------- */
/* Survey 4 — Closed                                                          */
/* -------------------------------------------------------------------------- */

const programCompletionQuestions: SurveyQuestion[] = [
  createQuestion({
    id: "q-program-completion-1",
    type: "single_select",
    question:
      "Would you recommend this mentorship program?",
    required: true,
    options: [
      {
        id: "q-program-completion-1-option-1",
        label: "Definitely",
      },
      {
        id: "q-program-completion-1-option-2",
        label: "Maybe",
      },
      {
        id: "q-program-completion-1-option-3",
        label: "No",
      },
    ],
    order: 1,
  }),

  createQuestion({
    id: "q-program-completion-2",
    type: "rating",
    question:
      "How satisfied are you with the overall program?",
    required: true,
    order: 2,
  }),

  createQuestion({
    id: "q-program-completion-3",
    type: "long_text",
    question:
      "Please share your overall feedback.",
    required: true,
    order: 3,
  }),
];

const programCompletionSurvey: Survey = {
  id: "survey-program-completion",

  title: "Mentorship Program Completion Survey",

  description:
    "Final feedback survey for students who have completed their mentorship program.",

  mentorId: "mentor-001",

  questions: programCompletionQuestions,

  status: "closed",

  settings: {
    ...defaultSurveySettings,
    acceptResponses: false,
  },

  responseCount: 67,

  createdAt: "2026-06-10T09:00:00.000Z",

  updatedAt: "2026-08-10T14:00:00.000Z",

  publishedAt: "2026-06-12T10:00:00.000Z",
};

/* -------------------------------------------------------------------------- */
/* Survey 5 — Archived                                                        */
/* -------------------------------------------------------------------------- */

const onboardingQuestions: SurveyQuestion[] = [
  createQuestion({
    id: "q-onboarding-1",
    type: "short_text",
    question:
      "What should we know about your learning goals?",
    required: true,
    order: 1,
  }),

  createQuestion({
    id: "q-onboarding-2",
    type: "email",
    question:
      "What is your preferred contact email?",
    required: true,
    order: 2,
  }),

  createQuestion({
    id: "q-onboarding-3",
    type: "date",
    question:
      "When would you like to start your mentorship?",
    required: false,
    order: 3,
  }),
];

const onboardingSurvey: Survey = {
  id: "survey-student-onboarding",

  title: "Student Onboarding Form",

  description:
    "Basic onboarding information collected from students before starting mentorship.",

  mentorId: "mentor-001",

  questions: onboardingQuestions,

  status: "archived",

  settings: {
    ...defaultSurveySettings,
    acceptResponses: false,
  },

  responseCount: 12,

  createdAt: "2026-04-12T09:00:00.000Z",

  updatedAt: "2026-05-20T11:00:00.000Z",
};

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const dummySurveys: Survey[] = [
  studentFeedbackSurvey,
  careerAssessmentSurvey,
  sessionQualitySurvey,
  programCompletionSurvey,
  onboardingSurvey,
];