interface Props {
  events: any[];
}

const EventsPreviewCard = ({
  events,
}: Props) => {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-8
      "
    >
      <h2
        className="
          text-2xl
          font-bold
        "
      >
        Upcoming Events
      </h2>

      <div className="space-y-4 mt-6">

        {events
          .slice(0, 4)
          .map((event) => (
            <div
              key={event.id}
              className="
                border
                rounded-2xl
                p-5

                flex
                justify-between
                items-center
              "
            >
              <div>
                <h3 className="font-bold">
                  {event.title}
                </h3>

                <p
                  className="
                    text-slate-500
                    mt-1
                  "
                >
                  {event.date}
                </p>
              </div>

              <span
                className="
                  bg-blue-50
                  text-blue-700

                  px-3
                  py-1

                  rounded-full

                  text-sm
                "
              >
                {event.type}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventsPreviewCard;