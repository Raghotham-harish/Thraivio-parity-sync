import {
  Briefcase,
  Target,
  Building2,
  MapPin,
} from "lucide-react";

interface CareerGoalsSectionProps {
  targetRole: string;
  preferredCompany: string;
  preferredLocation: string;
  careerGoal: string;

  onChange: (
    field: string,
    value: string
  ) => void;
}

const CareerGoalsSection = ({
  targetRole,
  preferredCompany,
  preferredLocation,
  careerGoal,
  onChange,
}: CareerGoalsSectionProps) => {
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

          gap-6
        "
      >
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            <Target size={16} />

            Career Goals
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Build Your Career Roadmap
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Share your career aspirations so
            Thraivio can recommend the
            right mentors, programs, events
            and learning opportunities.
          </p>

        </div>

        <div
          className="
            flex
            h-16
            w-16

            items-center
            justify-center

            rounded-3xl

            bg-emerald-50
          "
        >
          <Target
            size={30}
            className="
              text-emerald-600
            "
          />
        </div>

      </div>

      {/* Form */}

      <div
        className="
          mt-10

          grid

          gap-6

          md:grid-cols-2
        "
      >
        {/* Target Role */}

        <div>
          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Dream Role
          </label>

          <div className="relative">
            <Briefcase
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="text"
              value={targetRole}
              onChange={(e) =>
                onChange(
                  "targetRole",
                  e.target.value
                )
              }
              placeholder="Frontend Developer"
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>
        </div>

        {/* Preferred Company */}

        <div>
          <label
            className="
              mb-2

              block

              text-sm
              font-medium
            "
          >
            Preferred Company
          </label>

          <div className="relative">
            <Building2
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="text"
              value={preferredCompany}
              onChange={(e) =>
                onChange(
                  "preferredCompany",
                  e.target.value
                )
              }
              placeholder="Google, Microsoft..."
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>
        </div>
                {/* Preferred Location */}

        <div>
          <label
            className="
              mb-2
              block

              text-sm
              font-medium
            "
          >
            Preferred Location
          </label>

          <div className="relative">
            <MapPin
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2

                text-slate-400
              "
            />

            <input
              type="text"
              value={preferredLocation}
              onChange={(e) =>
                onChange(
                  "preferredLocation",
                  e.target.value
                )
              }
              placeholder="Bangalore, Remote..."
              className="
                w-full

                rounded-2xl

                border
                border-slate-200

                py-3.5
                pl-12
                pr-4

                outline-none

                transition

                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>
        </div>

        {/* Work Preference */}

        <div>
          <label
            className="
              mb-2
              block

              text-sm
              font-medium
            "
          >
            Preferred Work Mode
          </label>

          <select
            className="
              w-full

              rounded-2xl

              border
              border-slate-200

              bg-white

              px-4
              py-3.5

              outline-none

              transition

              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-100
            "
            defaultValue="Remote"
          >
            <option>Remote</option>

            <option>Hybrid</option>

            <option>On-site</option>

            <option>No Preference</option>
          </select>
        </div>
      </div>

      {/* Career Vision */}

      <div className="mt-8">

        <label
          className="
            mb-3

            block

            text-sm
            font-medium
          "
        >
          Career Vision
        </label>

        <textarea
          value={careerGoal}
          onChange={(e) =>
            onChange(
              "careerGoal",
              e.target.value
            )
          }
          rows={7}
          placeholder="Describe your career vision, what you want to achieve in the next few years and how mentoring can help..."
          className="
            min-h-[220px]
            w-full

            resize-y

            rounded-3xl

            border
            border-slate-200

            p-5

            leading-7

            outline-none

            transition

            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-100
          "
        />

      </div>

      {/* Learning Priorities */}

      <div className="mt-10">

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Current Learning Priorities
        </h3>

        <p
          className="
            mt-2

            text-sm

            text-slate-500
          "
        >
          These priorities help us recommend
          suitable mentors and programs.
        </p>

        <div
          className="
            mt-5

            flex
            flex-wrap

            gap-3
          "
        >
          {[
            "Interview Preparation",
            "DSA",
            "React",
            "System Design",
            "Communication",
            "Resume Review",
            "Mock Interviews",
            "Career Guidance",
          ].map((item) => (
            <button
              key={item}
              className="
                rounded-full

                bg-emerald-50

                px-4
                py-2.5

                text-sm
                font-medium

                text-emerald-700

                transition-all

                hover:bg-emerald-100
              "
            >
              {item}
            </button>
          ))}
        </div>

      </div>
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
            Career Roadmap
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Keep your career goals updated so
            Thraivio can recommend the
            most relevant mentors, programs,
            live sessions and career
            opportunities aligned with your
            ambitions.
          </p>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-emerald-50

            px-4
            py-2

            text-sm
            font-medium

            text-emerald-700
          "
        >
          <Target size={16} />

          Career Goals Configured
        </div>
      </div>
    </div>
  );
};

export default CareerGoalsSection;