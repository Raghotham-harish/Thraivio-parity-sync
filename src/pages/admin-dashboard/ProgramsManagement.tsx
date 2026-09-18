
import { useCallback, useEffect, useMemo, useState } from "react";

import ProgramsHeader from "@/components/admin-dashboard/programs/ProgramsHeader";
import ProgramsStats from "@/components/admin-dashboard/programs/ProgramsStats";
import ProgramsToolbar from "@/components/admin-dashboard/programs/ProgramsToolbar";
import ProgramsGrid from "@/components/admin-dashboard/programs/ProgramsGrid";
import ProgramsTable from "@/components/admin-dashboard/programs/ProgramsTable";
import ProgramsEmptyState from "@/components/admin-dashboard/programs/ProgramsEmptyState";
import ProgramsPagination from "@/components/admin-dashboard/programs/ProgramsPagination";
import ProgramDetailsDrawer from "@/components/admin-dashboard/programs/ProgramDetailsDrawer";

import CreateProgramDialog from "@/components/admin-dashboard/programs/CreateProgramDialog";
import EditProgramDialog from "@/components/admin-dashboard/programs/EditProgramDialog";
import DeleteProgramDialog from "@/components/admin-dashboard/programs/DeleteProgramDialog";
import PublishProgramDialog from "@/components/admin-dashboard/programs/PublishProgramDialog";

import {
  archiveManyPrograms,
  createProgram,
  deleteManyPrograms,
  deleteProgram,
  featureManyPrograms,
  getProgramDashboardStats,
  getPrograms,
  publishManyPrograms,
  publishProgram,
  unpublishProgram,
  updateProgram,
  type CreateProgramPayload,
  type Program,
  type ProgramDashboardStats,
  type ProgramLevel,
  type ProgramQuery,
  type UpdateProgramPayload,
} from "@/services/program.service";

const PAGE_SIZE = 6;

type ViewMode = "grid" | "list";
type FilterValue = "all" | string;

const INITIAL_STATS: ProgramDashboardStats = {
  totalPrograms: 0,
  published: 0,
  drafts: 0,
  featured: 0,
  archived: 0,
};

export default function ProgramsManagement() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [stats, setStats] =
    useState<ProgramDashboardStats>(INITIAL_STATS);

  const [isLoading, setIsLoading] = useState(true);
  const [isMutating, setIsMutating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState<FilterValue>("all");
  const [levelFilter, setLevelFilter] =
    useState<FilterValue>("all");
  const [priceFilter, setPriceFilter] =
    useState<FilterValue>("all");
  const [statusFilter, setStatusFilter] =
    useState<FilterValue>("all");

  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);

  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);

  const [selectedProgramIds, setSelectedProgramIds] = useState<string[]>([]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);

  const getErrorMessage = (err: unknown, fallback: string) => {
    return err instanceof Error ? err.message : fallback;
  };

  const fetchPrograms = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const query: ProgramQuery = {
        page: 1,
        limit: 100,
        search: search.trim() || undefined,
        category:
          categoryFilter !== "all"
            ? categoryFilter
            : undefined,
        level:
          levelFilter !== "all"
            ? (levelFilter as ProgramLevel)
            : undefined,
        status:
          statusFilter !== "all"
            ? (statusFilter as ProgramQuery["status"])
            : undefined,
      };

      const [programResponse, statsResponse] = await Promise.all([
        getPrograms(query),
        getProgramDashboardStats(),
      ]);

      if (!programResponse.success) {
        throw new Error(
          programResponse.message || "Failed to fetch programs",
        );
      }

      if (!statsResponse.success) {
        throw new Error(
          statsResponse.message || "Failed to fetch program stats",
        );
      }

      setPrograms(programResponse.data.programs);
      setStats(statsResponse.data);
    } catch (err) {
      setError(
        getErrorMessage(
          err,
          "Something went wrong while fetching programs",
        ),
      );
      setPrograms([]);
    } finally {
      setIsLoading(false);
    }
  }, [
    search,
    categoryFilter,
    levelFilter,
    statusFilter,
  ]);

  useEffect(() => {
    void fetchPrograms();
  }, [fetchPrograms]);

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      if (priceFilter === "free" && !program.pricing?.isFree) {
        return false;
      }

      if (priceFilter === "paid" && program.pricing?.isFree) {
        return false;
      }

      return true;
    });
  }, [programs, priceFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPrograms.length / PAGE_SIZE),
  );

  const paginatedPrograms = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE;

    return filteredPrograms.slice(
      startIndex,
      startIndex + PAGE_SIZE,
    );
  }, [filteredPrograms, page]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const resetSelection = () => {
    setSelectedProgram(null);
  };

  const handleView = (program: Program) => {
    setSelectedProgram(program);
    setDrawerOpen(true);
  };

  const handleEdit = (program: Program) => {
    setSelectedProgram(program);
    setEditOpen(true);
  };

  const handleDelete = (program: Program) => {
    setSelectedProgram(program);
    setDeleteOpen(true);
  };

  const handlePublish = (program: Program) => {
    setSelectedProgram(program);
    setPublishOpen(true);
  };

  const toggleProgramSelection = (programId: string) => {
    setSelectedProgramIds((current) =>
      current.includes(programId)
        ? current.filter((id) => id !== programId)
        : [...current, programId],
    );
  };

  const toggleSelectAllVisible = () => {
    const visibleIds = paginatedPrograms.map((program) => program.id);
    const isEveryVisibleSelected =
      visibleIds.length > 0 &&
      visibleIds.every((id) => selectedProgramIds.includes(id));

    setSelectedProgramIds((current) =>
      isEveryVisibleSelected
        ? current.filter((id) => !visibleIds.includes(id))
        : Array.from(new Set([...current, ...visibleIds])),
    );
  };

  const clearBulkSelection = () => {
    setSelectedProgramIds([]);
  };

  const handleBulkAction = async (
    action: "publish" | "archive" | "feature" | "delete",
  ) => {
    if (selectedProgramIds.length === 0) return;

    try {
      setIsMutating(true);
      setError(null);

      const response =
        action === "publish"
          ? await publishManyPrograms(selectedProgramIds)
          : action === "archive"
            ? await archiveManyPrograms(selectedProgramIds)
            : action === "feature"
              ? await featureManyPrograms(selectedProgramIds)
              : await deleteManyPrograms(selectedProgramIds);

      if (!response.success) {
        throw new Error(response.message || `Failed to ${action} programs`);
      }

      clearBulkSelection();
      await fetchPrograms();
    } catch (err) {
      setError(getErrorMessage(err, `Failed to ${action} programs`));
    } finally {
      setIsMutating(false);
    }
  };

  const resetFilters = () => {
    setSearch("");
    setCategoryFilter("all");
    setLevelFilter("all");
    setPriceFilter("all");
    setStatusFilter("all");
    setPage(1);
  };

  const handleRefresh = () => {
    void fetchPrograms();
  };

  const handleCreate = async (data: CreateProgramPayload) => {
    try {
      setIsMutating(true);
      setError(null);

      const response = await createProgram(data);

      if (!response.success) {
        throw new Error(
          response.message || "Failed to create program",
        );
      }

      setCreateOpen(false);
      await fetchPrograms();
    } catch (err) {
      setError(
        getErrorMessage(err, "Failed to create program"),
      );
    } finally {
      setIsMutating(false);
    }
  };

  const handleUpdate = async (
    programId: string,
    data: UpdateProgramPayload,
  ) => {
    try {
      setIsMutating(true);
      setError(null);

      const response = await updateProgram(programId, data);

      if (!response.success) {
        throw new Error(
          response.message || "Failed to update program",
        );
      }

      setEditOpen(false);
      resetSelection();
      await fetchPrograms();
    } catch (err) {
      setError(
        getErrorMessage(err, "Failed to update program"),
      );
    } finally {
      setIsMutating(false);
    }
  };

  const handleDeleteConfirm = async (programId: string) => {
    try {
      setIsMutating(true);
      setError(null);

      const response = await deleteProgram(programId);

      if (!response.success) {
        throw new Error(
          response.message || "Failed to delete program",
        );
      }

      setDeleteOpen(false);
      resetSelection();
      await fetchPrograms();
    } catch (err) {
      setError(
        getErrorMessage(err, "Failed to delete program"),
      );
    } finally {
      setIsMutating(false);
    }
  };

  const handlePublishConfirm = async (
    programId: string,
    action: "publish" | "unpublish",
  ) => {
    try {
      setIsMutating(true);
      setError(null);

      const response =
        action === "publish"
          ? await publishProgram(programId)
          : await unpublishProgram(programId);

      if (!response.success) {
        throw new Error(
          response.message ||
            `Failed to ${action} program`,
        );
      }

      setPublishOpen(false);
      resetSelection();
      await fetchPrograms();
    } catch (err) {
      setError(
        getErrorMessage(
          err,
          `Failed to ${action} program`,
        ),
      );
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <ProgramsHeader
        totalPrograms={stats.totalPrograms}
        publishedPrograms={stats.published}
        onAddProgram={() => setCreateOpen(true)}
        onExport={() => {
          // Export functionality will be implemented separately.
        }}
      />

      <ProgramsStats
        totalPrograms={stats.totalPrograms}
        published={stats.published}
        drafts={stats.drafts}
        featured={stats.featured}
        archived={stats.archived}
      />

      <div className="space-y-4 rounded-2xl border bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={
                paginatedPrograms.length > 0 &&
                paginatedPrograms.every((program) =>
                  selectedProgramIds.includes(program.id),
                )
              }
              onChange={toggleSelectAllVisible}
              className="h-4 w-4 rounded border-gray-300"
              aria-label="Select all visible programs"
            />
            <span>{selectedProgramIds.length} selected</span>
          </label>

          <div className="flex flex-wrap gap-2">
            {[
              ["publish", "Bulk Publish"],
              ["archive", "Bulk Archive"],
              ["feature", "Bulk Feature"],
              ["delete", "Bulk Delete"],
            ].map(([action, label]) => (
              <button
                key={action}
                type="button"
                disabled={selectedProgramIds.length === 0 || isMutating}
                onClick={() =>
                  void handleBulkAction(
                    action as "publish" | "archive" | "feature" | "delete",
                  )
                }
                className="rounded-lg border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={clearBulkSelection}
              disabled={selectedProgramIds.length === 0 || isMutating}
              className="rounded-lg border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPrograms.map((program) => (
            <label
              key={program.id}
              className="flex items-center gap-2 rounded-lg border p-2 text-sm"
            >
              <input
                type="checkbox"
                checked={selectedProgramIds.includes(program.id)}
                onChange={() => toggleProgramSelection(program.id)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="truncate">{program.title}</span>
            </label>
          ))}
        </div>
      </div>

      <ProgramsToolbar
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        category={categoryFilter}
        onCategoryChange={(value) => {
          setCategoryFilter(value);
          setPage(1);
        }}
        level={levelFilter}
        onLevelChange={(value) => {
          setLevelFilter(value);
          setPage(1);
        }}
        price={priceFilter}
        onPriceChange={(value) => {
          setPriceFilter(value);
          setPage(1);
        }}
        status={statusFilter}
        onStatusChange={(value) => {
          setStatusFilter(value);
          setPage(1);
        }}
        view={view}
        onViewChange={setView}
        onRefresh={handleRefresh}
        isLoading={isLoading || isMutating}
      />

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <span>{error}</span>

          <button
            type="button"
            onClick={handleRefresh}
            className="ml-3 font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}

      {isLoading ? (
        <div className="flex min-h-60 items-center justify-center rounded-xl border border-dashed">
          <p className="text-sm text-muted-foreground">
            Loading programs...
          </p>
        </div>
      ) : filteredPrograms.length === 0 ? (
        <ProgramsEmptyState
          onAddProgram={() => setCreateOpen(true)}
          onClearFilters={resetFilters}
          onRefresh={handleRefresh}
        />
      ) : (
        <>
          {view === "grid" ? (
            <ProgramsGrid
              items={paginatedPrograms}
              onView={handleView}
              onEdit={handleEdit}
              onPublish={handlePublish}
              onDelete={handleDelete}
            />
          ) : (
            <ProgramsTable
              items={paginatedPrograms}
              onView={handleView}
              onEdit={handleEdit}
              onPublish={handlePublish}
              onDelete={handleDelete}
            />
          )}

          <ProgramsPagination
            currentPage={page}
            totalPages={totalPages}
            totalItems={filteredPrograms.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
            isLoading={isLoading}
          />
        </>
      )}

      <ProgramDetailsDrawer
        open={drawerOpen}
        program={selectedProgram}
        onClose={() => {
          setDrawerOpen(false);
          resetSelection();
        }}
      />

      <CreateProgramDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreate={handleCreate}
        isLoading={isMutating}
      />

      <EditProgramDialog
        open={editOpen}
        program={selectedProgram}
        onOpenChange={(open) => {
          setEditOpen(open);

          if (!open) {
            resetSelection();
          }
        }}
        onUpdate={handleUpdate}
        isLoading={isMutating}
      />

      <DeleteProgramDialog
        open={deleteOpen}
        program={selectedProgram}
        onOpenChange={(open) => {
          setDeleteOpen(open);

          if (!open) {
            resetSelection();
          }
        }}
        onConfirm={handleDeleteConfirm}
        isLoading={isMutating}
      />

      <PublishProgramDialog
        open={publishOpen}
        program={selectedProgram}
        onOpenChange={(open) => {
          setPublishOpen(open);

          if (!open) {
            resetSelection();
          }
        }}
        onConfirm={handlePublishConfirm}
        isLoading={isMutating}
      />
    </div>
  );
}