export interface UserProgram {
  id: string;

  mentorId: string;

  mentorName: string;

  mentorRole: string;

  mentorCompany: string;

  mentorImage: string;

  title: string;

  duration: string;

  level: string;

  students: number;

  price: number;

  progress: number;

  totalLessons: number;

  completedLessons: number;

  enrolledDate: string;

  nextSession: string;

  status:
    | "active"
    | "completed"
    | "paused"
    | "upcoming";

  certificateAvailable: boolean;
}