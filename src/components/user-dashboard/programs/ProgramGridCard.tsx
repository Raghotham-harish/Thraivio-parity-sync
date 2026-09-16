import {
  Award,
  BookOpen,
  Clock3,
  Eye,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";

import type {
  Program,
} from "@/services/program.service";

interface ProgramGridCardProps {
  program: Program;

  onView: (
    program: Program
  ) => void;
}

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

const ProgramGridCard = ({
  program,
  onView,
}: ProgramGridCardProps) => {
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
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Program Image */}

      <div
        className="
          relative
          h-52
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={
            program.thumbnail?.alt ||
            program.title
          }
          className="
            w-full
            h-full

            object-cover

            transition-transform
            duration-500

            hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
          "
        />

        {/* Status */}

        <span
          className={`
            absolute
            top-4
            left-4

            px-3
            py-1.5

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

        {/* Featured */}

        {program.isFeatured && (
          <span
            className="
              absolute
              top-4
              right-4

              bg-amber-400
              text-white

              px-3
              py-1.5

              rounded-full

              text-xs
              font-semibold

              flex
              items-center
              gap-1
            "
          >
            <Award size={13} />
            Featured
          </span>
        )}

        {/* Level */}

        <span
          className="
            absolute
            bottom-4
            left-4

            bg-white/95
            text-slate-800

            px-3
            py-1.5

            rounded-full

            text-xs
            font-semibold
          "
        >
          {program.level}
        </span>
      </div>

      {/* Content */}

      <div className="p-6">
        {/* Category */}

        <div
          className="
            flex
            items-center
            gap-2

            text-sm
            text-blue-600

            font-semibold
          "
        >
          <GraduationCap
            size={16}
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
                {program.subCategory}
              </span>
            </>
          )}
        </div>

        {/* Title */}

        <h2
          className="
            text-xl
            font-bold

            mt-3

            line-clamp-2
          "
        >
          {program.title}
        </h2>

        {/* Description */}

        <p
          className="
            text-sm
            text-slate-500

            mt-3

            line-clamp-3
          "
        >
          {program.shortDescription}
        </p>

        {/* Program Info */}

        <div
          className="
            grid
            grid-cols-2

            gap-3

            mt-5
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
            <Clock3 size={16} />

            <span>
              {duration}
            </span>
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
            <Users size={16} />

            <span>
              {students} Enrolled
            </span>
          </div>
        </div>

        {/* Rating */}

        <div
          className="
            flex
            items-center
            gap-1

            mt-5
          "
        >
          <Star
            size={16}
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
              text-sm
              text-slate-500
            "
          >
            ({reviews} Reviews)
          </span>
        </div>

        {/* Tags */}

        {program.tags.length > 0 && (
          <div
            className="
              flex
              flex-wrap

              gap-2

              mt-5
            "
          >
            {program.tags
              .slice(0, 3)
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

        {/* Learning Outcomes */}

        {program.learningOutcomes
          .length > 0 && (
          <div
            className="
              flex
              items-center
              gap-2

              mt-5

              text-sm
              text-slate-600
            "
          >
            <BookOpen size={16} />

            <span>
              {
                program
                  .learningOutcomes
                  .length
              }{" "}
              Learning Outcomes
            </span>
          </div>
        )}

        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between

            gap-4

            mt-6
            pt-5

            border-t
            border-slate-100
          "
        >
          {/* Price */}

          <div>
            <p
              className="
                text-xs
                text-slate-400
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
          </div>

          {/* View Details */}

          <button
            type="button"
            onClick={() =>
              onView(program)
            }
            className="
              bg-blue-600
              hover:bg-blue-700

              text-white

              px-5
              py-3

              rounded-xl

              font-medium

              flex
              items-center
              gap-2

              transition
            "
          >
            <Eye size={18} />

            View Details
          </button>
        </div>

        {/* Enrollment Availability */}

        {!program.canEnroll && (
          <div
            className="
              mt-4

              bg-slate-50

              rounded-xl

              px-4
              py-3

              text-sm
              text-slate-500

              text-center
            "
          >
            Enrollment is currently
            unavailable
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramGridCard;