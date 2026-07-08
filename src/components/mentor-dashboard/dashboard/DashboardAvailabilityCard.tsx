import {
  Clock3,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardAvailabilityCard =
  ({
    mentor,
  }: Props) => {
    const availability =
      mentor.availability.slice(
        0,
        4
      );

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
              Availability
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              Upcoming available slots
            </p>

          </div>

          <CalendarDays
            className="
              text-blue-600
            "
          />
        </div>

        <div className="space-y-4">

          {availability.map(
            (
              item: any,
              index: number
            ) => (
              <div
                key={index}
                className="
                  border
                  rounded-2xl
                  p-4
                "
              >
                <div
                  className="
                    flex
                    justify-between
                    items-center
                  "
                >
                  <h4
                    className="
                      font-semibold
                    "
                  >
                    {item.date}
                  </h4>

                  <span
                    className="
                      text-xs
                      bg-blue-50
                      text-blue-600
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    {
                      item.slots
                        .length
                    }{" "}
                    Slots
                  </span>
                </div>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-3
                  "
                >
                  {item.slots
                    .slice(0, 3)
                    .map(
                      (
                        slot: string
                      ) => (
                        <div
                          key={slot}
                          className="
                            flex
                            items-center
                            gap-1
                            bg-slate-100
                            px-3
                            py-1
                            rounded-full
                            text-xs
                          "
                        >
                          <Clock3 size={12} />
                          {slot}
                        </div>
                      )
                    )}
                </div>
              </div>
            )
          )}

        </div>

        <Link
          to="/mentor-dashboard/availability"
          className="
            block
            text-center
            mt-6
            text-blue-600
            font-medium
          "
        >
          Manage Availability
        </Link>
      </div>
    );
  };

export default
DashboardAvailabilityCard;