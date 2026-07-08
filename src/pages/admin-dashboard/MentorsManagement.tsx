import { useMemo, useState } from "react";

import MentorsHeader from "@/components/admin-dashboard/mentors/MentorsHeader";
import MentorsStats from "@/components/admin-dashboard/mentors/MentorsStats";
import MentorsToolbar from "@/components/admin-dashboard/mentors/MentorsToolbar";
import MentorsGrid from "@/components/admin-dashboard/mentors/MentorsGrid";
import MentorsTable from "@/components/admin-dashboard/mentors/MentorsTable";
import MentorsEmptyState from "@/components/admin-dashboard/mentors/MentorsEmptyState";
import MentorsPagination from "@/components/admin-dashboard/mentors/MentorsPagination";

import MentorProfileDrawer from "@/components/admin-dashboard/mentors/MentorProfileDrawer";

import ApproveMentorDialog from "@/components/admin-dashboard/mentors/ApproveMentorDialog";

import RejectMentorDialog from "@/components/admin-dashboard/mentors/RejectMentorDialog";

import VerificationDialog from "@/components/admin-dashboard/mentors/VerificationDialog";

import {
  mentors,
  mentorStats,
} from "@/data/admin-mentors";

import type { AdminMentor } from "@/types/admin-mentors";

const PAGE_SIZE = 6;

export default function MentorsManagement() {
      const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [page, setPage] =
    useState(1);

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [
    verificationFilter,
    setVerificationFilter,
  ] = useState("all");

  const [
    expertiseFilter,
    setExpertiseFilter,
  ] = useState("all");

  const [ratingFilter, setRatingFilter] =
    useState("all");

  const [
    selectedMentor,
    setSelectedMentor,
  ] =
    useState<AdminMentor | null>(
      null
    );

  const [
    drawerOpen,
    setDrawerOpen,
  ] = useState(false);

  const [
    approveOpen,
    setApproveOpen,
  ] = useState(false);

  const [
    rejectOpen,
    setRejectOpen,
  ] = useState(false);

  const [
    verificationOpen,
    setVerificationOpen,
  ] = useState(false);
    const filteredMentors =
    useMemo(() => {
      const keyword =
        search.toLowerCase();

      return mentors.filter(
        (mentor) => {
          const matchesSearch =
            mentor.name
              .toLowerCase()
              .includes(keyword) ||
            mentor.email
              .toLowerCase()
              .includes(keyword) ||
            mentor.username
              .toLowerCase()
              .includes(keyword);

          const matchesStatus =
            statusFilter === "all" ||
            mentor.status ===
              statusFilter;

          const matchesVerification =
            verificationFilter ===
              "all" ||
            mentor.verification ===
              verificationFilter;

          const matchesExpertise =
            expertiseFilter ===
              "all" ||
            mentor.skills.some(
              (skill) =>
                skill.name
                  .toLowerCase()
                  .includes(
                    expertiseFilter.toLowerCase()
                  )
            );

          const matchesRating =
            ratingFilter === "all" ||
            mentor.rating >=
              Number(ratingFilter);

          return (
            matchesSearch &&
            matchesStatus &&
            matchesVerification &&
            matchesExpertise &&
            matchesRating
          );
        }
      );
    }, [
      search,
      statusFilter,
      verificationFilter,
      expertiseFilter,
      ratingFilter,
    ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredMentors.length /
        PAGE_SIZE
    )
  );

  const paginatedMentors =
    filteredMentors.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE
    );
      function handleView(mentor: AdminMentor) {
    setSelectedMentor(mentor);
    setDrawerOpen(true);
  }

  function handleApprove(mentor: AdminMentor) {
    setSelectedMentor(mentor);
    setApproveOpen(true);
  }

  function handleReject(mentor: AdminMentor) {
    setSelectedMentor(mentor);
    setRejectOpen(true);
  }

  function handleVerify(mentor: AdminMentor) {
    setSelectedMentor(mentor);
    setVerificationOpen(true);
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <MentorsHeader
        totalMentors={filteredMentors.length}
        verifiedMentors={
          filteredMentors.filter(
            (mentor) =>
              mentor.verification === "verified"
          ).length
        }
        onAddMentor={() => {
          // TODO
        }}
        onExport={() => {
          // TODO
        }}
      />

      {/* Stats */}

      <MentorsStats stats={mentorStats} />

      {/* Toolbar */}

      <MentorsToolbar
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        status={statusFilter}
        onStatusChange={(value) => {
          setStatusFilter(value);
          setPage(1);
        }}
        verification={verificationFilter}
        onVerificationChange={(value) => {
          setVerificationFilter(value);
          setPage(1);
        }}
        expertise={expertiseFilter}
        onExpertiseChange={(value) => {
          setExpertiseFilter(value);
          setPage(1);
        }}
        rating={ratingFilter}
        onRatingChange={(value) => {
          setRatingFilter(value);
          setPage(1);
        }}
        view={view}
        onViewChange={setView}
        onRefresh={() => {}}
      />

      {/* Empty */}

      {filteredMentors.length === 0 ? (
        <MentorsEmptyState
          onAddMentor={() => {}}
          onResetFilters={() => {
            setSearch("");
            setStatusFilter("all");
            setVerificationFilter("all");
            setExpertiseFilter("all");
            setRatingFilter("all");
            setPage(1);
          }}
        />
      ) : (
        <>
          {/* Grid */}

          {view === "grid" && (
            <MentorsGrid
              mentors={paginatedMentors}
              onView={handleView}
              onApprove={handleApprove}
              onReject={handleReject}
              onVerify={handleVerify}
            />
          )}

          {/* Table */}

          {view === "list" && (
            <MentorsTable
              mentors={paginatedMentors}
              onView={handleView}
              onApprove={handleApprove}
              onReject={handleReject}
              onVerify={handleVerify}
            />
          )}

          {/* Pagination */}

          <MentorsPagination
            currentPage={page}
            totalPages={totalPages}
            totalItems={filteredMentors.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </>
      )}

      {/* Drawer */}

      <MentorProfileDrawer
        open={drawerOpen}
        mentor={selectedMentor}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedMentor(null);
        }}
      />

      {/* Approve */}

      <ApproveMentorDialog
        open={approveOpen}
        mentor={selectedMentor}
        onOpenChange={(open) => {
          setApproveOpen(open);

          if (!open) {
            setSelectedMentor(null);
          }
        }}
        onConfirm={(
          mentor,
          notes,
          notify
        ) => {
          console.log({
            mentor,
            notes,
            notify,
          });

          setApproveOpen(false);
          setSelectedMentor(null);
        }}
      />

      {/* Reject */}

      <RejectMentorDialog
        open={rejectOpen}
        mentor={selectedMentor}
        onOpenChange={(open) => {
          setRejectOpen(open);

          if (!open) {
            setSelectedMentor(null);
          }
        }}
        onConfirm={(
          mentor,
          reason,
          notes,
          notify
        ) => {
          console.log({
            mentor,
            reason,
            notes,
            notify,
          });

          setRejectOpen(false);
          setSelectedMentor(null);
        }}
      />

      {/* Verification */}

      <VerificationDialog
        open={verificationOpen}
        mentor={selectedMentor}
        onOpenChange={(open) => {
          setVerificationOpen(open);

          if (!open) {
            setSelectedMentor(null);
          }
        }}
        onConfirm={(
          mentor,
          status,
          remarks,
          notify
        ) => {
          console.log({
            mentor,
            status,
            remarks,
            notify,
          });

          setVerificationOpen(false);
          setSelectedMentor(null);
        }}
      />

    </div>
  );
}