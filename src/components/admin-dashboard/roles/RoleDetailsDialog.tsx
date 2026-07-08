import {
  CalendarDays,
  CheckCircle2,
  KeyRound,
  ShieldCheck,
  ShieldOff,
  User,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

import type {
  AdminRole,
} from "@/types/admin-role";

interface RoleDetailsDialogProps {
  open: boolean;

  role: AdminRole | null;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function RoleDetailsDialog({
  open,
  role,
  onOpenChange,
}: RoleDetailsDialogProps) {
  if (!role) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-5xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            Role Details
          </DialogTitle>

          <DialogDescription>
            View role information,
            permissions and assignment
            details.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-4">

              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: `${role.color}20`,
                }}
              >
                <ShieldCheck
                  className="h-8 w-8"
                  style={{
                    color: role.color,
                  }}
                />
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  {role.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {role.roleId}
                </p>

              </div>

            </div>

            {role.status === "active" ? (
              <Badge className="bg-emerald-500 hover:bg-emerald-500">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Active
              </Badge>
            ) : (
              <Badge variant="secondary">
                <ShieldOff className="mr-1 h-3 w-3" />
                Inactive
              </Badge>
            )}

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Role Type
                  </span>

                  <Badge
                    variant="outline"
                    className="capitalize"
                  >
                    {role.type}
                  </Badge>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Users Assigned
                  </span>

                  <span className="font-medium">
                    {role.usersCount}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Permissions
                  </span>

                  <span className="font-medium">
                    {role.permissionsCount}
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="space-y-3 text-sm">

                <div className="flex items-center gap-2">

                  <User className="h-4 w-4 text-primary" />

                  <span>
                    Created By:
                  </span>

                  <span className="font-medium">
                    {role.createdBy}
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <CalendarDays className="h-4 w-4 text-primary" />

                  <span>
                    Updated:
                  </span>

                  <span className="font-medium">
                    {role.updatedAt}
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <KeyRound className="h-4 w-4 text-primary" />

                  <span>
                    Created:
                  </span>

                  <span className="font-medium">
                    {role.createdAt}
                  </span>

                </div>

              </div>

            </div>

          </div>
                    <div className="rounded-2xl border p-5">

            <h3 className="mb-4 text-lg font-semibold">
              Permissions
            </h3>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b text-left">

                    <th className="pb-3 text-sm font-semibold">
                      Module
                    </th>

                    <th className="pb-3 text-center text-sm font-semibold">
                      View
                    </th>

                    <th className="pb-3 text-center text-sm font-semibold">
                      Create
                    </th>

                    <th className="pb-3 text-center text-sm font-semibold">
                      Update
                    </th>

                    <th className="pb-3 text-center text-sm font-semibold">
                      Delete
                    </th>

                    <th className="pb-3 text-center text-sm font-semibold">
                      Export
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {role.permissions.map((permission) => (

                    <tr
                      key={permission.module}
                      className="border-b last:border-none"
                    >

                      <td className="py-3 font-medium">
                        {permission.module}
                      </td>

                      <td className="py-3 text-center">
                        {permission.view ? "✅" : "—"}
                      </td>

                      <td className="py-3 text-center">
                        {permission.create ? "✅" : "—"}
                      </td>

                      <td className="py-3 text-center">
                        {permission.update ? "✅" : "—"}
                      </td>

                      <td className="py-3 text-center">
                        {permission.delete ? "✅" : "—"}
                      </td>

                      <td className="py-3 text-center">
                        {permission.export ? "✅" : "—"}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
                  </div>

      </DialogContent>

    </Dialog>
  );
}