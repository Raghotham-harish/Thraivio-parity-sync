import {
  Building2,
  CalendarDays,
  CreditCard,
  Download,
  Eye,
  Receipt,
  Wallet,
} from "lucide-react";

import type { Payment } from "@/types/payment";

interface PaymentGridCardProps {
  payment: Payment;

  onView: (
    payment: Payment
  ) => void;

  onInvoice: (
    payment: Payment
  ) => void;
}

const PaymentGridCard = ({
  payment,
  onView,
  onInvoice,
}: PaymentGridCardProps) => {
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
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top Stripe */}

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

        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-start

            gap-4
          "
        >
          <div
            className="
              flex
              items-center

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
                h-16
                w-16

                rounded-2xl

                object-cover

                border-2
                border-slate-100
              "
            />

            <div>
              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                {payment.mentorName}
              </h3>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                <Building2
                  size={14}
                />
                {
                  payment.mentorCompany
                }
              </div>

              <p
                className="
                  text-xs
                  text-slate-400

                  mt-1
                "
              >
                {
                  payment.mentorRole
                }
              </p>
            </div>
          </div>

          <span
            className={`
              px-3
              py-1.5

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
        </div>

        {/* Payment Title */}

        <div
          className="
            mt-6

            bg-slate-50

            rounded-3xl

            p-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between

              gap-3
            "
          >
            <h4
              className="
                text-lg
                font-bold
              "
            >
              {payment.title}
            </h4>

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

          <div
            className="
              mt-4

              flex
              items-center
              gap-2
            "
          >
            <Wallet
              size={18}
              className="
                text-emerald-600
              "
            />

            <span
              className="
                text-3xl
                font-bold
                text-emerald-600
              "
            >
              {payment.currency}
              {payment.amount}
            </span>
          </div>
        </div>

        {/* Details */}

        <div
          className="
            mt-6

            space-y-4
          "
        >
          <div
            className="
              flex
              justify-between
              items-center
            "
          >
            <span
              className="
                text-slate-500
                text-sm
              "
            >
              Payment Date
            </span>

            <div
              className="
                flex
                items-center
                gap-2

                font-medium
              "
            >
              <CalendarDays
                size={16}
              />
              {
                payment.paymentDate
              }
            </div>
          </div>

          <div
            className="
              flex
              justify-between
              items-center
            "
          >
            <span
              className="
                text-slate-500
                text-sm
              "
            >
              Method
            </span>

            <div
              className="
                flex
                items-center
                gap-2

                font-medium
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
        </div>

        {/* Transaction */}

        <div
          className="
            mt-6

            space-y-3
          "
        >
          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <p
              className="
                text-xs
                text-slate-500
              "
            >
              Transaction ID
            </p>

            <p
              className="
                mt-1

                font-mono
                text-sm
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

              p-4
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
                mt-1

                font-semibold
              "
            >
              {
                payment.invoiceNumber
              }
            </p>
          </div>
        </div>

        {/* Actions */}

        <div
          className="
            mt-8

            grid
            grid-cols-2

            gap-3
          "
        >
          <button
            onClick={() =>
              onView(payment)
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

              hover:bg-slate-50

              transition
            "
          >
            <Eye size={18} />
            View
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
            Invoice
          </button>
        </div>

        <button
          onClick={() =>
            onInvoice(payment)
          }
          className="
            w-full

            mt-3

            border
            border-slate-200

            py-3

            rounded-xl

            font-medium

            flex
            items-center
            justify-center
            gap-2

            hover:bg-slate-50

            transition
          "
        >
          <Receipt size={18} />
          Download Receipt
        </button>

      </div>
    </div>
  );
};

export default PaymentGridCard;