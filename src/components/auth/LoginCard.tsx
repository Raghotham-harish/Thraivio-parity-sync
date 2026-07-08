import { Link } from "react-router-dom";

import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        shadow-2xl
        overflow-hidden
      "
    >
      {/* Top Accent */}

      <div className="h-1 bg-blue-600 w-full" />

      <div className="p-8 lg:p-10">

        {/* Header */}

        <div className="text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            🔐 Secure Login
          </span>

          <h2 className="mt-5 text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="mt-3 text-slate-500 leading-relaxed">
            Sign in to continue your mentorship
            journey, manage bookings, access
            programs and connect with professionals.
          </p>

        </div>

        {/* Social Login */}

        <div className="mt-8">

          <SocialLogin />

        </div>

        {/* Divider */}

        <div className="relative my-8">

          <div className="absolute inset-0 flex items-center">

            <div className="w-full border-t border-slate-200" />

          </div>

          <div className="relative flex justify-center">

            <span
              className="
                bg-white
                px-4
                text-sm
                text-slate-500
              "
            >
              OR CONTINUE WITH EMAIL
            </span>

          </div>

        </div>

        {/* Login Form */}

        <LoginForm />

        {/* Footer */}

        <div className="mt-8 text-center">

          <p className="text-slate-500">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="
                font-semibold
                text-blue-600
                hover:text-blue-700
                hover:underline
              "
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default LoginCard;