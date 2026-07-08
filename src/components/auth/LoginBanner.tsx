import {
  CheckCircle,
  Users,
  Calendar,
  Star,
  Briefcase,
} from "lucide-react";

const LoginBanner = () => {
  return (
    <div className="relative">

      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
        "
      >
        🚀 For Learners & Mentors
      </span>

      {/* Heading */}

      <h1
        className="
          mt-6
          text-5xl
          lg:text-6xl
          font-bold
          leading-tight
        "
      >
        Welcome Back To

        <span className="block text-blue-600">
          MentorHub
        </span>

      </h1>

      {/* Description */}

      <p
        className="
          mt-6
          text-lg
          text-slate-600
          leading-relaxed
          max-w-xl
        "
      >
        Sign in to book mentorship sessions,
        join premium programs, attend live events,
        or manage your mentorship business.
      </p>

      {/* Features */}

      <div className="mt-10 space-y-4">

        <div className="flex items-center gap-3">

          <CheckCircle
            size={22}
            className="text-green-600"
          />

          <span className="text-slate-700">
            Book One-on-One Mentorship Sessions
          </span>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle
            size={22}
            className="text-green-600"
          />

          <span className="text-slate-700">
            Join Career Programs & Workshops
          </span>

        </div>

        <div className="flex items-center gap-3">

          <CheckCircle
            size={22}
            className="text-green-600"
          />

          <span className="text-slate-700">
            Manage Your Mentor Business
          </span>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-5 mt-12">

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            text-center
            shadow-sm
          "
        >
          <Users
            className="mx-auto text-blue-600"
            size={30}
          />

          <h3 className="text-3xl font-bold mt-4">
            500+
          </h3>

          <p className="text-slate-500 mt-2 text-sm">
            Active Mentors
          </p>

        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            text-center
            shadow-sm
          "
        >
          <Calendar
            className="mx-auto text-green-600"
            size={30}
          />

          <h3 className="text-3xl font-bold mt-4">
            10K+
          </h3>

          <p className="text-slate-500 mt-2 text-sm">
            Sessions Booked
          </p>

        </div>

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-6
            text-center
            shadow-sm
          "
        >
          <Star
            className="mx-auto text-yellow-500"
            size={30}
          />

          <h3 className="text-3xl font-bold mt-4">
            4.9
          </h3>

          <p className="text-slate-500 mt-2 text-sm">
            Average Rating
          </p>

        </div>

      </div>

      {/* Bottom Card */}

      <div
        className="
          mt-10
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          p-8
          text-white
          shadow-xl
        "
      >

        <div className="flex items-center gap-3">

          <Briefcase size={28} />

          <h3 className="text-2xl font-bold">
            Grow Faster With Mentorship
          </h3>

        </div>

        <p className="mt-4 text-blue-100 leading-relaxed">

          Whether you're looking for expert guidance
          or want to become a mentor, MentorHub helps
          professionals connect, learn and grow together.

        </p>

      </div>

    </div>
  );
};

export default LoginBanner;