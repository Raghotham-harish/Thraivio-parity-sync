import type {
  AdminRole,
} from "@/types/admin-role";

import RoleTableRow from "./RoleTableRow";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RolesTableProps {
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

export default function RolesTable({
  roles,
  onView,
  onEdit,
  onDelete,
}: RolesTableProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardContent className="p-0">

        <div className="overflow-x-auto">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  Role
                </TableHead>

                <TableHead>
                  Type
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

                <TableHead>
                  Users
                </TableHead>

                <TableHead>
                  Permissions
                </TableHead>

                <TableHead>
                  Updated
                </TableHead>

                <TableHead className="text-right">
                  Actions
                </TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>
                            {roles.map((role) => (

              <RoleTableRow
                key={role.id}
                role={role}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />

            ))}

          </TableBody>

        </Table>

      </div>
            </CardContent>

    </Card>
  );
}