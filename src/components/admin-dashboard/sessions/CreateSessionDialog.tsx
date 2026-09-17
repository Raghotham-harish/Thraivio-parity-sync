import {
  CalendarDays,
  GraduationCap,
  MonitorPlay,
  UserRound,
  X,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { mentors } from "@/data/mentors";

import { adminSessions } from "@/data/admin-sessions";

import type {
  AdminSession,
  MeetingPlatform,
} from "@/types/admin-session";

interface CreateSessionDialogProps {
  open: boolean;

  onClose: () => void;

  onCreate: (
    session: Partial<AdminSession>
  ) => void;
}

const meetingPlatforms: MeetingPlatform[] = [
  "Google Meet",
  "Zoom",
  "Microsoft Teams",
];

const CreateSessionDialog = ({
  open,
  onClose,
  onCreate,
}: CreateSessionDialogProps) => {
  const students = useMemo(() => {
    const map = new Map();

    adminSessions.forEach((session) => {
      map.set(session.studentId, {
        id: session.studentId,
        name: session.studentName,
        email: session.studentEmail,
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
    useState("60 Minutes");

  const [amount, setAmount] =
    useState("");

  const [notes, setNotes] =
    useState("");

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/60
        backdrop-blur-sm

        p-5
      "
    >
      <div
        className="
          flex
          max-h-[90vh]
          w-full
          max-w-6xl
          flex-col

          overflow-hidden

          rounded-2xl

          bg-card
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            gap-5

            border-b
            border-border
            bg-card

            p-6
          "
        >
          <div className="flex items-center gap-5">
            <div className="icon-bg flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
              <CalendarDays className="h-7 w-7 text-primary" />
            </div>

            <div>
              <h2
                className="text-xl font-medium text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Create Session
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Schedule a new mentorship session.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              bg-secondary

              transition

              hover:bg-muted
            "
          >
            <X size={18} />
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
                rounded-2xl

                border
                border-border

                bg-card

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
                  className="text-primary"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Select Mentor
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
                  border-border

                  px-4

                  outline-none

                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              >
                <option value="">
                  Choose Mentor
                </option>

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
                rounded-2xl

                border
                border-border

                bg-card

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
                  className="text-[#0F8F65]"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Select Student
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
                  border-border

                  px-4

                  outline-none

                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              >
                <option value="">
                  Choose Student
                </option>

                {students.map((student) => (
                  <option
                    key={student.id}
                    value={student.id}
                  >
                    {student.name}
                  </option>
                ))}
              </select>

            </div>

          </div>

          {/* Program Details */}

          <div
            className="
              rounded-2xl

              border
              border-border

              bg-card

              p-6
            "
          >
            <h3
              className="
                mb-6

                text-xl
                font-bold
              "
            >
              Session Configuration
            </h3>

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
                      program?.title ?? ""
                    );

                    setAmount(
                      String(
                        program?.price ??
                          ""
                      )
                    );
                  }}
                  disabled={!mentorId}
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-border

                    px-4

                    outline-none

                    disabled:bg-secondary

                    focus:border-primary
                  "
                >
                  <option value="">
                    Choose Program
                  </option>

                  {mentorId &&
                    mentors
                      .find(
                        (mentor) =>
                          String(
                            mentor.id
                          ) === mentorId
                      )
                      ?.programs.map(
                      (program, index) => (
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
                  placeholder="Session Type"
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-border

                    px-4

                    outline-none

                    focus:border-primary
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
                    border-border

                    px-4

                    outline-none

                    focus:border-primary
                  "
                >
                  {meetingPlatforms.map(
                    (platform) => (
                      <option
                        key={platform}
                        value={platform}
                      >
                        {platform}
                      </option>
                    )
                  )}
                </select>
              </div>

            </div>
          </div>
                    {/* Schedule & Pricing */}

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
                rounded-2xl

                border
                border-border

                bg-card

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
                  className="text-primary"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Schedule
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
                      border-border

                      px-4

                      outline-none

                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/20
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
                      border-border

                      px-4

                      outline-none

                      focus:border-primary
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
                      border-border

                      px-4

                      outline-none

                      focus:border-primary
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
                    Amount
                  </label>

                  <input
                    type="number"
                    value={amount}
                    onChange={(e) =>
                      setAmount(
                        e.target.value
                      )
                    }
                    placeholder="Session Amount"
                    className="
                      h-12
                      w-full

                      rounded-2xl

                      border
                      border-border

                      px-4

                      outline-none

                      focus:border-primary
                    "
                  />
                </div>

              </div>
            </div>

            {/* Right */}

            <div
              className="
                rounded-2xl

                border
                border-border

                bg-secondary

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
                  className="text-primary"
                />

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Session Preview
                </h3>
              </div>

              <div className="space-y-4">

                <div
                  className="
                    rounded-2xl

                    bg-card

                    p-4
                  "
                >
                  <p className="text-xs text-muted-foreground">
                    Mentor
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {mentorId
                      ? mentors.find(
                          (m) =>
                            String(m.id) === mentorId
                        )?.name
                      : "Not Selected"}
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-card

                    p-4
                  "
                >
                  <p className="text-xs text-muted-foreground">
                    Student
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {studentId
                      ? students.find(
                          (s) =>
                            s.id === studentId
                        )?.name
                      : "Not Selected"}
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-card

                    p-4
                  "
                >
                  <p className="text-xs text-muted-foreground">
                    Program
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {sessionType ||
                      "Not Selected"}
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-card

                    p-4
                  "
                >
                  <p className="text-xs text-muted-foreground">
                    Schedule
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {date || "--"}
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {time || "--"}
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-card

                    p-4
                  "
                >
                  <p className="text-xs text-muted-foreground">
                    Platform
                  </p>

                  <h4 className="mt-2 font-semibold">
                    {meetingPlatform}
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl

                    bg-card

                    p-4
                  "
                >
                  <p className="text-xs text-muted-foreground">
                    Amount
                  </p>

                  <h4
                    className="
                      mt-2

                      text-2xl
                      font-bold

                      text-[#0F8F65]
                    "
                  >
                    ₹{amount || "0"}
                  </h4>
                </div>

              </div>
            </div>
          </div>

          {/* Notes */}

          <div
            className="
              rounded-2xl

              border
              border-border

              bg-card

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
              Session Notes
            </h3>

            <textarea
              rows={5}
              value={notes}
              onChange={(e) =>
                setNotes(
                  e.target.value
                )
              }
              placeholder="Enter mentor instructions, agenda, admin notes..."
              className="
                w-full

                rounded-2xl

                border
                border-border

                p-4

                outline-none

                resize-none

                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
              "
            />
          </div>
                    {/* Session Status */}

          <div
            className="
              rounded-2xl

              border
              border-border

              bg-card

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
              Session Status
            </h3>

            <select
              className="
                h-12
                w-full

                rounded-2xl

                border
                border-border

                px-4

                outline-none

                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
              "
              defaultValue="scheduled"
            >
              <option value="scheduled">
                Scheduled
              </option>

              <option value="live">
                Live
              </option>

              <option value="completed">
                Completed
              </option>

              <option value="cancelled">
                Cancelled
              </option>

              <option value="missed">
                Missed
              </option>
            </select>
          </div>

          {/* Footer */}

          <div
            className="
              sticky
              bottom-0

              border-t
              border-border

              bg-card

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
                  border-border

                  px-8
                  py-3.5

                  font-semibold

                  transition-all

                  hover:bg-secondary
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (
                    !mentorId ||
                    !studentId ||
                    !programId ||
                    !date ||
                    !time
                  ) {
                    alert(
                      "Please fill all required fields."
                    );

                    return;
                  }

                  const mentor =
                    mentors.find(
                      (m) =>
                        String(m.id) ===
                        mentorId
                    );

                  const student =
                    students.find(
                      (s) =>
                        s.id ===
                        studentId
                    );

                  if (
                    !mentor ||
                    !student
                  )
                    return;

                  onCreate({
                    mentorId:
                      mentor.id,

                    mentorName:
                      mentor.name,

                    mentorImage:
                      mentor.image,

                    mentorRole:
                      mentor.role,

                    mentorCompany:
                      mentor.company,

                    mentorEmail: `${mentor.name
                      .toLowerCase()
                      .replaceAll(
                        " ",
                        "."
                      )}@coachcoaching.com`,

                    studentId:
                      student.id,

                    studentName:
                      student.name,

                    studentEmail:
                      student.email,

                    programId,

                    programTitle:
                      sessionType,

                    sessionType,

                    meetingPlatform,

                    date,

                    time,

                    duration,

                    amount:
                      Number(
                        amount
                      ),

                    studentNotes:
                      notes,

                    status:
                      "scheduled",

                    attendance:
                      "waiting",

                    paymentStatus:
                      "paid",

                    refundStatus:
                      "none",
                  });

                  onClose();
                }}
                className="
                  rounded-2xl

                  
                  bg-primary
                  
                  

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
                Create Session
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateSessionDialog;