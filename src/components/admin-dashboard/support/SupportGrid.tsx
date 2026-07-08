import type {
  AdminSupportTicket,
} from "@/types/admin-support";

import SupportGridCard from "./SupportGridCard";

interface SupportGridProps {
  tickets: AdminSupportTicket[];

  onView: (
    ticket: AdminSupportTicket
  ) => void;

  onReply: (
    ticket: AdminSupportTicket
  ) => void;

  onClose: (
    ticket: AdminSupportTicket
  ) => void;
}

export default function SupportGrid({
  tickets,
  onView,
  onReply,
  onClose,
}: SupportGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">

      {tickets.map((ticket) => (

        <SupportGridCard
          key={ticket.id}
          ticket={ticket}
          onView={onView}
          onReply={onReply}
          onClose={onClose}
        />

      ))}

    </section>
  );
}