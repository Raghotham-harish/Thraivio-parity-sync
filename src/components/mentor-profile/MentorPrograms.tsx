import "swiper/css";
import "swiper/css/pagination";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import {
  ArrowRight,
  Clock3,
  Users,
  Star,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getMentorBySlug,
} from "@/services/mentor.service";

import {
  getPublishedPrograms,
  type Program,
} from "@/services/program.service";

interface MentorProgramsProps {
  mentor: {
    bookingLink: string;
    programs: {
      title: string;
      duration: string;
      students: number;
      price: number;
      level: string;
    }[];
  };
}

/*
 * Temporary dummy image.
 *
 * This image is used only when a program does not
 * have a thumbnail image from the backend yet.
 *
 * Later, when real program thumbnails are uploaded,
 * the backend thumbnail URL will automatically be used.
 */
const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

const MentorPrograms = ({
  mentor,
}: MentorProgramsProps) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [
    programs,
    setPrograms,
  ] = useState<Program[]>([]);

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    const fetchPrograms = async () => {
      if (!id) {
        setError(
          "Mentor ID is missing."
        );

        setIsLoading(false);

        return;
      }

      try {
        setIsLoading(true);

        setError("");

        /*
         * The Mentor Profile URL uses the mentor slug.
         *
         * First get the actual mentor from the backend
         * so we can identify the correct Mentor._id.
         */
        const mentorResponse =
          await getMentorBySlug(id);

        const currentMentorId =
          mentorResponse.data.id;

        /*
         * Fetch publicly published programs.
         */
        const programsResponse =
          await getPublishedPrograms();

        /*
         * Only show programs owned by the
         * current mentor.
         */
        const mentorPrograms =
          programsResponse.data.filter(
            (program) =>
              String(program.mentorId) ===
              String(currentMentorId)
          );

        setPrograms(
          mentorPrograms
        );
      } catch (err) {
        console.error(
          "Failed to fetch mentor programs:",
          err
        );

        setError(
          "Failed to load mentor programs."
        );

        setPrograms([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrograms();
  }, [id]);

  /*
   * Convert backend Program data into values
   * used by the existing UI.
   */
  const displayPrograms =
    useMemo(() => {
      return programs.map(
        (program) => ({
          ...program,

          displayDuration:
            `${program.duration} ${program.durationUnit}`,

          displayStudents:
            program.analytics?.enrollments ??
            0,

          displayPrice:
            program.isFree
              ? 0
              : program.finalPrice ??
                program.pricing?.discountPrice ??
                program.pricing?.price ??
                0,

          displayRating:
            program.analytics?.averageRating ??
            0,

          displayReviews:
            program.analytics?.totalReviews ??
            0,
        })
      );
    }, [programs]);

  return (
    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          {/* Heading */}

          <div className="text-center">

            <span
              className="
                inline-block
                bg-blue-50
                border
                border-blue-200
                text-blue-700
                px-4
                py-1
                rounded-lg
                text-sm
                font-medium
              "
            >
              Premium Programs
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Structured Coaching Programs
            </h2>

            <p className="text-slate-600 leading-7 mt-3 max-w-2xl mx-auto">
              Join mentor-led learning experiences designed
              to accelerate your career and help you achieve
              measurable results faster.
            </p>

          </div>

          {/* Loading */}

          {isLoading && (
            <div className="mt-10 py-16 text-center">

              <div className="text-4xl mb-4">
                ⏳
              </div>

              <p className="text-slate-500">
                Loading programs...
              </p>

            </div>
          )}

          {/* Error */}

          {!isLoading &&
            error && (
              <div className="mt-10 py-16 text-center">

                <p className="text-slate-500">
                  {error}
                </p>

              </div>
            )}

          {/* Empty */}

          {!isLoading &&
            !error &&
            displayPrograms.length === 0 && (
              <div className="mt-10 py-16 text-center">

                <div className="text-4xl mb-4">
                  📚
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  No Programs Available
                </h3>

                <p className="mt-2 text-slate-500">
                  This mentor has not published any
                  coaching programs yet.
                </p>

              </div>
            )}

          {/* Slider */}

          {!isLoading &&
            !error &&
            displayPrograms.length > 0 && (
              <Swiper
                modules={[
                  Pagination,
                  Autoplay,
                ]}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}
                touchStartPreventDefault={false}
                preventClicks={false}
                preventClicksPropagation={false}
                resistanceRatio={0.85}
                loop={
                  displayPrograms.length > 1
                }
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                  },

                  1024: {
                    slidesPerView: 2.2,
                  },

                  1280: {
                    slidesPerView: 2.7,
                  },
                }}
                className="mt-10 pb-12"
              >

                {displayPrograms.map(
                  (program) => (

                    <SwiperSlide
                      key={program.id}
                    >

                      <div
                        className="
                          group
                          bg-white
                          rounded-2xl
                          border
                          border-slate-200
                          overflow-hidden
                          hover:shadow-md
                          transition-all
                          duration-300
                        "
                      >

                        {/* Banner */}

                        <div className="relative h-48">

                          <img
                            src={
                              program.thumbnail?.url ||
                              PROGRAM_DUMMY_IMAGE
                            }
                            alt={
                              program.thumbnail?.alt ||
                              `${program.title} program`
                            }
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                            onError={(event) => {
                              const image =
                                event.currentTarget;

                              if (
                                image.src !==
                                PROGRAM_DUMMY_IMAGE
                              ) {
                                image.src =
                                  PROGRAM_DUMMY_IMAGE;
                              }
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                          <span
                            className="
                              absolute
                              top-4
                              left-4
                              bg-white
                              px-3
                              py-1
                              rounded-lg
                              text-slate-700
                              text-xs
                              font-semibold
                            "
                          >
                            {program.level}
                          </span>

                          {program.isFeatured && (
                            <span
                              className="
                                absolute
                                top-4
                                right-4
                                bg-blue-600
                                text-white
                                px-3
                                py-1
                                rounded-lg
                                text-xs
                                font-semibold
                              "
                            >
                              🔥 Best Seller
                            </span>
                          )}

                          <div className="absolute bottom-5 left-5 text-white">

                            <p className="text-xs uppercase tracking-wider">
                              Career Accelerator
                            </p>

                            <h3 className="text-2xl font-bold mt-1">
                              {program.title}
                            </h3>

                          </div>

                        </div>

                        {/* Content */}

                        <div className="p-6">

                          <div className="flex items-center justify-between">

                            <div className="flex items-center gap-2 text-slate-600">

                              <Clock3 size={18} />

                              <span>
                                {
                                  program.displayDuration
                                }
                              </span>

                            </div>

                            <div className="flex items-center gap-2 text-slate-600">

                              <Users size={18} />

                              <span>
                                {
                                  program.displayStudents
                                }+ Students
                              </span>

                            </div>

                          </div>

                          <div className="flex items-center gap-1 mt-4">

                            <Star
                              size={16}
                              fill="currentColor"
                              className="text-yellow-500"
                            />

                            <Star
                              size={16}
                              fill="currentColor"
                              className="text-yellow-500"
                            />

                            <Star
                              size={16}
                              fill="currentColor"
                              className="text-yellow-500"
                            />

                            <Star
                              size={16}
                              fill="currentColor"
                              className="text-yellow-500"
                            />

                            <Star
                              size={16}
                              fill="currentColor"
                              className="text-yellow-500"
                            />

                            <span className="ml-2 text-sm text-slate-500">
                              {program.displayRating > 0
                                ? `${program.displayRating.toFixed(
                                    1
                                  )} (${program.displayReviews} Reviews)`
                                : "No Reviews Yet"}
                            </span>

                          </div>

                          <div className="mt-6">

                            <p className="text-sm text-slate-500">
                              Program Fee
                            </p>

                            <h2 className="text-4xl font-bold text-slate-900 mt-1">
                              {program.isFree
                                ? "Free"
                                : `$${program.displayPrice}`}
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                              Flexible payment options available
                            </p>

                          </div>

                          <div className="mt-6 space-y-2 text-sm text-slate-600">

                            <p>
                              ✅ Weekly Live Sessions
                            </p>

                            <p>
                              ✅ Resume Review
                            </p>

                            <p>
                              ✅ Mock Interviews
                            </p>

                            <p>
                              ✅ Priority Community Access
                            </p>

                          </div>

                          <div
                            className="
                              mt-6
                              flex
                              items-center
                              justify-between
                              rounded-2xl
                              bg-slate-50
                              border
                              border-slate-200
                              p-4
                            "
                          >

                            <div>

                              <p className="text-sm text-slate-500">
                                Seats Remaining
                              </p>

                              <p className="font-semibold text-slate-900">
                                Only 8 Spots Left
                              </p>

                            </div>

                            <span
                              className="
                                bg-blue-50
                                text-blue-700
                                px-3
                                py-1
                                rounded-lg
                                text-xs
                                font-semibold
                              "
                            >
                              Limited
                            </span>

                          </div>

                          {/* Buttons */}

                          <div className="grid grid-cols-2 gap-3 mt-6">

                            <button
                              type="button"
                              onClick={() =>
                                navigate(
                                  `/program/${program.slug}`
                                )
                              }
                              className="
                                border
                                border-blue-600
                                text-blue-600
                                py-3
                                rounded-lg
                                font-medium
                                hover:bg-blue-600
                                hover:text-white
                                hover:shadow-sm
                                transition
                              "
                            >
                              Preview Program
                            </button>

                            <a
                              href={
                                mentor.bookingLink
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="
                                bg-blue-600
                                text-white
                                rounded-lg
                                py-3
                                font-medium
                                flex
                                items-center
                                justify-center
                                gap-2
                                hover:bg-blue-700
                                hover:shadow-sm
                                transition
                              "
                            >
                              Enroll Today

                              <ArrowRight
                                size={18}
                              />

                            </a>

                          </div>

                        </div>

                      </div>

                    </SwiperSlide>

                  )
                )}

              </Swiper>
            )}

          {/* View All Programs */}

          <div className="mt-14 text-center">

            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
              Want to Explore More Programs?
            </h3>

            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Browse all coaching programs offered by this mentor in one
              dedicated place. Compare options and find the perfect
              learning path for your goals.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate(
                  `/mentor/${id}/programs`
                )
              }
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                bg-blue-600
                text-white
                px-8
                py-4
                rounded-lg
                font-semibold
                hover:bg-blue-700
                transition
                duration-300
                hover:shadow-sm
              "
            >
              View All Programs

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MentorPrograms;