import { useMemo, useState } from "react";

import {
  adminPayments,
  paymentStats,
} from "@/data/admin-payments";

import type { AdminPayment } from "@/types/admin-payment";

import PaymentsHeader from "@/components/admin-dashboard/payments/PaymentsHeader";
import PaymentsStats from "@/components/admin-dashboard/payments/PaymentsStats";
import PaymentsToolbar from "@/components/admin-dashboard/payments/PaymentsToolbar";
import PaymentsGrid from "@/components/admin-dashboard/payments/PaymentsGrid";
import PaymentsList from "@/components/admin-dashboard/payments/PaymentsList";
import PaymentsTable from "@/components/admin-dashboard/payments/PaymentsTable";
import PaymentsPagination from "@/components/admin-dashboard/payments/PaymentsPagination";
import PaymentsEmptyState from "@/components/admin-dashboard/payments/PaymentsEmptyState";

import PaymentDetailsDrawer from "@/components/admin-dashboard/payments/PaymentDetailsDrawer";

import RefundPaymentDialog from "@/components/admin-dashboard/payments/RefundPaymentDialog";

import PaymentInvoiceDialog from "@/components/admin-dashboard/payments/PaymentInvoiceDialog";

import PaymentReceiptDialog from "@/components/admin-dashboard/payments/PaymentReceiptDialog";

import PaymentStatusDialog from "@/components/admin-dashboard/payments/PaymentStatusDialog";

import DeletePaymentDialog from "@/components/admin-dashboard/payments/DeletePaymentDialog";

import ExportPaymentsDialog from "@/components/admin-dashboard/payments/ExportPaymentsDialog";

const PAGE_SIZE = 9;

export default function PaymentsManagement() {
      const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [category, setCategory] = useState("all");

  const [paymentMethod, setPaymentMethod] =
    useState("all");

  const [gateway, setGateway] =
    useState("all");

  const [mentor, setMentor] =
    useState("");

  const [student, setStudent] =
    useState("");

  const [amountRange, setAmountRange] =
    useState("all");

  const [dateRange, setDateRange] =
    useState("all");

  const [view, setView] = useState<
    "grid" | "list" | "table"
  >("grid");

  const [page, setPage] = useState(1);

  const [selectedPayment, setSelectedPayment] =
    useState<AdminPayment | null>(null);
      const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [refundOpen, setRefundOpen] =
    useState(false);

  const [invoiceOpen, setInvoiceOpen] =
    useState(false);

  const [receiptOpen, setReceiptOpen] =
    useState(false);

  const [statusOpen, setStatusOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [exportOpen, setExportOpen] =
    useState(false);
      const filteredPayments = useMemo(() => {
    return adminPayments.filter((payment) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        payment.paymentNumber
          .toLowerCase()
          .includes(keyword) ||
        payment.student.name
          .toLowerCase()
          .includes(keyword) ||
        payment.student.email
          .toLowerCase()
          .includes(keyword) ||
        payment.mentor.name
          .toLowerCase()
          .includes(keyword) ||
        payment.purchase.title
          .toLowerCase()
          .includes(keyword) ||
        payment.payment.transactionId
          .toLowerCase()
          .includes(keyword);

      const matchesStatus =
        status === "all" ||
        payment.status === status;

      const matchesCategory =
        category === "all" ||
        payment.purchase.category === category;

      const matchesPaymentMethod =
        paymentMethod === "all" ||
        payment.payment.paymentMethod === paymentMethod;

      const matchesGateway =
        gateway === "all" ||
        payment.payment.paymentGateway === gateway;

      const matchesMentor =
        mentor === "" ||
        payment.mentor.name
          .toLowerCase()
          .includes(mentor.toLowerCase());

      const matchesStudent =
        student === "" ||
        payment.student.name
          .toLowerCase()
          .includes(student.toLowerCase());

      const totalAmount =
        payment.breakdown.totalAmount;

      const matchesAmount =
        amountRange === "all" ||
        (amountRange === "0-1000" &&
          totalAmount <= 1000) ||
        (amountRange === "1000-5000" &&
          totalAmount > 1000 &&
          totalAmount <= 5000) ||
        (amountRange === "5000-10000" &&
          totalAmount > 5000 &&
          totalAmount <= 10000) ||
        (amountRange === "10000-25000" &&
          totalAmount > 10000 &&
          totalAmount <= 25000) ||
        (amountRange === "25000+" &&
          totalAmount > 25000);

      const matchesDate = (() => {
        if (dateRange === "all") return true;

        const paymentDate = new Date(
          payment.payment.paymentDate
        );

        const today = new Date();

        const diff =
          (today.getTime() -
            paymentDate.getTime()) /
          (1000 * 60 * 60 * 24);

        switch (dateRange) {
          case "today":
            return diff < 1;

          case "last7days":
            return diff <= 7;

          case "last30days":
            return diff <= 30;

          case "thisMonth":
            return (
              paymentDate.getMonth() ===
                today.getMonth() &&
              paymentDate.getFullYear() ===
                today.getFullYear()
            );

          case "lastMonth": {
            const lastMonth = new Date();

            lastMonth.setMonth(
              today.getMonth() - 1
            );

            return (
              paymentDate.getMonth() ===
                lastMonth.getMonth() &&
              paymentDate.getFullYear() ===
                lastMonth.getFullYear()
            );
          }

          case "thisYear":
            return (
              paymentDate.getFullYear() ===
              today.getFullYear()
            );

          default:
            return true;
        }
      })();

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesPaymentMethod &&
        matchesGateway &&
        matchesMentor &&
        matchesStudent &&
        matchesAmount &&
        matchesDate
      );
    });
  }, [
    search,
    status,
    category,
    paymentMethod,
    gateway,
    mentor,
    student,
    amountRange,
    dateRange,
  ]);
    const totalPages = Math.max(
    1,
    Math.ceil(filteredPayments.length / PAGE_SIZE)
  );

  const paginatedPayments = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;

    return filteredPayments.slice(
      start,
      start + PAGE_SIZE
    );
  }, [filteredPayments, page]);

  const handleRefresh = () => {
    console.log("Refresh Payments");
  };

  const handleView = (
    payment: AdminPayment
  ) => {
    setSelectedPayment(payment);
    setDetailsOpen(true);
  };

  const handleRefund = (
    payment: AdminPayment
  ) => {
    setSelectedPayment(payment);
    setRefundOpen(true);
  };

  const handleStatusChange = (
    payment: AdminPayment
  ) => {
    setSelectedPayment(payment);
    setStatusOpen(true);
  };

  const handleDelete = (
    payment: AdminPayment
  ) => {
    setSelectedPayment(payment);
    setDeleteOpen(true);
  };

  const handleInvoice = (
    payment: AdminPayment
  ) => {
    setSelectedPayment(payment);
    setInvoiceOpen(true);
  };

  const handleReceipt = (
    payment: AdminPayment
  ) => {
    setSelectedPayment(payment);
    setReceiptOpen(true);
  };

  const handleExport = () => {
    setExportOpen(true);
  };
    const handleConfirmRefund = (
    payment: AdminPayment,
    reason: string,
    refundType: string
  ) => {
    console.log(payment, reason, refundType);
  };

  const handleConfirmStatus = (
    payment: AdminPayment,
    newStatus: string,
    note: string
  ) => {
    console.log(payment, newStatus, note);
  };

  const handleConfirmDelete = (
    payment: AdminPayment
  ) => {
    console.log(payment);
  };

  const handleInvoiceDownload = (
    payment: AdminPayment
  ) => {
    console.log(payment);
  };

  const handleInvoicePrint = (
    payment: AdminPayment
  ) => {
    console.log(payment);
  };

  const handleReceiptDownload = (
    payment: AdminPayment
  ) => {
    console.log(payment);
  };

  const handleReceiptPrint = (
    payment: AdminPayment
  ) => {
    console.log(payment);
  };

  const handleExportPayments = (
    format: string,
    includeStudent: boolean,
    includeMentor: boolean,
    includeBilling: boolean,
    includeRefunds: boolean
  ) => {
    console.log(
      format,
      includeStudent,
      includeMentor,
      includeBilling,
      includeRefunds
    );
  };
    return (
    <div className="space-y-8">

      <PaymentsHeader
  totalPayments={filteredPayments.length}
  totalRevenue={paymentStats.totalRevenue}
  onCreatePayment={() => {
    console.log("Create Payment");
  }}
  onExport={handleExport}
/>

      <PaymentsStats
  totalRevenue={paymentStats.totalRevenue}
  totalTransactions={paymentStats.totalPayments}
  successfulPayments={paymentStats.successfulPayments}
  pendingPayments={paymentStats.pendingPayments}
  failedPayments={paymentStats.failedPayments}
  refundedAmount={paymentStats.refundedAmount}
  averageOrderValue={
    paymentStats.totalPayments === 0
      ? 0
      : Math.round(
          paymentStats.totalRevenue /
            paymentStats.totalPayments
        )
  }
  monthlyRevenue={paymentStats.totalRevenue}
/>

      <PaymentsToolbar
        search={search}
        onSearchChange={setSearch}

        status={status}
        onStatusChange={setStatus}

        category={category}
        onCategoryChange={setCategory}

        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}

        gateway={gateway}
        onGatewayChange={setGateway}

        mentor={mentor}
        onMentorChange={setMentor}

        student={student}
        onStudentChange={setStudent}

        amountRange={amountRange}
        onAmountRangeChange={setAmountRange}

        dateRange={dateRange}
        onDateRangeChange={setDateRange}

        view={view}
        onViewChange={setView}

        onRefresh={handleRefresh}

        onExport={handleExport}
      />
            {filteredPayments.length === 0 ? (

        <PaymentsEmptyState
          onCreatePayment={() =>
            console.log("Create Payment")
          }
        />

      ) : (

        <>

          {view === "grid" && (

            <PaymentsGrid
              payments={paginatedPayments}
              onView={handleView}
              onRefund={handleRefund}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />

          )}

          {view === "list" && (

            <PaymentsList
              payments={paginatedPayments}
              onView={handleView}
              onRefund={handleRefund}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />

          )}

          {view === "table" && (

            <PaymentsTable
              payments={paginatedPayments}
              onView={handleView}
              onRefund={handleRefund}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />

          )}

          <PaymentsPagination
            currentPage={page}
            totalPages={totalPages}
            totalItems={filteredPayments.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />

        </>

      )}
            <PaymentDetailsDrawer
        open={detailsOpen}
        payment={selectedPayment}
        onOpenChange={setDetailsOpen}
      />

      <RefundPaymentDialog
        open={refundOpen}
        payment={selectedPayment}
        onOpenChange={setRefundOpen}
        onConfirm={handleConfirmRefund}
      />

      <PaymentInvoiceDialog
        open={invoiceOpen}
        payment={selectedPayment}
        onOpenChange={setInvoiceOpen}
        onDownload={handleInvoiceDownload}
        onPrint={handleInvoicePrint}
      />

      <PaymentReceiptDialog
        open={receiptOpen}
        payment={selectedPayment}
        onOpenChange={setReceiptOpen}
        onDownload={handleReceiptDownload}
        onPrint={handleReceiptPrint}
      />
            <PaymentStatusDialog
        open={statusOpen}
        payment={selectedPayment}
        onOpenChange={setStatusOpen}
        onConfirm={handleConfirmStatus}
      />

      <DeletePaymentDialog
        open={deleteOpen}
        payment={selectedPayment}
        onOpenChange={setDeleteOpen}
        onConfirm={handleConfirmDelete}
      />

      <ExportPaymentsDialog
        open={exportOpen}
        onOpenChange={setExportOpen}
        onExport={handleExportPayments}
      />
          </div>
  );
}