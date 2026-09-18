import {
  useEffect,
  useState,
} from "react";

import type { Booking } from "@/types/booking";

interface BookingFormModalProps {
  open: boolean;

  booking: Booking | null;

  onClose: () => void;

  onSave: (
    booking: Booking
  ) => void;
}

const BookingFormModal = ({
  open,
  booking,
  onClose,
  onSave,
}: BookingFormModalProps) => {
  const [formData, setFormData] =
    useState<Booking>({
      id: "",

      studentName: "",

      studentEmail: "",

      sessionType:
        "Mentorship Call",

      date: "",

      time: "",

      duration:
        "60 Minutes",

      amount: 99,

      status:
        "pending",

      notes: "",
    });

  useEffect(() => {
    if (booking) {
      setFormData(booking);
    } else {
      setFormData({
        id: Date.now().toString(),

        studentName: "",

        studentEmail: "",

        sessionType:
          "Mentorship Call",

        date: "",

        time: "",

        duration:
          "60 Minutes",

        amount: 99,

        status:
          "pending",

        notes: "",
      });
    }
  }, [booking]);

  if (!open) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSave(formData);

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

        overflow-y-auto
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-3xl

          rounded-3xl

          p-8

          max-h-[90vh]
          overflow-y-auto
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
              {booking
                ? "Edit Booking"
                : "Add Booking"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage mentorship booking
              details.
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

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label className="font-medium">
                Student Name
              </label>

              <input
                type="text"
                value={
                  formData.studentName
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    studentName:
                      e.target.value,
                  })
                }
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
                Student Email
              </label>

              <input
                type="email"
                value={
                  formData.studentEmail
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    studentEmail:
                      e.target.value,
                  })
                }
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
                Session Type
              </label>

              <select
                value={
                  formData.sessionType
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sessionType:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-4
                "
              >
                <option>
                  Mentorship Call
                </option>

                <option>
                  Mock Interview
                </option>

                <option>
                  Career Guidance
                </option>

                <option>
                  Monthly Program
                </option>
              </select>
            </div>

            <div>
              <label className="font-medium">
                Status
              </label>

              <select
                value={
                  formData.status
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status:
                      e.target
                        .value as Booking["status"],
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-4
                "
              >
                <option value="pending">
                  Pending
                </option>

                <option value="confirmed">
                  Confirmed
                </option>

                <option value="completed">
                  Completed
                </option>

                <option value="cancelled">
                  Cancelled
                </option>
              </select>
            </div>

            <div>
              <label className="font-medium">
                Date
              </label>

              <input
                type="date"
                value={
                  formData.date
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date:
                      e.target.value,
                  })
                }
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
                Time
              </label>

              <input
                type="time"
                value={
                  formData.time
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    time:
                      e.target.value,
                  })
                }
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
                Duration
              </label>

              <input
                type="text"
                value={
                  formData.duration
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    duration:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-4
                "
              />
            </div>

            <div>
              <label className="font-medium">
                Amount ($)
              </label>

              <input
                type="number"
                value={
                  formData.amount
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-4
                "
              />
            </div>

          </div>

          <div>
            <label className="font-medium">
              Session Notes
            </label>

            <textarea
              value={formData.notes ?? ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  notes: e.target.value,
                })
              }
              rows={4}
              placeholder="Private notes about this booking - progress, what to cover next time, follow-ups..."
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-4
                resize-none
              "
            />
          </div>

          <div
            className="
              flex
              justify-end
              gap-3
              pt-4
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
              {booking
                ? "Update Booking"
                : "Create Booking"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default BookingFormModal;