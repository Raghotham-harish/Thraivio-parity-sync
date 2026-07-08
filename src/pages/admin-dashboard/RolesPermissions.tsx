import { useMemo, useState } from "react";

import RolesHeader from "@/components/admin-dashboard/roles/RolesHeader";
import RolesStats from "@/components/admin-dashboard/roles/RolesStats";
import RolesToolbar from "@/components/admin-dashboard/roles/RolesToolbar";
import RolesGrid from "@/components/admin-dashboard/roles/RolesGrid";
import RolesTable from "@/components/admin-dashboard/roles/RolesTable";
import RoleDetailsDialog from "@/components/admin-dashboard/roles/RoleDetailsDialog";
import CreateRoleDialog from "@/components/admin-dashboard/roles/CreateRoleDialog";
import DeleteRoleDialog from "@/components/admin-dashboard/roles/DeleteRoleDialog";
import EmptyRoles from "@/components/admin-dashboard/roles/EmptyRoles";

import {
  roles,
  roleStats,
} from "@/data/admin-role";

import type {
  AdminRole,
} from "@/types/admin-role";

export default function RolesPermissions() {
  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  const [type, setType] =
    useState("all");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [selectedRole, setSelectedRole] =
    useState<AdminRole | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [createOpen, setCreateOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);
      const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const matchesSearch =
        role.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        role.description
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        role.roleId
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        role.status === status;

      const matchesType =
        type === "all" ||
        role.type === type;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType
      );
    });
  }, [
    search,
    status,
    type,
  ]);

  const handleView = (
    role: AdminRole
  ) => {
    setSelectedRole(role);
    setDetailsOpen(true);
  };

  const handleEdit = (
    role: AdminRole
  ) => {
    setSelectedRole(role);
    setCreateOpen(true);
  };

  const handleDelete = (
    role: AdminRole
  ) => {
    setSelectedRole(role);
    setDeleteOpen(true);
  };
    const handleRefresh = () => {
    console.log("Refresh Roles");
  };

  const handleExport = () => {
    console.log("Export Roles");
  };

  const handleCreate = () => {
    setSelectedRole(null);
    setCreateOpen(true);
  };

  const handleCreateConfirm = () => {
    console.log(
      "Create / Update Role:",
      selectedRole?.id
    );

    setCreateOpen(false);
    setSelectedRole(null);
  };

  const handleDeleteConfirm = () => {
    console.log(
      "Delete Role:",
      selectedRole?.id
    );

    setDeleteOpen(false);
    setSelectedRole(null);
  };

  const handleResetFilters = () => {
    setSearch("");

    setStatus("all");

    setType("all");

    setView("grid");
  };

  return (
    <div className="space-y-8">

      <RolesHeader
        totalRoles={roleStats.totalRoles}
        totalUsersAssigned={
          roleStats.totalUsersAssigned
        }
        onCreate={handleCreate}
        onExport={handleExport}
      />

      <RolesStats
        totalRoles={roleStats.totalRoles}
        activeRoles={roleStats.activeRoles}
        inactiveRoles={roleStats.inactiveRoles}
        systemRoles={roleStats.systemRoles}
        customRoles={roleStats.customRoles}
        totalUsersAssigned={
          roleStats.totalUsersAssigned
        }
        averagePermissions={
          roleStats.averagePermissions
        }
        recentlyUpdated={
          roleStats.recentlyUpdated
        }
      />
            <RolesToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        type={type}
        onTypeChange={setType}
        view={view}
        onViewChange={setView}
        onRefresh={handleRefresh}
      />

      {filteredRoles.length === 0 ? (

        <EmptyRoles
          onResetFilters={handleResetFilters}
        />

      ) : view === "grid" ? (

        <RolesGrid
          roles={filteredRoles}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      ) : (

        <RolesTable
          roles={filteredRoles}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      )}
            <RoleDetailsDialog
        open={detailsOpen}
        role={selectedRole}
        onOpenChange={setDetailsOpen}
      />

      <CreateRoleDialog
        open={createOpen}
        onCreate={handleCreateConfirm}
        onOpenChange={setCreateOpen}
      />

      <DeleteRoleDialog
        open={deleteOpen}
        role={selectedRole}
        onDelete={handleDeleteConfirm}
        onOpenChange={setDeleteOpen}
      />
          </div>
  );
}