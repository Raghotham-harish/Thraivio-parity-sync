import {
  CalendarDays,
  Clock3,
  User,
  GraduationCap,
  Building2,
  CheckCircle2,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type { AdminSession } from "@/types/admin-session";

interface CompleteSessionDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onComplete: (
    session: AdminSession
  ) => void;
}

const CompleteSessionDialog = ({
  open,
  session,
  onClose,
  onComplete,
}: CompleteSessionDialogProps) => {

  const [
    completionNotes,
    setCompletionNotes,
  ] = useState("");

  const [
    recordingUrl,
    setRecordingUrl,
  ] = useState("");

  const [
    attendanceConfirmed,
    setAttendanceConfirmed,
  ] = useState(true);

  const [
    issueCertificate,
    setIssueCertificate,
  ] = useState(false);

  const [
    rating,
    setRating,
  ] = useState(5);

  useEffect(() => {

    if (!session) return;

    setCompletionNotes(
      session.adminNotes ?? ""
    );

    setRecordingUrl(
      session.recordingUrl ?? ""
    );

    setAttendanceConfirmed(
      session.attendance !==
        "absent"
    );

    setIssueCertificate(
      session.certificateIssued
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
          max-w-5xl
          flex-col

          overflow-hidden

          rounded-[36px]

          bg-white
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            bg-gradient-to-r
            from-emerald-600
            via-green-600
            to-teal-600

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

                bg-white/20

                px-4
                py-2

                text-sm
              "
            >
              <CheckCircle2
                size={18}
              />

              Complete Session
            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Mark Session Completed
            </h2>

            <p
              className="
                mt-3

                text-green-100
              "
            >
              Verify attendance,
              upload recording,
              add completion notes
              and issue certificate.
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

              bg-white/20

              transition

              hover:bg-white/30
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

          {/* Session Summary */}

          <div
            className="
              rounded-[32px]

              border
              border-slate-200

              bg-slate-50

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

                  rounded-3xl

                  bg-white

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

                    rounded-3xl

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
                    {
                      session.mentorName
                    }
                  </h4>

                  <p
                    className="
                      mt-1

                      text-slate-500
                    "
                  >
                    {
                      session.mentorRole
                    }
                  </p>

                  <div
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2

                      text-sm
                      text-slate-500
                    "
                  >
                    <Building2
                      size={15}
                    />

                    {
                      session.mentorCompany
                    }

                  </div>

                </div>

              </div>

              {/* Student */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-3xl

                  bg-white

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

                    rounded-3xl

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
                    {
                      session.studentName
                    }
                  </h4>

                  <p
                    className="
                      mt-1

                      text-slate-500
                    "
                  >
                    {
                      session.studentEmail
                    }
                  </p>

                </div>

              </div>

            </div>
                      {/* Session Information */}

          <div
            className="
              grid
              gap-6

              xl:grid-cols-3
            "
          >
            {/* Left */}

            <div className="xl:col-span-2">

              <div
                className="
                  rounded-[32px]

                  border
                  border-slate-200

                  bg-white

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
                  Session Information
                </h3>

                <div
                  className="
                    grid

                    gap-5

                    md:grid-cols-2
                  "
                >

                  {/* Date */}

                  <InfoCard
                    icon={
                      <CalendarDays
                        size={18}
                      />
                    }
                    title="Session Date"
                    value={session.date}
                  />

                  {/* Time */}

                  <InfoCard
                    icon={
                      <Clock3
                        size={18}
                      />
                    }
                    title="Session Time"
                    value={session.time}
                  />

                  {/* Duration */}

                  <InfoCard
                    icon={
                      <Clock3
                        size={18}
                      />
                    }
                    title="Duration"
                    value={session.duration}
                  />

                  {/* Platform */}

                  <InfoCard
                    icon={
                      <User
                        size={18}
                      />
                    }
                    title="Meeting Platform"
                    value={
                      session.meetingPlatform
                    }
                  />

                  {/* Program */}

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

                  {/* Booking */}

                  <InfoCard
                    icon={
                      <CheckCircle2
                        size={18}
                      />
                    }
                    title="Booking Reference"
                    value={
                      session.bookingReference
                    }
                  />

                </div>

              </div>

              {/* Recording */}

              <div
                className="
                  mt-6

                  rounded-[32px]

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
                  Session Recording
                </h3>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-medium
                  "
                >
                  Recording URL
                </label>

                <input
                  type="text"
                  value={
                    recordingUrl
                  }
                  onChange={(e) =>
                    setRecordingUrl(
                      e.target.value
                    )
                  }
                  placeholder="https://..."
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-100
                  "
                />

                <p
                  className="
                    mt-3

                    text-sm
                    text-slate-500
                  "
                >
                  Upload Google Drive,
                  Zoom Cloud,
                  Loom or AWS recording
                  link after session
                  completion.
                </p>

              </div>

            </div>

            {/* Right Sidebar */}

            <div>

              <div
                className="
                  sticky
                  top-0

                  rounded-[32px]

                  border
                  border-slate-200

                  bg-slate-50

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Completion Checklist
                </h3>

                <div
                  className="
                    mt-6

                    space-y-4
                  "
                >

                  <ChecklistItem
                    checked={
                      attendanceConfirmed
                    }
                    title="Attendance Verified"
                  />

                  <ChecklistItem
                    checked={
                      recordingUrl.length >
                      0
                    }
                    title="Recording Uploaded"
                  />

                  <ChecklistItem
                    checked={
                      completionNotes.length >
                      10
                    }
                    title="Completion Notes"
                  />

                  <ChecklistItem
                    checked={
                      issueCertificate
                    }
                    title="Certificate Ready"
                  />

                </div>

                <div
                  className="
                    mt-8

                    rounded-2xl

                    bg-green-100

                    p-5
                  "
                >
                  <p
                    className="
                      text-sm
                      text-green-700
                    "
                  >
                    After completion the
                    session status will be
                    changed to
                    <strong>
                      {" "}
                      Completed
                    </strong>
                    , attendance will be
                    locked and certificate
                    workflow can begin.
                  </p>
                </div>

              </div>

            </div>

          </div>
          </div>
                    {/* Completion Form */}

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
                rounded-[32px]

                border
                border-slate-200

                bg-white

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

              {/* Attendance */}

              <div className="mb-6">

                <label
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-slate-200

                    p-4

                    cursor-pointer
                  "
                >
                  <div>

                    <h4 className="font-semibold">
                      Attendance Confirmed
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm
                        text-slate-500
                      "
                    >
                      Student successfully
                      attended this session.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={
                      attendanceConfirmed
                    }
                    onChange={(e) =>
                      setAttendanceConfirmed(
                        e.target.checked
                      )
                    }
                    className="
                      h-5
                      w-5
                    "
                  />

                </label>

              </div>

              {/* Certificate */}

              <div className="mb-6">

                <label
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-slate-200

                    p-4

                    cursor-pointer
                  "
                >
                  <div>

                    <h4 className="font-semibold">
                      Issue Certificate
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm
                        text-slate-500
                      "
                    >
                      Automatically generate
                      course completion
                      certificate.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={
                      issueCertificate
                    }
                    onChange={(e) =>
                      setIssueCertificate(
                        e.target.checked
                      )
                    }
                    className="
                      h-5
                      w-5
                    "
                  />

                </label>

              </div>

              {/* Rating */}

              <div>

                <label
                  className="
                    mb-3

                    block

                    font-medium
                  "
                >
                  Session Rating
                </label>

                <div
                  className="
                    flex

                    gap-3
                  "
                >
                  {[1,2,3,4,5].map(
                    (star)=>(
                      <button
                        key={star}
                        type="button"
                        onClick={()=>
                          setRating(star)
                        }
                        className={`
                          h-12
                          w-12

                          rounded-2xl

                          font-bold

                          transition

                          ${
                            rating>=star
                            ? "bg-yellow-400 text-white"
                            : "bg-slate-100 hover:bg-slate-200"
                          }
                        `}
                      >
                        {star}
                      </button>
                    )
                  )}
                </div>

              </div>

            </div>

            {/* Right */}

            <div
              className="
                rounded-[32px]

                border
                border-slate-200

                bg-white

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
                Completion Notes
              </h3>

              <textarea
                rows={7}
                value={
                  completionNotes
                }
                onChange={(e)=>
                  setCompletionNotes(
                    e.target.value
                  )
                }
                placeholder="
                Add session summary,
                mentor remarks,
                student performance,
                next action plan..."
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  p-4

                  resize-none

                  outline-none

                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                "
              />

              <div
                className="
                  mt-6
                "
              >
                <label
                  className="
                    mb-3

                    block

                    font-medium
                  "
                >
                  Student Feedback
                </label>

                <textarea
                  rows={4}
                  placeholder="
                  Feedback received
                  from student..."
                  className="
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    p-4

                    resize-none

                    outline-none

                    focus:border-green-500
                  "
                />
              </div>

              <div
                className="
                  mt-6
                "
              >
                <label
                  className="
                    mb-3

                    block

                    font-medium
                  "
                >
                  Mentor Feedback
                </label>

                <textarea
                  rows={4}
                  placeholder="
                  Mentor's remarks
                  about session..."
                  className="
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    p-4

                    resize-none

                    outline-none

                    focus:border-green-500
                  "
                />
              </div>

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

                  hover:bg-slate-100

                  transition
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {

                  if (!completionNotes.trim()) {
                    alert(
                      "Please add completion notes."
                    );

                    return;
                  }

                  onComplete({
                    ...session,

                    status: "completed",

                    attendance:
                      attendanceConfirmed
                        ? "completed"
                        : "absent",

                    certificateIssued:
                      issueCertificate,

                    recordingUrl,

                    adminNotes:
                      completionNotes,

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
                  from-emerald-600
                  via-green-600
                  to-teal-600

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
                Mark Session Completed
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* -------------------- */
/* Helper Components */
/* -------------------- */

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

        bg-slate-50

        p-5
      "
    >
      <div className="text-emerald-600">
        {icon}
      </div>

      <p
        className="
          mt-3

          text-sm
          text-slate-500
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

        rounded-2xl

        bg-white

        p-4
      "
    >
      <span className="font-medium">
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
              ? "bg-green-100 text-green-600"
              : "bg-slate-100 text-slate-400"
          }
        `}
      >
        <CheckCircle2 size={18} />
      </div>
    </div>
  );
}

export default CompleteSessionDialog;