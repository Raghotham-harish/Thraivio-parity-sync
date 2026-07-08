export interface DashboardHero {
  userName: string;

  avatar: string;

  greeting: string;

  welcomeMessage: string;

  level: number;

  xp: number;

  xpProgress: number;

  streak: number;

  profileCompletion: number;
}

export interface DashboardStat {
  id: string;

  title: string;

  value: string;

  change: string;

  changeType: "increase" | "decrease";

  icon: string;

  color: string;

  bgColor: string;
}

export interface ContinueLearning {
  id: string;

  title: string;

  mentor: string;

  thumbnail: string;

  progress: number;

  completedLessons: number;

  totalLessons: number;

  duration: string;

  nextLesson: string;

  category: string;
}

export interface UpcomingSession {
  id: string;

  mentorName: string;

  mentorImage: string;

  topic: string;

  date: string;

  time: string;

  duration: string;

  meetingType: "Google Meet" | "Zoom";

  status:
    | "Upcoming"
    | "Today"
    | "Completed";

  joinLink: string;
}

export interface RecommendedMentor {
  id: string;

  name: string;

  image: string;

  designation: string;

  company: string;

  rating: number;

  reviews: number;

  experience: number;

  hourlyPrice: number;

  skills: string[];
}

export interface Achievement {
  id: string;

  title: string;

  description: string;

  icon:
    | "trophy"
    | "medal"
    | "award"
    | "star";

  progress: number;

  unlocked: boolean;

  xp: number;
}

export interface Activity {
  id: string;

  title: string;

  description: string;

  time: string;

  type:
  | "session"
  | "program"
  | "certificate"
  | "payment"
  | "saved"
  | "message";
}

export interface LearningAnalytics {
  totalLearningHours: number;

  weeklyHours: number;

  completedPrograms: number;

  activeStreak: number;

  weeklyProgress: number[];
}

export interface QuickAction {
  id: string;

  title: string;

  description: string;

  icon: string;

  href: string;

  color: string;
}

export interface Announcement {
  id: string;

  title: string;

  description: string;

  category:
    | "Platform"
    | "Program"
    | "Event"
    | "Update";

  important: boolean;

  date: string;
}

export interface DashboardState {
  hero: DashboardHero;

  stats: DashboardStat[];

  continueLearning: ContinueLearning[];

  upcomingSessions: UpcomingSession[];

  recommendedMentors: RecommendedMentor[];

  achievements: Achievement[];

  recentActivities: Activity[];

  analytics: LearningAnalytics;

  quickActions: QuickAction[];

  announcements: Announcement[];
}