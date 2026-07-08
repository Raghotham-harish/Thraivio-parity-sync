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

interface BookingGridCardProps {
  booking: Booking;

  onEdit: (
    booking: Booking
  ) => void;

  onDelete: (
    booking: Booking
  ) => void;
}

const BookingGridCard = ({
  booking,
  onEdit,
  onDelete,
}: BookingGridCardProps) => {
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

        p-6

        hover:shadow-xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top */}

      <div
        className="
          flex
          justify-between
          gap-4
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-blue-50

              flex
              items-center
              justify-center
            "
          >
            <User
              size={24}
              className="
                text-blue-600
              "
            />
          </div>

          <div>

            <h3
              className="
                text-xl
                font-bold
              "
            >
              {booking.studentName}
            </h3>

            <div
              className="
                flex
                items-center
                gap-2

                text-slate-500
                text-sm

                mt-1
              "
            >
              <Mail size={14} />

              {booking.studentEmail}
            </div>

          </div>

        </div>

        <span
  className={`
    inline-flex
    items-center
    justify-center
    whitespace-nowrap

    px-3
    py-1.5

    rounded-full

    text-xs
    font-semibold

    min-w-[90px]

    ${
      booking.status === "confirmed"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
    }
  `}
>
  {booking.status === "confirmed"
    ? "Confirmed"
    : "Pending"}
</span>

      </div>

      {/* Session */}

      <div
        className="
          mt-6

          bg-slate-50

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
          Session Type
        </p>

        <h4
          className="
            font-bold
            mt-1
          "
        >
          {booking.sessionType}
        </h4>

      </div>

      {/* Details */}

      <div
        className="
          mt-6
          space-y-3
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            text-slate-600
          "
        >
          <CalendarDays size={18} />
          {booking.date}
        </div>

        <div
          className="
            flex
            items-center
            gap-3
            text-slate-600
          "
        >
          <Clock3 size={18} />
          {booking.time}
        </div>

        <div
          className="
            flex
            items-center
            gap-3
            text-slate-600
          "
        >
          <DollarSign size={18} />
          ${booking.amount}
        </div>

      </div>

      {/* Duration */}

      <div className="mt-5">

        <span
          className="
            bg-blue-50
            text-blue-700

            px-3
            py-2

            rounded-full

            text-sm
          "
        >
          {booking.duration}
        </span>

      </div>

      {/* Actions */}

      <div
        className="
          flex
          gap-3

          mt-8
        "
      >
        <button
          onClick={() =>
            onEdit(booking)
          }
          className="
            flex-1

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

          Edit
        </button>

        <button
          onClick={() =>
            onDelete(booking)
          }
          className="
            flex-1

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

          Delete
        </button>

      </div>

    </div>
  );
};

export default BookingGridCard;