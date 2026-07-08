import {
  Heart,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";

interface SavedMentorsHeaderProps {
  totalMentors: number;
  totalCategories: number;
}

const SavedMentorsHeader = ({
  totalMentors,
  totalCategories,
}: SavedMentorsHeaderProps) => {
  return (
    <div
      className="
        flex
        flex-col
        xl:flex-row

        xl:items-center
        xl:justify-between

        gap-6
      "
    >
      {/* Left */}

      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-red-50
            text-red-600

            text-sm
            font-medium
        "
        >
          <Heart size={16} />

          Saved Mentors
        </div>

        <h1
          className="
            text-4xl
            font-bold

            mt-4
          "
        >
          My Saved Mentors
        </h1>

        <p
          className="
            mt-3

            text-slate-500

            max-w-2xl
          "
        >
          Manage all your bookmarked
          mentors, industry experts,
          career coaches and learning
          advisors from one place.
        </p>
      </div>

      {/* Right */}

      <div
        className="
          flex
          flex-wrap

          gap-4
        "
      >
        {/* Saved Mentors */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-[28px]

            px-6
            py-5

            min-w-[230px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-red-50

                flex
                items-center
                justify-center
              "
            >
              <Users
                size={24}
                className="
                  text-red-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Saved Mentors
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                "
              >
                {totalMentors}
              </h3>
            </div>
          </div>
        </div>

        {/* Categories */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-[28px]

            px-6
            py-5

            min-w-[230px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-blue-50

                flex
                items-center
                justify-center
              "
            >
              <Briefcase
                size={24}
                className="
                  text-blue-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Categories
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                "
              >
                {totalCategories}
              </h3>
            </div>
          </div>
        </div>

        {/* Marketplace */}

        <div
          className="
            bg-white

            border
            border-slate-200

            rounded-[28px]

            px-6
            py-5

            min-w-[230px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-amber-50

                flex
                items-center
                justify-center
              "
            >
              <Sparkles
                size={24}
                className="
                  text-amber-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Marketplace
              </p>

              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                Premium Mentors
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SavedMentorsHeader;