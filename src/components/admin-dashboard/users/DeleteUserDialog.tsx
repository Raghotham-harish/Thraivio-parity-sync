import { memo } from "react";
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
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";;

import type { AdminUser } from "@/types/admin-users";

interface DeleteUserDialogProps {
  open: boolean;
  user: AdminUser | null;

  onOpenChange: (open: boolean) => void;

  onConfirm: (user: AdminUser) => void;
}

function DeleteUserDialog({
  open,
  user,
  onOpenChange,
  onConfirm,
}: DeleteUserDialogProps) {
  if (!user) return null;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="rounded-2xl border-0 p-0 overflow-hidden max-w-lg">

        {/* Header */}

        <div className=" bg-destructive  p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-card/20 p-4">

              <AlertTriangle className="h-10 w-10" />

            </div>

            <div>

              <AlertDialogTitle className="text-3xl font-bold text-white">

                Delete User

              </AlertDialogTitle>

              <AlertDialogDescription className="mt-2 text-red-100">

                This action cannot be undone.

              </AlertDialogDescription>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-6 p-8">

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary p-5">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>

              <h3 className="text-xl font-bold text-foreground">
                {user.name}
              </h3>

              <p className="text-muted-foreground">
                {user.email}
              </p>

            </div>

          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">

            <ul className="space-y-2 text-sm leading-6 text-[#BA1A1A]">

              <li>
                • User profile will be permanently removed.
              </li>

              <li>
                • Sessions history may become unavailable.
              </li>

              <li>
                • Certificates & activity logs may be archived.
              </li>

              <li>
                • This action cannot be reversed.
              </li>

            </ul>

          </div>

        </div>

        {/* Footer */}

        <AlertDialogFooter className="border-t border-border p-6">

          <AlertDialogCancel className="h-12 rounded-2xl px-6">

            Cancel

          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() => onConfirm(user)}
            className="h-12 rounded-2xl bg-destructive px-6 hover:bg-destructive/90"
          >
            <Trash2 className="mr-2 h-4 w-4" />

            Delete User

          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}
export default memo(DeleteUserDialog);