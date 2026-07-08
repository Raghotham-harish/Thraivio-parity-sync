import {
  Code2,
  Plus,
  Sparkles,
  X,
} from "lucide-react";

interface SkillsSectionProps {
  skills: string[];

  newSkill: string;

  onSkillChange: (
    value: string
  ) => void;

  onAddSkill: () => void;

  onRemoveSkill: (
    skill: string
  ) => void;
}

const suggestedSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Java",
  "Python",
  "AWS",
  "Docker",
];

const SkillsSection = ({
  skills,
  newSkill,
  onSkillChange,
  onAddSkill,
  onRemoveSkill,
}: SkillsSectionProps) => {
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

              bg-blue-50
              text-blue-700

              px-4
              py-2

              rounded-full

              text-sm
              font-medium
            "
          >
            <Code2 size={16} />

            Skills
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Technical Skills
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Showcase your technical
            expertise and professional
            skills to receive better
            mentor recommendations and
            personalized learning paths.
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

            bg-blue-50
          "
        >
          <Sparkles
            size={30}
            className="
              text-blue-600
            "
          />
        </div>
      </div>

      {/* Add Skill */}

      <div
        className="
          mt-10

          flex
          flex-col
          lg:flex-row

          gap-4
        "
      >
        <input
          type="text"
          value={newSkill}
          onChange={(e) =>
            onSkillChange(
              e.target.value
            )
          }
          placeholder="Add a new skill..."
          className="
            flex-1

            rounded-2xl

            border
            border-slate-200

            px-5
            py-3.5

            outline-none

            transition

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
          "
        />

        <button
          onClick={onAddSkill}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-2xl

            bg-blue-600

            px-6
            py-3.5

            font-medium

            text-white

            transition

            hover:bg-blue-700
          "
        >
          <Plus size={18} />

          Add Skill
        </button>
      </div>

      {/* Skills */}
            <div className="mt-8">

        {skills.length > 0 ? (
          <div
            className="
              flex
              flex-wrap

              gap-3
            "
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  group

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-blue-50

                  px-4
                  py-2.5

                  text-sm
                  font-medium

                  text-blue-700

                  transition-all

                  hover:bg-blue-100
                "
              >
                <span>{skill}</span>

                <button
                  onClick={() =>
                    onRemoveSkill(skill)
                  }
                  className="
                    flex
                    h-5
                    w-5

                    items-center
                    justify-center

                    rounded-full

                    transition

                    hover:bg-red-100
                    hover:text-red-600
                  "
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="
              rounded-3xl

              border-2
              border-dashed
              border-slate-200

              py-14

              text-center
            "
          >
            <Code2
              size={42}
              className="
                mx-auto

                text-slate-400
              "
            />

            <h3
              className="
                mt-5

                text-xl
                font-bold
              "
            >
              No Skills Added
            </h3>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              Add your technical skills to
              strengthen your learning
              profile.
            </p>
          </div>
        )}

      </div>

      {/* Suggested Skills */}

      <div className="mt-10">

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          Suggested Skills
        </h3>

        <p
          className="
            mt-2

            text-sm

            text-slate-500
          "
        >
          Click any suggestion to quickly
          add it to your profile.
        </p>

        <div
          className="
            mt-5

            flex
            flex-wrap

            gap-3
          "
        >
          {suggestedSkills.map(
            (skill) => {
              const added =
                skills.includes(skill);

              return (
                <button
                  key={skill}
                  disabled={added}
                  className={`
                    rounded-full

                    px-4
                    py-2.5

                    text-sm
                    font-medium

                    transition-all

                    ${
                      added
                        ? `
                          cursor-not-allowed

                          bg-green-100
                          text-green-700
                        `
                        : `
                          bg-slate-100
                          text-slate-700

                          hover:bg-blue-50
                          hover:text-blue-600
                        `
                    }
                  `}
                >
                  {added
                    ? "✓ "
                    : "+ "}
                  {skill}
                </button>
              );
            }
          )}
        </div>
      </div>
            {/* Footer */}

      <div
        className="
          mt-10

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-4

          border-t
          border-slate-200

          pt-6
        "
      >
        <div>
          <h4
            className="
              font-semibold
            "
          >
            Professional Skills
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Keep your skills up to date to
            receive better mentor matches,
            personalized learning
            recommendations and relevant
            programs.
          </p>
        </div>

        <div
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
          <Code2 size={16} />

          {skills.length} Skills Added
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;