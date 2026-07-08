import { memo } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EventForm from "./EventForm";

interface CreateEventDialogProps {
  open: boolean;

  loading?: boolean;

  onOpenChange: (open: boolean) => void;

  onSubmit: () => void;
}

const CreateEventDialog = ({
  open,
  loading = false,
  onOpenChange,
  onSubmit,
}: CreateEventDialogProps) => {
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
          p-0
        "
      >
        <DialogHeader className="border-b px-8 py-6">

          <DialogTitle>

            Create New Event

          </DialogTitle>

          <DialogDescription>

            Create a new webinar, workshop,
            bootcamp, masterclass or mentoring
            event for CoachCoaching.

          </DialogDescription>

        </DialogHeader>

        <div className="p-8">

          <EventForm
            mode="create"
            loading={loading}
            onSubmit={onSubmit}
          />

        </div>

      </DialogContent>

    </Dialog>
  );
};

export default memo(CreateEventDialog);