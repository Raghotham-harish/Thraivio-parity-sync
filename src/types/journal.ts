export interface JournalEntry {
  id: string;

  title: string;

  body: string;

  tags: string[];

  /** Optional link back to a mentor-dashboard Booking this entry reflects on. */
  linkedStudentName?: string;

  createdAt: string;

  updatedAt: string;
}
