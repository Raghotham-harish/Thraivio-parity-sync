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
  const [day, setDay] =
    useState("");

  const [enabled, setEnabled] =
    useState(true);

  const [slots, setSlots] =
    useState<
      {
        start: string;
        end: string;
      }[]
    >([
      {
        start: "",
        end: "",
      },
    ]);

  useEffect(() => {
    if (availability) {
      setDay(
        availability.day
      );

      setEnabled(
        availability.enabled
      );

      setSlots(
        availability.slots.length > 0
          ? availability.slots
          : [
              {
                start: "",
                end: "",
              },
            ]
      );
    } else {
      setDay("");
      setEnabled(true);
      setSlots([
        {
          start: "",
          end: "",
        },
      ]);
    }
  }, [availability]);

  if (!open) return null;

  const handleSlotChange = (
    index: number,
    field: "start" | "end",
    value: string
  ) => {
    setSlots((currentSlots) =>
      currentSlots.map(
        (slot, slotIndex) =>
          slotIndex === index
            ? {
                ...slot,
                [field]: value,
              }
            : slot
      )
    );
  };

  const handleAddSlot = () => {
    setSlots((currentSlots) => [
      ...currentSlots,
      {
        start: "",
        end: "",
      },
    ]);
  };

  const handleRemoveSlot = (
    index: number
  ) => {
    setSlots((currentSlots) =>
      currentSlots.filter(
        (_, slotIndex) =>
          slotIndex !== index
      )
    );
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const validSlots = slots.filter(
      (slot) =>
        slot.start.trim() &&
        slot.end.trim()
    );

    onSave({
      id: availability?.id,
      day,
      enabled,
      slots: validSlots,
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
              Manage mentoring days and
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
              Day
            </label>

            <select
              value={day}
              onChange={(e) =>
                setDay(
                  e.target.value
                )
              }
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4

                bg-white
              "
              required
            >
              <option value="">
                Select a day
              </option>

              <option value="Monday">
                Monday
              </option>

              <option value="Tuesday">
                Tuesday
              </option>

              <option value="Wednesday">
                Wednesday
              </option>

              <option value="Thursday">
                Thursday
              </option>

              <option value="Friday">
                Friday
              </option>

              <option value="Saturday">
                Saturday
              </option>

              <option value="Sunday">
                Sunday
              </option>
            </select>
          </div>

          <div>
            <label className="font-medium">
              Availability Status
            </label>

            <div
              className="
                flex
                items-center
                gap-3

                mt-3
              "
            >
              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) =>
                  setEnabled(
                    e.target.checked
                  )
                }
                className="
                  w-5
                  h-5
                "
              />

              <span className="text-slate-700">
                Enable this day for bookings
              </span>
            </div>
          </div>

          <div>
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <label className="font-medium">
                Time Slots
              </label>

              <button
                type="button"
                onClick={handleAddSlot}
                className="
                  text-blue-600
                  hover:text-blue-700

                  font-medium
                "
              >
                + Add Slot
              </button>
            </div>

            <div className="space-y-4 mt-3">
              {slots.map(
                (slot, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <input
                      type="time"
                      value={
                        slot.start
                      }
                      onChange={(e) =>
                        handleSlotChange(
                          index,
                          "start",
                          e.target.value
                        )
                      }
                      className="
                        flex-1

                        border

                        rounded-xl

                        p-4
                      "
                      required
                    />

                    <span className="text-slate-500">
                      to
                    </span>

                    <input
                      type="time"
                      value={
                        slot.end
                      }
                      onChange={(e) =>
                        handleSlotChange(
                          index,
                          "end",
                          e.target.value
                        )
                      }
                      className="
                        flex-1

                        border

                        rounded-xl

                        p-4
                      "
                      required
                    />

                    {slots.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveSlot(
                            index
                          )
                        }
                        className="
                          text-red-500
                          hover:text-red-600

                          text-xl
                          font-medium
                        "
                      >
                        ×
                      </button>
                    )}
                  </div>
                )
              )}
            </div>

            <p
              className="
                text-sm
                text-slate-500

                mt-2
              "
            >
              Add the start and end time for
              each available session slot.
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