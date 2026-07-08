import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

interface Announcement {
  id: string;

  title: string;

  description: string;

  category:
    | "Platform"
    | "Program"
    | "Event"
    | "Update";

  date: string;

  important: boolean;
}

interface AnnouncementsProps {
  announcements: Announcement[];

  onViewAll: () => void;

  onRead: (
    id: string
  ) => void;
}

const badgeColor = {
  Platform:
    "bg-blue-100 text-blue-700",

  Program:
    "bg-emerald-100 text-emerald-700",

  Event:
    "bg-violet-100 text-violet-700",

  Update:
    "bg-amber-100 text-amber-700",
};

const Announcements = ({
  announcements,
  onViewAll,
  onRead,
}: AnnouncementsProps) => {
  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <Bell size={16} />

            Announcements
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Latest Updates
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Stay updated with the latest
            platform announcements,
            programs, events and important
            notices.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="
            inline-flex
            items-center
            gap-2

            rounded-2xl

            border
            border-slate-200

            px-6
            py-3

            font-semibold

            transition

            hover:bg-slate-50
          "
        >
          View All

          <ArrowRight size={18} />
        </button>
      </div>

      {/* Announcement Cards */}

      <div
        className="
          mt-8

          grid

          gap-6

          xl:grid-cols-3
        "
      >
        {announcements.map(
          (announcement) => (
                      <div
            key={announcement.id}
            className="
              group

              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-7

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            {/* Top */}

            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  bg-blue-50
                "
              >
                <Bell
                  size={30}
                  className="text-blue-600"
                />
              </div>

              {announcement.important && (
                <span
                  className="
                    rounded-full

                    bg-red-100

                    px-3
                    py-1

                    text-xs
                    font-semibold

                    text-red-700
                  "
                >
                  Important
                </span>
              )}
            </div>

            {/* Category */}

            <div className="mt-7">
              <span
                className={`
                  inline-flex

                  rounded-full

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  ${
                    badgeColor[
                      announcement.category
                    ]
                  }
                `}
              >
                {announcement.category}
              </span>
            </div>

            {/* Title */}

            <h3
              className="
                mt-5

                text-2xl
                font-bold

                transition-colors

                group-hover:text-blue-600
              "
            >
              {announcement.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-4

                leading-7

                text-slate-500
              "
            >
              {announcement.description}
            </p>

            {/* Footer */}

            <div
              className="
                mt-8

                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  space-y-2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm

                    text-slate-500
                  "
                >
                  <CalendarDays
                    size={15}
                  />

                  {announcement.date}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm

                    text-slate-500
                  "
                >
                  <Clock3 size={15} />

                  Recently Updated
                </div>
              </div>

              <button
                onClick={() =>
                  onRead(
                    announcement.id
                  )
                }
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-blue-600

                  px-5
                  py-3

                  font-medium

                  text-white

                  transition-all

                  hover:bg-blue-700
                "
              >
                Read

                <ArrowRight
                  size={16}
                />
              </button>
            </div>
          </div>
        )
      )}
      </div>

      {/* Bottom Banner */}

      <div
        className="
          mt-10

          rounded-[36px]

          bg-gradient-to-r
          from-indigo-600
          via-blue-600
          to-cyan-600

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <span
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-white/10

                px-4
                py-2

                text-sm
                font-medium
              "
            >
              <Sparkles size={16} />

              Stay Updated
            </span>

            <h3
              className="
                mt-5

                text-4xl
                font-bold
              "
            >
              Never miss an important
              announcement.
            </h3>

            <p
              className="
                mt-4

                leading-8

                text-blue-100
              "
            >
              New mentor programs,
              platform improvements,
              workshops, webinars and
              feature releases are
              published here first.
            </p>

            <button
              onClick={onViewAll}
              className="
                mt-8

                inline-flex
                items-center
                gap-2

                rounded-2xl

                bg-white

                px-7
                py-3.5

                font-semibold

                text-blue-700

                transition-all

                hover:scale-105
                hover:bg-slate-100
              "
            >
              View All Updates

              <ArrowRight size={18} />
            </button>
          </div>

          <div
            className="
              flex
              h-28
              w-28

              items-center
              justify-center

              rounded-full

              bg-white/10
            "
          >
            <Bell size={52} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;