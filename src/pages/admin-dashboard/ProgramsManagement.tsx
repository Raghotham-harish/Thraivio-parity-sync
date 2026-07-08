import { useMemo, useState } from "react";

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



import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

const PAGE_SIZE = 6;

export default function ProgramsManagement() {
      const [search, setSearch] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("all");

  const [levelFilter, setLevelFilter] =
    useState("all");

  const [priceFilter, setPriceFilter] =
    useState("all");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [page, setPage] =
    useState(1);
      const [selectedMentor, setSelectedMentor] =
    useState<Mentor | null>(null);

  const [selectedProgram, setSelectedProgram] =
    useState<
      Mentor["programs"][number] | null
    >(null);
      const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [createOpen, setCreateOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [publishOpen, setPublishOpen] =
    useState(false);
      const programs = useMemo(() => {
    return mentors.flatMap((mentor) =>
      mentor.programs.map((program) => ({
        mentor,
        program,
      }))
    );
  }, []);
    const totalPrograms =
    programs.length;

  const publishedPrograms =
    programs.length;

  const totalStudents =
    programs.reduce(
      (sum, item) =>
        sum + item.program.students,
      0
    );

  const averageRating =
    programs.length === 0
      ? 0
      : programs.reduce(
          (sum, item) =>
            sum + item.mentor.rating,
          0
        ) / programs.length;

  const estimatedRevenue =
    programs.reduce(
      (sum, item) =>
        sum +
        item.program.students *
          item.program.price,
      0
    );
      /* -------------------------------------------------------
     Filters
  ------------------------------------------------------- */

  const filteredPrograms = useMemo(() => {
    const keyword = search.toLowerCase();

    return programs.filter(({ mentor, program }) => {
      /* Search */

      const matchesSearch =
        program.title
          .toLowerCase()
          .includes(keyword) ||
        mentor.name
          .toLowerCase()
          .includes(keyword) ||
        mentor.company
          .toLowerCase()
          .includes(keyword) ||
        mentor.category
          .toLowerCase()
          .includes(keyword);

      /* Category */

      const matchesCategory =
        categoryFilter === "all" ||
        mentor.category === categoryFilter;

      /* Level */

      const matchesLevel =
        levelFilter === "all" ||
        program.level === levelFilter;

      /* Price */

      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "free"
          ? program.price === 0
          : program.price > 0);

      /* Status */

      const matchesStatus =
        statusFilter === "all" ||
        statusFilter === "published";

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesPrice &&
        matchesStatus
      );
    });
  }, [
    programs,
    search,
    categoryFilter,
    levelFilter,
    priceFilter,
    statusFilter,
  ]);
    /* -------------------------------------------------------
     Pagination
  ------------------------------------------------------- */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredPrograms.length /
        PAGE_SIZE
    )
  );

  const paginatedPrograms =
    filteredPrograms.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE
    );
      /* -------------------------------------------------------
     Handlers
  ------------------------------------------------------- */

  function handleView(
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) {
    setSelectedMentor(mentor);
    setSelectedProgram(program);
    setDrawerOpen(true);
  }

  function handleEdit(
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) {
    setSelectedMentor(mentor);
    setSelectedProgram(program);
    setEditOpen(true);
  }

  function handleDelete(
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) {
    setSelectedMentor(mentor);
    setSelectedProgram(program);
    setDeleteOpen(true);
  }

  function handlePublish(
    mentor: Mentor,
    program: Mentor["programs"][number]
  ) {
    setSelectedMentor(mentor);
    setSelectedProgram(program);
    setPublishOpen(true);
  }
    return (
    <div className="space-y-8">

      {/* Header */}

      <ProgramsHeader
        totalPrograms={totalPrograms}
        publishedPrograms={publishedPrograms}
        onAddProgram={() => {
          setCreateOpen(true);
        }}
        onExport={() => {
          // TODO:
          // Export Programs
        }}
      />

      {/* Stats */}

      <ProgramsStats
        totalPrograms={totalPrograms}
        publishedPrograms={publishedPrograms}
        totalStudents={totalStudents}
        averageRating={averageRating}
        estimatedRevenue={estimatedRevenue}
      />

      {/* Toolbar */}

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

        onRefresh={() => {
          // TODO:
          // React Query Refetch
        }}
      />
            {/* Empty State */}

      {filteredPrograms.length === 0 ? (
        <ProgramsEmptyState
          onAddProgram={() => {
            setCreateOpen(true);
          }}
          onResetFilters={() => {
            setSearch("");

            setCategoryFilter("all");

            setLevelFilter("all");

            setPriceFilter("all");

            setStatusFilter("all");

            setPage(1);
          }}
        />
      ) : (
        <>

          {/* Grid */}

          {view === "grid" && (
            <ProgramsGrid
              items={paginatedPrograms}
              onView={handleView}
              onEdit={handleEdit}
              onPublish={handlePublish}
              onDelete={handleDelete}
            />
          )}

          {/* Table */}

          {view === "list" && (
            <ProgramsTable
              items={paginatedPrograms}
              onView={handleView}
              onEdit={handleEdit}
              onPublish={handlePublish}
              onDelete={handleDelete}
            />
          )}

          {/* Pagination */}

          <ProgramsPagination
            currentPage={page}
            totalPages={totalPages}
            totalItems={filteredPrograms.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />

        </>
      )}
            {/* Program Details Drawer */}

      <ProgramDetailsDrawer
        open={drawerOpen}
        mentor={selectedMentor}
        program={selectedProgram}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedMentor(null);
          setSelectedProgram(null);
        }}
      />

      {/* Create Program */}

      <CreateProgramDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreate={(data) => {
          console.log("Create Program", data);

          // TODO:
          // React Query Mutation
          // Firebase API
          // Success Toast

          setCreateOpen(false);
        }}
      />

      {/* Edit Program */}

      <EditProgramDialog
        open={editOpen}
        mentor={selectedMentor}
        program={selectedProgram}
        onOpenChange={(open) => {
          setEditOpen(open);

          if (!open) {
            setSelectedMentor(null);
            setSelectedProgram(null);
          }
        }}
        onUpdate={(data) => {
          console.log("Update Program", data);

          // TODO:
          // React Query Mutation
          // Firebase API
          // Success Toast

          setEditOpen(false);
          setSelectedMentor(null);
          setSelectedProgram(null);
        }}
      />

      {/* Delete Program */}

      <DeleteProgramDialog
        open={deleteOpen}
        mentor={selectedMentor}
        program={selectedProgram}
        onOpenChange={(open) => {
          setDeleteOpen(open);

          if (!open) {
            setSelectedMentor(null);
            setSelectedProgram(null);
          }
        }}
        onConfirm={(mentor, program) => {
          console.log("Delete Program", {
            mentor,
            program,
          });

          // TODO:
          // React Query Mutation
          // Firebase API
          // Success Toast

          setDeleteOpen(false);
          setSelectedMentor(null);
          setSelectedProgram(null);
        }}
      />

      {/* Publish Program */}

      <PublishProgramDialog
        open={publishOpen}
        mentor={selectedMentor}
        program={selectedProgram}
        onOpenChange={(open) => {
          setPublishOpen(open);

          if (!open) {
            setSelectedMentor(null);
            setSelectedProgram(null);
          }
        }}
        onConfirm={(mentor, program) => {
          console.log("Publish Program", {
            mentor,
            program,
          });

          // TODO:
          // React Query Mutation
          // Firebase API
          // Notification
          // Success Toast

          setPublishOpen(false);
          setSelectedMentor(null);
          setSelectedProgram(null);
        }}
      />

    </div>
  );
}