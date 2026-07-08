
import { memo } from "react";

import UserGridCard from "./UserGridCard";

import type { AdminUser } from "@/types/admin-users";

interface UsersGridProps {
  users: AdminUser[];

  loading?: boolean;

  onView?: (user: AdminUser) => void;

  onEdit?: (user: AdminUser) => void;

  onBlock?: (user: AdminUser) => void;

  onDelete?: (user: AdminUser) => void;
}

function UsersGrid({
  users,
  loading = false,
  onView,
  onEdit,
  onBlock,
  onDelete,
}: UsersGridProps) {
  if (loading) {
    return (
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-[540px] animate-pulse rounded-[32px] border border-slate-200 bg-white"
          />
        ))}
      </section>
    );
  }

  if (!users.length) {
    return null;
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

      {users.map((user) => (
        <UserGridCard
          key={user.id}
          user={user}
          onView={onView}
          onEdit={onEdit}
          onBlock={onBlock}
          onDelete={onDelete}
        />
      ))}

    </section>
  );
}
export default memo(UsersGrid);