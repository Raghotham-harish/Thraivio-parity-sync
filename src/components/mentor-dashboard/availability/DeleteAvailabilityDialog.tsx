import {
  Trash2,
  CalendarDays,
} from "lucide-react";

import type { Availability } from "@/types/availability";

interface DeleteAvailabilityDialogProps {
  open: boolean;

  availability: Availability | null;

  onClose: () => void;

  onConfirm: () => void;
}

const DeleteAvailabilityDialog = ({
  open,
  availability,
  onClose,
  onConfirm,
}: DeleteAvailabilityDialogProps) => {
  if (
    !open ||
    !availability
  )
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/50

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-md

          rounded-3xl

          p-8
        "
      >
        {/* Icon */}

        <div
          className="
            h-20
            w-20

            mx-auto

            rounded-full

            bg-red-100

            flex
            items-center
            justify-center
          "
        >
          <Trash2
            size={36}
            className="
              text-red-600
            "
          />
        </div>

        {/* Content */}

        <div
          className="
            text-center
            mt-6
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Delete Availability?
          </h2>

          <p
            className="
              text-slate-500
              mt-3
            "
          >
            You are about to remove:
          </p>

          <div
            className="
              mt-5

              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <CalendarDays
                size={22}
                className="
                  text-blue-600
                "
              />

              <div className="text-left">
                <h3 className="font-semibold">
                  {availability.day}
                </h3>

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  {
                    availability.slots
                      .length
                  }{" "}
                  Slots
                </p>
              </div>
            </div>
          </div>

          <p
            className="
              text-red-500
              text-sm

              mt-5
            "
          >
            This action cannot be undone.
          </p>
        </div>

        {/* Footer */}

        <div
          className="
            grid
            grid-cols-2
            gap-3

            mt-8
          "
        >
          <button
            onClick={onClose}
            className="
              border

              py-3

              rounded-xl

              font-medium
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              bg-red-600
              hover:bg-red-700

              text-white

              py-3

              rounded-xl

              font-medium

              transition
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAvailabilityDialog;