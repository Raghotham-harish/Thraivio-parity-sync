import { useMemo, useState } from "react";

import { adminSessions } from "@/data/admin-sessions";

import type {
  AdminSession,
} from "@/types/admin-session";

import SessionsHeader from "@/components/admin-dashboard/sessions/SessionsHeader";
import SessionsStats from "@/components/admin-dashboard/sessions/SessionsStats";
import SessionsToolbar from "@/components/admin-dashboard/sessions/SessionsToolbar";

import SessionsGrid from "@/components/admin-dashboard/sessions/SessionsGrid";
import SessionsTable from "@/components/admin-dashboard/sessions/SessionsTable";

import SessionsEmptyState from "@/components/admin-dashboard/sessions/SessionsEmptyState";
import SessionsPagination from "@/components/admin-dashboard/sessions/SessionsPagination";

import SessionDetailsDrawer from "@/components/admin-dashboard/sessions/SessionDetailsDrawer";

import CreateSessionDialog from "@/components/admin-dashboard/sessions/CreateSessionDialog";
import EditSessionDialog from "@/components/admin-dashboard/sessions/EditSessionDialog";
import CompleteSessionDialog from "@/components/admin-dashboard/sessions/CompleteSessionDialog";
import CancelSessionDialog from "@/components/admin-dashboard/sessions/CancelSessionDialog";
import DeleteSessionDialog from "@/components/admin-dashboard/sessions/DeleteSessionDialog";
import AttendanceDialog from "@/components/admin-dashboard/sessions/AttendanceDialog";
import RefundDialog from "@/components/admin-dashboard/sessions/RefundDialog";
import AssignMentorDialog from "@/components/admin-dashboard/sessions/AssignMentorDialog";
import CertificateDialog from "@/components/admin-dashboard/sessions/CertificateDialog";

const PAGE_SIZE = 9;

const SessionsManagement = () => {
      /* ---------------------------------- */
  /* Main State                         */
  /* ---------------------------------- */

  const [sessions, setSessions] =
    useState<AdminSession[]>(adminSessions);

  /* ---------------------------------- */
  /* Search                             */
  /* ---------------------------------- */

  const [search, setSearch] =
    useState("");

  /* ---------------------------------- */
  /* Filters                            */
  /* ---------------------------------- */

  const [
    selectedStatus,
    setSelectedStatus,
  ] = useState("All");

  const [
    selectedPlatform,
    setSelectedPlatform,
  ] = useState("All Platforms");

  /* ---------------------------------- */
  /* View                               */
  /* ---------------------------------- */

  const [
    view,
    setView,
  ] = useState<"grid" | "list">(
    "grid"
  );

  /* ---------------------------------- */
  /* Pagination                         */
  /* ---------------------------------- */

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);
    /* ---------------------------------- */
  /* Selected Session                   */
  /* ---------------------------------- */

  const [
    selectedSession,
    setSelectedSession,
  ] =
    useState<AdminSession | null>(
      null
    );

  /* ---------------------------------- */
  /* Dialogs                            */
  /* ---------------------------------- */

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    createOpen,
    setCreateOpen,
  ] = useState(false);

  const [
    editOpen,
    setEditOpen,
  ] = useState(false);

  const [
    completeOpen,
    setCompleteOpen,
  ] = useState(false);

  const [
    cancelOpen,
    setCancelOpen,
  ] = useState(false);

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);

  const [
    attendanceOpen,
    setAttendanceOpen,
  ] = useState(false);

  const [
    refundOpen,
    setRefundOpen,
  ] = useState(false);

  const [
    assignMentorOpen,
    setAssignMentorOpen,
  ] = useState(false);

  const [
    certificateOpen,
    setCertificateOpen,
  ] = useState(false);
    /* ---------------------------------- */
  /* Filtered Sessions                  */
  /* ---------------------------------- */

  const filteredSessions = useMemo(() => {

    let data = [...sessions];

    /* Search */

    if (search.trim()) {

      const keyword =
        search.toLowerCase();

      data = data.filter((item) =>

        item.programTitle
          .toLowerCase()
          .includes(keyword)

        ||

        item.studentName
          .toLowerCase()
          .includes(keyword)

        ||

        item.studentEmail
          .toLowerCase()
          .includes(keyword)

        ||

        item.mentorName
          .toLowerCase()
          .includes(keyword)

        ||

        item.bookingReference
          .toLowerCase()
          .includes(keyword)

      );

    }

    /* Status */

    if (selectedStatus !== "All") {

      data = data.filter(
        (item) =>
          item.status ===
          selectedStatus.toLowerCase()
      );

    }

    /* Platform */

    if (
      selectedPlatform !==
      "All Platforms"
    ) {

      data = data.filter(
        (item) =>
          item.meetingPlatform ===
          selectedPlatform
      );

    }

    return data;

  }, [

    sessions,

    search,

    selectedStatus,

    selectedPlatform,

  ]);

  /* ---------------------------------- */
  /* Statistics                         */
  /* ---------------------------------- */

  const scheduledSessions =
    filteredSessions.filter(
      (item) =>
        item.status ===
        "scheduled"
    ).length;

  const liveSessions =
    filteredSessions.filter(
      (item) =>
        item.status ===
        "live"
    ).length;

  const completedSessions =
    filteredSessions.filter(
      (item) =>
        item.status ===
        "completed"
    ).length;

  const cancelledSessions =
    filteredSessions.filter(
      (item) =>
        item.status ===
        "cancelled"
    ).length;

  const todaySessions =
    filteredSessions.filter(
      (item) =>
        item.status ===
          "scheduled" ||

        item.status ===
          "live"
    ).length;

  const totalRevenue =
    filteredSessions.reduce(

      (total, session) =>

        total + session.amount,

      0

    );
      /* ---------------------------------- */
  /* Pagination                         */
  /* ---------------------------------- */

  const totalPages =
    Math.max(

      1,

      Math.ceil(

        filteredSessions.length /

        PAGE_SIZE

      )

    );

  const paginatedSessions =
    filteredSessions.slice(

      (currentPage - 1) *
        PAGE_SIZE,

      currentPage *
        PAGE_SIZE

    );

  /* ---------------------------------- */
  /* Empty State                        */
  /* ---------------------------------- */

  const hasFilters =

    search.trim() !== "" ||

    selectedStatus !== "All" ||

    selectedPlatform !==
      "All Platforms";
        /* ---------------------------------- */
  /* Session Actions                    */
  /* ---------------------------------- */

  const openDetails = (
    session: AdminSession
  ) => {

    setSelectedSession(session);

    setDetailsOpen(true);

  };

  const openEdit = (
    session: AdminSession
  ) => {

    setSelectedSession(session);

    setEditOpen(true);

  };

  const openComplete = (
    session: AdminSession
  ) => {

    setSelectedSession(session);

    setCompleteOpen(true);

  };

  const openCancel = (
    session: AdminSession
  ) => {

    setSelectedSession(session);

    setCancelOpen(true);

  };

  const openDelete = (
    session: AdminSession
  ) => {

    setSelectedSession(session);

    setDeleteOpen(true);

  };

  

  /* ---------------------------------- */
  /* Toolbar Actions                    */
  /* ---------------------------------- */

  const resetFilters = () => {

    setSearch("");

    setSelectedStatus("All");

    setSelectedPlatform(
      "All Platforms"
    );

    setCurrentPage(1);

  };

  const handleExport = () => {

    console.log(
      "Export Sessions"
    );

  };
    /* ---------------------------------- */
  /* Render                             */
  /* ---------------------------------- */

  return (

    <div className="space-y-8">

      {/* ---------------------------------- */}
      {/* Header                             */}
      {/* ---------------------------------- */}

      <SessionsHeader

        totalSessions={
          sessions.length
        }

        liveSessions={
          liveSessions
        }

        todaySessions={
          todaySessions
        }

        onCreateSession={() =>
          setCreateOpen(true)
        }

      />

      {/* ---------------------------------- */}
      {/* Stats                              */}
      {/* ---------------------------------- */}

      <SessionsStats

        scheduledSessions={
          scheduledSessions
        }

        liveSessions={
          liveSessions
        }

        completedSessions={
          completedSessions
        }

        cancelledSessions={
          cancelledSessions
        }

        totalRevenue={
          totalRevenue
        }

      />

      {/* ---------------------------------- */}
      {/* Toolbar                            */}
      {/* ---------------------------------- */}

      <SessionsToolbar

        search={search}

        setSearch={setSearch}

        view={view}

        setView={setView}

        selectedStatus={
          selectedStatus
        }

        setSelectedStatus={
          setSelectedStatus
        }

        selectedPlatform={
          selectedPlatform
        }

        setSelectedPlatform={
          setSelectedPlatform
        }

        onCreateSession={() =>
          setCreateOpen(true)
        }

        onExport={
          handleExport
        }

      />
            {/* ---------------------------------- */}
      {/* Empty State                        */}
      {/* ---------------------------------- */}

      {filteredSessions.length === 0 ? (

        <SessionsEmptyState

          hasFilters={
            hasFilters
          }

          onCreate={() =>
            setCreateOpen(true)
          }

          onReset={
            resetFilters
          }

        />

      ) : (

        <>
                  {/* ---------------------------------- */}
          {/* Sessions View                      */}
          {/* ---------------------------------- */}

          {view === "grid" ? (

            <SessionsGrid

              sessions={
                paginatedSessions
              }

              onView={
                openDetails
              }

              onEdit={
                openEdit
              }

              onComplete={
                openComplete
              }

              onCancel={
                openCancel
              }

              onDelete={
                openDelete
              }

            />

          ) : (

            <SessionsTable

              sessions={
                paginatedSessions
              }

              onView={
                openDetails
              }

              onEdit={
                openEdit
              }

              onComplete={
                openComplete
              }

              onCancel={
                openCancel
              }

              onDelete={
                openDelete
              }

            />

          )}

          {/* ---------------------------------- */}
          {/* Pagination                         */}
          {/* ---------------------------------- */}

          <SessionsPagination

            page={
              currentPage
            }

            totalPages={
              totalPages
            }

            totalItems={
              filteredSessions.length
            }

            pageSize={
              PAGE_SIZE
            }

            onPageChange={
              setCurrentPage
            }

          />

        </>

      )}
            {/* ---------------------------------- */}
      {/* Session Details Drawer             */}
      {/* ---------------------------------- */}

      <SessionDetailsDrawer
  open={detailsOpen}
  session={selectedSession}
  onClose={() => {
    setDetailsOpen(false);
    setSelectedSession(null);
  }}
  onEdit={(session) => {
    setDetailsOpen(false);
    openEdit(session);
  }}
  onComplete={(session) => {
    setDetailsOpen(false);
    openComplete(session);
  }}
  onCancel={(session) => {
    setDetailsOpen(false);
    openCancel(session);
  }}
/>

      {/* ---------------------------------- */}
      {/* Create Session                     */}
      {/* ---------------------------------- */}

      <CreateSessionDialog
        open={createOpen}
        onClose={() => {
          setCreateOpen(false);
        }}
        onCreate={(newSession) => {

          const session: AdminSession = {
            ...newSession,
            id: `SES-${Date.now()}`,
            mentorId: 0,
            mentorName: "",
            mentorImage: "",
            mentorRole: "",
            mentorCompany: "",
            mentorEmail: "",

            studentId: "",
            studentName: "",
            studentImage: "",
            studentEmail: "",

            programId: "",
            programTitle: "",
            sessionType: "",

            date: "",
            time: "",
            duration: "",
            timezone: "",

            meetingPlatform:
              "Google Meet",

            meetingLink: "",

            status: "scheduled",

            attendance: "waiting",

            paymentStatus:
              "pending",

            refundStatus:
              "none",

            amount: 0,

            refundAmount: 0,

            certificateIssued:
              false,

            bookingReference: "",

            bookedAt: "",

            createdAt:
              new Date().toISOString(),

            updatedAt:
              new Date().toISOString(),
          };

          setSessions((prev) => [
            session,
            ...prev,
          ]);

          setCreateOpen(false);

        }}
      />

      {/* ---------------------------------- */}
      {/* Edit Session                       */}
      {/* ---------------------------------- */}

      <EditSessionDialog
        open={editOpen}
        session={selectedSession}
        onClose={() => {
          setEditOpen(false);
          setSelectedSession(null);
        }}
        onUpdate={(updatedSession) => {

          setSessions((prev) =>
            prev.map((item) =>
              item.id ===
              updatedSession.id
                ? updatedSession
                : item
            )
          );

          setEditOpen(false);

          setSelectedSession(null);

        }}
      />

      {/* ---------------------------------- */}
      {/* Complete Session                   */}
      {/* ---------------------------------- */}

      <CompleteSessionDialog
        open={completeOpen}
        session={selectedSession}
        onClose={() => {
          setCompleteOpen(false);
          setSelectedSession(null);
        }}
        onComplete={(updatedSession) => {

          setSessions((prev) =>
            prev.map((item) =>
              item.id ===
              updatedSession.id
                ? updatedSession
                : item
            )
          );

          setCompleteOpen(false);

          setSelectedSession(null);

        }}
      />

      {/* ---------------------------------- */}
      {/* Cancel Session                     */}
      {/* ---------------------------------- */}

      <CancelSessionDialog
        open={cancelOpen}
        session={selectedSession}
        onClose={() => {
          setCancelOpen(false);
          setSelectedSession(null);
        }}
        onCancel={(updatedSession) => {

          setSessions((prev) =>
            prev.map((item) =>
              item.id ===
              updatedSession.id
                ? updatedSession
                : item
            )
          );

          setCancelOpen(false);

          setSelectedSession(null);

        }}
      />
            {/* ---------------------------------- */}
      {/* Delete Session                     */}
      {/* ---------------------------------- */}

      <DeleteSessionDialog
        open={deleteOpen}
        session={selectedSession}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedSession(null);
        }}
        onDelete={(sessionId) => {

          setSessions((prev) =>
            prev.filter(
              (item) =>
                item.id !== sessionId
            )
          );

          setDeleteOpen(false);

          setSelectedSession(null);

        }}
      />

      {/* ---------------------------------- */}
      {/* Attendance                         */}
      {/* ---------------------------------- */}

      <AttendanceDialog
        open={attendanceOpen}
        session={selectedSession}
        onClose={() => {
          setAttendanceOpen(false);
          setSelectedSession(null);
        }}
        onSave={(updatedSession) => {

          setSessions((prev) =>
            prev.map((item) =>
              item.id ===
              updatedSession.id
                ? updatedSession
                : item
            )
          );

          setAttendanceOpen(false);

          setSelectedSession(null);

        }}
      />

      {/* ---------------------------------- */}
      {/* Refund                             */}
      {/* ---------------------------------- */}

      <RefundDialog
        open={refundOpen}
        session={selectedSession}
        onClose={() => {
          setRefundOpen(false);
          setSelectedSession(null);
        }}
        onRefund={(updatedSession) => {

          setSessions((prev) =>
            prev.map((item) =>
              item.id ===
              updatedSession.id
                ? updatedSession
                : item
            )
          );

          setRefundOpen(false);

          setSelectedSession(null);

        }}
      />

      {/* ---------------------------------- */}
      {/* Assign Mentor                      */}
      {/* ---------------------------------- */}

      <AssignMentorDialog
        open={assignMentorOpen}
        session={selectedSession}
        onClose={() => {
          setAssignMentorOpen(false);
          setSelectedSession(null);
        }}
        onAssign={(
          sessionId,
          mentor
        ) => {

          setSessions((prev) =>
            prev.map((item) =>

              item.id === sessionId

                ? {
                    ...item,

                    mentorId:
                      mentor.id,

                    mentorName:
                      mentor.name,

                    mentorImage:
                      mentor.image,

                    mentorRole:
                      mentor.role,

                    mentorCompany:
                      mentor.company,
                  }

                : item

            )
          );

          setAssignMentorOpen(false);

          setSelectedSession(null);

        }}
      />

      {/* ---------------------------------- */}
      {/* Certificate                        */}
      {/* ---------------------------------- */}

      <CertificateDialog
        open={certificateOpen}
        session={selectedSession}
        onClose={() => {
          setCertificateOpen(false);
          setSelectedSession(null);
        }}
        onIssue={(updatedSession) => {

          setSessions((prev) =>
            prev.map((item) =>
              item.id ===
              updatedSession.id
                ? updatedSession
                : item
            )
          );

          setCertificateOpen(false);

          setSelectedSession(null);

        }}
      />

    </div>

  );

};

export default SessionsManagement;