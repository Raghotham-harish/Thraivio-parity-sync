import {
  CreditCard,
  Download,
  Eye,
  MoreVertical,
  RefreshCcw,
  Search,
} from "lucide-react";

import type {
  RecentPayment,
} from "@/types/admin-dashboard";

interface RecentPaymentsProps {
  payments: RecentPayment[];

  onView?: (id: string) => void;

  onRefund?: (id: string) => void;

  onInvoice?: (id: string) => void;
}

const RecentPayments = ({
  payments,
  onView,
  onRefund,
  onInvoice,
}: RecentPaymentsProps) => {
  return (
    <section className="mt-10">

      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>

          <span
            className="
              inline-flex

              items-center

              gap-2

              rounded-full

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            <CreditCard size={16} />

            Payment Management
          </span>

          <h2
            className="
              mt-5

              text-3xl

              font-bold
            "
          >
            Recent Transactions
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-slate-500
            "
          >
            Monitor platform payments,
            refunds and transaction
            history from a single place.
          </p>

        </div>

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="
              absolute

              left-4
              top-1/2

              -translate-y-1/2

              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search payment..."

            className="
              w-80

              rounded-2xl

              border
              border-slate-200

              bg-white

              py-3

              pl-11
              pr-4

              outline-none

              transition

              focus:border-blue-500
            "
          />

        </div>

      </div>

      {/* Table */}

      <div
        className="
          mt-8

          overflow-hidden

          rounded-[30px]

          border
          border-slate-200

          bg-white
        "
      >

        {/* Table Header */}

        <div
          className="
            grid

            grid-cols-12

            border-b
            border-slate-200

            bg-slate-50

            px-6
            py-4

            text-sm
            font-semibold

            text-slate-600
          "
        >
          <div className="col-span-3">
            User
          </div>

          <div className="col-span-2">
            Mentor
          </div>

          <div className="col-span-2">
            Amount
          </div>

          <div className="col-span-2">
            Method
          </div>

          <div className="col-span-1">
            Status
          </div>

          <div className="col-span-2 text-right">
            Actions
          </div>

        </div>

        {/* Payment Rows */}

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="
              grid

              grid-cols-12

              items-center

              border-b
              border-slate-100

              px-6
              py-5

              transition

              hover:bg-slate-50
            "
          >
                        {/* User */}

            <div className="col-span-3">
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex

                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-2xl

                    bg-blue-100

                    font-bold

                    text-blue-700
                  "
                >
                  {payment.user.charAt(0)}
                </div>

                <div>
                  <h4
                    className="
                      font-semibold

                      text-slate-900
                    "
                  >
                    {payment.user}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-slate-500
                    "
                  >
                    {payment.id}
                  </p>
                </div>
              </div>
            </div>

            {/* Mentor */}

            <div className="col-span-2">
              <p
                className="
                  font-medium

                  text-slate-700
                "
              >
                {payment.mentor}
              </p>

              <p
                className="
                  mt-1

                  text-xs

                  text-slate-500
                "
              >
                Mentor
              </p>
            </div>

            {/* Amount */}

            <div className="col-span-2">
              <h4
                className="
                  text-lg
                  font-bold

                  text-slate-900
                "
              >
                ${payment.amount}
              </h4>

              <p
                className="
                  mt-1

                  text-xs

                  text-slate-500
                "
              >
                {payment.date}
              </p>
            </div>

            {/* Payment Method */}

            <div className="col-span-2">
              <span
                className="
                  inline-flex

                  rounded-full

                  bg-slate-100

                  px-3
                  py-2

                  text-sm
                  font-medium

                  text-slate-700
                "
              >
                {payment.paymentMethod}
              </span>
            </div>

            {/* Status */}

            <div className="col-span-1">
              <span
                className={`
                  inline-flex

                  rounded-full

                  px-3
                  py-1.5

                  text-xs
                  font-semibold

                  ${
                    payment.status ===
                    "completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : payment.status ===
                        "pending"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {payment.status}
              </span>
            </div>

            {/* Actions */}

            <div
              className="
                col-span-2

                flex
                items-center
                justify-end

                gap-2
              "
            >
              {/* View */}

              <button
                onClick={() =>
                  onView?.(payment.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-50

                  text-blue-600

                  transition

                  hover:bg-blue-100
                "
              >
                <Eye size={18} />
              </button>

              {/* Refund */}

              <button
                onClick={() =>
                  onRefund?.(payment.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-amber-50

                  text-amber-600

                  transition

                  hover:bg-amber-100
                "
              >
                <RefreshCcw size={18} />
              </button>

              {/* Invoice */}

              <button
                onClick={() =>
                  onInvoice?.(payment.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-emerald-50

                  text-emerald-600

                  transition

                  hover:bg-emerald-100
                "
              >
                <Download size={18} />
              </button>

              {/* More */}

              <button
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  transition

                  hover:bg-slate-100
                "
              >
                <MoreVertical size={18} />
              </button>
            </div>

          </div>
        ))}

        {/* Footer */}

        <div
          className="
            flex
            flex-col

            gap-4

            border-t
            border-slate-200

            bg-slate-50

            px-6
            py-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              text-sm

              text-slate-500
            "
          >
            Showing
            <span className="font-semibold">
              {" "}
              {payments.length}{" "}
            </span>
            recent transactions.
          </p>

          <button
            className="
              rounded-2xl

              bg-blue-600

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            View All Transactions
          </button>
        </div>

      </div>
    </section>
  );
};

export default RecentPayments;