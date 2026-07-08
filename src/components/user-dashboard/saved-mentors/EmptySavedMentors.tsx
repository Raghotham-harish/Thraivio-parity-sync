import {
  Heart,
  Search,
  Users,
  Video,
  GraduationCap,
} from "lucide-react";

interface EmptySavedMentorsProps {
  onBrowseMentors?: () => void;
}

const EmptySavedMentors = ({
  onBrowseMentors,
}: EmptySavedMentorsProps) => {
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

          bg-red-50

          flex
          items-center
          justify-center
        "
      >
        <Heart
          size={48}
          className="
            text-red-500
          "
          fill="currentColor"
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
        No Saved Mentors Yet
      </h2>

      <p
        className="
          text-slate-500

          mt-4

          max-w-2xl
          mx-auto
        "
      >
        Save your favorite mentors to
        quickly access their profiles,
        book sessions and track your
        learning journey with industry
        experts.
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
        {/* Card 1 */}

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
            <Users
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
            Top Mentors
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Save experienced mentors
            from top companies for
            future mentorship.
          </p>
        </div>

        {/* Card 2 */}

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
            <Video
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
            Quick Booking
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Instantly access saved
            mentors and book
            mentorship sessions.
          </p>
        </div>

        {/* Card 3 */}

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
            Learning Growth
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              mt-2
            "
          >
            Build your personal mentor
            network and accelerate
            career growth.
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

        Browse Mentors
      </button>
    </div>
  );
};

export default EmptySavedMentors;