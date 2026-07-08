import {
  Star,
  Users,
  CalendarCheck,
  BadgeCheck,
} from "lucide-react";

interface Props {
  mentor: any;
}

const DashboardHeader = ({
  mentor,
}: Props) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        via-blue-700
        to-indigo-700
        p-8
        text-white
      "
    >
      {/* Background Blur */}

      <div
        className="
          absolute
          -top-20
          -right-20
          h-72
          w-72
          rounded-full
          bg-white/10
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -left-24
          h-72
          w-72
          rounded-full
          bg-white/10
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-8
        "
      >
        {/* Left */}

        <div
          className="
            flex
            items-center
            gap-6
          "
        >
          <img
            src={mentor.image}
            alt={mentor.name}
            className="
              h-24
              w-24
              rounded-full
              object-cover
              border-4
              border-white/30
            "
          />

          <div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <h1
                className="
                  text-4xl
                  font-bold
                "
              >
                Welcome Back,
              </h1>

              <BadgeCheck
                className="
                  text-blue-200
                "
                size={28}
              />
            </div>

            <h2
              className="
                text-3xl
                font-bold
                mt-2
              "
            >
              {mentor.name}
            </h2>

            <p
              className="
                text-blue-100
                mt-2
              "
            >
              {mentor.role}
            </p>

            <p
              className="
                text-blue-200
                text-sm
                mt-1
              "
            >
              {mentor.company}
            </p>

          </div>
        </div>

        {/* Right Stats */}

        <div
          className="
            grid
            grid-cols-3
            gap-4
          "
        >
          <div
            className="
              bg-white/10
              backdrop-blur-sm
              rounded-2xl
              p-5
              min-w-[140px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Star size={18} />

              <span className="text-sm">
                Rating
              </span>
            </div>

            <h3
              className="
                text-3xl
                font-bold
                mt-3
              "
            >
              {mentor.rating}
            </h3>
          </div>

          <div
            className="
              bg-white/10
              backdrop-blur-sm
              rounded-2xl
              p-5
              min-w-[140px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Users size={18} />

              <span className="text-sm">
                Students
              </span>
            </div>

            <h3
              className="
                text-3xl
                font-bold
                mt-3
              "
            >
              {mentor.studentsCoached}
            </h3>
          </div>

          <div
            className="
              bg-white/10
              backdrop-blur-sm
              rounded-2xl
              p-5
              min-w-[140px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <CalendarCheck
                size={18}
              />

              <span className="text-sm">
                Sessions
              </span>
            </div>

            <h3
              className="
                text-3xl
                font-bold
                mt-3
              "
            >
              {mentor.sessionsCompleted}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;