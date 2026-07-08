import {
  CreditCard,
  Wallet,
} from "lucide-react";

interface PaymentsHeaderProps {
  totalPayments: number;
}

const PaymentsHeader = ({
  totalPayments,
}: PaymentsHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-6
      "
    >
      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2

            bg-emerald-50
            text-emerald-700

            px-4
            py-2

            rounded-full

            text-sm
            font-medium
          "
        >
          <CreditCard size={16} />
          Payment History
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          My Payments
        </h1>

        <p
          className="
            mt-3

            text-slate-500

            max-w-2xl
          "
        >
          Track payments, invoices,
          receipts and transaction history
          across all mentorship activities.
        </p>
      </div>

      <div
        className="
          bg-white

          border

          rounded-3xl

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-emerald-50

              flex
              items-center
              justify-center
            "
          >
            <Wallet
              size={24}
              className="
                text-emerald-600
              "
            />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Total Transactions
            </p>

            <h3
              className="
                text-3xl
                font-bold
              "
            >
              {totalPayments}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsHeader;