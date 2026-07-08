import {
  CalendarX2,
  Search,
  Video,
  Users,
  GraduationCap,
} from "lucide-react";

interface EmptySessionsProps {
  onBrowseMentors?: () => void;
}

const EmptySessions = ({
  onBrowseMentors,
}: EmptySessionsProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

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
        <CalendarX2
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
        No Sessions Found
      </h2>

      <p
        className="
          text-slate-500

          mt-4

          max-w-2xl
          mx-auto
        "
      >
        You haven't booked any mentorship
        sessions yet. Connect with industry
        experts, schedule 1-on-1 calls and
        accelerate your career growth.
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
            <Video
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
            1-on-1 Mentorship
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Learn directly from top
            professionals through
            personalized sessions.
          </p>
        </div>

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
            <Users
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
            Mock Interviews
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Practice real interview
            scenarios and receive
            expert feedback.
          </p>
        </div>

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
            Career Guidance
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Get personalized career
            roadmaps and growth
            strategies from mentors.
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

export default EmptySessions;