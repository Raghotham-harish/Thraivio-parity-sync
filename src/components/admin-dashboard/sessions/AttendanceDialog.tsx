import {
  CalendarDays,
  Clock3,
  User,
  Building2,
  GraduationCap,
  ClipboardCheck,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type {
  AdminSession,
  AttendanceStatus,
} from "@/types/admin-session";

interface AttendanceDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onSave: (
    session: AdminSession
  ) => void;
}

const AttendanceDialog = ({
  open,
  session,
  onClose,
  onSave,
}: AttendanceDialogProps) => {

  const [
    attendance,
    setAttendance,
  ] =
    useState<AttendanceStatus>(
      "waiting"
    );

  const [
    joinTime,
    setJoinTime,
  ] = useState("");

  const [
    leaveTime,
    setLeaveTime,
  ] = useState("");

  const [
    duration,
    setDuration,
  ] = useState("");

  const [
    completion,
    setCompletion,
  ] = useState(100);

  useEffect(() => {

    if (!session) return;

    setAttendance(
      session.attendance
    );

    setJoinTime(session.time);

    setLeaveTime(session.time);

    setDuration(
      session.duration
    );

    setCompletion(100);

  }, [session]);

  if (!open || !session)
    return null;

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
          max-h-[92vh]
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

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            p-8

            text-white
          "
        >

          <div>

            <div
              className="
                mb-3

                inline-flex
                items-center
                gap-2

                rounded-full

                bg-card/20

                px-4
                py-2

                text-sm
              "
            >

              <ClipboardCheck
                size={18}
              />

              Attendance Manager

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Session Attendance
            </h2>

            <p
              className="
                mt-3

                text-blue-100
              "
            >
              Track mentor and student
              attendance, session duration
              and completion status.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-full

              bg-card/20

              transition

              hover:bg-card/30
            "
          >
            <X size={20}/>
          </button>

        </div>

        {/* Body */}

        <div
          className="
            flex-1

            overflow-y-auto

            space-y-8

            p-8
          "
        >

          {/* Session Summary */}

          <div
            className="
              rounded-2xl

              border
              border-blue-100

              bg-blue-50

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
              Session Summary
            </h3>

            <div
              className="
                grid
                gap-6

                lg:grid-cols-2
              "
            >

              {/* Mentor */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  bg-card

                  p-5
                "
              >

                <img
                  src={
                    session.mentorImage
                  }
                  alt={
                    session.mentorName
                  }
                  className="
                    h-20
                    w-20

                    rounded-2xl

                    object-cover
                  "
                />

                <div>

                  <h4
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {session.mentorName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-muted-foreground
                    "
                  >
                    {session.mentorRole}
                  </p>

                  <div
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2

                      text-sm
                      text-muted-foreground
                    "
                  >

                    <Building2
                      size={15}
                    />

                    {session.mentorCompany}

                  </div>

                </div>

              </div>

              {/* Student */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  bg-card

                  p-5
                "
              >

                <img
                  src={
                    session.studentImage
                  }
                  alt={
                    session.studentName
                  }
                  className="
                    h-20
                    w-20

                    rounded-2xl

                    object-cover
                  "
                />

                <div>

                  <h4
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {session.studentName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-muted-foreground
                    "
                  >
                    {session.studentEmail}
                  </p>

                </div>

              </div>

            </div>

            {/* Session Info */}

            <div
              className="
                mt-6

                grid
                gap-5

                md:grid-cols-4
              "
            >

              <InfoCard
                icon={
                  <CalendarDays
                    size={18}
                  />
                }
                title="Date"
                value={session.date}
              />

              <InfoCard
                icon={
                  <Clock3
                    size={18}
                  />
                }
                title="Time"
                value={session.time}
              />

              <InfoCard
                icon={
                  <GraduationCap
                    size={18}
                  />
                }
                title="Program"
                value={
                  session.programTitle
                }
              />

              <InfoCard
                icon={
                  <User
                    size={18}
                  />
                }
                title="Booking"
                value={
                  session.bookingReference
                }
              />

            </div>

          </div>
                    {/* Attendance Management */}

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

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Attendance Details
              </h3>

              {/* Attendance */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Attendance Status
                </label>

                <select
                  value={attendance}
                  onChange={(e)=>
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
                    border-border

                    px-4

                    outline-none

                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                >
                  <option value="waiting">
                    Waiting
                  </option>

                  <option value="joined">
                    Joined
                  </option>

                  <option value="completed">
                    Completed
                  </option>

                  <option value="absent">
                    Absent
                  </option>

                </select>

              </div>

              {/* Join & Leave */}

              <div
                className="
                  mt-6

                  grid

                  gap-5

                  md:grid-cols-2
                "
              >

                <div>

                  <label
                    className="
                      mb-2

                      block

                      text-sm
                      font-semibold
                    "
                  >
                    Join Time
                  </label>

                  <input
                    type="time"
                    value={joinTime}
                    onChange={(e)=>
                      setJoinTime(
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

                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />

                </div>

                <div>

                  <label
                    className="
                      mb-2

                      block

                      text-sm
                      font-semibold
                    "
                  >
                    Leave Time
                  </label>

                  <input
                    type="time"
                    value={leaveTime}
                    onChange={(e)=>
                      setLeaveTime(
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

                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-100
                    "
                  />

                </div>

              </div>

              {/* Duration */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Session Duration
                </label>

                <input
                  value={duration}
                  onChange={(e)=>
                    setDuration(
                      e.target.value
                    )
                  }
                  placeholder="60 Minutes"
                  className="
                    h-12

                    w-full

                    rounded-2xl

                    border
                    border-border

                    px-4

                    outline-none

                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />

              </div>

              {/* Completion */}

              <div className="mt-6">

                <div
                  className="
                    mb-3

                    flex
                    items-center
                    justify-between
                  "
                >

                  <label
                    className="
                      text-sm
                      font-semibold
                    "
                  >
                    Session Completion
                  </label>

                  <span
                    className="
                      text-sm
                      font-bold

                      text-primary
                    "
                  >
                    {completion}%
                  </span>

                </div>

                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={completion}
                  onChange={(e)=>
                    setCompletion(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full"
                />

              </div>

            </div>

            {/* Right */}

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
                Attendance Summary
              </h3>

              <div
                className="
                  grid

                  gap-5
                "
              >

                <SummaryCard
                  title="Attendance"
                  value={attendance}
                />

                <SummaryCard
                  title="Join Time"
                  value={
                    joinTime || "--:--"
                  }
                />

                <SummaryCard
                  title="Leave Time"
                  value={
                    leaveTime || "--:--"
                  }
                />

                <SummaryCard
                  title="Duration"
                  value={duration}
                />

                <SummaryCard
                  title="Completion"
                  value={`${completion}%`}
                />

              </div>

              {/* Progress */}

              <div
                className="
                  mt-8

                  rounded-2xl

                  bg-secondary

                  p-5
                "
              >

                <div
                  className="
                    mb-4

                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-sm
                      font-medium
                    "
                  >
                    Session Progress
                  </span>

                  <span
                    className="
                      text-sm
                      font-bold

                      text-primary
                    "
                  >
                    {completion}%
                  </span>

                </div>

                <div
                  className="
                    h-3

                    overflow-hidden

                    rounded-full

                    bg-secondary
                  "
                >

                  <div
                    className="
                      h-full

                      rounded-full

                      bg-gradient-to-r
                      from-blue-500
                      via-indigo-500
                      to-purple-500

                      transition-all
                    "
                    style={{
                      width: `${completion}%`,
                    }}
                  />

                </div>

                <p
                  className="
                    mt-4

                    text-sm
                    text-muted-foreground
                  "
                >
                  Attendance progress will
                  be stored for reports,
                  certificates and mentor
                  analytics.
                </p>

              </div>

            </div>

          </div>
                    {/* Attendance Controls */}

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

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Attendance Controls
              </h3>

              {/* Mentor Present */}

              <label
                className="
                  flex
                  items-center
                  justify-between

                  rounded-2xl

                  border
                  border-border

                  p-4

                  cursor-pointer
                "
              >

                <div>

                  <h4
                    className="
                      font-semibold
                    "
                  >
                    Mentor Present
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      text-muted-foreground
                    "
                  >
                    Confirm mentor joined
                    the session.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={
                    attendance !==
                    "absent"
                  }
                  className="
                    h-5
                    w-5
                  "
                  readOnly
                />

              </label>

              {/* Student Present */}

              <label
                className="
                  mt-5

                  flex
                  items-center
                  justify-between

                  rounded-2xl

                  border
                  border-border

                  p-4

                  cursor-pointer
                "
              >

                <div>

                  <h4
                    className="
                      font-semibold
                    "
                  >
                    Student Present
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      text-muted-foreground
                    "
                  >
                    Confirm student attended
                    the live session.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={
                    attendance !==
                    "absent"
                  }
                  className="
                    h-5
                    w-5
                  "
                  readOnly
                />

              </label>

              {/* Late Join */}

              <div
                className="
                  mt-6

                  rounded-2xl

                  bg-amber-50

                  p-5
                "
              >

                <h4
                  className="
                    font-semibold

                    text-[#B45309]
                  "
                >
                  Late Join Tracking
                </h4>

                <p
                  className="
                    mt-2

                    text-sm

                    text-amber-600
                  "
                >
                  Compare scheduled time
                  with join time to detect
                  late attendance.
                </p>

                <div
                  className="
                    mt-4

                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-sm
                    "
                  >
                    Late Arrival
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-card

                      px-3
                      py-1

                      text-sm
                      font-semibold

                      text-[#B45309]
                    "
                  >
                    0 Minutes
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}

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
                Completion Details
              </h3>

              {/* Certificate */}

              <label
                className="
                  flex
                  items-center
                  justify-between

                  rounded-2xl

                  border
                  border-border

                  p-4

                  cursor-pointer
                "
              >

                <div>

                  <h4
                    className="
                      font-semibold
                    "
                  >
                    Issue Certificate
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      text-muted-foreground
                    "
                  >
                    Automatically issue
                    certificate after
                    completion.
                  </p>

                </div>

                <input
                  type="checkbox"
                  defaultChecked={
                    session.certificateIssued
                  }
                  className="
                    h-5
                    w-5
                  "
                />

              </label>

              {/* Attendance Notes */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Attendance Notes
                </label>

                <textarea
                  rows={7}
                  placeholder="
                  Session observations,
                  mentor remarks,
                  participation quality,
                  technical issues,
                  attendance remarks..."
                  className="
                    w-full

                    resize-none

                    rounded-2xl

                    border
                    border-border

                    p-4

                    outline-none

                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />

              </div>

              {/* Checklist */}

              <div
                className="
                  mt-6

                  rounded-2xl

                  bg-secondary

                  p-5
                "
              >

                <h4
                  className="
                    mb-4

                    font-semibold
                  "
                >
                  Attendance Checklist
                </h4>

                <div
                  className="
                    space-y-3
                  "
                >

                  <ChecklistItem
                    checked={
                      attendance !==
                      "waiting"
                    }
                    title="Attendance Updated"
                  />

                  <ChecklistItem
                    checked={
                      joinTime !== ""
                    }
                    title="Join Time Recorded"
                  />

                  <ChecklistItem
                    checked={
                      leaveTime !== ""
                    }
                    title="Leave Time Recorded"
                  />

                  <ChecklistItem
                    checked={
                      completion >= 80
                    }
                    title="Completion Verified"
                  />

                  <ChecklistItem
                    checked={
                      session.certificateIssued
                    }
                    title="Certificate Eligible"
                  />

                </div>

              </div>

            </div>

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

                  transition

                  hover:bg-secondary
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {

                  if (!joinTime) {
                    alert(
                      "Please select join time."
                    );

                    return;
                  }

                  if (!leaveTime) {
                    alert(
                      "Please select leave time."
                    );

                    return;
                  }

                  if (
                    attendance === "completed" &&
                    completion < 80
                  ) {
                    alert(
                      "Completed sessions should have at least 80% completion."
                    );

                    return;
                  }

                  onSave({
                    ...session,

                    attendance,

                    duration,

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
                  from-blue-600
                  via-indigo-600
                  to-purple-600

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
                Save Attendance
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

/* -------------------------- */
/* Helper Components */
/* -------------------------- */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (

    <div
      className="
        rounded-2xl

        bg-card

        p-5
      "
    >
      <div className="text-primary">
        {icon}
      </div>

      <p
        className="
          mt-3

          text-sm
          text-muted-foreground
        "
      >
        {title}
      </p>

      <h4
        className="
          mt-1

          font-semibold
        "
      >
        {value}
      </h4>

    </div>

  );

}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div
      className="
        rounded-2xl

        bg-secondary

        p-5
      "
    >

      <p
        className="
          text-sm
          text-muted-foreground
        "
      >
        {title}
      </p>

      <h4
        className="
          mt-2

          text-lg
          font-bold
        "
      >
        {value}
      </h4>

    </div>

  );

}

function ChecklistItem({
  checked,
  title,
}: {
  checked: boolean;
  title: string;
}) {

  return (

    <div
      className="
        flex
        items-center
        justify-between

        rounded-xl

        bg-card

        p-3
      "
    >

      <span
        className="
          text-sm
          font-medium
        "
      >
        {title}
      </span>

      <div
        className={`
          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-full

          ${
            checked
              ? "bg-[#ECFDF5] text-[#0F8F65]"
              : "bg-secondary text-muted-foreground"
          }
        `}
      >
        ✓
      </div>

    </div>

  );

}

export default AttendanceDialog;