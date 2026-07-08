import type {
  AdminRole,
} from "@/types/admin-role";

import RoleGridCard from "./RoleGridCard";

interface RolesGridProps {
  roles: AdminRole[];

  onView: (
    role: AdminRole
  ) => void;

  onEdit: (
    role: AdminRole
  ) => void;

  onDelete: (
    role: AdminRole
  ) => void;
}

export default function RolesGrid({
  roles,
  onView,
  onEdit,
  onDelete,
}: RolesGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">

      {roles.map((role) => (

        <RoleGridCard
          key={role.id}
          role={role}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      ))}

    </section>
  );
}