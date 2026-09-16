import {
  Check,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
  XCircle,
} from "lucide-react";

import type { AdminSession } from "@/types/admin-session";

interface SessionsTableProps {
  sessions: AdminSession[];

  onView: (
    session: AdminSession
  ) => void;

  onEdit: (
    session: AdminSession
  ) => void;

  onComplete: (
    session: AdminSession
  ) => void;

  onCancel: (
    session: AdminSession
  ) => void;

  onDelete: (
    session: AdminSession
  ) => void;
}

const statusStyles = {
  scheduled:
    "bg-[#EFF6FF] text-[#2563EB]",

  live:
    "bg-[#ECFDF5] text-[#065F46]",

  completed:
    "bg-secondary text-muted-foreground",

  cancelled:
    "bg-[#FFDAD6] text-[#BA1A1A]",

  missed:
    "bg-secondary text-foreground",
};

const paymentStyles = {
  paid:
    "bg-[#ECFDF5] text-[#065F46]",

  pending:
    "bg-[#FFFBEB] text-[#B45309]",

  refunded:
    "bg-[#FFDAD6] text-[#BA1A1A]",
};

const attendanceStyles = {
  waiting:
    "bg-[#FFFBEB] text-[#B45309]",

  joined:
    "bg-[#EFF6FF] text-[#2563EB]",

  completed:
    "bg-[#ECFDF5] text-[#065F46]",

  absent:
    "bg-[#FFDAD6] text-[#BA1A1A]",
};

const SessionsTable = ({
  sessions,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionsTableProps) => {
  return (
    <div
      className="
        overflow-hidden

        rounded-2xl

        border
        border-border

        bg-card
      "
    >
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead
            className="
              border-b

              bg-secondary
            "
          >
            <tr>

              <th className="px-6 py-5 text-left">
                Session
              </th>

              <th className="px-6 py-5 text-left">
                Mentor
              </th>

              <th className="px-6 py-5 text-left">
                Student
              </th>

              <th className="px-6 py-5 text-left">
                Schedule
              </th>

              <th className="px-6 py-5 text-left">
                Platform
              </th>

              <th className="px-6 py-5 text-left">
                Payment
              </th>

              <th className="px-6 py-5 text-left">
                Attendance
              </th>

              <th className="px-6 py-5 text-left">
                Status
              </th>

              <th className="px-6 py-5 text-right">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {sessions.map((session) => (
              <tr
                key={session.id}
                className="
                  border-b

                  hover:bg-secondary

                  transition
                "
              >
                                {/* Session */}

                <td className="px-6 py-5">
                  <div>
                    <h4
                      className="
                        font-semibold
                        text-foreground
                      "
                    >
                      {session.programTitle}
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm

                        text-muted-foreground
                      "
                    >
                      {session.sessionType}
                    </p>

                    <p
                      className="
                        mt-1

                        text-xs

                        text-muted-foreground
                      "
                    >
                      {session.bookingReference}
                    </p>
                  </div>
                </td>

                {/* Mentor */}

                <td className="px-6 py-5">
                  <div
                    className="
                      flex
                      items-center

                      gap-3
                    "
                  >
                    <img
                      src={session.mentorImage}
                      alt={session.mentorName}
                      className="
                        h-12
                        w-12

                        rounded-2xl

                        object-cover
                      "
                    />

                    <div>
                      <h4
                        className="
                          font-semibold
                        "
                      >
                        {session.mentorName}
                      </h4>

                      <p
                        className="
                          mt-1

                          text-sm

                          text-muted-foreground
                        "
                      >
                        {session.mentorCompany}
                      </p>

                      <p
                        className="
                          text-xs

                          text-muted-foreground
                        "
                      >
                        {session.mentorRole}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Student */}

                <td className="px-6 py-5">
                  <div
                    className="
                      flex
                      items-center

                      gap-3
                    "
                  >
                    <img
                      src={session.studentImage}
                      alt={session.studentName}
                      className="
                        h-12
                        w-12

                        rounded-2xl

                        object-cover
                      "
                    />

                    <div>
                      <h4
                        className="
                          font-semibold
                        "
                      >
                        {session.studentName}
                      </h4>

                      <p
                        className="
                          mt-1

                          text-sm

                          text-muted-foreground
                        "
                      >
                        {session.studentEmail}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Schedule */}

                <td className="px-6 py-5">
                  <div>
                    <h4
                      className="
                        font-semibold
                      "
                    >
                      {session.date}
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm

                        text-muted-foreground
                      "
                    >
                      {session.time}
                    </p>

                    <p
                      className="
                        mt-1

                        text-xs

                        text-muted-foreground
                      "
                    >
                      {session.duration}
                    </p>
                  </div>
                </td>

                {/* Platform */}

                <td className="px-6 py-5">
                  <div>
                    <span
                      className="
                        inline-flex

                        rounded-full

                        bg-[#EFF6FF]

                        px-3
                        py-1.5

                        text-xs
                        font-semibold

                        text-[#2563EB]
                      "
                    >
                      {session.meetingPlatform}
                    </span>

                    <p
                      className="
                        mt-2

                        text-xs

                        text-muted-foreground
                      "
                    >
                      {session.timezone}
                    </p>
                  </div>
                </td>
                                {/* Payment */}

                <td className="px-6 py-5">
                  <div>
                    <span
                      className={`
                        inline-flex

                        rounded-full

                        px-3
                        py-1.5

                        text-xs
                        font-semibold

                        ${
                          paymentStyles[
                            session.paymentStatus
                          ]
                        }
                      `}
                    >
                      {session.paymentStatus}
                    </span>

                    <p
                      className="
                        mt-2

                        font-semibold

                        text-[#0F8F65]
                      "
                    >
                      ₹{session.amount}
                    </p>
                  </div>
                </td>

                {/* Attendance */}

                <td className="px-6 py-5">
                  <span
                    className={`
                      inline-flex

                      rounded-full

                      px-3
                      py-1.5

                      text-xs
                      font-semibold

                      ${
                        attendanceStyles[
                          session.attendance
                        ]
                      }
                    `}
                  >
                    {session.attendance}
                  </span>
                </td>

                {/* Status */}

                <td className="px-6 py-5">
                  <span
                    className={`
                      inline-flex

                      rounded-full

                      px-3
                      py-1.5

                      text-xs
                      font-semibold

                      ${
                        statusStyles[
                          session.status
                        ]
                      }
                    `}
                  >
                    {session.status}
                  </span>
                </td>

                {/* Actions */}

                <td className="px-6 py-5">
                  <div
                    className="
                      flex

                      justify-end

                      gap-2
                    "
                  >
                    <button
                      onClick={() =>
                        onView(session)
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        border
                        border-border

                        transition

                        hover:bg-secondary
                      "
                      title="View"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      onClick={() =>
                        onEdit(session)
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        bg-primary

                        text-white

                        transition

                        hover:bg-primary/90
                      "
                      title="Edit"
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      onClick={() =>
                        onComplete(session)
                      }
                      disabled={
                        session.status ===
                        "completed"
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        bg-[#10B981]

                        text-white

                        transition

                        hover:bg-[#0da271]

                        disabled:cursor-not-allowed
                        disabled:bg-muted
                      "
                      title="Complete"
                    >
                      <Check size={17} />
                    </button>

                    <button
                      onClick={() =>
                        onCancel(session)
                      }
                      disabled={
                        session.status ===
                        "cancelled"
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        bg-[#F59E0B]

                        text-white

                        transition

                        hover:bg-[#D97706]

                        disabled:cursor-not-allowed
                        disabled:bg-muted
                      "
                      title="Cancel"
                    >
                      <XCircle size={17} />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(session)
                      }
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        bg-destructive

                        text-white

                        transition

                        hover:bg-destructive/90
                      "
                      title="Delete"
                    >
                      <Trash2 size={17} />
                    </button>

                    <button
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-xl

                        border
                        border-border

                        transition

                        hover:bg-secondary
                      "
                      title="More"
                    >
                      <MoreHorizontal
                        size={17}
                      />
                    </button>
                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SessionsTable;