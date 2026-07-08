import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CalendarDays,
  Clock3,
  X,
  User,
} from "lucide-react";

import type { Session } from "@/types/session";

interface Props {
  open: boolean;

  session: Session | null;

  onClose: () => void;

  onSave: (
    sessionId: string,
    date: string,
    time: string
  ) => void;
}

const RescheduleSessionModal = ({
  open,
  session,
  onClose,
  onSave,
}: Props) => {
  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState("");

  useEffect(() => {
    if (session) {
      setSelectedDate(session.date);

      setSelectedTime(session.time);
    }
  }, [session]);

  const availableDates =
    useMemo(
      () => [
        "25 Jun 2026",
        "26 Jun 2026",
        "27 Jun 2026",
        "28 Jun 2026",
        "29 Jun 2026",
        "30 Jun 2026",
      ],
      []
    );

  const availableSlots =
    useMemo(
      () => [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "01:00 PM",
        "03:00 PM",
        "05:00 PM",
        "07:00 PM",
        "08:00 PM",
      ],
      []
    );

  if (!open || !session)
    return null;

  const handleSave = () => {
    onSave(
      session.id,
      selectedDate,
      selectedTime
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

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
          max-w-5xl

          rounded-[32px]

          overflow-hidden

          max-h-[90vh]

          flex
          flex-col
        "
      >
        {/* Header */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            text-white

            p-8
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6

              h-10
              w-10

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center
            "
          >
            <X size={18} />
          </button>

          <h2
            className="
              text-3xl
              font-bold
            "
          >
            Reschedule Session
          </h2>

          <p
            className="
              mt-3

              text-blue-100
            "
          >
            Select a new date and time
            that works best for you.
          </p>
        </div>

        {/* Content */}

        <div
          className="
            overflow-y-auto

            flex-1

            p-8
          "
        >
          <div
            className="
              grid
              xl:grid-cols-3

              gap-8
            "
          >
            {/* Left Side */}

            <div className="xl:col-span-2">

              {/* Mentor Card */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6

                  mb-8
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <img
                    src={
                      session.mentorImage
                    }
                    alt={
                      session.mentorName
                    }
                    className="
                      h-20
                      w-20

                      rounded-3xl

                      object-cover
                    "
                  />

                  <div>
                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {
                        session.mentorName
                      }
                    </h3>

                    <p
                      className="
                        text-slate-600
                      "
                    >
                      {
                        session.sessionType
                      }
                    </p>

                    <p
                      className="
                        text-sm
                        text-slate-500

                        mt-1
                      "
                    >
                      {
                        session.mentorCompany
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Dates */}

              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    mb-4
                  "
                >
                  <CalendarDays
                    size={18}
                    className="
                      text-blue-600
                    "
                  />

                  <h3
                    className="
                      font-semibold
                    "
                  >
                    Select Date
                  </h3>
                </div>

                <div
                  className="
                    grid
                    md:grid-cols-3

                    gap-4
                  "
                >
                  {availableDates.map(
                    (date) => (
                      <button
                        key={date}
                        onClick={() =>
                          setSelectedDate(
                            date
                          )
                        }
                        className={`
                          p-4

                          rounded-2xl

                          border

                          font-medium

                          transition-all

                          ${
                            selectedDate ===
                            date
                              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                              : "hover:border-blue-300 hover:bg-blue-50"
                          }
                        `}
                      >
                        {date}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Slots */}

              <div className="mt-10">
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    mb-4
                  "
                >
                  <Clock3
                    size={18}
                    className="
                      text-blue-600
                    "
                  />

                  <h3
                    className="
                      font-semibold
                    "
                  >
                    Available Slots
                  </h3>
                </div>

                <div
                  className="
                    grid
                    md:grid-cols-4

                    gap-4
                  "
                >
                  {availableSlots.map(
                    (slot) => (
                      <button
                        key={slot}
                        onClick={() =>
                          setSelectedTime(
                            slot
                          )
                        }
                        className={`
                          p-4

                          rounded-2xl

                          border

                          font-medium

                          transition-all

                          ${
                            selectedTime ===
                            slot
                              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                              : "hover:border-blue-300 hover:bg-blue-50"
                          }
                        `}
                      >
                        {slot}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}

            <div>
              <div
                className="
                  sticky
                  top-0

                  bg-slate-50

                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Schedule Preview
                </h3>

                <div
                  className="
                    mt-6

                    space-y-4
                  "
                >
                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        text-slate-500
                      "
                    >
                      <User size={16} />
                      Mentor
                    </div>

                    <h4
                      className="
                        font-semibold

                        mt-2
                      "
                    >
                      {
                        session.mentorName
                      }
                    </h4>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Selected Date
                    </p>

                    <h4
                      className="
                        font-semibold

                        mt-2
                      "
                    >
                      {selectedDate}
                    </h4>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Selected Time
                    </p>

                    <h4
                      className="
                        font-semibold

                        mt-2
                      "
                    >
                      {selectedTime}
                    </h4>
                  </div>
                </div>

                <div
                  className="
                    mt-8

                    space-y-3
                  "
                >
                  <button
                    onClick={handleSave}
                    disabled={
                      !selectedDate ||
                      !selectedTime
                    }
                    className="
                      w-full

                      bg-blue-600
                      hover:bg-blue-700

                      disabled:bg-slate-300

                      text-white

                      py-3

                      rounded-xl

                      font-medium
                    "
                  >
                    Confirm Schedule
                  </button>

                  <button
                    onClick={onClose}
                    className="
                      w-full

                      border

                      py-3

                      rounded-xl

                      font-medium
                    "
                  >
                    Cancel
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleSessionModal; 