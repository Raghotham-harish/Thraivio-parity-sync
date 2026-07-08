import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  MessageSquare,
  Ticket,
} from "lucide-react";

interface TicketItem {
  id: string;

  subject: string;

  category: string;

  priority: "Low" | "Medium" | "High";

  status:
    | "Open"
    | "In Progress"
    | "Resolved";

  createdAt: string;

  updatedAt: string;
}

interface TicketHistoryProps {
  tickets: TicketItem[];

  onView: (
    id: string
  ) => void;

  onReply: (
    id: string
  ) => void;
}

const TicketHistory = ({
  tickets,
  onView,
  onReply,
}: TicketHistoryProps) => {
  const openCount =
    tickets.filter(
      (item) => item.status === "Open"
    ).length;

  const progressCount =
    tickets.filter(
      (item) =>
        item.status ===
        "In Progress"
    ).length;

  const resolvedCount =
    tickets.filter(
      (item) =>
        item.status ===
        "Resolved"
    ).length;

  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            <Ticket size={16} />

            Support Tickets
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Ticket History
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Track every support request,
            monitor its current status and
            communicate with our support
            team.
          </p>
        </div>

        {/* Summary */}

        <div
          className="
            grid

            gap-4

            sm:grid-cols-3
          "
        >
          <div
            className="
              rounded-2xl

              bg-blue-50

              px-5
              py-4

              text-center
            "
          >
            <p className="text-sm text-blue-600">
              Open
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-700">
              {openCount}
            </h3>
          </div>

          <div
            className="
              rounded-2xl

              bg-amber-50

              px-5
              py-4

              text-center
            "
          >
            <p className="text-sm text-amber-600">
              Progress
            </p>

            <h3 className="mt-2 text-3xl font-bold text-amber-700">
              {progressCount}
            </h3>
          </div>

          <div
            className="
              rounded-2xl

              bg-green-50

              px-5
              py-4

              text-center
            "
          >
            <p className="text-sm text-green-600">
              Resolved
            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-700">
              {resolvedCount}
            </h3>
          </div>
        </div>
      </div>

      {/* Empty State */}

      {tickets.length === 0 && (
        <div
          className="
            mt-8

            rounded-[32px]

            border-2
            border-dashed
            border-slate-300

            bg-slate-50

            py-20

            text-center
          "
        >
          <Ticket
            size={48}
            className="
              mx-auto

              text-slate-400
            "
          />

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            No Tickets Yet
          </h3>

          <p
            className="
              mt-3

              text-slate-500
            "
          >
            You haven't created any support
            tickets yet.
          </p>
        </div>
      )}

      {/* Ticket Cards */}

      <div
        className="
          mt-8

          space-y-6
        "
      >
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="
              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-7

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            <div
              className="
                flex
                flex-col

                gap-6

                xl:flex-row
                xl:items-center
                xl:justify-between
              "
            >
              {/* Left */}

              <div className="flex-1">
                <div
                  className="
                    flex
                    flex-wrap

                    items-center

                    gap-3
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {ticket.subject}
                  </h3>

                  <span
                    className={`
                      rounded-full

                      px-3
                      py-1

                      text-xs
                      font-semibold

                      ${
                        ticket.status ===
                        "Resolved"
                          ? "bg-green-100 text-green-700"
                          : ticket.status ===
                            "In Progress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    `}
                  >
                    {ticket.status}
                  </span>
                </div>

                <div
                  className="
                    mt-6

                    grid

                    gap-4

                    md:grid-cols-4
                  "
                >
                  <div
                    className="
                      rounded-2xl

                      bg-slate-50

                      p-4
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Category
                    </p>

                    <h4 className="mt-2 font-semibold">
                      {ticket.category}
                    </h4>
                  </div>

                  <div
                    className="
                      rounded-2xl

                      bg-violet-50

                      p-4
                    "
                  >
                    <p className="text-sm text-violet-600">
                      Priority
                    </p>

                    <h4 className="mt-2 font-semibold text-violet-700">
                      {ticket.priority}
                    </h4>
                  </div>

                  <div
                    className="
                      rounded-2xl

                      bg-blue-50

                      p-4
                    "
                  >
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={16}
                        className="text-blue-600"
                      />

                      <p className="text-sm text-blue-600">
                        Created
                      </p>
                    </div>

                    <h4 className="mt-2 font-semibold text-blue-700">
                      {ticket.createdAt}
                    </h4>
                  </div>

                  <div
                    className="
                      rounded-2xl

                      bg-emerald-50

                      p-4
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Clock3
                        size={16}
                        className="text-emerald-600"
                      />

                      <p className="text-sm text-emerald-600">
                        Updated
                      </p>
                    </div>

                    <h4 className="mt-2 font-semibold text-emerald-700">
                      {ticket.updatedAt}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Actions */}

              <div
                className="
                  flex

                  flex-wrap

                  gap-3

                  xl:w-52
                  xl:flex-col
                "
              >
                <button
                  onClick={() =>
                    onView(ticket.id)
                  }
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-slate-200

                    px-5
                    py-3

                    font-medium

                    transition

                    hover:bg-slate-50
                  "
                >
                  <Eye size={18} />

                  View
                </button>

                {ticket.status !==
                  "Resolved" && (
                  <button
                    onClick={() =>
                      onReply(ticket.id)
                    }
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-blue-600

                      px-5
                      py-3

                      font-medium

                      text-white

                      transition

                      hover:bg-blue-700
                    "
                  >
                    <MessageSquare
                      size={18}
                    />

                    Reply
                  </button>
                )}

                {ticket.status ===
                  "Resolved" && (
                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-green-50

                      px-5
                      py-3

                      font-medium

                      text-green-700
                    "
                  >
                    <CheckCircle2
                      size={18}
                    />

                    Closed
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div
        className="
          mt-10

          flex
          flex-col

          gap-5

          rounded-[32px]

          bg-gradient-to-r
          from-emerald-600
          to-teal-600

          p-8

          text-white

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h3
            className="
              text-2xl
              font-bold
            "
          >
            Need additional assistance?
          </h3>

          <p
            className="
              mt-3

              max-w-2xl

              text-emerald-100
            "
          >
            Our support specialists usually
            respond within a few hours for
            active tickets.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2

            rounded-2xl

            bg-white

            px-7
            py-3.5

            font-semibold

            text-emerald-700

            transition

            hover:bg-slate-100
          "
        >
          Create New Ticket

          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default TicketHistory;