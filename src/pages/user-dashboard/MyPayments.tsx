import { useMemo, useState } from "react";

import type { Payment } from "@/types/payment";

import PaymentsHeader from "@/components/user-dashboard/payments/PaymentsHeader";
import PaymentsStats from "@/components/user-dashboard/payments/PaymentsStats";
import PaymentsToolbar from "@/components/user-dashboard/payments/PaymentsToolbar";

import PaymentGridCard from "@/components/user-dashboard/payments/PaymentGridCard";
import PaymentListCard from "@/components/user-dashboard/payments/PaymentListCard";

import PaymentDetailsModal from "@/components/user-dashboard/payments/PaymentDetailsModal";
import InvoicePreviewModal from "@/components/user-dashboard/payments/InvoicePreviewModal";

import EmptyPayments from "@/components/user-dashboard/payments/EmptyPayments";

const initialPayments: Payment[] = [
  {
    id: "1",

    mentorId: 1,

    mentorName: "Sarah Johnson",

    mentorRole:
      "Senior Product Mentor",

    mentorCompany: "Google",

    mentorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",

    title:
      "Product Management Mastery",

    category: "Program",

    amount: 299,

    currency: "$",

    paymentDate:
      "15 June 2026",

    paymentMethod: "Card",

    transactionId:
      "TXN-GGL-829381",

    invoiceNumber:
      "INV-2026-001",

    status: "paid",
  },

  {
    id: "2",

    mentorId: 2,

    mentorName: "Michael Lee",

    mentorRole:
      "Senior Engineering Mentor",

    mentorCompany:
      "Microsoft",

    mentorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",

    title:
      "System Design Bootcamp",

    category: "Program",

    amount: 249,

    currency: "$",

    paymentDate:
      "20 June 2026",

    paymentMethod: "UPI",

    transactionId:
      "TXN-MSFT-551827",

    invoiceNumber:
      "INV-2026-002",

    status: "paid",
  },

  {
    id: "3",

    mentorId: 3,

    mentorName:
      "Emily Carter",

    mentorRole:
      "Senior Career Coach",

    mentorCompany:
      "LinkedIn",

    mentorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",

    title:
      "Resume Building Workshop",

    category: "Event",

    amount: 79,

    currency: "$",

    paymentDate:
      "05 July 2026",

    paymentMethod: "PayPal",

    transactionId:
      "TXN-LI-992881",

    invoiceNumber:
      "INV-2026-003",

    status: "paid",
  },

  {
    id: "4",

    mentorId: 5,

    mentorName:
      "Priya Verma",

    mentorRole:
      "Leadership Mentor",

    mentorCompany:
      "Amazon",

    mentorImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",

    title:
      "Leadership Excellence Session",

    category: "Session",

    amount: 109,

    currency: "$",

    paymentDate:
      "12 July 2026",

    paymentMethod:
      "Bank Transfer",

    transactionId:
      "TXN-AMZ-777222",

    invoiceNumber:
      "INV-2026-004",

    status: "pending",
  },

  {
    id: "5",

    mentorId: 6,

    mentorName:
      "Robert Brown",

    mentorRole:
      "Marketing Expert",

    mentorCompany: "Meta",

    mentorImage:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",

    title:
      "Growth Marketing Accelerator",

    category: "Program",

    amount: 329,

    currency: "$",

    paymentDate:
      "18 July 2026",

    paymentMethod: "Card",

    transactionId:
      "TXN-META-888111",

    invoiceNumber:
      "INV-2026-005",

    status: "refunded",
  },
];

const MyPayments = () => {
  const [payments] =
    useState(initialPayments);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    categoryFilter,
    setCategoryFilter,
  ] = useState("all");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("all");

  const [
    selectedPayment,
    setSelectedPayment,
  ] = useState<Payment | null>(
    null
  );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    invoiceOpen,
    setInvoiceOpen,
  ] = useState(false);

  const filteredPayments =
    useMemo(() => {
      return payments.filter(
        (payment) => {
          const matchesSearch =
            payment.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.mentorName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.transactionId
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            payment.invoiceNumber
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            categoryFilter ===
            "all"
              ? true
              : payment.category ===
                categoryFilter;

          const matchesStatus =
            statusFilter === "all"
              ? true
              : payment.status ===
                statusFilter;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );
        }
      );
    }, [
      payments,
      search,
      categoryFilter,
      statusFilter,
    ]);

  const totalSpent =
    payments
      .filter(
        (payment) =>
          payment.status === "paid"
      )
      .reduce(
        (
          total,
          payment
        ) =>
          total +
          payment.amount,
        0
      );

  const successfulPayments =
    payments.filter(
      (payment) =>
        payment.status === "paid"
    ).length;

  const pendingPayments =
    payments.filter(
      (payment) =>
        payment.status ===
        "pending"
    ).length;

  const refundedAmount =
    payments
      .filter(
        (payment) =>
          payment.status ===
          "refunded"
      )
      .reduce(
        (
          total,
          payment
        ) =>
          total +
          payment.amount,
        0
      );

  const handleView =
    (
      payment: Payment
    ) => {
      setSelectedPayment(
        payment
      );

      setDetailsOpen(true);
    };

  const handleInvoice =
    (
      payment: Payment
    ) => {
      setSelectedPayment(
        payment
      );

      setInvoiceOpen(true);
    };

  const handleBrowsePrograms =
    () => {
      console.log(
        "Programs"
      );
    };

  const handleBrowseSessions =
    () => {
      console.log(
        "Sessions"
      );
    };

  const handleBrowseEvents =
    () => {
      console.log(
        "Events"
      );
    };

  return (
    <div className="space-y-8">

      <PaymentsHeader
        totalPayments={
          payments.length
        }
      />

      <PaymentsStats
        totalSpent={totalSpent}
        successfulPayments={
          successfulPayments
        }
        pendingPayments={
          pendingPayments
        }
        refundedAmount={
          refundedAmount
        }
      />

      <PaymentsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        categoryFilter={
          categoryFilter
        }
        setCategoryFilter={
          setCategoryFilter
        }
        statusFilter={
          statusFilter
        }
        setStatusFilter={
          setStatusFilter
        }
      />

      {filteredPayments.length ===
      0 ? (
        <EmptyPayments
          onBrowsePrograms={
            handleBrowsePrograms
          }
          onBrowseSessions={
            handleBrowseSessions
          }
          onBrowseEvents={
            handleBrowseEvents
          }
        />
      ) : (
        <>
          {view === "grid" && (
            <div
              className="
                grid
                xl:grid-cols-2

                gap-6
              "
            >
              {filteredPayments.map(
                (
                  payment
                ) => (
                  <PaymentGridCard
                    key={
                      payment.id
                    }
                    payment={
                      payment
                    }
                    onView={
                      handleView
                    }
                    onInvoice={
                      handleInvoice
                    }
                  />
                )
              )}
            </div>
          )}

          {view === "list" && (
            <div className="space-y-6">
              {filteredPayments.map(
                (
                  payment
                ) => (
                  <PaymentListCard
                    key={
                      payment.id
                    }
                    payment={
                      payment
                    }
                    onView={
                      handleView
                    }
                    onInvoice={
                      handleInvoice
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      <PaymentDetailsModal
        open={detailsOpen}
        payment={
          selectedPayment
        }
        onClose={() =>
          setDetailsOpen(false)
        }
        onInvoice={
          handleInvoice
        }
      />

      <InvoicePreviewModal
        open={invoiceOpen}
        payment={
          selectedPayment
        }
        onClose={() =>
          setInvoiceOpen(false)
        }
        onDownload={
          handleInvoice
        }
      />

    </div>
  );
};

export default MyPayments;