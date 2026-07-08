import {
  useEffect,
  useState,
} from "react";

import type { Availability } from "@/types/availability";

interface AvailabilityFormModalProps {
  open: boolean;

  availability?: Availability | null;

  onClose: () => void;

  onSave: (
    availability: Availability
  ) => void;
}

const AvailabilityFormModal = ({
  open,
  availability,
  onClose,
  onSave,
}: AvailabilityFormModalProps) => {
  const [date, setDate] =
    useState("");

  const [slots, setSlots] =
    useState("");

  useEffect(() => {
    if (availability) {
      setDate(
        availability.date
      );

      setSlots(
        availability.slots.join(
          ", "
        )
      );
    } else {
      setDate("");
      setSlots("");
    }
  }, [availability]);

  if (!open) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSave({
      id: availability?.id,
      date,
      slots: slots
        .split(",")
        .map((slot) =>
          slot.trim()
        )
        .filter(Boolean),
    });

    onClose();
  };

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
          max-w-2xl

          rounded-3xl

          p-8
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-8
          "
        >
          <div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {availability
                ? "Edit Availability"
                : "Add Availability"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage mentoring dates and
              available session slots.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              text-3xl
              text-slate-500
            "
          >
            ×
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>

            <label className="font-medium">
              Date
            </label>

            <input
              type="text"
              value={date}
              onChange={(e) =>
                setDate(
                  e.target.value
                )
              }
              placeholder="Jun 20"
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4
              "
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Time Slots
            </label>

            <textarea
              rows={4}
              value={slots}
              onChange={(e) =>
                setSlots(
                  e.target.value
                )
              }
              placeholder="10:00 AM, 11:00 AM, 2:00 PM"
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4

                resize-none
              "
              required
            />

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Separate slots with commas.
            </p>

          </div>

          {/* Footer */}

          <div
            className="
              flex
              justify-end
              gap-3

              pt-6
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                border

                px-6
                py-3

                rounded-xl
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                bg-blue-600
                hover:bg-blue-700

                text-white

                px-6
                py-3

                rounded-xl
              "
            >
              {availability
                ? "Update Availability"
                : "Create Availability"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AvailabilityFormModal;