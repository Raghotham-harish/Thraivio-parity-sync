import { useEffect, useState } from "react";
import type { Event } from "@/types/event";

interface EventFormModalProps {
  open: boolean;

  event?: Event | null;

  onClose: () => void;

  onSave: (event: Event) => void;
}

const EventFormModal = ({
  open,
  event,
  onClose,
  onSave,
}: EventFormModalProps) => {
  const [formData, setFormData] =
    useState<Event>({
      title: "",
      date: "",
      month: "",
      day: "",
      weekday: "",
      time: "",
      type: "",
      mode: "",
      registered: 0,
      seatsLeft: 0,
    });

  useEffect(() => {
    if (event) {
      setFormData(event);
    }
  }, [event]);

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
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-4xl

          rounded-3xl

          max-h-[90vh]
          overflow-y-auto

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
              {event
                ? "Edit Event"
                : "Create Event"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage event details for
              your audience.
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
          {/* Event Title */}

          <div>
            <label className="font-medium">
              Event Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
                    e.target.value,
                })
              }
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-3
              "
              required
            />
          </div>

          {/* Date */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label>
                Full Date
              </label>

              <input
                type="text"
                placeholder="12 Aug 2026"
                value={formData.date}
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
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Time
              </label>

              <input
                type="text"
                placeholder="7:00 PM"
                value={formData.time}
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
                  p-3
                "
              />
            </div>
          </div>

          {/* Calendar Fields */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-5
            "
          >
            <div>
              <label>
                Month
              </label>

              <input
                type="text"
                value={formData.month}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    month:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Day
              </label>

              <input
                type="text"
                value={formData.day}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    day:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Weekday
              </label>

              <input
                type="text"
                value={
                  formData.weekday
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    weekday:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>
          </div>

          {/* Type & Mode */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label>
                Event Type
              </label>

              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              >
                <option>
                  Workshop
                </option>

                <option>
                  Webinar
                </option>

                <option>
                  Bootcamp
                </option>

                <option>
                  AMA Session
                </option>
              </select>
            </div>

            <div>
              <label>
                Mode
              </label>

              <select
                value={formData.mode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mode:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              >
                <option>
                  Online
                </option>

                <option>
                  Offline
                </option>

                <option>
                  Hybrid
                </option>
              </select>
            </div>
          </div>

          {/* Stats */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label>
                Registered Users
              </label>

              <input
                type="number"
                value={
                  formData.registered
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    registered:
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
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Seats Left
              </label>

              <input
                type="number"
                value={
                  formData.seatsLeft
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seatsLeft:
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
                  p-3
                "
              />
            </div>
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
              {event
                ? "Update Event"
                : "Create Event"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default EventFormModal;