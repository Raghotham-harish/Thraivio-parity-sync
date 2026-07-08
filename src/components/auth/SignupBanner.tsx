import {
  CheckCircle,
  Users,
  Calendar,
  Star,
  GraduationCap,
} from "lucide-react";

const SignupBanner = () => {
  return (
    <div className="relative">

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
        🌟 Join Our Community
      </span>

      <h1
        className="
          mt-6
          text-5xl
          lg:text-6xl
          font-bold
          leading-tight
        "
      >
        Learn, Grow &

        <span className="block text-blue-600">
          Mentor Others
        </span>

      </h1>

      <p
        className="
          mt-6
          text-lg
          text-slate-600
          leading-relaxed
          max-w-xl
        "
      >
        Join thousands of learners and mentors
        who are accelerating careers through
        expert guidance, programs and events.
      </p>

      {/* Features */}

      <div className="mt-10 space-y-4">

        <div className="flex items-center gap-3">
          <CheckCircle
            size={22}
            className="text-green-600"
          />
          <span>
            Access Top Industry Mentors
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle
            size={22}
            className="text-green-600"
          />
          <span>
            Join Exclusive Programs
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle
            size={22}
            className="text-green-600"
          />
          <span>
            Become A Mentor & Earn
          </span>
        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-5 mt-12">

        <div className="bg-white border rounded-3xl p-6 text-center">

          <Users
            size={30}
            className="mx-auto text-blue-600"
          />

          <h3 className="text-3xl font-bold mt-4">
            500+
          </h3>

          <p className="text-slate-500 text-sm mt-2">
            Active Mentors
          </p>

        </div>

        <div className="bg-white border rounded-3xl p-6 text-center">

          <Calendar
            size={30}
            className="mx-auto text-green-600"
          />

          <h3 className="text-3xl font-bold mt-4">
            10K+
          </h3>

          <p className="text-slate-500 text-sm mt-2">
            Sessions
          </p>

        </div>

        <div className="bg-white border rounded-3xl p-6 text-center">

          <Star
            size={30}
            className="mx-auto text-yellow-500"
          />

          <h3 className="text-3xl font-bold mt-4">
            4.9
          </h3>

          <p className="text-slate-500 text-sm mt-2">
            Rating
          </p>

        </div>

      </div>

      {/* Bottom Banner */}

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

          <GraduationCap size={28} />

          <h3 className="text-2xl font-bold">
            Start Your Growth Journey
          </h3>

        </div>

        <p className="mt-4 text-blue-100">

          Whether you're looking to learn from
          experts or share your expertise,
          MentorHub helps you achieve more.

        </p>

      </div>

    </div>
  );
};

export default SignupBanner;