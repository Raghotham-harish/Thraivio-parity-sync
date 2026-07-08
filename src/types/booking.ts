export interface Booking {
  id: string;

  studentName: string;

  studentEmail: string;

  sessionType: string;

  date: string;

  time: string;

  duration: string;

  amount: number;

  status:
    | "pending"
    | "confirmed"
    | "completed"
    | "cancelled";
}