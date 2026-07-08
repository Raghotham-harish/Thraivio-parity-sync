import {
  CalendarDays,
  GraduationCap,
  MonitorPlay,
  UserRound,
  X,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { mentors } from "@/data/mentors";
import { adminSessions } from "@/data/admin-sessions";

import type {
  AdminSession,
  AdminSessionStatus,
  AttendanceStatus,
  MeetingPlatform,
  PaymentStatus,
} from "@/types/admin-session";

interface EditSessionDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onUpdate: (
    session: AdminSession
  ) => void;
}

const meetingPlatforms: MeetingPlatform[] = [
  "Google Meet",
  "Zoom",
  "Microsoft Teams",
];

const statusOptions: AdminSessionStatus[] = [
  "scheduled",
  "live",
  "completed",
  "cancelled",
  "missed",
];

const attendanceOptions: AttendanceStatus[] = [
  "waiting",
  "joined",
  "completed",
  "absent",
];

const paymentOptions: PaymentStatus[] = [
  "paid",
  "pending",
  "refunded",
];

const EditSessionDialog = ({
  open,
  session,
  onClose,
  onUpdate,
}: EditSessionDialogProps) => {

  const students = useMemo(() => {
    const map = new Map<
      string,
      {
        id: string;
        name: string;
        email: string;
      }
    >();

    adminSessions.forEach((item) => {
      map.set(item.studentId, {
        id: item.studentId,
        name: item.studentName,
        email: item.studentEmail,
      });
    });

    return [...map.values()];
  }, []);

  const [mentorId, setMentorId] =
    useState("");

  const [studentId, setStudentId] =
    useState("");

  const [programId, setProgramId] =
    useState("");

  const [sessionType, setSessionType] =
    useState("");

  const [meetingPlatform, setMeetingPlatform] =
    useState<MeetingPlatform>(
      "Google Meet"
    );

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [duration, setDuration] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [status, setStatus] =
    useState<AdminSessionStatus>(
      "scheduled"
    );

  const [attendance, setAttendance] =
    useState<AttendanceStatus>(
      "waiting"
    );

  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatus>(
      "paid"
    );

  useEffect(() => {
    if (!session) return;

    setMentorId(
      String(session.mentorId)
    );

    setStudentId(
      session.studentId
    );

    setProgramId(
      String(session.programId)
    );

    setSessionType(
      session.sessionType
    );

    setMeetingPlatform(
      session.meetingPlatform
    );

    setDate(session.date);

    setTime(session.time);

    setDuration(
      session.duration
    );

    setAmount(
      String(session.amount)
    );

    setNotes(
      session.adminNotes ?? ""
    );

    setStatus(
      session.status
    );

    setAttendance(
      session.attendance
    );

    setPaymentStatus(
      session.paymentStatus
    );

  }, [session]);

  if (!open || !session)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-5
      "
    >
      <div
        className="
          w-full
          max-w-6xl

          max-h-[92vh]

          overflow-hidden

          rounded-[36px]

          bg-white

          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            bg-gradient-to-r
            from-amber-500
            via-orange-500
            to-red-500

            p-8

            text-white

            flex
            items-center
            justify-between
          "
        >
          <div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Edit Session
            </h2>

            <p
              className="
                mt-2

                text-orange-100
              "
            >
              Update mentor session details,
              schedule and payment information.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              h-11
              w-11

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center

              hover:bg-white/30

              transition
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div
          className="
            flex-1

            overflow-y-auto

            p-8

            space-y-8
          "
        >
                      {/* Mentor & Student */}

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Mentor */}

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
              "
            >
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-2
                "
              >
                <UserRound
                  size={20}
                  className="text-amber-600"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Mentor
                </h3>
              </div>

              <select
                value={mentorId}
                onChange={(e) => {
                  setMentorId(e.target.value);

                  setProgramId("");

                  setSessionType("");
                }}
                className="
                  h-12
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4

                  outline-none

                  focus:border-amber-500
                  focus:ring-2
                  focus:ring-amber-100
                "
              >
                {mentors.map((mentor) => (
                  <option
                    key={mentor.id}
                    value={mentor.id}
                  >
                    {mentor.name}
                  </option>
                ))}
              </select>

            </div>

            {/* Student */}

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
              "
            >
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-2
                "
              >
                <GraduationCap
                  size={20}
                  className="text-emerald-600"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Student
                </h3>
              </div>

              <select
                value={studentId}
                onChange={(e) =>
                  setStudentId(
                    e.target.value
                  )
                }
                className="
                  h-12
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4

                  outline-none

                  focus:border-amber-500
                  focus:ring-2
                  focus:ring-amber-100
                "
              >
                {students.map(
                  (student) => (
                    <option
                      key={student.id}
                      value={student.id}
                    >
                      {student.name}
                    </option>
                  )
                )}
              </select>

            </div>

          </div>

          {/* Session Configuration */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6
            "
          >
            <div
              className="
                mb-6

                flex
                items-center

                gap-2
              "
            >
              <MonitorPlay
                size={20}
                className="text-blue-600"
              />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Session Configuration
              </h3>
            </div>

            <div
              className="
                grid

                gap-5

                lg:grid-cols-3
              "
            >

              {/* Program */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-medium
                  "
                >
                  Program
                </label>

                <select
                  value={programId}
                  onChange={(e) => {

                    const value =
                      e.target.value;

                    setProgramId(value);

                    const mentor =
                      mentors.find(
                        (m) =>
                          String(m.id) ===
                          mentorId
                      );

                    const program =
                      mentor?.programs[
                        Number(value)
                      ];

                    setSessionType(
                      program?.title ??
                        ""
                    );

                    setAmount(
                      String(
                        program?.price ??
                          ""
                      )
                    );

                  }}
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-amber-500
                  "
                >
                  {mentorId &&
                    mentors
                      .find(
                        (mentor) =>
                          String(
                            mentor.id
                          ) ===
                          mentorId
                      )
                      ?.programs.map(
                        (
                          program,
                          index
                        ) => (
                          <option
                            key={index}
                            value={index}
                          >
                            {
                              program.title
                            }
                          </option>
                        )
                      )}
                </select>

              </div>

              {/* Session Type */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-medium
                  "
                >
                  Session Type
                </label>

                <input
                  value={sessionType}
                  onChange={(e) =>
                    setSessionType(
                      e.target.value
                    )
                  }
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-amber-500
                  "
                />

              </div>

              {/* Platform */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-medium
                  "
                >
                  Meeting Platform
                </label>

                <select
                  value={
                    meetingPlatform
                  }
                  onChange={(e) =>
                    setMeetingPlatform(
                      e.target
                        .value as MeetingPlatform
                    )
                  }
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-amber-500
                  "
                >
                  {meetingPlatforms.map(
                    (
                      platform
                    ) => (
                      <option
                        key={
                          platform
                        }
                        value={
                          platform
                        }
                      >
                        {platform}
                      </option>
                    )
                  )}
                </select>

              </div>

            </div>

          </div>
                    {/* Schedule & Preview */}

          <div
            className="
              grid
              gap-6
              xl:grid-cols-2
            "
          >
            {/* Left */}

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
              "
            >
              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-2
                "
              >
                <CalendarDays
                  size={20}
                  className="text-amber-600"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Schedule Details
                </h3>
              </div>

              <div className="space-y-5">

                {/* Date */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                    "
                  >
                    Session Date
                  </label>

                  <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                      setDate(
                        e.target.value
                      )
                    }
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      px-4
                      outline-none
                      focus:border-amber-500
                      focus:ring-2
                      focus:ring-amber-100
                    "
                  />
                </div>

                {/* Time */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                    "
                  >
                    Session Time
                  </label>

                  <input
                    type="time"
                    value={time}
                    onChange={(e) =>
                      setTime(
                        e.target.value
                      )
                    }
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      px-4
                      outline-none
                      focus:border-amber-500
                    "
                  />
                </div>

                {/* Duration */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                    "
                  >
                    Duration
                  </label>

                  <select
                    value={duration}
                    onChange={(e) =>
                      setDuration(
                        e.target.value
                      )
                    }
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      px-4
                      outline-none
                      focus:border-amber-500
                    "
                  >
                    <option>
                      30 Minutes
                    </option>

                    <option>
                      45 Minutes
                    </option>

                    <option>
                      60 Minutes
                    </option>

                    <option>
                      90 Minutes
                    </option>

                    <option>
                      120 Minutes
                    </option>
                  </select>
                </div>

                {/* Amount */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                    "
                  >
                    Session Amount
                  </label>

                  <input
                    type="number"
                    value={amount}
                    onChange={(e) =>
                      setAmount(
                        e.target.value
                      )
                    }
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      px-4
                      outline-none
                      focus:border-amber-500
                    "
                  />
                </div>

              </div>

            </div>

            {/* Preview */}

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-gradient-to-br
                from-orange-50
                via-amber-50
                to-yellow-50
                p-6
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                  mb-6
                "
              >
                Live Preview
              </h3>

              <div className="space-y-4">

                <PreviewItem
                  label="Mentor"
                  value={
                    mentors.find(
                      (m) =>
                        String(m.id) === mentorId
                    )?.name ??
                    "-"
                  }
                />

                <PreviewItem
                  label="Student"
                  value={
                    students.find(
                      (s) =>
                        s.id === studentId
                    )?.name ??
                    "-"
                  }
                />

                <PreviewItem
                  label="Session"
                  value={sessionType}
                />

                <PreviewItem
                  label="Platform"
                  value={meetingPlatform}
                />

                <PreviewItem
                  label="Date"
                  value={date}
                />

                <PreviewItem
                  label="Time"
                  value={time}
                />

                <PreviewItem
                  label="Duration"
                  value={duration}
                />

                <PreviewItem
                  label="Amount"
                  value={`₹${amount}`}
                />

              </div>
            </div>

          </div>

          {/* Admin Notes */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
            "
          >
            <h3
              className="
                mb-5
                text-xl
                font-bold
              "
            >
              Admin Notes
            </h3>

            <textarea
              rows={6}
              value={notes}
              onChange={(e) =>
                setNotes(
                  e.target.value
                )
              }
              placeholder="
              Add internal notes,
              instructions,
              follow-up,
              payment remarks..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                p-4
                outline-none
                resize-none
                focus:border-amber-500
                focus:ring-2
                focus:ring-amber-100
              "
            />
          </div>
                    {/* Status Section */}

          <div
            className="
              grid
              gap-6

              lg:grid-cols-3
            "
          >
            {/* Session Status */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                bg-white

                p-6
              "
            >
              <label
                className="
                  mb-3

                  block

                  text-sm
                  font-semibold
                "
              >
                Session Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target
                      .value as AdminSessionStatus
                  )
                }
                className="
                  h-12
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4

                  outline-none

                  focus:border-amber-500
                "
              >
                {statusOptions.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Attendance */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                bg-white

                p-6
              "
            >
              <label
                className="
                  mb-3

                  block

                  text-sm
                  font-semibold
                "
              >
                Attendance
              </label>

              <select
                value={attendance}
                onChange={(e) =>
                  setAttendance(
                    e.target
                      .value as AttendanceStatus
                  )
                }
                className="
                  h-12
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4

                  outline-none

                  focus:border-amber-500
                "
              >
                {attendanceOptions.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Payment */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                bg-white

                p-6
              "
            >
              <label
                className="
                  mb-3

                  block

                  text-sm
                  font-semibold
                "
              >
                Payment Status
              </label>

              <select
                value={paymentStatus}
                onChange={(e) =>
                  setPaymentStatus(
                    e.target
                      .value as PaymentStatus
                  )
                }
                className="
                  h-12
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4

                  outline-none

                  focus:border-amber-500
                "
              >
                {paymentOptions.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          {/* Footer */}

          <div
            className="
              sticky
              bottom-0

              border-t
              border-slate-200

              bg-white

              pt-6
            "
          >
            <div
              className="
                flex

                flex-col-reverse

                gap-4

                sm:flex-row
                sm:justify-end
              "
            >
              <button
                onClick={onClose}
                className="
                  rounded-2xl

                  border
                  border-slate-300

                  px-8
                  py-3.5

                  font-semibold

                  transition

                  hover:bg-slate-100
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {

                  if (
                    !mentorId ||
                    !studentId ||
                    !sessionType ||
                    !date ||
                    !time
                  ) {
                    alert(
                      "Please fill all required fields."
                    );

                    return;
                  }

                  onUpdate({
                    ...session,

                    mentorId:
                      Number(mentorId),

                    studentId,

                    programId,

                    sessionType,

                    meetingPlatform,

                    date,

                    time,

                    duration,

                    amount:
                      Number(amount),

                    adminNotes:
                      notes,

                    status,

                    attendance,

                    paymentStatus,

                    updatedAt:
                      new Date()
                        .toISOString()
                        .split("T")[0],
                  });

                  onClose();

                }}
                className="
                  rounded-2xl

                  bg-gradient-to-r
                  from-amber-500
                  via-orange-500
                  to-red-500

                  px-10
                  py-3.5

                  font-semibold

                  text-white

                  shadow-lg

                  transition-all

                  hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                Update Session
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* Preview Card */

function PreviewItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-2xl

        bg-white

        p-4
      "
    >
      <p
        className="
          text-xs
          text-slate-500
        "
      >
        {label}
      </p>

      <h4
        className="
          mt-2

          font-semibold
        "
      >
        {value || "-"}
      </h4>
    </div>
  );
}

export default EditSessionDialog;