import {
  CalendarDays,
  Clock3,
  DollarSign,
  Mail,
  Pencil,
  Trash2,
  User,
} from "lucide-react";

import type { Booking } from "@/types/booking";

interface BookingListCardProps {
  booking: Booking;

  onEdit: (
    booking: Booking
  ) => void;

  onDelete: (
    booking: Booking
  ) => void;
}

const BookingListCard = ({
  booking,
  onEdit,
  onDelete,
}: BookingListCardProps) => {
  const statusStyles = {
    pending:
      "bg-amber-50 text-amber-700",

    confirmed:
      "bg-blue-50 text-blue-700",

    completed:
      "bg-green-50 text-green-700",

    cancelled:
      "bg-red-50 text-red-700",
  };

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div className="p-6">

        <div
          className="
            flex
            flex-col

            xl:flex-row
            xl:items-center
            xl:justify-between

            gap-6
          "
        >
          {/* Left */}

          <div
            className="
              flex
              gap-5
            "
          >
            <div
              className="
                h-16
                w-16

                rounded-2xl

                bg-blue-50

                flex
                items-center
                justify-center

                shrink-0
              "
            >
              <User
                size={28}
                className="
                  text-blue-600
                "
              />
            </div>

            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  flex-wrap
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {booking.studentName}
                </h2>

                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      statusStyles[
                        booking.status
                      ]
                    }
                  `}
                >
                  {booking.status}
                </span>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-slate-500

                  mt-2
                "
              >
                <Mail size={16} />

                {booking.studentEmail}
              </div>

              <div
                className="
                  grid
                  md:grid-cols-2

                  gap-4

                  mt-5
                "
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {booking.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {booking.time}
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  ${booking.amount}
                </div>

                <div>
                  {booking.duration}
                </div>
              </div>

            </div>

          </div>

          {/* Right */}

          <div
            className="
              flex
              flex-col
              gap-3
            "
          >
            <div
              className="
                bg-slate-50

                rounded-xl

                px-4
                py-3

                font-medium
                text-center
              "
            >
              {booking.sessionType}
            </div>

            <button
              onClick={() =>
                onEdit(booking)
              }
              className="
                border
                border-blue-600

                text-blue-600

                px-5
                py-3

                rounded-2xl

                flex
                items-center
                justify-center
                gap-2

                hover:bg-blue-600
                hover:text-white

                transition
              "
            >
              <Pencil size={18} />

              Edit Booking
            </button>

            <button
              onClick={() =>
                onDelete(booking)
              }
              className="
                bg-red-600
                hover:bg-red-700

                text-white

                px-5
                py-3

                rounded-2xl

                flex
                items-center
                justify-center
                gap-2

                transition
              "
            >
              <Trash2 size={18} />

              Delete Booking
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BookingListCard;