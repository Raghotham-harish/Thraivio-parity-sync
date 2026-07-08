import {
  AlertTriangle,
  Building2,
  CalendarDays,
  Clock3,
  GraduationCap,
  Trash2,
  User,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type { AdminSession } from "@/types/admin-session";

interface DeleteSessionDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onDelete: (
    sessionId: string
  ) => void;
}

const DeleteSessionDialog = ({
  open,
  session,
  onClose,
  onDelete,
}: DeleteSessionDialogProps) => {

  const [
    confirmText,
    setConfirmText,
  ] = useState("");

  const [
    deleteNotes,
    setDeleteNotes,
  ] = useState("");

  useEffect(() => {

    if (!session) return;

    setConfirmText("");

    setDeleteNotes("");

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
            from-red-700
            via-red-600
            to-rose-700

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

              <Trash2 size={18} />

              Permanent Delete

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Delete Session
            </h2>

            <p
              className="
                mt-3

                text-red-100
              "
            >
              This action permanently removes
              the session from the system.
              It cannot be undone.
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
              border-red-200

              bg-red-50

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
                  src={session.mentorImage}
                  alt={session.mentorName}
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
                    {session.mentorName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-slate-500
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
                      text-slate-500
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

                  rounded-3xl

                  bg-white

                  p-5
                "
              >

                <img
                  src={session.studentImage}
                  alt={session.studentName}
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
                    {session.studentName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-slate-500
                    "
                  >
                    {session.studentEmail}
                  </p>

                </div>

              </div>

            </div>

            {/* Session Details */}

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
                value={session.programTitle}
              />

              <InfoCard
                icon={
                  <User
                    size={18}
                  />
                }
                title="Booking ID"
                value={session.bookingReference}
              />

            </div>

          </div>
                    {/* Delete Confirmation */}

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
                border-red-200

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
                Permanent Delete Warning
              </h3>

              <div
                className="
                  rounded-3xl

                  border
                  border-red-200

                  bg-red-50

                  p-5
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <AlertTriangle
                    size={26}
                    className="
                      mt-1

                      text-red-600
                    "
                  />

                  <div>

                    <h4
                      className="
                        font-semibold

                        text-red-700
                      "
                    >
                      This action cannot be undone
                    </h4>

                    <p
                      className="
                        mt-3

                        text-sm

                        leading-6

                        text-red-600
                      "
                    >
                      Permanently deleting this
                      session will remove all
                      related booking history,
                      mentor schedule records,
                      attendance logs,
                      notifications and future
                      references from the system.

                      This action should only be
                      performed when absolutely
                      necessary.
                    </p>

                  </div>

                </div>

              </div>

              {/* Impact */}

              <div className="mt-6">

                <h4
                  className="
                    mb-4

                    font-semibold
                  "
                >
                  Delete Impact
                </h4>

                <div className="space-y-3">

                  <ImpactItem text="Booking history will be permanently removed." />

                  <ImpactItem text="Mentor schedule entry will be deleted." />

                  <ImpactItem text="Student session history will be updated." />

                  <ImpactItem text="Payment history link may become unavailable." />

                  <ImpactItem text="Recording & certificate mapping will be removed." />

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
                Confirmation
              </h3>

              {/* Delete Notes */}

              <label
                className="
                  mb-2

                  block

                  text-sm
                  font-semibold
                "
              >
                Delete Notes
              </label>

              <textarea
                rows={6}
                value={deleteNotes}
                onChange={(e)=>
                  setDeleteNotes(
                    e.target.value
                  )
                }
                placeholder="
                Why are you deleting
                this session?

                Example:
                Duplicate booking,
                Invalid payment,
                Test data..."
                className="
                  w-full

                  resize-none

                  rounded-2xl

                  border
                  border-slate-200

                  p-4

                  outline-none

                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />

              {/* Confirmation */}

              <div className="mt-8">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Type
                  <span
                    className="
                      mx-2

                      rounded

                      bg-red-100

                      px-2
                      py-1

                      font-bold

                      text-red-700
                    "
                  >
                    DELETE
                  </span>

                  to continue
                </label>

                <input
                  type="text"
                  value={confirmText}
                  onChange={(e)=>
                    setConfirmText(
                      e.target.value
                    )
                  }
                  placeholder="DELETE"
                  className="
                    h-12

                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
                />

              </div>

              {/* Checklist */}

              <div
                className="
                  mt-8

                  rounded-3xl

                  bg-slate-50

                  p-5
                "
              >

                <h4
                  className="
                    mb-4

                    font-semibold
                  "
                >
                  Delete Checklist
                </h4>

                <div className="space-y-3">

                  <ChecklistItem
                    checked={
                      deleteNotes.trim().length >
                      10
                    }
                    title="Delete reason added"
                  />

                  <ChecklistItem
                    checked={
                      confirmText ===
                      "DELETE"
                    }
                    title="Confirmation verified"
                  />

                  <ChecklistItem
                    checked={true}
                    title="Session identified"
                  />

                  <ChecklistItem
                    checked={true}
                    title="Admin permission granted"
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
                disabled={
                  confirmText !== "DELETE" ||
                  deleteNotes.trim().length <
                    10
                }
                onClick={() => {
                  onDelete(session.id);

                  onClose();
                }}
                className="
                  rounded-2xl

                  bg-gradient-to-r
                  from-red-700
                  via-red-600
                  to-rose-700

                  px-10
                  py-3.5

                  font-semibold

                  text-white

                  shadow-lg

                  transition-all

                  hover:scale-[1.02]
                  hover:shadow-xl

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  disabled:hover:scale-100
                "
              >
                Permanently Delete
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

/* ---------------------------- */
/* Helper Components */
/* ---------------------------- */

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

        bg-white

        p-5
      "
    >

      <div className="text-red-600">
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

function ImpactItem({
  text,
}: {
  text: string;
}) {

  return (

    <div
      className="
        flex
        items-start
        gap-3

        rounded-2xl

        bg-slate-50

        p-4
      "
    >

      <div
        className="
          mt-1

          h-2.5
          w-2.5

          rounded-full

          bg-red-600
        "
      />

      <p
        className="
          text-sm
          leading-6

          text-slate-700
        "
      >
        {text}
      </p>

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

        bg-white

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
              ? "bg-green-100 text-green-600"
              : "bg-slate-100 text-slate-400"
          }
        `}
      >
        ✓
      </div>

    </div>

  );

}

export default DeleteSessionDialog;