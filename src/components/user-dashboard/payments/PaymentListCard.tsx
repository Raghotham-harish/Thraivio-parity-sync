import {
  Building2,
  CalendarDays,
  CreditCard,
  Download,
  Eye,
  FileText,
  Receipt,
  Wallet,
} from "lucide-react";

import type { Payment } from "@/types/payment";

interface PaymentListCardProps {
  payment: Payment;

  onView: (
    payment: Payment
  ) => void;

  onInvoice: (
    payment: Payment
  ) => void;
}

const PaymentListCard = ({
  payment,
  onView,
  onInvoice,
}: PaymentListCardProps) => {
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

  const categoryStyles = {
    Program:
      "bg-purple-100 text-purple-700",

    Session:
      "bg-blue-100 text-blue-700",

    Event:
      "bg-orange-100 text-orange-700",
  };

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          h-2

          bg-gradient-to-r
          from-emerald-500
          via-green-500
          to-teal-500
        "
      />

      <div className="p-6">

        <div
          className="
            flex
            flex-col

            2xl:flex-row

            gap-8
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              gap-5

              flex-1
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
                h-24
                w-24

                rounded-3xl

                object-cover

                border-2
                border-slate-100

                shrink-0
              "
            />

            <div className="flex-1">

              {/* Badges */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      statusStyles[
                        payment.status
                      ]
                    }
                  `}
                >
                  {payment.status}
                </span>

                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      categoryStyles[
                        payment.category
                      ]
                    }
                  `}
                >
                  {
                    payment.category
                  }
                </span>
              </div>

              {/* Title */}

              <h2
                className="
                  text-2xl
                  font-bold

                  mt-4
                "
              >
                {payment.title}
              </h2>

              {/* Mentor */}

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-2

                  mt-3

                  text-slate-600
                "
              >
                <span className="font-semibold">
                  {
                    payment.mentorName
                  }
                </span>

                <span>•</span>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Building2
                    size={14}
                  />

                  {
                    payment.mentorCompany
                  }
                </div>
              </div>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                {
                  payment.mentorRole
                }
              </p>

              {/* Payment Details */}

              <div
                className="
                  grid
                  md:grid-cols-2

                  gap-4

                  mt-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <CalendarDays
                    size={16}
                  />

                  {
                    payment.paymentDate
                  }
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <CreditCard
                    size={16}
                  />

                  {
                    payment.paymentMethod
                  }
                </div>
              </div>

              {/* Transaction */}

              <div
                className="
                  mt-5

                  space-y-2
                "
              >
                <div
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Transaction ID
                </div>

                <div
                  className="
                    font-mono
                    text-sm
                    font-semibold
                  "
                >
                  {
                    payment.transactionId
                  }
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              2xl:w-[360px]

              shrink-0
            "
          >
            <div
              className="
                bg-slate-50

                rounded-3xl

                p-5
              "
            >
              {/* Amount */}

              <div
                className="
                  bg-white

                  rounded-2xl

                  p-5

                  text-center
                "
              >
                <div
                  className="
                    flex
                    justify-center
                  "
                >
                  <Wallet
                    size={26}
                    className="
                      text-emerald-600
                    "
                  />
                </div>

                <p
                  className="
                    text-sm
                    text-slate-500

                    mt-2
                  "
                >
                  Payment Amount
                </p>

                <h3
                  className="
                    text-4xl
                    font-bold

                    text-emerald-600

                    mt-2
                  "
                >
                  {
                    payment.currency
                  }
                  {payment.amount}
                </h3>
              </div>

              {/* Invoice */}

              <div
                className="
                  bg-white

                  rounded-2xl

                  p-4

                  mt-4
                "
              >
                <p
                  className="
                    text-xs
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

              {/* Actions */}

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-5
                "
              >
                <button
                  onClick={() =>
                    onView(
                      payment
                    )
                  }
                  className="
                    border

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-slate-100

                    transition
                  "
                >
                  <Eye size={18} />
                  View Details
                </button>

                <button
                  onClick={() =>
                    onInvoice(
                      payment
                    )
                  }
                  className="
                    bg-emerald-600
                    hover:bg-emerald-700

                    text-white

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    transition
                  "
                >
                  <Download
                    size={18}
                  />
                  Download Invoice
                </button>

                <button
                  onClick={() =>
                    onInvoice(
                      payment
                    )
                  }
                  className="
                    bg-slate-900
                    hover:bg-black

                    text-white

                    py-3

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    transition
                  "
                >
                  <Receipt
                    size={18}
                  />
                  Download Receipt
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PaymentListCard;