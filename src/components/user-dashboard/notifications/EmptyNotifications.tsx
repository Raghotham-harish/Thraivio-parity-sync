import {
  BellOff,
  Search,
  BellRing,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

interface EmptyNotificationsProps {
  onBrowseMentors?: () => void;
}

const EmptyNotifications = ({
  onBrowseMentors,
}: EmptyNotificationsProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[34px]

        p-12
        lg:p-16

        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          h-28
          w-28

          mx-auto

          rounded-[32px]

          bg-blue-50

          flex
          items-center
          justify-center
        "
      >
        <BellOff
          size={48}
          className="
            text-blue-600
          "
        />
      </div>

      {/* Heading */}

      <h2
        className="
          text-4xl
          font-bold

          mt-8
        "
      >
        No Notifications Found
      </h2>

      <p
        className="
          text-slate-500

          mt-4

          max-w-2xl
          mx-auto

          leading-8
        "
      >
        You're all caught up! There are
        currently no notifications that
        match your search or filter.
        Future mentorship updates,
        payments, certificates and
        learning activities will appear
        here automatically.
      </p>

      {/* Benefits */}

      <div
        className="
          grid
          md:grid-cols-3

          gap-5

          mt-12

          max-w-5xl
          mx-auto
        "
      >
        {/* Sessions */}

        <div
          className="
            bg-slate-50

            rounded-3xl

            p-6
          "
        >
          <div
            className="
              h-14
              w-14

              mx-auto

              rounded-2xl

              bg-blue-100

              flex
              items-center
              justify-center
            "
          >
            <BellRing
              size={24}
              className="
                text-blue-600
              "
            />
          </div>

          <h3
            className="
              font-bold

              mt-4
            "
          >
            Instant Alerts
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Receive real-time updates
            whenever mentors publish
            new activities.
          </p>
        </div>

        {/* Events */}

        <div
          className="
            bg-slate-50

            rounded-3xl

            p-6
          "
        >
          <div
            className="
              h-14
              w-14

              mx-auto

              rounded-2xl

              bg-green-100

              flex
              items-center
              justify-center
            "
          >
            <CalendarDays
              size={24}
              className="
                text-green-600
              "
            />
          </div>

          <h3
            className="
              font-bold

              mt-4
            "
          >
            Event Updates
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Stay informed about live
            mentoring sessions and
            upcoming webinars.
          </p>
        </div>

        {/* Certificates */}

        <div
          className="
            bg-slate-50

            rounded-3xl

            p-6
          "
        >
          <div
            className="
              h-14
              w-14

              mx-auto

              rounded-2xl

              bg-purple-100

              flex
              items-center
              justify-center
            "
          >
            <GraduationCap
              size={24}
              className="
                text-purple-600
              "
            />
          </div>

          <h3
            className="
              font-bold

              mt-4
            "
          >
            Certificates
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Download completion
            certificates as soon as
            they become available.
          </p>
        </div>
      </div>

      {/* CTA */}

      <button
        onClick={onBrowseMentors}
        className="
          mt-10

          bg-blue-600
          hover:bg-blue-700

          text-white

          px-8
          py-4

          rounded-2xl

          font-semibold

          inline-flex
          items-center
          gap-3

          transition
        "
      >
        <Search size={20} />

        Explore Mentors
      </button>
    </div>
  );
};

export default EmptyNotifications;