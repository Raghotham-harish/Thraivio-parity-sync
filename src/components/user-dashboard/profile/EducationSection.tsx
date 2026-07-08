import {
  GraduationCap,
  Plus,
  School,
  CalendarDays,
  MapPin,
  Pencil,
  Trash2,
} from "lucide-react";

import type {
  UserEducation,
} from "@/types/userProfile";

interface EducationSectionProps {
  education: UserEducation[];

  onAddEducation: () => void;

  onEditEducation: (
    education: UserEducation
  ) => void;

  onDeleteEducation: (
    id: string
  ) => void;
}

const EducationSection = ({
  education,
  onAddEducation,
  onEditEducation,
  onDeleteEducation,
}: EducationSectionProps) => {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-slate-200

        bg-white

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

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <GraduationCap size={16} />

            Education
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Academic Background
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Showcase your educational
            qualifications so mentors
            can better understand your
            academic journey.
          </p>

        </div>

        <button
          onClick={onAddEducation}
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

            transition

            hover:bg-blue-700
          "
        >
          <Plus size={18} />

          Add Education
        </button>

      </div>

      {/* Education List */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
        {education.map((item) => (
          <div
            key={item.id}
            className="
              rounded-3xl

              border
              border-slate-200

              p-6

              transition-all

              hover:border-blue-200
              hover:shadow-lg
            "
          >
            <div
              className="
                flex
                flex-col

                xl:flex-row

                xl:items-start
                xl:justify-between

                gap-6
              "
            >
              {/* Left */}

              <div
                className="
                  flex
                  gap-5

                  flex-1
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16

                    shrink-0

                    items-center
                    justify-center

                    rounded-3xl

                    bg-blue-50
                  "
                >
                  <School
                    size={30}
                    className="
                      text-blue-600
                    "
                  />
                </div>

                <div className="flex-1">

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="
                      mt-2

                      font-medium

                      text-blue-600
                    "
                  >
                    {item.branch}
                  </p>

                  <p
                    className="
                      mt-3

                      text-lg

                      text-slate-700
                    "
                  >
                    {item.institution}
                  </p>
                                    <div
                    className="
                      mt-5

                      grid
                      gap-4

                      md:grid-cols-3
                    "
                  >
                    {/* Passing Year */}

                    <div
                      className="
                        rounded-2xl

                        bg-slate-50

                        p-4
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-2

                          text-slate-500
                          text-sm
                        "
                      >
                        <CalendarDays
                          size={16}
                        />

                        Passing Year
                      </div>

                      <h4
                        className="
                          mt-2

                          text-lg
                          font-bold
                        "
                      >
                        {item.passingYear}
                      </h4>
                    </div>

                    {/* CGPA */}

                    <div
                      className="
                        rounded-2xl

                        bg-blue-50

                        p-4
                      "
                    >
                      <p
                        className="
                          text-sm
                          text-blue-600
                        "
                      >
                        CGPA / Score
                      </p>

                      <h4
                        className="
                          mt-2

                          text-2xl
                          font-bold

                          text-blue-700
                        "
                      >
                        {item.cgpa}
                      </h4>
                    </div>

                    {/* Location */}

                    <div
                      className="
                        rounded-2xl

                        bg-slate-50

                        p-4
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
                        <MapPin
                          size={16}
                        />

                        Location
                      </div>

                      <h4
                        className="
                          mt-2

                          font-semibold
                        "
                      >
                        {item.location}
                      </h4>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right */}

              <div
                className="
                  flex

                  xl:flex-col

                  gap-3

                  shrink-0
                "
              >
                <button
                  onClick={() =>
                    onEditEducation(
                      item
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

                    hover:bg-blue-50
                    hover:border-blue-200
                    hover:text-blue-600
                  "
                >
                  <Pencil
                    size={16}
                  />

                  Edit
                </button>

                <button
                  onClick={() =>
                    onDeleteEducation(
                      item.id
                    )
                  }
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-red-200

                    px-4
                    py-2.5

                    font-medium

                    text-red-600

                    transition

                    hover:bg-red-50
                  "
                >
                  <Trash2
                    size={16}
                  />

                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
                {education.length === 0 && (
          <div
            className="
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

                bg-blue-50
              "
            >
              <GraduationCap
                size={36}
                className="
                  text-blue-600
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
              No Education Added
            </h3>

            <p
              className="
                mx-auto
                mt-3

                max-w-lg

                text-slate-500
              "
            >
              Add your education history to
              help mentors understand your
              academic background and provide
              better guidance.
            </p>

            <button
              onClick={onAddEducation}
              className="
                mt-8

                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-blue-600

                px-5
                py-3

                font-medium

                text-white

                transition

                hover:bg-blue-700
              "
            >
              <Plus size={18} />

              Add First Education
            </button>
          </div>
        )}
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
            Academic Journey
          </h4>

          <p
            className="
              mt-1

              text-sm
              text-slate-500
            "
          >
            Keep your education details
            updated to receive more relevant
            mentor recommendations and
            personalized learning paths.
          </p>
        </div>

        <div
          className="
            rounded-full

            bg-blue-50

            px-4
            py-2

            text-sm
            font-medium

            text-blue-700
          "
        >
          {education.length} Education
          {education.length !== 1
            ? " Records"
            : " Record"}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;