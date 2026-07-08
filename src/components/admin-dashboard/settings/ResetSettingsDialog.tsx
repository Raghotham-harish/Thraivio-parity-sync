import {
  RotateCcw,
  AlertTriangle,
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

interface ResetSettingsDialogProps {
  open: boolean;

  onConfirm: () => void;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function ResetSettingsDialog({
  open,
  onConfirm,
  onOpenChange,
}: ResetSettingsDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="max-w-lg rounded-3xl">

        <AlertDialogHeader>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10">

            <AlertTriangle className="h-8 w-8 text-amber-600" />

          </div>

          <AlertDialogTitle className="text-center text-2xl">

            Reset All Settings?

          </AlertDialogTitle>

          <AlertDialogDescription className="text-center">

            This will restore all platform
            settings to their default values.
            Any unsaved configuration changes
            will be permanently lost.

          </AlertDialogDescription>

        </AlertDialogHeader>
                <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-amber-600 hover:bg-amber-700"
            onClick={onConfirm}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Settings
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}