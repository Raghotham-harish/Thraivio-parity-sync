import { useState } from "react";
import {
  CalendarDays,
  Clock,
  CheckCircle,
} from "lucide-react";

interface MentorAvailabilityProps {
  mentor: {
    bookingLink: string;

    availability: {
      date: string;
      slots: string[];
    }[];
  };
}

const MentorAvailability = ({
  mentor,
}: MentorAvailabilityProps) => {
  const [selectedDate, setSelectedDate] =
    useState(
      mentor.availability?.[0]?.date || ""
    );

  const [selectedTime, setSelectedTime] =
    useState("");

  const availableSlots =
    mentor.availability.find(
      (item) => item.date === selectedDate
    )?.slots || [];

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          {/* Header */}
          <div className="text-center">

            <span
              className="
                inline-block
                bg-blue-100
                text-blue-700
                px-4
                py-1
                rounded-full
                text-sm
                font-medium
              "
            >
              Schedule Session
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Book Your Mentorship Session
            </h2>

            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                  {mentor.availability.map(
                    (item) => (

                      <button
                        key={item.date}
                        onClick={() => {
                          setSelectedDate(item.date);
                          setSelectedTime("");
                        }}
                        className={`
                          border
                          rounded-xl
                          py-3
                          font-medium
                          transition-all

                          ${
                            selectedDate === item.date
  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]"
  : "hover:border-blue-300 hover:bg-blue-50"
                          }
                        `}
                      >
                        {item.date}
                      </button>

                    )
                  )}

                </div>

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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                  {availableSlots.map(
                    (slot) => (

                      <button
                        key={slot}
                        onClick={() =>
                          setSelectedTime(slot)
                        }
                        className={`
                          border
                          rounded-xl
                          py-3
                          font-medium
                          transition-all

                          ${
                            selectedTime === slot
  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]"
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

            {/* RIGHT SUMMARY CARD */}
            <div>

              <div
                className="
sticky
top-24
border
border-slate-200
rounded-3xl
p-6
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

                  <div className="bg-slate-50 rounded-xl p-4">

  <p className="text-sm text-slate-500">
    Date
  </p>

  <p className="font-semibold mt-1">
    {selectedDate || "Not Selected"}
  </p>

</div>

                  <div className="bg-slate-50 rounded-xl p-4">

  <p className="text-sm text-slate-500">
    Time
  </p>

  <p className="font-semibold mt-1">
    {selectedTime || "Not Selected"}
  </p>

</div>

                 <div className="bg-slate-50 rounded-xl p-4">

  <p className="text-sm text-slate-500">
    Session Type
  </p>

  <p className="font-semibold mt-1">
    Mentorship Session
  </p>

</div>

                </div>

                <div className="mt-6 border-t pt-6">

                  <div className="space-y-2 text-sm">

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

                {selectedTime ? (

                  <a
                    href={mentor.bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      block
                      text-center
                      mt-8
                      bg-blue-600
                      text-white
                      py-3
                      rounded-xl
                      font-medium
                      hover:bg-blue-700
                      transition
                    "
                  >
                    Continue Booking
                  </a>

                ) : (

                  <button
                    disabled
                    className="
                      w-full
                      mt-8
                      bg-slate-300
                      text-slate-500
                      py-3
                      rounded-xl
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