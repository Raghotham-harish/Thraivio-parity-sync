import { memo } from "react";

import UserListRow from "./UserListRow";

import type { AdminUser } from "@/types/admin-users";

interface UsersTableProps {
  users: AdminUser[];

  loading?: boolean;

  onView?: (user: AdminUser) => void;

  onEdit?: (user: AdminUser) => void;

  onBlock?: (user: AdminUser) => void;

  onDelete?: (user: AdminUser) => void;
}

function UsersTable({
  users,
  loading = false,
  onView,
  onEdit,
  onBlock,
  onDelete,
}: UsersTableProps) {
  if (loading) {
    return (
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-200 bg-slate-50 px-8 py-6">

          <div className="grid grid-cols-6 gap-6">

            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-5 animate-pulse rounded bg-slate-200"
              />
            ))}

          </div>

        </div>

        <div className="space-y-6 p-6">

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-44 animate-pulse rounded-[28px] bg-slate-100"
            />
          ))}

        </div>

      </section>
    );
  }

  if (!users.length) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50 px-8 py-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Users Directory
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage all registered platform users.
            </p>

          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

            {users.length} Users

          </span>

        </div>

      </div>

      {/* Rows */}

      <div className="space-y-5 p-6">
                {users.map((user) => (
          <UserListRow
            key={user.id}
            user={user}
            onView={onView}
            onEdit={onEdit}
            onBlock={onBlock}
            onDelete={onDelete}
          />
        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 bg-slate-50 px-8 py-5">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-slate-500">
            Showing
            <span className="mx-1 font-semibold text-slate-900">
              {users.length}
            </span>
            registered users.
          </p>

          <div className="flex items-center gap-2">

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Active Directory
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Live Sync
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}
export default memo(UsersTable);