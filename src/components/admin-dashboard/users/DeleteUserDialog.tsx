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
  AlertDialogHeader,
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
      <AlertDialogContent className="rounded-[32px] border-0 p-0 overflow-hidden max-w-lg">

        {/* Header */}

        <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-3xl bg-white/20 p-4">

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

          <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                {user.name}
              </h3>

              <p className="text-slate-500">
                {user.email}
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-5">

            <ul className="space-y-2 text-sm leading-6 text-red-700">

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

        <AlertDialogFooter className="border-t border-slate-200 p-6">

          <AlertDialogCancel className="h-12 rounded-2xl px-6">

            Cancel

          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() => onConfirm(user)}
            className="h-12 rounded-2xl bg-red-600 px-6 hover:bg-red-700"
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