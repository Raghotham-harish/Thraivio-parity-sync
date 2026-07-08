import {
  Building2,
  CreditCard,
  Download,
  Receipt,
  X,
  BadgeCheck,
} from "lucide-react";

import type { Payment } from "@/types/payment";

interface PaymentDetailsModalProps {
  open: boolean;

  payment: Payment | null;

  onClose: () => void;

  onInvoice: (
    payment: Payment
  ) => void;
}

const PaymentDetailsModal = ({
  open,
  payment,
  onClose,
  onInvoice,
}: PaymentDetailsModalProps) => {
  if (!open || !payment)
    return null;

  const statusStyles = {
    paid:
      "bg-green-100 text-green-700",

    pending:
      "bg-amber-100 text-amber-700",

    failed:
      "bg-red-100 text-red-700",

    refunded:
      "bg-blue-100 text-blue-700",
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]

        bg-black/50
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-5xl

          rounded-[32px]

          overflow-hidden

          max-h-[90vh]

          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            sticky
            top-0
            z-10

            bg-white

            border-b

            px-8
            py-6

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
              Payment Details
            </h2>

            <p
              className="
                text-slate-500
                mt-1
              "
            >
              Complete transaction
              information
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              h-11
              w-11

              rounded-xl

              border

              flex
              items-center
              justify-center

              hover:bg-slate-100

              transition
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Scroll Area */}

        <div
          className="
            overflow-y-auto

            px-8
            py-8
          "
        >
          {/* Top Card */}

          <div
            className="
              bg-gradient-to-r
              from-emerald-600
              to-teal-600

              rounded-[32px]

              p-8

              text-white
            "
          >
            <div
              className="
                flex
                flex-col
                lg:flex-row

                lg:items-center
                lg:justify-between

                gap-8
              "
            >
              <div>
                <p
                  className="
                    text-emerald-100
                  "
                >
                  Transaction Amount
                </p>

                <h1
                  className="
                    text-5xl
                    font-bold

                    mt-2
                  "
                >
                  {payment.currency}
                  {payment.amount}
                </h1>

                <p
                  className="
                    mt-3
                    text-emerald-100
                  "
                >
                  {payment.title}
                </p>
              </div>

              <span
                className={`
                  px-5
                  py-3

                  rounded-full

                  text-sm
                  font-semibold

                  bg-white

                  ${statusStyles[payment.status]}
                `}
              >
                {payment.status}
              </span>
            </div>
          </div>

          {/* Mentor + Payment */}

          <div
            className="
              grid
              lg:grid-cols-2

              gap-6

              mt-8
            "
          >
            {/* Mentor */}

            <div
              className="
                bg-slate-50

                rounded-[28px]

                p-6
              "
            >
              <h3
                className="
                  text-xl
                  font-bold

                  mb-5
                "
              >
                Mentor Information
              </h3>

              <div
                className="
                  flex
                  gap-4
                "
              >
                <img
                  src={
                    payment.mentorImage
                  }
                  alt={
                    payment.mentorName
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
                      payment.mentorName
                    }
                  </h4>

                  <p
                    className="
                      text-slate-500
                    "
                  >
                    {
                      payment.mentorRole
                    }
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      mt-2
                    "
                  >
                    <Building2
                      size={16}
                    />

                    {
                      payment.mentorCompany
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}

            <div
              className="
                bg-slate-50

                rounded-[28px]

                p-6
              "
            >
              <h3
                className="
                  text-xl
                  font-bold

                  mb-5
                "
              >
                Payment Summary
              </h3>

              <div
                className="
                  space-y-4
                "
              >
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Category
                  </span>

                  <span className="font-semibold">
                    {
                      payment.category
                    }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Method
                  </span>

                  <span className="font-semibold">
                    {
                      payment.paymentMethod
                    }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Date
                  </span>

                  <span className="font-semibold">
                    {
                      payment.paymentDate
                    }
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Status
                  </span>

                  <span className="font-semibold">
                    {
                      payment.status
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Details */}

          <div
            className="
              bg-white

              border

              rounded-[28px]

              p-6

              mt-8
            "
          >
            <h3
              className="
                text-xl
                font-bold

                mb-6
              "
            >
              Transaction Information
            </h3>

            <div
              className="
                grid
                md:grid-cols-2

                gap-5
              "
            >
              <div
                className="
                  bg-slate-50

                  rounded-2xl

                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Transaction ID
                </p>

                <p
                  className="
                    mt-2

                    font-mono
                    font-semibold
                  "
                >
                  {
                    payment.transactionId
                  }
                </p>
              </div>

              <div
                className="
                  bg-slate-50

                  rounded-2xl

                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Invoice Number
                </p>

                <p
                  className="
                    mt-2

                    font-semibold
                  "
                >
                  {
                    payment.invoiceNumber
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}

          <div
            className="
              bg-white

              border

              rounded-[28px]

              p-6

              mt-8
            "
          >
            <h3
              className="
                text-xl
                font-bold

                mb-8
              "
            >
              Payment Timeline
            </h3>

            <div
              className="
                space-y-6
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    h-12
                    w-12

                    rounded-full

                    bg-green-100

                    flex
                    items-center
                    justify-center
                  "
                >
                  <CreditCard
                    size={20}
                    className="
                      text-green-600
                    "
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Payment Initiated
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Transaction created
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                    h-12
                    w-12

                    rounded-full

                    bg-blue-100

                    flex
                    items-center
                    justify-center
                  "
                >
                  <BadgeCheck
                    size={20}
                    className="
                      text-blue-600
                    "
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Payment Verified
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Successfully verified
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                    h-12
                    w-12

                    rounded-full

                    bg-purple-100

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Receipt
                    size={20}
                    className="
                      text-purple-600
                    "
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Invoice Generated
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Receipt available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}

          <div
            className="
              grid
              md:grid-cols-3

              gap-4

              mt-8
            "
          >
            <button
              onClick={() =>
                onInvoice(payment)
              }
              className="
                bg-emerald-600
                hover:bg-emerald-700

                text-white

                py-4

                rounded-2xl

                font-semibold

                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Download size={18} />
              Download Invoice
            </button>

            <button
              onClick={() =>
                onInvoice(payment)
              }
              className="
                border

                py-4

                rounded-2xl

                font-semibold

                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Receipt size={18} />
              Download Receipt
            </button>

            <button
              onClick={onClose}
              className="
                bg-slate-900
                hover:bg-black

                text-white

                py-4

                rounded-2xl

                font-semibold
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsModal;