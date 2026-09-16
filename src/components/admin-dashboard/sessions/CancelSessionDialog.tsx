import {
  AlertTriangle,
  Building2,
  CalendarDays,
  Clock3,
  GraduationCap,
  User,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type { AdminSession } from "@/types/admin-session";

interface CancelSessionDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onCancel: (
    session: AdminSession
  ) => void;
}

const CancelSessionDialog = ({
  open,
  session,
  onClose,
  onCancel,
}: CancelSessionDialogProps) => {

  const [
    cancelReason,
    setCancelReason,
  ] = useState("");

  const [
    cancelledBy,
    setCancelledBy,
  ] = useState<
    "admin" | "mentor" | "student"
  >("admin");

  const [
    refundAmount,
    setRefundAmount,
  ] = useState("");

  const [
    refundEligible,
    setRefundEligible,
  ] = useState(true);

  const [
    notifyMentor,
    setNotifyMentor,
  ] = useState(true);

  const [
    notifyStudent,
    setNotifyStudent,
  ] = useState(true);

  const [
    releaseSlot,
    setReleaseSlot,
  ] = useState(true);

  const [
    adminNotes,
    setAdminNotes,
  ] = useState("");

  useEffect(() => {

    if (!session) return;

    setRefundAmount(
      String(session.amount)
    );

    setAdminNotes(
      session.adminNotes ?? ""
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

            
            bg-destructive
            
            

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
              <AlertTriangle
                size={18}
              />

              Cancel Session

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Cancel Scheduled Session
            </h2>

            <p
              className="
                mt-3

                text-red-100
              "
            >
              Cancel this session,
              process refund,
              notify participants
              and release mentor slot.
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
              rounded-2xl

              border
              border-red-100

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
                    {
                      session.mentorName
                    }
                  </h4>

                  <p
                    className="
                      mt-1

                      text-muted-foreground
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
                      text-muted-foreground
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
                    {
                      session.studentName
                    }
                  </h4>

                  <p
                    className="
                      mt-1

                      text-muted-foreground
                    "
                  >
                    {
                      session.studentEmail
                    }
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
                title="Amount"
                value={`₹${session.amount}`}
              />

            </div>

          </div>
                    {/* Cancellation Form */}

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
                Cancellation Details
              </h3>

              {/* Cancelled By */}

              <div className="mb-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Cancelled By
                </label>

                <select
                  value={cancelledBy}
                  onChange={(e)=>
                    setCancelledBy(
                      e.target.value as
                      "admin" |
                      "mentor" |
                      "student"
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

                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
                >
                  <option value="admin">
                    Admin
                  </option>

                  <option value="mentor">
                    Mentor
                  </option>

                  <option value="student">
                    Student
                  </option>

                </select>

              </div>

              {/* Reason */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Cancellation Reason
                </label>

                <textarea
                  rows={7}
                  value={cancelReason}
                  onChange={(e)=>
                    setCancelReason(
                      e.target.value
                    )
                  }
                  placeholder="
                  Enter cancellation reason,
                  policy notes,
                  emergency,
                  scheduling conflict,
                  technical issue..."
                  className="
                    w-full

                    resize-none

                    rounded-2xl

                    border
                    border-border

                    p-4

                    outline-none

                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
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
                Refund Information
              </h3>

              {/* Eligible */}

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
                    Refund Eligible
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      text-muted-foreground
                    "
                  >
                    Student is eligible
                    for refund.
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={
                    refundEligible
                  }
                  onChange={(e)=>
                    setRefundEligible(
                      e.target.checked
                    )
                  }
                  className="
                    h-5
                    w-5
                  "
                />

              </label>

              {/* Refund Amount */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Refund Amount
                </label>

                <input
                  type="number"
                  disabled={
                    !refundEligible
                  }
                  value={
                    refundAmount
                  }
                  onChange={(e)=>
                    setRefundAmount(
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

                    disabled:bg-secondary

                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
                />

              </div>

              {/* Refund Method */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Refund Method
                </label>

                <select
                  disabled={
                    !refundEligible
                  }
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-border

                    px-4

                    outline-none

                    disabled:bg-secondary

                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
                >
                  <option>
                    Original Payment Method
                  </option>

                  <option>
                    Wallet Credit
                  </option>

                  <option>
                    Bank Transfer
                  </option>

                  <option>
                    Manual Refund
                  </option>

                </select>

              </div>

              {/* Summary */}

              <div
                className="
                  mt-8

                  rounded-2xl

                  bg-red-50

                  p-5
                "
              >
                <h4
                  className="
                    font-semibold

                    text-[#BA1A1A]
                  "
                >
                  Refund Summary
                </h4>

                <div
                  className="
                    mt-4

                    space-y-3

                    text-sm
                  "
                >

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >
                    <span>
                      Original Amount
                    </span>

                    <strong>
                      ₹{session.amount}
                    </strong>

                  </div>

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >
                    <span>
                      Refund
                    </span>

                    <strong>
                      {refundEligible
                        ? `₹${refundAmount}`
                        : "₹0"}
                    </strong>

                  </div>

                  <div
                    className="
                      border-t

                      pt-3

                      flex
                      justify-between
                    "
                  >
                    <span>
                      Status
                    </span>

                    <strong
                      className="
                        text-red-600
                      "
                    >
                      {
                        refundEligible
                          ? "Refund Pending"
                          : "Not Eligible"
                      }
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </div>
                  {/* Notification & Admin Section */}

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

                p-6"
              >
                <h3
                  className="
                    mb-6

                    text-xl
                    font-bold
                  "
                >
                  Notifications
                </h3>

                {/* Notify Student */}

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
                      className="font-semibold"
                    >
                      Notify Student
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm
                        text-muted-foreground
                      "
                    >
                      Send cancellation email
                      and dashboard notification.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={notifyStudent}
                    onChange={(e)=>
                      setNotifyStudent(
                        e.target.checked
                      )
                    }
                    className="h-5 w-5"
                  />

                </label>

                {/* Notify Mentor */}

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
                      className="font-semibold"
                    >
                      Notify Mentor
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm
                        text-muted-foreground
                      "
                    >
                      Send cancellation email
                      to mentor.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={notifyMentor}
                    onChange={(e)=>
                      setNotifyMentor(
                        e.target.checked
                      )
                    }
                    className="h-5 w-5"
                  />

                </label>

                {/* Release Slot */}

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
                      className="font-semibold"
                    >
                      Release Mentor Slot
                    </h4>

                    <p
                      className="
                        mt-1

                        text-sm
                        text-muted-foreground
                      "
                    >
                      Make this slot available
                      for future bookings.
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={releaseSlot}
                    onChange={(e)=>
                      setReleaseSlot(
                        e.target.checked
                      )
                    }
                    className="h-5 w-5"
                  />

                </label>

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
                  Admin Notes
                </h3>

                <textarea
                  rows={7}
                  value={adminNotes}
                  onChange={(e)=>
                    setAdminNotes(
                      e.target.value
                    )
                  }
                  placeholder="
                  Internal cancellation notes,
                  escalation details,
                  refund remarks,
                  follow-up actions..."
                  className="
                    w-full

                    resize-none

                    rounded-2xl

                    border
                    border-border

                    p-4

                    outline-none

                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
                />

                {/* Warning */}

                <div
                  className="
                    mt-6

                    rounded-2xl

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
                      gap-3
                    "
                  >
                    <AlertTriangle
                      size={22}
                      className="
                        mt-0.5

                        text-red-600
                      "
                    />

                    <div>

                      <h4
                        className="
                          font-semibold

                          text-[#BA1A1A]
                        "
                      >
                        Warning
                      </h4>

                      <p
                        className="
                          mt-2

                          text-sm

                          text-red-600
                        "
                      >
                        Cancelling this session
                        will immediately update
                        the session status,
                        trigger notifications,
                        optionally process the
                        refund and release the
                        mentor schedule.

                        This action should only
                        be performed after
                        verifying the
                        cancellation policy.
                      </p>

                    </div>

                  </div>

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
                    Cancellation Checklist
                  </h4>

                  <div
                    className="
                      space-y-3

                      text-sm
                    "
                  >
                    <ChecklistItem
                      checked={
                        cancelReason.trim()
                          .length > 5
                      }
                      title="Reason Added"
                    />

                    <ChecklistItem
                      checked={
                        refundEligible
                      }
                      title="Refund Reviewed"
                    />

                    <ChecklistItem
                      checked={
                        notifyStudent
                      }
                      title="Student Notification"
                    />

                    <ChecklistItem
                      checked={
                        notifyMentor
                      }
                      title="Mentor Notification"
                    />

                    <ChecklistItem
                      checked={
                        releaseSlot
                      }
                      title="Slot Released"
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
                Keep Session
              </button>

              <button
                onClick={() => {

                  if (
                    cancelReason.trim()
                      .length < 10
                  ) {

                    alert(
                      "Please enter a valid cancellation reason."
                    );

                    return;
                  }

                  onCancel({

                    ...session,

                    status:
                      "cancelled",

                    cancelReason,

                    cancelledBy,

                    refundAmount:
                      refundEligible
                        ? Number(
                            refundAmount
                          )
                        : 0,

                    refundStatus:
                      refundEligible
                        ? "requested"
                        : "none",

                    adminNotes,

                    updatedAt:
                      new Date()
                        .toISOString()
                        .split("T")[0],

                  });

                  onClose();

                }}
                className="
                  rounded-2xl

                  
                  bg-destructive
                  
                  

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
                Cancel Session
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* ------------------------- */
/* Helper Components */
/* ------------------------- */

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
      <div className="text-red-600">
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

export default CancelSessionDialog;