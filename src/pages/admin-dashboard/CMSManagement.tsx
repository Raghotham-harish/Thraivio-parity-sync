import { useMemo, useState } from "react";

import CMSHeader from "@/components/admin-dashboard/cms/CMSHeader";
import CMSStats from "@/components/admin-dashboard/cms/CMSStats";
import CMSToolbar from "@/components/admin-dashboard/cms/CMSToolbar";
import CMSGrid from "@/components/admin-dashboard/cms/CMSGrid";
import CMSTable from "@/components/admin-dashboard/cms/CMSTable";
import CMSDetailsDialog from "@/components/admin-dashboard/cms/CMSDetailsDialog";
import CreatePageDialog from "@/components/admin-dashboard/cms/CreatePageDialog";
import DeletePageDialog from "@/components/admin-dashboard/cms/DeletePageDialog";
import EmptyCMS from "@/components/admin-dashboard/cms/EmptyCMS";

import {
  cmsPages,
  cmsStats,
} from "@/data/admin-cms";

import type {
  AdminCMSPage,
} from "@/types/admin-cms";

export default function CMSManagement() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const [category, setCategory] =
    useState("all");

  const [author, setAuthor] =
    useState("all");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [selectedPage, setSelectedPage] =
    useState<AdminCMSPage | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [createOpen, setCreateOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);
      const filteredPages = useMemo(() => {
    return cmsPages.filter((page) => {
      const matchesSearch =
        page.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        page.description
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        page.author.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        page.status === status;

      const matchesCategory =
        category === "all" ||
        page.category === category;

      const matchesAuthor =
        author === "all" ||
        page.author.name === author;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesAuthor
      );
    });
  }, [
    search,
    status,
    category,
    author,
  ]);

  const handleView = (
    page: AdminCMSPage
  ) => {
    setSelectedPage(page);
    setDetailsOpen(true);
  };

  const handleEdit = (
    page: AdminCMSPage
  ) => {
    setSelectedPage(page);
    setCreateOpen(true);
  };

  const handleDelete = (
    page: AdminCMSPage
  ) => {
    setSelectedPage(page);
    setDeleteOpen(true);
  };
    const handleRefresh = () => {
    console.log("Refresh CMS Pages");
  };

  const handleExport = () => {
    console.log("Export CMS Pages");
  };

  const handleCreate = () => {
    setSelectedPage(null);
    setCreateOpen(true);
  };

  const handleCreateConfirm = () => {
    console.log(
      "Create / Update CMS Page:",
      selectedPage?.id
    );

    setCreateOpen(false);
    setSelectedPage(null);
  };

  const handleDeleteConfirm = () => {
    console.log(
      "Delete CMS Page:",
      selectedPage?.id
    );

    setDeleteOpen(false);
    setSelectedPage(null);
  };

  const handleResetFilters = () => {
    setSearch("");

    setStatus("all");

    setCategory("all");

    setAuthor("all");

    setView("grid");
  };

  return (
    <div className="space-y-8">

      <CMSHeader
        totalPages={cmsStats.totalPages}
        totalViews={cmsStats.totalViews}
        onCreate={handleCreate}
        onExport={handleExport}
      />

      <CMSStats
        totalPages={cmsStats.totalPages}
        publishedPages={cmsStats.publishedPages}
        draftPages={cmsStats.draftPages}
        archivedPages={cmsStats.archivedPages}
        totalViews={cmsStats.totalViews}
        monthlyViews={cmsStats.monthlyViews}
        seoOptimizedPages={cmsStats.seoOptimizedPages}
        recentlyUpdated={cmsStats.recentlyUpdated}
      />
            <CMSToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        category={category}
        onCategoryChange={setCategory}
        author={author}
        onAuthorChange={setAuthor}
        view={view}
        onViewChange={setView}
        onRefresh={handleRefresh}
      />

      {filteredPages.length === 0 ? (

        <EmptyCMS
          onResetFilters={handleResetFilters}
        />

      ) : view === "grid" ? (

        <CMSGrid
          pages={filteredPages}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      ) : (

        <CMSTable
          pages={filteredPages}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      )}
            <CMSDetailsDialog
        open={detailsOpen}
        page={selectedPage}
        onOpenChange={setDetailsOpen}
      />

      <CreatePageDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreate={handleCreateConfirm}
      />

      <DeletePageDialog
        open={deleteOpen}
        page={selectedPage}
        onDelete={handleDeleteConfirm}
        onOpenChange={setDeleteOpen}
      />
          </div>
  );
}