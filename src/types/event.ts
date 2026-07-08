export interface Event {
  id?: string;

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

  status?: "upcoming" | "live" | "completed" | "cancelled";
}