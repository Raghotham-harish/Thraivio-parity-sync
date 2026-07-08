import { Link } from "react-router-dom";
import {
  CalendarCheck,
} from "lucide-react";

const bookings = [
  {
    student:
      "Rahul Sharma",
    session:
      "Mentorship Call",
    status:
      "confirmed",
  },

  {
    student:
      "Priya Patel",
    session:
      "Mock Interview",
    status:
      "pending",
  },

  {
    student:
      "Amit Verma",
    session:
      "Intro Call",
    status:
      "confirmed",
  },
];

const DashboardBookingsCard =
  () => {
    return (
      <div
        className="
          bg-white
          border
          rounded-3xl
          p-6
          shadow-sm
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            mb-6
          "
        >
          <div>

            <h3
              className="
                text-xl
                font-bold
              "
            >
              Recent Bookings
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              Latest student
              sessions
            </p>

          </div>

          <CalendarCheck
            className="
              text-green-600
            "
          />
        </div>

        <div className="space-y-4">

          {bookings.map(
            (
              booking,
              index
            ) => (
              <div
                key={index}
                className="
                  border
                  rounded-2xl
                  p-4
                  flex
                  justify-between
                  items-center
                "
              >
                <div>

                  <h4
                    className="
                      font-semibold
                    "
                  >
                    {
                      booking.student
                    }
                  </h4>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    {
                      booking.session
                    }
                  </p>

                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium

                    ${
                      booking.status ===
                      "confirmed"
                        ? `
                          bg-green-100
                          text-green-700
                        `
                        : `
                          bg-yellow-100
                          text-yellow-700
                        `
                    }
                  `}
                >
                  {
                    booking.status
                  }
                </span>
              </div>
            )
          )}

        </div>

        <Link
  to="/mentor-dashboard/bookings"
  className="
    block
    text-center
    mt-6
    text-green-600
    font-medium
  "
>
  Manage Bookings
</Link>
      </div>
    );
  };

export default
DashboardBookingsCard;