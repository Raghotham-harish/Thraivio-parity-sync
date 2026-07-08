import {
  FileText,
  Info,
} from "lucide-react";

interface AboutSectionProps {
  bio: string;

  onChange: (
    value: string
  ) => void;

  maxLength?: number;
}

const AboutSection = ({
  bio,
  onChange,
  maxLength = 600,
}: AboutSectionProps) => {
  const remaining =
    maxLength - bio.length;

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

              bg-blue-50
              text-blue-700

              px-4
              py-2

              rounded-full

              text-sm
              font-medium
            "
          >
            <FileText size={16} />

            About Me
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Tell Your Story
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Introduce yourself, share your
            learning journey, interests,
            achievements and career goals.
            This helps mentors understand
            your background better.
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
          <Info
            size={30}
            className="
              text-blue-600
            "
          />
        </div>

      </div>

      {/* Textarea */}

      <div className="mt-10">

        <label
          className="
            mb-3

            block

            text-sm
            font-medium

            text-slate-700
          "
        >
          About Yourself
        </label>

        <textarea
          value={bio}
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
          maxLength={maxLength}
          rows={8}
          placeholder="Write something about yourself..."
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

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />

      </div>

      {/* Footer */}

      <div
        className="
          mt-8

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
            Profile Summary
          </h4>

          <p
            className="
              mt-1

              text-sm
              text-slate-500
            "
          >
            A complete profile helps you
            receive better mentor
            recommendations and improves
            your learning experience.
          </p>

        </div>

        <div
          className={`
            rounded-full

            px-4
            py-2

            text-sm
            font-medium

            ${
              remaining <= 50
                ? "bg-red-50 text-red-600"
                : "bg-blue-50 text-blue-700"
            }
          `}
        >
          {bio.length} / {maxLength}
        </div>

      </div>
    </div>
  );
};

export default AboutSection;