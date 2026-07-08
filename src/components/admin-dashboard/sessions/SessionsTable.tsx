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
    "bg-blue-100 text-blue-700",

  live:
    "bg-emerald-100 text-emerald-700",

  completed:
    "bg-violet-100 text-violet-700",

  cancelled:
    "bg-red-100 text-red-700",

  missed:
    "bg-slate-200 text-slate-700",
};

const paymentStyles = {
  paid:
    "bg-green-100 text-green-700",

  pending:
    "bg-amber-100 text-amber-700",

  refunded:
    "bg-red-100 text-red-700",
};

const attendanceStyles = {
  waiting:
    "bg-amber-100 text-amber-700",

  joined:
    "bg-blue-100 text-blue-700",

  completed:
    "bg-green-100 text-green-700",

  absent:
    "bg-red-100 text-red-700",
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

        rounded-[30px]

        border
        border-slate-200

        bg-white
      "
    >
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead
            className="
              border-b

              bg-slate-50
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

                  hover:bg-slate-50

                  transition
                "
              >
                                {/* Session */}

                <td className="px-6 py-5">
                  <div>
                    <h4
                      className="
                        font-semibold
                        text-slate-900
                      "
                    >
                      {session.programTitle}
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm

                        text-slate-500
                      "
                    >
                      {session.sessionType}
                    </p>

                    <p
                      className="
                        mt-1

                        text-xs

                        text-slate-400
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

                          text-slate-500
                        "
                      >
                        {session.mentorCompany}
                      </p>

                      <p
                        className="
                          text-xs

                          text-slate-400
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

                          text-slate-500
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

                        text-slate-500
                      "
                    >
                      {session.time}
                    </p>

                    <p
                      className="
                        mt-1

                        text-xs

                        text-slate-400
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

                        bg-indigo-50

                        px-3
                        py-1.5

                        text-xs
                        font-semibold

                        text-indigo-700
                      "
                    >
                      {session.meetingPlatform}
                    </span>

                    <p
                      className="
                        mt-2

                        text-xs

                        text-slate-400
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

                        text-green-600
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
                        border-slate-200

                        transition

                        hover:bg-slate-100
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

                        bg-blue-600

                        text-white

                        transition

                        hover:bg-blue-700
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

                        bg-emerald-600

                        text-white

                        transition

                        hover:bg-emerald-700

                        disabled:cursor-not-allowed
                        disabled:bg-slate-300
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

                        bg-amber-500

                        text-white

                        transition

                        hover:bg-amber-600

                        disabled:cursor-not-allowed
                        disabled:bg-slate-300
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

                        bg-red-600

                        text-white

                        transition

                        hover:bg-red-700
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
                        border-slate-200

                        transition

                        hover:bg-slate-100
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