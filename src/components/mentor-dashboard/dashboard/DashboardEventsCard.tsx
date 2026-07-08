import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardEventsCard = ({
  mentor,
}: Props) => {
  const events =
    mentor.events.slice(0, 3);

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
            Upcoming Events
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Upcoming workshops and
            webinars
          </p>

        </div>

        <CalendarDays
          className="
            text-purple-600
          "
        />
      </div>

      <div className="space-y-4">

        {events.map(
          (
            event: any,
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
                  items-start
                "
              >
                <div>

                  <h4
                    className="
                      font-semibold
                    "
                  >
                    {event.title}
                  </h4>

                  <p
                    className="
                      text-sm
                      text-slate-500
                      mt-1
                    "
                  >
                    {event.type}
                  </p>

                </div>

                <span
                  className="
                    bg-purple-50
                    text-purple-600
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                  "
                >
                  {event.mode}
                </span>

              </div>

              <div
                className="
                  mt-4
                  text-sm
                  flex
                  justify-between
                "
              >
                <span>
                  {event.date}
                </span>

                <span>
                  {event.registered}
                  {" "}
                  Registered
                </span>
              </div>
            </div>
          )
        )}

      </div>

      <Link
        to="/mentor-dashboard/events"
        className="
          block
          text-center
          mt-6
          text-purple-600
          font-medium
        "
      >
        View All Events
      </Link>
    </div>
  );
};

export default DashboardEventsCard;