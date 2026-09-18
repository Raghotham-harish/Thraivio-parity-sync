import {
  Heart,
  Star,
  CalendarPlus,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import type {
  SavedMentorPreview,
} from "@/types/userProfile";

interface SavedMentorsPreviewProps {
  mentors: SavedMentorPreview[];
}

const SavedMentorsPreview = ({
  mentors,
}: SavedMentorsPreviewProps) => {
  const navigate = useNavigate();

  const previewMentors =
    mentors.slice(0, 3);

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        p-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-5
        "
      >
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-rose-50

              px-4
              py-2

              text-sm
              font-medium

              text-rose-700
            "
          >
            <Heart size={16} />

            Saved Mentors
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Your Favorite Mentors
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Mentors you've bookmarked for
            future learning, mentorship and
            career guidance.
          </p>

        </div>

        <Link
          to="/user-dashboard/saved-mentors"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-slate-200

            px-5
            py-3

            font-medium

            transition

            hover:bg-slate-50
          "
        >
          View All

          <ChevronRight
            size={18}
          />
        </Link>

      </div>

      {/* Mentor Cards */}

      <div
        className="
          mt-10

          space-y-5
        "
      >
        {previewMentors.map(
          (mentor) => (
            <div
              key={mentor.id}
              className="
                rounded-3xl

                border
                border-slate-200

                p-6

                transition-all

                hover:border-rose-200
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  flex-col

                  lg:flex-row

                  lg:items-center
                  lg:justify-between

                  gap-6
                "
              >
                <div
                  className="
                    flex
                    gap-5

                    flex-1
                  "
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="
                      h-20
                      w-20

                      rounded-3xl

                      object-cover
                    "
                  />

                  <div className="flex-1">

                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {mentor.name}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-blue-600

                        font-medium
                      "
                    >
                      {mentor.role}
                    </p>

                    <p
                      className="
                        mt-2

                        text-slate-500
                      "
                    >
                      {mentor.company}
                    </p>
                                        <div
                      className="
                        mt-5

                        flex
                        flex-wrap

                        items-center

                        gap-4
                      "
                    >
                      {/* Rating */}

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2

                          rounded-full

                          bg-amber-50

                          px-4
                          py-2

                          text-sm
                          font-medium

                          text-amber-700
                        "
                      >
                        <Star
                          size={16}
                          className="
                            fill-amber-500
                          "
                        />

                        {mentor.rating.toFixed(
                          1
                        )}
                      </div>

                      {/* Saved */}

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2

                          rounded-full

                          bg-rose-50

                          px-4
                          py-2

                          text-sm
                          font-medium

                          text-rose-700
                        "
                      >
                        <Heart
                          size={16}
                          className="
                            fill-rose-500
                          "
                        />

                        Saved
                      </div>
                    </div>

                  </div>
                </div>

                {/* Actions */}

                <div
                  className="
                    flex

                    lg:flex-col

                    gap-3

                    shrink-0
                  "
                >
                  <button
                    onClick={() =>
                      navigate(
                        `/user-dashboard/messages?with=${encodeURIComponent(mentor.name)}`
                      )
                    }
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      border
                      border-slate-200

                      px-4
                      py-2.5

                      font-medium

                      transition

                      hover:bg-slate-50
                    "
                  >
                    <MessageCircle
                      size={17}
                    />

                    Message
                  </button>

                  <button
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-blue-600

                      px-4
                      py-2.5

                      font-medium

                      text-white

                      transition

                      hover:bg-blue-700
                    "
                  >
                    <CalendarPlus
                      size={17}
                    />

                    Book Session
                  </button>
                </div>

              </div>
            </div>
          )
        )}
      </div>
            {/* Empty State */}

      {previewMentors.length === 0 && (
        <div
          className="
            mt-10

            rounded-3xl

            border-2
            border-dashed
            border-slate-200

            py-16

            text-center
          "
        >
          <div
            className="
              mx-auto

              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-3xl

              bg-rose-50
            "
          >
            <Heart
              size={36}
              className="
                text-rose-600
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            No Saved Mentors
          </h3>

          <p
            className="
              mx-auto

              mt-3

              max-w-lg

              text-slate-500
            "
          >
            Save mentors you're interested
            in so you can quickly access
            their profile, book sessions
            and continue your learning
            journey.
          </p>

          <Link
            to="/mentors"
            className="
              mt-8

              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-rose-600

              px-6
              py-3

              font-medium

              text-white

              transition

              hover:bg-rose-700
            "
          >
            Explore Mentors

            <ChevronRight
              size={18}
            />
          </Link>
        </div>
      )}

      {/* Footer */}

      <div
        className="
          mt-10

          border-t
          border-slate-200

          pt-6

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-4
        "
      >
        <div>
          <h4
            className="
              font-semibold
            "
          >
            Mentor Network
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Your saved mentors help you
            build a personalized learning
            network. Follow experienced
            mentors and book sessions
            whenever you're ready.
          </p>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-rose-50

            px-4
            py-2

            text-sm
            font-medium

            text-rose-700
          "
        >
          <Heart
            size={16}
            className="
              fill-rose-500
            "
          />

          {mentors.length} Saved Mentor
          {mentors.length !== 1
            ? "s"
            : ""}
        </div>
      </div>
    </div>
  );
};

export default SavedMentorsPreview;