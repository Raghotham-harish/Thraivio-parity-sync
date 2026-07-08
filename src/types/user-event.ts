export interface UserEvent {
  id: string;

  mentorId: number;

  mentorName: string;

  mentorRole: string;

  mentorCompany: string;

  mentorImage: string;

  title: string;

  date: string;

  month: string;

  day: string;

  weekday: string;

  time: string;

  type: string;

  mode: string;

  registered: number;

  seatsLeft: number;

  registrationDate: string;

  eventStatus:
    | "upcoming"
    | "attended"
    | "cancelled";

  certificateAvailable: boolean;

  joinLink?: string;

  recordingLink?: string;
}