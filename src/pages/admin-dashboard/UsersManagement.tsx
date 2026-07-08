import {
  useMemo,
  useState,
  useCallback,
} from "react";

import UsersHeader from "@/components/admin-dashboard/users/UsersHeader";
import UsersStats from "@/components/admin-dashboard/users/UsersStats";
import UsersToolbar from "@/components/admin-dashboard/users/UsersToolbar";
import UsersGrid from "@/components/admin-dashboard/users/UsersGrid";
import UsersTable from "@/components/admin-dashboard/users/UsersTable";
import UsersEmptyState from "@/components/admin-dashboard/users/UsersEmptyState";
import UsersPagination from "@/components/admin-dashboard/users/UsersPagination";
import UserProfileDrawer from "@/components/admin-dashboard/users/UserProfileDrawer";
import DeleteUserDialog from "@/components/admin-dashboard/users/DeleteUserDialog";
import BlockUserDialog from "@/components/admin-dashboard/users/BlockUserDialog";

import {
  users,
  userStats,
} from "@/data/admin-users";

import type { AdminUser } from "@/types/admin-users";

const PAGE_SIZE = 8;

export default function UsersManagement() {
  const [search, setSearch] = useState("");

  
  const [statusFilter, setStatusFilter] =
  useState("all");

const [membershipFilter, setMembershipFilter] =
  useState("all");

const [verificationFilter, setVerificationFilter] =
  useState("all");

  const [view, setView] = useState<"grid" | "list">(
    "grid"
  );

  const [page, setPage] = useState(1);

  const [selectedUser, setSelectedUser] =
    useState<AdminUser | null>(null);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [blockOpen, setBlockOpen] =
    useState(false);

 const filteredUsers = useMemo(() => {
  const keyword = search.toLowerCase();

  return users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.username.toLowerCase().includes(keyword);

    const matchesStatus =
      statusFilter === "all" ||
      user.status === statusFilter;

    const matchesMembership =
      membershipFilter === "all" ||
      user.membership === membershipFilter;

    const matchesVerification =
      verificationFilter === "all" ||
      user.verification === verificationFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesMembership &&
      matchesVerification
    );
  });
}, [
  search,
  statusFilter,
  membershipFilter,
  verificationFilter,
]);


  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / PAGE_SIZE)
  );

  const paginatedUsers = useMemo(() => {
  return filteredUsers.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
}, [filteredUsers, page]);

const activeUsersCount = useMemo(() => {
  return filteredUsers.filter(
    (user) => user.status === "active"
  ).length;
}, [filteredUsers]);

  const handleView = useCallback(
  (user: AdminUser) => {
    setSelectedUser(user);
    setDrawerOpen(true);
  },
  []
);

const handleDelete = useCallback(
  (user: AdminUser) => {
    setSelectedUser(user);
    setDeleteOpen(true);
  },
  []
);

const handleBlock = useCallback(
  (user: AdminUser) => {
    setSelectedUser(user);
    setBlockOpen(true);
  },
  []
);

const handleCloseDrawer = useCallback(() => {
  setDrawerOpen(false);
  setSelectedUser(null);
}, []);

const handleDeleteDialog = useCallback(
  (open: boolean) => {
    setDeleteOpen(open);

    if (!open) {
      setSelectedUser(null);
    }
  },
  []
);

const handleBlockDialog = useCallback(
  (open: boolean) => {
    setBlockOpen(open);

    if (!open) {
      setSelectedUser(null);
    }
  },
  []
);

const handleEdit = useCallback(
  (user: AdminUser) => {
    // TODO: Edit User
    console.log("Edit User", user);
  },
  []
);

const handleAddUser = useCallback(() => {
  // TODO: Open Create User Modal
}, []);

const handleExport = useCallback(() => {
  // TODO: Export Users
}, []);

const handleRefresh = useCallback(() => {
  // TODO: Refresh Users
}, []);

const handleSearchChange = useCallback(
  (value: string) => {
    setSearch(value);
    setPage(1);
  },
  []
);

const handleStatusChange = useCallback(
  (value: string) => {
    setStatusFilter(value);
    setPage(1);
  },
  []
);

const handleMembershipChange = useCallback(
  (value: string) => {
    setMembershipFilter(value);
    setPage(1);
  },
  []
);

const handleVerificationChange = useCallback(
  (value: string) => {
    setVerificationFilter(value);
    setPage(1);
  },
  []
);

const handleViewChange = useCallback(
  (value: "grid" | "list") => {
    setView(value);
  },
  []
);

    return (
    <div className="space-y-8">

      {/* Header */}

      <UsersHeader
  totalUsers={filteredUsers.length}
  activeUsers={activeUsersCount}
  onAddUser={handleAddUser}
  onExport={handleExport}
/>

      {/* Stats */}

      <UsersStats stats={userStats} />

      {/* Toolbar */}

      <UsersToolbar
  search={search}
  onSearchChange={handleSearchChange}

  status={statusFilter}
  onStatusChange={handleStatusChange}
  membership={membershipFilter}
  onMembershipChange={handleMembershipChange}

  verification={verificationFilter}
  onVerificationChange={handleVerificationChange}

  view={view}
  onViewChange={handleViewChange}

  onRefresh={handleRefresh}
/>

      {/* Empty State */}

      {filteredUsers.length === 0 ? (
        <UsersEmptyState
          onAddUser={() => {
            // TODO: Open Create User Dialog
          }}
          onResetFilters={() => {
            setSearch("");
            setPage(1);
          }}
        />
      ) : (
        <>
          {/* Grid View */}

          {view === "grid" && (
            <UsersGrid
              users={paginatedUsers}
              onView={handleView}
              onEdit={handleEdit}
              onBlock={handleBlock}
              onDelete={handleDelete}
            />
          )}

          {/* List View */}

          {view === "list" && (
            <UsersTable
              users={paginatedUsers}
              onView={handleView}
              onEdit={handleEdit}
              onBlock={handleBlock}
              onDelete={handleDelete}
            />
          )}
                    {/* Pagination */}

          <UsersPagination
            currentPage={page}
            totalPages={totalPages}
            totalItems={filteredUsers.length}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </>
      )}

      {/* Profile Drawer */}

      <UserProfileDrawer
        open={drawerOpen}
        user={selectedUser}
        onClose={handleCloseDrawer}
      />

      {/* Delete Dialog */}

      <DeleteUserDialog
        open={deleteOpen}
        user={selectedUser}
        onOpenChange={handleDeleteDialog}
        onConfirm={(user) => {
          console.log("Delete User:", user);

          // TODO:
          // Backend API
          // React Query Mutation
          // Toast Success

          setDeleteOpen(false);
          setSelectedUser(null);
        }}
      />

      {/* Block Dialog */}

      <BlockUserDialog
        open={blockOpen}
        user={selectedUser}
        onOpenChange={handleBlockDialog}
        onConfirm={(
          user,
          reason,
          duration,
          notes,
          notify
        ) => {
          console.log({
            user,
            reason,
            duration,
            notes,
            notify,
          });

          // TODO:
          // Backend API
          // Send Notification
          // React Query Mutation
          // Toast Success

          setBlockOpen(false);
          setSelectedUser(null);
        }}
      />
          </div>
  );
}