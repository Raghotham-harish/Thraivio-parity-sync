import {
  Clock3,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardAvailabilityCard = ({
  mentor,
}: Props) => {
  const availability =
    Array.isArray(mentor?.availability)
      ? mentor.availability.slice(0, 4)
      : [];

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
          ) => {
            const slots =
              Array.isArray(item?.slots)
                ? item.slots.slice(0, 3)
                : [];

            return (
              <div
                key={`${item?.day ?? "day"}-${index}`}
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
                    {item?.day ??
                      "Unknown Day"}
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
                    {item?.slots?.length ??
                      0}{" "}
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
                  {slots.map(
                    (
                      slot: any,
                      slotIndex: number
                    ) => (
                      <div
                        key={`${item?.day}-${slot?.start ?? "start"}-${slot?.end ?? "end"}-${slotIndex}`}
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

                        {slot?.start ??
                          "--:--"}

                        {" - "}

                        {slot?.end ??
                          "--:--"}
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          }
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

export default DashboardAvailabilityCard;