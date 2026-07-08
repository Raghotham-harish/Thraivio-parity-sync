import { memo } from "react";

import type { AdminEvent } from "@/types/admin-events";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EventForm from "./EventForm";

interface EditEventDialogProps {
  open: boolean;

  event: AdminEvent | null;

  loading?: boolean;

  onOpenChange: (open: boolean) => void;

  onSubmit: () => void;
}

const EditEventDialog = ({
  open,
  event,
  loading = false,
  onOpenChange,
  onSubmit,
}: EditEventDialogProps) => {

  if (!event) return null;

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent
        className="
          max-h-[95vh]
          overflow-y-auto
          sm:max-w-6xl
        "
      >

        <DialogHeader>

          <DialogTitle>

            Edit Event

          </DialogTitle>

          <DialogDescription>

            Update event information, mentor details,
            pricing, schedule and publishing settings.

          </DialogDescription>

        </DialogHeader>

        <EventForm
          mode="edit"
          event={event}
          loading={loading}
          onSubmit={onSubmit}
        />

      </DialogContent>

    </Dialog>

  );

};

export default memo(EditEventDialog);