import { useEffect } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  PlayCircle,
  Star,
  Users,
  X,
} from "lucide-react";

import type { Program } from "@/services/program.service";

interface ProgramDetailsModalProps {
  open: boolean;
  program: Program | null;
  onClose: () => void;
}

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200";

const ProgramDetailsModal = ({
  open,
  program,
  onClose,
}: ProgramDetailsModalProps) => {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open || !program) {
    return null;
  }

  const image = program.thumbnail?.url || PROGRAM_DUMMY_IMAGE;

  const duration = `${program.duration} ${program.durationUnit}`;

  const price = program.isFree
    ? "Free"
    : `${program.pricing.currency} ${program.finalPrice}`;

  const rating = program.analytics?.averageRating ?? 0;

  const reviews = program.analytics?.totalReviews ?? 0;

  const students = program.analytics?.enrollments ?? 0;

  const sections = program.curriculum?.sections ?? [];

  const languages = program.languages ?? [];

  const learningOutcomes = program.learningOutcomes ?? [];

  const benefits = program.benefits ?? [];

  const requirements = program.requirements ?? [];

  const faqs = program.faqs ?? [];

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        className="
          bg-white

          w-full
          max-w-6xl

          rounded-[32px]

          overflow-hidden

          shadow-2xl

          max-h-[90vh]

          flex
          flex-col
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="program-details-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Hero */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            text-white
          "
        >
          <div
            className="
              h-56
              overflow-hidden

              opacity-30
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
              "
            />
          </div>

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-blue-600/95
              via-indigo-600/90
              to-purple-600/90
            "
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close program details"
            className="
              absolute
              top-6
              right-6

              h-10
              w-10

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center

              hover:bg-white/30

              transition

              z-10
            "
          >
            <X size={20} />
          </button>

          <div
            className="
              absolute
              inset-0

              flex
              items-center

              p-8
            "
          >
            <div className="max-w-4xl pr-12">
              <div
                className="
                  flex
                  flex-wrap

                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    inline-flex

                    px-4
                    py-2

                    rounded-full

                    text-sm
                    font-semibold

                    bg-white
                    text-blue-700
                  "
                >
                  {program.status}
                </span>

                <span
                  className="
                    inline-flex

                    px-4
                    py-2

                    rounded-full

                    text-sm
                    font-semibold

                    bg-white/20
                    text-white
                  "
                >
                  {program.level}
                </span>

                {program.isFeatured && (
                  <span
                    className="
                      inline-flex

                      items-center
                      gap-1

                      px-4
                      py-2

                      rounded-full

                      text-sm
                      font-semibold

                      bg-amber-400
                      text-white
                    "
                  >
                    <Award size={15} />
                    Featured
                  </span>
                )}
              </div>

              <h2
                id="program-details-title"
                className="
                  text-3xl
                  md:text-4xl

                  font-bold

                  mt-5
                "
              >
                {program.title}
              </h2>

              <p
                className="
                  text-blue-100

                  mt-3

                  max-w-3xl
                "
              >
                {program.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}

        <div
          className="
            overflow-y-auto

            flex-1

            p-8
          "
        >
          <div
            className="
              grid
              xl:grid-cols-3

              gap-8
            "
          >
            {/* Left */}

            <div
              className="
                xl:col-span-2

                space-y-6
              "
            >
              {/* Program Information */}

              <div
                className="
                  border
                  border-slate-200

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Program Information
                </h3>

                <div
                  className="
                    grid
                    md:grid-cols-2

                    gap-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Clock3 size={18} />

                    <span>
                      {duration}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Users size={18} />

                    <span>
                      {students} Enrolled
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <GraduationCap
                      size={18}
                    />

                    <span>
                      {program.level}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <BookOpen size={18} />

                    <span>
                      {sections.length} Sections
                    </span>
                  </div>
                </div>

                <div
                  className="
                    flex
                    flex-wrap

                    gap-2

                    mt-5
                  "
                >
                  <span
                    className="
                      bg-blue-50
                      text-blue-700

                      px-3
                      py-1

                      rounded-full

                      text-sm
                      font-medium
                    "
                  >
                    {program.category}
                  </span>

                  {program.subCategory && (
                    <span
                      className="
                        bg-purple-50
                        text-purple-700

                        px-3
                        py-1

                        rounded-full

                        text-sm
                        font-medium
                      "
                    >
                      {program.subCategory}
                    </span>
                  )}

                  {languages.map(
                    (language) => (
                      <span
                        key={language}
                        className="
                          bg-slate-100
                          text-slate-700

                          px-3
                          py-1

                          rounded-full

                          text-sm
                          font-medium
                        "
                      >
                        {language}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Description */}

              <div
                className="
                  border
                  border-slate-200

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-4
                  "
                >
                  About This Program
                </h3>

                <p
                  className="
                    text-slate-600

                    leading-7
                  "
                >
                  {program.description}
                </p>
              </div>

              {/* Learning Outcomes */}

              {learningOutcomes.length > 0 && (
                <div
                  className="
                    border
                    border-slate-200

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold

                      mb-5
                    "
                  >
                    What You Will Learn
                  </h3>

                  <div
                    className="
                      space-y-4
                    "
                  >
                    {learningOutcomes.map(
                      (outcome) => (
                        <div
                          key={
                            outcome.order
                          }
                          className="
                            flex
                            gap-3
                          "
                        >
                          <CheckCircle2
                            className="
                              text-green-600
                              shrink-0
                              mt-0.5
                            "
                            size={20}
                          />

                          <div>
                            <p className="font-semibold">
                              {
                                outcome.title
                              }
                            </p>

                            {outcome.description && (
                              <p
                                className="
                                  text-sm
                                  text-slate-500

                                  mt-1
                                "
                              >
                                {
                                  outcome.description
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Benefits */}

              {benefits.length > 0 && (
                <div
                  className="
                    border
                    border-slate-200

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold

                      mb-5
                    "
                  >
                    Included Benefits
                  </h3>

                  <div
                    className="
                      grid
                      md:grid-cols-2

                      gap-4
                    "
                  >
                    {benefits.map(
                      (benefit) => (
                        <div
                          key={
                            benefit.order
                          }
                          className="
                            flex
                            gap-3
                          "
                        >
                          <CheckCircle2
                            className="
                              text-green-600
                              shrink-0
                            "
                            size={20}
                          />

                          <div>
                            <p className="font-semibold">
                              {
                                benefit.title
                              }
                            </p>

                            {benefit.description && (
                              <p
                                className="
                                  text-sm
                                  text-slate-500

                                  mt-1
                                "
                              >
                                {
                                  benefit.description
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Requirements */}

              {requirements.length > 0 && (
                <div
                  className="
                    border
                    border-slate-200

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold

                      mb-5
                    "
                  >
                    Requirements
                  </h3>

                  <div
                    className="
                      space-y-4
                    "
                  >
                    {requirements.map(
                      (requirement) => (
                        <div
                          key={
                            requirement.order
                          }
                          className="
                            flex
                            gap-3
                          "
                        >
                          <span
                            className="
                              h-2
                              w-2

                              rounded-full

                              bg-blue-600

                              mt-2

                              shrink-0
                            "
                          />

                          <div>
                            <p className="font-semibold">
                              {
                                requirement.title
                              }
                            </p>

                            {requirement.description && (
                              <p
                                className="
                                  text-sm
                                  text-slate-500

                                  mt-1
                                "
                              >
                                {
                                  requirement.description
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Curriculum */}

              {sections.length > 0 && (
                <div
                  className="
                    border
                    border-slate-200

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold

                      mb-5
                    "
                  >
                    Curriculum Overview
                  </h3>

                  <div
                    className="
                      space-y-4
                    "
                  >
                    {sections.map(
                      (section) => (
                        <div
                          key={
                            section.order
                          }
                          className="
                            bg-slate-50

                            rounded-2xl

                            p-5
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between

                              gap-4
                            "
                          >
                            <div>
                              <h4 className="font-semibold">
                                {
                                  section.title
                                }
                              </h4>

                              {section.description && (
                                <p
                                  className="
                                    text-sm
                                    text-slate-500

                                    mt-1
                                  "
                                >
                                  {
                                    section.description
                                  }
                                </p>
                              )}
                            </div>

                            <span
                              className="
                                text-xs
                                text-slate-500

                                whitespace-nowrap
                              "
                            >
                              {
                                section.lessons
                                  ?.length ?? 0
                              }{" "}
                              Lessons
                            </span>
                          </div>

                          {section.lessons?.length >
                            0 && (
                            <div
                              className="
                                mt-4
                                space-y-2
                              "
                            >
                              {section.lessons.map(
                                (lesson) => (
                                  <div
                                    key={
                                      lesson.order
                                    }
                                    className="
                                      flex
                                      items-center
                                      justify-between

                                      gap-4

                                      bg-white

                                      rounded-xl

                                      px-4
                                      py-3
                                    "
                                  >
                                    <div
                                      className="
                                        flex
                                        items-center
                                        gap-2
                                      "
                                    >
                                      <BookOpen
                                        size={
                                          15
                                        }
                                      />

                                      <span className="text-sm">
                                        {
                                          lesson.title
                                        }
                                      </span>

                                      {lesson.preview && (
                                        <span
                                          className="
                                            text-xs
                                            text-blue-600
                                            font-medium
                                          "
                                        >
                                          Preview
                                        </span>
                                      )}
                                    </div>

                                    <span
                                      className="
                                        text-xs
                                        text-slate-500

                                        whitespace-nowrap
                                      "
                                    >
                                      {
                                        lesson.duration
                                      }{" "}
                                      min
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* FAQs */}

              {faqs.length > 0 && (
                <div
                  className="
                    border
                    border-slate-200

                    rounded-3xl

                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold

                      mb-5
                    "
                  >
                    Frequently Asked Questions
                  </h3>

                  <div
                    className="
                      space-y-5
                    "
                  >
                    {faqs.map(
                      (faq) => (
                        <div
                          key={faq.order}
                        >
                          <h4 className="font-semibold">
                            {
                              faq.question
                            }
                          </h4>

                          <p
                            className="
                              text-sm
                              text-slate-500

                              mt-2

                              leading-6
                            "
                          >
                            {faq.answer}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right */}

            <div>
              <div
                className="
                  sticky
                  top-0

                  border
                  border-slate-200

                  rounded-3xl

                  p-6

                  bg-slate-50
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Program Summary
                </h3>

                {/* Rating */}

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    mt-5
                  "
                >
                  <Star
                    size={18}
                    fill="currentColor"
                    className="
                      text-yellow-500
                    "
                  />

                  <span
                    className="
                      font-bold
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

                {/* Stats */}

                <div
                  className="
                    mt-6

                    space-y-3
                  "
                >
                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Clock3 size={18} />

                    <div>
                      <p className="text-xs text-slate-500">
                        Duration
                      </p>

                      <p className="font-semibold mt-1">
                        {duration}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Users size={18} />

                    <div>
                      <p className="text-xs text-slate-500">
                        Enrollments
                      </p>

                      <p className="font-semibold mt-1">
                        {students}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4

                      flex
                      items-center
                      gap-3
                    "
                  >
                    <BookOpen size={18} />

                    <div>
                      <p className="text-xs text-slate-500">
                        Curriculum
                      </p>

                      <p className="font-semibold mt-1">
                        {sections.length} Sections
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price */}

                <div
                  className="
                    mt-5

                    bg-gradient-to-r
                    from-blue-50
                    to-indigo-50

                    rounded-2xl

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
                      text-3xl
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
                          text-sm
                          text-slate-400

                          line-through

                          mt-1
                        "
                      >
                        {program.pricing.currency}{" "}
                        {program.pricing.price}
                      </p>
                    )}
                </div>

                {/* Languages */}

                {languages.length > 0 && (
                  <div className="mt-5">
                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Languages
                    </p>

                    <div
                      className="
                        flex
                        flex-wrap

                        gap-2

                        mt-2
                      "
                    >
                      {languages.map(
                        (language) => (
                          <span
                            key={
                              language
                            }
                            className="
                              bg-white

                              border
                              border-slate-200

                              rounded-full

                              px-3
                              py-1

                              text-sm
                            "
                          >
                            {language}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Availability */}

                <div
                  className="
                    mt-6

                    rounded-xl

                    px-4
                    py-3

                    text-center

                    text-sm
                    font-medium
                  "
                >
                  {program.canEnroll ? (
                    <div
                      className="
                        bg-green-50
                        text-green-700

                        rounded-xl

                        py-3
                      "
                    >
                      Enrollment Available
                    </div>
                  ) : (
                    <div
                      className="
                        bg-slate-100
                        text-slate-500

                        rounded-xl

                        py-3
                      "
                    >
                      Enrollment Unavailable
                    </div>
                  )}
                </div>

                                {/* Actions */}

                <div
                  className="
                    mt-6

                    space-y-3
                  "
                >
                  {program.canEnroll ? (
                    <button
                      type="button"
                      className="
                        w-full

                        bg-blue-600
                        hover:bg-blue-700

                        text-white

                        py-3

                        rounded-xl

                        font-medium

                        flex
                        items-center
                        justify-center
                        gap-2

                        transition
                      "
                    >
                      <PlayCircle size={18} />

                      View Program
                    </button>
                  ) : (
                    <div
                      className="
                        w-full

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

                {/* Close Action */}

                <div
                  className="
                    mt-4
                  "
                >
                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      w-full

                      border
                      border-slate-300

                      py-3

                      rounded-xl

                      font-medium

                      hover:bg-slate-100

                      transition
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsModal;