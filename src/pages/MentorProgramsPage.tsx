import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  Clock3,
  Users,
  Star,
} from "lucide-react";

import {
  getMentorBySlug,
  type MentorApiResponse,
} from "@/services/mentor.service";

import {
  getPublishedPrograms,
  type Program,
} from "@/services/program.service";

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

const MentorProgramsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [
    mentor,
    setMentor,
  ] = useState<MentorApiResponse | null>(
    null
  );

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
    const fetchMentorPrograms = async () => {
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
         * The public mentor URL uses the mentor slug.
         *
         * Fetch the actual mentor first so we can
         * identify the correct Mentor._id.
         */
        const mentorResponse =
          await getMentorBySlug(id);

        const currentMentor =
          mentorResponse.data;

        setMentor(
          currentMentor
        );

        /*
         * Fetch all publicly published programs.
         */
        const programsResponse =
          await getPublishedPrograms();

        /*
         * Only show programs owned by
         * the current mentor.
         */
        const mentorPrograms =
          programsResponse.data.filter(
            (program) =>
              String(program.mentorId) ===
              String(currentMentor.id)
          );

        setPrograms(
          mentorPrograms
        );
      } catch (err) {
        console.error(
          "Failed to load mentor programs:",
          err
        );

        setError(
          "Failed to load mentor programs."
        );

        setMentor(null);

        setPrograms([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentorPrograms();
  }, [id]);

  /*
   * Calculate values used by the existing UI
   * from backend Program data.
   */
  const programStats =
    useMemo(() => {
      const ratings =
        programs
          .map(
            (program) =>
              program.analytics?.averageRating ??
              0
          )
          .filter(
            (rating) => rating > 0
          );

      const averageRating =
        ratings.length > 0
          ? ratings.reduce(
              (total, rating) =>
                total + rating,
              0
            ) / ratings.length
          : 0;

      return {
        count: programs.length,
        averageRating,
      };
    }, [programs]);

  if (isLoading) {
    return (
      <section className="py-32 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <div className="text-5xl mb-4">
            ⏳
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Loading Programs...
          </h1>

          <p className="mt-4 text-slate-500">
            Please wait while we load the mentor's coaching programs.
          </p>

        </div>
      </section>
    );
  }

  if (error || !mentor) {
    return (
      <section className="py-32 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Mentor Not Found
          </h1>

          <p className="mt-4 text-slate-500">
            {error ||
              "Unable to find this mentor."}
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/mentors")
            }
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            <ArrowLeft size={18} />

            Back to Mentors
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        {/* Back Button */}

        <Link
          to={`/mentors/${id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <ArrowLeft size={18} />

          Back to Profile
        </Link>

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
            All Programs
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
           {mentor.name}'s Coaching Programs
          </h1>

          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            Explore every coaching program offered by this mentor
            and choose the learning journey that best fits your
            career goals.
          </p>

        </div>

        {/* Empty State */}

        {programs.length === 0 ? (
          <div className="mt-14 bg-white border border-slate-200 rounded-3xl p-12 text-center">

            <div className="text-5xl mb-5">
              📚
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              No Programs Available
            </h2>

            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              This mentor has not published any coaching
              programs yet.
            </p>

          </div>
        ) : (
          <>
            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-5 mt-10 mb-12">

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-bold text-blue-600">
                  {programStats.count}
                </h3>

                <p className="text-slate-500">
                  Coaching Programs
                </p>

              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-bold text-green-600">
                  {programStats.averageRating > 0
                    ? programStats.averageRating.toFixed(
                        1
                      )
                    : "—"}
                </h3>

                <p className="text-slate-500">
                  Average Rating
                </p>

              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-bold text-purple-600">
                  100%
                </h3>

                <p className="text-slate-500">
                  Career Focused
                </p>

              </div>

            </div>

            {/* Grid */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14">

              {programs.map(
                (program) => {

                  const displayDuration =
                    `${program.duration} ${program.durationUnit}`;

                  const displayStudents =
                    program.analytics?.enrollments ??
                    0;

                  const displayRating =
                    program.analytics?.averageRating ??
                    0;

                  const displayReviews =
                    program.analytics?.totalReviews ??
                    0;

                  const displayPrice =
                    program.isFree
                      ? 0
                      : program.finalPrice ??
                        program.pricing?.discountPrice ??
                        program.pricing?.price ??
                        0;

                  return (
                    <div
                      key={program.id}
                      className="
                        bg-white
                        border
                        border-slate-200
                        rounded-3xl
                        overflow-hidden
                        shadow-sm
                        hover:border-blue-200
                        hover:-translate-y-2
                        hover:shadow-xl
                        transition-all
                        duration-300
                      "
                    >

                      {/* Image */}

                      <div className="relative h-52">

                        <img
                          src={
                            program.thumbnail?.url ||
                            PROGRAM_DUMMY_IMAGE
                          }
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

                        <div className="absolute inset-0 bg-black/40" />

                        <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {program.level}
                        </span>

                        {program.isFeatured && (
                          <span className="absolute top-4 right-4 bg-white text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                            🔥 Featured
                          </span>
                        )}

                      </div>

                      {/* Content */}

                      <div className="p-6">

                        <h2 className="text-2xl font-bold leading-snug">
                          {program.title}
                        </h2>

                        <div className="flex items-center justify-between mt-5 bg-slate-50 rounded-xl p-3">

                          <div className="flex items-center gap-2">

                            <Clock3 size={18} />

                            <span>
                              {displayDuration}
                            </span>

                          </div>

                          <div className="flex items-center gap-2">

                            <Users size={18} />

                            <span>
                              {displayStudents}+ Students
                            </span>

                          </div>

                        </div>

                        <div className="inline-flex items-center gap-1 mt-5 bg-yellow-50 border border-yellow-100 px-3 py-2 rounded-full">

                          <Star
                            size={16}
                            fill="currentColor"
                            className="text-yellow-500"
                          />

                          <span>
                            {displayRating > 0
                              ? `${displayRating.toFixed(
                                  1
                                )} Rating`
                              : "No Rating Yet"}
                          </span>

                        </div>

                        {displayRating > 0 && (
                          <p className="text-sm text-slate-500 mt-2">
                            {displayReviews} Reviews
                          </p>
                        )}

                        <div className="mt-6">

                          <p className="text-sm text-slate-500">
                            Program Fee
                          </p>

                          <h3 className="text-4xl font-bold text-blue-600 leading-none">

                            {program.isFree
                              ? "Free"
                              : `$${displayPrice}`}

                          </h3>

                        </div>

                        <div className="space-y-2 mt-6 text-sm text-slate-600">

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
                            ✅ Community Access
                          </p>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            navigate(
                              `/program/${program.slug}`
                            )
                          }
                          className="
                            mt-8
                            w-full
                            flex
                            justify-center
                            bg-blue-600
                            text-white
                            py-3
                            rounded-xl
                            font-semibold
                            hover:bg-blue-700
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                          "
                        >
                          Preview Program
                        </button>

                      </div>

                    </div>
                  );
                }
              )}

            </div>
          </>
        )}

        <div className="mt-16 border-t border-slate-200 pt-10 text-center">

          <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>

          <h3 className="text-3xl font-bold">
            Personalized Learning Journeys
          </h3>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Every coaching program is carefully designed to provide
            practical guidance, structured learning, and real-world
            strategies that help professionals achieve their career goals.
          </p>

        </div>

      </div>

    </section>
  );
};

export default MentorProgramsPage;