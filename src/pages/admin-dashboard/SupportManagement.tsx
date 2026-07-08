import { useMemo, useState } from "react";

import SupportHeader from "@/components/admin-dashboard/support/SupportHeader";
import SupportStats from "@/components/admin-dashboard/support/SupportStats";
import SupportToolbar from "@/components/admin-dashboard/support/SupportToolbar";
import SupportGrid from "@/components/admin-dashboard/support/SupportGrid";
import SupportTable from "@/components/admin-dashboard/support/SupportTable";
import SupportDetailsDialog from "@/components/admin-dashboard/support/SupportDetailsDialog";
import ReplyTicketDialog from "@/components/admin-dashboard/support/ReplyTicketDialog";
import CloseTicketDialog from "@/components/admin-dashboard/support/CloseTicketDialog";
import EmptySupport from "@/components/admin-dashboard/support/EmptySupport";

import {
  supportTickets,
  supportStats,
} from "@/data/admin-support";

import type {
  AdminSupportTicket,
} from "@/types/admin-support";

export default function SupportManagement() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const [priority, setPriority] =
    useState("all");

  const [category, setCategory] =
    useState("all");

  const [assignedTo, setAssignedTo] =
    useState("all");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [selectedTicket, setSelectedTicket] =
    useState<AdminSupportTicket | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [replyOpen, setReplyOpen] =
    useState(false);

  const [closeOpen, setCloseOpen] =
    useState(false);
      const filteredTickets = useMemo(() => {
    return supportTickets.filter((ticket) => {
      const matchesSearch =
        ticket.subject
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        ticket.message
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        ticket.customer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        ticket.ticketId
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        ticket.status === status;

      const matchesPriority =
        priority === "all" ||
        ticket.priority === priority;

      const matchesCategory =
        category === "all" ||
        ticket.category === category;

      const matchesAssignedTo =
        assignedTo === "all" ||
        ticket.assignedTo.name === assignedTo;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesCategory &&
        matchesAssignedTo
      );
    });
  }, [
    search,
    status,
    priority,
    category,
    assignedTo,
  ]);

  const handleView = (
    ticket: AdminSupportTicket
  ) => {
    setSelectedTicket(ticket);
    setDetailsOpen(true);
  };

  const handleReply = (
    ticket: AdminSupportTicket
  ) => {
    setSelectedTicket(ticket);
    setReplyOpen(true);
  };

  const handleClose = (
    ticket: AdminSupportTicket
  ) => {
    setSelectedTicket(ticket);
    setCloseOpen(true);
  };
    const handleRefresh = () => {
    console.log("Refresh Support Tickets");
  };

  const handleExport = () => {
    console.log("Export Support Tickets");
  };

  const handleCreate = () => {
    console.log("Create Support Ticket");
  };

  const handleReplyConfirm = () => {
    console.log(
      "Reply Ticket:",
      selectedTicket?.id
    );

    setReplyOpen(false);
    setSelectedTicket(null);
  };

  const handleCloseConfirm = () => {
    console.log(
      "Close Ticket:",
      selectedTicket?.id
    );

    setCloseOpen(false);
    setSelectedTicket(null);
  };

  const handleResetFilters = () => {
    setSearch("");

    setStatus("all");

    setPriority("all");

    setCategory("all");

    setAssignedTo("all");

    setView("grid");
  };

  return (
    <div className="space-y-8">

      <SupportHeader
        totalTickets={supportStats.totalTickets}
        customerSatisfaction={
          supportStats.customerSatisfaction
        }
        onCreate={handleCreate}
        onExport={handleExport}
      />

      <SupportStats
        totalTickets={supportStats.totalTickets}
        openTickets={supportStats.openTickets}
        inProgressTickets={
          supportStats.inProgressTickets
        }
        resolvedTickets={
          supportStats.resolvedTickets
        }
        closedTickets={
          supportStats.closedTickets
        }
        urgentTickets={
          supportStats.urgentTickets
        }
        averageResponseTime={
          supportStats.averageResponseTime
        }
        customerSatisfaction={
          supportStats.customerSatisfaction
        }
      />
            <SupportToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        priority={priority}
        onPriorityChange={setPriority}
        category={category}
        onCategoryChange={setCategory}
        assignedTo={assignedTo}
        onAssignedToChange={setAssignedTo}
        view={view}
        onViewChange={setView}
        onRefresh={handleRefresh}
      />

      {filteredTickets.length === 0 ? (

        <EmptySupport
          onResetFilters={handleResetFilters}
        />

      ) : view === "grid" ? (

        <SupportGrid
          tickets={filteredTickets}
          onView={handleView}
          onReply={handleReply}
          onClose={handleClose}
        />

      ) : (

        <SupportTable
          tickets={filteredTickets}
          onView={handleView}
          onReply={handleReply}
          onClose={handleClose}
        />

      )}
            <SupportDetailsDialog
        open={detailsOpen}
        ticket={selectedTicket}
        onOpenChange={setDetailsOpen}
      />

      <ReplyTicketDialog
        open={replyOpen}
        ticket={selectedTicket}
        onReply={handleReplyConfirm}
        onOpenChange={setReplyOpen}
      />

      <CloseTicketDialog
        open={closeOpen}
        ticket={selectedTicket}
        onClose={handleCloseConfirm}
        onOpenChange={setCloseOpen}
      />
          </div>
  );
}