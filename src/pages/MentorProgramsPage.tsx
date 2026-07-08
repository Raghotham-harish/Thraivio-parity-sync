import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock3, Users, Star } from "lucide-react";

import { mentors } from "@/data/mentors";

const MentorProgramsPage = () => {
  const { id } = useParams();

  const mentor = mentors.find(
    (item) => item.id === Number(id)
  );

  if (!mentor) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">
          Mentor Not Found
        </h1>

        <p className="mt-4 text-slate-500">
          Unable to find this mentor.
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* Back Button */}

        <Link
          to={`/mentor/${mentor.id}`}
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

        <div className="grid md:grid-cols-3 gap-5 mt-10 mb-12">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-blue-600">
      {mentor.programs.length}
    </h3>
    <p className="text-slate-500">
      Coaching Programs
    </p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-green-600">
      4.9
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

          {mentor.programs.map((program) => (

            <div
              key={program.title}
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                  alt={program.title}
                  className="
w-full
h-full
object-cover
transition-transform
duration-500
hover:scale-105
"
                />

                <div className="absolute inset-0 bg-black/40" />

                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">

                  {program.level}

                </span>

              </div>

              {/* Content */}

              <div className="p-6">

                <h2 className="text-2xl font-bold leading-snug">

                  {program.title}

                </h2>

                <div className="flex items-center justify-between mt-5 bg-slate-50 rounded-xl p-3">

                  <div className="flex items-center gap-2">

                    <Clock3 size={18} />

                    {program.duration}

                  </div>

                  <div className="flex items-center gap-2">

                    <Users size={18} />

                    {program.students}+ Students

                  </div>

                </div>

                <div className="inline-flex items-center gap-1 mt-5 bg-yellow-50 border border-yellow-100 px-3 py-2 rounded-full">
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-yellow-500"
                  />

                  <span>

                    4.9 Rating

                  </span>

                </div>

                <div className="mt-6">

                  <p className="text-sm text-slate-500">
                    Program Fee
                  </p>

                  <h3 className="text-4xl font-bold text-blue-600 leading-none">

                    ${program.price}

                  </h3>

                </div>

                <div className="space-y-2 mt-6 text-sm text-slate-600">
                  <p>✅ Weekly Live Sessions</p>

                  <p>✅ Resume Review</p>

                  <p>✅ Mock Interviews</p>

                  <p>✅ Community Access</p>

                </div>

                <a
                  href={mentor.bookingLink}
                  target="_blank"
                  rel="noreferrer"
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
                  Enroll Now
                </a>

              </div>

            </div>

          ))}

        </div>

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