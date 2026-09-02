import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

import { forgotPassword } from "@/services/auth.service";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!validateEmail()) return;

    try {
      setLoading(true);

      const response = await forgotPassword(
        email.trim()
      );

      if (!response.success) {
        throw new Error(
          response.message ||
            "Unable to process your request."
        );
      }

      setSuccess(
        response.message ||
          "If an account exists with this email, a password reset link has been sent."
      );

      setEmail("");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-indigo-50
        flex
        items-center
        justify-center
        px-4
        py-20
      "
    >
      {/* Background Blur Effects */}

      <div
        className="
          absolute
          -top-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-blue-300
          opacity-20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-indigo-300
          opacity-20
          blur-3xl
        "
      />

      {/* Card */}

      <div
        className="
          relative
          w-full
          max-w-md
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

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-100
                text-blue-600
              "
            >
              <Mail size={28} />
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Forgot Password?
            </h1>

            <p className="mt-3 text-slate-500 leading-relaxed">
              Enter your email address and we'll
              send you a link to reset your password.
            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter your email"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  px-4
                  py-3
                  outline-none
                  transition-all
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  disabled:opacity-70
                "
              />
            </div>

            {/* Success */}

            {success && (
              <div
                className="
                  rounded-xl
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-3
                  text-sm
                  text-green-700
                "
              >
                {success}
              </div>
            )}

            {/* Error */}

            {error && (
              <div
                className="
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  px-4
                  py-3
                  text-sm
                  text-red-600
                "
              >
                {error}
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3.5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-700
                hover:shadow-xl
                cursor-pointer
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading
                ? "Sending..."
                : "Send Reset Link"}
            </button>
          </form>

          {/* Back to Login */}

          <div className="mt-8 text-center">

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-blue-600
                hover:text-blue-700
                hover:underline
                cursor-pointer
              "
            >
              <ArrowLeft size={18} />
              Back to Login
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;