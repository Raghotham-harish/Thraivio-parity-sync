import {
  AlertTriangle,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import type {
  AdminRole,
} from "@/types/admin-role";

interface DeleteRoleDialogProps {
  open: boolean;

  role: AdminRole | null;

  onDelete: () => void;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function DeleteRoleDialog({
  open,
  role,
  onDelete,
  onOpenChange,
}: DeleteRoleDialogProps) {
  if (!role) return null;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="max-w-lg rounded-2xl">

        <AlertDialogHeader>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDAD6]">

            <AlertTriangle className="h-8 w-8 text-red-600" />

          </div>

          <AlertDialogTitle className="text-center text-2xl">

            Delete Role?

          </AlertDialogTitle>

          <AlertDialogDescription className="text-center">

            This action will permanently remove
            the selected role. Users assigned
            to this role should be reassigned
            before deletion.

          </AlertDialogDescription>

        </AlertDialogHeader>

        <div className="rounded-2xl border bg-muted/40 p-5">

          <p className="font-semibold">
            {role.name}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">

            {role.roleId}
            {" • "}
            {role.type}

          </p>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">

            {role.description}

          </p>

        </div>
                <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={onDelete}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Role
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}