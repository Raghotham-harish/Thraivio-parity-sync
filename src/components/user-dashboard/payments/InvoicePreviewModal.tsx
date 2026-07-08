import {
  Building2,
  Download,
  FileText,
  Receipt,
  X,
} from "lucide-react";

import type { Payment } from "@/types/payment";

interface InvoicePreviewModalProps {
  open: boolean;

  payment: Payment | null;

  onClose: () => void;

  onDownload: (
    payment: Payment
  ) => void;
}

const InvoicePreviewModal = ({
  open,
  payment,
  onClose,
  onDownload,
}: InvoicePreviewModalProps) => {
  if (!open || !payment)
    return null;

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
          max-w-6xl

          rounded-[32px]

          overflow-hidden

          max-h-[92vh]

          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            sticky
            top-0
            z-20

            bg-white

            border-b

            px-8
            py-5

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
              Invoice Preview
            </h2>

            <p
              className="
                text-slate-500
                mt-1
              "
            >
              Professional payment invoice
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

        {/* Scroll */}

        <div
          className="
            overflow-y-auto

            p-8
          "
        >
          {/* Invoice */}

          <div
            className="
              border

              rounded-[32px]

              overflow-hidden
            "
          >
            {/* Top */}

            <div
              className="
                bg-gradient-to-r
                from-emerald-600
                to-teal-600

                text-white

                p-8
              "
            >
              <div
                className="
                  flex
                  flex-col
                  lg:flex-row

                  lg:justify-between

                  gap-8
                "
              >
                <div>
                  <div
                    className="
                      h-16
                      w-16

                      rounded-2xl

                      bg-white/20

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Receipt
                      size={30}
                    />
                  </div>

                  <h1
                    className="
                      text-4xl
                      font-bold

                      mt-5
                    "
                  >
                    INVOICE
                  </h1>

                  <p
                    className="
                      mt-2

                      text-emerald-100
                    "
                  >
                    Mentor Marketplace
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-emerald-100">
                    Invoice Number
                  </p>

                  <h2
                    className="
                      text-2xl
                      font-bold

                      mt-2
                    "
                  >
                    {
                      payment.invoiceNumber
                    }
                  </h2>

                  <p className="mt-4 text-emerald-100">
                    Date
                  </p>

                  <h3 className="font-semibold">
                    {
                      payment.paymentDate
                    }
                  </h3>
                </div>
              </div>
            </div>

            {/* Body */}

            <div className="p-8">

              {/* Mentor */}

              <div
                className="
                  grid
                  lg:grid-cols-2

                  gap-6
                "
              >
                <div
                  className="
                    bg-slate-50

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      font-bold
                      text-lg

                      mb-5
                    "
                  >
                    Mentor Details
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

                      <p className="text-slate-500">
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

                <div
                  className="
                    bg-slate-50

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      font-bold
                      text-lg

                      mb-5
                    "
                  >
                    Payment Information
                  </h3>

                  <div className="space-y-4">
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
                        Transaction ID
                      </span>

                      <span className="font-semibold">
                        {
                          payment.transactionId
                        }
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">
                        Status
                      </span>

                      <span className="font-semibold text-green-600">
                        {
                          payment.status
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}

              <div
                className="
                  mt-8

                  border

                  rounded-3xl

                  overflow-hidden
                "
              >
                <div
                  className="
                    bg-slate-100

                    px-6
                    py-4

                    font-semibold
                  "
                >
                  Transaction Summary
                </div>

                <div className="p-6">

                  <div
                    className="
                      flex
                      justify-between

                      py-3
                    "
                  >
                    <span>
                      {
                        payment.title
                      }
                    </span>

                    <span>
                      {
                        payment.currency
                      }
                      {payment.amount}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between

                      py-3
                    "
                  >
                    <span>
                      Platform Fee
                    </span>

                    <span>
                      {payment.currency}
                      0
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between

                      py-3
                    "
                  >
                    <span>
                      Tax
                    </span>

                    <span>
                      {payment.currency}
                      0
                    </span>
                  </div>

                  <div
                    className="
                      border-t

                      mt-3
                      pt-5

                      flex
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      Total
                    </span>

                    <span
                      className="
                        text-2xl
                        font-bold

                        text-emerald-600
                      "
                    >
                      {
                        payment.currency
                      }
                      {payment.amount}
                    </span>
                  </div>

                </div>
              </div>

              {/* Footer */}

              <div
                className="
                  mt-8

                  bg-slate-50

                  rounded-3xl

                  p-6

                  text-center
                "
              >
                <h3
                  className="
                    font-bold
                    text-lg
                  "
                >
                  Thank You For Learning
                </h3>

                <p
                  className="
                    text-slate-500

                    mt-2
                  "
                >
                  This invoice serves as proof
                  of payment for your mentorship
                  purchase.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Actions */}

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
                onDownload(
                  payment
                )
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
              Download PDF
            </button>

            <button
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
              <FileText size={18} />
              Print Invoice
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

export default InvoicePreviewModal;