import { useCallback, useEffect, useMemo, useState } from "react";

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
  getMentors,
  getMentorDashboardStats,
  verifyMentor,
  rejectMentor,
  blockMentor,
  featureMentor,
  unfeatureMentor,
  activateMentor,
  deactivateMentor,
  unblockMentor,
  publishMentor,
  unpublishMentor,
  softDeleteMentor,
  restoreMentor,
  type MentorApiResponse,
} from "@/services/mentor.service";

import type { AdminMentor } from "@/types/admin-mentors";

const PAGE_SIZE = 6;

function mapMentorToAdminMentor(
  mentor: MentorApiResponse
): AdminMentor {
  return {
    id: mentor.id,
    name: mentor.company || "Mentor",
    username: mentor.slug,
    email: "",
    avatar: "",
    coverImage: "",
    headline: mentor.headline || "",
    bio: mentor.about || "",
    location: "",
    timezone: "",
    experience: mentor.experience || 0,
    rating: mentor.averageRating || 0,
    totalReviews: mentor.totalReviews || 0,
    completedSessions: mentor.totalSessions || 0,
    activePrograms: 0,
    earnings: 0,
    hourlyRate: mentor.pricing?.mentorshipCall || 0,
    membership: "free",
    status:
      mentor.status === "blocked"
        ? "suspended"
        : mentor.status === "pending"
          ? "pending"
          : "active",
    verification:
      mentor.verificationStatus === "verified"
        ? "verified"
        : mentor.verificationStatus === "rejected"
          ? "rejected"
          : "pending",
    featured: mentor.featured,
    published: !!mentor.publishedAt,
    available: mentor.acceptingBookings ?? false,
joinedAt: mentor.createdAt ?? "",
    lastActive: mentor.lastActiveAt || "",
    skills: (mentor.skills || []).map(
      (skill, index) => ({
        id: `${mentor.id}-skill-${index}`,
        name: skill,
      })
    ),
    languages: (mentor.languages || []).map(
      (language, index) => ({
        id: `${mentor.id}-language-${index}`,
        name: language,
      })
    ),
    certifications: [],
  };
}

export default function MentorsManagement() {
  const [mentors, setMentors] = useState<AdminMentor[]>(
    []
  );

  const [search, setSearch] = useState("");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [page, setPage] = useState(1);

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
  ] = useState<AdminMentor | null>(null);

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

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [dashboardStats, setDashboardStats] =
  useState({
    totalMentors: 0,
    activeMentors: 0,
    pendingApprovals: 0,
    verifiedMentors: 0,
    suspendedMentors: 0,
    featuredMentors: 0,
  });

  const loadMentors = useCallback(
    async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getMentors({
          page: 1,
          limit: 100,
        });

        const apiMentors =
          response.data?.mentors || [];

        setMentors(
          apiMentors.map(mapMentorToAdminMentor)
        );

        const statsResponse = await getMentorDashboardStats();

const apiStats = statsResponse.data;

setDashboardStats({
  totalMentors: apiStats?.totalMentors ?? 0,
  activeMentors: apiStats?.activeMentors ?? 0,
  pendingApprovals: apiStats?.pendingVerification ?? 0,
  verifiedMentors: apiStats?.verifiedMentors ?? 0,
  suspendedMentors: apiStats?.blockedMentors ?? 0,
  featuredMentors: apiStats?.featuredMentors ?? 0,
});

      } catch (err) {
        console.error(
          "Failed to load mentors:",
          err
        );

        setError(
          "Failed to load mentors. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadMentors();
  }, [loadMentors]);

  const filteredMentors =
    useMemo(() => {
      const keyword =
        search.trim().toLowerCase();

      return mentors.filter((mentor) => {
        const matchesSearch =
          !keyword ||
          mentor.name
            .toLowerCase()
            .includes(keyword) ||
          mentor.email
            .toLowerCase()
            .includes(keyword) ||
          mentor.username
            .toLowerCase()
            .includes(keyword) ||
          mentor.headline
            .toLowerCase()
            .includes(keyword) ||
          mentor.skills.some((skill) =>
            skill.name
              .toLowerCase()
              .includes(keyword)
          );

        const matchesStatus =
          statusFilter === "all" ||
          mentor.status === statusFilter;

        const matchesVerification =
          verificationFilter === "all" ||
          mentor.verification ===
            verificationFilter;

        const matchesExpertise =
          expertiseFilter === "all" ||
          mentor.skills.some((skill) =>
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
      });
    }, [
      mentors,
      search,
      statusFilter,
      verificationFilter,
      expertiseFilter,
      ratingFilter,
    ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredMentors.length / PAGE_SIZE
    )
  );

  const paginatedMentors =
    filteredMentors.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE
    );

  const stats = dashboardStats;

  function handleView(
    mentor: AdminMentor
  ) {
    setSelectedMentor(mentor);
    setDrawerOpen(true);
  }

  function handleApprove(
    mentor: AdminMentor
  ) {
    setSelectedMentor(mentor);
    setApproveOpen(true);
  }

  function handleReject(
    mentor: AdminMentor
  ) {
    setSelectedMentor(mentor);
    setRejectOpen(true);
  }

  function handleVerify(
    mentor: AdminMentor
  ) {
    setSelectedMentor(mentor);
    setVerificationOpen(true);
  }

  async function handleSuspend(mentor: AdminMentor) {
  try {
    await blockMentor(mentor.id);
    await loadMentors();

    setDrawerOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to suspend mentor:",
      error
    );
  }
}

async function handleUnblock(mentor: AdminMentor) {
  try {
    await unblockMentor(mentor.id);
    await loadMentors();

    setDrawerOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to unblock mentor:",
      error
    );
  }
}

async function handleActivate(mentor: AdminMentor) {
  try {
    await activateMentor(mentor.id);
    await loadMentors();

    setDrawerOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to activate mentor:",
      error
    );
  }
}

async function handleDeactivate(mentor: AdminMentor) {
  try {
    await deactivateMentor(mentor.id);
    await loadMentors();

    setDrawerOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to deactivate mentor:",
      error
    );
  }
}

const handleSoftDelete = async (mentor: AdminMentor) => {
  try {
    await softDeleteMentor(mentor.id);
    await loadMentors();
  } catch (error) {
    console.error("Failed to soft delete mentor:", error);
  }
};

const handleRestore = async (mentor: AdminMentor) => {
  try {
    await restoreMentor(mentor.id);
    await loadMentors();
  } catch (error) {
    console.error("Failed to restore mentor:", error);
  }
};

async function handleFeature(mentor: AdminMentor) {
  try {
    await featureMentor(mentor.id);
    await loadMentors();
  } catch (error) {
    console.error(
      "Failed to feature mentor:",
      error
    );
  }
}

async function handleUnfeature(mentor: AdminMentor) {
  try {
    await unfeatureMentor(mentor.id);
    await loadMentors();
  } catch (error) {
    console.error(
      "Failed to unfeature mentor:",
      error
    );
  }
}

async function handlePublish(mentor: AdminMentor) {
  try {
    await publishMentor(mentor.id);
    await loadMentors();
  } catch (error) {
    console.error(
      "Failed to publish mentor:",
      error
    );
  }
}

async function handleUnpublish(mentor: AdminMentor) {
  try {
    await unpublishMentor(mentor.id);
    await loadMentors();
  } catch (error) {
    console.error(
      "Failed to unpublish mentor:",
      error
    );
  }
}

  return (
    <div className="space-y-8">
      {/* Header */}

      <MentorsHeader
  totalMentors={dashboardStats.totalMentors}
  verifiedMentors={dashboardStats.verifiedMentors}
        onAddMentor={() => {
          // TODO: create mentor
        }}
        onExport={() => {
          // TODO: export mentors
        }}
      />

      {/* Stats */}

      <MentorsStats stats={stats} />

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
        verification={
          verificationFilter
        }
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
        onRefresh={loadMentors}
      />

      {/* Loading */}

      {loading && (
        <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
          Loading mentors...
        </div>
      )}

      {/* Error */}

      {!loading && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center">
          <p className="text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={loadMentors}
            className="mt-4 rounded-xl bg-destructive px-5 py-2 font-medium text-white"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty */}

      {!loading &&
        !error &&
        filteredMentors.length === 0 && (
          <MentorsEmptyState
            onAddMentor={() => {}}
            onResetFilters={() => {
              setSearch("");
              setStatusFilter("all");
              setVerificationFilter(
                "all"
              );
              setExpertiseFilter("all");
              setRatingFilter("all");
              setPage(1);
            }}
          />
        )}

      {/* Mentor List */}

      {!loading &&
        !error &&
        filteredMentors.length > 0 && (
          <>
            {view === "grid" && (
              <MentorsGrid
                mentors={paginatedMentors}
                onView={handleView}
                onApprove={handleApprove}
                onReject={handleReject}
                onVerify={handleVerify}
                onFeature={handleFeature}
                onUnfeature={handleUnfeature}
              />
            )}

            {view === "list" && (
              <MentorsTable
  mentors={paginatedMentors}
  onView={handleView}
  onApprove={handleApprove}
  onReject={handleReject}
  onVerify={handleVerify}
  onFeature={handleFeature}
  onUnfeature={handleUnfeature}
/>
            )}

            <MentorsPagination
              currentPage={page}
              totalPages={totalPages}
              totalItems={
                filteredMentors.length
              }
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
  onSuspend={handleSuspend}
  onApprove={handleApprove}
  onActivate={handleActivate}
  onDeactivate={handleDeactivate}
  onUnblock={handleUnblock}
  onPublish={handlePublish}
  onUnpublish={handleUnpublish}
  onSoftDelete={handleSoftDelete}
  onRestore={handleRestore}
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
        onConfirm={async (
  mentor,
  _notes,
  _notify
) => {
  try {
    await verifyMentor(mentor.id);
    await loadMentors();

    setApproveOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to approve mentor:",
      error
    );
  }
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
       onConfirm={async (
  mentor,
  reason,
  _notes,
  _notify
) => {
  try {
    await rejectMentor(mentor.id, {
      reason,
    });

    await loadMentors();

    setRejectOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to reject mentor:",
      error
    );
  }
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
        onConfirm={async (
  mentor,
  status,
  remarks,
  _notify
) => {
  try {
    if (status === "verified") {
      await verifyMentor(mentor.id);
    } else if (status === "rejected") {
      await rejectMentor(mentor.id, {
        reason:
          remarks.trim() ||
          "Mentor verification rejected.",
      });
    } else {
      console.log(
        "Pending verification does not have a backend API yet."
      );
      return;
    }

    await loadMentors();

    setVerificationOpen(false);
    setSelectedMentor(null);
  } catch (error) {
    console.error(
      "Failed to update mentor verification:",
      error
    );
  }
}}
      />
    </div>
  );
}