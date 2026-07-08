import {
  ArrowLeftRight,
  Building2,
  CalendarDays,
  Clock3,
  DollarSign,
  GraduationCap,
  Wallet,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type { AdminSession } from "@/types/admin-session";

interface RefundDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onRefund: (
    session: AdminSession
  ) => void;
}

const RefundDialog = ({
  open,
  session,
  onClose,
  onRefund,
}: RefundDialogProps) => {

  const [
    refundType,
    setRefundType,
  ] = useState<
    "full" | "partial"
  >("full");

  const [
    refundAmount,
    setRefundAmount,
  ] = useState("");

  const [
    refundMethod,
    setRefundMethod,
  ] = useState(
    "Original Payment Method"
  );

  useEffect(() => {

    if (!session) return;

    setRefundAmount(
      String(session.amount)
    );

    setRefundType("full");

    setRefundMethod(
      "Original Payment Method"
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
          max-w-6xl
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

              <Wallet
                size={18}
              />

              Refund Manager

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Process Refund
            </h2>

            <p
              className="
                mt-3

                text-green-100
              "
            >
              Refund student payments,
              manage payment records and
              keep financial history synced.
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

          {/* Refund Summary */}

          <div
            className="
              rounded-[32px]

              border
              border-green-100

              bg-green-50

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
              Refund Summary
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
                value={
                  session.programTitle
                }
              />

              <InfoCard
                icon={
                  <DollarSign
                    size={18}
                  />
                }
                title="Paid Amount"
                value={`₹${session.amount}`}
              />

            </div>

          </div>
                    {/* Refund Configuration */}

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
                Refund Details
              </h3>

              {/* Refund Type */}

              <div>

                <label
                  className="
                    mb-3

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Refund Type
                </label>

                <div
                  className="
                    grid
                    grid-cols-2

                    gap-4
                  "
                >

                  <button
                    type="button"
                    onClick={()=>{
                      setRefundType("full");

                      setRefundAmount(
                        String(session.amount)
                      );
                    }}
                    className={`
                      rounded-2xl

                      border

                      p-5

                      transition-all

                      ${
                        refundType==="full"
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-slate-200 hover:border-green-300"
                      }
                    `}
                  >

                    <Wallet
                      size={24}
                      className="mx-auto"
                    />

                    <h4
                      className="
                        mt-3

                        font-semibold
                      "
                    >
                      Full Refund
                    </h4>

                    <p
                      className="
                        mt-1

                        text-xs
                        text-slate-500
                      "
                    >
                      Refund complete payment
                    </p>

                  </button>

                  <button
                    type="button"
                    onClick={()=>{
                      setRefundType("partial");
                    }}
                    className={`
                      rounded-2xl

                      border

                      p-5

                      transition-all

                      ${
                        refundType==="partial"
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-slate-200 hover:border-green-300"
                      }
                    `}
                  >

                    <ArrowLeftRight
                      size={24}
                      className="mx-auto"
                    />

                    <h4
                      className="
                        mt-3

                        font-semibold
                      "
                    >
                      Partial Refund
                    </h4>

                    <p
                      className="
                        mt-1

                        text-xs
                        text-slate-500
                      "
                    >
                      Refund selected amount
                    </p>

                  </button>

                </div>

              </div>

              {/* Refund Amount */}

              <div className="mt-8">

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

                <div className="relative">

                  <span
                    className="
                      absolute

                      left-4
                      top-1/2

                      -translate-y-1/2

                      text-slate-500
                    "
                  >
                    ₹
                  </span>

                  <input
                    type="number"
                    value={refundAmount}
                    onChange={(e)=>
                      setRefundAmount(
                        e.target.value
                      )
                    }
                    disabled={
                      refundType==="full"
                    }
                    className="
                      h-12
                      w-full

                      rounded-2xl

                      border
                      border-slate-200

                      pl-10
                      pr-4

                      outline-none

                      disabled:bg-slate-100

                      focus:border-green-500
                      focus:ring-2
                      focus:ring-green-100
                    "
                  />

                </div>

              </div>

              {/* Refund Method */}

              <div className="mt-8">

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
                  value={refundMethod}
                  onChange={(e)=>
                    setRefundMethod(
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

                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-100
                  "
                >

                  <option>
                    Original Payment Method
                  </option>

                  <option>
                    Bank Transfer
                  </option>

                  <option>
                    Wallet Credit
                  </option>

                  <option>
                    UPI Refund
                  </option>

                  <option>
                    Manual Adjustment
                  </option>

                </select>

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
                Refund Preview
              </h3>

              <div className="space-y-5">

                <SummaryCard
                  title="Original Payment"
                  value={`₹${session.amount}`}
                />

                <SummaryCard
                  title="Refund Type"
                  value={
                    refundType==="full"
                      ? "Full Refund"
                      : "Partial Refund"
                  }
                />

                <SummaryCard
                  title="Refund Amount"
                  value={`₹${refundAmount}`}
                />

                <SummaryCard
                  title="Refund Method"
                  value={refundMethod}
                />

              </div>

              {/* Calculation */}

              <div
                className="
                  mt-8

                  rounded-3xl

                  bg-green-50

                  p-6
                "
              >

                <h4
                  className="
                    font-semibold

                    text-green-700
                  "
                >
                  Refund Calculation
                </h4>

                <div
                  className="
                    mt-5

                    space-y-4
                  "
                >

                  <div
                    className="
                      flex
                      justify-between
                    "
                  >
                    <span>
                      Original Payment
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

                    <strong
                      className="
                        text-green-700
                      "
                    >
                      ₹{refundAmount}
                    </strong>

                  </div>

                  <div
                    className="
                      border-t

                      pt-4

                      flex
                      justify-between
                    "
                  >

                    <span
                      className="font-semibold"
                    >
                      Remaining

                    </span>

                    <strong
                      className="
                        text-blue-600
                      "
                    >
                      ₹
                      {Math.max(
                        session.amount -
                        Number(refundAmount || 0),
                        0
                      )}

                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </div>
                    {/* Financial Information */}

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
                Refund Information
              </h3>

              {/* Refund Reason */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Refund Reason
                </label>

                <select
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
                >

                  <option>
                    Student Cancellation
                  </option>

                  <option>
                    Mentor Cancellation
                  </option>

                  <option>
                    Technical Issue
                  </option>

                  <option>
                    Duplicate Payment
                  </option>

                  <option>
                    Session Not Conducted
                  </option>

                  <option>
                    Admin Decision
                  </option>

                </select>

              </div>

              {/* Payment Gateway */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Payment Gateway
                </label>

                <select
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
                >

                  <option>
                    Razorpay
                  </option>

                  <option>
                    Stripe
                  </option>

                  <option>
                    PayPal
                  </option>

                  <option>
                    Cashfree
                  </option>

                </select>

              </div>

              {/* Transaction */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Transaction ID
                </label>

                <input
                  placeholder="TXN-98453453453"
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

              </div>

              {/* Refund Status */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Refund Status
                </label>

                <select
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
                >

                  <option>
                    Requested
                  </option>

                  <option>
                    Processing
                  </option>

                  <option>
                    Completed
                  </option>

                  <option>
                    Failed
                  </option>

                </select>

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
                Admin Remarks
              </h3>

              {/* Notes */}

              <textarea
                rows={8}
                placeholder="
Refund processing notes...

• Student requested refund
• Mentor approved
• Payment verified
• Finance approval
• Additional remarks..."
                className="
                  w-full

                  resize-none

                  rounded-2xl

                  border
                  border-slate-200

                  p-4

                  outline-none

                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                "
              />

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
                  Refund Checklist
                </h4>

                <div className="space-y-3">

                  <ChecklistItem
                    checked
                    title="Payment Verified"
                  />

                  <ChecklistItem
                    checked
                    title="Student Eligible"
                  />

                  <ChecklistItem
                    checked={
                      refundType ===
                      "full"
                    }
                    title="Refund Type Selected"
                  />

                  <ChecklistItem
                    checked={
                      Number(
                        refundAmount
                      ) > 0
                    }
                    title="Refund Amount Valid"
                  />

                  <ChecklistItem
                    checked
                    title="Gateway Selected"
                  />

                </div>

              </div>

              {/* Finance Note */}

              <div
                className="
                  mt-6

                  rounded-2xl

                  border
                  border-green-200

                  bg-green-50

                  p-5
                "
              >

                <h4
                  className="
                    font-semibold

                    text-green-700
                  "
                >
                  Finance Preview
                </h4>

                <p
                  className="
                    mt-2

                    text-sm

                    leading-6

                    text-green-600
                  "
                >
                  After confirmation this refund
                  will be queued for payment
                  processing.

                  Backend integration with
                  Razorpay / Stripe / Firebase
                  can directly use these values
                  without changing the UI.
                </p>

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
                onClick={() => {

                  const amount =
                    Number(refundAmount);

                  if (
                    amount <= 0
                  ) {
                    alert(
                      "Refund amount must be greater than zero."
                    );
                    return;
                  }

                  if (
                    amount >
                    session.amount
                  ) {
                    alert(
                      "Refund amount cannot exceed the original payment."
                    );
                    return;
                  }

                  onRefund({
                    ...session,

                    refundAmount: amount,

                    refundStatus:
                      "processed",

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
                Process Refund
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

/* -------------------------------- */
/* Helper Components */
/* -------------------------------- */

function InfoCard({
  icon,
  title,
  value,
}:{
  icon: React.ReactNode;
  title:string;
  value:string;
}){

  return(

    <div
      className="
        rounded-2xl

        bg-white

        p-5
      "
    >

      <div className="text-green-600">
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

function SummaryCard({
  title,
  value,
}:{
  title:string;
  value:string;
}){

  return(

    <div
      className="
        rounded-2xl

        bg-slate-50

        p-5
      "
    >

      <p
        className="
          text-sm
          text-slate-500
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
}:{
  checked:boolean;
  title:string;
}){

  return(

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

export default RefundDialog;