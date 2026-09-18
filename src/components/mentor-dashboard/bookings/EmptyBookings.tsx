import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface EmptyBookingsProps {
  onAddBooking: () => void;
}

const EmptyBookings = ({ onAddBooking }: EmptyBookingsProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title="No Bookings Found"
      description="Create your first booking and start managing coaching sessions."
      action={{
        label: "Create First Booking",
        onClick: onAddBooking,
        icon: Plus,
      }}
    />
  );
};

export default EmptyBookings;
