import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CalendarDays,
  Clock,
  CheckCircle,
} from "lucide-react";

import type { MentorApiResponse } from "@/services/mentor.service";

interface MentorAvailabilityProps {
  mentor: MentorApiResponse;
}

type AvailabilitySlot = {
  start: string;
  end: string;
};

type AvailabilityDay = {
  day: string;
  enabled: boolean;
  slots: AvailabilitySlot[];
  date: string;
};

const MentorAvailability = ({
  mentor,
}: MentorAvailabilityProps) => {
  const getDayIndex = (day: string) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days.findIndex(
      (item) =>
        item.toLowerCase() ===
        day.toLowerCase()
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const availability = useMemo<
    AvailabilityDay[]
  >(() => {
    const today = new Date();

    if (!Array.isArray(mentor.availability)) {
      return [];
    }

    const result: AvailabilityDay[] = [];

    mentor.availability.forEach((item) => {
      if (
        !item ||
        typeof item !== "object"
      ) {
        return;
      }

      const data =
        item as Record<string, unknown>;

      const day =
        typeof data.day === "string"
          ? data.day
          : "";

      const enabled =
        data.enabled === true;

      const rawSlots = data.slots;

      const slots: AvailabilitySlot[] = [];

      if (Array.isArray(rawSlots)) {
        rawSlots.forEach((slot) => {
          if (
            !slot ||
            typeof slot !== "object"
          ) {
            return;
          }

          const slotData =
            slot as Record<
              string,
              unknown
            >;

          if (
            typeof slotData.start ===
              "string" &&
            typeof slotData.end ===
              "string"
          ) {
            slots.push({
              start:
                slotData.start,
              end:
                slotData.end,
            });
          }
        });
      }

      if (
        !day ||
        !enabled ||
        slots.length === 0
      ) {
        return;
      }

      const targetDay =
        getDayIndex(day);

      if (targetDay === -1) {
        return;
      }

      const currentDay =
        today.getDay();

      const daysUntil =
        (targetDay -
          currentDay +
          7) %
        7;

      const nextDate = new Date(today);

      nextDate.setDate(
        today.getDate() + daysUntil
      );

      result.push({
        day,
        enabled,
        slots,
        date: formatDate(nextDate),
      });
    });

    result.sort((a, b) => {
      const currentDay =
        today.getDay();

      const getDaysUntil = (
        day: string
      ) => {
        const targetDay =
          getDayIndex(day);

        return (
          (targetDay -
            currentDay +
            7) %
          7
        );
      };

      return (
        getDaysUntil(a.day) -
        getDaysUntil(b.day)
      );
    });

    return result;
  }, [mentor.availability]);

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedTime, setSelectedTime] =
    useState("");

  useEffect(() => {
    if (
      availability.length > 0 &&
      !availability.some(
        (item) =>
          item.date === selectedDate
      )
    ) {
      setSelectedDate(
        availability[0].date
      );
      setSelectedTime("");
    }
  }, [availability, selectedDate]);

  const selectedAvailability =
    availability.find(
      (item) =>
        item.date === selectedDate
    );

  const availableSlots =
    selectedAvailability?.slots || [];

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          {/* Header */}
          <div className="text-center">

            <span
              className="
                inline-block
                bg-blue-50
                border
                border-blue-200
                text-blue-700
                px-4
                py-1
                rounded-lg
                text-sm
                font-medium
              "
            >
              Schedule Session
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Book Your Mentorship Session
            </h2>

            <p className="text-slate-600 leading-7 mt-3 max-w-2xl mx-auto">
              Select your preferred date and time.
              Complete the booking in just a few clicks.
            </p>

          </div>

          {/* Main Booking Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* LEFT */}
            <div className="lg:col-span-2">

              {/* Date Selection */}
              <div>

                <div className="flex items-center gap-2 mb-4">

                  <CalendarDays
                    size={20}
                    className="text-blue-600"
                  />

                  <h3 className="font-semibold text-lg">
                    Select Date
                  </h3>

                </div>

                {availability.length > 0 ? (

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                    {availability.map((item) => (

                      <button
                        key={item.date}
                        onClick={() => {
                          setSelectedDate(
                            item.date
                          );
                          setSelectedTime("");
                        }}
                        className={`
                          border
                          rounded-lg
                          py-3
                          font-medium
                          transition
                          duration-200
                          ${
                            selectedDate ===
                            item.date
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "hover:border-blue-500 hover:bg-blue-50"
                          }
                        `}
                      >
                        {item.date}
                      </button>

                    ))}

                  </div>

                ) : (

                  <div className="border border-slate-200 rounded-lg p-5 text-slate-500">
                    No availability available.
                  </div>

                )}

              </div>

              {/* Time Selection */}
              <div className="mt-10">

                <div className="flex items-center gap-2 mb-4">

                  <Clock
                    size={20}
                    className="text-blue-600"
                  />

                  <h3 className="font-semibold text-lg">
                    Select Time
                  </h3>

                </div>

                {availableSlots.length > 0 ? (

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                    {availableSlots.map((slot) => {
                      const slotLabel =
                        `${slot.start} - ${slot.end}`;

                      return (
                        <button
                          key={slotLabel}
                          onClick={() =>
                            setSelectedTime(
                              slotLabel
                            )
                          }
                          className={`
                            border
                            rounded-lg
                            py-3
                            font-medium
                            transition
                            duration-200
                            ${
                              selectedTime ===
                              slotLabel
                                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                : "hover:border-blue-500 hover:bg-blue-50"
                            }
                          `}
                        >
                          {slotLabel}
                        </button>
                      );
                    })}

                  </div>

                ) : (

                  <div className="border border-slate-200 rounded-lg p-5 text-slate-500">
                    No time slots available for this date.
                  </div>

                )}

              </div>

            </div>

            {/* RIGHT SUMMARY CARD */}
            <div>

              <div
                className="
                  sticky
                  top-24
                  border
                  border-slate-200
                  rounded-2xl
                  p-7
                  bg-white
                  shadow-sm
                "
              >

                <h3 className="text-xl font-bold">
                  Booking Summary
                </h3>

                <p className="text-slate-500 mt-2">
                  Review your selected slot.
                </p>

                <div className="mt-6 space-y-4">

                  {/* Date */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">

                    <p className="text-sm text-slate-500">
                      Date
                    </p>

                    <p className="font-semibold mt-1">
                      {selectedDate ||
                        "Not Selected"}
                    </p>

                  </div>

                  {/* Time */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">

                    <p className="text-sm text-slate-500">
                      Time
                    </p>

                    <p className="font-semibold mt-1">
                      {selectedTime ||
                        "Not Selected"}
                    </p>

                  </div>

                  {/* Session Type */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4">

                    <p className="text-sm text-slate-500">
                      Session Type
                    </p>

                    <p className="font-semibold mt-1">
                      Mentorship Session
                    </p>

                  </div>

                </div>

                {/* Booking Benefits */}
                <div className="mt-6 border-t pt-6">

                  <div className="space-y-3 text-sm">

                    <div className="flex items-center gap-2">

                      <CheckCircle
                        size={16}
                        className="text-blue-600"
                      />

                      Instant Booking

                    </div>

                    <div className="flex items-center gap-2">

                      <CheckCircle
                        size={16}
                        className="text-blue-600"
                      />

                      Calendar Invite

                    </div>

                    <div className="flex items-center gap-2">

                      <CheckCircle
                        size={16}
                        className="text-blue-600"
                      />

                      Email Confirmation

                    </div>

                  </div>

                </div>

                {/* Booking Button */}
                {selectedTime ? (

                  <button
                    type="button"
                    className="
                      w-full
                      mt-8
                      bg-blue-600
                      text-white
                      py-3
                      rounded-lg
                      font-semibold
                      hover:bg-blue-700
                      transition
                    "
                  >
                    Continue Booking
                  </button>

                ) : (

                  <button
                    disabled
                    className="
                      w-full
                      mt-8
                      bg-slate-200
                      text-slate-400
                      py-3
                      rounded-lg
                      font-medium
                      cursor-not-allowed
                    "
                  >
                    Select a Time Slot
                  </button>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorAvailability;