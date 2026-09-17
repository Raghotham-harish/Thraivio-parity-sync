import {
  Save,
  CheckCircle2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface SaveChangesDialogProps {
  open: boolean;

  onConfirm: () => void;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function SaveChangesDialog({
  open,
  onConfirm,
  onOpenChange,
}: SaveChangesDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-lg rounded-2xl">

        <DialogHeader>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFDF5]/10">

            <CheckCircle2 className="h-8 w-8 text-[#0F8F65]" />

          </div>

          <DialogTitle className="text-center text-2xl">

            Save Changes?

          </DialogTitle>

          <DialogDescription className="text-center">

            This will save all modified
            platform settings. Backend/API
            integration will persist these
            changes permanently.

          </DialogDescription>

        </DialogHeader>
                <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
          >
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}