import {
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";

import {
  adminEvents,
  eventStats,
  eventStatusOptions,
  eventCategoryOptions,
  mentorOptions,
  eventTypeOptions,
} from "@/data/admin-events";

import type {
  AdminEvent,
} from "@/types/admin-events";

import EventsHeader from "@/components/admin-dashboard/events/EventsHeader";
import EventsStats from "@/components/admin-dashboard/events/EventsStats";
import EventsToolbar from "@/components/admin-dashboard/events/EventsToolbar";
import EventsGrid from "@/components/admin-dashboard/events/EventsGrid";
import EventsTable from "@/components/admin-dashboard/events/EventsTable";
import EventsPagination from "@/components/admin-dashboard/events/EventsPagination";
import EventsEmptyState from "@/components/admin-dashboard/events/EventsEmptyState";

import EventDetailsDrawer from "@/components/admin-dashboard/events/EventDetailsDrawer";

import CreateEventDialog from "@/components/admin-dashboard/events/CreateEventDialog";

import EditEventDialog from "@/components/admin-dashboard/events/EditEventDialog";

import DeleteEventDialog from "@/components/admin-dashboard/events/DeleteEventDialog";

import PublishEventDialog from "@/components/admin-dashboard/events/PublishEventDialog";

import CancelEventDialog from "@/components/admin-dashboard/events/CancelEventDialog";

const PAGE_SIZE = 8;

const EventsManagement = () => {

  /* =====================================================
     States
  ===================================================== */

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [categoryFilter, setCategoryFilter] =
    useState("all");

  const [mentorFilter, setMentorFilter] =
    useState("all");

  const [typeFilter, setTypeFilter] =
    useState("all");

  const [dateFilter, setDateFilter] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [page, setPage] =
    useState(1);

  /* =====================================================
     Selected Event
  ===================================================== */

  const [selectedEvent, setSelectedEvent] =
    useState<AdminEvent | null>(
      null
    );

  /* =====================================================
     Drawer
  ===================================================== */

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  /* =====================================================
     Dialogs
  ===================================================== */

  const [createOpen, setCreateOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [publishOpen, setPublishOpen] =
    useState(false);

  const [cancelOpen, setCancelOpen] =
    useState(false);

  /* =====================================================
     Loading
  ===================================================== */

  const [loading, setLoading] =
    useState(false);
      /* =====================================================
     Filtering
  ===================================================== */

  const filteredEvents = useMemo(() => {
    return adminEvents.filter((event) => {
      const keyword = search.toLowerCase().trim();

      const matchesSearch =
        keyword === "" ||
        event.title.toLowerCase().includes(keyword) ||
        event.mentorName
          .toLowerCase()
          .includes(keyword) ||
        event.category
          .toLowerCase()
          .includes(keyword);

      const matchesStatus =
        statusFilter === "all" ||
        event.status === statusFilter;

      const matchesCategory =
        categoryFilter === "all" ||
        event.category === categoryFilter;

      const matchesMentor =
        mentorFilter === "all" ||
        event.mentorName === mentorFilter;

      const matchesType =
        typeFilter === "all" ||
        event.type === typeFilter;

      const matchesDate =
        dateFilter === "" ||
        event.date === dateFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesMentor &&
        matchesType &&
        matchesDate
      );
    });
  }, [
    search,
    statusFilter,
    categoryFilter,
    mentorFilter,
    typeFilter,
    dateFilter,
  ]);

  /* =====================================================
     Pagination
  ===================================================== */

  const totalPages = useMemo(
    () =>
      Math.max(
        1,
        Math.ceil(
          filteredEvents.length /
            PAGE_SIZE
        )
      ),
    [filteredEvents]
  );

  const paginatedEvents = useMemo(() => {
    const start =
      (page - 1) * PAGE_SIZE;

    return filteredEvents.slice(
      start,
      start + PAGE_SIZE
    );
  }, [
    filteredEvents,
    page,
  ]);

  /* =====================================================
     Reset Page
  ===================================================== */

  useMemo(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  /* =====================================================
     Handlers
  ===================================================== */

  const handleView = useCallback(
    (event: AdminEvent) => {
      setSelectedEvent(event);
      setDrawerOpen(true);
    },
    []
  );

  const handleEdit = useCallback(
    (event: AdminEvent) => {
      setSelectedEvent(event);
      setEditOpen(true);
    },
    []
  );

  const handleDelete =
    useCallback(
      (event: AdminEvent) => {
        setSelectedEvent(event);
        setDeleteOpen(true);
      },
      []
    );

  const handlePublish =
    useCallback(
      (event: AdminEvent) => {
        setSelectedEvent(event);
        setPublishOpen(true);
      },
      []
    );

  const handleCancel =
    useCallback(
      (event: AdminEvent) => {
        setSelectedEvent(event);
        setCancelOpen(true);
      },
      []
    );

  const handleRefresh =
    useCallback(() => {
      /**
       * TODO
       * Fetch Events API
       */

      console.log(
        "Refresh Events"
      );
    }, []);

  const handleExport =
    useCallback(() => {
      /**
       * TODO
       * Export CSV / Excel
       */

      console.log(
        "Export Events"
      );
    }, []);
      /* =====================================================
     Render
  ===================================================== */

  return (

    <div className="space-y-8">

      {/* Header */}

      <EventsHeader
        totalEvents={adminEvents.length}
        liveEvents={
          eventStats.live
        }
        upcomingEvents={
          eventStats.upcoming
        }
        onAddEvent={() =>
          setCreateOpen(true)
        }
        onExport={handleExport}
      />

      {/* Stats */}

      <EventsStats
  total={eventStats.total}
  upcoming={eventStats.upcoming}
  live={eventStats.live}
  completed={eventStats.completed}
  cancelled={eventStats.cancelled}
  registrations={eventStats.registrations}
/>

      {/* Toolbar */}

      <EventsToolbar
  search={search}
  onSearchChange={setSearch}

  status={statusFilter}
  onStatusChange={setStatusFilter}

  category={categoryFilter}
  onCategoryChange={setCategoryFilter}

  mentor={mentorFilter}
  onMentorChange={setMentorFilter}

  eventType={typeFilter}
  onEventTypeChange={setTypeFilter}

  date={dateFilter}
  onDateChange={setDateFilter}

  statusOptions={eventStatusOptions}
  categoryOptions={eventCategoryOptions}
  mentorOptions={mentorOptions}
  eventTypeOptions={eventTypeOptions}

  view={view}
  onViewChange={setView}

  onRefresh={handleRefresh}
/>

      {/* Results */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">

            Events

          </h2>

          <p className="mt-1 text-sm text-muted-foreground">

            Showing{" "}

            <span className="font-semibold text-foreground">

              {paginatedEvents.length}

            </span>

            {" "}of{" "}

            <span className="font-semibold text-foreground">

              {filteredEvents.length}

            </span>

            {" "}events

          </p>

        </div>

      </div>
            {/* Content */}

      {filteredEvents.length === 0 ? (

        <EventsEmptyState
  search={search}
  activeFilters={[
    statusFilter !== "all",
    categoryFilter !== "all",
    mentorFilter !== "all",
    typeFilter !== "all",
    dateFilter !== "",
  ].filter(Boolean).length}
  loading={loading}
  onCreate={() => setCreateOpen(true)}
  onRefresh={handleRefresh}
  onResetFilters={() => {
    setSearch("");
    setStatusFilter("all");
    setCategoryFilter("all");
    setMentorFilter("all");
    setTypeFilter("all");
    setDateFilter("");
  }}
  onImport={() => {
    // TODO: Import Events
    console.log("Import Events");
  }}
  onDocumentation={() => {
    // TODO: Open Documentation
    console.log("Open Documentation");
  }}
/>

      ) : view === "grid" ? (

        <EventsGrid
          events={paginatedEvents}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPublish={handlePublish}
          onCancel={handleCancel}
        />

      ) : (

        <EventsTable
          events={paginatedEvents}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPublish={handlePublish}
          onCancel={handleCancel}
        />

      )}

      {/* Pagination */}

      {filteredEvents.length > 0 && (

        <EventsPagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={filteredEvents.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />

      )}
            {/* =====================================================
          Drawers
      ===================================================== */}

      <EventDetailsDrawer
        open={drawerOpen}
        event={selectedEvent}
        onOpenChange={setDrawerOpen}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onPublish={handlePublish}
        onCancel={handleCancel}
      />

      {/* =====================================================
          Create Dialog
      ===================================================== */}

      <CreateEventDialog
        open={createOpen}
        loading={loading}
        onOpenChange={setCreateOpen}
        onSubmit={() => {
          /**
           * TODO
           * Create Event API
           */

          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setCreateOpen(false);
          }, 1000);
        }}
      />

      {/* =====================================================
          Edit Dialog
      ===================================================== */}

      <EditEventDialog
        open={editOpen}
        event={selectedEvent}
        loading={loading}
        onOpenChange={setEditOpen}
        onSubmit={() => {
          /**
           * TODO
           * Update Event API
           */

          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setEditOpen(false);
          }, 1000);
        }}
      />

      {/* =====================================================
          Delete Dialog
      ===================================================== */}

      <DeleteEventDialog
        open={deleteOpen}
        event={selectedEvent}
        loading={loading}
        onOpenChange={setDeleteOpen}
        onConfirm={() => {
          /**
           * TODO
           * Delete Event API
           */

          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setDeleteOpen(false);
          }, 1000);
        }}
      />

      {/* =====================================================
          Publish Dialog
      ===================================================== */}

      <PublishEventDialog
        open={publishOpen}
        event={selectedEvent}
        loading={loading}
        onOpenChange={setPublishOpen}
        onConfirm={() => {
          /**
           * TODO
           * Publish Event API
           */

          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setPublishOpen(false);
          }, 1000);
        }}
      />

      {/* =====================================================
          Cancel Dialog
      ===================================================== */}

      <CancelEventDialog
        open={cancelOpen}
        event={selectedEvent}
        loading={loading}
        onOpenChange={setCancelOpen}
        onConfirm={() => {
          /**
           * TODO
           * Cancel Event API
           */

          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            setCancelOpen(false);
          }, 1000);
        }}
      />
            {/* =====================================================
          Backend Integration Notes

          TODO

          - Get Events API
          - Create Event API
          - Update Event API
          - Delete Event API
          - Publish Event API
          - Cancel Event API

          - Search API
          - Filter API
          - Pagination API

          - Export CSV
          - Export Excel
          - Bulk Delete
          - Bulk Publish
          - Bulk Cancel

          - Activity Logs
          - Notifications
          - Audit Trail

          ===================================================== */}

    </div>

  );

};

export default memo(EventsManagement);