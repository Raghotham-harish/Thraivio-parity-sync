export interface AvailabilitySlot {
  start: string;
  end: string;
}

export interface Availability {
  id?: string;
  day: string;
  enabled: boolean;
  slots: AvailabilitySlot[];
}