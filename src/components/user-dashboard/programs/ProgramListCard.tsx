import {
  Award,
  BookOpen,
  Building2,
  Clock3,
  Eye,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";

import type {
  Program,
} from "@/services/program.service";

interface ProgramListCardProps {
  program: Program;

  onView: (
    program: Program
  ) => void;
}

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

const ProgramListCard = ({
  program,
  onView,
}: ProgramListCardProps) => {
  const image =
    program.thumbnail?.url ||
    PROGRAM_DUMMY_IMAGE;

  const duration =
    `${program.duration} ${program.durationUnit}`;

  const price =
    program.isFree
      ? "Free"
      : `${program.pricing.currency} ${program.finalPrice}`;

  const rating =
    program.analytics.averageRating;

  const reviews =
    program.analytics.totalReviews;

  const students =
    program.analytics.enrollments;

  const statusStyles = {
    draft:
      "bg-slate-100 text-slate-700",

    pending:
      "bg-amber-100 text-amber-700",

    published:
      "bg-green-100 text-green-700",

    rejected:
      "bg-red-100 text-red-700",

    inactive:
      "bg-slate-100 text-slate-600",

    archived:
      "bg-purple-100 text-purple-700",
  };

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      <div className="p-6">
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

          <div
            className="
              flex
              gap-5

              flex-1
            "
          >
            {/* Program Image */}

            <div className="shrink-0">
              <img
                src={image}
                alt={
                  program.thumbnail?.alt ||
                  program.title
                }
                className="
                  h-28
                  w-40

                  rounded-3xl

                  object-cover

                  border-2
                  border-slate-100
                "
              />
            </div>

            {/* Content */}

            <div className="flex-1">
              {/* Badges */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      statusStyles[
                        program.status
                      ]
                    }
                  `}
                >
                  {program.status}
                </span>

                <span
                  className="
                    bg-purple-100
                    text-purple-700

                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold
                  "
                >
                  {program.level}
                </span>

                {program.isFeatured && (
                  <span
                    className="
                      bg-amber-100
                      text-amber-700

                      px-3
                      py-1

                      rounded-full

                      text-xs
                      font-semibold

                      flex
                      items-center
                      gap-1
                    "
                  >
                    <Award size={12} />

                    Featured
                  </span>
                )}
              </div>

              {/* Title */}

              <h2
                className="
                  text-xl
                  xl:text-2xl
                  font-bold

                  mt-4
                "
              >
                {program.title}
              </h2>

              {/* Description */}

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-2

                  max-w-3xl

                  line-clamp-2
                "
              >
                {program.shortDescription}
              </p>

              {/* Category */}

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-2

                  text-sm
                  text-blue-600

                  font-medium

                  mt-3
                "
              >
                <GraduationCap
                  size={15}
                />

                <span>
                  {program.category}
                </span>

                {program.subCategory && (
                  <>
                    <span className="text-slate-300">
                      •
                    </span>

                    <span>
                      {
                        program.subCategory
                      }
                    </span>
                  </>
                )}
              </div>

              {/* Rating */}

              <div
                className="
                  flex
                  items-center
                  gap-1

                  mt-4
                "
              >
                <Star
                  size={14}
                  fill="currentColor"
                  className="
                    text-yellow-500
                  "
                />

                <span
                  className="
                    font-semibold
                  "
                >
                  {rating.toFixed(1)}
                </span>

                <span
                  className="
                    ml-1

                    text-sm
                    text-slate-500
                  "
                >
                  ({reviews} Reviews)
                </span>
              </div>

              {/* Info */}

              <div
                className="
                  grid
                  sm:grid-cols-2
                  xl:grid-cols-4

                  gap-4

                  mt-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <Clock3 size={16} />

                  {duration}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <Users size={16} />

                  {students} Enrolled
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <BookOpen
                    size={16}
                  />

                  {
                    program
                      .learningOutcomes
                      .length
                  }{" "}
                  Outcomes
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-slate-600
                  "
                >
                  <GraduationCap
                    size={16}
                  />

                  {program.level}
                </div>
              </div>

              {/* Tags */}

              {program.tags.length >
                0 && (
                <div
                  className="
                    flex
                    flex-wrap

                    gap-2

                    mt-5
                  "
                >
                  {program.tags
                    .slice(0, 4)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="
                          bg-slate-100
                          text-slate-700

                          px-3
                          py-1

                          rounded-full

                          text-xs
                          font-medium
                        "
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}

              {/* Benefits */}

              {program.benefits
                .length > 0 && (
                <div
                  className="
                    flex
                    flex-wrap

                    gap-2

                    mt-4
                  "
                >
                  {program.benefits
                    .slice(0, 3)
                    .map(
                      (benefit) => (
                        <span
                          key={
                            benefit.order
                          }
                          className="
                            bg-blue-50
                            text-blue-700

                            px-3
                            py-1

                            rounded-full

                            text-xs
                            font-medium
                          "
                        >
                          {
                            benefit.title
                          }
                        </span>
                      )
                    )}
                </div>
              )}
            </div>
          </div>

          {/* Right */}

          <div
            className="
              xl:w-72

              shrink-0
            "
          >
            <div
              className="
                bg-slate-50

                rounded-3xl

                p-5
              "
            >
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Program Fee
              </p>

              <h3
                className="
                  text-2xl
                  font-bold

                  text-blue-600

                  mt-1
                "
              >
                {price}
              </h3>

              {program.hasDiscount &&
                !program.isFree && (
                  <p
                    className="
                      text-xs
                      text-slate-400

                      line-through

                      mt-1
                    "
                  >
                    {
                      program.pricing
                        .currency
                    }{" "}
                    {
                      program.pricing
                        .price
                    }
                  </p>
                )}

              <div
                className="
                  mt-5

                  space-y-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    text-slate-600
                  "
                >
                  <Clock3
                    size={16}
                  />

                  {duration}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    text-slate-600
                  "
                >
                  <Users
                    size={16}
                  />

                  {students} Enrolled
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    text-slate-600
                  "
                >
                  <Building2
                    size={16}
                  />

                  {program.category}
                </div>
              </div>

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-6
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    onView(program)
                  }
                  className="
                    border
                    border-slate-300

                    py-2.5

                    rounded-xl

                    font-medium

                    flex
                    items-center
                    justify-center
                    gap-2

                    hover:bg-slate-100

                    transition
                  "
                >
                  <Eye size={18} />

                  View Details
                </button>

                {!program.canEnroll && (
                  <div
                    className="
                      bg-slate-100
                      text-slate-500

                      py-3

                      rounded-xl

                      font-medium

                      text-center
                    "
                  >
                    Enrollment
                    Unavailable
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramListCard;